import React from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import {
  ExternalLink,
  FileText,
  ArrowRight,
  CheckCircle,
  Clock,
  Sparkles,
} from "lucide-react";
import { GithubIcon } from "@/components/icons";
import ArchitectureViewer from "@/components/ArchitectureViewer";

export default function Projects() {
  return (
    <section id="work" className="py-20 md:py-28 border-b border-border-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-accent mb-2">
              01 / Selected Engineering Work
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-content-primary">
              Real projects. Verified implementations.
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-content-muted max-w-md">
            Production codebases, full-stack systems, and practical AI integrations. Zero fabricated
            metrics.
          </p>
        </div>

        {/* System Architecture Viewer Interactive Banner */}
        <div className="mb-16">
          <ArchitectureViewer />
        </div>

        {/* Featured Projects List */}
        <div className="space-y-16">
          {projects.map((project) => (
            <article
              key={project.id}
              className="p-6 sm:p-8 rounded border border-border-subtle bg-bg-card hover:border-border-medium transition-all"
            >
              {/* Card Meta Top */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-border-subtle">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-content-muted font-medium">
                    PROJECT {project.number}
                  </span>
                  <span className="text-content-muted text-xs">•</span>
                  <span className="text-xs font-mono text-content-secondary">
                    {project.category}
                  </span>
                </div>

                {/* Status Badge */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono border border-border-subtle bg-bg-subtle text-content-primary">
                  {project.status === "Shipped & Active" ? (
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-signal" />
                  ) : project.status === "Production Intern" ? (
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  ) : (
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  )}
                  <span>{project.status}</span>
                </div>
              </div>

              {/* Title & Tagline */}
              <div className="mt-6 mb-6">
                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-content-primary">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-content-secondary mt-1 font-normal">
                  {project.tagline}
                </p>
              </div>

              {/* Two-Column Problem & Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 border-b border-border-subtle">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-content-muted mb-2">
                    The Problem
                  </div>
                  <p className="text-xs sm:text-sm text-content-secondary leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-content-muted mb-2">
                    Engineering Solution
                  </div>
                  <p className="text-xs sm:text-sm text-content-secondary leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* My Contribution */}
              <div className="py-5 border-b border-border-subtle">
                <div className="text-xs font-mono uppercase tracking-wider text-content-muted mb-1.5">
                  My Contribution
                </div>
                <p className="text-xs sm:text-sm text-content-primary leading-relaxed">
                  {project.myContribution}
                </p>
              </div>

              {/* Key Technical Highlights */}
              <div className="py-5 border-b border-border-subtle">
                <div className="text-xs font-mono uppercase tracking-wider text-content-muted mb-3">
                  Technical Implementation Highlights
                </div>
                <ul className="space-y-2">
                  {project.technicalHighlights.map((hl, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-content-secondary"
                    >
                      <span className="text-accent font-mono text-xs mt-0.5">›</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stack and Action Links */}
              <div className="pt-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap items-center gap-1.5">
                  {project.stack.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2.5 py-1 rounded bg-bg-subtle border border-border-subtle text-content-secondary"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* External Links & Case Study */}
                <div className="flex flex-wrap items-center gap-3">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-content-secondary hover:text-content-primary border border-border-subtle hover:border-border-strong px-3 py-1.5 rounded transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Repository</span>
                    </a>
                  )}

                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-content-primary bg-bg-elevated border border-border-medium hover:border-accent px-3 py-1.5 rounded transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-accent" />
                      <span>Live Demo</span>
                    </a>
                  )}

                  {project.links.docs && (
                    <a
                      href={project.links.docs}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-content-secondary hover:text-content-primary border border-border-subtle px-3 py-1.5 rounded transition-colors"
                    >
                      <FileText className="w-3.5 h-3.5 text-accent" />
                      <span>Experience Letter</span>
                    </a>
                  )}

                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-accent hover:text-white px-2 py-1.5 transition-colors"
                  >
                    <span>Deep Architectural Breakdown</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
