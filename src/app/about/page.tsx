import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";
import { HOTEL_CONTACT } from "@/data/hotelContact";

export const metadata: Metadata = {
  title: "About us | Garden Boutique Hotel",
  description:
    "Garden Boutique Hotel opened in 2022 in the heart of Tirana — modern building, new facilities, great views, and a central location close to everything.",
};

const MAP_URL = "https://maps.app.goo.gl/AmrPrVpN8Mp14rb87";

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        title="About Garden Boutique Hotel"
        desc="A new boutique address in central Tirana — opened in 2022 with contemporary comfort, bright views, and the city at your doorstep."
        backgroundImageUrl="https://cf.bstatic.com/xdata/images/hotel/max2024x2024/529650128.jpg?k=75a6f3f1e2c92b6ba640e32dd7cfd578e7c73680732ac120ee484f0c14008cda&o="
      />

      <div className="rts__section about__area section__padding">
        <div className="section__shape d-none d-xl-block">
          <img src="/assets/images/about/section__shape.svg" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="about__wrapper">
              <div className="image">
                <div className="position-relative">
                  <div className="jara-mask-1 jarallax image-height">
                    <img
                      src="/assets/images/banner/2.webp"
                      className="jarallax-img"
                      alt="Garden Boutique Hotel building and surroundings in Tirana"
                    />
                  </div>
                </div>
                <div className="image__card radius-10">
                  <div className="icon radius-10 center-item">
                    <i className="flaticon-marker" aria-hidden />
                  </div>
                  <div className="content">
                    <span className="h5">2022</span>
                    <p>Year we opened</p>
                  </div>
                </div>
                <div className="image__card__image">
                  <img
                    src="/assets/images/banner/1.webp"
                    width={312}
                    height={230}
                    alt="View from Garden Boutique Hotel"
                  />
                </div>
              </div>
              <div className="content">
                <span className="h6 subtitle__icon__two d-block">
                  Our story
                </span>
                <h2 className="content__title">
                  In the middle of Tirana — with space to breathe
                </h2>
                <div className="content__subtitle">
                  <p className="mb-3 mb-lg-4">
                    Garden Boutique Hotel is a{" "}
                    <strong>new property that welcomed its first guests in 2022</strong>
                    . We set out to offer something fresh: a thoughtfully designed
                    building, up-to-date facilities, and the energy of a capital
                    city — without sacrificing calm, comfort, or a real sense of
                    place.
                  </p>
                  <p className="mb-3 mb-lg-4">
                    Our location on{" "}
                    <a
                      href={MAP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-underline"
                    >
                      Rruga e Kavajës
                    </a>{" "}
                    puts you <strong>in the heart of Tirana</strong>, minutes from
                    cafés, dining, business districts, and cultural highlights.
                    Whether you are here for work or a weekend, you stay{" "}
                    <strong>close to everything</strong> that makes the city
                    worth exploring.
                  </p>
                  <p className="mb-0">
                    Large windows and well-planned layouts mean{" "}
                    <strong>generous natural light and rewarding views</strong>{" "}
                    over the urban landscape. From the architecture to the finishes,
                    the hotel reflects a single idea: a modern, welcoming base
                    for travelers who expect quality, clarity, and genuine
                    hospitality.
                  </p>
                </div>
                <div className="d-flex flex-wrap gap-3 mt-4">
                  <Link
                    href="/rooms"
                    className="theme-btn btn-style fill no-border"
                  >
                    <span>View rooms</span>
                  </Link>
                  <Link
                    href="/#contact-us"
                    className="about-page__btn-secondary theme-btn btn-style border"
                  >
                    <span>Contact us</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rts__section facilities__area has__background has__shape py-90">
        <div className="section__shape">
          <img src="/assets/images/shape/facility-1.svg" alt="" />
        </div>
        <div className="container">
          <div className="row position-relative justify-content-center text-center mb-40">
            <div className="col-12 col-lg-8 col-xl-7 mx-auto">
              <span className="h6 subtitle__icon__three d-inline-block">
                Why guests choose us
              </span>
              <h2 className="content__title h2 lh-1">
                New hotel, central city, effortless stay
              </h2>
              <p className="text-muted mt-3 mb-0">
                Everything we have built — from the rooms to the common areas —
                is aimed at making your time in Tirana simple, comfortable, and
                memorable.
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="card rts__card no-border is__home radius-6 h-100">
                <div className="card-body">
                  <div className="icon">
                    <img src="/assets/images/icon/calendar-2.svg" alt="" />
                  </div>
                  <h3 className="card-title h6 mb-15">Opened in 2022</h3>
                  <p className="card-text mb-0">
                    A young hotel with contemporary systems, fresh interiors, and
                    equipment chosen for today&apos;s travelers — not yesterday&apos;s
                    compromises.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="card rts__card no-border is__home radius-6 h-100">
                <div className="card-body">
                  <div className="icon">
                    <img src="/assets/images/icon/locatin.svg" alt="" />
                  </div>
                  <h3 className="card-title h6 mb-15">True city center</h3>
                  <p className="card-text mb-0">
                    Step outside and you are in the flow of Tirana — walkable to
                    restaurants, shops, and key destinations without long transfers
                    or taxi dependence.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="card rts__card no-border is__home radius-6 h-100">
                <div className="card-body">
                  <div className="icon">
                    <img src="/assets/images/icon/balcony.svg" alt="" />
                  </div>
                  <h3 className="card-title h6 mb-15">Light &amp; outlook</h3>
                  <p className="card-text mb-0">
                    Rooms and shared spaces are designed to capture daylight and
                    city views — a pleasant backdrop whether you are unwinding or
                    catching up on email.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="card rts__card no-border is__home radius-6 h-100">
                <div className="card-body">
                  <div className="icon">
                    <img src="/assets/images/icon/room.svg" alt="" />
                  </div>
                  <h3 className="card-title h6 mb-15">Quality building &amp; facilities</h3>
                  <p className="card-text mb-0">
                    From the structure to the amenities, we invested in a property
                    that feels solid, quiet, and well maintained — the kind of place
                    you are happy to return to after a full day in the city.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rts__section section__padding pb-120 about-visit-cta">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12 col-lg-10 col-xl-8 mx-auto">
              <span className="h6 subtitle__icon__three d-inline-block">
                Visit us
              </span>
              <h2 className="about-visit-cta__main-title content__title h2 lh-1 mb-3">
                Plan your stay in Tirana
              </h2>
              <p className="text-muted mb-4">
                Questions about rooms, groups, or special requests? Reach us by
                phone, email, or WhatsApp — we are happy to help.
              </p>
              <p className="mb-4">
                <a
                  className="theme-btn btn-style fill no-border me-2 me-sm-3 mb-2 d-inline-block"
                  href={`tel:${HOTEL_CONTACT.phoneTel}`}
                >
                  <span>Call {HOTEL_CONTACT.phoneDisplay}</span>
                </a>
                <a
                  className="theme-btn btn-style fill no-border mb-2 d-inline-block"
                  href={HOTEL_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>WhatsApp</span>
                </a>
              </p>
              <p className="small text-muted mb-0">
                <a href={`mailto:${HOTEL_CONTACT.email}`}>{HOTEL_CONTACT.email}</a>
                {" · "}
                <a href={MAP_URL} target="_blank" rel="noopener noreferrer">
                  Rruga e Kavajës, 1002 Tirana, Albania
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
