/** Local calendar date as YYYY-MM-DD (no timezone shift). */

export function localYmd(d: Date): string {
  const y = d.getFullYear();
  const m = `${d.getMonth() + 1}`.padStart(2, "0");
  const day = `${d.getDate()}`.padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function parseYmd(s: string): Date | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(s)) return null;
  const [y, m, d] = s.split("-").map(Number);
  const dt = new Date(y, m - 1, d);
  if (
    dt.getFullYear() !== y ||
    dt.getMonth() !== m - 1 ||
    dt.getDate() !== d
  ) {
    return null;
  }
  return dt;
}

export function addDaysYmd(ymd: string, days: number): string {
  const d = parseYmd(ymd);
  if (!d) return ymd;
  d.setDate(d.getDate() + days);
  return localYmd(d);
}

export function nightsBetween(checkIn: string, checkOut: string): number {
  const a = parseYmd(checkIn);
  const b = parseYmd(checkOut);
  if (!a || !b) return 0;
  const diff = (b.getTime() - a.getTime()) / 86_400_000;
  return diff > 0 ? Math.round(diff) : 0;
}

export function formatStayRange(checkIn: string, checkOut: string): string {
  const a = parseYmd(checkIn);
  const b = parseYmd(checkOut);
  if (!a || !b) return "";
  const opts: Intl.DateTimeFormatOptions = {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  };
  return `${a.toLocaleDateString(undefined, opts)} → ${b.toLocaleDateString(undefined, opts)}`;
}

export type StaySearchNormalized = {
  checkIn: string;
  checkOut: string;
  adults: string;
  children: string;
};

function clampAdults(s: string | undefined): string {
  const n = parseInt(String(s ?? "2"), 10);
  if (!Number.isFinite(n) || n < 1) return "2";
  if (n > 9) return "9";
  return String(n);
}

function clampChildren(s: string | undefined): string {
  const n = parseInt(String(s ?? "0"), 10);
  if (!Number.isFinite(n) || n < 0) return "0";
  if (n > 9) return "9";
  return String(n);
}

/** Coerce URL/query params into valid stay fields for forms (sidebar, links). */
export function normalizeStaySearchFromQuery(q: {
  checkIn?: string;
  checkOut?: string;
  adults?: string;
  children?: string;
}): StaySearchNormalized {
  const today = localYmd(new Date());
  const todayParsed = parseYmd(today)!;

  const checkInRaw = (q.checkIn ?? "").trim();
  const checkOutRaw = (q.checkOut ?? "").trim();
  const inD = parseYmd(checkInRaw);
  const outD = parseYmd(checkOutRaw);

  const datesOk =
    inD !== null &&
    outD !== null &&
    outD > inD &&
    inD >= todayParsed;

  if (!datesOk) {
    return {
      checkIn: today,
      checkOut: addDaysYmd(today, 2),
      adults: clampAdults(q.adults),
      children: clampChildren(q.children),
    };
  }

  return {
    checkIn: checkInRaw,
    checkOut: checkOutRaw,
    adults: clampAdults(q.adults),
    children: clampChildren(q.children),
  };
}

export function stayQueryString(s: StaySearchNormalized): string {
  return new URLSearchParams({
    checkIn: s.checkIn,
    checkOut: s.checkOut,
    adults: s.adults,
    children: s.children,
  }).toString();
}
