import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import { ImageLightboxProvider } from "@/components/ImageLightbox";
import RoomBookingForm from "@/components/RoomBookingForm";
import RoomDetailsColumn from "@/components/room-details/RoomDetailsColumn";
import RoomDetailsHero from "@/components/room-details/RoomDetailsHero";
import SimilarRoomsSection from "@/components/room-details/SimilarRoomsSection";
import { getRoomGallery } from "@/data/roomGalleryImages";
import { getResolvedRooms } from "@/lib/getResolvedRooms";
import { formatStayTotalPrice } from "@/data/rooms";
import {
  formatStayRange,
  nightsBetween,
  normalizeStaySearchFromQuery,
  stayQueryString,
} from "@/lib/stayDates";

const HERO_SUBTITLE =
  "Cozy accommodation with thoughtfully arranged bedding, ideal for friends, couples, or family traveling together.";

type Props = {
  params: Promise<{ roomName: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

function firstString(v: string | string[] | undefined): string {
  if (typeof v === "string") return v;
  if (Array.isArray(v) && v[0]) return v[0];
  return "";
}

export default async function RoomDetailsPage({ params, searchParams }: Props) {
  const { roomName } = await params;
  const sp = await searchParams;
  const cin = firstString(sp.checkIn);
  const cout = firstString(sp.checkOut);
  const initialStay =
    cin && cout
      ? normalizeStaySearchFromQuery({
          checkIn: cin,
          checkOut: cout,
          adults: firstString(sp.adults),
          children: firstString(sp.children),
        })
      : undefined;
  const similarRoomsQs = initialStay ? stayQueryString(initialStay) : "";
  const gallery = getRoomGallery(roomName);
  const resolvedRooms = await getResolvedRooms();
  const room = resolvedRooms.find((r) => r.slug === roomName);

  if (!gallery || !room) {
    return notFound();
  }

  const { images, featureBullets } = gallery;

  const stayNights =
    initialStay && nightsBetween(initialStay.checkIn, initialStay.checkOut) > 0
      ? nightsBetween(initialStay.checkIn, initialStay.checkOut)
      : 0;
  const selectedStayPricing =
    initialStay && stayNights > 0
      ? {
          rangeLabel: formatStayRange(initialStay.checkIn, initialStay.checkOut),
          nights: stayNights,
          totalDisplay: formatStayTotalPrice(room.nightlyPrice, stayNights),
        }
      : undefined;

  return (
    <PageShell>
      <ImageLightboxProvider images={images} alt={room.title}>
        <RoomDetailsHero heroImageUrl={images[0]} title={room.title} subtitle={HERO_SUBTITLE} />

        <div className="rts__section section__padding">
          <div className="container">
            <div className="row g-4 g-xl-5 sticky-wrap">
              <RoomDetailsColumn
                roomTitle={room.title}
                price={room.price}
                person={room.person}
                images={images}
                featureBullets={featureBullets}
                selectedStayPricing={selectedStayPricing}
              />
              <div className="col-xxl-4 col-xl-5 sticky-item">
                <RoomBookingForm roomTitle={room.title} initialStay={initialStay} />
              </div>
            </div>
          </div>
        </div>

        <SimilarRoomsSection
          rooms={resolvedRooms}
          excludeSlug={roomName}
          searchQuery={similarRoomsQs}
        />
      </ImageLightboxProvider>
    </PageShell>
  );
}
