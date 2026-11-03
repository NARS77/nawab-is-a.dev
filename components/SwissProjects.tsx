import React from "react";
import { siteContent, SwissProject } from "@/content/site";
import SwissDiagram from "@/components/SwissDiagram";

export default function SwissProjects() {
  return (
    <section id="work" className="w-full">
      {siteContent.projects.map((project: SwissProject) => {
        const { theme } = project;

        return (
          <article
            key={project.slug}
            id={`project-${project.slug}`}
            className="w-full border-b-4 border-black px-4 sm:px-8 py-14 sm:py-20 lg:py-28 select-none"
            style={{
              backgroundColor: theme.bg,
              color: theme.text,
            }}
          >
            {/* Top Bar: Numeral & Status */}
            <div className="flex items-baseline justify-between border-b-2 pb-4 mb-6 sm:mb-8" style={{ borderColor: theme.rule }}>
              <div className="flex items-baseline gap-4 sm:gap-6">
                <span className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter">
                  {project.number}
                </span>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-widest opacity-80">
                  / SELECTED WORK
                </span>
              </div>

              <div
                className="border-2 px-3 py-1 text-xs sm:text-sm font-bold uppercase tracking-wider"
                style={{
                  backgroundColor: theme.badgeBg,
                  color: theme.badgeText,
                  borderColor: theme.rule,
                }}
              >
                {project.status}
              </div>
            </div>

            {/* Giant Poster Headline (10–20vw) */}
            <h2 className="text-[11vw] sm:text-[12vw] md:text-[13vw] font-bold leading-[0.88] tracking-tighter uppercase break-words mb-8 sm:mb-12">
              {project.name}
            </h2>

            {/* One-Sentence Summary */}
            <div className="border-t-2 sm:border-t-4 pt-6 sm:pt-8 pb-10 sm:pb-14" style={{ borderColor: theme.rule }}>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight leading-snug max-w-4xl">
                {project.oneLiner}
              </p>
            </div>

            {/* Strict Swiss Information Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-4 items-start">
              {/* Left Column: Problem & What I Built (cols 1-6) */}
              <div className="lg:col-span-6 space-y-8">
                {/* The Problem */}
                <div className="space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-widest opacity-75">
                    THE PROBLEM
                  </div>
                  <p className="text-sm sm:text-base leading-relaxed opacity-90 font-normal">
                    {project.problem}
                  </p>
                </div>

                {/* What I Built */}
                <div className="space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-widest opacity-75">
                    WHAT I BUILT
                  </div>
                  <p className="text-sm sm:text-base leading-relaxed opacity-90 font-normal">
                    {project.whatIBuilt}
                  </p>
                </div>

                {/* Planned Features (If applicable, e.g. EchoTrace) */}
                {project.plannedFeatures && (
                  <div
                    className="border-2 p-4 space-y-2"
                    style={{ borderColor: theme.rule }}
                  >
                    <div className="text-[11px] font-bold uppercase tracking-widest opacity-80">
                      STATUS BOUNDARY / PLANNED INTEGRATIONS
                    </div>
                    <ul className="space-y-1.5 text-xs sm:text-sm font-medium">
                      {project.plannedFeatures.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="font-bold opacity-60">○</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Right Column: Stack & Action Links (cols 7-12) */}
              <div className="lg:col-span-6 space-y-8">
                {/* Stack */}
                <div className="space-y-3">
                  <div className="text-[11px] font-bold uppercase tracking-widest opacity-75">
                    VERIFIED STACK
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="border-2 px-3 py-1 text-xs sm:text-sm font-bold uppercase tracking-wider"
                        style={{ borderColor: theme.rule }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t-2" style={{ borderColor: theme.rule }}>
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 px-4 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider hover:opacity-80 transition-opacity"
                      style={{
                        backgroundColor: theme.badgeBg,
                        color: theme.badgeText,
                        borderColor: theme.rule,
                      }}
                    >
                      View on GitHub ↗
                    </a>
                  )}

                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 px-4 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider hover:opacity-80 transition-opacity"
                      style={{
                        backgroundColor: theme.badgeBg,
                        color: theme.badgeText,
                        borderColor: theme.rule,
                      }}
                    >
                      Launch Live Demo ↗
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Visual: Clean SVG Diagram (inputs → processing → output) */}
            <div className="mt-12 sm:mt-16">
              <SwissDiagram project={project} />
            </div>
          </article>
        );
      })}
    </section>
  );
}
