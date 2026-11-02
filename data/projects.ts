export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: "Full-Stack System" | "AI Application" | "Production Experience" | "System Architecture";
  status: "Shipped & Active" | "Production Intern" | "Prototype / Active Dev" | "Architecture & Foundation";
  statusColor: "emerald" | "amber" | "sky" | "zinc";
  problem: string;
  solution: string;
  myContribution: string;
  stack: string[];
  links: {
    github?: string;
    demo?: string;
    docs?: string;
  };
  architecture: {
    overview: string;
    layers: {
      layer: string;
      technologies: string;
      role: string;
    }[];
    keyDecisions: {
      decision: string;
      rationale: string;
      tradeoff: string;
    }[];
  };
  technicalHighlights: string[];
}

export const projects: ProjectItem[] = [
  {
    id: "rigsmith",
    number: "01",
    title: "RigSmith",
    tagline: "Full-Stack PC Builder & Multidimensional Compatibility Engine",
    category: "Full-Stack System",
    status: "Shipped & Active",
    statusColor: "emerald",
    problem:
      "Assembling custom PC hardware involves complex physical and electrical constraints—CPU socket vs motherboard chipset, RAM generation (DDR4 vs DDR5) and clearance heights, GPU physical dimensions vs chassis front-radiator clearance, and PSU transient spike wattage. A single overlooked mismatch results in non-booting hardware or costly component returns.",
    solution:
      "Engineered a full-stack PC configuration platform with an interactive SVG hardware blueprint, real-time client-side compatibility feedback paired with authoritative server-side Django REST validation endpoints, automated transient wattage calculators, and background price monitoring alerts.",
    myContribution:
      "Designed the relational hardware schema, authored the multi-attribute compatibility evaluation engine in Django, built the interactive SVG chassis blueprint in React, and containerized the system with Docker and Nginx.",
    stack: [
      "React 18",
      "Django 5.x",
      "Django REST Framework",
      "PostgreSQL",
      "Docker",
      "Vite 6",
      "SVG",
      "CSS3",
    ],
    links: {
      github: "https://github.com/NARS77/RigSmith",
      demo: "https://rig-smith.vercel.app/",
    },
    architecture: {
      overview:
        "Decoupled full-stack architecture pairing a reactive client interface with a normalized relational database and rule-based constraint evaluation service.",
      layers: [
        {
          layer: "Client Interface",
          technologies: "React 18, Vite 6, Interactive SVG",
          role: "Manages live component selection, renders chassis blueprint schematics, and calculates immediate visual feedback.",
        },
        {
          layer: "API & Validation Engine",
          technologies: "Django 5.x, Django REST Framework",
          role: "Executes authoritative multi-dimensional compatibility checks (socket pins, PCIe lanes, RAM clearance, PSU overhead).",
        },
        {
          layer: "Persistence & Catalog",
          technologies: "PostgreSQL, Normalized Relational Schema",
          role: "Stores structured component specifications, hardware compatibility rules, and saved configuration states.",
        },
        {
          layer: "Infrastructure & Telemetry",
          technologies: "Docker, Nginx, Automated Mailer",
          role: "Containerized deployment with reverse proxying and background pricing alert services.",
        },
      ],
      keyDecisions: [
        {
          decision: "Normalized Relational Database vs NoSQL Catalog",
          rationale:
            "Hardware compatibility relies on strict referential integrity between sockets, form factors, and chipsets. Relational schemas in PostgreSQL prevent invalid hardware associations at the database layer.",
          tradeoff:
            "Requires careful schema migrations when introducing new hardware categories, but guarantees zero corrupted compatibility matrices.",
        },
        {
          decision: "Hybrid Client-Side Feedback with Authoritative Server Validation",
          rationale:
            "Users expect instantaneous visual feedback as they pick parts. Client state computes lightweight constraints immediately, while Django executes deep multi-part verification upon saving or checkout.",
          tradeoff:
            "Requires duplicating simple constraint logic across TypeScript and Python, but delivers zero-latency UI interactions without compromising system integrity.",
        },
        {
          decision: "Dynamic SVG Layout Blueprint over Static Images",
          rationale:
            "Static image collages fail to communicate spatial relationships. An interactive SVG blueprint allows real-time highlighting of populated slots, form factor scale, and cable routing clarity.",
          tradeoff:
            "Higher frontend rendering logic overhead, mitigated by memoized SVG sub-components.",
        },
      ],
    },
    technicalHighlights: [
      "Engineered rule-based compatibility engine checking CPU sockets, RAM clock & form factor, and chassis clearances.",
      "Built dynamic wattage headroom calculator accounting for modern GPU transient power excursions.",
      "Designed interactive SVG chassis blueprint visualizer updating dynamically with component selections.",
      "Built Django REST APIs for authentication, saved build persistence, and catalog filtering.",
      "Packaged development and production environments using Docker Compose and Nginx.",
    ],
  },
  {
    id: "sentimentsphere",
    number: "02",
    title: "SentimentSphere",
    tagline: "AI-Powered Customer Feedback Intelligence Platform",
    category: "AI Application",
    status: "Shipped & Active",
    statusColor: "emerald",
    problem:
      "Businesses collect thousands of customer reviews and feedback items across app stores (Google Play, Instagram) and customer survey sheets. Manually reviewing raw text is resource-intensive, biased, and too slow to detect critical product regressions or customer churn signals in real time.",
    solution:
      "Built an end-to-end feedback intelligence platform that ingests unstructured text batches (CSV/API), processes sentiment polarity and thematic clusters using a dual-layer NLP engine (TextBlob + OpenAI API), and presents multi-dimensional analytics through interactive Highcharts dashboards.",
    myContribution:
      "Architected the full backend in Django 5 and Django REST Framework, created the configurable OpenAI prompt template engine, implemented PostgreSQL data pipelines, and built responsive analytics dashboards.",
    stack: [
      "Python 3.12",
      "Django 5.2",
      "Django REST Framework",
      "PostgreSQL",
      "OpenAI API",
      "TextBlob",
      "Pandas",
      "Highcharts",
      "Gunicorn",
      "WhiteNoise",
    ],
    links: {
      github: "https://github.com/NARS77/SentimentSphere",
    },
    architecture: {
      overview:
        "Data pipeline architecture separating batch ingestion, lexical heuristic preprocessing, and contextual LLM inference into managed execution stages.",
      layers: [
        {
          layer: "Data Ingestion",
          technologies: "Django REST Framework, Pandas",
          role: "Validates uploaded CSV feedback datasets, parses text records, and cleans noisy encoding.",
        },
        {
          layer: "Dual-Layer NLP Pipeline",
          technologies: "TextBlob & OpenAI API (v1.12)",
          role: "Executes fast local polarity scoring with TextBlob, followed by contextual thematic categorization via OpenAI API.",
        },
        {
          layer: "Prompt Management Engine",
          technologies: "AnalysisPrompt Django Models",
          role: "Enables customizable prompt templates with variable interpolation ({feedback}) for domain-specific categorization.",
        },
        {
          layer: "Persistence & Visualization",
          technologies: "PostgreSQL, Highcharts, Chart.js",
          role: "Stores sentiment distributions, NPS ratings, and timeline series; serves responsive analytical dashboards.",
        },
      ],
      keyDecisions: [
        {
          decision: "Dual-Layer NLP (TextBlob + OpenAI) vs 100% LLM Inference",
          rationale:
            "Running every feedback row through an LLM is cost-inefficient and rate-limit sensitive. TextBlob handles baseline polarity and subjective scores locally in milliseconds, while OpenAI is reserved for nuanced thematic extraction.",
          tradeoff:
            "Adds dependency on local NLP libraries, but cuts API operational costs significantly and ensures baseline analysis works even during API network degradation.",
        },
        {
          decision: "Dynamic AnalysisPrompt Template Schema",
          rationale:
            "Different businesses require different lenses (e.g. bug tracking vs feature praise vs pricing dissatisfaction). Storing prompt templates in PostgreSQL allows dynamic prompt adjustments without code redeployments.",
          tradeoff:
            "Requires prompt sanitization to prevent accidental format injection into OpenAI payloads.",
        },
        {
          decision: "Batch State Machine (AnalysisRun) with Status Tracking",
          rationale:
            "Large feedback batches cannot be processed in a single blocking synchronous request. An explicit status model (pending -> in_progress -> completed/failed) guarantees observability and job resumability.",
          tradeoff:
            "Requires state polling or status check endpoints, but guarantees the server never times out on large uploads.",
        },
      ],
    },
    technicalHighlights: [
      "Designed dynamic prompt template model with variable interpolation for customized LLM evaluation criteria.",
      "Implemented AnalysisRun state tracking model for monitoring batch status, execution durations, and error capture.",
      "Engineered automated data ingestion pipeline using Pandas for CSV cleansing and schema normalization.",
      "Built interactive KPI dashboards displaying sentiment distribution, Net Promoter Score (NPS), and temporal trends.",
      "Integrated PostgreSQL with psycopg2-binary, setting up indexes on client, status, and timestamp columns.",
    ],
  },
  {
    id: "cruxx-ai-internship",
    number: "03",
    title: "Cruxx AI — Production Full-Stack Engineering",
    tagline: "Building Production Features & REST APIs for AI Workflows",
    category: "Production Experience",
    status: "Production Intern",
    statusColor: "sky",
    problem:
      "Delivering high-reliability AI product features requires strict API contracts, robust authentication, and resilient client-side state handling to prevent UI freezing during asynchronous inference.",
    solution:
      "Contributed across frontend and backend workflows at Cruxx AI. Developed full-stack features using React, Django, Python, and PostgreSQL, ensuring predictable response handling, optimized database queries, and clean component architecture.",
    myContribution:
      "Engineered REST API endpoints in Django REST Framework, implemented authentication and permission layers, and improved frontend responsiveness through state management and query optimization.",
    stack: [
      "React",
      "Django",
      "Python",
      "PostgreSQL",
      "Django REST Framework",
      "Git / GitHub",
      "REST APIs",
    ],
    links: {
      docs: "/cruxx_experience_letter.pdf",
    },
    architecture: {
      overview:
        "Full-stack production workflows integrating React frontend components with Django backend services and PostgreSQL persistence.",
      layers: [
        {
          layer: "Frontend Applications",
          technologies: "React, Modern JavaScript, CSS3",
          role: "Interactive user interfaces with optimistic UI updates and responsive state management.",
        },
        {
          layer: "Backend Services",
          technologies: "Django, Django REST Framework, Python",
          role: "Secure API endpoints, permission verification, and data validation layers.",
        },
        {
          layer: "Database",
          technologies: "PostgreSQL",
          role: "Relational persistence, query optimization, and transaction handling.",
        },
      ],
      keyDecisions: [
        {
          decision: "Strict API Serialization & Error Envelopes",
          rationale:
            "Standardized API error responses across endpoints ensured frontend components could gracefully catch and display field-level validation errors.",
          tradeoff:
            "Required writing explicit serializer validation methods, but completely eliminated unhandled client runtime crashes.",
        },
        {
          decision: "Optimized Database Queries via select_related / prefetch_related",
          rationale:
            "Prevented N+1 query bottlenecks in high-frequency list endpoints by eagerly loading related relational models.",
          tradeoff:
            "Slightly larger initial memory payload, but drastically reduced database connection pressure and round-trip times.",
        },
      ],
    },
    technicalHighlights: [
      "Built and deployed REST API endpoints with authentication guards and permission scoping.",
      "Improved frontend responsiveness by optimizing data fetching patterns and UI lifecycle management.",
      "Collaborated through code reviews, Git branching strategies, and feature release milestones.",
      "Verified by official Cruxx AI Software Engineer Intern experience documentation.",
    ],
  },
  {
    id: "echotrace",
    number: "04",
    title: "EchoTrace",
    tagline: "AI-Powered Meeting Memory & Structured Synthesis Application",
    category: "AI Application",
    status: "Prototype / Active Dev",
    statusColor: "amber",
    problem:
      "Engineering and product meetings generate hours of critical conversational context. Manual notes are fragmented, prone to human omissions, and often fail to produce clear actionable summaries with designated owners.",
    solution:
      "Architecting an automated meeting intelligence application that accepts recorded discussions, executes speech-to-text transcription via OpenAI Whisper, and processes conversations through prompt chains to extract decisions, action items, and topic timelines into structured records.",
    myContribution:
      "Designing the asynchronous audio processing pipeline, prompt engineering schemas for structured JSON output, and full-stack integration prototypes.",
    stack: [
      "Python",
      "OpenAI Whisper",
      "GPT-4o / LLM APIs",
      "Next.js",
      "PostgreSQL",
      "REST APIs",
    ],
    links: {
      github: "https://github.com/NARS77",
    },
    architecture: {
      overview:
        "Asynchronous transcription and intelligence pipeline designed to ingest audio files without tying up HTTP threads.",
      layers: [
        {
          layer: "Audio Ingestion",
          technologies: "Next.js & Python API",
          role: "Receives raw audio files and chunks large files into digestible segments.",
        },
        {
          layer: "Speech-to-Text Pipeline",
          technologies: "OpenAI Whisper API",
          role: "Transcribes audio into timestamped conversational transcripts.",
        },
        {
          layer: "Structured Synthesis Engine",
          technologies: "LLM Prompt Chains with JSON Schema Constraints",
          role: "Extracts decision logs, assigns action items, and formats topic summaries.",
        },
        {
          layer: "Storage & Review Interface",
          technologies: "PostgreSQL, React",
          role: "Stores searchable meeting minutes and provides an interactive review UI.",
        },
      ],
      keyDecisions: [
        {
          decision: "Decoupled Asynchronous Processing Queue",
          rationale:
            "Audio transcription is compute-intensive and duration-dependent. Decoupling the ingestion endpoint from the worker process prevents HTTP request timeouts.",
          tradeoff:
            "Requires maintaining a worker queue and job polling interface, but ensures reliable handling of long audio files.",
        },
        {
          decision: "Strict JSON Schema Output Enforcement",
          rationale:
            "Guarantees that downstream parsers receive structured objects containing summary, action_items, and decision arrays rather than unparseable conversational prose.",
          tradeoff:
            "Requires precise prompt definitions and schema validators, but eliminates hallucinated formatting.",
        },
      ],
    },
    technicalHighlights: [
      "Designed prompt architectures enforcing strict JSON schema output for zero-parser-error database commits.",
      "Engineered timestamped transcript synchronization logic for contextual audio playback.",
      "Clearly delineated prototype implementation status from future planned platform integrations.",
    ],
  },
  {
    id: "skillsphere",
    number: "05",
    title: "SkillSphere",
    tagline: "Role-Based Learning Management & Progression Platform",
    category: "System Architecture",
    status: "Architecture & Foundation",
    statusColor: "zinc",
    problem:
      "Learning platforms require clear separation of concerns between instructors, students, and administrators—enforcing granular authorization across course creation, assignment submissions, and progress metrics.",
    solution:
      "Engineered a foundational Learning Management System supporting course authoring, secure enrollment, progress tracking, and instructor dashboards with role-based access control.",
    myContribution:
      "Developed the Django REST Framework backend APIs, modeled the relational database schemas in PostgreSQL, and implemented authentication guards.",
    stack: [
      "Python",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "Bootstrap",
      "JavaScript",
    ],
    links: {
      github: "https://github.com/NARS77/SkillsSphere",
    },
    architecture: {
      overview:
        "Role-based relational system managing hierarchical course entities, user enrollments, and modular lesson states.",
      layers: [
        {
          layer: "Presentation Layer",
          technologies: "Responsive UI with JavaScript & Bootstrap",
          role: "Student learning dashboard, course catalog, and instructor management views.",
        },
        {
          layer: "Authorization & APIs",
          technologies: "Django REST Framework, Session & Token Auth",
          role: "Role-based permission guards (Admin / Instructor / Student) restricting resource access.",
        },
        {
          layer: "Relational Persistence",
          technologies: "PostgreSQL",
          role: "Models course hierarchies (Courses -> Modules -> Lessons) and student progress tracking.",
        },
      ],
      keyDecisions: [
        {
          decision: "Hierarchical Content Modeling with Relational Integrity",
          rationale:
            "Courses have natural nesting (Course -> Module -> Lesson). Relational foreign keys with cascade constraints prevent orphaned content when instructors modify curricula.",
          tradeoff:
            "Requires nested API serializers, but guarantees data consistency across enrollment updates.",
        },
        {
          decision: "Explicit Role-Based Permission Classes",
          rationale:
            "Custom DRF permission classes (`IsInstructorOrReadOnly`, `IsEnrolledStudent`) enforce security at the endpoint level rather than relying on UI-level hiding.",
          tradeoff:
            "Requires thorough authorization test coverage, but ensures security against malicious request manipulation.",
        },
      ],
    },
    technicalHighlights: [
      "Implemented custom permission classes for role-based endpoint isolation (Instructor vs Student).",
      "Modeled relational course curriculum hierarchies with PostgreSQL foreign keys.",
      "Designed student progress tracking tables updating completion states atomically.",
    ],
  },
];
