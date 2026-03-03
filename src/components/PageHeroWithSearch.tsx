interface PageHeroWithSearchProps {
  title: string;
  desc: string;
}

export default function PageHeroWithSearch({ title, desc }: PageHeroWithSearchProps) {
  return (
    <div
      className="rts__section page__hero__height page__hero__bg if__has__search"
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
        <div className="row mt-60 text-start">
          <form action="#" method="post" className="advance__search">
            <div className="advance__search__wrapper wow fadeInUp">
              <div className="query__input">
                <label htmlFor="hw-check-in" className="query__label">Check In</label>
                <input type="text" id="hw-check-in" name="check__in" placeholder="15 Jun 2024" required />
                <div className="query__input__icon">
                  <i className="flaticon-calendar" />
                </div>
              </div>

              <div className="query__input">
                <label htmlFor="hw-check-out" className="query__label">Check Out</label>
                <input type="text" id="hw-check-out" name="check__out" placeholder="15 May 2024" required />
                <div className="query__input__icon">
                  <i className="flaticon-calendar" />
                </div>
              </div>

              <div className="query__input">
                <label htmlFor="hw-adult" className="query__label">Adult</label>
                <div className="query__input__position">
                  <select name="adult" id="hw-adult" className="form-select">
                    {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                      <option key={n} value={n}>{n} Person</option>
                    ))}
                  </select>
                  <div className="query__input__icon">
                    <i className="flaticon-user" />
                  </div>
                </div>
              </div>

              <div className="query__input">
                <label htmlFor="hw-child" className="query__label">Child</label>
                <div className="query__input__position">
                  <select name="child" id="hw-child" className="form-select">
                    {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                      <option key={n} value={n}>{n} Child</option>
                    ))}
                  </select>
                  <div className="query__input__icon">
                    <i className="flaticon-user" />
                  </div>
                </div>
              </div>

              <button className="theme-btn btn-style fill no-border search__btn">
                <span><i className="flaticon-search-1" /> Search</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
