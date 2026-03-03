import Link from "next/link";
import PageShell from "@/components/PageShell";
import { rooms } from "@/data/rooms";

export default function RoomDetailsOnePage() {
  return (
    <PageShell>
      {/* Page hero — no-text variant (visually hidden content, background only) */}
      <div
        className="rts__section page__hero__height page__hero__bg no__shadow"
        style={{ backgroundImage: "url(/assets/images/pages/header__bg.webp)" }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-12">
              <div className="page__hero__content visually-hidden">
                <h1 className="wow fadeInUp">About Us</h1>
                <p className="wow fadeInUp font-sm">
                  Welcome to Bokinn, where luxury meets comfort in the heart of canada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Room details area */}
      <div className="rts__section section__padding">
        <div className="container">
          <div className="row g-5 sticky-wrap">

            {/* Left column — room details */}
            <div className="col-xxl-8 col-xl-7">
              <div className="room__details">
                <span className="h4 price">122$</span>
                <h2 className="room__title">Executive Room</h2>
                <div className="room__meta">
                  <span><i className="flaticon-construction" />35 sqm</span>
                  <span><i className="flaticon-user" />5 Person</span>
                </div>
                <p>
                  Our elegantly appointed rooms and suites are designed to offer the utmost in comfort and
                  style. Each room features modern amenities, plush furnishings, and thoughtful touches to
                  ensure a relaxing stay.
                  <br /><br />
                  Indulge in a culinary journey at our on-site restaurants, where our talented chefs create
                  mouthwatering dishes using the freshest local ingredients. Start your day with a sumptuous
                  breakfast, enjoy a leisurely lunch, and savor a gourmet dinner in an elegant setting.
                </p>

                {/* Room image pair */}
                <div className="room__image__group row row-cols-md-2 row-cols-sm-1 mt-30 mb-50 gap-4 gap-md-0">
                  <div className="room__image__item">
                    <img className="rounded-2" src="https://cf.bstatic.com/xdata/images/hotel/max2024x2024/557262230.jpg?k=59e16cc0c0fec58d44ff620d93388348c3f795fbc51f38cdf37491c01326e146&o=" alt="" />
                  </div>
                  <div className="room__image__item">
                    <img className="rounded-2" src="https://cf.bstatic.com/xdata/images/hotel/max2024x2024/529639894.jpg?k=6b90318d747d4905d009b2f9ecac4f2a0f310e6aa24c62f7bcf06e4567e50ea0&o=" alt="" />
                  </div>
                </div>

                {/* Amenities */}
                <span className="h4 d-block mb-30">Room Amenities</span>
                <div className="room__amenity mb-50">
                  <div className="group__row">
                    <div className="single__item">
                      <img src="/assets/images/icon/wifi.svg" height={30} width={36} alt="" />
                      <span>Free Wifi</span>
                    </div>
                    <div className="single__item">
                      <img src="/assets/images/icon/shower.svg" height={30} width={36} alt="" />
                      <span>Shower</span>
                    </div>
                    <div className="single__item">
                      <img src="/assets/images/icon/aeroplane.svg" height={30} width={36} alt="" />
                      <span>Airport transport</span>
                    </div>
                  </div>
                  <div className="group__row">
                    <div className="single__item">
                      <img src="/assets/images/icon/balcony.svg" height={30} width={36} alt="" />
                      <span>Balcony</span>
                    </div>
                    <div className="single__item">
                      <img src="/assets/images/icon/refrigerator.svg" height={30} width={36} alt="" />
                      <span>Refrigerator</span>
                    </div>
                    <div className="single__item">
                      <img src="/assets/images/icon/support.svg" height={30} width={36} alt="" />
                      <span>24/7 Support</span>
                    </div>
                  </div>
                  <div className="group__row">
                    <div className="single__item">
                      <img src="/assets/images/icon/desk.svg" height={30} width={36} alt="" />
                      <span>Work Desk</span>
                    </div>
                    <div className="single__item">
                      <img src="/assets/images/icon/fitness.svg" height={30} width={36} alt="" />
                      <span>Fitness Center</span>
                    </div>
                    <div className="single__item">
                      <img src="/assets/images/icon/swimming-pool.svg" height={30} width={36} alt="" />
                      <span>Swimming Pool</span>
                    </div>
                  </div>
                </div>

                {/* Room features */}
                <span className="h4 d-block mb-50">Room Features</span>
                <div className="room__feature mb-30">
                  <div className="room__feature__image mb-50">
                    <img className="rounded-2" src="https://cf.bstatic.com/xdata/images/hotel/max2024x2024/813430921.jpg?k=6b966d4872521068c01a0654defa9ff2d0491ad4667f0e2d1bb7b50553c51546&o=" alt="" />
                  </div>
                  <div className="group__row">
                    <ul className="list__item">
                      <li>Children and extra beds</li>
                      <li>Climate Control</li>
                      <li>Art and Decor</li>
                      <li>Coffee/Tea Maker</li>
                      <li>High-End Bedding</li>
                      <li>Smart Technology</li>
                    </ul>
                  </div>
                </div>
                <p>
                  Our elegantly appointed rooms and suites are designed to offer the utmost in comfort and
                  style. Each room features modern amenities, plush furnishings, and thoughtful touches to
                  ensure a relaxing stay.
                </p>
              </div>
            </div>

            {/* Right column — sticky booking form */}
            <div className="col-xxl-4 col-xl-5 sticky-item">
              <div className="rts__booking__form has__background is__room__details">
                <form action="#" method="post" className="advance__search">
                  <h5 className="pt-0">Book Your Stay</h5>
                  <div className="advance__search__wrapper">

                    <div className="query__input wow fadeInUp">
                      <label htmlFor="rd-check-in" className="query__label">Check In</label>
                      <div className="query__input__position">
                        <input type="text" id="rd-check-in" name="check__in" placeholder="15 Jun 2024" required />
                        <div className="query__input__icon"><i className="flaticon-calendar" /></div>
                      </div>
                    </div>

                    <div className="query__input wow fadeInUp" data-wow-delay=".3s">
                      <label htmlFor="rd-check-out" className="query__label">Check Out</label>
                      <div className="query__input__position">
                        <input type="text" id="rd-check-out" name="check__out" placeholder="15 May 2024" required />
                        <div className="query__input__icon"><i className="flaticon-calendar" /></div>
                      </div>
                    </div>

                    <div className="query__input wow fadeInUp" data-wow-delay=".4s">
                      <label htmlFor="rd-adult" className="query__label">Adult</label>
                      <div className="query__input__position">
                        <select name="adult" id="rd-adult" className="form-select">
                          {[1,2,3,4,5,6,7].map(n => <option key={n} value={n}>{n} Person</option>)}
                        </select>
                        <div className="query__input__icon"><i className="flaticon-user" /></div>
                      </div>
                    </div>

                    <div className="query__input wow fadeInUp" data-wow-delay=".5s">
                      <label htmlFor="rd-child" className="query__label">Child</label>
                      <div className="query__input__position">
                        <select name="child" id="rd-child" className="form-select">
                          {[1,2,3,4,5,6,7].map(n => <option key={n} value={n}>{n} Child</option>)}
                        </select>
                        <div className="query__input__icon"><i className="flaticon-user" /></div>
                      </div>
                    </div>

                    <div className="query__input wow fadeInUp" data-wow-delay=".5s">
                      <label htmlFor="rd-room" className="query__label">Room</label>
                      <div className="query__input__position">
                        <select name="room" id="rd-room" className="form-select">
                          {[1,2,3,4,5].map(n => <option key={n} value={n}>{n} Room</option>)}
                        </select>
                        <div className="query__input__icon is__svg">
                          <img src="/assets/images/icon/room.svg" alt="" />
                        </div>
                      </div>
                    </div>

                    <div className="query__input wow fadeInUp" data-wow-delay=".5s">
                      <label htmlFor="rd-exbed" className="query__label">Extra Bed</label>
                      <div className="query__input__position">
                        <select name="exbed" id="rd-exbed" className="form-select">
                          {[1,2,3,4].map(n => <option key={n} value={n}>{n} Bed</option>)}
                        </select>
                        <div className="query__input__icon is__svg">
                          <img src="/assets/images/icon/bed-alt.svg" alt="" />
                        </div>
                      </div>
                    </div>

                    <h5 className="p-0 mt-20">Extra Services</h5>

                    <div className="query__input checkbox wow fadeInUp">
                      <input type="checkbox" name="clean" id="rd-clean" />
                      <label htmlFor="rd-clean">Room Clean</label>
                      <span>$12 / Night</span>
                    </div>

                    <div className="query__input checkbox wow fadeInUp">
                      <input type="checkbox" name="parking" id="rd-parking" />
                      <label htmlFor="rd-parking">Parking</label>
                      <span>Free</span>
                    </div>

                    <div className="query__input checkbox wow fadeInUp">
                      <input type="checkbox" name="transport" id="rd-transport" />
                      <label htmlFor="rd-transport">Airport transport</label>
                      <span>$30 / Night</span>
                    </div>

                    <div className="query__input checkbox wow fadeInUp">
                      <input type="checkbox" name="pet" id="rd-pet" />
                      <label htmlFor="rd-pet">Pet-Friendly</label>
                      <span>$40 / Night</span>
                    </div>

                    <div className="total__price">
                      <span className="total h6 mb-0">Total Price</span>
                      <span className="price h6 m-0">$82</span>
                    </div>

                    <button
                      className="theme-btn btn-style fill no-border search__btn wow fadeInUp"
                      data-wow-delay=".6s"
                    >
                      <span>Book Your Room</span>
                    </button>

                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Similar rooms */}
      <div className="rts__section pb-120">
        <div className="container">
          <div className="row justify-content-center text-center mb-40">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
              <span className="h6 subtitle__icon__two d-block">Similar Rooms</span>
              <h2 className="content__title h2 lh-1">Similar Rooms</h2>
            </div>
          </div>
          <div className="row g-30">
            {rooms.slice(0, 3).map((room, i) => (
              <div key={i} className="col-lg-6 col-xl-4 col-md-6">
                <div className="room__card">
                  <div className="room__card__top">
                    <div className="room__card__image">
                      <Link href={`/room-details/${room.slug}`}>
                        <img
                          src={room.thumb}
                          width={420}
                          height={310}
                          alt={room.title}
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="room__card__meta">
                    <Link href={`/room-details/${room.slug}`} className="room__card__title h5">{room.title}</Link>
                    <div className="room__card__meta__info">
                      <span><i className="flaticon-construction" />{room.sqm} sqm</span>
                      <span><i className="flaticon-user" />{room.person} Person</span>
                    </div>
                    <div className="room__price__tag">
                      <span className="h6 d-block">{room.price}</span>
                    </div>
                    <Link href={`/room-details/${room.slug}`} className="room__card__link">Discover More</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </PageShell>
  );
}
