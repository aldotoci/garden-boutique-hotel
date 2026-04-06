"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.replace("/admin/login");
    router.refresh();
  };

  const isActive = (path: string) => pathname === path;

  return (
    <aside
      className="admin-sidebar border-end min-vh-100 d-flex flex-column flex-shrink-0 p-3"
      style={{ width: 260 }}
    >
      <div className="mb-4 pb-3 border-bottom border-secondary border-opacity-25">
        <p className="admin-sidebar__eyebrow mb-2">Operations</p>
        <p className="admin-sidebar__brand mb-0">Garden Hotel</p>
        <p className="small text-white-50 mb-0 mt-1">Booking console</p>
      </div>

      <nav className="d-flex flex-column gap-2 flex-grow-1" aria-label="Operations">
        <Link
          href="/admin"
          className={`btn btn-sm text-start rounded-2 ${isActive("/admin") ? "btn-dark" : "btn-outline-dark"}`}
        >
          Dashboard
        </Link>
        <Link
          href="/admin/prices"
          className={`btn btn-sm text-start rounded-2 ${isActive("/admin/prices") ? "btn-dark" : "btn-outline-dark"}`}
        >
          Room prices
        </Link>
        <a
          href="/admin#bookings-grid"
          className="btn btn-sm btn-outline-dark text-start rounded-2"
        >
          Jump to bookings
        </a>
      </nav>

      <button
        type="button"
        className="btn btn-sm btn-outline-danger mt-3 rounded-2"
        onClick={handleLogout}
      >
        Log out
      </button>
    </aside>
  );
}
