import React from "react";
import { skillGroups } from "@/data/skills";

export default function TechnicalStack() {
  return (
    <section id="stack" className="py-20 md:py-28 border-b border-border-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-accent mb-2">
              03 / Technical Stack & Tooling
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-content-primary">
              Tools grounded in shipped systems.
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-content-muted max-w-md">
            Categorized by system layer. No arbitrary 95% proficiency bars or floating badges.
          </p>
        </div>

        {/* Stack Groups Grid */}
        <div className="space-y-8">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="p-6 sm:p-7 rounded border border-border-subtle bg-bg-card"
            >
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-5 border-b border-border-subtle mb-6">
                <h3 className="text-base sm:text-lg font-semibold text-content-primary">
                  {group.category}
                </h3>
                <p className="text-xs font-mono text-content-muted">
                  {group.description}
                </p>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3.5 rounded bg-bg-subtle border border-border-subtle flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-sm font-semibold text-content-primary mb-1">
                        {skill.name}
                      </div>
                      <p className="text-xs text-content-secondary leading-relaxed mb-3">
                        {skill.context}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-border-subtle flex flex-wrap items-center gap-1.5">
                      <span className="text-[10px] font-mono text-content-muted">Verified in:</span>
                      {skill.projects.map((p) => (
                        <span
                          key={p}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-bg border border-border-subtle text-content-secondary"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
