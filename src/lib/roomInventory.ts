/** Physical room counts and labels used for admin filtering and display. */

export const ROOM_TYPES = [
  {
    slug: "executive-suite",
    label: "Executive Suite",
    inventory: 1,
    titles: ["Executive Suite"],
  },
  {
    slug: "junior-suite",
    label: "Junior Suite",
    inventory: 2,
    titles: ["Junior Suite"],
  },
  {
    slug: "triple-room",
    label: "Triple Room",
    inventory: 4,
    titles: ["Triple Room"],
  },
  {
    slug: "twin-room",
    label: "Twin Room",
    inventory: 3,
    titles: ["Twin Room"],
  },
  {
    slug: "standard-double",
    label: "Standard Double Room",
    inventory: 12,
    titles: ["Standard Double Room", "Double Room"],
  },
] as const;

export type RoomTypeSlug = (typeof ROOM_TYPES)[number]["slug"];

const TITLE_TO_SLUG: { phrase: string; slug: RoomTypeSlug }[] = ROOM_TYPES.flatMap(
  (t) => t.titles.map((phrase) => ({ phrase: phrase.toLowerCase(), slug: t.slug })),
).sort((a, b) => b.phrase.length - a.phrase.length);

export function resolveRoomTypeSlug(room: string): RoomTypeSlug | null {
  const n = room.trim().toLowerCase();
  if (!n) return null;
  for (const { phrase, slug } of TITLE_TO_SLUG) {
    if (n === phrase || n.includes(phrase)) return slug;
  }
  return null;
}

export function roomTypeLabel(slug: RoomTypeSlug): string {
  const t = ROOM_TYPES.find((x) => x.slug === slug);
  return t?.label ?? slug;
}
