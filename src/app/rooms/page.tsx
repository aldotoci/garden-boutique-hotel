import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import { rooms } from "@/data/rooms";

export default function RoomsPage() {
  return (
    <PageShell>
      <PageHero
        title="Deluxe Room"
        desc="A step up from the standard room, often with better views, more space, and additional amenities."
      />

      {/* 2-column layout: room cards + sticky booking sidebar */}
      <div className="rts__section section__padding">
        <div className="container">
          <div className="row g-30 main__content sticky-wrap">

            {/* Room cards */}
            <div className="col-xl-8 col-lg-7 order-2 order-lg-1">
              <div className="row g-30">
                {rooms.map((room, i) => (
                  <div key={i} className="col-xl-6 col-lg-12 col-md-6">
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
              <div className="load__more__link">
                <a href="#">Load More</a>
              </div>
            </div>

            {/* Sticky booking sidebar */}
            <div className="col-xl-4 col-lg-5 order-1 order-lg-2 mb-5 mb-lg-0 sticky-item">
              <div className="rts__booking__form has__background no__shadow">
                <form action="#" method="post" className="advance__search">
                  <h5>Book Your Stay</h5>
                  <div className="advance__search__wrapper">
                    <div className="query__input wow fadeInUp">
                      <label htmlFor="r2-check-in" className="query__label">Check In</label>
                      <div className="query__input__position">
                        <input type="text" id="r2-check-in" name="check__in" placeholder="15 Jun 2024" required />
                        <div className="query__input__icon"><i className="flaticon-calendar" /></div>
                      </div>
                    </div>
                    <div className="query__input wow fadeInUp" data-wow-delay=".3s">
                      <label htmlFor="r2-check-out" className="query__label">Check Out</label>
                      <div className="query__input__position">
                        <input type="text" id="r2-check-out" name="check__out" placeholder="15 May 2024" required />
                        <div className="query__input__icon"><i className="flaticon-calendar" /></div>
                      </div>
                    </div>
                    <div className="query__input wow fadeInUp" data-wow-delay=".4s">
                      <label htmlFor="r2-adult" className="query__label">Adult</label>
                      <div className="query__input__position">
                        <select name="adult" id="r2-adult" className="form-select">
                          {[1,2,3,4,5,6,7].map(n => <option key={n} value={n}>{n} Person</option>)}
                        </select>
                        <div className="query__input__icon"><i className="flaticon-user" /></div>
                      </div>
                    </div>
                    <div className="query__input wow fadeInUp" data-wow-delay=".5s">
                      <label htmlFor="r2-child" className="query__label">Child</label>
                      <div className="query__input__position">
                        <select name="child" id="r2-child" className="form-select">
                          {[1,2,3,4,5,6,7].map(n => <option key={n} value={n}>{n} Child</option>)}
                        </select>
                        <div className="query__input__icon"><i className="flaticon-user" /></div>
                      </div>
                    </div>
                    <button className="theme-btn btn-style fill no-border search__btn wow fadeInUp" data-wow-delay=".6s">
                      <span><i className="flaticon-search-1" /> Search</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Testimonial — style 2: left panel + right slider */}
      <div className="rts__section testimonial has__shape is__home__four pb-120">
        <div className="section__shape">
          <img src="/assets/images/about/section__shape.svg" alt="" />
        </div>
        <div className="container">
          <div className="row g-30">
            <div className="col-lg-5">
              <div className="testimonial__left">
                <span className="h6 subtitle__icon__two d-block wow fadeInUp">Testimonial</span>
                <h2 className="content__title h2 lh-1">What Our Client Say About Us</h2>
                <div className="applicant__list mt-40">
                  {["3.webp","4.webp","5.webp","6.webp"].map((img, i) => (
                    <div key={i} className="single__list">
                      <img src={`/assets/images/author/${img}`} alt="" />
                      {i === 3 && <div className="icon-plus">+</div>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="testimonial__slider__style__two">
                <div className="testimonial__slider overflow-hidden">
                  <div className="swiper-wrapper">
                    {[1,2,3].map(i => (
                      <div key={i} className="swiper-slide">
                        <div className="testimonial__item__content">
                          <div className="testimonial__content">
                            <div className="single__slider__item">
                              <div className="slider__rating mb-20">
                                <i className="flaticon-star" /><i className="flaticon-star" />
                                <i className="flaticon-star" /><i className="flaticon-star" />
                                <i className="flaticon-star-sharp-half-stroke" />
                              </div>
                              <span className="slider__text d-block">
                                Choosing Garden Boutique Hotel was one of the best decisions we&apos;ve ever made. They have proven
                                to be a reliable and innovative partner, always ready to tackle new challenges
                                with expertise. Their commitment to delivering tailored solutions is unmatched.
                              </span>
                              <div className="slider__author__info">
                                <div className="slider__author__info__content">
                                  <h6 className="mb-0">Sarah Martinez</h6>
                                  <span>COO of Apex Solutions</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="slider__navigation">
                  <div className="nav__btn button-next">
                    <img src="/assets/images/icon/arrow-left-short.svg" alt="" />
                  </div>
                  <div className="nav__btn button-prev">
                    <img src="/assets/images/icon/arrow-right-short.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

