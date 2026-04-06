export const BOOKING_STATUSES = [
  "Pending",
  "Confirmed",
  "Rejected",
  "Checked-in",
  "Checked-out",
] as const;

export type BookingStatus = (typeof BOOKING_STATUSES)[number];
