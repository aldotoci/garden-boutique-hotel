"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import DataTable, { type TableColumn } from "react-data-table-component";
import AdminBookingCalendar from "@/components/AdminBookingCalendar";
import { BOOKING_STATUSES } from "@/lib/bookingTypes";
import {
  ROOM_TYPES,
  type RoomTypeSlug,
  resolveRoomTypeSlug,
} from "@/lib/roomInventory";

type BookingStatus = (typeof BOOKING_STATUSES)[number];

interface Booking {
  id: string;
  guestName: string;
  email: string;
  phone: string;
  room: string;
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  source: string;
  status: BookingStatus;
  createdAt: string;
}

const statusBadgeClass: Record<BookingStatus, string> = {
  Pending: "badge bg-warning text-dark",
  Confirmed: "badge bg-primary",
  Rejected: "badge bg-danger",
  "Checked-in": "badge bg-success",
  "Checked-out": "badge bg-secondary",
};

/** Solid button classes when a status filter tile is selected */
const statusFilterActiveClass: Record<BookingStatus, string> = {
  Pending: "btn-warning text-dark",
  Confirmed: "btn-primary",
  Rejected: "btn-danger",
  "Checked-in": "btn-success",
  "Checked-out": "btn-secondary",
};

function statusForAction(action: "accept" | "reject" | "checkIn" | "checkOut"): BookingStatus {
  if (action === "accept") return "Confirmed";
  if (action === "reject") return "Rejected";
  if (action === "checkIn") return "Checked-in";
  return "Checked-out";
}

export default function AdminDashboard() {
  const router = useRouter();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [roomTypeFilter, setRoomTypeFilter] = useState<"" | RoomTypeSlug>("");
  const [statusFilter, setStatusFilter] = useState<"" | BookingStatus>("");

  const dashboardStats = useMemo(() => {
    const pending = bookings.filter((booking) => booking.status === "Pending").length;
    const today = new Date().toISOString().slice(0, 10);
    const arrivalsToday = bookings.filter((booking) => booking.checkIn === today).length;
    const inHouse = bookings.filter((booking) => booking.status === "Checked-in").length;
    return { pending, arrivalsToday, inHouse };
  }, [bookings]);

  const bookingCountByRoomType = useMemo(() => {
    const counts: Record<RoomTypeSlug, number> = {
      "executive-suite": 0,
      "junior-suite": 0,
      "triple-room": 0,
      "twin-room": 0,
      "standard-double": 0,
    };
    for (const booking of bookings) {
      const slug = resolveRoomTypeSlug(booking.room);
      if (slug) counts[slug] += 1;
    }
    return counts;
  }, [bookings]);

  const bookingCountByStatus = useMemo(() => {
    const counts: Record<BookingStatus, number> = {
      Pending: 0,
      Confirmed: 0,
      Rejected: 0,
      "Checked-in": 0,
      "Checked-out": 0,
    };
    for (const booking of bookings) {
      if (booking.status in counts) {
        counts[booking.status] += 1;
      }
    }
    return counts;
  }, [bookings]);

  useEffect(() => {
    const loadBookings = async () => {
      try {
        const response = await fetch("/api/bookings");
        if (response.status === 401) {
          router.replace("/admin/login");
          return;
        }
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data?.error || "Unable to fetch bookings.");
        }
        setBookings(Array.isArray(data?.bookings) ? data.bookings : []);
      } catch (fetchError) {
        setError(fetchError instanceof Error ? fetchError.message : "Unable to fetch bookings.");
      } finally {
        setIsLoading(false);
      }
    };

    loadBookings();
  }, [router]);

  const updateBookingStatus = async (
    bookingId: string,
    action: "accept" | "reject" | "checkIn" | "checkOut",
  ) => {
    const nextStatus = statusForAction(action);

    setBookings((currentBookings) => {
      return currentBookings.map((booking) =>
        booking.id === bookingId ? { ...booking, status: nextStatus } : booking,
      );
    });

    try {
      const response = await fetch(`/api/bookings/${bookingId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: nextStatus }),
      });

      if (!response.ok) {
        throw new Error("Could not update booking status.");
      }
    } catch {
      setError("Could not save status update. Please refresh.");
    }
  };

  const filteredBookings = useMemo(() => {
    let list = bookings;

    if (roomTypeFilter) {
      list = list.filter(
        (booking) => resolveRoomTypeSlug(booking.room) === roomTypeFilter,
      );
    }

    if (statusFilter) {
      list = list.filter((booking) => booking.status === statusFilter);
    }

    const value = search.trim().toLowerCase();
    if (!value) return list;

    return list.filter((booking) => {
      return (
        booking.guestName.toLowerCase().includes(value) ||
        booking.email.toLowerCase().includes(value) ||
        booking.room.toLowerCase().includes(value) ||
        booking.status.toLowerCase().includes(value) ||
        booking.id.toLowerCase().includes(value)
      );
    });
  }, [bookings, search, roomTypeFilter, statusFilter]);

  const activeFilterSummary = useMemo(() => {
    const parts: string[] = [];
    if (roomTypeFilter) {
      const label = ROOM_TYPES.find((t) => t.slug === roomTypeFilter)?.label ?? roomTypeFilter;
      parts.push(`Room · ${label}`);
    }
    if (statusFilter) parts.push(`Status · ${statusFilter}`);
    if (search.trim()) parts.push(`Search · “${search.trim()}”`);
    return parts;
  }, [roomTypeFilter, statusFilter, search]);

  const hasActiveFilters = activeFilterSummary.length > 0;

  const clearAllFilters = () => {
    setRoomTypeFilter("");
    setStatusFilter("");
    setSearch("");
  };

  const columns: TableColumn<Booking>[] = [
      {
        name: "Booking",
        sortable: true,
        cell: (booking) => (
          <div className="py-2">
            <strong>{booking.guestName}</strong>
            <p className="mb-0 text-muted font-sm">
              {booking.id} - {booking.room} - {booking.source}
            </p>
          </div>
        ),
      },
      {
        name: "Stay",
        sortable: true,
        sortFunction: (a, b) => a.checkIn.localeCompare(b.checkIn),
        cell: (booking) => (
          <div className="py-2">
            {booking.checkIn} to {booking.checkOut}
            <p className="mb-0 text-muted font-sm">
              {booking.adults} adults - {booking.children} children
            </p>
          </div>
        ),
      },
      {
        name: "Guest Contact",
        sortable: true,
        selector: (booking) => booking.email,
        cell: (booking) => (
          <div className="py-2">
            {booking.email}
            {booking.phone && <p className="mb-0 text-muted font-sm">{booking.phone}</p>}
          </div>
        ),
      },
      {
        name: "Status",
        sortable: true,
        selector: (booking) => booking.status,
        cell: (booking) => (
          <span className={statusBadgeClass[booking.status]}>{booking.status}</span>
        ),
      },
      {
        name: "Actions",
        right: true,
        cell: (booking) => (
          <div className="d-inline-flex flex-wrap gap-2 justify-content-end py-2">
            {booking.status === "Pending" && (
              <>
                <button
                  className="btn btn-sm btn-success"
                  onClick={() => updateBookingStatus(booking.id, "accept")}
                  type="button"
                >
                  Accept
                </button>
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => updateBookingStatus(booking.id, "reject")}
                  type="button"
                >
                  Reject
                </button>
              </>
            )}

            {booking.status === "Confirmed" && (
              <button
                className="btn btn-sm btn-outline-primary"
                onClick={() => updateBookingStatus(booking.id, "checkIn")}
                type="button"
              >
                Check In
              </button>
            )}

            {booking.status === "Checked-in" && (
              <button
                className="btn btn-sm btn-outline-secondary"
                onClick={() => updateBookingStatus(booking.id, "checkOut")}
                type="button"
              >
                Check Out
              </button>
            )}
          </div>
        ),
      },
    ];

  return (
    <div className="admin-dashboard w-100">
      <div className="container-fluid px-3 px-lg-4 py-4">
        <header className="mb-4 pb-3 border-bottom border-dark border-opacity-10">
          <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-md-between gap-3">
            <div>
              <p className="small text-muted text-uppercase fw-semibold mb-1" style={{ letterSpacing: "0.08em" }}>
                Overview
              </p>
              <h1 className="admin-dashboard__title h3 mb-0">Dashboard</h1>
              <p className="text-muted small mb-0 mt-2">
                Review requests, filter by room and status, then confirm or update stays.
              </p>
            </div>
            <div className="text-md-end">
              <span className="d-block small text-muted">Dataset</span>
              <span className="fw-semibold" style={{ fontVariantNumeric: "tabular-nums" }}>
                {filteredBookings.length} of {bookings.length} bookings visible
              </span>
            </div>
          </div>
        </header>

        <div className="row g-3 g-xl-4 mb-4">
          <div className="col-sm-6 col-xl-3">
            <div className="card admin-stat-card h-100 border-0 shadow-none">
              <div className="card-body py-3 px-3">
                <p className="admin-stat-label mb-0">Pending requests</p>
                <p className="admin-stat-value h3 mb-0 mt-1">{dashboardStats.pending}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3">
            <div className="card admin-stat-card h-100 border-0 shadow-none">
              <div className="card-body py-3 px-3">
                <p className="admin-stat-label mb-0">Arrivals today</p>
                <p className="admin-stat-value h3 mb-0 mt-1">{dashboardStats.arrivalsToday}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3">
            <div className="card admin-stat-card h-100 border-0 shadow-none">
              <div className="card-body py-3 px-3">
                <p className="admin-stat-label mb-0">Guests in-house</p>
                <p className="admin-stat-value h3 mb-0 mt-1">{dashboardStats.inHouse}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3">
            <div className="card admin-stat-card h-100 border-0 shadow-none">
              <div className="card-body py-3 px-3">
                <p className="admin-stat-label mb-0">Total bookings</p>
                <p className="admin-stat-value h3 mb-0 mt-1">{bookings.length}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-3 g-xl-4 align-items-stretch">
          <div className="col-lg-8 d-flex flex-column gap-3 gap-xl-4">
            <div className="card admin-dashboard-card border-0 shadow-none">
              <div className="card-header">
                <h2 className="h6 mb-0 fw-semibold">Filters</h2>
                <p className="small text-muted mb-0 mt-1">
                  Narrow the list and calendar; filters combine together.
                </p>
              </div>
              <div className="card-body">
                <div className="admin-dashboard-section">
                  <p className="admin-dashboard-section__label mb-0">Room type</p>
                  <p className="admin-dashboard-section__hint">
                    Inventory on property is shown on each tile. Click to filter the table.
                  </p>
                  <div className="row g-2 g-md-3">
                    <div className="col-6 col-sm-4 col-xl-2">
                      <button
                        type="button"
                        className={`admin-room-filter-tile w-100 h-100 text-start rounded-3 py-3 px-3 shadow-sm transition-all ${
                          roomTypeFilter === ""
                            ? "btn btn-dark"
                            : "btn btn-outline-dark bg-white hover:bg-dark hover:text-white"
                        }`}
                        onClick={() => setRoomTypeFilter("")}
                        aria-pressed={roomTypeFilter === ""}
                        aria-label={`Show all room types, ${bookings.length} bookings`}
                        title="Show all bookings in the table"
                      >
                        <span className="d-flex align-items-start justify-content-between gap-2">
                          <span className="d-block fw-semibold small">All types</span>
                          <span
                            className={`badge rounded-pill flex-shrink-0 align-self-center font-xs fw-normal ${
                              roomTypeFilter === ""
                                ? "text-bg-light text-dark"
                                : "text-bg-secondary"
                            }`}
                          >
                            Filter
                          </span>
                        </span>
                        <span
                          className={`d-block small mt-2 ${
                            roomTypeFilter === "" ? "text-white-50" : "text-secondary"
                          }`}
                        >
                          {bookings.length} booking{bookings.length === 1 ? "" : "s"}
                        </span>
                      </button>
                    </div>
                    {ROOM_TYPES.map((t) => {
                      const n = bookingCountByRoomType[t.slug];
                      const active = roomTypeFilter === t.slug;
                      const unit = t.inventory === 1 ? "room" : "rooms";
                      const bookingWord = n === 1 ? "1 booking" : `${n} bookings`;
                      return (
                        <div key={t.slug} className="col-6 col-sm-4 col-xl-2">
                          <button
                            type="button"
                            className={`admin-room-filter-tile w-100 h-100 text-start rounded-3 py-3 px-3 shadow-sm transition-all ${
                              active
                                ? "btn btn-dark"
                                : "btn btn-outline-dark bg-white hover:bg-dark hover:text-white"
                            }`}
                            onClick={() => setRoomTypeFilter(t.slug)}
                            aria-pressed={active}
                            aria-label={`Filter by ${t.label}, ${t.inventory} ${unit} on property, ${bookingWord}`}
                            title={`Show only ${t.label} bookings`}
                          >
                            <span className="d-flex align-items-start justify-content-between gap-2">
                              <span className="d-block fw-semibold small">{t.label}</span>
                              <span
                                className={`badge rounded-pill flex-shrink-0 align-self-center font-xs fw-normal ${
                                  active ? "text-bg-light text-dark" : "text-bg-secondary"
                                }`}
                              >
                                Filter
                              </span>
                            </span>
                            <span
                              className={`d-block small mt-2 ${
                                active ? "text-white-50" : "text-secondary"
                              }`}
                            >
                              {t.inventory} {unit} · {bookingWord}
                            </span>
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="admin-dashboard-section">
                  <p className="admin-dashboard-section__label mb-0">Booking status</p>
                  <p className="admin-dashboard-section__hint">
                    Counts reflect the full dataset. Combines with room type and search.
                  </p>
                  <div className="row g-2 g-md-3">
                    <div className="col-6 col-sm-4 col-lg-2">
                      <button
                        type="button"
                        className={`admin-status-filter-tile w-100 h-100 text-start rounded-3 py-3 px-3 shadow-sm transition-all ${
                          statusFilter === ""
                            ? "btn btn-dark"
                            : "btn btn-outline-dark bg-white hover:bg-dark hover:text-white"
                        }`}
                        onClick={() => setStatusFilter("")}
                        aria-pressed={statusFilter === ""}
                        aria-label={`All booking statuses, ${bookings.length} bookings`}
                        title="Clear status filter"
                      >
                        <span className="d-flex align-items-start justify-content-between gap-2">
                          <span className="d-block fw-semibold small">All statuses</span>
                          <span
                            className={`badge rounded-pill flex-shrink-0 align-self-center font-xs fw-normal ${
                              statusFilter === ""
                                ? "text-bg-light text-dark"
                                : "text-bg-secondary"
                            }`}
                          >
                            Filter
                          </span>
                        </span>
                        <span
                          className={`d-block small mt-2 ${
                            statusFilter === "" ? "text-white-50" : "text-secondary"
                          }`}
                        >
                          {bookings.length} booking{bookings.length === 1 ? "" : "s"}
                        </span>
                      </button>
                    </div>
                    {BOOKING_STATUSES.map((status) => {
                      const n = bookingCountByStatus[status];
                      const active = statusFilter === status;
                      const bookingWord = n === 1 ? "1 booking" : `${n} bookings`;
                      const activeBtn = statusFilterActiveClass[status];
                      const subtitleMuted =
                        active && status === "Pending"
                          ? "text-dark"
                          : active
                            ? "text-white-50"
                            : "text-secondary";
                      return (
                        <div key={status} className="col-6 col-sm-4 col-lg-2">
                          <button
                            type="button"
                            className={`admin-status-filter-tile w-100 h-100 text-start rounded-3 py-3 px-3 shadow-sm transition-all ${
                              active
                                ? `btn ${activeBtn}`
                                : "btn btn-outline-dark bg-white hover:bg-dark hover:text-white"
                            }`}
                            onClick={() => setStatusFilter(status)}
                            aria-pressed={active}
                            aria-label={`Filter by status ${status}, ${bookingWord}`}
                            title={`Show only ${status} bookings`}
                          >
                            <span className="d-flex align-items-start justify-content-between gap-2">
                              <span className="d-block fw-semibold small">{status}</span>
                              <span
                                className={`badge rounded-pill flex-shrink-0 align-self-center font-xs fw-normal ${
                                  active
                                    ? status === "Pending"
                                      ? "text-bg-dark"
                                      : "text-bg-light text-dark"
                                    : "text-bg-secondary"
                                }`}
                              >
                                Filter
                              </span>
                            </span>
                            <span className={`d-block small mt-2 ${subtitleMuted} ${active && status === "Pending" ? "opacity-75" : ""}`}>
                              {bookingWord}
                            </span>
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="admin-dashboard-section">
                  <p className="admin-dashboard-section__label mb-0">Search</p>
                  <p className="admin-dashboard-section__hint">
                    Matches guest name, email, room label, booking id, or status text.
                  </p>
                  <label className="form-label visually-hidden" htmlFor="admin-booking-search">
                    Search bookings
                  </label>
                  <input
                    id="admin-booking-search"
                    type="search"
                    className="form-control rounded-2"
                    placeholder="Guest, email, room, booking id, status…"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    autoComplete="off"
                  />
                  {hasActiveFilters && (
                    <div className="d-flex flex-wrap align-items-baseline gap-2 mt-3 pt-3 border-top border-dark border-opacity-10">
                      <span className="small fw-semibold text-muted text-uppercase" style={{ letterSpacing: "0.06em" }}>
                        Active view
                      </span>
                      <span className="small">{activeFilterSummary.join(" · ")}</span>
                      <button
                        type="button"
                        className="btn btn-link btn-sm p-0 ms-auto text-decoration-none"
                        onClick={clearAllFilters}
                      >
                        Clear all
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="card admin-dashboard-card border-0 shadow-none" id="bookings-grid">
              <div className="card-header d-flex flex-column flex-sm-row align-items-sm-start justify-content-sm-between gap-2">
                <div>
                  <h2 className="h6 mb-0 fw-semibold">Bookings</h2>
                  <p className="small text-muted mb-0 mt-1">
                    Sort columns and update status with the row actions.
                  </p>
                </div>
                <span
                  className="badge rounded-pill px-3 py-2 align-self-sm-center fw-normal"
                  style={{
                    background: "#fafaf9",
                    border: "1px solid rgba(27,27,27,0.1)",
                    color: "#1b1b1b",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {filteredBookings.length} row{filteredBookings.length === 1 ? "" : "s"}
                </span>
              </div>
              <div className="card-body">
                {error && (
                  <div className="alert alert-danger py-2 small mb-3" role="alert">
                    {error}
                  </div>
                )}
                <div className="admin-data-table-wrap">
                  <DataTable
                    columns={columns}
                    data={filteredBookings}
                    progressPending={isLoading}
                    progressComponent={<p className="text-muted mb-0 py-3">Loading bookings...</p>}
                    noDataComponent={<p className="text-muted mb-0 py-3">No bookings found.</p>}
                    pagination
                    paginationPerPage={8}
                    paginationRowsPerPageOptions={[8, 16, 24, 40]}
                    highlightOnHover
                    responsive
                    dense
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <AdminBookingCalendar bookings={filteredBookings} />
          </div>
        </div>
      </div>
    </div>
  );
}
