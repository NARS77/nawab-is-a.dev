import React from "react";
import { cookies } from "next/headers";
import type { Metadata } from "next";
import Link from "next/link";
import {
  SESSION_COOKIE_NAME,
  verifySessionToken,
  getLiveStatus,
} from "@/lib/status";
import AdminStatusManager from "@/components/AdminStatusManager";
import AdminLoginForm from "@/components/AdminLoginForm";

export const metadata: Metadata = {
  title: "Admin Broadcast | Nawab Shaikh",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminPage() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(SESSION_COOKIE_NAME)?.value;
  const isAuthenticated = verifySessionToken(sessionCookie);

  const status = isAuthenticated ? await getLiveStatus() : null;

  return (
    <main className="min-h-screen w-full bg-[#F4F1EA] text-[#1B1B1A] px-4 sm:px-8 py-10 sm:py-16">
      {/* Top Breadcrumb */}
      <div className="max-w-2xl mx-auto mb-8 flex items-center justify-between text-xs font-bold uppercase tracking-wider border-b-2 border-[#1B1B1A] pb-3">
        <Link href="/" className="hover:underline">
          ← Return to Portfolio
        </Link>
        <span className="opacity-60">Status Broadcast Engine</span>
      </div>

      {isAuthenticated ? (
        <AdminStatusManager initialStatus={status} />
      ) : (
        <AdminLoginForm />
      )}
    </main>
  );
}
