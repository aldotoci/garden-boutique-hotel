export default function AdvanceSearch() {
  return (
    <div className="rts__section advance__search__section is__home__one">
      <div className="container">
        <div className="row">
          <form action="/rooms" method="post" className="advance__search">
            <div className="advance__search__wrapper wow fadeInUp">
              <div className="query__input">
                <label htmlFor="check__in" className="query__label">
                  Check In
                </label>
                <input
                  type="text"
                  id="check__in"
                  name="check__in"
                  placeholder="15 Jun 2024"
                  required
                />
                <div className="query__input__icon">
                  <i className="flaticon-calendar" />
                </div>
              </div>

              <div className="query__input">
                <label htmlFor="check__out" className="query__label">
                  Check Out
                </label>
                <input
                  type="text"
                  id="check__out"
                  name="check__out"
                  placeholder="15 May 2024"
                  required
                />
                <div className="query__input__icon">
                  <i className="flaticon-calendar" />
                </div>
              </div>

              <div className="query__input">
                <label htmlFor="adult" className="query__label">
                  Adult
                </label>
                <select name="adult" id="adult" className="form-select">
                  <option value="1">1 Person</option>
                  <option value="2">2 Person</option>
                  <option value="3">3 Person</option>
                  <option value="4">4 Person</option>
                  <option value="5">5 Person</option>
                  <option value="6">6 Person</option>
                  <option value="7">7 Person</option>
                  <option value="8">8 Person</option>
                  <option value="9">9 Person</option>
                </select>
                <div className="query__input__icon">
                  <i className="flaticon-user" />
                </div>
              </div>

              <div className="query__input">
                <label htmlFor="child" className="query__label">
                  Child
                </label>
                <select name="child" id="child" className="form-select">
                  <option value="1">1 Child</option>
                  <option value="2">2 Child</option>
                  <option value="3">3 Child</option>
                  <option value="4">4 Child</option>
                  <option value="5">5 Child</option>
                  <option value="6">6 Child</option>
                  <option value="7">7 Child</option>
                  <option value="8">8 Child</option>
                  <option value="9">9 Child</option>
                </select>
                <div className="query__input__icon">
                  <i className="flaticon-user" />
                </div>
              </div>

              <button className="theme-btn btn-style fill no-border search__btn">
                <span>Check Now</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
