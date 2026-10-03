export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; emphasis?: boolean }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "AI Integration & Inference",
    description: "Orchestrating foundational LLMs into resilient, cost-effective production systems.",
    skills: [
      { name: "OpenAI API", emphasis: true },
      { name: "Google Gemini API", emphasis: true },
      { name: "LLM Pipeline Orchestration", emphasis: true },
      { name: "Prompt Engineering & Guardrails", emphasis: true },
      { name: "Structured JSON Output Constraints" },
      { name: "Model Evaluation Workflows" },
      { name: "Inference Latency & Token Optimization" },
      { name: "Multi-Model Fallback Chains" },
    ],
  },
  {
    title: "Backend & Distributed Systems",
    description: "Scalable server architectures, asynchronous message brokers, and background queues.",
    skills: [
      { name: "Python", emphasis: true },
      { name: "Django & Django REST Framework", emphasis: true },
      { name: "FastAPI", emphasis: true },
      { name: "Celery Task Queues", emphasis: true },
      { name: "Redis Message Broker", emphasis: true },
      { name: "RESTful API Architecture" },
      { name: "JWT & Role-Based Access Control" },
      { name: "Idempotent Worker Task Design" },
    ],
  },
  {
    title: "Cloud, MLOps & DevOps",
    description: "Production packaging, cloud hosting, automated delivery, and runtime reliability.",
    skills: [
      { name: "Docker Containerization", emphasis: true },
      { name: "AWS (EC2, S3, RDS)", emphasis: true },
      { name: "CI/CD Deployment Pipelines", emphasis: true },
      { name: "Linux Server Administration" },
      { name: "Nginx Reverse Proxy" },
      { name: "Production Logging & Monitoring" },
      { name: "Failure Handling & Circuit Breakers" },
    ],
  },
  {
    title: "Data & Storage Systems",
    description: "Relational modeling, high-concurrency caching, and query optimization.",
    skills: [
      { name: "PostgreSQL", emphasis: true },
      { name: "SQL (Query Optimization, Indexing)", emphasis: true },
      { name: "Redis Caching Strategies" },
      { name: "Relational Schema Normalization" },
      { name: "Database Migrations & Integrity" },
      { name: "SQLite" },
    ],
  },
  {
    title: "Frontend & Interface Engineering",
    description: "Modular, performant, and accessible user interfaces built on modern JavaScript runtimes.",
    skills: [
      { name: "React", emphasis: true },
      { name: "TypeScript", emphasis: true },
      { name: "JavaScript (ESNext)", emphasis: true },
      { name: "Tailwind CSS", emphasis: true },
      { name: "Responsive UI Development" },
      { name: "State Management" },
      { name: "HTML5 Semantic Architecture" },
    ],
  },
  {
    title: "Engineering Practices",
    description: "Disciplined software craft delivering measurable value and long-term maintainability.",
    skills: [
      { name: "System Design & Architecture", emphasis: true },
      { name: "Code Review & Standards" },
      { name: "Automated Testing & QA" },
      { name: "Agile / Scrum Methodologies" },
      { name: "Technical Documentation" },
      { name: "Git-Based Version Control" },
    ],
  },
];
