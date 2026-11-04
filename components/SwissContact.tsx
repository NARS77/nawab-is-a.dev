"use client";

import React, { useState } from "react";
import { siteContent } from "@/content/site";
import MagneticElement from "@/components/MagneticElement";
import InteractiveVariableHeading from "@/components/InteractiveVariableHeading";

export default function SwissContact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Dispatch failed");
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="w-full bg-[#1B1B1A] text-[#F4F1EA] px-4 sm:px-8 py-12 sm:py-20">
      {/* Section Header */}
      <div className="border-b-2 border-[#F4F1EA] pb-4 mb-8 sm:mb-12">
        <InteractiveVariableHeading
          text="CONTACT"
          as="h2"
          radius={200}
          className="text-3xl sm:text-5xl font-bold uppercase tracking-tighter"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left: Direct Plain Links (cols 1-5) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Requirement 1: Put 'Open to relocation' as one small line in the Contact section only */}
          <div className="text-sm font-mono opacity-80 border-b border-[#F4F1EA]/30 pb-3">
            Location: India · {siteContent.author.relocationNote}
          </div>

          <div className="space-y-4 text-sm sm:text-base font-bold uppercase tracking-wider">
            <div className="border-2 border-[#F4F1EA] p-4 space-y-1">
              <div className="text-[10px] opacity-60">DIRECT EMAIL</div>
              <a
                href={`mailto:${siteContent.contact.email}`}
                className="text-base sm:text-lg block hover:underline underline-offset-4 decoration-2 break-all"
              >
                {siteContent.contact.email}
              </a>
            </div>

            <div className="border-2 border-[#F4F1EA] p-4 space-y-2">
              <div className="text-[10px] opacity-60">CHANNELS & ASSETS</div>
              <div className="flex flex-col gap-2">
                <a
                  href={siteContent.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline underline-offset-4 decoration-2"
                >
                  GitHub: github.com/NARS77 ↗
                </a>
                <a
                  href={siteContent.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline underline-offset-4 decoration-2"
                >
                  LinkedIn: linkedin.com/in/nars77 ↗
                </a>
                <a
                  href={siteContent.contact.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Nawab_Shaikh_Resume.pdf"
                  className="hover:underline underline-offset-4 decoration-2"
                >
                  Download Resume (PDF) ↓
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Sharp Form (cols 6-12) */}
        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="border-2 border-[#F4F1EA] p-5 sm:p-8 space-y-4 text-xs sm:text-sm font-bold uppercase tracking-wider">
            <div className="space-y-1">
              <label htmlFor="name" className="block opacity-75">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#1B1B1A] border-2 border-[#F4F1EA] p-3 text-[#F4F1EA] placeholder:opacity-30 focus:outline-none focus:bg-stone-900"
                placeholder="Jane Doe"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="email" className="block opacity-75">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-[#1B1B1A] border-2 border-[#F4F1EA] p-3 text-[#F4F1EA] placeholder:opacity-30 focus:outline-none focus:bg-stone-900"
                placeholder="jane@company.com"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="message" className="block opacity-75">
                Message / Scope
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[#1B1B1A] border-2 border-[#F4F1EA] p-3 text-[#F4F1EA] placeholder:opacity-30 focus:outline-none focus:bg-stone-900 resize-none font-normal"
                placeholder="Project requirements, role scope, or engineering details..."
              />
            </div>

            {status === "success" && (
              <div className="border-2 border-[#F4F1EA] bg-[#B8CDB4] text-[#1B1B1A] p-3 text-xs font-bold">
                ✓ Message dispatched. I will reply promptly via email.
              </div>
            )}

            {status === "error" && (
              <div className="border-2 border-red-500 bg-red-950/40 text-red-200 p-3 text-xs font-bold">
                Dispatch issue encountered. Please reach out directly to {siteContent.contact.email}.
              </div>
            )}

            <MagneticElement pullFactor={0.2}>
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full sm:w-auto border-2 border-[#F4F1EA] bg-[#F4F1EA] text-[#1B1B1A] hover:bg-transparent hover:text-[#F4F1EA] px-8 py-3 font-bold uppercase tracking-widest transition-colors disabled:opacity-50"
              >
                {status === "sending" ? "Transmitting..." : "Send Message →"}
              </button>
            </MagneticElement>
          </form>
        </div>
      </div>

      {/* Footer copyright */}
      <div className="border-t-2 border-[#F4F1EA] mt-12 sm:mt-16 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold uppercase tracking-widest opacity-60">
        <div>© 2026 NAWAB SHAIKH</div>
        <a href="#main-content" className="hover:opacity-100 hover:underline">
          Back to top ↑
        </a>
      </div>
    </section>
  );
}
