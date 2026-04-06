import { HOTEL_CONTACT } from "@/data/hotelContact";

export default function Footer() {
  const {
    email,
    phoneDisplay,
    phoneTel,
    whatsappUrl,
    instagramUrl,
    facebookUrl,
  } = HOTEL_CONTACT;

  return (
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
                    <i className="flaticon-envelope" /> {email}
                  </a>
                </li>
                <li>
                  <a
                    aria-label="footer__contact"
                    href="https://maps.app.goo.gl/AmrPrVpN8Mp14rb87"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="flaticon-marker" /> Rruga e Kavajës, 1002 Tirana, Albania
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
              <p className="mb-0">Copyright &copy; {new Date().getFullYear()} Garden Boutique Hotel. All rights reserved.</p>
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
  );
}
