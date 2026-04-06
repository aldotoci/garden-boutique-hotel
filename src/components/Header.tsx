import Link from "next/link";
import MobileMenuButton from "@/components/MobileMenuButton";
import { rooms } from "@/data/rooms";

export default function Header() {
  return (
    <>
      {/* Top bar — theme hides under 576px; keep visible on small screens; desktop uses classic row/cols */}
      <div className="header__top max-[576px]:!block">
        <div className="container">
          <div className="row justify-content-between align-items-center gy-2 gy-md-0">
            <div className="col-12 col-md-6">
              <div className="social__links flex flex-wrap items-center justify-center gap-x-4 gap-y-2 md:justify-start md:gap-x-6">
                <a className="link__item gap-10 inline-flex shrink-0 items-center" href="tel:+355692355555">
                  <i className="flaticon-phone-flip shrink-0" aria-hidden />
                  +355 69 235 5555
                </a>
                <a
                  className="link__item gap-10 inline-flex min-w-0 max-w-full items-center"
                  href="mailto:hotelgardenboutique@gmail.com"
                >
                  <i className="flaticon-envelope shrink-0" aria-hidden />
                  <span className="min-w-0 break-words">hotelgardenboutique@gmail.com</span>
                </a>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="location flex justify-center md:justify-end">
                <a
                  className="link__item gap-10 inline-flex max-w-full items-center text-center md:max-w-none md:text-end"
                  href="https://maps.app.goo.gl/AmrPrVpN8Mp14rb87"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="flaticon-marker shrink-0" aria-hidden />
                  <span className="min-w-0">Rruga e Kavajës, 1002 Tirana, Albania</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="main__header header__function">
        <div className="container">
          <div className="row">
            <div className="main__header__wrapper">
              <div className="main__nav">
                {/* d-none d-lg-block hides on mobile — mobile uses offcanvas */}
                <div className="navigation d-none d-lg-block">
                  <nav className="navigation__menu" id="main__menu">
                    <ul className="list-unstyled">
                      <li className="navigation__menu--item">
                        <Link href="/" className="navigation__menu--item__link">
                          Home
                        </Link>
                      </li>

                      <li className="navigation__menu--item has-child has-arrow">
                        <a href="#" className="navigation__menu--item__link">
                          Rooms
                        </a>
                        <ul className="submenu sub__style" role="menu">
                          <li role="menuitem">
                            <Link href="/rooms">All Rooms</Link>
                          </li>
                          {rooms.map((room) => (
                            <li key={room.slug} role="menuitem">
                              <Link href={`/room-details/${room.slug}`}>
                                {room.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>

                      <li className="navigation__menu--item has-child has-arrow">
                        <a href="#" className="navigation__menu--item__link">
                          Pages
                        </a>
                        <ul className="submenu sub__style" role="menu">
                          <li role="menuitem">
                            <Link href="/about">About</Link>
                          </li>
                          <li role="menuitem">
                            <Link href="/gallery">Gallery</Link>
                          </li>
                        </ul>
                      </li>

                      <li className="navigation__menu--item">
                        <Link
                          href="/#contact-us"
                          className="navigation__menu--item__link"
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              <div className="main__logo">
                <Link href="/">
                  <img
                    className="logo__class"
                    src="/assets/images/logo.jpg"
                    alt="Garden Boutique Hotel"
                  />
                </Link>
              </div>

              <div className="main__right">
                <Link
                  href="/room-details/twin-room"
                  className="theme-btn btn-style sm-btn fill"
                >
                  <span>Book Now</span>
                </Link>
                <MobileMenuButton className="theme-btn btn-style sm-btn fill menu__btn d-lg-none">
                  <span>
                    <img src="/assets/images/icon/menu-icon.svg" alt="" />
                  </span>
                </MobileMenuButton>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
