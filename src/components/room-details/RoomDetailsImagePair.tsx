import { LightboxTrigger } from "@/components/ImageLightbox";

type RoomDetailsImagePairProps = {
  roomTitle: string;
  leftSrc: string;
  rightSrc: string;
};

export default function RoomDetailsImagePair({ roomTitle, leftSrc, rightSrc }: RoomDetailsImagePairProps) {
  return (
    <div className="room__image__group row row-cols-md-2 row-cols-sm-1 mt-30 mb-50 gap-4 gap-md-0">
      <LightboxTrigger index={1}>
        <div className="room__image__item w-100">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-2">
            <img className="block h-full w-full object-cover" src={leftSrc} alt={`${roomTitle} photo 1`} />
          </div>
        </div>
      </LightboxTrigger>
      <LightboxTrigger index={2}>
        <div className="room__image__item w-100">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-2">
            <img className="block h-full w-full object-cover" src={rightSrc} alt={`${roomTitle} photo 2`} />
          </div>
        </div>
      </LightboxTrigger>
    </div>
  );
}
