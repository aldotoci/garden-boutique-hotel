import { formatNightlyPriceDisplay } from "@/data/rooms";
import { getResolvedRooms } from "@/lib/getResolvedRooms";
import {
  resolveRoomTypeSlug,
  type RoomTypeSlug,
} from "@/lib/roomInventory";
import { nightsBetween } from "@/lib/stayDates";
import type { BookingEmailPricing } from "@/lib/bookingEmails";

function listingSlugFromRoomType(rt: RoomTypeSlug): string {
  if (rt === "standard-double") return "standard-double-room";
  return rt;
}

/**
 * Resolves nightly rate from current published prices (including DB overrides)
 * and multiplies by stay length. Returns null if dates are invalid or room unknown.
 */
export async function computeBookingStayPricing(
  roomTitle: string,
  checkIn: string,
  checkOut: string,
): Promise<BookingEmailPricing | null> {
  const nights = nightsBetween(checkIn, checkOut);
  if (nights <= 0) return null;

  const resolved = await getResolvedRooms();
  const normalized = roomTitle.trim().toLowerCase();

  let match = resolved.find((r) => r.title.trim().toLowerCase() === normalized);

  if (!match) {
    const typeSlug = resolveRoomTypeSlug(roomTitle);
    if (typeSlug) {
      const listingSlug = listingSlugFromRoomType(typeSlug);
      match = resolved.find((r) => r.slug === listingSlug);
    }
  }

  if (!match) return null;

  const total = Math.round(match.nightlyPrice * nights * 100) / 100;

  return {
    nights,
    nightlyDisplay: formatNightlyPriceDisplay(match.nightlyPrice),
    totalDisplay: formatNightlyPriceDisplay(total),
  };
}
