import Link from "next/link";
import { rooms } from "@/data/rooms";

export default function Header() {
  return (
    <>
      {/* Top bar */}
      <div className="header__top">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6 col-md-6">
              <div className="social__links">
                <a className="link__item gap-10" href="tel:+355692355555">
                  <i className="flaticon-phone-flip" /> +355 69 235 5555
                </a>
                <a className="link__item gap-10" href="mailto:#">
                  <i className="flaticon-envelope" /> info@gardenboutiquehotel.com
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="location">
                <a className="link__item gap-10" href="#">
                  <i className="flaticon-marker" />
                  Rruga e Kavajës, 1002 Tirana, Albania
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
                            <Link href="/restaurant">Restaurant</Link>
                          </li>
                          <li role="menuitem">
                            <Link href="/gallery">Gallery</Link>
                          </li>
                          <li role="menuitem">
                            <Link href="/service">Service</Link>
                          </li>
                          <li role="menuitem">
                            <Link href="/event">Event</Link>
                          </li>
                          <li role="menuitem">
                            <Link href="/activities">Activities</Link>
                          </li>
                        </ul>
                      </li>

                      <li className="navigation__menu--item has-child has-arrow">
                        <a href="#" className="navigation__menu--item__link">
                          Blog
                        </a>
                        <ul className="submenu sub__style" role="menu">
                          <li role="menuitem">
                            <Link href="/blog">Blog</Link>
                          </li>
                          <li role="menuitem">
                            <Link href="/blog-details">Blog Details</Link>
                          </li>
                        </ul>
                      </li>

                      <li className="navigation__menu--item">
                        <Link
                          href="/contact"
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
                <a
                  href="#"
                  className="theme-btn btn-style sm-btn border d-none d-lg-block"
                  aria-label="Login Button"
                  data-bs-toggle="modal"
                  data-bs-target="#loginModal"
                >
                  <span>Sign In</span>
                </a>
                <a
                  href="#"
                  className="theme-btn btn-style sm-btn border d-none d-lg-block"
                  aria-label="Sign Up Button"
                  data-bs-toggle="modal"
                  data-bs-target="#signupModal"
                >
                  <span>Sign Up</span>
                </a>
                <Link
                  href="/room-details/twin-room"
                  className="theme-btn btn-style sm-btn fill"
                >
                  <span>Book Now</span>
                </Link>
                <button
                  className="theme-btn btn-style sm-btn fill menu__btn d-lg-none"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                >
                  <span>
                    <img src="/assets/images/icon/menu-icon.svg" alt="" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
