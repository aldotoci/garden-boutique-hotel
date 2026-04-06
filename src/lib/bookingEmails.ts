import { Resend } from "resend";
import type { BookingRow } from "@/lib/bookingsDb";

/** Matches `public/assets/scss/default/_variables.scss` (light theme) */
const DESIGN = {
  accent: "#AB8A62",
  accentDark: "#8f734f",
  heading: "#1b1b1b",
  para: "#65676B",
  muted: "#989aa6",
  bgOuter: "#F1F1F1",
  bgCard: "#FFFFFF",
  bgSubtle: "#fafafa",
  border: "rgba(125, 128, 135, 0.25)",
  white: "#FFFFFF",
} as const;

const FONT_SERIF =
  "'Gilda Display', Georgia, 'Times New Roman', Times, serif";
const FONT_SANS =
  "'Jost', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

const HOTEL_TAGLINE =
  process.env.HOTEL_TAGLINE?.trim() || "Boutique stay · Tirana, Albania";

const HOTEL_NAME =
  process.env.HOTEL_NAME?.trim() || "Garden Boutique Hotel";

/** Indicative stay total for emails (nights × current nightly rate). */
export type BookingEmailPricing = {
  nights: number;
  nightlyDisplay: string;
  totalDisplay: string;
};

export type BookingEmailPayload = {
  bookingId: string;
  guestName: string;
  guestEmail: string;
  phone: string;
  room: string;
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  pricing?: BookingEmailPricing | null;
};

export function bookingRowToEmailPayload(row: BookingRow): BookingEmailPayload {
  return {
    bookingId: row.id,
    guestName: row.guestName,
    guestEmail: row.email,
    phone: row.phone,
    room: row.room,
    checkIn: row.checkIn,
    checkOut: row.checkOut,
    adults: row.adults,
    children: row.children,
  };
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function resendClient(): Resend | null {
  const key = process.env.RESEND_API_KEY?.trim();
  return key ? new Resend(key) : null;
}

function fromAddress(): string {
  return (
    process.env.EMAIL_FROM?.trim() ||
    `${HOTEL_NAME} <onboarding@resend.dev>`
  );
}

function ownerInbox(): string | null {
  const o = process.env.OWNER_EMAIL?.trim() || process.env.BOOKING_OWNER_EMAIL?.trim();
  return o || null;
}

function staySummary(p: BookingEmailPayload): string {
  const kids =
    p.children > 0
      ? `, ${p.children} child${p.children === 1 ? "" : "ren"}`
      : "";
  return `${p.room} · ${p.checkIn} → ${p.checkOut} · ${p.adults} adult${p.adults === 1 ? "" : "s"}${kids}`;
}

/** Table-based shell aligned with site theme (Gilda + Jost, bronze accent). */
function buildEmailDocument(options: {
  preheader: string;
  eyebrow: string;
  headline: string;
  bodyHtml: string;
  footerNote?: string;
}): string {
  const { preheader, eyebrow, headline, bodyHtml, footerNote } = options;
  const hn = escapeHtml(HOTEL_NAME);
  const tag = escapeHtml(HOTEL_TAGLINE);
  const foot =
    footerNote ??
    `This message was sent by ${HOTEL_NAME}. Please do not reply if you did not expect it.`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta http-equiv="x-ua-compatible" content="ie=edge" />
  <title>${hn}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Gilda+Display&family=Jost:ital,wght@0,400;0,500;0,600;1,400&display=swap" rel="stylesheet" />
</head>
<body style="margin:0;padding:0;background-color:${DESIGN.bgOuter};-webkit-font-smoothing:antialiased;">
  <div style="display:none;max-height:0;overflow:hidden;mso-hide:all;font-size:1px;line-height:1px;color:${DESIGN.bgOuter};opacity:0;">
    ${escapeHtml(preheader)}
  </div>
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:${DESIGN.bgOuter};">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="max-width:600px;width:100%;background-color:${DESIGN.bgCard};border-radius:16px;overflow:hidden;box-shadow:0 12px 40px rgba(27,27,27,0.08);border:1px solid ${DESIGN.border};">
          <tr>
            <td style="background:linear-gradient(135deg, ${DESIGN.accent} 0%, ${DESIGN.accentDark} 100%);padding:32px 28px;text-align:center;">
              <p style="margin:0 0 6px;font-family:${FONT_SANS};font-size:11px;font-weight:600;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.88);">
                ${escapeHtml(eyebrow)}
              </p>
              <h1 style="margin:0;font-family:${FONT_SERIF};font-size:28px;font-weight:400;line-height:1.25;color:${DESIGN.white};letter-spacing:0.02em;">
                ${hn}
              </h1>
              <p style="margin:10px 0 0;font-family:${FONT_SANS};font-size:14px;font-weight:400;color:rgba(255,255,255,0.92);">
                ${tag}
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 0 0;background-color:${DESIGN.bgCard};">
              <div style="height:3px;width:64px;margin:0 auto;background-color:${DESIGN.accent};border-radius:2px;"></div>
            </td>
          </tr>
          <tr>
            <td style="padding:28px 32px 8px;font-family:${FONT_SANS};">
              <h2 style="margin:0 0 20px;font-family:${FONT_SERIF};font-size:22px;font-weight:400;line-height:1.3;color:${DESIGN.heading};">
                ${escapeHtml(headline)}
              </h2>
              <div style="font-size:16px;line-height:1.65;color:${DESIGN.para};">
                ${bodyHtml}
              </div>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 32px 32px;font-family:${FONT_SANS};font-size:13px;line-height:1.55;color:${DESIGN.muted};border-top:1px solid ${DESIGN.border};background-color:${DESIGN.bgSubtle};">
              <p style="margin:20px 0 0;">${escapeHtml(foot)}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function pricingLinesHtml(pricing: BookingEmailPricing): string {
  const nightsLabel = pricing.nights === 1 ? "1 night" : `${pricing.nights} nights`;
  const total = escapeHtml(pricing.totalDisplay);
  const nightly = escapeHtml(pricing.nightlyDisplay);
  return `
      <p style="margin:14px 0 0;font-family:${FONT_SANS};font-size:15px;line-height:1.55;color:${DESIGN.heading};font-weight:500;">
        <span style="display:block;font-size:11px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:${DESIGN.accent};margin-bottom:6px;">Indicative total</span>
        ${total} <span style="font-weight:400;color:${DESIGN.para};">(${nightsLabel} × ${nightly} per night)</span>
      </p>`;
}

function stayDetailsBox(p: BookingEmailPayload): string {
  const summary = escapeHtml(staySummary(p));
  const priceBlock = p.pricing ? pricingLinesHtml(p.pricing) : "";
  return `
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin:24px 0;background-color:${DESIGN.bgSubtle};border-left:4px solid ${DESIGN.accent};border-radius:0 10px 10px 0;">
  <tr>
    <td style="padding:18px 20px;">
      <p style="margin:0 0 8px;font-family:${FONT_SANS};font-size:11px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;color:${DESIGN.accent};">Your stay</p>
      <p style="margin:0;font-family:${FONT_SANS};font-size:15px;line-height:1.55;color:${DESIGN.heading};font-weight:500;">${summary}</p>
      ${priceBlock}
    </td>
  </tr>
</table>`;
}

function ownerDetailsRows(p: BookingEmailPayload): string {
  const rows: { label: string; value: string }[] = [
    { label: "Booking ID", value: p.bookingId },
    { label: "Guest", value: p.guestName },
    { label: "Email", value: p.guestEmail },
    { label: "Phone", value: p.phone || "—" },
    { label: "Room", value: p.room },
    { label: "Check-in → Check-out", value: `${p.checkIn} → ${p.checkOut}` },
    {
      label: "Party",
      value: `${p.adults} adult${p.adults === 1 ? "" : "s"}, ${p.children} child${p.children === 1 ? "" : "ren"}`,
    },
    ...(p.pricing
      ? [
          {
            label: "Indicative total",
            value: `${p.pricing.totalDisplay} (${p.pricing.nights} night${p.pricing.nights === 1 ? "" : "s"} × ${p.pricing.nightlyDisplay}/night)`,
          },
        ]
      : []),
  ];
  return rows
    .map(
      (r) => `
<tr>
  <td style="padding:10px 0;border-bottom:1px solid ${DESIGN.border};font-family:${FONT_SANS};font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;color:${DESIGN.accent};width:38%;vertical-align:top;">
    ${escapeHtml(r.label)}
  </td>
  <td style="padding:10px 0 10px 12px;border-bottom:1px solid ${DESIGN.border};font-family:${FONT_SANS};font-size:15px;color:${DESIGN.heading};vertical-align:top;">
    ${escapeHtml(r.value)}
  </td>
</tr>`,
    )
    .join("");
}

/** Guest: right after they submit a booking (Pending). */
export async function sendGuestBookingReceivedEmail(
  p: BookingEmailPayload,
): Promise<void> {
  const resend = resendClient();
  if (!resend) {
    console.warn("[booking-email] RESEND_API_KEY missing; skip guest received email");
    return;
  }

  const name = escapeHtml(p.guestName);
  const bodyHtml = `
<p style="margin:0 0 16px;">Hello ${name},</p>
<p style="margin:0 0 16px;">Thank you for choosing <strong style="color:${DESIGN.heading};">${escapeHtml(HOTEL_NAME)}</strong>. We have received your booking request and our team will review it shortly.</p>
${stayDetailsBox(p)}
<p style="margin:0 0 16px;">You do not need to do anything else right now &mdash; a member of our staff will contact you soon to confirm availability and next steps.</p>
<p style="margin:0;font-size:14px;color:${DESIGN.muted};">If you did not submit this request, you can safely ignore this email.</p>`;

  const html = buildEmailDocument({
    preheader: `We received your request for ${p.room}. Our team will contact you soon.`,
    eyebrow: "Booking update",
    headline: "We have received your request",
    bodyHtml,
  });

  const { error } = await resend.emails.send({
    from: fromAddress(),
    to: p.guestEmail,
    subject: `${HOTEL_NAME} — we received your booking request`,
    html,
  });

  if (error) {
    console.error("[booking-email] guest received:", error);
  }
}

/** Owner: alert when a new booking request is created. */
export async function sendOwnerNewBookingEmail(
  p: BookingEmailPayload,
): Promise<void> {
  const resend = resendClient();
  const owner = ownerInbox();
  if (!resend) {
    console.warn("[booking-email] RESEND_API_KEY missing; skip owner email");
    return;
  }
  if (!owner) {
    console.warn("[booking-email] OWNER_EMAIL missing; skip owner email");
    return;
  }

  const bodyHtml = `
<p style="margin:0 0 16px;">A new booking request just arrived. Review it in your internal booking tools to accept or decline.</p>
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin:8px 0 20px;">
  ${ownerDetailsRows(p)}
</table>
<p style="margin:0;font-size:14px;color:${DESIGN.muted};">Use your <strong style="color:${DESIGN.heading};">bookings list</strong> to update the status.</p>`;

  const html = buildEmailDocument({
    preheader: `New request: ${p.guestName} · ${p.room}`,
    eyebrow: "Staff notification",
    headline: "New booking request",
    bodyHtml,
    footerNote: "Internal notification — do not forward guest details unnecessarily.",
  });

  const { error } = await resend.emails.send({
    from: fromAddress(),
    to: owner,
    subject: `New booking request — ${p.room.replace(/[\r\n]/g, " ")} (${p.bookingId.slice(0, 8)}…)`,
    html,
  });

  if (error) {
    console.error("[booking-email] owner new booking:", error);
  }
}

/** Guest: after staff sets status to Confirmed. */
export async function sendGuestBookingConfirmedEmail(
  p: BookingEmailPayload,
): Promise<void> {
  const resend = resendClient();
  if (!resend) {
    console.warn("[booking-email] RESEND_API_KEY missing; skip guest confirmed email");
    return;
  }

  const name = escapeHtml(p.guestName);
  const ref = escapeHtml(p.bookingId);
  const bodyHtml = `
<p style="margin:0 0 16px;">Hello ${name},</p>
<p style="margin:0 0 16px;">Wonderful news &mdash; your reservation at <strong style="color:${DESIGN.heading};">${escapeHtml(HOTEL_NAME)}</strong> is <span style="color:${DESIGN.accent};font-weight:600;">confirmed</span>. We look forward to welcoming you.</p>
${stayDetailsBox(p)}
<p style="margin:0 0 16px;">If you need to adjust your dates or have special requests, reply to this message or call us directly.</p>
<p style="margin:0;padding:14px 18px;background-color:${DESIGN.bgSubtle};border-radius:10px;font-size:13px;color:${DESIGN.muted};border:1px solid ${DESIGN.border};">
  <span style="display:block;font-size:11px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:${DESIGN.accent};margin-bottom:6px;">Reference</span>
  <span style="font-family:ui-monospace,monospace;color:${DESIGN.heading};font-size:14px;">${ref}</span>
</p>`;

  const html = buildEmailDocument({
    preheader: `Your stay is confirmed — ${p.checkIn} to ${p.checkOut}.`,
    eyebrow: "Reservation confirmed",
    headline: "Your stay is confirmed",
    bodyHtml,
    footerNote: `Keep your reference handy: ${p.bookingId.slice(0, 8)}…`,
  });

  const { error } = await resend.emails.send({
    from: fromAddress(),
    to: p.guestEmail,
    subject: `Your stay at ${HOTEL_NAME} is confirmed`,
    html,
  });

  if (error) {
    console.error("[booking-email] guest confirmed:", error);
  }
}
