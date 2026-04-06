import { sql } from "@vercel/postgres";
import { BOOKING_STATUSES, type BookingStatus } from "@/lib/bookingTypes";

export interface BookingRow {
  id: string;
  guestName: string;
  email: string;
  phone: string;
  room: string;
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  source: string;
  status: BookingStatus;
  createdAt: string;
}

function normalizeStatus(value: string): BookingStatus {
  return BOOKING_STATUSES.includes(value as BookingStatus) ? (value as BookingStatus) : "Pending";
}

function mapRow(row: {
  id: string;
  guest_name: string;
  email: string;
  phone: string | null;
  room: string;
  check_in: string;
  check_out: string;
  adults: number;
  children: number;
  source: string;
  status: string;
  created_at: Date;
}): BookingRow {
  return {
    id: row.id,
    guestName: row.guest_name,
    email: row.email,
    phone: row.phone ?? "",
    room: row.room,
    checkIn: row.check_in,
    checkOut: row.check_out,
    adults: row.adults,
    children: row.children,
    source: row.source,
    status: normalizeStatus(row.status),
    createdAt:
      row.created_at instanceof Date
        ? row.created_at.toISOString()
        : String(row.created_at),
  };
}

export async function listBookings(limit = 200): Promise<BookingRow[]> {
  const { rows } = await sql`
    SELECT
      id::text,
      guest_name,
      email,
      phone,
      room,
      check_in,
      check_out,
      adults,
      children,
      source,
      status,
      created_at
    FROM bookings
    ORDER BY created_at DESC
    LIMIT ${limit}
  `;
  return rows.map((row) =>
    mapRow(
      row as {
        id: string;
        guest_name: string;
        email: string;
        phone: string | null;
        room: string;
        check_in: string;
        check_out: string;
        adults: number;
        children: number;
        source: string;
        status: string;
        created_at: Date;
      },
    ),
  );
}

export async function createBooking(input: {
  guestName: string;
  email: string;
  phone: string;
  room: string;
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
}): Promise<string> {
  const { rows } = await sql`
    INSERT INTO bookings (
      guest_name,
      email,
      phone,
      room,
      check_in,
      check_out,
      adults,
      children,
      source,
      status
    )
    VALUES (
      ${input.guestName},
      ${input.email.toLowerCase()},
      ${input.phone},
      ${input.room},
      ${input.checkIn},
      ${input.checkOut},
      ${input.adults},
      ${input.children},
      'Website',
      'Pending'
    )
    RETURNING id::text
  `;
  const id = rows[0]?.id;
  if (!id) {
    throw new Error("Insert did not return id");
  }
  return String(id);
}

export async function getBookingById(id: string): Promise<BookingRow | null> {
  const { rows } = await sql`
    SELECT
      id::text,
      guest_name,
      email,
      phone,
      room,
      check_in,
      check_out,
      adults,
      children,
      source,
      status,
      created_at
    FROM bookings
    WHERE id = ${id}::uuid
    LIMIT 1
  `;
  const row = rows[0] as
    | {
        id: string;
        guest_name: string;
        email: string;
        phone: string | null;
        room: string;
        check_in: string;
        check_out: string;
        adults: number;
        children: number;
        source: string;
        status: string;
        created_at: Date;
      }
    | undefined;
  return row ? mapRow(row) : null;
}

export async function updateBookingStatus(
  id: string,
  status: BookingStatus,
): Promise<boolean> {
  const { rows } = await sql`
    UPDATE bookings
    SET status = ${status}, updated_at = NOW()
    WHERE id = ${id}::uuid
    RETURNING id
  `;
  return rows.length > 0;
}

export function isValidBookingId(id: string): boolean {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
    id,
  );
}
