import Link from "next/link";
import type { RoomListing } from "@/data/rooms";

type SimilarRoomsSectionProps = {
  rooms: RoomListing[];
  excludeSlug: string;
  limit?: number;
  /** Raw query string (no leading ?), e.g. from stay search */
  searchQuery?: string;
};

export default function SimilarRoomsSection({
  rooms,
  excludeSlug,
  limit = 3,
  searchQuery = "",
}: SimilarRoomsSectionProps) {
  const qs = searchQuery ? `?${searchQuery}` : "";
  const similar = rooms.filter((r) => r.slug !== excludeSlug).slice(0, limit);

  return (
    <div className="rts__section pb-120">
      <div className="container">
        <div className="row justify-content-center text-center mb-40">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
            <span className="h6 subtitle__icon__two d-block">Similar Rooms</span>
            <h2 className="content__title h2 lh-1">Similar Rooms</h2>
          </div>
        </div>
        <div className="row g-30">
          {similar.map((room) => (
            <div key={room.slug} className="col-lg-6 col-xl-4 col-md-6">
              <div className="room__card">
                <div className="room__card__top">
                  <div className="room__card__image">
                    <Link href={`/room-details/${room.slug}${qs}`}>
                      <img src={room.thumb} width={420} height={310} alt={room.title} />
                    </Link>
                  </div>
                </div>
                <div className="room__card__meta">
                  <Link href={`/room-details/${room.slug}${qs}`} className="room__card__title h5">
                    {room.title}
                  </Link>
                  <div className="room__card__meta__info">
                    <span>
                      <i className="flaticon-user" />
                      {room.person} Person
                    </span>
                  </div>
                  <div className="room__price__tag">
                    <span className="h6 d-block">{room.price}</span>
                  </div>
                  <Link href={`/room-details/${room.slug}${qs}`} className="room__card__link">
                    Discover More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
