import OffcanvasMenu from "@/components/OffcanvasMenu";
import Header from "@/components/Header";
import AuthModals from "@/components/AuthModals";
import AdvanceSearch from "@/components/AdvanceSearch";
import RoomSlider from "@/components/RoomSlider";

export default function Home() {
  return (
    <div className="rts__main">
      <OffcanvasMenu />
      <Header />

      <div className="rts__section banner__area is__home__one banner__height banner__center">
        <div className="banner__slider overflow-hidden">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="banner__slider__image">
                <img src="https://cf.bstatic.com/xdata/images/hotel/max2024x2024/557263386.jpg?k=f2865b643e36d096b6cdb7a1537baaa70b1309361b406fa5bef8fb98757df163&o=" alt="" />
              </div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="banner__slide__content">
                      <span className="h6 subtitle__icon">Welcome to Our Hotel</span>
                      <h1>Luxury Stay Hotel Experience Comfort &amp; Elegance</h1>
                      <p className="sub__text">
                        Choosing Bokinn was one of the best decisions we&apos;ve ever made. They
                        have proven to be a reliable and innovative partner
                      </p>
                      <a
                        href="/rooms"
                        className="theme-btn btn-style fill no-border"
                      >
                        <span>Discover Room</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="banner__slider__image">
                <img src="/assets/images/banner/2.webp" alt="" />
              </div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="banner__slide__content">
                      <span className="h6 subtitle__icon">Welcome to Our Spa</span>
                      <h1>Lavish Getaway A Blend of Comfort &amp; Style</h1>
                      <p className="sub__text">
                        Choosing Bokinn was one of the best decisions we&apos;ve ever made. They
                        have proven to be a reliable and innovative partner
                      </p>
                      <a
                        href="/rooms"
                        className="theme-btn btn-style fill no-border"
                      >
                        <span>Discover Room</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="banner__slider__image">
                <img src="/assets/images/banner/banner-3.webp" alt="" />
              </div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="banner__slide__content">
                      <span className="h6 subtitle__icon">Welcome to Our Spa</span>
                      <h1>A Perfect Fusion of Comfort and Elegance</h1>
                      <p className="sub__text">
                        Choosing Bokinn was one of the best decisions we&apos;ve ever made. They
                        have proven to be a reliable and innovative partner
                      </p>
                      <a
                        href="/rooms"
                        className="theme-btn btn-style fill no-border"
                      >
                        <span>Discover Room</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rts__slider__nav">
            <div className="rts__slide">
              <div className="next">
                <svg
                  width="40"
                  height="22"
                  viewBox="0 0 40 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.255 9.75546H39.0404C39.7331 9.75546 40.2927 10.3151 40.2927 11.0078C40.2927 11.7005 39.7331 12.2601 39.0404 12.2601H4.28018L11.8803 19.8603C12.3695 20.3495 12.3695 21.1439 11.8803 21.6331C11.3911 22.1223 10.5967 22.1223 10.1075 21.6331L0.366619 11.8923C0.00657272 11.5322 -0.0990982 10.9961 0.0965805 10.5264C0.292259 10.0607 0.750149 9.75546 1.255 9.75546Z"
                    fill="#F1F1F1"
                  />
                  <path
                    d="M11.0077 0.00274277C11.3286 0.00274277 11.6495 0.124063 11.8921 0.370618C12.3813 0.859813 12.3813 1.65426 11.8921 2.14346L2.13955 11.896C1.65036 12.3852 0.855906 12.3852 0.366712 11.896C-0.122483 11.4068 -0.122483 10.6124 0.366712 10.1232L10.1193 0.370618C10.3658 0.124063 10.6868 0.00274277 11.0077 0.00274277Z"
                    fill="#F1F1F1"
                  />
                </svg>
              </div>
            </div>
            <div className="rts__slide">
              <div className="prev">
                <svg
                  width="40"
                  height="22"
                  viewBox="0 0 40 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M39.0377 12.2445L1.25234 12.2445C0.559636 12.2445 -2.04305e-06 11.6849 -1.92194e-06 10.9922C-1.80082e-06 10.2995 0.559637 9.73987 1.25234 9.73987L36.0125 9.73987L28.4124 2.13974C27.9232 1.65055 27.9232 0.856096 28.4124 0.366901C28.9016 -0.122294 29.6961 -0.122293 30.1853 0.366901L39.9261 10.1077C40.2861 10.4678 40.3918 11.004 40.1961 11.4736C40.0005 11.9393 39.5426 12.2445 39.0377 12.2445Z"
                    fill="#F1F1F1"
                  />
                  <path
                    d="M29.2852 21.9973C28.9643 21.9973 28.6433 21.8759 28.4007 21.6294C27.9115 21.1402 27.9115 20.3457 28.4007 19.8565L38.1533 10.104C38.6425 9.61476 39.4369 9.61476 39.9261 10.104C40.4153 10.5932 40.4153 11.3876 39.9261 11.8768L30.1736 21.6294C29.927 21.8759 29.6061 21.9973 29.2852 21.9973Z"
                    fill="#F1F1F1"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AdvanceSearch />

      {/* About section */}
      <div className="rts__section about__area is__home__main section__padding">
        <div className="section__shape d-none d-xl-block">
          <img src="/assets/images/about/section__shape.svg" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="about__wrapper">
              <div className="image">
                <div className="position-relative wow fadeInUp" data-wow-delay=".3s">
                  <div className="jara-mask-1 jarallax image-height">
                    <img
                      src="https://cf.bstatic.com/xdata/images/hotel/max2024x2024/624500938.jpg?k=46552dddd17797cad92ff87848d936f71b8127e2fcc6c96a338a8c78ccf4b5ee&o="
                      className="jarallax-img"
                      alt=""
                    />
                  </div>
                </div>
                <div className="image__card radius-10 wow fadeInUp" data-wow-delay=".5s">
                  <div className="icon radius-10 center-item">
                    <i className="flaticon-people" />
                  </div>
                  <div className="content">
                    <span className="h5">50+</span>
                    <p>Experience Staff</p>
                  </div>
                </div>
                <div className="image__card__image wow fadeInUp">
                  <img
                    src="https://cf.bstatic.com/xdata/images/hotel/max2024x2024/557263386.jpg?k=f2865b643e36d096b6cdb7a1537baaa70b1309361b406fa5bef8fb98757df163&o="
                    width={312}
                    height={230}
                    alt=""
                  />
                </div>
              </div>
              <div className="content">
                <span className="h6 subtitle__icon__two d-block wow fadeInUp">
                  About Us
                </span>
                <h2 className="content__title wow fadeInUp">
                  Welcome To Our Moonlit Hotel &amp; Resort
                </h2>
                <p
                  className="content__subtitle wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  Welcome to Bokinn, where luxury meets comfort in the heart of
                  canada. Since 1999, we have been dedicated to providing an
                  exceptional stay for our guests, blending modern amenities with
                  timeless elegance.Our beautifully designed rooms and suites
                  offer stunning views and plush accommodations, ensuring a
                  restful retreat whether you&apos;re here for business or
                  leisure.
                </p>
                <a
                  href="#"
                  className="theme-btn btn-style fill no-border wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <span>Learn More</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Facilities */}
      <div className="rts__section facilities__area has__background has__shape py-90">
        <div className="section__shape">
          <img src="/assets/images/shape/facility-1.svg" alt="" />
        </div>
        <div className="container">
          <div className="row justify-content-center text-center mb-40">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
              <span className="h6 subtitle__icon__two d-block">Facilities</span>
              <h2 className="content__title h2 lh-1">Hotel Facilities</h2>
            </div>
          </div>

          <div className="row g-4 wow fadeInUp" data-wow-delay=".5s">
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="card rts__card no-border is__home radius-6">
                <div className="card-body">
                  <div className="icon">
                    <img src="/assets/images/icon/bed.svg" alt="" />
                  </div>
                  <a href="#">
                    <h6 className="card-title h6 mb-15">Rooms and Suites</h6>
                  </a>
                  <p className="card-text">
                    Varied types of rooms, from standard to luxury suites,
                    equipped with essentials like beds.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="card rts__card no-border is__home radius-6">
                <div className="card-body">
                  <div className="icon">
                    <img src="/assets/images/icon/security.svg" alt="" />
                  </div>
                  <a href="#">
                    <h6 className="card-title h6 mb-15">24-Hour Security</h6>
                  </a>
                  <p className="card-text">
                    On-site security personnel and best surveillance. from
                    standard to luxury suites,Secure storage for valuables.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="card rts__card no-border is__home radius-6">
                <div className="card-body">
                  <div className="icon">
                    <img src="/assets/images/icon/gym.svg" alt="" />
                  </div>
                  <a href="#">
                    <h6 className="card-title h6 mb-15">Fitness Center</h6>
                  </a>
                  <p className="card-text">
                    Equipped with exercise machines and weights.Offering
                    massages, facials, and other treatments.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="card rts__card no-border is__home radius-6">
                <div className="card-body">
                  <div className="icon">
                    <img src="/assets/images/icon/swimming-pool.svg" alt="" />
                  </div>
                  <a href="#">
                    <h6 className="card-title h6 mb-15">Swimming Pool</h6>
                  </a>
                  <p className="card-text">
                    Indoor or outdoor pools for leisure or exercise.Offering
                    massages, facials, and other treatments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Rooms slider */}
      <div className="rts__section pt-120">
        <div className="container">
          <div className="row">
            <div className="section__wrapper mb-40 wow fadeInUp">
              <div className="section__content__left">
                <span className="h6 subtitle__icon__two d-block wow fadeInUp">
                  Room
                </span>
                <h2 className="content__title h2 lh-1">Our Rooms</h2>
              </div>
              <div className="section__content__right">
                <p>
                  Our rooms offer a harmonious blend of comfort and elegance,
                  designed to provide an exceptional stay for every guest. Each
                  room features plush bedding, high-quality linens, and a
                  selection of pillows to ensure a restful night&apos;s sleep.
                </p>
              </div>
            </div>
          </div>
        </div>
        <RoomSlider />
      </div>

      {/* Testimonials */}
      <div className="rts__section section__padding testimonial has__shape">
        <div className="container">
          <div className="row mb-40">
            <div className="d-flex align-items-center justify-content-between position-relative">
              <div className="section__content__left">
                <span className="h6 subtitle__icon__two d-block wow fadeInUp">
                  Testimonials
                </span>
                <h2 className="content__title h2 lh-1">What Our Client Say</h2>
              </div>
              <div className="slider__navigation">
                <div className="nav__btn button-next">
                  <img
                    src="/assets/images/icon/arrow-left-short.svg"
                    alt=""
                  />
                </div>
                <div className="nav__btn button-prev">
                  <img
                    src="/assets/images/icon/arrow-right-short.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-11">
              <div className="testimonial__slider overflow-hidden">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="testimonial__item__content">
                      <div className="author__icon">
                        <img
                          src="/assets/images/author/author-2x.webp"
                          alt=""
                        />
                      </div>
                      <div className="testimonial__content">
                        <div className="single__slider__item ">
                          <div className="slider__rating mb-20">
                            <i className="flaticon-star" />
                            <i className="flaticon-star" />
                            <i className="flaticon-star" />
                            <i className="flaticon-star" />
                            <i className="flaticon-star-sharp-half-stroke" />
                          </div>
                          <span className="slider__text d-block">
                            Choosing Bokinn was one of the best decisions
                            we&apos;ve ever made. They have proven to be a
                            reliable and innovative partner, always ready to
                            tackle new challenges with and expertise.Their
                            commitment to and delivering tailored.
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

                  <div className="swiper-slide">
                    <div className="testimonial__item__content">
                      <div className="author__icon">
                        <img
                          src="/assets/images/author/author-4.webp"
                          alt=""
                        />
                      </div>
                      <div className="testimonial__content">
                        <div className="single__slider__item ">
                          <div className="slider__rating mb-20">
                            <i className="flaticon-star" />
                            <i className="flaticon-star" />
                            <i className="flaticon-star" />
                            <i className="flaticon-star" />
                            <i className="flaticon-star-sharp-half-stroke" />
                          </div>
                          <span className="slider__text d-block">
                            Choosing Bokinn was one of the best decisions
                            we&apos;ve ever made. They have proven to be a
                            reliable and innovative partner, always ready to
                            tackle new challenges with and expertise.Their
                            commitment to and delivering tailored.
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video section */}
      <div className="rts__section pb-120 video video__full">
        <div className="container-full">
          <div className="row">
            <div className="col-12">
              <div className="video__area position-relative wow fadeInUp">
                <div className="video__area__image jara-mask-2 jarallax rounded-0">
                  <img
                    className="radius-none jarallax-img"
                    src="https://cf.bstatic.com/xdata/images/hotel/max2024x2024/529669531.jpg?k=cbf802063fb41fbdb08cccc61dfc1ef6fec01fa43eb2544816d725e2b68832d1&o="
                    alt=""
                  />
                </div>
                <div className="video--spinner__wrapper ">
                  <div className="rts__circle">
                    <svg className="spinner" viewBox="0 0 100 100">
                      <defs>
                        <path
                          id="circle-2"
                          d="M50,50 m-37,0a37,37 0 1,1 74,0a37,37 0 1,1 -74,0"
                        ></path>
                      </defs>
                      <text>
                        <textPath xlinkHref="#circle-2">
                          Watch Now * Watch Now * Watch Full Video *
                        </textPath>
                      </text>
                    </svg>
                    <div className="rts__circle--icon">
                      <a
                        href="https://www.youtube.com/watch?v=qOwxqRGHy5Q"
                        className="video-play"
                      >
                        <i className="flaticon-play" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Special offers */}
      <div className="rts__section offer__area is__home__one has__shape">
        <div className="container">
          <div className="row position-relative justify-content-center text-center mb-30">
            <div className="col-lg-6 wow fadeInUp">
              <span className="h6 subtitle__icon__two d-block">
                Special Offer
              </span>
              <h2 className="content__title h2 lh-1">Special Offer</h2>
            </div>
          </div>
          <div className="row justify-content-center g-30">
            <div className="col-lg-10 col-xl-6 col-xxl-5">
              <div className="single__offer__card">
                <a href="#">
                  <img src="/assets/images/offer/5.webp" alt="" />
                </a>
                <div className="single__offer__card__content">
                  <a href="#" className="h4">
                    Family Fun Package
                  </a>
                  <ul className="offer__included list-unstyled">
                    <li>
                      <i className="flaticon-check-circle" /> 15% off on family
                      suites
                    </li>
                    <li>
                      <i className="flaticon-check-circle" /> Free meals for
                      kids under 12
                    </li>
                    <li>
                      <i className="flaticon-check-circle" /> Complimentary
                      tickets
                    </li>
                    <li>
                      <i className="flaticon-check-circle" /> The local
                      amusement park
                    </li>
                  </ul>
                  <h3 className="offer__price mb-0">$39.00</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-10 col-xl-6 col-xxl-7">
              <div className="d-flex flex-column gap-30">
                <div className="single__offer__card is__flex">
                  <a href="#">
                    <img
                      src="/assets/images/offer/6.webp"
                      width={265}
                      height={310}
                      alt=""
                    />
                  </a>
                  <div className="single__offer__card__content">
                    <a href="#" className="h5">
                      Spa Retreat
                    </a>
                    <ul className="offer__included list-unstyled">
                      <li>
                        <i className="flaticon-check-circle" /> A two-night stay
                        in a room
                      </li>
                      <li>
                        <i className="flaticon-check-circle" /> Daily spa
                        treatments
                      </li>
                      <li>
                        <i className="flaticon-check-circle" /> Healthy
                        breakfast and lunch
                      </li>
                      <li>
                        <i className="flaticon-check-circle" /> Access to all spa
                      </li>
                    </ul>
                    <h4 className="offer__price mb-0">$39.00</h4>
                  </div>
                </div>

                <div className="single__offer__card is__flex">
                  <a href="#">
                    <img
                      src="/assets/images/offer/7.webp"
                      width={265}
                      height={310}
                      alt=""
                    />
                  </a>
                  <div className="single__offer__card__content">
                    <a href="#" className="h5">
                      Romantic Getaway
                    </a>
                    <ul className="offer__included list-unstyled">
                      <li>
                        <i className="flaticon-check-circle" /> A two-night stay
                        in a room
                      </li>
                      <li>
                        <i className="flaticon-check-circle" /> Daily spa
                        treatments
                      </li>
                      <li>
                        <i className="flaticon-check-circle" /> Healthy
                        breakfast and lunch
                      </li>
                      <li>
                        <i className="flaticon-check-circle" /> Access to all spa
                      </li>
                    </ul>
                    <h4 className="offer__price mb-0">$39.00</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Instagram gallery */}
      <div className="rts__section is__home__main">
        <div className="container-fluid">
          <div className="row position-relative justify-content-center text-center mb-30">
            <div className="col-lg-6 wow fadeInUp">
              <span className="h6 subtitle__icon__two d-block">
                Instagram Post
              </span>
              <h2 className="content__title h2 lh-1">Follow on Instagram</h2>
            </div>
          </div>
          <div className="row">
            <div className="insta__gallery__slider overflow-hidden">
              <div className="swiper-wrapper gallery">
                <div className="swiper-slide">
                  <div className="gallery__item">
                    <img
                      src="/assets/images/insta/1.webp"
                      height={300}
                      width={300}
                      alt=""
                    />
                    <a
                      href="/assets/images/insta/1.webp"
                      className="gallery__popup"
                    >
                      <img
                        src="/assets/images/icon/instagram.svg"
                        height={40}
                        width={40}
                        alt=""
                      />
                    </a>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="gallery__item">
                    <img
                      src="/assets/images/insta/2.webp"
                      height={300}
                      width={300}
                      alt=""
                    />
                    <a
                      href="/assets/images/insta/2.webp"
                      className="gallery__popup"
                    >
                      <img
                        src="/assets/images/icon/instagram.svg"
                        height={40}
                        width={40}
                        alt=""
                      />
                    </a>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="gallery__item">
                    <img
                      src="/assets/images/insta/3.webp"
                      height={300}
                      width={300}
                      alt=""
                    />
                    <a
                      href="/assets/images/insta/3.webp"
                      className="gallery__popup"
                    >
                      <img
                        src="/assets/images/icon/instagram.svg"
                        height={40}
                        width={40}
                        alt=""
                      />
                    </a>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="gallery__item">
                    <img
                      src="/assets/images/insta/4.webp"
                      height={300}
                      width={300}
                      alt=""
                    />
                    <a
                      href="/assets/images/insta/4.webp"
                      className="gallery__popup"
                    >
                      <img
                        src="/assets/images/icon/instagram.svg"
                        height={40}
                        width={40}
                        alt=""
                      />
                    </a>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="gallery__item">
                    <img
                      src="/assets/images/insta/5.webp"
                      height={300}
                      width={300}
                      alt=""
                    />
                    <a
                      href="/assets/images/insta/5.webp"
                      className="gallery__popup"
                    >
                      <img
                        src="/assets/images/icon/instagram.svg"
                        height={40}
                        width={40}
                        alt=""
                      />
                    </a>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="gallery__item">
                    <img
                      src="/assets/images/insta/6.webp"
                      height={300}
                      width={300}
                      alt=""
                    />
                    <a
                      href="/assets/images/insta/6.webp"
                      className="gallery__popup"
                    >
                      <img
                        src="/assets/images/icon/instagram.svg"
                        height={40}
                        width={40}
                        alt=""
                      />
                    </a>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="gallery__item">
                    <img
                      src="/assets/images/insta/1.webp"
                      height={300}
                      width={300}
                      alt=""
                    />
                    <a
                      href="/assets/images/insta/1.webp"
                      className="gallery__popup"
                    >
                      <img
                        src="/assets/images/icon/instagram.svg"
                        height={40}
                        width={40}
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer (common) */}
      <footer className="rts__section rts__footer is__common__footer footer__background has__shape">
        <div className="section__shape">
          <div className="shape__1">
            <img src="/assets/images/footer/shape-1.svg" alt="" />
          </div>
          <div className="shape__2">
            <img src="/assets/images/footer/shape-2.svg" alt="" />
          </div>
          <div className="shape__3">
            <img src="/assets/images/footer/shape-3.svg" alt="" />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="footer__newsletter">
              <span className="h2">Join Our Newsletter</span>
              <div className="rts__form">
                <form action="#" method="post">
                  <input
                    type="email"
                    name="email"
                    id="subscription"
                    placeholder="Enter your mail"
                    required
                  />
                  <button type="submit">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="footer__widget__wrapper">
              <div className="rts__widget">
                <a href="/">
                  <img
                    className="footer__logo"
                    src="/assets/images/logo.jpg"
                    alt="Garden Boutique Hotel"
                  />
                </a>
                <p className="font-sm max-290 mt-20">
                  Each room features plush bedding, high-quality linens, and a
                  selection of ensure a restful night&apos;s sleep.
                </p>
              </div>
              <div className="rts__widget">
                <span className="widget__title">Quick Links</span>
                <ul>
                  <li>
                    <a href="#" aria-label="footer__link">
                      Rooms &amp; Suites
                    </a>
                  </li>
                  <li>
                    <a href="#" aria-label="footer__link">
                      Dining
                    </a>
                  </li>
                  <li>
                    <a href="#" aria-label="footer__link">
                      Spa &amp; Wellness
                    </a>
                  </li>
                  <li>
                    <a href="#" aria-label="footer__link">
                      Special Offers
                    </a>
                  </li>
                </ul>
              </div>
              <div className="rts__widget">
                <span className="widget__title">Guest Service</span>
                <ul>
                  <li>24/7 Front Desk</li>
                  <li>Parking</li>
                  <li>Room Service</li>
                  <li>Free Wi-Fi</li>
                  <li>Concierge Service</li>
                </ul>
              </div>
              <div className="rts__widget">
                <span className="widget__title">Contact Us</span>
                <ul>
                  <li>
                    <a
                      aria-label="footer__contact"
                      href="tel:+12505550199"
                    >
                      <i className="flaticon-phone-flip" /> +12505550199
                    </a>
                  </li>
                  <li>
                    <a
                      aria-label="footer__contact"
                      href="mailto:UjJw6@example.com"
                    >
                      <i className="flaticon-envelope" />
                      Moonlit@gmail.com
                    </a>
                  </li>
                  <li>
                    <a aria-label="footer__contact" href="#">
                      <i className="flaticon-marker" />
                      M5T 2L9 Toronto, Canada
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright__text">
          <div className="container">
            <div className="row">
              <div className="copyright__wrapper">
                <p className="mb-0">
                  Copyright © {new Date().getFullYear()} Moonlit. All rights
                  reserved.
                </p>
                <div className="footer__social__link">
                  <a
                    href="#"
                    aria-label="footer__social"
                    className="link__item"
                  >
                    Facebook
                  </a>
                  <a
                    href="#"
                    aria-label="footer__social"
                    className="link__item"
                  >
                    Linkedin
                  </a>
                  <a
                    href="#"
                    aria-label="footer__social"
                    className="link__item"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <AuthModals />
    </div>
  );
}
