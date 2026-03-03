import Link from "next/link";
import { rooms } from "@/data/rooms";

export default function OffcanvasMenu() {
  return (
    <div className="offcanvas offcanvas-start" id="offcanvasRight">
      <div className="rts__btstrp__offcanvase">
        <div className="offcanvase__wrapper">
          {/* Mobile menu (left side) */}
          <div className="left__side mobile__menu">
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
            <div className="offcanvase__top">
              <div className="offcanvase__logo">
                <Link href="/">
                  <img src="/assets/images/logo.jpg" alt="Garden Boutique Hotel" />
                </Link>
              </div>
              <p className="description">
                Welcome to Moonlit, where luxury meets comfort in the heart of
                canada. Since 1999, we have been dedicated to providing.
              </p>
            </div>
            <div className="offcanvase__mobile__menu">
              <div className="mobile__menu__active" />
            </div>
            <div className="offcanvase__bottom">
              <div className="offcanvase__address">
                <div className="item">
                  <span className="h6">Phone</span>
                  <a href="tel:+12505550199">
                    <i className="flaticon-phone-flip" /> +12505550199
                  </a>
                </div>
                <div className="item">
                  <span className="h6">Email</span>
                  <a href="mailto:moonlit@gmail.com">
                    <i className="flaticon-envelope" /> moonlit@gmail.com
                  </a>
                </div>
                <div className="item">
                  <span className="h6">Address</span>
                  <a href="#">
                    <i className="flaticon-marker" /> 280 Augusta Avenue, M5T
                    2L9 Toronto, Canada
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop offcanvas nav (right side) */}
          <div className="right__side desktop__menu">
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
            <div className="rts__desktop__menu">
              <nav className="desktop__menu offcanvas__menu">
                <ul className="list-unstyled">
                  <li className="slide">
                    <Link className="slide__menu__item" href="/">
                      Home
                    </Link>
                  </li>

                  <li className="slide">
                    <Link className="slide__menu__item" href="/about">
                      About us
                    </Link>
                  </li>

                  <li className="slide has__children">
                    <a className="slide__menu__item" href="#">
                      Rooms
                      <span className="toggle" />
                    </a>
                    <ul className="slide__menu">
                      <li>
                        <Link href="/rooms">All Rooms</Link>
                      </li>
                      {rooms.map((room) => (
                        <li key={room.slug}>
                          <Link href={`/room-details/${room.slug}`}>
                            {room.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>

                  <li className="slide has__children">
                    <a className="slide__menu__item" href="#">
                      Blog
                      <span className="toggle" />
                    </a>
                    <ul className="slide__menu">
                      <li>
                        <Link href="/blog">Blog</Link>
                      </li>
                      <li>
                        <Link href="/blog-details">Blog Details</Link>
                      </li>
                    </ul>
                  </li>

                  <li className="slide has__children">
                    <a className="slide__menu__item" href="#">
                      Pages
                      <span className="toggle" />
                    </a>
                    <ul className="slide__menu">
                      <li>
                        <Link href="/restaurant">Restaurant</Link>
                      </li>
                      <li>
                        <Link href="/gallery">Gallery</Link>
                      </li>
                      <li>
                        <Link href="/service">Service</Link>
                      </li>
                      <li>
                        <Link href="/event">Event</Link>
                      </li>
                      <li>
                        <Link href="/activities">Activities</Link>
                      </li>
                    </ul>
                  </li>

                  <li className="slide">
                    <Link className="slide__menu__item" href="/contact">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
