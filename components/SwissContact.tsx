"use client";

import React, { useState } from "react";
import { siteContent } from "@/content/site";

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
    <section id="contact" className="w-full bg-black text-white px-4 sm:px-8 py-16 sm:py-24">
      {/* Section Header */}
      <div className="flex items-baseline justify-between border-b-2 border-white pb-4 mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tighter">
          CONTACT
        </h2>
        <span className="text-xs sm:text-sm font-bold uppercase tracking-widest opacity-60">
          DISPATCH / DIRECT
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left: Direct Plain Links (cols 1-5) */}
        <div className="lg:col-span-5 space-y-6">
          <p className="text-lg sm:text-xl font-medium tracking-tight leading-snug">
            Available for full-stack engineering and AI integration roles. Get in touch directly:
          </p>

          <div className="space-y-4 pt-2 text-sm sm:text-base font-bold uppercase tracking-wider">
            <div className="border-2 border-white p-4 space-y-1">
              <div className="text-[10px] opacity-60">DIRECT EMAIL</div>
              <a
                href={`mailto:${siteContent.contact.email}`}
                className="text-base sm:text-lg block hover:underline underline-offset-4 decoration-2"
              >
                {siteContent.contact.email}
              </a>
            </div>

            <div className="border-2 border-white p-4 space-y-2">
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
                  Download Official Resume (PDF) ↓
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Sharp Form (cols 6-12) */}
        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="border-2 border-white p-6 sm:p-8 space-y-4 text-xs sm:text-sm font-bold uppercase tracking-wider">
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
                className="w-full bg-black border-2 border-white p-3 text-white placeholder:opacity-30 focus:outline-none focus:bg-zinc-900"
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
                className="w-full bg-black border-2 border-white p-3 text-white placeholder:opacity-30 focus:outline-none focus:bg-zinc-900"
                placeholder="jane@company.com"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="message" className="block opacity-75">
                Message / Technical Scope
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-black border-2 border-white p-3 text-white placeholder:opacity-30 focus:outline-none focus:bg-zinc-900 resize-none font-normal"
                placeholder="Details on engineering team, product requirements, or project timeline..."
              />
            </div>

            {status === "success" && (
              <div className="border-2 border-white bg-white text-black p-3 text-xs font-bold">
                ✓ Message dispatched. I will reply promptly via email.
              </div>
            )}

            {status === "error" && (
              <div className="border-2 border-red-500 bg-red-950/40 text-red-200 p-3 text-xs font-bold">
                Dispatch issue encountered. Please reach out directly to {siteContent.contact.email}.
              </div>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full sm:w-auto border-2 border-white bg-white text-black hover:bg-black hover:text-white px-8 py-3 font-bold uppercase tracking-widest transition-colors disabled:opacity-50"
            >
              {status === "sending" ? "Transmitting..." : "Send Message →"}
            </button>
          </form>
        </div>
      </div>

      {/* Footer copyright */}
      <div className="border-t-2 border-white mt-12 sm:mt-16 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold uppercase tracking-widest opacity-60">
        <div>© 2026 NAWAB SHAIKH · SWISS INTERNATIONAL TYPOGRAPHIC SYSTEM</div>
        <a href="#main-content" className="hover:opacity-100 hover:underline">
          Back to top ↑
        </a>
      </div>
    </section>
  );
}
