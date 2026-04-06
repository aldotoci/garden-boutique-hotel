import type { ReactNode } from "react";
import { HOTEL_CONTACT } from "@/data/hotelContact";

function InstagramIcon() {
  return (
    <svg
      className="home-contact-section__svg"
      viewBox="0 0 24 24"
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
      />
    </svg>
  );
}

export default function HomeContactSection() {
  const {
    email,
    phoneDisplay,
    phoneTel,
    whatsappUrl,
    instagramUrl,
    instagramHandle,
    facebookUrl,
  } = HOTEL_CONTACT;

  const items: {
    key: string;
    label: string;
    body: ReactNode;
    graphic: ReactNode;
  }[] = [
    {
      key: "phone",
      label: "Phone",
      body: (
        <a href={`tel:${phoneTel}`} className="home-contact-section__link">
          {phoneDisplay}
        </a>
      ),
      graphic: <i className="flaticon-phone-flip" />,
    },
    {
      key: "whatsapp",
      label: "WhatsApp",
      body: (
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="home-contact-section__link"
        >
          {phoneDisplay}
        </a>
      ),
      graphic: <i className="flaticon-whatsapp" />,
    },
    {
      key: "email",
      label: "Email",
      body: (
        <a href={`mailto:${email}`} className="home-contact-section__link">
          {email}
        </a>
      ),
      graphic: <i className="flaticon-envelope" />,
    },
    {
      key: "instagram",
      label: "Instagram",
      body: (
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="home-contact-section__link"
        >
          {instagramHandle}
        </a>
      ),
      graphic: <InstagramIcon />,
    },
    {
      key: "facebook",
      label: "Facebook",
      body: (
        <a
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="home-contact-section__link"
        >
          Garden Boutique Hotel
        </a>
      ),
      graphic: <i className="flaticon-facebook" />,
    },
  ];

  return (
    <div
      id="contact-us"
      className="rts__section is__home__main section__padding home-contact-section home-lower-trio"
    >
      <div className="container">
        <div className="row position-relative justify-content-center text-center mb-20">
          <div className="col-12 col-lg-8 col-xl-7 mx-auto wow fadeInUp">
            <span className="h6 subtitle__icon__three d-inline-block">
              Contact
            </span>
            <h2 className="content__title h2 lh-1">Contact us</h2>
            <p className="text-muted mt-3 mb-0">
              Call, WhatsApp, or email us — or connect on Instagram and Facebook.
            </p>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-5 g-4 justify-content-center">
          {items.map((item) => (
            <div key={item.key} className="col">
              <div className="card rts__card no-border is__home radius-6 h-100 text-center home-contact-section__card">
                <div className="card-body d-flex flex-column align-items-center py-4 px-3">
                  <div className="home-contact-section__icon mb-3" aria-hidden>
                    {item.graphic}
                  </div>
                  <span className="text-uppercase small fw-semibold text-muted mb-2">
                    {item.label}
                  </span>
                  <div className="small">{item.body}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
