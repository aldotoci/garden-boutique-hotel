export default function Footer() {
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
                  <a href="/rooms" aria-label="footer__link">
                    Rooms &amp; Suites
                  </a>
                </li>
                <li>
                  <a href="/restaurant" aria-label="footer__link">
                    Dining
                  </a>
                </li>
                <li>
                  <a href="/service" aria-label="footer__link">
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
                  <a aria-label="footer__contact" href="tel:+355692355555">
                    <i className="flaticon-phone-flip" /> +355 69 235 5555
                  </a>
                </li>
                <li>
                  <a
                    aria-label="footer__contact"
                    href="mailto:info@gardenboutiquehotel.com"
                  >
                    <i className="flaticon-envelope" /> info@gardenboutiquehotel.com
                  </a>
                </li>
                <li>
                  <a aria-label="footer__contact" href="#">
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
                  href="https://www.instagram.com/garden_boutiquehotel"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="link__item"
                >
                  Instagram
                </a>
                <a href="#" aria-label="footer__social" className="link__item">
                  Facebook
                </a>
                <a href="#" aria-label="footer__social" className="link__item">
                  Linkedin
                </a>
                <a href="#" aria-label="footer__social" className="link__item">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
