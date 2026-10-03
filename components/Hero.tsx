"use client";

import { useState, useEffect } from "react";
import { profileData } from "@/data/profile";
import {
  ArrowRight,
  Terminal,
  MapPin,
  Clock,
  Layers,
  Sparkles,
  GitBranch,
  ShieldCheck,
  FileText,
} from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/icons";

interface HeroProps {
  onOpenResume?: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  // Live Mumbai time tracker
  const [mumbaiTime, setMumbaiTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setMumbaiTime(new Intl.DateTimeFormat("en-GB", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 border-b border-white/[0.08] overflow-hidden">
      {/* Subtle background tech grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #fafafa 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Main Hero Column (Col 1-7) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Status & Location Bar */}
            <div className="inline-flex flex-wrap items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-white/10 bg-zinc-900/90 text-xs font-mono text-zinc-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for Senior Roles
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-white/10 bg-zinc-900/60 text-xs font-mono text-zinc-400">
                <MapPin className="w-3 h-3 text-zinc-400" />
                Mumbai, India
              </span>
              {mumbaiTime && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-white/10 bg-zinc-900/60 text-xs font-mono text-zinc-400">
                  <Clock className="w-3 h-3 text-zinc-400" />
                  {mumbaiTime} IST
                </span>
              )}
            </div>

            {/* Engineer Name */}
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-3">
              Nawab Shaikh
            </h1>

            {/* Primary Headline */}
            <p className="font-mono text-lg sm:text-xl text-zinc-300 font-medium mb-4 flex items-center gap-2">
              <span className="text-zinc-500">&gt;</span>
              Full-Stack &amp; AI-Integration Engineer
            </p>

            {/* Supporting Statement */}
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mb-8 font-normal">
              Building scalable web products and production-grade AI systems.
              Specialized in engineering robust backend architectures with{" "}
              <span className="text-zinc-200 font-medium">Django &amp; Python</span>,
              orchestrating asynchronous LLM inference via{" "}
              <span className="text-zinc-200 font-medium">OpenAI &amp; Gemini APIs</span>,
              and scaling background workloads with{" "}
              <span className="text-zinc-200 font-medium">Celery, Redis &amp; AWS</span>.
            </p>

            {/* Core Tech Stack Badges */}
            <div className="mb-10">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-2.5">
                Core Production Stack
              </span>
              <div className="flex flex-wrap gap-1.5">
                {profileData.coreTech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-mono rounded border border-white/[0.08] bg-zinc-900/80 text-zinc-300 hover:border-white/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded text-sm font-mono font-medium bg-zinc-100 text-zinc-950 hover:bg-white transition-all shadow-md group"
              >
                <span>View Case Studies</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>

              <a
                href="#experience"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded text-sm font-mono border border-white/15 bg-zinc-900/80 text-zinc-200 hover:text-white hover:border-white/30 hover:bg-zinc-800 transition-all"
              >
                <span>Career Progression</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded text-sm font-mono border border-white/15 bg-zinc-900/80 text-zinc-300 hover:text-white hover:border-white/30 hover:bg-zinc-800 transition-all"
                title="View Resume / CV"
              >
                <FileText className="w-4 h-4" />
                <span className="hidden sm:inline">Resume</span>
              </button>

              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-3 rounded text-sm font-mono border border-white/15 bg-zinc-900/80 text-zinc-300 hover:text-white hover:border-white/30 hover:bg-zinc-800 transition-all"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-3 rounded text-sm font-mono border border-white/15 bg-zinc-900/80 text-zinc-300 hover:text-white hover:border-white/30 hover:bg-zinc-800 transition-all"
                aria-label="GitHub Profile (Placeholder)"
                title="GitHub Profile (Placeholder)"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Recruiter "At-A-Glance" Engineering HUD Card (Col 8-12) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-lg border border-white/10 bg-zinc-900/40 p-6 sm:p-7 backdrop-blur-sm shadow-xl">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-5 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  </div>
                  <span className="font-mono text-xs text-zinc-400 ml-2">
                    recruiter-summary.json
                  </span>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded border border-emerald-500/30 bg-emerald-950/20 text-emerald-400">
                  VERIFIED PROFILE
                </span>
              </div>

              {/* Quick Metrics & Pillars */}
              <div className="space-y-4 pt-5">
                {/* Metric 1 */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded border border-white/10 bg-zinc-800/50 text-zinc-300 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-zinc-400">Total Engineering Track</div>
                    <div className="text-sm font-medium text-white font-mono">
                      ~5 Years Total Experience
                    </div>
                    <div className="text-xs text-zinc-400 mt-0.5">
                      Apprentice → Intern → SWE Web (2y) → AI Engineer (1.5y+)
                    </div>
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded border border-white/10 bg-zinc-800/50 text-zinc-300 shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-zinc-400">Primary Domain</div>
                    <div className="text-sm font-medium text-white font-mono">
                      AI Integration &amp; Production LLMs
                    </div>
                    <div className="text-xs text-zinc-400 mt-0.5">
                      OpenAI &amp; Gemini APIs, Celery Queues, Structured JSON Outputs
                    </div>
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded border border-white/10 bg-zinc-800/50 text-zinc-300 shrink-0">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-zinc-400">Backend &amp; Cloud Foundation</div>
                    <div className="text-sm font-medium text-white font-mono">
                      Django · PostgreSQL · Docker · AWS
                    </div>
                    <div className="text-xs text-zinc-400 mt-0.5">
                      REST API Architecture, Database Indexing &amp; Task Schedulers
                    </div>
                  </div>
                </div>

                {/* Metric 4 */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded border border-white/10 bg-zinc-800/50 text-zinc-300 shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-zinc-400">Target Roles</div>
                    <div className="flex flex-wrap gap-1 mt-1.5">
                      {profileData.targetRoles.map((role) => (
                        <span
                          key={role}
                          className="px-2 py-0.5 text-[11px] font-mono rounded bg-zinc-800/80 text-zinc-300 border border-white/[0.06]"
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Quick Link */}
              <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>Looking for immediate impact</span>
                <a
                  href="#contact"
                  className="text-zinc-200 hover:text-white underline underline-offset-4"
                >
                  Send direct message &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
