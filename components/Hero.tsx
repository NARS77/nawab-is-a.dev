import React from "react";
import { profile } from "@/data/profile";
import { ArrowRight, ArrowDownToLine, Terminal, CheckCircle2, GitBranch } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 border-b border-border-subtle overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Subtle engineering status line */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-bg-subtle border border-border-subtle text-xs font-mono text-content-secondary">
            <span className="w-2 h-2 rounded-full bg-accent-signal" />
            <span className="text-content-primary font-medium">Nawab Shaikh</span>
            <span className="text-content-muted">/</span>
            <span>Full-Stack & AI Systems Engineer</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono text-content-muted border border-border-subtle bg-bg-card">
            <span>India</span>
            <span>•</span>
            <span className="text-content-secondary">Open to Relocation</span>
          </div>
        </div>

        {/* Editorial Headline */}
        <div className="max-w-4xl space-y-6">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tighter text-content-primary leading-[1.08]">
            Software that solves real problems.
          </h1>

          <p className="text-lg sm:text-xl text-content-secondary leading-relaxed max-w-2xl font-normal">
            I build full-stack products, integrate AI into useful workflows, and turn complex
            requirements into maintainable software.
          </p>
        </div>

        {/* Action Group */}
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-medium text-bg bg-content-primary hover:bg-white px-5 py-2.5 rounded transition-colors focus-visible:ring-2 focus-visible:ring-accent"
          >
            <span>View selected work</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-medium text-content-primary bg-bg-elevated hover:bg-bg-subtle border border-border-medium hover:border-accent px-5 py-2.5 rounded transition-colors focus-visible:ring-2 focus-visible:ring-accent"
          >
            <span>Get in touch</span>
          </a>

          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Nawab_Shaikh_Resume.pdf"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-medium text-content-secondary hover:text-content-primary border border-border-subtle hover:border-border-strong px-4 py-2.5 rounded transition-colors focus-visible:ring-2 focus-visible:ring-accent"
          >
            <ArrowDownToLine className="w-3.5 h-3.5 text-accent" />
            <span>Download resume</span>
          </a>
        </div>

        {/* Verified Technical Proof Bar */}
        <div className="mt-16 pt-8 border-t border-border-subtle">
          <div className="text-[11px] font-mono uppercase tracking-wider text-content-muted mb-4">
            Verified Engineering Records
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Metric 1 */}
            <div className="p-3.5 rounded bg-bg-card border border-border-subtle">
              <div className="flex items-center gap-2 text-xs font-mono text-content-muted mb-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                <span>Production Internship</span>
              </div>
              <div className="text-sm font-semibold text-content-primary">
                Cruxx AI (2024–2025)
              </div>
              <div className="text-xs text-content-secondary mt-0.5">
                React, Django, PostgreSQL, REST APIs
              </div>
            </div>

            {/* Metric 2 */}
            <div className="p-3.5 rounded bg-bg-card border border-border-subtle">
              <div className="flex items-center gap-2 text-xs font-mono text-content-muted mb-1">
                <GitBranch className="w-3.5 h-3.5 text-accent" />
                <span>Hardware Engine</span>
              </div>
              <div className="text-sm font-semibold text-content-primary">
                RigSmith Platform
              </div>
              <div className="text-xs text-content-secondary mt-0.5">
                Live SVG Blueprint & Validation
              </div>
            </div>

            {/* Metric 3 */}
            <div className="p-3.5 rounded bg-bg-card border border-border-subtle">
              <div className="flex items-center gap-2 text-xs font-mono text-content-muted mb-1">
                <Terminal className="w-3.5 h-3.5 text-accent" />
                <span>AI Data Intelligence</span>
              </div>
              <div className="text-sm font-semibold text-content-primary">
                SentimentSphere
              </div>
              <div className="text-xs text-content-secondary mt-0.5">
                OpenAI & TextBlob Dual-Layer NLP
              </div>
            </div>

            {/* Metric 4 */}
            <div className="p-3.5 rounded bg-bg-card border border-border-subtle">
              <div className="flex items-center gap-2 text-xs font-mono text-content-muted mb-1">
                <span className="w-2 h-2 rounded-full bg-accent-signal" />
                <span>Formal Education</span>
              </div>
              <div className="text-sm font-semibold text-content-primary">
                B.Tech in AI & Data Science
              </div>
              <div className="text-xs text-content-secondary mt-0.5">
                PVPIT Sangli (Graduating 2025)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
