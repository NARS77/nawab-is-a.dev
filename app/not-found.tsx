import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white p-6 sm:p-12 flex flex-col justify-between select-none">
      <div className="border-b-2 border-white pb-4 flex items-center justify-between text-xs font-bold uppercase tracking-widest">
        <span>NAWAB SHAIKH / SWISS POSTER SYSTEM</span>
        <span>ERROR 404</span>
      </div>

      <div className="py-20 space-y-6">
        <div className="text-xs font-bold uppercase tracking-widest text-red-500">
          PAGE NOT RESOLVED
        </div>
        <h1 className="text-[14vw] font-bold leading-none tracking-tighter uppercase">
          404
        </h1>
        <p className="text-xl sm:text-2xl font-bold tracking-tight max-w-xl">
          The requested URL path does not exist on this server.
        </p>

        <div className="pt-6">
          <Link
            href="/"
            className="inline-block border-2 border-white bg-white text-black hover:bg-black hover:text-white px-8 py-3 text-sm font-bold uppercase tracking-widest transition-colors"
          >
            ← Return to Index
          </Link>
        </div>
      </div>

      <div className="border-t-2 border-white pt-4 text-xs font-bold uppercase tracking-widest opacity-60">
        © 2026 NAWAB SHAIKH
      </div>
    </div>
  );
}
