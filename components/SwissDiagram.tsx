"use client";

import React, { useRef, useEffect } from "react";
import { SwissProject } from "@/content/site";

interface SwissDiagramProps {
  project: SwissProject;
}

export default function SwissDiagram({ project }: SwissDiagramProps) {
  const { diagram, theme } = project;
  const strokeColor = theme.rule;
  const textColor = theme.text;

  const svgRef = useRef<SVGSVGElement>(null);
  const node1Ref = useRef<SVGGElement>(null);
  const node2Ref = useRef<SVGGElement>(null);
  const node3Ref = useRef<SVGGElement>(null);
  const line1Ref = useRef<SVGLineElement>(null);
  const line2Ref = useRef<SVGLineElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    if (prefersReducedMotion || !canHover) return;

    let rafId: number | null = null;
    let mouseX = -9999;
    let mouseY = -9999;
    let isInside = false;

    // Node center coordinates in SVG coordinate system (viewBox 0 0 840 180)
    const nodes = [
      { ref: node1Ref, cx: 125, cy: 90 }, // Node 1: x 10..240, y 20..160
      { ref: node2Ref, cx: 430, cy: 90 }, // Node 2: x 300..560, y 20..160
      { ref: node3Ref, cx: 730, cy: 90 }, // Node 3: x 620..840, y 20..160
    ];

    function updateDiagram() {
      if (!isInside || !svg) {
        nodes.forEach((n) => {
          if (n.ref.current) {
            n.ref.current.style.transform = "translate3d(0, 0, 0)";
            n.ref.current.style.transition = "transform 0.3s ease-out";
          }
        });
        if (line1Ref.current) {
          line1Ref.current.style.strokeWidth = "3";
          line1Ref.current.style.opacity = "1";
        }
        if (line2Ref.current) {
          line2Ref.current.style.strokeWidth = "3";
          line2Ref.current.style.opacity = "1";
        }
        return;
      }

      const rect = svg.getBoundingClientRect();
      // Convert screen mouse coords to SVG viewBox coords (840 x 180)
      const scaleX = 840 / rect.width;
      const scaleY = 180 / rect.height;
      const svgX = (mouseX - rect.left) * scaleX;
      const svgY = (mouseY - rect.top) * scaleY;

      let n1Near = false;
      let n2Near = false;
      let n3Near = false;

      nodes.forEach((n, idx) => {
        if (!n.ref.current) return;
        const dist = Math.hypot(svgX - n.cx, svgY - n.cy);
        const RADIUS = 180;

        if (dist < RADIUS) {
          if (idx === 0) n1Near = true;
          if (idx === 1) n2Near = true;
          if (idx === 2) n3Near = true;

          const pull = (1 - dist / RADIUS) * 12; // max 12px SVG pull
          const angle = Math.atan2(svgY - n.cy, svgX - n.cx);
          const tx = Math.cos(angle) * pull;
          const ty = Math.sin(angle) * pull;

          n.ref.current.style.transition = "transform 0.05s ease-out";
          n.ref.current.style.transform = `translate3d(${tx.toFixed(1)}px, ${ty.toFixed(1)}px, 0)`;
        } else {
          n.ref.current.style.transition = "transform 0.2s ease-out";
          n.ref.current.style.transform = "translate3d(0, 0, 0)";
        }
      });

      // Highlight connected lines if adjacent nodes are influenced
      if (line1Ref.current) {
        if (n1Near || n2Near) {
          line1Ref.current.style.strokeWidth = "5";
          line1Ref.current.style.opacity = "1";
        } else {
          line1Ref.current.style.strokeWidth = "3";
          line1Ref.current.style.opacity = "0.85";
        }
      }

      if (line2Ref.current) {
        if (n2Near || n3Near) {
          line2Ref.current.style.strokeWidth = "5";
          line2Ref.current.style.opacity = "1";
        } else {
          line2Ref.current.style.strokeWidth = "3";
          line2Ref.current.style.opacity = "0.85";
        }
      }
    }

    function handleMouseMove(e: MouseEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isInside = true;

      if (rafId === null) {
        rafId = requestAnimationFrame(() => {
          updateDiagram();
          rafId = null;
        });
      }
    }

    function handleMouseLeave() {
      isInside = false;
      if (rafId === null) {
        rafId = requestAnimationFrame(() => {
          updateDiagram();
          rafId = null;
        });
      }
    }

    svg.addEventListener("mousemove", handleMouseMove, { passive: true });
    svg.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      svg.removeEventListener("mousemove", handleMouseMove);
      svg.removeEventListener("mouseleave", handleMouseLeave);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      className="w-full border-2 p-4 sm:p-6 select-none bg-white/40"
      style={{ borderColor: strokeColor }}
      role="region"
      aria-label={`${project.name} architecture pipeline diagram`}
    >
      <div className="text-[11px] font-bold uppercase tracking-widest mb-4 opacity-80">
        HOW IT WORKS / INPUT → PROCESS → OUTPUT
      </div>

      {/* SVG Canvas for Desktop / Tablet */}
      <div className="hidden sm:block">
        <svg
          ref={svgRef}
          viewBox="0 0 840 180"
          className="w-full h-auto block will-change-transform"
          role="img"
          aria-label={`${project.name} data flow diagram`}
        >
          <defs>
            <marker
              id={`arrow-${project.slug}`}
              viewBox="0 0 10 10"
              refX="7"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1 L 8 5 L 0 9 z" fill={strokeColor} />
            </marker>
          </defs>

          {/* Connectors */}
          <line
            ref={line1Ref}
            x1="240"
            y1="90"
            x2="300"
            y2="90"
            stroke={strokeColor}
            strokeWidth="3"
            markerEnd={`url(#arrow-${project.slug})`}
            className="transition-[stroke-width,opacity] duration-150"
          />
          <line
            ref={line2Ref}
            x1="560"
            y1="90"
            x2="620"
            y2="90"
            stroke={strokeColor}
            strokeWidth="3"
            markerEnd={`url(#arrow-${project.slug})`}
            className="transition-[stroke-width,opacity] duration-150"
          />

          {/* Node 1: INPUT */}
          <g ref={node1Ref} className="will-change-transform">
            <rect
              x="10"
              y="20"
              width="230"
              height="140"
              fill={theme.bg}
              stroke={strokeColor}
              strokeWidth="3"
            />
            <text
              x="26"
              y="52"
              fill={textColor}
              fontSize="12"
              fontWeight="700"
              letterSpacing="0.1em"
            >
              01 / INPUT
            </text>
            <text
              x="26"
              y="82"
              fill={textColor}
              fontSize="17"
              fontWeight="700"
              letterSpacing="-0.02em"
            >
              {diagram.input.title}
            </text>
            <text
              x="26"
              y="112"
              fill={textColor}
              fontSize="12"
              opacity="0.85"
              fontFamily="monospace"
            >
              {diagram.input.detail.length > 28
                ? diagram.input.detail.slice(0, 26) + "..."
                : diagram.input.detail}
            </text>
          </g>

          {/* Node 2: PROCESSING */}
          <g ref={node2Ref} className="will-change-transform">
            <rect
              x="300"
              y="20"
              width="260"
              height="140"
              fill={theme.bg}
              stroke={strokeColor}
              strokeWidth="3"
            />
            <text
              x="316"
              y="52"
              fill={textColor}
              fontSize="12"
              fontWeight="700"
              letterSpacing="0.1em"
            >
              02 / PROCESSING
            </text>
            <text
              x="316"
              y="82"
              fill={textColor}
              fontSize="17"
              fontWeight="700"
              letterSpacing="-0.02em"
            >
              {diagram.processing.title}
            </text>
            <text
              x="316"
              y="112"
              fill={textColor}
              fontSize="12"
              opacity="0.85"
              fontFamily="monospace"
            >
              {diagram.processing.detail.length > 32
                ? diagram.processing.detail.slice(0, 30) + "..."
                : diagram.processing.detail}
            </text>
            {diagram.processing.subdetail && (
              <text
                x="316"
                y="134"
                fill={textColor}
                fontSize="11"
                opacity="0.7"
                fontFamily="monospace"
              >
                {diagram.processing.subdetail.length > 34
                  ? diagram.processing.subdetail.slice(0, 32) + "..."
                  : diagram.processing.subdetail}
              </text>
            )}
          </g>

          {/* Node 3: OUTPUT */}
          <g ref={node3Ref} className="will-change-transform">
            <rect
              x="620"
              y="20"
              width="210"
              height="140"
              fill={theme.bg}
              stroke={strokeColor}
              strokeWidth="3"
            />
            <text
              x="636"
              y="52"
              fill={textColor}
              fontSize="12"
              fontWeight="700"
              letterSpacing="0.1em"
            >
              03 / OUTPUT
            </text>
            <text
              x="636"
              y="82"
              fill={textColor}
              fontSize="17"
              fontWeight="700"
              letterSpacing="-0.02em"
            >
              {diagram.output.title}
            </text>
            <text
              x="636"
              y="112"
              fill={textColor}
              fontSize="12"
              opacity="0.85"
              fontFamily="monospace"
            >
              {diagram.output.detail.length > 24
                ? diagram.output.detail.slice(0, 22) + "..."
                : diagram.output.detail}
            </text>
          </g>
        </svg>
      </div>

      {/* Mobile Stack View */}
      <div className="block sm:hidden space-y-4">
        {/* Mobile Node 1 */}
        <div
          className="border-2 p-3 space-y-1 bg-white/60"
          style={{ borderColor: strokeColor }}
        >
          <div className="text-[10px] font-bold uppercase tracking-wider opacity-70">
            01 / INPUT
          </div>
          <div className="font-bold text-sm">{diagram.input.title}</div>
          <div className="text-xs font-mono opacity-80">{diagram.input.detail}</div>
        </div>

        <div className="flex justify-center text-lg font-bold opacity-75">↓</div>

        {/* Mobile Node 2 */}
        <div
          className="border-2 p-3 space-y-1 bg-white/60"
          style={{ borderColor: strokeColor }}
        >
          <div className="text-[10px] font-bold uppercase tracking-wider opacity-70">
            02 / PROCESSING
          </div>
          <div className="font-bold text-sm">{diagram.processing.title}</div>
          <div className="text-xs font-mono opacity-80">{diagram.processing.detail}</div>
          {diagram.processing.subdetail && (
            <div className="text-[11px] font-mono opacity-65 pt-1">
              {diagram.processing.subdetail}
            </div>
          )}
        </div>

        <div className="flex justify-center text-lg font-bold opacity-75">↓</div>

        {/* Mobile Node 3 */}
        <div
          className="border-2 p-3 space-y-1 bg-white/60"
          style={{ borderColor: strokeColor }}
        >
          <div className="text-[10px] font-bold uppercase tracking-wider opacity-70">
            03 / OUTPUT
          </div>
          <div className="font-bold text-sm">{diagram.output.title}</div>
          <div className="text-xs font-mono opacity-80">{diagram.output.detail}</div>
        </div>
      </div>
    </div>
  );
}
