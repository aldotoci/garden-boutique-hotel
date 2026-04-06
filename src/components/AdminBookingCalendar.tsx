"use client";

import { useMemo, useState } from "react";

type BookingStatus = "Pending" | "Confirmed" | "Rejected" | "Checked-in" | "Checked-out";

interface CalendarBooking {
  id: string;
  guestName: string;
  room: string;
  checkIn: string;
  checkOut: string;
  status: BookingStatus;
}

interface AdminBookingCalendarProps {
  bookings: CalendarBooking[];
}

const WEEK_DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function toYmd(date: Date): string {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export default function AdminBookingCalendar({ bookings }: AdminBookingCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });
  const [selectedDate, setSelectedDate] = useState(() => toYmd(new Date()));

  const bookingsByCheckIn = useMemo(() => {
    const map = new Map<string, CalendarBooking[]>();
    for (const booking of bookings) {
      const current = map.get(booking.checkIn) ?? [];
      current.push(booking);
      map.set(booking.checkIn, current);
    }
    return map;
  }, [bookings]);

  const calendarDays = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDayOfMonth = new Date(year, month, 1);
    const startDay = firstDayOfMonth.getDay();
    const gridStart = new Date(year, month, 1 - startDay);

    const days: Date[] = [];
    for (let index = 0; index < 42; index += 1) {
      const day = new Date(gridStart);
      day.setDate(gridStart.getDate() + index);
      days.push(day);
    }

    return days;
  }, [currentMonth]);

  const selectedBookings = bookingsByCheckIn.get(selectedDate) ?? [];

  return (
    <div className="card admin-dashboard-card border-0 shadow-none h-100">
      <div className="card-header d-flex align-items-start justify-content-between gap-2">
        <div>
          <h2 className="h6 mb-0 fw-semibold">Arrival calendar</h2>
          <p className="small text-muted mb-0 mt-1">
            Check-ins in the filtered set ({bookings.length} booking
            {bookings.length === 1 ? "" : "s"})
          </p>
        </div>
      </div>
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between mb-3 pb-2 border-bottom">
          <button
            type="button"
            className="btn btn-sm btn-outline-dark rounded-2"
            onClick={() =>
              setCurrentMonth(
                (monthDate) =>
                  new Date(monthDate.getFullYear(), monthDate.getMonth() - 1, 1),
              )
            }
          >
            Prev
          </button>
          <p
            className="mb-0 fw-semibold small text-uppercase"
            style={{ letterSpacing: "0.06em" }}
          >
            {currentMonth.toLocaleString("en-US", { month: "long", year: "numeric" })}
          </p>
          <button
            type="button"
            className="btn btn-sm btn-outline-dark rounded-2"
            onClick={() =>
              setCurrentMonth(
                (monthDate) =>
                  new Date(monthDate.getFullYear(), monthDate.getMonth() + 1, 1),
              )
            }
          >
            Next
          </button>
        </div>

        <div className="row row-cols-7 g-1 mb-2 text-center">
          {WEEK_DAYS.map((day) => (
            <div className="col" key={day}>
              <span className="small text-muted text-uppercase" style={{ fontSize: "0.65rem" }}>
                {day}
              </span>
            </div>
          ))}
        </div>

        <div className="row row-cols-7 g-1">
          {calendarDays.map((day) => {
            const ymd = toYmd(day);
            const isCurrentMonth = day.getMonth() === currentMonth.getMonth();
            const dayBookings = bookingsByCheckIn.get(ymd) ?? [];
            const isSelected = ymd === selectedDate;

            return (
              <div className="col" key={ymd}>
                <button
                  type="button"
                  className={`admin-calendar-day w-100 p-1 text-start ${
                    isSelected ? "admin-calendar-day--selected" : ""
                  }`}
                  onClick={() => setSelectedDate(ymd)}
                >
                  <div className="d-flex justify-content-between align-items-start">
                    <span
                      className={`small ${isCurrentMonth ? "" : "text-muted opacity-50"}`}
                    >
                      {day.getDate()}
                    </span>
                    {dayBookings.length > 0 && (
                      <span
                        className={`badge rounded-pill ${
                          isSelected ? "bg-light text-dark" : "text-bg-dark"
                        }`}
                        style={{ fontSize: "0.6rem" }}
                      >
                        {dayBookings.length}
                      </span>
                    )}
                  </div>
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-4 pt-3 border-top">
          <h3 className="h6 fw-semibold mb-2">Check-ins on {selectedDate}</h3>
          {selectedBookings.length === 0 ? (
            <p className="text-muted small mb-0">No arrivals for this date in the current view.</p>
          ) : (
            <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
              {selectedBookings.map((booking) => (
                <li
                  key={booking.id}
                  className="rounded-2 px-3 py-2"
                  style={{
                    border: "1px solid rgba(27,27,27,0.08)",
                    background: "#fafaf9",
                  }}
                >
                  <span className="fw-semibold d-block">{booking.guestName}</span>
                  <span className="small text-muted">
                    {booking.room} · {booking.status}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
