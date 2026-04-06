/** Canonical nightly rate (euros); `price` is the formatted display string. */
export type RoomListing = {
  thumb: string;
  /** Display string, e.g. "€100"; replaced when merged with DB overrides. */
  price: string;
  title: string;
  slug: string;
  person: string;
  nightlyPrice: number;
};

export const rooms: RoomListing[] = [
  {
    thumb:
      "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/529639894.jpg?k=6b90318d747d4905d009b2f9ecac4f2a0f310e6aa24c62f7bcf06e4567e50ea0&o=",
    nightlyPrice: 100,
    price: "€100",
    title: "Twin Room",
    slug: "twin-room",
    person: "2",
  },
  {
    thumb:
      "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/529650128.jpg?k=a919a58311f8b650997f9b3d5c75cc11677c9fd60acd8748ba0e7c6d97abbbd2&o=",
    nightlyPrice: 130,
    price: "€130",
    title: "Standard Double Room",
    slug: "standard-double-room",
    person: "2",
  },
  {
    thumb:
      "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/529655647.jpg?k=667a18b4dfd6277c6d15b18c7d99d7dcc904e8ded58f3cd35818b92e9f2b842f&o=",
    nightlyPrice: 140,
    price: "€140",
    title: "Triple Room",
    slug: "triple-room",
    person: "5",
  },
  {
    thumb:
      "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/624500775.jpg?k=9c7883fc2c4492d1b0f96d41752a219a6f8868a008238bd0e4cbfbbb7da25829&o=",
    nightlyPrice: 120,
    price: "€120",
    title: "Junior Suite",
    slug: "junior-suite",
    person: "5",
  },
  {
    thumb:
      "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/813438616.jpg?k=2721ee5965e596ecfe7f234c5f2fe57aae5cb3f4fa634a83552a597016ebf7d6&o=",
    nightlyPrice: 150,
    price: "€150",
    title: "Executive Suite",
    slug: "executive-suite",
    person: "5",
  },
];

export const ROOM_SLUGS = rooms.map((r) => r.slug) as readonly string[];

export function formatNightlyPriceDisplay(amount: number): string {
  const n = Math.round(amount * 100) / 100;
  const formatted = Number.isInteger(n) ? String(n) : n.toFixed(2);
  return `€${formatted}`;
}

/** Total for a multi-night stay at a given nightly rate. */
export function formatStayTotalPrice(nightlyPrice: number, nights: number): string {
  if (nights <= 0) return formatNightlyPriceDisplay(nightlyPrice);
  const total = Math.round(nightlyPrice * nights * 100) / 100;
  return formatNightlyPriceDisplay(total);
}
