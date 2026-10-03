import { Terminal, Cpu, Database, Cloud, GitMerge, ArrowRight } from "lucide-react";

export default function About() {
  const pillars = [
    {
      icon: Database,
      title: "Backend & Systems Grounding",
      description:
        "Years of modeling relational schemas in PostgreSQL, building RESTful APIs in Django & FastAPI, and managing high-concurrency connection pools created a rigorous standard for data integrity and reliability.",
    },
    {
      icon: Cpu,
      title: "Distributed Asynchronous Processing",
      description:
        "Mastering Celery worker clusters and Redis brokers to manage deferred execution, retry policies, and dead-letter queues paved the natural foundation for orchestrating non-deterministic, long-running AI inference pipelines.",
    },
    {
      icon: Cloud,
      title: "Production Infrastructure & MLOps",
      description:
        "Packaging microservices into multi-stage Docker containers and managing deployments across AWS instances established practical observability, health checks, and runtime containment for AI workloads in production.",
    },
  ];

  return (
    <section id="about" className="py-24 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 uppercase tracking-widest mb-3">
            <span className="h-px w-6 bg-zinc-600" />
            <span>01 / Engineering Narrative</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            From Web Systems to Production-Grade AI
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            AI systems are only as resilient as the software engineering wrapped around them.
            My transition from traditional full-stack web engineering into AI integration was not a
            departure from systems principles—it was an evolution into orchestrating probabilistic models
            with deterministic backend rigor.
          </p>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Main Story Narrative Card */}
          <div className="lg:col-span-7 rounded-lg border border-white/10 bg-zinc-900/30 p-8 flex flex-col justify-between">
            <div className="space-y-5 text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
              <p>
                Over the past <span className="text-white font-medium">5 years</span>, my engineering
                journey began with fundamental software development—building modular UI components,
                consuming REST APIs, and mastering Git workflows as an Apprentice and Intern.
              </p>
              <p>
                As a <span className="text-white font-medium">Software Engineer (Web)</span>, I stepped
                into full architecture ownership: writing scalable Django REST Framework services,
                normalizing PostgreSQL databases, building asynchronous background jobs with Celery and
                Redis, and deploying containerized applications onto AWS.
              </p>
              <p>
                When LLM breakthroughs emerged, the primary engineering challenge was never just calling an API endpoint—it was solving the operational friction around it:{" "}
                <span className="text-white font-medium">
                  latency bottlenecks, payload non-determinism, hallucinations, API rate limits, and cost spikes
                </span>.
              </p>
              <p>
                Today, as an <span className="text-white font-medium">AI Engineer</span>, I leverage that same backend, distributed systems, and cloud infrastructure grounding to build production AI applications that are predictable, observable, and economically viable.
              </p>
            </div>

            <div className="pt-8 mt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-6 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                <span>Deterministic Contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                <span>Async Inference Queues</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                <span>Cost &amp; Latency Guardrails</span>
              </div>
            </div>
          </div>

          {/* 3 Foundational Pillars Column */}
          <div className="lg:col-span-5 flex flex-col gap-4 justify-between">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="rounded-lg border border-white/10 bg-zinc-900/40 p-6 flex flex-col justify-start"
                >
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="p-2 rounded border border-white/10 bg-zinc-800/60 text-zinc-200">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-semibold font-mono text-white">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Roles Nawab is ready to fill */}
        <div className="rounded-lg border border-white/[0.08] bg-zinc-950 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1">
                Target Engineering Roles
              </span>
              <h3 className="text-lg font-semibold text-white">
                Where I deliver immediate architectural impact
              </h3>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-300 hover:text-white underline underline-offset-4"
            >
              <span>Discuss an opening</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {[
              {
                role: "AI Engineer / AI Integration",
                desc: "Connecting foundational LLM endpoints into web products, building prompt pipelines, structured validation, and token caching.",
              },
              {
                role: "MLOps / Inference Engineer",
                desc: "Containerizing workloads, managing Celery/Redis inference task queues, AWS deployments, and output evaluation suites.",
              },
              {
                role: "Full-Stack Engineer (Python / React)",
                desc: "Designing end-to-end architectures from normalized PostgreSQL schemas and Django APIs to responsive React client interfaces.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-4 rounded border border-white/[0.06] bg-zinc-900/50 hover:border-white/15 transition-colors"
              >
                <div className="text-sm font-medium font-mono text-zinc-100 mb-1.5">
                  {item.role}
                </div>
                <div className="text-xs text-zinc-400 leading-relaxed">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
