"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { LiveStatusDisplay } from "@/lib/status";
import { projectStatusPresets, generalStatusPresets } from "@/content/status";

interface AdminStatusManagerProps {
  initialStatus: LiveStatusDisplay | null;
}

export default function AdminStatusManager({
  initialStatus,
}: AdminStatusManagerProps) {
  const router = useRouter();
  const [currentStatus, setCurrentStatus] = useState<LiveStatusDisplay | null>(
    initialStatus
  );
  const [customText, setCustomText] = useState("");
  const [saving, setSaving] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  async function handleSetStatus(text: string) {
    if (!text.trim() || saving) return;
    setSaving(true);
    setFeedback(null);

    try {
      const res = await fetch("/api/admin/status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: text.trim() }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Update failed");
      }

      setCurrentStatus(data.status);
      setFeedback(`✓ Saved: "${text.trim()}"`);
      setCustomText("");
      router.refresh();
    } catch (err: any) {
      setFeedback(`✕ Error: ${err.message || "Failed to update"}`);
    } finally {
      setSaving(false);
    }
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.refresh();
  }

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8">
      {/* Header bar */}
      <div className="flex items-center justify-between border-b-2 border-[#1B1B1A] pb-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#1B1B1A]">
            LIVE STATUS CONTROL
          </h1>
          <p className="text-xs font-mono opacity-70 text-[#1B1B1A]">
            Fast mobile tap targets for instant update
          </p>
        </div>
        <button
          onClick={handleLogout}
          className="border-2 border-[#1B1B1A] px-3 py-1.5 text-xs font-bold uppercase tracking-wider hover:bg-[#1B1B1A] hover:text-[#F4F1EA] transition-colors"
        >
          Log Out
        </button>
      </div>

      {/* Current Live Status Card */}
      <div className="border-2 border-[#1B1B1A] p-5 bg-white/70 space-y-2">
        <div className="text-[10px] font-bold uppercase tracking-widest opacity-60">
          Currently Broadcasting
        </div>
        <div className="flex items-center gap-3">
          <span
            className={`w-3 h-3 ${
              currentStatus?.isOffline ? "bg-stone-400" : "bg-emerald-600 animate-pulse"
            }`}
          />
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#1B1B1A]">
            {currentStatus?.text || "Offline"}
          </span>
        </div>
        <div className="text-xs font-mono opacity-75 text-[#1B1B1A]">
          {currentStatus?.timeAgoText || "No active timestamp"}
        </div>
      </div>

      {/* Instant Feedback Message */}
      {feedback && (
        <div
          className={`border-2 p-3 text-xs sm:text-sm font-bold ${
            feedback.startsWith("✓")
              ? "border-[#1B1B1A] bg-[#B8CDB4] text-[#1B1B1A]"
              : "border-red-600 bg-red-100 text-red-900"
          }`}
        >
          {feedback}
        </div>
      )}

      {/* Project Status Presets (Big Tap Targets) */}
      <div className="space-y-3">
        <div className="text-xs font-bold uppercase tracking-widest opacity-70 text-[#1B1B1A]">
          Featured Projects (Tap to activate)
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {projectStatusPresets.map((preset) => (
            <button
              key={preset}
              onClick={() => handleSetStatus(preset)}
              disabled={saving}
              className={`border-2 border-[#1B1B1A] p-4 text-left font-bold text-sm sm:text-base transition-transform active:scale-95 disabled:opacity-50 min-h-[56px] flex items-center justify-between ${
                currentStatus?.text === preset
                  ? "bg-[#1B1B1A] text-[#F4F1EA]"
                  : "bg-white hover:bg-[#EAD9A0] text-[#1B1B1A]"
              }`}
            >
              <span>{preset}</span>
              <span className="text-xs opacity-60">Tap →</span>
            </button>
          ))}
        </div>
      </div>

      {/* General Activity Presets */}
      <div className="space-y-3">
        <div className="text-xs font-bold uppercase tracking-widest opacity-70 text-[#1B1B1A]">
          Daily Activities
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {generalStatusPresets.map((preset) => (
            <button
              key={preset}
              onClick={() => handleSetStatus(preset)}
              disabled={saving}
              className={`border-2 border-[#1B1B1A] p-4 text-left font-bold text-sm sm:text-base transition-transform active:scale-95 disabled:opacity-50 min-h-[56px] flex items-center justify-between ${
                currentStatus?.text === preset
                  ? "bg-[#1B1B1A] text-[#F4F1EA]"
                  : "bg-white hover:bg-[#B7CCE0] text-[#1B1B1A]"
              }`}
            >
              <span>{preset}</span>
              <span className="text-xs opacity-60">Tap →</span>
            </button>
          ))}
        </div>
      </div>

      {/* Custom Text Field */}
      <div className="border-2 border-[#1B1B1A] p-5 bg-white/70 space-y-3">
        <label
          htmlFor="custom-status"
          className="block text-xs font-bold uppercase tracking-widest text-[#1B1B1A] opacity-70"
        >
          Custom Status
        </label>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            id="custom-status"
            type="text"
            value={customText}
            onChange={(e) => setCustomText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleSetStatus(customText);
              }
            }}
            placeholder="e.g. Debugging PostgreSQL query execution..."
            className="flex-1 border-2 border-[#1B1B1A] p-3 text-sm sm:text-base font-medium bg-white text-[#1B1B1A] focus:outline-none placeholder:opacity-40"
          />
          <button
            onClick={() => handleSetStatus(customText)}
            disabled={saving || !customText.trim()}
            className="border-2 border-[#1B1B1A] bg-[#1B1B1A] text-[#F4F1EA] hover:bg-[#1B1B1A]/85 px-6 py-3 font-bold uppercase text-xs tracking-wider transition-colors disabled:opacity-40 min-h-[48px]"
          >
            {saving ? "Saving..." : "Set Custom Status"}
          </button>
        </div>
      </div>
    </div>
  );
}
