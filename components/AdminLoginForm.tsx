"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginForm() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!password || loading) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Authentication failed.");
      }

      router.refresh();
    } catch (err: any) {
      setError(err.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-md mx-auto border-2 border-[#1B1B1A] p-6 sm:p-8 bg-white/70 space-y-6">
      <div className="border-b-2 border-[#1B1B1A] pb-4">
        <h1 className="text-xl font-bold uppercase tracking-tight text-[#1B1B1A]">
          ADMIN LOGIN
        </h1>
        <p className="text-xs font-mono opacity-60 text-[#1B1B1A]">
          Authorized portfolio broadcast only
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1">
          <label
            htmlFor="admin-password"
            className="block text-xs font-bold uppercase tracking-widest opacity-70 text-[#1B1B1A]"
          >
            Passkey
          </label>
          <input
            id="admin-password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border-2 border-[#1B1B1A] p-3 text-sm bg-white text-[#1B1B1A] focus:outline-none"
            placeholder="••••••••••••"
            autoFocus
          />
        </div>

        {error && (
          <div className="border-2 border-red-600 bg-red-50 text-red-900 p-3 text-xs font-bold">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading || !password}
          className="w-full border-2 border-[#1B1B1A] bg-[#1B1B1A] text-[#F4F1EA] hover:bg-[#1B1B1A]/85 p-3 text-xs font-bold uppercase tracking-widest transition-colors disabled:opacity-40"
        >
          {loading ? "Authenticating..." : "Authenticate Session →"}
        </button>
      </form>
    </div>
  );
}
