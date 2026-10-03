export interface Principle {
  number: string;
  title: string;
  tagline: string;
  body: string;
  practices: string[];
}

export const engineeringPrinciples: Principle[] = [
  {
    number: "01",
    title: "Build for Production, Not Demos",
    tagline: "Software proves its value under failure states, load spikes, and real user abuse.",
    body: "Proof-of-concepts ignore edge cases, rate limits, network partitions, and malicious input. Production software requires defensive boundary validation, graceful degradation paths, idempotent retries, and comprehensive error containment from day one.",
    practices: [
      "Strict input & schema validation before processing",
      "Circuit breakers and fallback chains on third-party APIs",
      "Idempotent task designs across asynchronous queues",
    ],
  },
  {
    number: "02",
    title: "Treat AI as a Production Component, Not a Gimmick",
    tagline: "LLMs are probabilistic computing modules that require deterministic software engineering around them.",
    body: "Embedding an LLM into an application without guardrails creates operational chaos. Production AI systems require structured JSON output contracts, context gating, output verification steps, latency budgets, and continuous cost tracking.",
    practices: [
      "Enforced JSON schema guarantees via constrained generation",
      "Decoupled asynchronous worker queues for non-blocking UI",
      "Continuous token accounting and cache-first query strategies",
    ],
  },
  {
    number: "03",
    title: "Keep Systems Observable and Debuggable",
    tagline: "If an outage or latency regression occurs, the system should tell you why within minutes.",
    body: "Silent failures and generic error logs erode engineering confidence. Every request and background task must produce structured logs, correlation IDs, and actionable telemetry so production anomalies can be diagnosed and resolved rapidly.",
    practices: [
      "Correlated request and worker transaction tracing",
      "Structured JSON application logging",
      "Clear alerts prioritized on user impact rather than noise",
    ],
  },
  {
    number: "04",
    title: "Favor Simplicity Before Unnecessary Complexity",
    tagline: "The fastest code to maintain is the code you never had to write.",
    body: "Architectural bloat is often mistaken for engineering maturity. Before adopting distributed microservices or exotic caching layers, push relational database capabilities, clean modular boundaries, and proven patterns as far as they cleanly go.",
    practices: [
      "Normalized relational schemas with proper indexes first",
      "Pragmatic monoliths until domain separation demands isolation",
      "Minimal external dependencies with low maintenance tax",
    ],
  },
  {
    number: "05",
    title: "Design APIs and Data Models Deliberately",
    tagline: "Frontends and worker scripts change rapidly; data contracts and schemas persist forever.",
    body: "Carefully modeled database schemas and predictable REST contracts prevent countless hours of downstream refactoring. Strong typing, explicit migrations, and thoughtful validation at the boundary preserve system integrity over years of iteration.",
    practices: [
      "Strict RESTful resource conventions and semantic HTTP status codes",
      "Exhaustive database constraints, foreign keys, and indexes",
      "Versioned API contracts with backwards compatibility",
    ],
  },
  {
    number: "06",
    title: "Automate Repetitive Operational Friction",
    tagline: "Manual deployments and ad-hoc database patches are bugs waiting to happen.",
    body: "Human error thrives in manual verification steps. CI/CD test automation, containerized local development parity, and reproducible migration scripts ensure consistent releases and preserve cognitive bandwidth for substantive problem-solving.",
    practices: [
      "Dockerized container parity between development and staging",
      "Automated linting, formatting, and unit tests on pull requests",
      "Single-command or git-push-triggered deployment pipelines",
    ],
  },
];
