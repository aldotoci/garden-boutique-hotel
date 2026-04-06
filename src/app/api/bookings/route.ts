import { after } from "next/server";
import { NextResponse, type NextRequest } from "next/server";
import { isAdminRequest } from "@/lib/adminAuth";
import { BOOKING_STATUSES, type BookingStatus } from "@/lib/bookingTypes";
import {
  sendGuestBookingReceivedEmail,
  sendOwnerNewBookingEmail,
} from "@/lib/bookingEmails";
import { computeBookingStayPricing } from "@/lib/bookingStayPricing";
import { createBooking, listBookings } from "@/lib/bookingsDb";

const ALLOWED_STATUSES: BookingStatus[] = [...BOOKING_STATUSES];

export async function GET(request: NextRequest) {
  if (!isAdminRequest(request)) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const bookings = await listBookings(200);

  return NextResponse.json({
    bookings: bookings.map((booking) => ({
      id: booking.id,
      guestName: booking.guestName,
      email: booking.email,
      phone: booking.phone,
      room: booking.room,
      checkIn: booking.checkIn,
      checkOut: booking.checkOut,
      adults: booking.adults,
      children: booking.children,
      source: booking.source,
      status: ALLOWED_STATUSES.includes(booking.status) ? booking.status : "Pending",
      createdAt: booking.createdAt,
    })),
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const guestName = String(body?.guestName ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const phone = String(body?.phone ?? "").trim();
    const room = String(body?.room ?? "").trim();
    const checkIn = String(body?.checkIn ?? "").trim();
    const checkOut = String(body?.checkOut ?? "").trim();
    const adults = Number(body?.adults ?? 1);
    const children = Number(body?.children ?? 0);

    if (!guestName || !email || !room || !checkIn || !checkOut) {
      return NextResponse.json(
        { error: "Missing required booking fields." },
        { status: 400 },
      );
    }

    const adultsN = Number.isFinite(adults) ? adults : 1;
    const childrenN = Number.isFinite(children) ? children : 0;

    const bookingId = await createBooking({
      guestName,
      email,
      phone,
      room,
      checkIn,
      checkOut,
      adults: adultsN,
      children: childrenN,
    });

    const pricing = await computeBookingStayPricing(room, checkIn, checkOut);

    const emailPayload = {
      bookingId,
      guestName,
      guestEmail: email.toLowerCase(),
      phone,
      room,
      checkIn,
      checkOut,
      adults: adultsN,
      children: childrenN,
      ...(pricing ? { pricing } : {}),
    };

    after(async () => {
      await Promise.all([
        sendGuestBookingReceivedEmail(emailPayload),
        sendOwnerNewBookingEmail(emailPayload),
      ]);
    });

    return NextResponse.json(
      {
        success: true,
        bookingId,
        pricing: pricing ?? null,
      },
      { status: 201 },
    );
  } catch {
    return NextResponse.json({ error: "Unable to create booking." }, { status: 400 });
  }
}
