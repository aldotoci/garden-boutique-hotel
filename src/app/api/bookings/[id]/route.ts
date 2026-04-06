import { after } from "next/server";
import { NextResponse, type NextRequest } from "next/server";
import { isAdminRequest } from "@/lib/adminAuth";
import { BOOKING_STATUSES, type BookingStatus } from "@/lib/bookingTypes";
import {
  bookingRowToEmailPayload,
  sendGuestBookingConfirmedEmail,
} from "@/lib/bookingEmails";
import { computeBookingStayPricing } from "@/lib/bookingStayPricing";
import { getBookingById, isValidBookingId, updateBookingStatus } from "@/lib/bookingsDb";

const ALLOWED_STATUSES: BookingStatus[] = [...BOOKING_STATUSES];

type Params = {
  params: Promise<{ id: string }>;
};

export async function PATCH(request: NextRequest, { params }: Params) {
  if (!isAdminRequest(request)) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const { id } = await params;

  if (!isValidBookingId(id)) {
    return NextResponse.json({ error: "Invalid booking ID." }, { status: 400 });
  }

  try {
    const body = await request.json();
    const status = String(body?.status ?? "") as BookingStatus;

    if (!ALLOWED_STATUSES.includes(status)) {
      return NextResponse.json({ error: "Invalid status value." }, { status: 400 });
    }

    const before = await getBookingById(id);
    if (!before) {
      return NextResponse.json({ error: "Booking not found." }, { status: 404 });
    }

    const updated = await updateBookingStatus(id, status);

    if (!updated) {
      return NextResponse.json({ error: "Booking not found." }, { status: 404 });
    }

    if (
      status === "Confirmed" &&
      before.status !== "Confirmed"
    ) {
      const base = bookingRowToEmailPayload({ ...before, status: "Confirmed" });
      after(async () => {
        const pricing = await computeBookingStayPricing(
          base.room,
          base.checkIn,
          base.checkOut,
        );
        await sendGuestBookingConfirmedEmail({
          ...base,
          ...(pricing ? { pricing } : {}),
        });
      });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Unable to update booking." }, { status: 400 });
  }
}
