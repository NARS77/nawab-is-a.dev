"use client";

import { ArrowUp, Mail } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/icons";
import { profileData } from "@/data/profile";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#070708] py-12 text-zinc-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Brand & Statement */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="flex h-8 w-8 items-center justify-center rounded border border-white/15 bg-zinc-900 font-mono font-bold text-zinc-200">
              NS
            </div>
            <div>
              <div className="text-zinc-200 font-semibold">
                Nawab Shaikh &bull; Portfolio
              </div>
              <div className="text-[11px] text-zinc-400">
                Full-Stack &amp; AI-Integration Engineer &bull; Mumbai, India
              </div>
            </div>
          </div>

          {/* Center: Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${profileData.email}`}
              className="p-2 rounded border border-white/10 hover:border-white/20 text-zinc-400 hover:text-white transition-colors"
              title="Email Nawab"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded border border-white/10 hover:border-white/20 text-zinc-400 hover:text-white transition-colors"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded border border-white/10 hover:border-white/20 text-zinc-400 hover:text-white transition-colors"
              title="GitHub Profile (Placeholder)"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Right: Back to top */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-white/10 hover:border-white/20 text-zinc-300 hover:text-white transition-colors"
            aria-label="Back to top"
          >
            <span>Top of page</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="mt-8 pt-8 border-t border-white/[0.04] text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-2 text-[11px] text-zinc-400">
          <div>
            &copy; {new Date().getFullYear()} Nawab Shaikh. Built with Next.js, TypeScript &amp; Tailwind CSS.
          </div>
          <div className="text-zinc-400">
            Engineered for clarity, system credibility, and recruiter accessibility.
          </div>
        </div>
      </div>
    </footer>
  );
}
