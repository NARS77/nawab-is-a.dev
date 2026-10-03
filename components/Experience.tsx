"use client";

import { useState } from "react";
import { careerStages, CareerStage } from "@/data/experience";
import {
  Briefcase,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  TrendingUp,
  Cpu,
  Layers,
  ChevronRight,
  Sparkles,
} from "lucide-react";

export default function Experience() {
  const [activeStageId, setActiveStageId] = useState<string>("ai-engineer");

  const activeStage =
    careerStages.find((s) => s.id === activeStageId) || careerStages[0];

  return (
    <section id="experience" className="py-24 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 uppercase tracking-widest mb-3">
            <span className="h-px w-6 bg-zinc-600" />
            <span>02 / Career Progression</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Increasing Ownership &amp; System Complexity
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            A cohesive ~5-year progression from mastering software engineering fundamentals to
            owning full-stack cloud applications, culminating in architecting production AI systems.
          </p>
        </div>

        {/* Progression Stepper Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
          {careerStages.map((stage) => {
            const isActive = stage.id === activeStageId;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStageId(stage.id)}
                className={`text-left p-4 rounded-lg border transition-all duration-150 flex flex-col justify-between ${
                  isActive
                    ? "border-zinc-200 bg-zinc-900 text-white shadow-md ring-1 ring-white/20"
                    : "border-white/10 bg-zinc-900/30 text-zinc-400 hover:text-zinc-200 hover:border-white/20 hover:bg-zinc-900/60"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-[11px] font-mono px-2 py-0.5 rounded ${
                        isActive
                          ? "bg-zinc-100 text-zinc-950 font-semibold"
                          : "bg-zinc-800 text-zinc-400"
                      }`}
                    >
                      Stage 0{stage.stageNumber}
                    </span>
                    <span className="text-xs font-mono text-zinc-400">
                      {stage.periodLabel}
                    </span>
                  </div>
                  <div className="font-semibold text-sm font-mono truncate text-zinc-100">
                    {stage.title.split("/")[0].trim()}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span className="truncate">{stage.category}</span>
                  {isActive && <ChevronRight className="w-3.5 h-3.5 text-zinc-100 shrink-0" />}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Panel */}
        <div className="rounded-xl border border-white/10 bg-zinc-900/40 p-6 sm:p-10 backdrop-blur-sm">
          {/* Header of Active Stage */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-8 border-b border-white/[0.08]">
            <div>
              <div className="flex flex-wrap items-center gap-2.5 mb-2">
                <span className="px-2.5 py-0.5 rounded text-xs font-mono font-medium bg-zinc-800 text-zinc-200 border border-white/10">
                  Stage 0{activeStage.stageNumber} of 04
                </span>
                <span className="text-xs font-mono text-zinc-400">
                  Duration: {activeStage.duration}
                </span>
                <span className="text-xs font-mono px-2 py-0.5 rounded border border-white/10 text-zinc-300">
                  {activeStage.scope}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {activeStage.title}
              </h3>
            </div>

            {/* Progression Trajectory Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-white/10 bg-zinc-800/40 text-xs font-mono text-zinc-300 shrink-0">
              <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{activeStage.progression}</span>
            </div>
          </div>

          {/* Overview Summary */}
          <div className="py-6 border-b border-white/[0.08]">
            <p className="text-base text-zinc-300 leading-relaxed font-normal">
              {activeStage.summary}
            </p>
          </div>

          {/* Core Content Grid: Responsibilities vs Technical Challenges */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-8 border-b border-white/[0.08]">
            {/* Responsibilities Column (Col 1-7) */}
            <div className="lg:col-span-7">
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-4 h-4 text-zinc-300" />
                <span>Key Responsibilities &amp; Delivered Features</span>
              </h4>
              <ul className="space-y-3">
                {activeStage.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-500 mt-2 shrink-0" />
                    <span className="leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Engineering Problems & Complexity (Col 8-12) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="p-5 rounded-lg border border-white/10 bg-zinc-950/70">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-4 h-4 text-zinc-300" />
                  <span>Engineering Challenges Solved</span>
                </h4>
                <div className="space-y-3">
                  {activeStage.keyChallenges.map((challenge, i) => (
                    <div key={i} className="text-xs text-zinc-300 leading-relaxed pl-2 border-l border-zinc-700">
                      {challenge}
                    </div>
                  ))}
                </div>
              </div>

              {/* Scope & Progression Takeaway */}
              <div className="p-5 rounded-lg border border-white/10 bg-zinc-950/70">
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1">
                  Progression Vector
                </div>
                <div className="text-sm font-medium text-white font-mono mb-1">
                  {activeStage.highlight}
                </div>
                <div className="text-xs text-zinc-400 leading-relaxed">
                  Demonstrates verifiable escalation of system ownership, code review authority, and architectural impact.
                </div>
              </div>
            </div>
          </div>

          {/* Active Stage Technologies */}
          <div className="pt-6">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-3">
              Technologies &amp; Tools Utilized in this Stage
            </span>
            <div className="flex flex-wrap gap-2">
              {activeStage.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono rounded border border-white/10 bg-zinc-950 text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
