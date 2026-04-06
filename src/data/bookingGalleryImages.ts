import { rooms } from "./rooms";
import { getRoomGallery } from "./roomGalleryImages";

/**
 * Every unique image URL used on /rooms and room detail galleries, in listing order:
 * each room’s listing thumb first, then that room’s gallery images (deduped globally).
 */
export function allUniqueBookingGalleryImages(): string[] {
  const seen = new Set<string>();
  const ordered: string[] = [];

  const push = (url: string) => {
    if (!url || seen.has(url)) return;
    seen.add(url);
    ordered.push(url);
  };

  for (const r of rooms) {
    push(r.thumb);
    const gallery = getRoomGallery(r.slug);
    if (gallery) {
      for (const url of gallery.images) push(url);
    }
  }

  return ordered;
}
