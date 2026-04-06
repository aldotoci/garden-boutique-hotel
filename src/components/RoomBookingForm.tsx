"use client";

import { useEffect, useState } from "react";
import { formatStayRange } from "@/lib/stayDates";
import type { StaySearchNormalized } from "@/lib/stayDates";

type BookingPricingResponse = {
  nights: number;
  nightlyDisplay: string;
  totalDisplay: string;
};

type SuccessNotice = {
  bookingId: string;
  room: string;
  checkIn: string;
  checkOut: string;
  pricing: BookingPricingResponse | null;
};

interface RoomBookingFormProps {
  roomTitle: string;
  /** Filled from /rooms or home search query string */
  initialStay?: StaySearchNormalized;
}

export default function RoomBookingForm({
  roomTitle,
  initialStay,
}: RoomBookingFormProps) {
  const [guestName, setGuestName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [checkIn, setCheckIn] = useState(initialStay?.checkIn ?? "");
  const [checkOut, setCheckOut] = useState(initialStay?.checkOut ?? "");
  const [adults, setAdults] = useState(() =>
    Math.min(9, Math.max(1, parseInt(initialStay?.adults ?? "2", 10) || 2)),
  );
  const [children, setChildren] = useState(() =>
    Math.min(9, Math.max(0, parseInt(initialStay?.children ?? "0", 10) || 0)),
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [hasError, setHasError] = useState(false);
  const [successNotice, setSuccessNotice] = useState<SuccessNotice | null>(null);

  useEffect(() => {
    if (!initialStay) return;
    setCheckIn(initialStay.checkIn);
    setCheckOut(initialStay.checkOut);
    setAdults(Math.min(9, Math.max(1, parseInt(initialStay.adults, 10) || 2)));
    setChildren(Math.min(9, Math.max(0, parseInt(initialStay.children, 10) || 0)));
  }, [
    initialStay?.checkIn,
    initialStay?.checkOut,
    initialStay?.adults,
    initialStay?.children,
  ]);

  useEffect(() => {
    if (!successNotice) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSuccessNotice(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [successNotice]);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");
    setHasError(false);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          guestName,
          email,
          phone,
          room: roomTitle,
          checkIn,
          checkOut,
          adults,
          children,
        }),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result?.error || "Could not create booking.");
      }

      const rawPricing = result?.pricing;
      const pricing: BookingPricingResponse | null =
        rawPricing &&
        typeof rawPricing.nights === "number" &&
        typeof rawPricing.nightlyDisplay === "string" &&
        typeof rawPricing.totalDisplay === "string"
          ? {
              nights: rawPricing.nights,
              nightlyDisplay: rawPricing.nightlyDisplay,
              totalDisplay: rawPricing.totalDisplay,
            }
          : null;

      setSuccessNotice({
        bookingId: String(result.bookingId ?? ""),
        room: roomTitle,
        checkIn,
        checkOut,
        pricing,
      });

      setGuestName("");
      setEmail("");
      setPhone("");
      setCheckIn("");
      setCheckOut("");
      setAdults(2);
      setChildren(0);
    } catch (error) {
      setHasError(true);
      setMessage(error instanceof Error ? error.message : "Could not submit booking.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const dismissSuccess = () => setSuccessNotice(null);

  const stayRangeLabel =
    successNotice &&
    formatStayRange(successNotice.checkIn, successNotice.checkOut);

  return (
    <div id="book-your-stay" className="rts__booking__form has__background is__room__details">
      {successNotice ? (
        <div
          className="booking-success-overlay"
          role="presentation"
          onClick={dismissSuccess}
        >
          <div
            className="booking-success-dialog card shadow-lg border-0 bg-white"
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-success-title"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="booking-success-accent" aria-hidden />
            <div className="card-body p-4 p-md-5">
              <p
                className="small text-uppercase fw-semibold mb-2"
                style={{ letterSpacing: "0.1em", color: "#ab8a62" }}
              >
                Request received
              </p>
              <h2 id="booking-success-title" className="h4 mb-3" style={{ color: "#1b1b1b" }}>
                Thank you for your booking request
              </h2>
              <p className="text-muted small mb-3">
                We have emailed you a summary. Our team will contact you shortly to confirm availability.
              </p>

              <div
                className="rounded-3 p-3 mb-3"
                style={{
                  background: "#fafaf9",
                  border: "1px solid rgba(27,27,27,0.08)",
                }}
              >
                <p className="fw-semibold mb-2" style={{ color: "#1b1b1b" }}>
                  {successNotice.room}
                </p>
                {stayRangeLabel ? (
                  <p className="small text-muted mb-2 mb-0">{stayRangeLabel}</p>
                ) : null}
                {successNotice.pricing ? (
                  <div className="mt-3 pt-3 border-top border-dark border-opacity-10">
                    <p className="small text-muted mb-1">Indicative total for your stay</p>
                    <p className="h5 mb-0" style={{ color: "#1b1b1b" }}>
                      {successNotice.pricing.totalDisplay}
                    </p>
                    <p className="small text-muted mt-1 mb-0">
                      {successNotice.pricing.nights} night
                      {successNotice.pricing.nights === 1 ? "" : "s"} ×{" "}
                      {successNotice.pricing.nightlyDisplay} per night. Final amount confirmed by the hotel.
                    </p>
                  </div>
                ) : (
                  <p className="small text-muted mt-2 mb-0">
                    We will confirm pricing when we respond to your request.
                  </p>
                )}
              </div>

              {successNotice.bookingId ? (
                <p className="small text-muted mb-4 font-monospace">
                  Reference: {successNotice.bookingId.slice(0, 8)}…
                </p>
              ) : null}

              <button
                type="button"
                className="btn w-100 rounded-2 py-2 fw-semibold"
                style={{ background: "#1b1b1b", color: "#fff", border: "none" }}
                onClick={dismissSuccess}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <form onSubmit={onSubmit} className="advance__search">
        <h5 className="pt-0">Book Your Stay</h5>
        <div className="advance__search__wrapper">
          <div className="query__input wow fadeInUp">
            <label htmlFor="guest-name" className="query__label">
              Full Name
            </label>
            <div className="query__input__position">
              <input
                id="guest-name"
                type="text"
                value={guestName}
                onChange={(event) => setGuestName(event.target.value)}
                required
              />
            </div>
          </div>

          <div className="query__input wow fadeInUp">
            <label htmlFor="guest-email" className="query__label">
              Email
            </label>
            <div className="query__input__position">
              <input
                id="guest-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
          </div>

          <div className="query__input wow fadeInUp">
            <label htmlFor="guest-phone" className="query__label">
              Phone
            </label>
            <div className="query__input__position">
              <input
                id="guest-phone"
                type="tel"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
            </div>
          </div>

          <div className="query__input wow fadeInUp">
            <label htmlFor="rd-check-in" className="query__label">
              Check In
            </label>
            <div className="query__input__position">
              <input
                type="date"
                id="rd-check-in"
                value={checkIn}
                onChange={(event) => setCheckIn(event.target.value)}
                required
              />
              <div className="query__input__icon">
                <i className="flaticon-calendar" />
              </div>
            </div>
          </div>

          <div className="query__input wow fadeInUp">
            <label htmlFor="rd-check-out" className="query__label">
              Check Out
            </label>
            <div className="query__input__position">
              <input
                type="date"
                id="rd-check-out"
                value={checkOut}
                onChange={(event) => setCheckOut(event.target.value)}
                required
              />
              <div className="query__input__icon">
                <i className="flaticon-calendar" />
              </div>
            </div>
          </div>

          <div className="query__input wow fadeInUp">
            <label htmlFor="rd-adult" className="query__label">
              Adults
            </label>
            <div className="query__input__position">
              <select
                id="rd-adult"
                className="form-select"
                value={adults}
                onChange={(event) => setAdults(Number(event.target.value))}
              >
                {Array.from({ length: 9 }, (_, i) => i + 1).map((number) => (
                  <option key={number} value={number}>
                    {number}
                  </option>
                ))}
              </select>
              <div className="query__input__icon">
                <i className="flaticon-user" />
              </div>
            </div>
          </div>

          <div className="query__input wow fadeInUp">
            <label htmlFor="rd-children" className="query__label">
              Children
            </label>
            <div className="query__input__position">
              <select
                id="rd-children"
                className="form-select"
                value={children}
                onChange={(event) => setChildren(Number(event.target.value))}
              >
                {Array.from({ length: 10 }, (_, i) => i).map((number) => (
                  <option key={number} value={number}>
                    {number}
                  </option>
                ))}
              </select>
              <div className="query__input__icon">
                <i className="flaticon-user" />
              </div>
            </div>
          </div>

          {message && (
            <p className={`mb-0 ${hasError ? "text-danger" : "text-success"}`}>{message}</p>
          )}

          <button
            className="theme-btn btn-style fill no-border search__btn wow fadeInUp"
            type="submit"
            disabled={isSubmitting}
          >
            <span>{isSubmitting ? "Submitting..." : "Book Your Room"}</span>
          </button>
        </div>
      </form>
    </div>
  );
}
