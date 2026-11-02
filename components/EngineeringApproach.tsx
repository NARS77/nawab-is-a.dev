import React from "react";
import { engineeringPrinciples } from "@/data/approach";
import { Code2, GitFork, Cpu, ShieldCheck } from "lucide-react";

export default function EngineeringApproach() {
  return (
    <section id="approach" className="py-20 md:py-28 border-b border-border-subtle bg-bg-subtle/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-accent mb-2">
              02 / Engineering Approach & Mental Models
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-content-primary">
              How I think, not just what I build.
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-content-muted max-w-md">
            System design principles grounded in real debugging, database constraints, and
            asynchronous workflows.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {engineeringPrinciples.map((item) => (
            <div
              key={item.number}
              className="p-6 rounded border border-border-subtle bg-bg-card flex flex-col justify-between"
            >
              <div>
                {/* Number & Code Context */}
                <div className="flex items-center justify-between pb-4 border-b border-border-subtle mb-4">
                  <span className="text-xs font-mono font-semibold text-accent">
                    PRINCIPLE {item.number}
                  </span>
                  <span className="text-[10px] font-mono text-content-muted">
                    {item.codeContext.split("&")[0]}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-semibold text-content-primary mb-2">
                  {item.title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-content-secondary leading-relaxed mb-4">
                  {item.summary}
                </p>

                {/* Specifics */}
                <ul className="space-y-2 pt-3 border-t border-border-subtle">
                  {item.details.map((d, i) => (
                    <li
                      key={i}
                      className="text-xs text-content-muted flex items-start gap-2 leading-relaxed"
                    >
                      <span className="text-accent mt-0.5">•</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Code Context footer tag */}
              <div className="mt-5 pt-3 border-t border-border-subtle text-[11px] font-mono text-content-secondary">
                Context: <span className="text-content-primary">{item.codeContext}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
