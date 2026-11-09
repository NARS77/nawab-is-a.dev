import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteContent, SwissProject } from "@/content/site";
import ProjectEvidence from "@/components/ProjectEvidence";
import SwissDiagram from "@/components/SwissDiagram";
import InteractiveVariableHeading from "@/components/InteractiveVariableHeading";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return siteContent.projects.map((p) => ({ id: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = siteContent.projects.find((p) => p.slug === id);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.name} — Technical Architecture | Nawab Shaikh`,
    description: project.oneLiner,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = siteContent.projects.find((p) => p.slug === id);

  if (!project) {
    notFound();
  }

  const { theme } = project;

  return (
    <div
      className="min-h-screen w-full"
      style={{
        backgroundColor: "var(--bg)",
        color: theme.text,
      }}
    >
      {/* Top Nav */}
      <header
        className="border-b-2 px-4 sm:px-8 py-4 flex items-center justify-between text-xs sm:text-sm font-bold uppercase tracking-wider"
        style={{ borderColor: theme.rule }}
      >
        <Link
          href="/#work"
          className="hover:underline underline-offset-4 decoration-2"
        >
          ← Return to Index
        </Link>

        <div>
          <span>NAWAB SHAIKH / {project.name}</span>
        </div>
      </header>

      <main id="main-content" className="px-4 sm:px-8 py-10 sm:py-16 max-w-7xl mx-auto space-y-10 sm:space-y-14">
        {/* Banner */}
        <div className="space-y-4">
          <div className="flex items-center gap-4 text-xs sm:text-sm font-bold uppercase tracking-wider">
            <span className="text-2xl sm:text-3xl font-bold">{project.number}</span>
            <span>/</span>
            <span
              className="border-2 px-3 py-0.5 text-xs font-bold uppercase"
              style={{
                backgroundColor: theme.badgeBg,
                color: theme.badgeText,
                borderColor: theme.rule,
              }}
            >
              {project.status}
            </span>
          </div>

          <InteractiveVariableHeading
            text={project.name}
            as="h1"
            radius={260}
            className="text-4xl sm:text-6xl font-medium leading-tight tracking-tight break-words"
          />

          <p className="text-lg sm:text-2xl font-bold tracking-tight max-w-4xl leading-snug">
            {project.oneLiner}
          </p>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t-2" style={{ borderColor: theme.rule }}>
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 px-4 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider hover:opacity-85"
                style={{
                  backgroundColor: theme.badgeBg,
                  color: theme.badgeText,
                  borderColor: theme.rule,
                }}
              >
                GitHub Repository ↗
              </a>
            )}

            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 px-4 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider hover:opacity-85"
                style={{
                  backgroundColor: theme.badgeBg,
                  color: theme.badgeText,
                  borderColor: theme.rule,
                }}
              >
                Launch Demo ↗
              </a>
            )}
          </div>
        </div>

        {/* Visual Architecture Diagram */}
        <section className="space-y-3">
          <SwissDiagram project={project} />
        </section>

        {/* Problem and Built (2-3 short lines each, not paragraphs) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t-2" style={{ borderColor: theme.rule }}>
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-widest opacity-80">
              Problem
            </div>
            <ul className="space-y-1.5 text-sm sm:text-base leading-snug font-medium">
              {project.problemLines.map((line, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="font-bold opacity-60">—</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-widest opacity-80">
              What I Built
            </div>
            <ul className="space-y-1.5 text-sm sm:text-base leading-snug font-medium">
              {project.whatIBuiltLines.map((line, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="font-bold opacity-60">—</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <ProjectEvidence slug={project.slug} />

        {/* Stack (short lines / tags) */}
        <section className="pt-6 border-t-2 space-y-3" style={{ borderColor: theme.rule }}>
          <div className="text-xs font-bold uppercase tracking-widest opacity-80">
            Tools I used
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
        </section>

        {/* Planned Features if any */}
        {project.plannedFeatures && (
          <section
            className="border-2 p-5 space-y-2"
            style={{ borderColor: theme.rule }}
          >
            <div className="text-xs font-bold uppercase tracking-widest opacity-80">
              Planned Integrations
            </div>
            <ul className="space-y-1.5 text-xs sm:text-sm font-medium">
              {project.plannedFeatures.map((feat, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="opacity-60">○</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Footer Link */}
        <footer className="pt-6 border-t-2 flex items-center justify-between text-xs sm:text-sm font-bold uppercase tracking-wider" style={{ borderColor: theme.rule }}>
          <Link href="/#work" className="hover:underline">
            ← Return to Selected Work
          </Link>
          <a
            href={`mailto:${siteContent.contact.email}?subject=Regarding ${encodeURIComponent(project.name)}`}
            className="hover:underline"
          >
            Contact Nawab →
          </a>
        </footer>
      </main>
    </div>
  );
}
