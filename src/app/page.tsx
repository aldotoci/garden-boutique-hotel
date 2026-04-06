import Header from "@/components/Header";
import AdvanceSearch from "@/components/AdvanceSearch";
import HomeContactSection from "@/components/HomeContactSection";
import InstagramEmbedSection from "@/components/InstagramEmbedSection";
import RoomSlider from "@/components/RoomSlider";
import { HOTEL_CONTACT } from "@/data/hotelContact";
import { getResolvedRooms } from "@/lib/getResolvedRooms";

export default async function Home() {
  const resolvedRooms = await getResolvedRooms();
  const {
    email,
    phoneDisplay,
    phoneTel,
    whatsappUrl,
    instagramUrl,
    instagramHandle,
    facebookUrl,
  } = HOTEL_CONTACT;
  return (
    <div className="rts__main">
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
                      <h1>The urban escape you never have to leave for.</h1>
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
                      <span className="h6 subtitle__icon">Your stay in Tirana</span>
                      <h1>Lavish Getaway A Blend of Comfort &amp; Style</h1>
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
                      <span className="h6 subtitle__icon">Garden Boutique Hotel</span>
                      <h1>A Perfect Fusion of Comfort and Elegance</h1>
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
                  Your Green Retreat in the Center of it All
                </h2>
                <div
                  className="content__subtitle wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <p className="mb-3 mb-lg-4">
                    Welcome to Garden Boutique Hotel, a boutique escape designed for
                    those who seek comfort, greenery, and a touch of luxury. Located
                    in the heart of Tirana, our hotel offers a rare duality: the
                    convenience of a central location and the absolute stillness of
                    a private garden.
                  </p>
                  <p className="mb-0">
                    Our philosophy is simple:{" "}
                    <strong>exceptional service is in the details.</strong> From our
                    thoughtfully designed rooms to our attentive staff who are always
                    ready with a local recommendation, we strive to make your stay in
                    Tirana effortless. Relax, breathe in the garden air, and let us
                    take care of the rest.
                  </p>
                </div>
                <a
                  href="#contact-us"
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
      <div className="rts__section facilities__area facilities-section has__background has__shape py-90">
        <div className="section__shape">
          <img src="/assets/images/shape/facility-1.svg" alt="" />
        </div>
        <div className="container">
          <div className="row position-relative justify-content-center text-center mb-40">
            <div
              className="col-12 col-lg-8 col-xl-7 mx-auto wow fadeInUp"
              data-wow-delay=".3s"
            >
              <span className="h6 subtitle__icon__three d-inline-block">
                Facilities
              </span>
              <h2 className="content__title h2 lh-1 facilities-section__main-title">
                Hotel Facilities
              </h2>
            </div>
          </div>

          <div
            className="row g-4 wow fadeInUp facilities-section__cards"
            data-wow-delay=".5s"
          >
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="card rts__card no-border is__home radius-6">
                <div className="card-body">
                  <div className="icon">
                    <img src="/assets/images/icon/bed.svg" alt="" />
                  </div>
                  <h6 className="card-title h6 mb-15">Comfortable rooms</h6>
                  <p className="card-text">
                    Thoughtfully furnished rooms with quality bedding, en-suite
                    bathrooms, and everything you need for a restful night.
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
                  <h6 className="card-title h6 mb-15">24-Hour Security</h6>
                  <p className="card-text">
                    On-site security and attentive front-desk staff around the
                    clock for your peace of mind.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="card rts__card no-border is__home radius-6">
                <div className="card-body">
                  <div className="icon">
                    <img src="/assets/images/icon/wifi.svg" alt="" />
                  </div>
                  <h6 className="card-title h6 mb-15">Free Wi‑Fi</h6>
                  <p className="card-text">
                    Complimentary high-speed internet in every room and
                    throughout the hotel so you can work or unwind with ease.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="card rts__card no-border is__home radius-6">
                <div className="card-body">
                  <div className="icon">
                    <img src="/assets/images/icon/balcony.svg" alt="" />
                  </div>
                  <h6 className="card-title h6 mb-15">Garden &amp; terrace</h6>
                  <p className="card-text">
                    A quiet green setting and outdoor seating — a peaceful
                    contrast to the city, steps from your room.
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
        <RoomSlider rooms={resolvedRooms} />
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
                            Always ready to tackle new challenges with expertise.
                            Their commitment to delivering tailored solutions is
                            unmatched.
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
                            Always ready to tackle new challenges with expertise.
                            Their commitment to delivering tailored solutions is
                            unmatched.
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
                {/*
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
                */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Location — Google Maps */}
      <div className="rts__section is__home__main section__padding home-location-map home-lower-trio">
        <div className="container">
          <div className="row position-relative justify-content-center text-center mb-20">
            <div className="col-12 col-lg-8 col-xl-7 mx-auto wow fadeInUp">
              <span className="h6 subtitle__icon__three d-inline-block">
                Location
              </span>
              <h2 className="content__title h2 lh-1">Garden Boutique Hotel</h2>
              <p className="text-muted small mt-3 mb-0">
                <a
                  href="https://maps.app.goo.gl/AmrPrVpN8Mp14rb87"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in Google Maps
                </a>
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-xl-10">
              <div className="home-location-map__embed">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.1882093854306!2d19.802934476432753!3d41.326520571307796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13503127fd6095b7%3A0x5a1142a6052ce15c!2sGarden%20Boutique%20Hotel!5e0!3m2!1sen!2s!4v1775461514501!5m2!1sen!2s"
                  title="Garden Boutique Hotel on Google Maps"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <HomeContactSection />

      {/* Instagram embeds */}
      <div className="rts__section is__home__main section__padding instagram-section home-lower-trio">
        <div className="container">
          <div className="row position-relative justify-content-center text-center mb-20">
            <div className="col-12 col-lg-8 col-xl-7 mx-auto wow fadeInUp">
              <span className="h6 subtitle__icon__three d-inline-block">
                Instagram
              </span>
              <h2 className="content__title h2 lh-1 instagram-section__main-title">
                Follow on Instagram
              </h2>
              <p className="text-muted small mt-3 mb-0">
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {instagramHandle}
                </a>
              </p>
            </div>
          </div>
          <InstagramEmbedSection />
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
                    <a href="/rooms" aria-label="footer__link">
                      Rooms
                    </a>
                  </li>
                  <li>
                    <a href="/gallery" aria-label="footer__link">
                      Gallery
                    </a>
                  </li>
                  <li>
                    <a href="/about" aria-label="footer__link">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="/#contact-us" aria-label="footer__link">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="rts__widget">
                <span className="widget__title">Contact Us</span>
                <ul>
                  <li>
                    <a aria-label="footer__contact" href={`tel:${phoneTel}`}>
                      <i className="flaticon-phone-flip" /> {phoneDisplay}
                    </a>
                  </li>
                  <li>
                    <a
                      aria-label="footer__contact"
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="flaticon-whatsapp" /> WhatsApp
                    </a>
                  </li>
                  <li>
                    <a aria-label="footer__contact" href={`mailto:${email}`}>
                      <i className="flaticon-envelope" />
                      {email}
                    </a>
                  </li>
                  <li>
                    <a
                      aria-label="footer__contact"
                      href="https://maps.app.goo.gl/AmrPrVpN8Mp14rb87"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="flaticon-marker" />
                      Rruga e Kavajës, 1002 Tirana, Albania
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
                  Copyright © {new Date().getFullYear()} Garden Boutique Hotel.
                  All rights reserved.
                </p>
                <div className="footer__social__link">
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="link__item"
                  >
                    Instagram
                  </a>
                  <a
                    href={facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="link__item"
                  >
                    Facebook
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="link__item"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
