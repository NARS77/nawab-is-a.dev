import React from "react";
import { siteContent } from "@/content/site";
import { LiveStatusDisplay } from "@/lib/status";
import InteractiveHeroName from "@/components/InteractiveHeroName";
import MagneticElement from "@/components/MagneticElement";
import LiveStatusHeroLine from "@/components/LiveStatusHeroLine";

interface SwissHeroProps {
  status?: LiveStatusDisplay | null;
}

export default function SwissHero({ status }: SwissHeroProps) {
  return (
    <section className="w-full bg-[#F4F1EA] text-[#1B1B1A] border-b-4 border-[#1B1B1A]">
      {/* Top Header / Nav Bar */}
      <nav
        aria-label="Primary Navigation"
        className="w-full border-b-2 border-[#1B1B1A] px-4 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm font-bold uppercase tracking-wider"
      >
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 bg-[#1B1B1A]" aria-hidden="true" />
          <span>NAWAB SHAIKH</span>
          <span className="opacity-40">/</span>
          <span className="font-normal opacity-70">
            {siteContent.author.location}
          </span>
        </div>

        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href="#work"
            className="hover:underline underline-offset-4 decoration-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1B1B1A]"
          >
            Work
          </a>
          <a
            href="#stack"
            className="hover:underline underline-offset-4 decoration-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1B1B1A]"
          >
            Stack
          </a>
          <a
            href="#about"
            className="hover:underline underline-offset-4 decoration-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1B1B1A]"
          >
            About
          </a>
          <a
            href="#contact"
            className="hover:underline underline-offset-4 decoration-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1B1B1A]"
          >
            Contact
          </a>
          <MagneticElement pullFactor={0.25}>
            <a
              href={siteContent.author.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Nawab_Shaikh_Resume.pdf"
              className="border-2 border-[#1B1B1A] px-2.5 py-1 hover:bg-[#1B1B1A] hover:text-[#F4F1EA] transition-colors inline-block"
            >
              Resume ↓
            </a>
          </MagneticElement>
        </div>
      </nav>

      {/* Main Massive Name Poster Lockup */}
      <div className="px-4 sm:px-8 py-10 sm:py-16 lg:py-24">
        {/* Live Status Indicator Line */}
        <LiveStatusHeroLine initialStatus={status} />

        {/* Massive Variable-Font Name */}
        <InteractiveHeroName />

        {/* Hard rule across width */}
        <div className="w-full border-t-4 border-[#1B1B1A] my-6 sm:my-10" />

        {/* One-Line Subtitle (max 12 words) & Plain Action Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-8">
            <p className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight leading-snug max-w-3xl">
              {siteContent.author.oneLineHeadline}
            </p>
          </div>

          <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-4 text-base sm:text-lg font-bold uppercase tracking-wider">
            <MagneticElement pullFactor={0.15}>
              <a
                href="#work"
                className="inline-flex items-center justify-between border-b-2 border-[#1B1B1A] pb-1 hover:pl-2 transition-all w-full"
              >
                <span>Selected Work</span>
                <span>↓</span>
              </a>
            </MagneticElement>
            <MagneticElement pullFactor={0.15}>
              <a
                href="#contact"
                className="inline-flex items-center justify-between border-b-2 border-[#1B1B1A] pb-1 hover:pl-2 transition-all w-full"
              >
                <span>Contact Nawab</span>
                <span>→</span>
              </a>
            </MagneticElement>
            <MagneticElement pullFactor={0.15}>
              <a
                href={siteContent.author.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Nawab_Shaikh_Resume.pdf"
                className="inline-flex items-center justify-between border-b-2 border-[#1B1B1A] pb-1 hover:pl-2 transition-all w-full"
              >
                <span>Download Resume</span>
                <span>↓</span>
              </a>
            </MagneticElement>
          </div>
        </div>
      </div>
    </section>
  );
}
