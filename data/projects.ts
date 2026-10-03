export interface ProjectCaseStudy {
  id: string;
  title: string;
  badge: string;
  tagline: string;
  role: string;
  problem: string;
  solution: string;
  architecture: {
    overview: string;
    flow: string[];
    keyDecisions: { title: string; rationale: string }[];
  };
  engineeringHighlights: string[];
  qualitativeOutcomes: string[];
  techStack: string[];
  links: {
    github: string;
    demo: string;
  };
}

export const projects: ProjectCaseStudy[] = [
  {
    id: "sentimentsphere",
    title: "SentimentSphere",
    badge: "AI & Data Intelligence",
    tagline: "Enterprise feedback intelligence platform with asynchronous LLM sentiment pipelines and analytics.",
    role: "Full-Stack & AI Integration Engineer",
    problem:
      "Enterprise teams receive continuous streams of customer feedback across surveys, support tickets, and reviews. Manually analyzing unstructured text is slow and inconsistent, preventing product teams from spotting critical regressions or sentiment trends in real time.",
    solution:
      "Architected an end-to-end intelligence engine that ingests bulk feedback documents (CSV/Excel/API), processes sentiment and thematic clusters asynchronously via background workers, and visualizes multi-dimensional insights through an interactive dashboard.",
    architecture: {
      overview:
        "Decoupled microservice architecture separating client-facing REST APIs from compute-intensive LLM inference queues.",
      flow: [
        "Client uploads unstructured feedback batches through Django REST Framework endpoints.",
        "Ingestion service validates schema and dispatches processing tasks into Redis message queues.",
        "Celery worker nodes consume payloads, calling LLMs with structured JSON schema constraints.",
        "Parsed sentiment scores, topic tags, and emotional polarity are committed to PostgreSQL.",
        "React frontend queries aggregated analytics with cached dashboard views and Chart.js visuals.",
      ],
      keyDecisions: [
        {
          title: "Asynchronous Queue Decoupling",
          rationale:
            "Offloaded inference to Celery workers backed by Redis, preventing HTTP timeout bottlenecks and allowing graceful rate limiting against upstream AI APIs.",
        },
        {
          title: "Enforced Structured JSON Schema",
          rationale:
            "Implemented strict prompt schemas with structured outputs, eliminating hallucinations and ensuring zero parser errors when inserting classified data into PostgreSQL.",
        },
        {
          title: "Multi-Tenant Data Isolation",
          rationale:
            "Designed organization-scoped database schemas with row-level security filters in Django REST Framework to ensure rigorous tenant data boundaries.",
        },
      ],
    },
    engineeringHighlights: [
      "Built resilient retry mechanisms with exponential backoff for handling third-party AI rate limits and transient outages.",
      "Engineered automated deduplication and token optimization routines prior to LLM submission to minimize inference overhead.",
      "Implemented role-based access control (RBAC) supporting Admin, Analyst, and Viewer permission tiers.",
    ],
    qualitativeOutcomes: [
      "Transformed manual feedback audits into automated, continuous real-time intelligence feeds.",
      "Eliminated API request timeouts through robust asynchronous queue orchestration.",
      "Provided engineering and product teams with instant visibility into emerging critical customer issues.",
    ],
    techStack: [
      "Python",
      "Django",
      "Django REST Framework",
      "OpenAI API",
      "PostgreSQL",
      "Celery",
      "Redis",
      "React",
      "JavaScript",
      "Chart.js",
      "Docker",
    ],
    links: {
      github: "https://github.com/nawabshaikh-dev/sentimentsphere-placeholder",
      demo: "https://sentimentsphere-demo.placeholder.dev",
    },
  },
  {
    id: "skillsphere",
    title: "SkillSphere",
    badge: "Full-Stack EdTech",
    tagline: "AI-enabled learning management system with contextual curriculum tutoring and progress telemetry.",
    role: "Full-Stack Engineer & AI Integration",
    problem:
      "Traditional learning management systems offer passive video and text consumption, leaving students stuck without immediate contextual guidance and instructors blind to real-time comprehension gaps.",
    solution:
      "Engineered an interactive LMS featuring structured course pathways, real-time student telemetry, and an integrated AI learning companion constrained strictly to lesson materials to provide grounded explanations and quiz generation.",
    architecture: {
      overview:
        "High-performance decoupled web system combining a modern client-side single page application with a modular Django backend and cloud storage integrations.",
      flow: [
        "Students interact with courses via a fast, responsive React + Vite application with state managed via Zustand.",
        "Authentication is secured via stateless JSON Web Tokens (JWT) with automated refresh flows.",
        "Lesson progression and quiz answers stream to Django REST Framework backend APIs.",
        "Curriculum AI queries are verified against lesson transcript embeddings before calling LLMs to guarantee grounded answers.",
        "Course media, lecture attachments, and assets are securely offloaded to AWS S3-compatible cloud storage.",
      ],
      keyDecisions: [
        {
          title: "Grounded Curriculum Context",
          rationale:
            "Scoped AI responses strictly to currently enrolled course modules, preventing off-topic drift and ensuring high pedagogical accuracy.",
        },
        {
          title: "Cache Invalidation Strategy",
          rationale:
            "Utilized React Query for server-state caching, eliminating redundant network calls across lesson transitions while keeping progress synchronized.",
        },
        {
          title: "Containerized Micro-Environments",
          rationale:
            "Packaged frontend, backend, Redis, and PostgreSQL instances into Docker Compose configurations for seamless environment parity across development and deployment.",
        },
      ],
    },
    engineeringHighlights: [
      "Developed comprehensive instructor dashboard with student completion funnels and drop-off analytics.",
      "Constructed asynchronous background jobs with Celery for weekly digest emails and aggregate student telemetry generation.",
      "Implemented fine-grained permissions ensuring student and instructor role separation across all endpoints.",
    ],
    qualitativeOutcomes: [
      "Created an interactive, self-paced learning experience with immediate contextual query resolution.",
      "Delivered reliable multi-role workflows for educators and students with zero session desynchronization.",
      "Achieved predictable, low-latency API responses by indexing high-frequency enrollment and progress queries.",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "Redis",
      "Celery",
      "JWT",
      "Docker",
      "AWS S3",
    ],
    links: {
      github: "https://github.com/nawabshaikh-dev/skillsphere-placeholder",
      demo: "https://skillsphere-demo.placeholder.dev",
    },
  },
  {
    id: "rigsmith",
    title: "RigSmith",
    badge: "Hardware Systems Engine",
    tagline: "Full-stack PC builder platform with automated multidimensional hardware compatibility validation.",
    role: "Full-Stack System Architect",
    problem:
      "Assembling custom PC hardware involves complicated multidimensional compatibility constraints—CPU socket types, memory channels, motherboard form factors, GPU physical dimensions vs. chassis clearance, and power supply wattage overheads—where a single discrepancy causes costly hardware failure.",
    solution:
      "Built a specialized hardware compatibility verification engine that evaluates component configurations against formal hardware rules in real time, visualizes component interactions, and estimates power curves.",
    architecture: {
      overview:
        "Relational constraint-checking system pairing normalized hardware component schemas with an interactive configuration interface.",
      flow: [
        "User selects or swaps components within the interactive React interface.",
        "Configuration state is evaluated client-side for immediate visual layout feedback via dynamic SVG components.",
        "Payload is submitted to Django validation endpoints executing comprehensive compatibility checks.",
        "Relational queries verify socket protocols, PCIe lanes, RAM clearance heights, and PSU thermal margins.",
        "System returns instant pass/warning/error diagnostics with specific mismatch explanations.",
      ],
      keyDecisions: [
        {
          title: "Normalized Relational Architecture",
          rationale:
            "Structured hardware specifications into strictly typed PostgreSQL schemas with foreign-key relationships to preserve physical compatibility rules.",
        },
        {
          title: "Rule-Based Constraint Pipeline",
          rationale:
            "Built a modular validation pipeline where each component type implements a clean evaluation interface, simplifying future hardware generation additions.",
        },
        {
          title: "Interactive SVG Component Mapping",
          rationale:
            "Rendered visual motherboard diagrams and slot statuses directly via responsive SVG elements, giving users an immediate visual feel of hardware placement.",
        },
      ],
    },
    engineeringHighlights: [
      "Engineered dynamic wattage calculation algorithms factoring in peak transient power spikes for modern GPUs.",
      "Implemented comprehensive faceted search and indexing for hardware catalog exploration.",
      "Containerized development environment with Docker for reproducible component data seed migrations.",
    ],
    qualitativeOutcomes: [
      "Prevented incompatible component combinations before purchase through rigorous multi-attribute checks.",
      "Provided an intuitive, visually guided hardware configuration workflow for both novice and enthusiast builders.",
      "Maintained sub-100ms response times on complex multi-part validation queries.",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "Docker",
      "SVG",
      "Python",
    ],
    links: {
      github: "https://github.com/nawabshaikh-dev/rigsmith-placeholder",
      demo: "https://rigsmith-demo.placeholder.dev",
    },
  },
];
