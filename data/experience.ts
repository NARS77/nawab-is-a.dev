export interface CareerStage {
  id: string;
  stageNumber: number;
  title: string;
  category: string;
  duration: string;
  periodLabel: string;
  progression: string;
  highlight: string;
  summary: string;
  responsibilities: string[];
  keyChallenges: string[];
  technologies: string[];
  scope: string;
}

export const careerStages: CareerStage[] = [
  {
    id: "ai-engineer",
    stageNumber: 4,
    title: "AI Engineer / AI Integration + MLOps",
    category: "Current Focus",
    duration: "1.5 Years — Present",
    periodLabel: "Present",
    progression: "Web Platforms → Distributed AI Systems & Production MLOps",
    highlight: "Integrating LLMs, asynchronous inference pipelines, and production MLOps workflows.",
    summary:
      "Architecting and shipping production AI systems that bridge enterprise web backends with generative AI foundations. Specializing in asynchronous LLM pipeline orchestration with Celery/Redis, multi-model routing (OpenAI & Gemini), inference cost/latency optimization, containerized deployments on AWS, and end-to-end model observability.",
    responsibilities: [
      "Designed and integrated production LLM inference workflows using OpenAI and Google Gemini APIs.",
      "Engineered decoupled, asynchronous AI processing queues using Celery and Redis to handle bursty inference requests without blocking web clients.",
      "Developed high-throughput ML/AI APIs leveraging Django REST Framework and FastAPI with strict schema validation.",
      "Containerized AI microservices with multi-stage Docker builds and deployed scalable workloads across AWS infrastructure.",
      "Engineered automated model evaluation pipelines and output verification gates to ensure response accuracy and guard against hallucinations.",
      "Implemented comprehensive observability, structured logging, latency tracing, and graceful failure fallbacks for all third-party AI endpoints.",
      "Optimized inference token budgets, caching strategies, and prompt architectures to reduce operating costs and latency.",
    ],
    keyChallenges: [
      "Handling non-deterministic LLM response latencies without degrading user experience via streaming responses and background polling.",
      "Eliminating single-point API dependency by building intelligent model fallback chains across Gemini and OpenAI providers.",
      "Designing idempotent background worker tasks for large-scale data ingestion and automated classification.",
    ],
    technologies: [
      "Python",
      "OpenAI API",
      "Gemini API",
      "Celery",
      "Redis",
      "FastAPI",
      "Django / DRF",
      "Docker",
      "AWS",
      "PostgreSQL",
      "Prompt Engineering",
      "Model Evaluation",
    ],
    scope: "End-to-End AI System Architecture & Production Deployment",
  },
  {
    id: "software-engineer-web",
    stageNumber: 3,
    title: "Software Engineer — Web",
    category: "Full-Stack Core",
    duration: "2 Years",
    periodLabel: "24 Months",
    progression: "Feature Development → System Ownership → Production Engineering",
    highlight: "Core full-stack web engineering, distributed background jobs, and cloud infrastructure.",
    summary:
      "Owned end-to-end development of scalable web applications from database schema design to responsive React frontends. Established solid foundations in distributed task queues with Celery and Redis, relational data modeling in PostgreSQL, containerization with Docker, and CI/CD deployment pipelines on AWS.",
    responsibilities: [
      "Designed and developed scalable full-stack web architectures utilizing Django REST Framework and React.",
      "Constructed normalized relational schemas, complex queries, and index strategies in PostgreSQL.",
      "Architected background task processing and deferred workloads using Celery backed by Redis brokers.",
      "Implemented robust JWT-based authentication, role-based access control (RBAC), and API rate limiting.",
      "Containerized backend and frontend environments with Docker Compose and orchestrated deployment workflows.",
      "Configured cloud infrastructure on AWS, including compute instances, object storage, and automated CI/CD pipelines.",
      "Conducted system-design reviews, authored comprehensive API documentation, and mentored junior engineers on coding standards.",
    ],
    keyChallenges: [
      "Refactoring monolith database queries to eliminate N+1 bottlenecks and optimize transaction isolation levels.",
      "Establishing fault-tolerant task retry logic and dead-letter queues for long-running batch data operations.",
    ],
    technologies: [
      "Python",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "Celery",
      "Redis",
      "React",
      "TypeScript",
      "Docker",
      "AWS",
      "Git / GitHub Actions",
      "Nginx",
    ],
    scope: "Full-Stack Ownership & Scalable Cloud Infrastructure",
  },
  {
    id: "swe-intern",
    stageNumber: 2,
    title: "Software Engineering Intern",
    category: "Growth & Ownership",
    duration: "9 Months",
    periodLabel: "9 Months",
    progression: "Contributor → Independent Feature Ownership",
    highlight: "Transitioned to building production-facing APIs and modular React interfaces.",
    summary:
      "Transitioned from assisted tasks to independently owning production-facing web features. Built modular React interfaces, integrated RESTful endpoints in Django, structured PostgreSQL queries, and authored automated unit tests within established CI/CD pipelines.",
    responsibilities: [
      "Developed production-facing user interface features and reusable component libraries with React and TypeScript.",
      "Created structured REST API endpoints using Django and connected relational data models in PostgreSQL.",
      "Implemented token-based authentication and secure user authorization middleware.",
      "Authored automated unit and integration tests to increase test coverage across critical application flows.",
      "Identified, reproduced, and patched production defects reported through issue tracking systems.",
      "Collaborated actively in sprint planning, backlog grooming, and peer code reviews.",
    ],
    keyChallenges: [
      "Mastering state management across nested React components and harmonizing UI state with backend API contracts.",
      "Navigating asynchronous JavaScript execution and handling edge cases in network failure states.",
    ],
    technologies: [
      "React",
      "JavaScript",
      "TypeScript",
      "Python",
      "Django",
      "PostgreSQL",
      "REST APIs",
      "Git",
      "Jest",
    ],
    scope: "Independent Feature Delivery & API Integration",
  },
  {
    id: "swe-apprentice",
    stageNumber: 1,
    title: "Software Engineering Apprentice",
    category: "Foundations",
    duration: "9 Months",
    periodLabel: "9 Months",
    progression: "Learning → Contribution → Engineering Fundamentals",
    highlight: "Mastering software engineering fundamentals, debugging, and team development workflows.",
    summary:
      "Immersed in production engineering disciplines, code review etiquette, and enterprise version control. Built internal utilities, resolved UI bugs, consumed external REST APIs, and developed foundational proficiency in relational SQL and clean code principles.",
    responsibilities: [
      "Assisted senior engineers in implementing frontend UI components using semantic HTML, CSS, and modern JavaScript.",
      "Integrated and consumed third-party RESTful APIs, validating and parsing payload data safely.",
      "Diagnosed issues through browser developer tools, server log inspection, and reproducible test cases.",
      "Authored clean SQL queries for data verification and maintenance scripts.",
      "Followed strict Git workflows including feature branch isolation, rebasing, and descriptive commit conventions.",
      "Participated in daily standups, retrospective discussions, and Agile sprint rituals.",
    ],
    keyChallenges: [
      "Bridging theoretical academic computer science concepts with commercial codebases and legacy architectures.",
      "Developing disciplined debugging methodologies across cross-browser environments.",
    ],
    technologies: [
      "JavaScript",
      "HTML5 / CSS3",
      "REST APIs",
      "SQL",
      "Git / GitHub",
      "Agile / Scrum",
      "Linux Fundamentals",
    ],
    scope: "Engineering Fundamentals, Team Workflows & Clean Code",
  },
];
