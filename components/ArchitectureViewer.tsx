"use client";

import React, { useState } from "react";
import { ArrowRight, Layers, Cpu, Database, Server, Sparkles, Check, AlertCircle } from "lucide-react";

interface ArchStep {
  step: string;
  label: string;
  detail: string;
  tech: string;
}

interface SystemFlow {
  id: string;
  name: string;
  subhead: string;
  description: string;
  steps: ArchStep[];
  tradeoffs: string;
}

const systems: SystemFlow[] = [
  {
    id: "rigsmith",
    name: "RigSmith: Multidimensional Constraint Pipeline",
    subhead: "Authoritative Hardware Validation & Interactive SVG Blueprint",
    description:
      "Validates physical form factors, socket interfaces, and electrical overhead in custom PC builds before hardware purchase.",
    steps: [
      {
        step: "01",
        label: "Component Selection & Client State",
        detail:
          "User picks hardware parts. Dynamic SVG renders real-time motherboard slot status and physical chassis clearances in React.",
        tech: "React 18 / Dynamic SVG",
      },
      {
        step: "02",
        label: "Authoritative Django REST Validation",
        detail:
          "Payload dispatched to DRF validation endpoints. Executes rule-based checks across CPU sockets, RAM clock generations, and PCIe lane allocation.",
        tech: "Django 5.x / DRF Serializers",
      },
      {
        step: "03",
        label: "Transient Power & Bottleneck Model",
        detail:
          "Calculates dynamic wattage overhead factoring peak transient power excursions for modern GPUs and checks CPU/GPU performance balance.",
        tech: "Python Mathematical Models",
      },
      {
        step: "04",
        label: "Relational Persistence & Alerts",
        detail:
          "Stores verified configuration states in PostgreSQL with strict foreign keys. Background worker monitors catalog prices for automated email drops.",
        tech: "PostgreSQL / Docker / Nginx",
      },
    ],
    tradeoffs:
      "Authoritative server validation ensures zero corrupted build states, while client SVG provides instant visual feedback without network lag.",
  },
  {
    id: "sentimentsphere",
    name: "SentimentSphere: Dual-Layer Feedback Intelligence",
    subhead: "Cost-Optimized Batch Processing with Lexical + LLM Inference",
    description:
      "Ingests raw customer feedback, executes local lexical scoring for speed, and delegates thematic classification to OpenAI API.",
    steps: [
      {
        step: "01",
        label: "Batch Ingestion & Preprocessing",
        detail:
          "Accepts CSV feedback files or API reviews. Pandas cleans non-standard encoding, normalizes timestamps, and filters empty strings.",
        tech: "Pandas / DRF File Handlers",
      },
      {
        step: "02",
        label: "Layer 1: Low-Latency Lexical Polarity",
        detail:
          "Runs TextBlob local scoring across all feedback rows in milliseconds, establishing baseline sentiment scores without consuming API tokens.",
        tech: "TextBlob NLP",
      },
      {
        step: "03",
        label: "Layer 2: OpenAI Thematic Extraction",
        detail:
          "Applies dynamic prompt templates with {feedback} interpolation. Calls OpenAI API with strict JSON formatting to extract intent and pain points.",
        tech: "OpenAI API (v1.12)",
      },
      {
        step: "04",
        label: "Analytics Commitment & Highcharts",
        detail:
          "Stores sentiment distributions, NPS ratings, and timeline series in PostgreSQL. Visualized on interactive Highcharts KPI dashboards.",
        tech: "PostgreSQL / Highcharts",
      },
    ],
    tradeoffs:
      "Dual-layer design reduces OpenAI token costs drastically while maintaining sub-second latency for immediate feedback review.",
  },
  {
    id: "echotrace",
    name: "EchoTrace: Asynchronous Audio Synthesis",
    subhead: "Decoupled Audio Chunking & Schema-Enforced Meeting Intelligence",
    description:
      "Transcribes meeting recordings and extracts decisions and action items into a structured relational memory bank.",
    steps: [
      {
        step: "01",
        label: "Audio Upload & Worker Acceptance",
        detail:
          "Endpoint validates audio formats, creates a pending job record, and dispatches the payload to an asynchronous background worker.",
        tech: "Python Worker State Machine",
      },
      {
        step: "02",
        label: "OpenAI Whisper Speech-to-Text",
        detail:
          "Segments long audio into chunks and transcribes conversations into timestamped speaker turns with confidence metadata.",
        tech: "OpenAI Whisper Pipeline",
      },
      {
        step: "03",
        label: "JSON Schema Structured Extraction",
        detail:
          "Feeds transcript segments to LLM prompt chains with enforced JSON schemas to reliably extract summaries, decision logs, and action items.",
        tech: "LLM Structured Outputs",
      },
      {
        step: "04",
        label: "Indexed Storage & Review Interface",
        detail:
          "Commits action items, assigned owners, and timestamped transcripts to PostgreSQL. Enables rapid keyword search and audio playback.",
        tech: "PostgreSQL / React Client",
      },
    ],
    tradeoffs:
      "Decoupled asynchronous worker prevents HTTP timeouts during multi-minute audio transcription jobs.",
  },
];

export default function ArchitectureViewer() {
  const [activeSystem, setActiveSystem] = useState<string>("rigsmith");

  const current = systems.find((s) => s.id === activeSystem) || systems[0];

  return (
    <div className="rounded border border-border-subtle bg-bg-card overflow-hidden">
      {/* Top Header & System Selector */}
      <div className="border-b border-border-subtle p-4 sm:p-5 bg-bg-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-accent mb-1">
            <Layers className="w-3.5 h-3.5" />
            <span>Interactive Systems Architecture</span>
          </div>
          <div className="text-sm font-semibold text-content-primary">
            Inspect real engineering workflows and data lifecycles
          </div>
        </div>

        {/* Tab Pills */}
        <div className="flex items-center gap-1.5 p-1 rounded bg-bg border border-border-subtle overflow-x-auto text-xs font-mono">
          {systems.map((sys) => (
            <button
              key={sys.id}
              onClick={() => setActiveSystem(sys.id)}
              className={`px-3 py-1.5 rounded transition-all whitespace-nowrap focus:outline-none focus-visible:ring-1 focus-visible:ring-accent ${
                activeSystem === sys.id
                  ? "bg-bg-elevated text-content-primary border border-border-medium font-medium"
                  : "text-content-secondary hover:text-content-primary"
              }`}
            >
              {sys.name.split(":")[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Active System Details */}
      <div className="p-5 sm:p-6 space-y-6">
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-content-primary">
            {current.name}
          </h3>
          <p className="text-xs sm:text-sm text-content-secondary mt-1">
            {current.description}
          </p>
        </div>

        {/* Steps Diagram Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 relative">
          {current.steps.map((step, idx) => (
            <div
              key={step.step}
              className="p-4 rounded bg-bg border border-border-subtle relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono text-accent font-semibold">
                    STAGE {step.step}
                  </span>
                  {idx < current.steps.length - 1 && (
                    <ArrowRight className="hidden md:block w-3.5 h-3.5 text-content-muted" />
                  )}
                </div>
                <div className="text-xs font-semibold text-content-primary mb-1.5">
                  {step.label}
                </div>
                <div className="text-[11px] text-content-secondary leading-relaxed">
                  {step.detail}
                </div>
              </div>

              <div className="mt-4 pt-2 border-t border-border-subtle text-[10px] font-mono text-content-muted">
                {step.tech}
              </div>
            </div>
          ))}
        </div>

        {/* Architectural Trade-off Box */}
        <div className="p-3.5 rounded bg-bg-subtle border border-border-subtle text-xs flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
          <div>
            <span className="font-mono font-semibold text-content-primary">
              Core Engineering Trade-off:{" "}
            </span>
            <span className="text-content-secondary">{current.tradeoffs}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
