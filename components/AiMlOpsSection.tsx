import {
  Sparkles,
  Cpu,
  Layers,
  Cloud,
  ShieldAlert,
  Repeat,
  Gauge,
  CheckCheck,
} from "lucide-react";

export default function AiMlOpsSection() {
  const categories = [
    {
      icon: Sparkles,
      title: "LLM Orchestration & AI Integration",
      tagline: "Bridging non-deterministic language models with predictable application backends.",
      items: [
        {
          name: "OpenAI & Gemini Multi-Model Routing",
          desc: "Abstracted provider interfaces enabling fallback switching between GPT and Gemini models based on task complexity and quota limits.",
        },
        {
          name: "Strict JSON Schema Enforcements",
          desc: "Utilizing structured output formats (Pydantic / JSON Schema mode) to ensure 100% deterministic database persistence.",
        },
        {
          name: "Context Window & Token Budgeting",
          desc: "Optimized prompt templating, dynamic token truncation, and document chunking to prevent out-of-context failures and reduce cost.",
        },
      ],
    },
    {
      icon: Cpu,
      title: "Asynchronous Inference Pipelines",
      tagline: "Eliminating HTTP latency bottlenecks through decoupled task queues.",
      items: [
        {
          name: "Celery & Redis Worker Pools",
          desc: "Offloading compute-intensive LLM queries and batch document classification to background workers with concurrency throttling.",
        },
        {
          name: "Exponential Backoff & Rate Handling",
          desc: "Defensive retry strategies and jitter logic tailored to upstream LLM API rate limits (TPM / RPM) to maintain zero dropped jobs.",
        },
        {
          name: "Progressive Webhook & Polling Feeds",
          desc: "Pushing job completion states back to the client interface seamlessly via stateful status polling or webhook triggers.",
        },
      ],
    },
    {
      icon: Cloud,
      title: "Production MLOps & Infrastructure",
      tagline: "Deploying and scaling reproducible AI microservices with end-to-end observability.",
      items: [
        {
          name: "Multi-Stage Docker Packaging",
          desc: "Minimal production images isolating heavy dependencies, ensuring environment parity from local development to production.",
        },
        {
          name: "AWS Compute & Storage",
          desc: "Deploying services across EC2 compute, S3-compatible asset storage, and RDS managed PostgreSQL databases.",
        },
        {
          name: "Continuous Integration & Delivery",
          desc: "Automated linting, unit testing, and deployment verification pipelines triggered on every pull request.",
        },
      ],
    },
    {
      icon: Layers,
      title: "Model Output Evaluation & Reliability",
      tagline: "Treating AI responses with the same rigor as mission-critical database transactions.",
      items: [
        {
          name: "Automated Validation Gates",
          desc: "Post-generation verification routines checking for hallucinations, formatting violations, and out-of-bounds sentiment scores.",
        },
        {
          name: "Structured Tracing & Cost Observability",
          desc: "Detailed transaction logging recording prompt tokens, completion tokens, latency durations, and per-tenant usage analytics.",
        },
        {
          name: "Circuit Breakers & Graceful Degradation",
          desc: "Automatic failover mechanisms that return cached heuristic fallbacks if upstream AI services suffer sudden external downtime.",
        },
      ],
    },
  ];

  return (
    <section id="ai-mlops" className="py-24 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 uppercase tracking-widest mb-3">
            <span className="h-px w-6 bg-zinc-600" />
            <span>04 / AI &amp; MLOps Systems</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            The Intersection of SWE, AI &amp; Cloud
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            AI integration is not merely connecting an API key. It demands defensive engineering
            to overcome latency variance, model drift, API outages, and infrastructure expenses.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="rounded-xl border border-white/10 bg-zinc-900/30 p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded border border-white/10 bg-zinc-800 text-zinc-200">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold font-mono text-white">
                        {cat.title}
                      </h3>
                      <p className="text-xs text-zinc-400 font-mono mt-0.5">
                        {cat.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 pt-5 mt-4 border-t border-white/[0.08]">
                    {cat.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="space-y-1">
                        <div className="flex items-center gap-2 text-xs font-mono font-medium text-zinc-200">
                          <CheckCheck className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                          <span>{item.name}</span>
                        </div>
                        <p className="text-xs text-zinc-400 leading-relaxed pl-5.5">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Architectural Summary Banner */}
        <div className="mt-10 rounded-lg border border-white/10 bg-zinc-950 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded border border-white/10 bg-zinc-900 font-mono text-xs font-bold text-zinc-200">
              ML
            </div>
            <div>
              <div className="text-sm font-semibold text-white font-mono">
                Production-Ready AI Philosophy
              </div>
              <div className="text-xs text-zinc-400">
                Deterministic contracts &bull; Asynchronous background processing &bull; Multi-provider fallbacks
              </div>
            </div>
          </div>

          <a
            href="#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-200 hover:text-white underline underline-offset-4"
          >
            <span>See practical implementations in case studies &rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
