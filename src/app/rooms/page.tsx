import PageShell from "@/components/PageShell";
import Link from "next/link";
import { formatStayTotalPrice } from "@/data/rooms";
import { getResolvedRooms } from "@/lib/getResolvedRooms";
import StaySearchForm from "@/components/StaySearchForm";
import {
  filterRoomsByGuestCount,
  totalStayGuests,
} from "@/lib/filterRoomsByGuests";
import {
  formatStayRange,
  localYmd,
  nightsBetween,
  normalizeStaySearchFromQuery,
  parseYmd,
  stayQueryString,
} from "@/lib/stayDates";

type RoomsSearchParams = {
  checkIn?: string | string[];
  checkOut?: string | string[];
  adults?: string | string[];
  children?: string | string[];
};

function firstString(v: string | string[] | undefined): string {
  if (typeof v === "string") return v;
  if (Array.isArray(v) && v[0]) return v[0];
  return "";
}

export default async function RoomsPage({
  searchParams,
}: {
  searchParams: Promise<RoomsSearchParams>;
}) {
  const rooms = await getResolvedRooms();
  const sp = await searchParams;
  const checkIn = firstString(sp.checkIn);
  const checkOut = firstString(sp.checkOut);
  const adults = firstString(sp.adults) || "2";
  const children = firstString(sp.children) || "0";

  const inD = parseYmd(checkIn);
  const outD = parseYmd(checkOut);
  const todayParsed = parseYmd(localYmd(new Date()));
  const urlDatesValid = Boolean(
    inD && outD && outD > inD && todayParsed && inD >= todayParsed,
  );

  const staySearch = normalizeStaySearchFromQuery({
    checkIn,
    checkOut,
    adults,
    children,
  });

  const stayValid = urlDatesValid
    ? { nights: nightsBetween(checkIn, checkOut) }
    : null;

  const roomDetailsQs = stayQueryString(staySearch);
  const roomDetailsHref = (slug: string) =>
    `/room-details/${slug}${roomDetailsQs ? `?${roomDetailsQs}` : ""}`;
  const roomBookingHref = (slug: string) => `${roomDetailsHref(slug)}#book-your-stay`;

  const visibleRooms = filterRoomsByGuestCount(
    rooms,
    staySearch.adults,
    staySearch.children,
  );
  const partySize = totalStayGuests(staySearch.adults, staySearch.children);

  return (
    <PageShell>
      {stayValid ? (
        <div className="rts__section pt-0 pb-0">
          <div className="container">
            <div
              className="alert alert-light border shadow-sm radius-6 mb-0 py-3 px-4 d-flex flex-wrap align-items-center gap-2"
              role="status"
            >
              <span className="fw-semibold">Your search</span>
              <span className="text-muted">
                {formatStayRange(checkIn, checkOut)} · {stayValid.nights} night
                {stayValid.nights === 1 ? "" : "s"}
              </span>
              <span className="text-muted ms-md-2">
                {adults} adult{adults === "1" ? "" : "s"}
                {children !== "0"
                  ? `, ${children} child${children === "1" ? "" : "ren"}`
                  : ""}
              </span>
              <span className="text-muted ms-md-2">
                · {visibleRooms.length} room
                {visibleRooms.length === 1 ? "" : "s"} fit your party
              </span>
            </div>
          </div>
        </div>
      ) : null}

      {/* 2-column layout: room cards + sticky booking sidebar */}
      <div className="rts__section section__padding">
        <div className="container">
          <div className="row g-30 main__content sticky-wrap">

            {/* Room cards */}
            <div className="col-xl-8 col-lg-7 order-2 order-lg-1">
              {!stayValid ? (
                <p className="text-muted small mb-3">
                  {visibleRooms.length === rooms.length
                    ? `All ${rooms.length} rooms accommodate at least ${partySize} guest${partySize === 1 ? "" : "s"}.`
                    : `${visibleRooms.length} of ${rooms.length} rooms fit ${partySize} guest${partySize === 1 ? "" : "s"}.`}{" "}
                  Change adults or children in the sidebar to update the list.
                </p>
              ) : null}
              <div className="row g-30">
                {visibleRooms.length === 0 ? (
                  <div className="col-12">
                    <p className="text-muted mb-0">
                      No rooms list a capacity of at least {partySize} guest
                      {partySize === 1 ? "" : "s"}. Lower adults or children in
                      the search panel, or call us for larger groups.
                    </p>
                  </div>
                ) : null}
                {visibleRooms.map((room) => (
                  <div
                    key={room.slug}
                    className="col-xl-6 col-lg-12 col-md-6 d-flex"
                  >
                    <div className="room__card h-100 w-100 d-flex flex-column">
                      <div className="room__card__top flex-shrink-0">
                        <div className="room__card__image">
                          <Link href={roomDetailsHref(room.slug)}>
                            <img
                              src={room.thumb}
                              width={420}
                              height={310}
                              alt={room.title}
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="room__card__meta d-flex flex-column flex-grow-1">
                        <Link href={roomDetailsHref(room.slug)} className="room__card__title h5">{room.title}</Link>
                        <div className="room__card__meta__info">
                          <span><i className="flaticon-user" />{room.person} Person</span>
                        </div>
                        <div className="room__price__tag">
                          <span className="h6 d-block mb-0">
                            {room.price}
                            <span className="small fw-normal text-muted"> / night</span>
                          </span>
                          {stayValid ? (
                            <span className="small d-block mt-2 fw-semibold" style={{ color: "#1b1b1b" }}>
                              {formatStayTotalPrice(room.nightlyPrice, stayValid.nights)} for your stay
                              <span className="fw-normal text-muted">
                                {" "}
                                ({stayValid.nights} night{stayValid.nights === 1 ? "" : "s"})
                              </span>
                            </span>
                          ) : null}
                        </div>
                        <Link
                          href={roomBookingHref(room.slug)}
                          className="room__card__link mt-auto pt-3"
                        >
                          Book the Room
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sticky booking sidebar */}
            <div className="col-xl-4 col-lg-5 order-1 order-lg-2 mb-5 mb-lg-0 sticky-item">
              <div id="book-your-stay" className="rts__booking__form has__background no__shadow">
                <StaySearchForm
                  layout="sidebar"
                  seed={staySearch}
                  syncQueryToUrl
                />
              </div>
            </div>

          </div>
        </div>
      </div>

    </PageShell>
  );
}

