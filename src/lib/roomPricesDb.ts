import { sql } from "@vercel/postgres";

export async function getNightlyPriceOverrides(): Promise<Map<string, number>> {
  try {
    const { rows } = await sql`
      SELECT room_slug, nightly_price::text AS nightly_price
      FROM room_nightly_prices
    `;
    const map = new Map<string, number>();
    for (const row of rows) {
      const r = row as { room_slug: string; nightly_price: string };
      const n = Number(r.nightly_price);
      if (Number.isFinite(n) && n > 0) {
        map.set(r.room_slug, n);
      }
    }
    return map;
  } catch {
    return new Map();
  }
}

export async function upsertNightlyPrice(slug: string, nightlyPrice: number): Promise<void> {
  await sql`
    INSERT INTO room_nightly_prices (room_slug, nightly_price, updated_at)
    VALUES (${slug}, ${nightlyPrice}, NOW())
    ON CONFLICT (room_slug)
    DO UPDATE SET nightly_price = ${nightlyPrice}, updated_at = NOW()
  `;
}

export async function deleteNightlyPriceOverride(slug: string): Promise<boolean> {
  const { rowCount } = await sql`
    DELETE FROM room_nightly_prices WHERE room_slug = ${slug}
  `;
  return (rowCount ?? 0) > 0;
}
