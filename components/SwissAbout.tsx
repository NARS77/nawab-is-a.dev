import React from "react";
import { siteContent } from "@/content/site";

export default function SwissAbout() {
  return (
    <section id="about" className="w-full bg-white text-black border-b-4 border-black px-4 sm:px-8 py-16 sm:py-24">
      {/* Section Header */}
      <div className="flex items-baseline justify-between border-b-2 border-black pb-4 mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tighter">
          ABOUT NAWAB SHAIKH
        </h2>
        <span className="text-xs sm:text-sm font-bold uppercase tracking-widest opacity-60">
          PROFILE / RECORD
        </span>
      </div>

      {/* Grid: Short Narrative (<100 words) & Verified Facts */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Narrative (<100 words, strictly factual) */}
        <div className="lg:col-span-7 space-y-6">
          <p className="text-lg sm:text-xl md:text-2xl font-medium tracking-tight leading-relaxed max-w-2xl">
            {siteContent.author.aboutText}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4 text-xs sm:text-sm font-bold uppercase tracking-wider">
            <a
              href={siteContent.author.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Nawab_Shaikh_Resume.pdf"
              className="border-2 border-black px-4 py-2 hover:bg-black hover:text-white transition-colors"
            >
              Download Resume (PDF) ↓
            </a>

            <a
              href="/cruxx_experience_letter.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-black px-4 py-2 hover:bg-black hover:text-white transition-colors"
            >
              Cruxx AI Record (PDF) ↗
            </a>
          </div>
        </div>

        {/* Structured Credentials */}
        <div className="lg:col-span-5 space-y-4">
          <div className="border-2 border-black p-4 space-y-1">
            <div className="text-[10px] font-bold uppercase tracking-widest opacity-60">
              WORK EXPERIENCE
            </div>
            <div className="text-sm sm:text-base font-bold">Cruxx AI — Software Engineer Intern</div>
            <div className="text-xs opacity-75">Sept 2024 – May 2025 · New Delhi, India</div>
            <div className="text-xs font-mono opacity-80 pt-1">
              Stack: React, Django, Python, PostgreSQL, REST APIs
            </div>
          </div>

          <div className="border-2 border-black p-4 space-y-1">
            <div className="text-[10px] font-bold uppercase tracking-widest opacity-60">
              FORMAL EDUCATION
            </div>
            <div className="text-sm sm:text-base font-bold">B.Tech in CSE (AI & Data Science)</div>
            <div className="text-xs opacity-75">PVPIT Sangli (Graduating 2025) · CGPA 7.5 / 10</div>
          </div>

          <div className="border-2 border-black p-4 space-y-1">
            <div className="text-[10px] font-bold uppercase tracking-widest opacity-60">
              DIPLOMA IN CSE
            </div>
            <div className="text-sm sm:text-base font-bold">PVPIT Sangli (2022) · 84.0%</div>
          </div>
        </div>
      </div>
    </section>
  );
}
