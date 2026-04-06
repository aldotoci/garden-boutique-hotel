import AdminLoginForm from "@/components/AdminLoginForm";
import { cookies } from "next/headers";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { adminSessionCookie, verifyAdminSessionToken } from "@/lib/adminAuth";

export const metadata: Metadata = {
  title: "Sign in",
};

export default async function AdminLoginPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get(adminSessionCookie.name)?.value;

  if (verifyAdminSessionToken(token)) {
    redirect("/admin");
  }

  return (
    <main>
      <AdminLoginForm />
    </main>
  );
}
