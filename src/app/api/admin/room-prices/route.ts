import { NextResponse, type NextRequest } from "next/server";
import { isAdminRequest } from "@/lib/adminAuth";
import { rooms } from "@/data/rooms";
import {
  deleteNightlyPriceOverride,
  getNightlyPriceOverrides,
  upsertNightlyPrice,
} from "@/lib/roomPricesDb";

const slugSet = new Set(rooms.map((r) => r.slug));

function defaultForSlug(slug: string): number {
  return rooms.find((r) => r.slug === slug)?.nightlyPrice ?? 0;
}

export async function GET(request: NextRequest) {
  if (!isAdminRequest(request)) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const overrides = await getNightlyPriceOverrides();
  const list = rooms.map((r) => {
    const effective = overrides.get(r.slug) ?? r.nightlyPrice;
    return {
      slug: r.slug,
      title: r.title,
      defaultNightlyPrice: r.nightlyPrice,
      effectiveNightlyPrice: effective,
      hasOverride: overrides.has(r.slug),
    };
  });

  return NextResponse.json({ rooms: list });
}

export async function PUT(request: NextRequest) {
  if (!isAdminRequest(request)) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const prices = (body as { prices?: unknown })?.prices;
  if (!prices || typeof prices !== "object" || Array.isArray(prices)) {
    return NextResponse.json({ error: "Expected { prices: { [slug]: number } }." }, { status: 400 });
  }

  const entries = Object.entries(prices as Record<string, unknown>);
  for (const [slug, raw] of entries) {
    if (!slugSet.has(slug)) {
      return NextResponse.json({ error: `Unknown room slug: ${slug}` }, { status: 400 });
    }
    const n = typeof raw === "number" ? raw : Number(raw);
    if (!Number.isFinite(n) || n < 1 || n > 999_999) {
      return NextResponse.json(
        { error: `Invalid price for ${slug}. Use a number between 1 and 999999.` },
        { status: 400 },
      );
    }
  }

  try {
    for (const [slug, raw] of entries) {
      const n = typeof raw === "number" ? raw : Number(raw);
      const rounded = Math.round(n * 100) / 100;
      const def = defaultForSlug(slug);
      if (rounded === def) {
        await deleteNightlyPriceOverride(slug);
      } else {
        await upsertNightlyPrice(slug, rounded);
      }
    }
  } catch {
    return NextResponse.json({ error: "Could not save prices. Is the database migrated?" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
