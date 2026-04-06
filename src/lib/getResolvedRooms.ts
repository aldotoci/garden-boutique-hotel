import {
  formatNightlyPriceDisplay,
  rooms,
  type RoomListing,
} from "@/data/rooms";
import { getNightlyPriceOverrides } from "@/lib/roomPricesDb";

/** Public room rows with `price` reflecting DB overrides when present. */
export async function getResolvedRooms(): Promise<RoomListing[]> {
  const overrides = await getNightlyPriceOverrides();
  return rooms.map((room) => {
    const nightly = overrides.get(room.slug) ?? room.nightlyPrice;
    return {
      ...room,
      nightlyPrice: nightly,
      price: formatNightlyPriceDisplay(nightly),
    };
  });
}
