import AdminRoomPricesForm from "@/components/AdminRoomPricesForm";
import AdminSidebar from "@/components/AdminSidebar";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { adminSessionCookie, verifyAdminSessionToken } from "@/lib/adminAuth";

export default async function AdminPricesPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get(adminSessionCookie.name)?.value;

  if (!verifyAdminSessionToken(token)) {
    redirect("/admin/login");
  }

  return (
    <main className="admin-app-shell d-flex min-vh-100">
      <AdminSidebar />
      <div className="admin-app-main flex-grow-1 min-w-0 d-flex flex-column">
        <div className="admin-dashboard w-100">
          <div className="container-fluid px-3 px-lg-4 py-4">
            <AdminRoomPricesForm />
          </div>
        </div>
      </div>
    </main>
  );
}
