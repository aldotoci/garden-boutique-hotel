import { LightboxTrigger } from "@/components/ImageLightbox";

type RoomDetailsThumbnailGridProps = {
  roomTitle: string;
  imagesFromIndexFour: string[];
};

export default function RoomDetailsThumbnailGrid({ roomTitle, imagesFromIndexFour }: RoomDetailsThumbnailGridProps) {
  return (
    <div className="row g-3 mt-40">
      {imagesFromIndexFour.map((src, idx) => (
        <LightboxTrigger key={idx} index={4 + idx} className="col-sm-4 col-6">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-2">
            <img
              className="block h-full w-full object-cover"
              src={src}
              alt={`${roomTitle} photo ${5 + idx}`}
              loading="lazy"
            />
          </div>
        </LightboxTrigger>
      ))}
    </div>
  );
}
