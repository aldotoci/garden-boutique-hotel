import type { Metadata } from "next";
import Image from "next/image";
import PageShell from "@/components/PageShell";
import { allUniqueBookingGalleryImages } from "@/data/bookingGalleryImages";

export const metadata: Metadata = {
  title: "Gallery | Garden Boutique Hotel",
  description:
    "Photos of our rooms and spaces — the same imagery you see when browsing and booking.",
};

export default function GalleryPage() {
  const images = allUniqueBookingGalleryImages();

  return (
    <PageShell>
      <div className="rts__section pt-120 pb-120 gallery-page">
        <div className="container">
          <div className="row position-relative justify-content-center text-center mb-50">
            <div className="col-12 col-lg-8 col-xl-7 mx-auto">
              <span className="h6 subtitle__icon__three d-inline-block">
                Gallery
              </span>
              <h1 className="content__title h2 lh-1">Our spaces &amp; rooms</h1>
              <p className="text-muted mt-3 mb-0">
                A selection of photos from our room types — the same views you see
                when you book.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {images.map((src, i) => (
              <div key={src} className="col-6 col-md-4 col-lg-3">
                <div
                  className="gallery-page__cell position-relative overflow-hidden radius-6 bg-light"
                  style={{ aspectRatio: "4 / 3" }}
                >
                  <Image
                    src={src}
                    alt={`Garden Boutique Hotel — photo ${i + 1}`}
                    fill
                    sizes="(max-width: 576px) 50vw, (max-width: 992px) 33vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
