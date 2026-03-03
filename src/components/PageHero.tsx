interface PageHeroProps {
  title: string;
  desc: string;
}

export default function PageHero({ title, desc }: PageHeroProps) {
  return (
    <div
      className="rts__section page__hero__height page__hero__bg"
      style={{ backgroundImage: "url(/assets/images/pages/header__bg.webp)" }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-12">
            <div className="page__hero__content">
              <h1 className="wow fadeInUp">{title}</h1>
              <p className="wow fadeInUp font-sm">{desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
