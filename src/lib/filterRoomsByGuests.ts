/** Max guests from room catalog `person` field (numeric string). */

export function roomMaxGuests(person: string): number {
  const n = parseInt(String(person).trim(), 10);
  return Number.isFinite(n) && n > 0 ? n : 999;
}

export function totalStayGuests(adults: string, children: string): number {
  const a = parseInt(adults, 10);
  const c = parseInt(children, 10);
  const aa = Number.isFinite(a) && a > 0 ? a : 0;
  const cc = Number.isFinite(c) && c >= 0 ? c : 0;
  return aa + cc;
}

export function filterRoomsByGuestCount<T extends { person: string }>(
  list: readonly T[],
  adults: string,
  children: string,
): T[] {
  const total = totalStayGuests(adults, children);
  if (total < 1) return [...list];
  return list.filter((room) => roomMaxGuests(room.person) >= total);
}
