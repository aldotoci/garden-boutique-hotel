import AdminDashboard from "@/components/AdminDashboard";
import AdminSidebar from "@/components/AdminSidebar";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { adminSessionCookie, verifyAdminSessionToken } from "@/lib/adminAuth";

export default async function AdminPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get(adminSessionCookie.name)?.value;

  if (!verifyAdminSessionToken(token)) {
    redirect("/admin/login");
  }

  return (
    <main className="admin-app-shell d-flex min-vh-100">
      <AdminSidebar />
      <div className="admin-app-main flex-grow-1 min-w-0 d-flex flex-column">
        <AdminDashboard />
      </div>
    </main>
  );
}
