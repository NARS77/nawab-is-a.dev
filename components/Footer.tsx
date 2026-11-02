"use client";

import React from "react";
import { profile } from "@/data/profile";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-bg text-content-secondary border-t border-border-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-border-subtle">
          <div>
            <div className="text-sm font-semibold text-content-primary">
              {profile.name}
            </div>
            <div className="text-xs font-mono text-content-muted mt-0.5">
              Full-Stack Developer | AI Integration Engineer • India (Relocation Ready)
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-content-primary transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-content-primary transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="hover:text-content-primary transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="hover:text-content-primary transition-colors flex items-center gap-1 text-content-muted ml-2"
              title="Return to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] font-mono text-content-muted">
          <div>
            Built with Next.js & Tailwind CSS. Typography-first, zero AI slop.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-signal" />
            <span>Timezone: IST (UTC+5:30) • India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
