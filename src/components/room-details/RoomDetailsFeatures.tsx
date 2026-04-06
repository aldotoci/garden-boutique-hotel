import { LightboxTrigger } from "@/components/ImageLightbox";

type RoomDetailsFeaturesProps = {
  roomTitle: string;
  overviewImageSrc: string;
  bullets: string[];
};

export default function RoomDetailsFeatures({ roomTitle, overviewImageSrc, bullets }: RoomDetailsFeaturesProps) {
  return (
    <>
      <span className="h4 d-block mb-50">Room Features</span>
      <div className="room__feature mb-30">
        <div className="room__feature__image mb-50">
          <LightboxTrigger index={3}>
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2">
              <img
                className="block h-full w-full object-cover"
                src={overviewImageSrc}
                alt={`${roomTitle} overview`}
              />
            </div>
          </LightboxTrigger>
        </div>
        <div className="group__row">
          <ul className="list__item">
            {bullets.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
