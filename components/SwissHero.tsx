import React from "react";
import { siteContent } from "@/content/site";

export default function SwissHero() {
  return (
    <section className="w-full bg-white text-black border-b-4 border-black">
      {/* Top Header / Nav Bar */}
      <nav
        aria-label="Primary Navigation"
        className="w-full border-b-2 border-black px-4 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm font-bold uppercase tracking-wider"
      >
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 bg-black" aria-hidden="true" />
          <span>NAWAB SHAIKH</span>
          <span className="hidden sm:inline opacity-40">/</span>
          <span className="hidden sm:inline font-normal opacity-70">
            {siteContent.author.location}
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="#work"
            className="hover:underline underline-offset-4 decoration-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black"
          >
            Work
          </a>
          <a
            href="#stack"
            className="hover:underline underline-offset-4 decoration-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black"
          >
            Stack
          </a>
          <a
            href="#about"
            className="hover:underline underline-offset-4 decoration-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black"
          >
            About
          </a>
          <a
            href="#contact"
            className="hover:underline underline-offset-4 decoration-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black"
          >
            Contact
          </a>
          <a
            href={siteContent.author.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Nawab_Shaikh_Resume.pdf"
            className="border-2 border-black px-2.5 py-1 hover:bg-black hover:text-white transition-colors"
          >
            Resume ↓
          </a>
        </div>
      </nav>

      {/* Main Massive Name Poster Lockup */}
      <div className="px-4 sm:px-8 py-12 sm:py-20 lg:py-28">
        <div className="text-xs sm:text-sm font-bold tracking-widest uppercase opacity-70 mb-4 sm:mb-6">
          FULL-STACK DEVELOPER · AI INTEGRATION ENGINEER
        </div>

        <h1 className="text-[13vw] sm:text-[14vw] lg:text-[15vw] font-bold leading-[0.88] tracking-tighter uppercase select-none break-words">
          NAWAB
          <br />
          SHAIKH
        </h1>

        {/* Hard rule across width */}
        <div className="w-full border-t-4 border-black my-8 sm:my-12" />

        {/* One-Line Subtitle & Plain Action Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-8">
            <p className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight leading-snug max-w-3xl">
              {siteContent.author.oneLineHeadline}
            </p>
          </div>

          <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-4 text-base sm:text-lg font-bold uppercase tracking-wider">
            <a
              href="#work"
              className="inline-flex items-center justify-between border-b-2 border-black pb-1 hover:pl-2 transition-all"
            >
              <span>Explore Selected Work</span>
              <span>↓</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-between border-b-2 border-black pb-1 hover:pl-2 transition-all"
            >
              <span>Contact Nawab</span>
              <span>→</span>
            </a>
            <a
              href={siteContent.author.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Nawab_Shaikh_Resume.pdf"
              className="inline-flex items-center justify-between border-b-2 border-black pb-1 hover:pl-2 transition-all"
            >
              <span>Download Resume</span>
              <span>↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
