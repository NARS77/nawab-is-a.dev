"use client";

import { useState } from "react";
import { projects, ProjectCaseStudy } from "@/data/projects";
import {
  ExternalLink,
  Layers,
  ArrowRight,
  Workflow,
  CheckCircle,
  Lightbulb,
  FileCode,
} from "lucide-react";
import { GithubIcon } from "@/components/icons";

export default function Projects() {
  const [selectedProjectId, setSelectedProjectId] = useState<string>("sentimentsphere");

  const selectedProject =
    projects.find((p) => p.id === selectedProjectId) || projects[0];

  return (
    <section id="projects" className="py-24 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 uppercase tracking-widest mb-3">
            <span className="h-px w-6 bg-zinc-600" />
            <span>03 / Selected Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Production Architectures &amp; Systems
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            Detailed engineering breakdowns exploring real constraints: asynchronous inference queues,
            structured LLM output contracts, relational data integrity, and microservice containerization.
          </p>
        </div>

        {/* Project Selector Pills */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2">
          {projects.map((proj) => {
            const isActive = proj.id === selectedProjectId;
            return (
              <button
                key={proj.id}
                onClick={() => setSelectedProjectId(proj.id)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-lg border text-xs font-mono transition-all duration-150 ${
                  isActive
                    ? "border-zinc-200 bg-zinc-100 text-zinc-950 font-semibold shadow-md"
                    : "border-white/10 bg-zinc-900/40 text-zinc-400 hover:text-white hover:border-white/20"
                }`}
              >
                <span>{proj.title}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded ${
                    isActive ? "bg-zinc-300 text-zinc-900" : "bg-zinc-800 text-zinc-400"
                  }`}
                >
                  {proj.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Case Study Detail Box */}
        <article className="rounded-xl border border-white/10 bg-zinc-900/40 p-6 sm:p-10 backdrop-blur-sm">
          {/* Header & Meta */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-8 border-b border-white/[0.08]">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-2 font-mono text-xs text-zinc-400">
                <span className="text-emerald-400 font-medium">{selectedProject.badge}</span>
                <span>&bull;</span>
                <span>Role: {selectedProject.role}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-base text-zinc-300 leading-relaxed">
                {selectedProject.tagline}
              </p>
            </div>

            {/* Links Group (Placeholders marked cleanly) */}
            <div className="flex items-center gap-3 shrink-0 pt-2 lg:pt-0">
              <a
                href={selectedProject.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded text-xs font-mono border border-white/15 bg-zinc-900 text-zinc-300 hover:text-white hover:border-white/30 transition-colors"
                title="Repository Code (Placeholder)"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Source</span>
                <span className="text-[10px] text-zinc-400">(Placeholder)</span>
              </a>

              <a
                href={selectedProject.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded text-xs font-mono font-medium bg-zinc-100 text-zinc-950 hover:bg-white transition-colors shadow-sm"
                title="Interactive Demo (Placeholder)"
              >
                <span>Live Preview</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Problem vs Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-b border-white/[0.08]">
            {/* Problem */}
            <div className="p-6 rounded-lg border border-red-500/10 bg-zinc-950/60">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-red-400/80" />
                <span>The Problem &amp; Operational Friction</span>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {selectedProject.problem}
              </p>
            </div>

            {/* Solution */}
            <div className="p-6 rounded-lg border border-emerald-500/10 bg-zinc-950/60">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
                <span>The Engineered Solution</span>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {selectedProject.solution}
              </p>
            </div>
          </div>

          {/* Architecture & Flow */}
          <div className="py-8 border-b border-white/[0.08]">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400 mb-4">
              <Workflow className="w-4 h-4 text-zinc-300" />
              <span>System Architecture &amp; Execution Pipeline</span>
            </div>
            <p className="text-sm text-zinc-400 mb-6">
              {selectedProject.architecture.overview}
            </p>

            {/* Execution Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-8">
              {selectedProject.architecture.flow.map((step, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded border border-white/[0.08] bg-zinc-950 flex flex-col justify-between"
                >
                  <div className="text-[11px] font-mono text-zinc-400 mb-2 font-medium">
                    STEP 0{idx + 1}
                  </div>
                  <div className="text-xs text-zinc-300 leading-snug">
                    {step}
                  </div>
                </div>
              ))}
            </div>

            {/* Key Decisions Rationale */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1">
                Deliberate Engineering Trade-offs
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {selectedProject.architecture.keyDecisions.map((decision, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded border border-white/[0.06] bg-zinc-950/50"
                  >
                    <div className="flex items-center gap-1.5 font-mono text-xs font-semibold text-zinc-200 mb-1.5">
                      <Lightbulb className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{decision.title}</span>
                    </div>
                    <div className="text-xs text-zinc-400 leading-relaxed">
                      {decision.rationale}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Qualitative Outcomes & Impact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-b border-white/[0.08]">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-zinc-300" />
                <span>Verified System Outcomes</span>
              </h4>
              <ul className="space-y-2.5">
                {selectedProject.qualitativeOutcomes.map((outcome, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-zinc-300">
                    <span className="text-zinc-500 font-mono text-xs mt-0.5">&bull;</span>
                    <span className="leading-relaxed">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-2">
                <FileCode className="w-4 h-4 text-zinc-300" />
                <span>Key Engineering Highlights</span>
              </h4>
              <ul className="space-y-2.5">
                {selectedProject.engineeringHighlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-zinc-300">
                    <span className="text-zinc-500 font-mono text-xs mt-0.5">&bull;</span>
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technology Stack Footer */}
          <div className="pt-6">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-3">
              Technologies &amp; Libraries
            </span>
            <div className="flex flex-wrap gap-2">
              {selectedProject.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono rounded border border-white/10 bg-zinc-950 text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
