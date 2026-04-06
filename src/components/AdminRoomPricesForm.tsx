"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Row = {
  slug: string;
  title: string;
  defaultNightlyPrice: number;
  effectiveNightlyPrice: number;
  hasOverride: boolean;
};

export default function AdminRoomPricesForm() {
  const router = useRouter();
  const [rows, setRows] = useState<Row[]>([]);
  const [values, setValues] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/admin/room-prices", { credentials: "include" });
        if (res.status === 401) {
          router.replace("/admin/login");
          return;
        }
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data?.error || "Failed to load prices.");
        }
        const list = Array.isArray(data?.rooms) ? (data.rooms as Row[]) : [];
        setRows(list);
        const initial: Record<string, string> = {};
        for (const r of list) {
          initial[r.slug] = String(r.effectiveNightlyPrice);
        }
        setValues(initial);
      } catch (e) {
        setError(e instanceof Error ? e.message : "Failed to load.");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [router]);

  const handleChange = (slug: string, v: string) => {
    setValues((prev) => ({ ...prev, [slug]: v }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSaving(true);
    setMessage("");
    setError("");
    const prices: Record<string, number> = {};
    for (const r of rows) {
      const raw = values[r.slug]?.trim() ?? "";
      const n = Number(raw.replace(",", "."));
      if (!Number.isFinite(n)) {
        setError(`Enter a valid number for ${r.title}.`);
        setSaving(false);
        return;
      }
      prices[r.slug] = n;
    }
    try {
      const res = await fetch("/api/admin/room-prices", {
        method: "PUT",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prices }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.status === 401) {
        router.replace("/admin/login");
        return;
      }
      if (!res.ok) {
        throw new Error(data?.error || "Save failed.");
      }
      setMessage("Prices saved. Public pages will show the new nightly rates.");
      const reload = await fetch("/api/admin/room-prices", { credentials: "include" });
      if (reload.ok) {
        const dataReload = await reload.json();
        const list = Array.isArray(dataReload?.rooms) ? (dataReload.rooms as Row[]) : [];
        setRows(list);
        const next: Record<string, string> = {};
        for (const r of list) {
          next[r.slug] = String(r.effectiveNightlyPrice);
        }
        setValues(next);
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : "Save failed.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <p className="text-muted mb-0">Loading room prices…</p>;
  }

  return (
    <div className="w-100">
      <header className="mb-4 pb-3 border-bottom border-dark border-opacity-10">
        <p
          className="small text-muted text-uppercase fw-semibold mb-1"
          style={{ letterSpacing: "0.08em" }}
        >
          Pricing
        </p>
        <h1 className="admin-dashboard__title h3 mb-0">Nightly room rates</h1>
        <p className="text-muted small mb-0 mt-2">
          Set the price for one night per room. Values match the euro amounts shown on the site.
          Saving the same number as the code default removes the database override.
        </p>
      </header>

      <div className="mb-3">
        <Link href="/admin" className="btn btn-sm btn-outline-dark rounded-2">
          Back to dashboard
        </Link>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="card admin-dashboard-card border-0 shadow-none">
          <div className="card-header">
            <h2 className="h6 mb-0 fw-semibold">Rates</h2>
            <p className="small text-muted mb-0 mt-1">All amounts are per night.</p>
          </div>
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="table-light">
                  <tr>
                    <th className="ps-4" scope="col">
                      Room
                    </th>
                    <th scope="col">Default (code)</th>
                    <th scope="col">Nightly price (€)</th>
                    <th className="pe-4" scope="col">
                      Override
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.slug}>
                      <td className="ps-4">
                        <span className="fw-semibold d-block">{r.title}</span>
                        <span className="small text-muted font-monospace">{r.slug}</span>
                      </td>
                      <td>
                        <span className="text-muted">€{r.defaultNightlyPrice}</span>
                      </td>
                      <td style={{ maxWidth: 140 }}>
                        <label className="visually-hidden" htmlFor={`price-${r.slug}`}>
                          Nightly price for {r.title}
                        </label>
                        <input
                          id={`price-${r.slug}`}
                          type="text"
                          inputMode="decimal"
                          className="form-control form-control-sm rounded-2"
                          value={values[r.slug] ?? ""}
                          onChange={(e) => handleChange(r.slug, e.target.value)}
                          required
                        />
                      </td>
                      <td className="pe-4">
                        {r.hasOverride ? (
                          <span className="badge rounded-pill text-bg-secondary fw-normal">DB</span>
                        ) : (
                          <span className="small text-muted">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="card-body border-top pt-3 d-flex flex-wrap align-items-center gap-2">
            <button
              type="submit"
              className="btn btn-dark rounded-2"
              disabled={saving || rows.length === 0}
            >
              {saving ? "Saving…" : "Save all rates"}
            </button>
            {message && <span className="small text-success">{message}</span>}
            {error && <span className="small text-danger">{error}</span>}
          </div>
        </div>
      </form>
    </div>
  );
}
