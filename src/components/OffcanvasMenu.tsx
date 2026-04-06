"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useMobileMenu } from "@/components/MobileMenuProvider";
import { rooms } from "@/data/rooms";

type ExpandedSection = "rooms" | "pages" | null;

export default function OffcanvasMenu() {
  const { open, closeMenu } = useMobileMenu();
  const pathname = usePathname();
  const prevPathname = useRef(pathname);
  const [expanded, setExpanded] = useState<ExpandedSection>(null);

  useEffect(() => {
    if (prevPathname.current !== pathname) {
      closeMenu();
      prevPathname.current = pathname;
    }
  }, [pathname, closeMenu]);

  useEffect(() => {
    if (!open) setExpanded(null);
  }, [open]);

  const toggleSection = (key: Exclude<ExpandedSection, null>) => {
    setExpanded((current) => (current === key ? null : key));
  };

  return (
    <>
      {open ? (
        <div
          className="offcanvas-backdrop fade show"
          aria-hidden
          onClick={closeMenu}
        />
      ) : null}

      <div
        className={`offcanvas offcanvas-start${open ? " show" : ""}`}
        id="offcanvasRight"
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
      >
        <div className="rts__btstrp__offcanvase">
          <div className="offcanvase__wrapper">
            {/* Mobile menu (left side) */}
            <div className="left__side mobile__menu">
              <button
                type="button"
                className="btn-close btn-close-white"
                onClick={closeMenu}
                aria-label="Close"
              />
              <div className="offcanvase__top">
                <div className="offcanvase__logo">
                  <Link href="/" onClick={closeMenu}>
                    <img src="/assets/images/logo.jpg" alt="Garden Boutique Hotel" />
                  </Link>
                </div>
                <p className="description">
                  Garden Boutique Hotel — a calm, green retreat in the heart of
                  Tirana, with thoughtful rooms and attentive service.
                </p>
              </div>
              <div className="offcanvase__mobile__menu">
                <div className="mobile__menu__active" />
              </div>
              <div className="offcanvase__bottom">
                <div className="offcanvase__address">
                  <div className="item">
                    <span className="h6">Phone</span>
                    <a href="tel:+355692355555">
                      <i className="flaticon-phone-flip" /> +355 69 235 5555
                    </a>
                  </div>
                  <div className="item">
                    <span className="h6">Email</span>
                    <a href="mailto:hotelgardenboutique@gmail.com">
                      <i className="flaticon-envelope" /> hotelgardenboutique@gmail.com
                    </a>
                  </div>
                  <div className="item">
                    <span className="h6">Address</span>
                    <a
                      href="https://maps.app.goo.gl/AmrPrVpN8Mp14rb87"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="flaticon-marker" /> Rruga e Kavajës, 1002
                      Tirana, Albania
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
                onClick={closeMenu}
                aria-label="Close"
              />
              <div className="rts__desktop__menu">
                <nav className="desktop__menu offcanvas__menu">
                  <ul className="list-unstyled">
                    <li className="slide">
                      <Link className="slide__menu__item" href="/" onClick={closeMenu}>
                        Home
                      </Link>
                    </li>

                    <li className="slide">
                      <Link className="slide__menu__item" href="/about" onClick={closeMenu}>
                        About us
                      </Link>
                    </li>

                    <li
                      className={`slide has__children${expanded === "rooms" ? " active" : ""}`}
                    >
                      <a
                        className="slide__menu__item"
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleSection("rooms");
                        }}
                      >
                        Rooms
                        <span className="toggle" />
                      </a>
                      <ul className="slide__menu">
                        <li>
                          <Link href="/rooms" onClick={closeMenu}>
                            All Rooms
                          </Link>
                        </li>
                        {rooms.map((room) => (
                          <li key={room.slug}>
                            <Link href={`/room-details/${room.slug}`} onClick={closeMenu}>
                              {room.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>

                    <li
                      className={`slide has__children${expanded === "pages" ? " active" : ""}`}
                    >
                      <a
                        className="slide__menu__item"
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleSection("pages");
                        }}
                      >
                        Pages
                        <span className="toggle" />
                      </a>
                      <ul className="slide__menu">
                        <li>
                          <Link href="/gallery" onClick={closeMenu}>
                            Gallery
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="slide">
                      <Link className="slide__menu__item" href="/#contact-us" onClick={closeMenu}>
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
    </>
  );
}
