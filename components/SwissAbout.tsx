import React from "react";
import { siteContent } from "@/content/site";
import MagneticElement from "@/components/MagneticElement";

export default function SwissAbout() {
  return (
    <section id="about" className="w-full bg-[#F4F1EA] text-[#1B1B1A] border-b-4 border-[#1B1B1A] px-4 sm:px-8 py-12 sm:py-20">
      {/* Section Header */}
      <div className="border-b-2 border-[#1B1B1A] pb-4 mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tighter">
          ABOUT NAWAB SHAIKH
        </h2>
      </div>

      {/* Grid: Short Narrative (<40 words) & Verified Facts */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Narrative (<40 words, strictly factual) */}
        <div className="lg:col-span-7 space-y-6">
          <p className="text-xl sm:text-2xl font-medium tracking-tight leading-relaxed max-w-2xl">
            {siteContent.author.aboutText}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs sm:text-sm font-bold uppercase tracking-wider">
            <MagneticElement pullFactor={0.2}>
              <a
                href={siteContent.author.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Nawab_Shaikh_Resume.pdf"
                className="border-2 border-[#1B1B1A] px-4 py-2 hover:bg-[#1B1B1A] hover:text-[#F4F1EA] transition-colors inline-block"
              >
                Download Resume (PDF) ↓
              </a>
            </MagneticElement>

            <MagneticElement pullFactor={0.2}>
              <a
                href="/cruxx_experience_letter.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-[#1B1B1A] px-4 py-2 hover:bg-[#1B1B1A] hover:text-[#F4F1EA] transition-colors inline-block"
              >
                Cruxx AI Record (PDF) ↗
              </a>
            </MagneticElement>
          </div>
        </div>

        {/* Structured Credentials */}
        <div className="lg:col-span-5 space-y-3">
          <div className="border-2 border-[#1B1B1A] p-4 bg-white/60 space-y-1">
            <div className="text-[10px] font-bold uppercase tracking-widest opacity-60">
              WORK EXPERIENCE
            </div>
            <div className="text-sm sm:text-base font-bold">Cruxx AI — Software Engineer Intern</div>
            <div className="text-xs opacity-75">Sept 2024 – May 2025 · New Delhi, India</div>
            <div className="text-xs font-mono opacity-80 pt-1">
              Stack: React, Django, Python, PostgreSQL, REST APIs
            </div>
          </div>

          <div className="border-2 border-[#1B1B1A] p-4 bg-white/60 space-y-1">
            <div className="text-[10px] font-bold uppercase tracking-widest opacity-60">
              FORMAL EDUCATION
            </div>
            <div className="text-sm sm:text-base font-bold">B.Tech in CSE (AI & Data Science)</div>
            <div className="text-xs opacity-75">PVPIT Sangli (Graduating 2025) · CGPA 7.5 / 10</div>
          </div>

          <div className="border-2 border-[#1B1B1A] p-4 bg-white/60 space-y-1">
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
