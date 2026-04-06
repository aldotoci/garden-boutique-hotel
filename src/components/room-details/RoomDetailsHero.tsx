import { LightboxTrigger } from "@/components/ImageLightbox";

type RoomDetailsHeroProps = {
  heroImageUrl: string;
  title: string;
  subtitle: string;
};

export default function RoomDetailsHero({ heroImageUrl, title, subtitle }: RoomDetailsHeroProps) {
  return (
    <LightboxTrigger index={0} className="block">
      <div
        className="rts__section page__hero__bg flex min-h-[min(100vw,420px)] items-center !h-[clamp(280px,52vh,700px)] py-10 sm:min-h-[min(100vw,480px)] sm:py-12 md:!h-[clamp(420px,55vh,700px)] lg:!h-[700px]"
        style={{
          backgroundImage: `url(${heroImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container w-full max-w-full">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-11 col-xl-10 px-3 sm:px-4">
              <div className="page__hero__content mx-auto max-w-4xl px-1 sm:px-2">
                <h1 className="wow fadeInUp break-words text-balance !text-[clamp(1.75rem,5vw+0.5rem,3.5rem)] !leading-[1.12] sm:!leading-[1.1] md:!text-[clamp(2.25rem,4vw+1rem,3.75rem)]">
                  {title}
                </h1>
                <p className="wow fadeInUp font-sm mx-auto mt-3 max-w-2xl text-pretty !text-[clamp(0.8rem,1.5vw+0.55rem,1rem)] !leading-relaxed opacity-95 sm:mt-4 md:max-w-xl md:!text-[0.95rem]">
                  {subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LightboxTrigger>
  );
}
