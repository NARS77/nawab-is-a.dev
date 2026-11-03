"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { SwissProject } from "@/content/site";
import SwissDiagram from "@/components/SwissDiagram";
import MagneticElement from "@/components/MagneticElement";

interface ProjectFieldItemProps {
  project: SwissProject;
}

export default function ProjectFieldItem({ project }: ProjectFieldItemProps) {
  const { theme } = project;
  const containerRef = useRef<HTMLElement>(null);
  const [clipState, setClipState] = useState<string>("circle(150% at 50% 50%)");
  const [isWiping, setIsWiping] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    if (prefersReducedMotion || !canHover) return;

    function handleMouseEnter(e: MouseEvent) {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = Math.round(e.clientX - rect.left);
      const y = Math.round(e.clientY - rect.top);

      // Start circle wipe from entry point
      setIsWiping(false);
      setClipState(`circle(0px at ${x}px ${y}px)`);

      requestAnimationFrame(() => {
        setIsWiping(true);
        setClipState(`circle(150% at ${x}px ${y}px)`);
      });
    }

    el.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      el.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <article
      ref={containerRef}
      id={`project-${project.slug}`}
      className="relative w-full border-b-4 border-[#1B1B1A] px-4 sm:px-8 py-12 sm:py-16 lg:py-20 select-none overflow-hidden"
      style={{
        backgroundColor: "#F4F1EA",
        color: theme.text,
      }}
    >
      {/* Wipe Background Layer */}
      <div
        className="absolute inset-0 pointer-events-none will-change-[clip-path]"
        style={{
          backgroundColor: theme.bg,
          clipPath: clipState,
          transition: isWiping
            ? "clip-path 0.55s cubic-bezier(0.16, 1, 0.3, 1)"
            : "none",
        }}
      />

      {/* Content Container (z-10 above background wipe) */}
      <div className="relative z-10">
        {/* Top Bar: Numeral & Status */}
        <div
          className="flex items-center justify-between border-b-2 pb-4 mb-6 sm:mb-8"
          style={{ borderColor: theme.rule }}
        >
          <span className="text-3xl sm:text-5xl font-bold tracking-tighter">
            {project.number}
          </span>

          <div
            className="border-2 px-3 py-1 text-xs font-bold uppercase tracking-wider"
            style={{
              backgroundColor: theme.badgeBg,
              color: theme.badgeText,
              borderColor: theme.rule,
            }}
          >
            {project.status}
          </div>
        </div>

        {/* Project Name */}
        <h2 className="text-[11vw] sm:text-[12vw] font-bold leading-[0.88] tracking-tighter uppercase break-words mb-6 sm:mb-8">
          {project.name}
        </h2>

        {/* One Sentence */}
        <p className="text-xl sm:text-2xl font-bold tracking-tight leading-snug max-w-4xl mb-8 sm:mb-12">
          {project.oneLiner}
        </p>

        {/* Diagram with cursor proximity */}
        <div className="mb-6">
          <SwissDiagram project={project} />
        </div>

        {/* Link to detail page */}
        <div className="pt-4 flex justify-end">
          <MagneticElement pullFactor={0.2}>
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 border-2 px-5 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider hover:opacity-85 transition-opacity inline-block"
              style={{
                backgroundColor: theme.badgeBg,
                color: theme.badgeText,
                borderColor: theme.rule,
              }}
            >
              <span>Project Details & Stack</span>
              <span>→</span>
            </Link>
          </MagneticElement>
        </div>
      </div>
    </article>
  );
}
