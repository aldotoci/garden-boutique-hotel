import RoomAmenities from "@/components/room-details/RoomAmenities";
import RoomDetailsFeatures from "@/components/room-details/RoomDetailsFeatures";
import RoomDetailsImagePair from "@/components/room-details/RoomDetailsImagePair";
import RoomDetailsIntro from "@/components/room-details/RoomDetailsIntro";
import RoomDetailsThumbnailGrid from "@/components/room-details/RoomDetailsThumbnailGrid";

type SelectedStayPricing = {
  rangeLabel: string;
  nights: number;
  totalDisplay: string;
};

type RoomDetailsColumnProps = {
  roomTitle: string;
  price: string;
  person: string;
  images: string[];
  featureBullets: string[];
  selectedStayPricing?: SelectedStayPricing;
};

export default function RoomDetailsColumn({
  roomTitle,
  price,
  person,
  images,
  featureBullets,
  selectedStayPricing,
}: RoomDetailsColumnProps) {
  const [, img1, img2, img3, ...restFromFour] = images;
  const thumbnails = restFromFour;

  return (
    <div className="col-xxl-8 col-xl-7">
      <div className="room__details">
        <RoomDetailsIntro
          price={price}
          title={roomTitle}
          person={person}
          selectedStayPricing={selectedStayPricing}
        />
        {img1 && img2 ? <RoomDetailsImagePair roomTitle={roomTitle} leftSrc={img1} rightSrc={img2} /> : null}
        <RoomAmenities />
        {img3 ? <RoomDetailsFeatures roomTitle={roomTitle} overviewImageSrc={img3} bullets={featureBullets} /> : null}
        <p>
          Whether you&apos;re traveling alone, with a friend, colleague, or partner, our {roomTitle} is a practical
          and stylish choice. Enjoy a peaceful ambiance and all the essentials you need for a comfortable stay.
        </p>
        {thumbnails.length > 0 ? (
          <RoomDetailsThumbnailGrid roomTitle={roomTitle} imagesFromIndexFour={thumbnails} />
        ) : null}
      </div>
    </div>
  );
}
