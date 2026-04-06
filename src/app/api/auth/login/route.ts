import { NextResponse } from "next/server";
import {
  adminSessionCookie,
  createAdminSessionToken,
  verifyAdminCredentials,
} from "@/lib/adminAuth";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const username = String(body?.username ?? "");
    const password = String(body?.password ?? "");

    if (!verifyAdminCredentials(username, password)) {
      return NextResponse.json({ error: "Invalid username or password." }, { status: 401 });
    }

    const response = NextResponse.json({ success: true });
    response.cookies.set(adminSessionCookie.name, createAdminSessionToken(username), {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: adminSessionCookie.maxAge,
    });
    return response;
  } catch {
    return NextResponse.json({ error: "Unable to process login request." }, { status: 400 });
  }
}
