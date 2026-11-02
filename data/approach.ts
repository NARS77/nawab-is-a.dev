export interface Principle {
  number: string;
  title: string;
  summary: string;
  codeContext: string;
  details: string[];
}

export const engineeringPrinciples: Principle[] = [
  {
    number: "01",
    title: "APIs as Strict Contracts",
    summary:
      "A great API minimizes ambiguity between client and server. Loose JSON structures lead to runtime frontend crashes and fragile integrations.",
    codeContext: "Django REST Framework Serializers & Field Validation",
    details: [
      "Define strict serializer schemas with explicit field-level validators before database writes.",
      "Enforce consistent response envelopes: always distinguish operational successes from actionable validation error maps.",
      "Avoid leaking raw internal exceptions to clients; translate backend database constraints into human-actionable error keys.",
    ],
  },
  {
    number: "02",
    title: "Relational Modeling & Schema Integrity First",
    summary:
      "Data integrity belongs at the database layer, not solely in application code. Software rewritten on clean schemas succeeds; software on compromised data fails.",
    codeContext: "PostgreSQL Foreign Keys, Cascade Constraints & Indexing",
    details: [
      "In projects like RigSmith and SkillSphere, component and enrollment hierarchies use foreign keys with explicit on_delete semantics.",
      "Normalize core entities to avoid duplicate state; apply indexing selectively on high-cardinality search and status columns.",
      "Use atomic database transactions (`transaction.atomic()`) for multi-step write workflows to prevent partial records during failures.",
    ],
  },
  {
    number: "03",
    title: "Pragmatic AI: Structured, Constrained & Cost-Aware",
    summary:
      "Treat LLMs as non-deterministic external compute services that require strict input validation, prompt sandboxing, and output schema enforcement.",
    codeContext: "OpenAI JSON Mode & TextBlob Dual-Layer Pipeline in SentimentSphere",
    details: [
      "Enforce JSON Schema output mode on LLM inference calls to prevent hallucinations and unparseable prose responses.",
      "Implement dual-layer NLP: run cheap, low-latency lexical scoring (TextBlob) locally first, delegating to OpenAI only when nuanced thematic clustering is necessary.",
      "Parameterize prompts via database templates with validated variable interpolation (`{feedback}`) to allow domain tuning without redeployment.",
    ],
  },
  {
    number: "04",
    title: "Asynchronous Decoupling for Compute-Heavy Work",
    summary:
      "Never block an HTTP request thread with compute-intensive audio transcription, batch document parsing, or external scraping.",
    codeContext: "Batch State Machines & Whisper Worker Pipelines in EchoTrace & SentimentSphere",
    details: [
      "Ingestion endpoints validate payloads and immediately return a 202 Accepted response with a job tracking ID.",
      "Background worker routines handle audio chunking, external API calls, and retry logic with exponential backoff.",
      "Track job states explicitly (`pending`, `in_progress`, `completed`, `failed`) with execution duration telemetry.",
    ],
  },
  {
    number: "05",
    title: "Database Query Optimization & N+1 Prevention",
    summary:
      "Database connection exhaustion and latency spikes are almost always caused by unintentional N+1 query loops in serializer loops.",
    codeContext: "Cruxx AI & Django ORM Query Planning",
    details: [
      "Audit every high-frequency list view using `select_related` for one-to-one/foreign-key relations and `prefetch_related` for many-to-many lookups.",
      "Avoid running queries inside template loops or serializer method fields.",
      "Keep payload sizes lean by specifying explicit `.only()` or `.values()` when full model instances are not required.",
    ],
  },
  {
    number: "06",
    title: "Zero-Slop Product Engineering & Usability",
    summary:
      "Engineering quality is reflected in how an interface responds to edge cases: loading states, error boundaries, keyboard focus, and low latency.",
    codeContext: "Interactive SVG Blueprint & Accessible Web Components",
    details: [
      "Build semantic HTML with accessible keyboard navigation, visible focus indicators, and WCAG AA contrast.",
      "Avoid decorative fluff—every animation, border, and badge must communicate real state or orientation.",
      "Optimize core web vitals through server-side generation, clean asset delivery, and minimal client JavaScript.",
    ],
  },
];
