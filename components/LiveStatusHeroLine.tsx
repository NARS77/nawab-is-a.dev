"use client";

import React, { useState, useEffect } from "react";
import { LiveStatusDisplay } from "@/lib/status";

interface LiveStatusHeroLineProps {
  initialStatus?: LiveStatusDisplay | null;
}

export default function LiveStatusHeroLine({
  initialStatus,
}: LiveStatusHeroLineProps) {
  const [status, setStatus] = useState<LiveStatusDisplay | null>(
    initialStatus ?? null
  );

  useEffect(() => {
    let active = true;
    const controller = new AbortController();
    async function refresh() {
      try {
        const res = await fetch("/api/admin/status", { cache: "no-store", signal: controller.signal });
        if (!res.ok) { if (active) setStatus(null); return; }
        const data = await res.json();
        if (active) setStatus(data.status?.text ? data.status : null);
      } catch { if (active) setStatus(null); }
    }
    void refresh();
    const timer = window.setInterval(refresh, 60_000);
    return () => { active = false; controller.abort(); window.clearInterval(timer); };
  }, []);

  if (!status || !status.text) {
    return null;
  }

  return (
    <div className="mb-6 inline-flex items-center gap-2.5 border-2 border-[#1B1B1A] bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider shadow-none">
      <span
        className={`w-2.5 h-2.5 ${
          status.isOffline ? "bg-stone-400" : "bg-emerald-600 animate-pulse"
        }`}
        aria-hidden="true"
      />
      <span className="font-bold text-[#1B1B1A]">{status.text}</span>
      <span className="opacity-40">·</span>
      <span className="font-normal opacity-70 lowercase">
        {status.timeAgoText}
      </span>
    </div>
  );
}
