import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import {
  ArrowLeft,
  ExternalLink,
  FileText,
  Layers,
  CheckCircle,
  AlertCircle,
  Cpu,
} from "lucide-react";
import { GithubIcon } from "@/components/icons";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Technical Case Study | Nawab Shaikh`,
    description: project.problem,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-bg text-content-primary">
      {/* Top Breadcrumb Header */}
      <header className="border-b border-border-subtle bg-bg/90 backdrop-blur sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-xs font-mono text-content-secondary hover:text-content-primary transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to selected work</span>
          </Link>

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono text-content-muted">Nawab Shaikh /</span>
            <span className="text-[11px] font-mono text-content-primary font-medium">
              {project.title}
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-20 space-y-16">
        {/* Project Header Banner */}
        <section className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono px-2.5 py-1 rounded bg-bg-card border border-border-subtle text-accent">
              PROJECT {project.number}
            </span>
            <span className="text-xs font-mono text-content-muted">•</span>
            <span className="text-xs font-mono text-content-secondary">
              {project.category}
            </span>
            <span className="text-xs font-mono text-content-muted">•</span>
            <span className="text-xs font-mono px-2.5 py-0.5 rounded border border-border-subtle bg-bg-subtle text-content-primary">
              {project.status}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-content-primary">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-content-secondary max-w-3xl leading-relaxed">
            {project.tagline}
          </p>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-content-primary bg-bg-elevated border border-border-medium hover:border-accent px-4 py-2 rounded transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>View Source on GitHub</span>
              </a>
            )}

            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-bg bg-content-primary hover:bg-white px-4 py-2 rounded transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Launch Live System</span>
              </a>
            )}

            {project.links.docs && (
              <a
                href={project.links.docs}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-content-secondary hover:text-content-primary border border-border-subtle px-4 py-2 rounded transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-accent" />
                <span>Verified Experience Document</span>
              </a>
            )}
          </div>
        </section>

        {/* Problem & Solution Detailed Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-8 rounded border border-border-subtle bg-bg-card">
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-accent">
              01 / The Core Problem
            </div>
            <h2 className="text-xl font-semibold text-content-primary">
              Context & Technical Constraint
            </h2>
            <p className="text-sm text-content-secondary leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-accent">
              02 / The Engineered Solution
            </div>
            <h2 className="text-xl font-semibold text-content-primary">
              System Architecture & Delivery
            </h2>
            <p className="text-sm text-content-secondary leading-relaxed">
              {project.solution}
            </p>
          </div>
        </section>

        {/* My Contribution Section */}
        <section className="p-6 sm:p-8 rounded border border-border-subtle bg-bg-subtle">
          <div className="text-xs font-mono uppercase tracking-wider text-content-muted mb-2">
            03 / Specific Contribution & Role
          </div>
          <h2 className="text-lg font-semibold text-content-primary mb-3">
            What I personally designed and engineered
          </h2>
          <p className="text-sm text-content-secondary leading-relaxed">
            {project.myContribution}
          </p>
        </section>

        {/* Architectural Layers Breakdown */}
        <section className="space-y-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-accent mb-1">
              04 / Systems Architecture
            </div>
            <h2 className="text-2xl font-semibold text-content-primary">
              Layer-by-layer architectural breakdown
            </h2>
            <p className="text-xs sm:text-sm font-mono text-content-muted mt-1">
              {project.architecture.overview}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.architecture.layers.map((layer, idx) => (
              <div
                key={layer.layer}
                className="p-5 rounded border border-border-subtle bg-bg-card space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-accent font-semibold">
                    LAYER 0{idx + 1}
                  </span>
                  <span className="text-[11px] font-mono text-content-muted">
                    {layer.technologies}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-content-primary">
                  {layer.layer}
                </h3>
                <p className="text-xs sm:text-sm text-content-secondary leading-relaxed">
                  {layer.role}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Engineering Decisions & Trade-offs */}
        <section className="space-y-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-accent mb-1">
              05 / Engineering Decisions & Trade-offs
            </div>
            <h2 className="text-2xl font-semibold text-content-primary">
              Deliberate architectural choices
            </h2>
          </div>

          <div className="space-y-4">
            {project.architecture.keyDecisions.map((dec, idx) => (
              <div
                key={dec.decision}
                className="p-6 rounded border border-border-subtle bg-bg-card space-y-3"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-accent font-semibold">
                    DECISION {idx + 1}:
                  </span>
                  <h3 className="text-base font-semibold text-content-primary">
                    {dec.decision}
                  </h3>
                </div>

                <div className="text-xs sm:text-sm text-content-secondary leading-relaxed">
                  <strong className="text-content-primary font-medium">Rationale: </strong>
                  {dec.rationale}
                </div>

                <div className="p-3 rounded bg-bg-subtle border border-border-subtle text-xs text-content-muted">
                  <strong className="text-content-secondary font-medium">Trade-off Accepted: </strong>
                  {dec.tradeoff}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack Matrix */}
        <section className="p-6 sm:p-8 rounded border border-border-subtle bg-bg-card space-y-4">
          <div className="text-xs font-mono uppercase tracking-wider text-accent">
            06 / Verified Technology Stack
          </div>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <span
                key={t}
                className="text-xs font-mono px-3 py-1.5 rounded bg-bg-subtle border border-border-subtle text-content-primary"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* Next Project Navigation */}
        <section className="pt-8 border-t border-border-subtle flex items-center justify-between">
          <Link
            href="/#work"
            className="text-xs font-mono text-content-secondary hover:text-content-primary inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Portfolio</span>
          </Link>

          <a
            href={`mailto:nawabshaikh1014@gmail.com?subject=Regarding ${encodeURIComponent(project.title)}`}
            className="text-xs font-mono text-accent hover:underline"
          >
            Discuss this architecture with Nawab ›
          </a>
        </section>
      </main>
    </div>
  );
}
