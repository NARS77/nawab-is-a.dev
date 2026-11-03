import React from "react";
import { SwissProject } from "@/content/site";

interface SwissDiagramProps {
  project: SwissProject;
}

export default function SwissDiagram({ project }: SwissDiagramProps) {
  const { diagram, theme } = project;
  const strokeColor = theme.rule;
  const textColor = theme.text;

  return (
    <div
      className="w-full border-2 p-4 sm:p-6 select-none"
      style={{ borderColor: strokeColor }}
      role="region"
      aria-label={`${project.name} architecture pipeline diagram`}
    >
      <div className="text-[11px] font-bold uppercase tracking-widest mb-4 opacity-80">
        SYSTEM FLOW / INPUT → PROCESS → OUTPUT
      </div>

      {/* SVG Canvas for Desktop / Tablet */}
      <div className="hidden sm:block">
        <svg
          viewBox="0 0 840 180"
          className="w-full h-auto block"
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
          {/* Connector 1: Input -> Processing */}
          <line
            x1="240"
            y1="90"
            x2="300"
            y2="90"
            stroke={strokeColor}
            strokeWidth="3"
            markerEnd={`url(#arrow-${project.slug})`}
          />
          {/* Connector 2: Processing -> Output */}
          <line
            x1="560"
            y1="90"
            x2="620"
            y2="90"
            stroke={strokeColor}
            strokeWidth="3"
            markerEnd={`url(#arrow-${project.slug})`}
          />

          {/* Node 1: INPUT */}
          <g>
            <rect
              x="10"
              y="20"
              width="230"
              height="140"
              fill="transparent"
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
              fontSize="18"
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
            >
              {diagram.input.detail.length > 28
                ? diagram.input.detail.slice(0, 27) + "…"
                : diagram.input.detail}
            </text>
          </g>

          {/* Node 2: PROCESSING */}
          <g>
            <rect
              x="300"
              y="20"
              width="260"
              height="140"
              fill="transparent"
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
              fontSize="18"
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
            >
              {diagram.processing.detail.length > 32
                ? diagram.processing.detail.slice(0, 31) + "…"
                : diagram.processing.detail}
            </text>
            {diagram.processing.subdetail && (
              <text
                x="316"
                y="134"
                fill={textColor}
                fontSize="11"
                opacity="0.7"
              >
                {diagram.processing.subdetail.length > 34
                  ? diagram.processing.subdetail.slice(0, 33) + "…"
                  : diagram.processing.subdetail}
              </text>
            )}
          </g>

          {/* Node 3: OUTPUT */}
          <g>
            <rect
              x="620"
              y="20"
              width="210"
              height="140"
              fill="transparent"
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
              fontSize="18"
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
            >
              {diagram.output.detail.length > 24
                ? diagram.output.detail.slice(0, 23) + "…"
                : diagram.output.detail}
            </text>
          </g>
        </svg>
      </div>

      {/* Stacked Layout for Mobile Screens (390px) */}
      <div className="sm:hidden space-y-3">
        <div
          className="border-2 p-3.5 space-y-1"
          style={{ borderColor: strokeColor }}
        >
          <div className="text-[10px] font-bold tracking-wider opacity-80">
            01 / INPUT
          </div>
          <div className="text-base font-bold tracking-tight">
            {diagram.input.title}
          </div>
          <div className="text-xs opacity-85 leading-snug">
            {diagram.input.detail}
          </div>
        </div>

        <div className="flex justify-center py-0.5">
          <span className="text-sm font-bold opacity-80">↓</span>
        </div>

        <div
          className="border-2 p-3.5 space-y-1"
          style={{ borderColor: strokeColor }}
        >
          <div className="text-[10px] font-bold tracking-wider opacity-80">
            02 / PROCESSING
          </div>
          <div className="text-base font-bold tracking-tight">
            {diagram.processing.title}
          </div>
          <div className="text-xs opacity-85 leading-snug">
            {diagram.processing.detail}
          </div>
          {diagram.processing.subdetail && (
            <div className="text-[11px] opacity-70 pt-1">
              {diagram.processing.subdetail}
            </div>
          )}
        </div>

        <div className="flex justify-center py-0.5">
          <span className="text-sm font-bold opacity-80">↓</span>
        </div>

        <div
          className="border-2 p-3.5 space-y-1"
          style={{ borderColor: strokeColor }}
        >
          <div className="text-[10px] font-bold tracking-wider opacity-80">
            03 / OUTPUT
          </div>
          <div className="text-base font-bold tracking-tight">
            {diagram.output.title}
          </div>
          <div className="text-xs opacity-85 leading-snug">
            {diagram.output.detail}
          </div>
        </div>
      </div>
    </div>
  );
}
