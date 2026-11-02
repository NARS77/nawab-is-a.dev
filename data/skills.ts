export interface SkillGroup {
  category: string;
  description: string;
  skills: {
    name: string;
    context: string;
    projects: string[];
  }[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Backend & API Systems",
    description: "Robust server architectures, strict data contracts, and reliable authentication flows.",
    skills: [
      {
        name: "Django & Django REST Framework",
        context: "Production REST endpoints, serializer validation, viewsets, and custom permissions.",
        projects: ["RigSmith", "SentimentSphere", "Cruxx AI", "SkillSphere"],
      },
      {
        name: "Python 3.12",
        context: "Clean procedural and OOP logic, asynchronous tasks, data transformations, and scripting.",
        projects: ["RigSmith", "SentimentSphere", "EchoTrace"],
      },
      {
        name: "Node.js & Express.js",
        context: "Lightweight microservices, middleware routing, and asynchronous JSON APIs.",
        projects: ["General Full-Stack Work"],
      },
      {
        name: "Auth & Access Control",
        context: "Role-based access control (RBAC), JWT token verification, and session management.",
        projects: ["Cruxx AI", "SkillSphere", "RigSmith"],
      },
    ],
  },
  {
    category: "Frontend & Interface Engineering",
    description: "Accessible, high-performance user interfaces with zero visual gimmicks.",
    skills: [
      {
        name: "React (18 / 19)",
        context: "Component composition, hooks architecture, state synchronization, and custom UI systems.",
        projects: ["RigSmith", "Cruxx AI", "Portfolio"],
      },
      {
        name: "Next.js (App Router)",
        context: "Server components, metadata optimization, static generation, and edge-friendly routing.",
        projects: ["Portfolio", "EchoTrace"],
      },
      {
        name: "TypeScript / JavaScript",
        context: "Strict static typing, interface declarations, and type-safe API consumers.",
        projects: ["RigSmith", "Portfolio"],
      },
      {
        name: "Tailwind CSS & Modern CSS",
        context: "Utility-first design systems, responsive layouts, subtle transitions, and accessible focus states.",
        projects: ["Portfolio", "SkillSphere"],
      },
      {
        name: "Interactive SVG Visualization",
        context: "Procedural SVG rendering for hardware blueprints, dynamic state highlights, and topology graphs.",
        projects: ["RigSmith"],
      },
    ],
  },
  {
    category: "Data Integrity & Storage",
    description: "Normalized relational schemas, indexed query patterns, and referential constraints.",
    skills: [
      {
        name: "PostgreSQL & psycopg2",
        context: "Relational modeling, foreign-key cascade rules, compound indexing, and raw/ORM queries.",
        projects: ["RigSmith", "SentimentSphere", "Cruxx AI", "SkillSphere"],
      },
      {
        name: "MongoDB",
        context: "Document storage for flexible payloads and ingestion logs.",
        projects: ["Full-Stack Utilities"],
      },
      {
        name: "Query Optimization",
        context: "Eliminating N+1 queries using select_related / prefetch_related, indexing high-cardinality keys.",
        projects: ["Cruxx AI", "SentimentSphere"],
      },
    ],
  },
  {
    category: "AI & Practical LLM Integration",
    description: "Treating language models as non-deterministic compute with schema guardrails.",
    skills: [
      {
        name: "OpenAI API & Structured Outputs",
        context: "JSON schema constraints, deterministic parsing, token budget management, and backoff retries.",
        projects: ["SentimentSphere", "EchoTrace"],
      },
      {
        name: "Whisper Speech-to-Text",
        context: "Audio chunking, transcription pipelines, and timestamped speech segmentation.",
        projects: ["EchoTrace"],
      },
      {
        name: "Prompt Architecture & Templating",
        context: "Dynamic variable interpolation ({feedback}), role system design, and few-shot calibration.",
        projects: ["SentimentSphere"],
      },
      {
        name: "Lexical & Tabular NLP",
        context: "TextBlob lexical sentiment scoring, Pandas batch cleaning, tokenization, and CSV transformation.",
        projects: ["SentimentSphere"],
      },
    ],
  },
  {
    category: "DevOps & Infrastructure",
    description: "Predictable development environments and clean deployment configurations.",
    skills: [
      {
        name: "Docker & Docker Compose",
        context: "Multi-container orchestration for frontend, backend, and PostgreSQL environments.",
        projects: ["RigSmith"],
      },
      {
        name: "Git & GitHub Workflows",
        context: "Branching workflows, atomic commits, pull requests, and peer reviews.",
        projects: ["All Projects"],
      },
      {
        name: "Nginx & Gunicorn",
        context: "Reverse proxying, static asset delivery via WhiteNoise, and WSGI concurrency.",
        projects: ["RigSmith", "SentimentSphere"],
      },
      {
        name: "Linux & CLI Tooling",
        context: "Bash scripting, server environment configuration, process inspection, and SSH.",
        projects: ["System Infrastructure"],
      },
    ],
  },
];
