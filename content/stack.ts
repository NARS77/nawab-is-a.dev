export interface StackProjectRef {
  slug: string;
  name: string;
}

export interface StackSkill {
  name: string;
  brandColor: string; // Color when hovered
  projects: StackProjectRef[]; // Empty if not in featured project yet
  iconKey: string;
}

export interface StackCategory {
  category: string;
  skills: StackSkill[];
}

export const stackData: StackCategory[] = [
  {
    category: "Frontend",
    skills: [
      {
        name: "React",
        brandColor: "#087ea4",
        projects: [{ slug: "rigsmith", name: "RigSmith" }],
        iconKey: "react",
      },
      {
        name: "Next.js",
        brandColor: "#000000",
        projects: [{ slug: "echotrace", name: "EchoTrace" }],
        iconKey: "nextjs",
      },
      {
        name: "TypeScript",
        brandColor: "#3178C6",
        projects: [{ slug: "echotrace", name: "EchoTrace" }],
        iconKey: "typescript",
      },
      {
        name: "JavaScript (ES6+)",
        brandColor: "#D4AC0D",
        projects: [
          { slug: "rigsmith", name: "RigSmith" },
          { slug: "skillsphere", name: "SkillSphere" },
        ],
        iconKey: "javascript",
      },
      {
        name: "HTML5",
        brandColor: "#E34F26",
        projects: [
          { slug: "sentimentsphere", name: "SentimentSphere" },
          { slug: "rigsmith", name: "RigSmith" },
          { slug: "skillsphere", name: "SkillSphere" },
        ],
        iconKey: "html5",
      },
      {
        name: "CSS3 / Tailwind CSS",
        brandColor: "#06B6D4",
        projects: [{ slug: "echotrace", name: "EchoTrace" }],
        iconKey: "tailwind",
      },
      {
        name: "Bootstrap",
        brandColor: "#7952B3",
        projects: [{ slug: "skillsphere", name: "SkillSphere" }],
        iconKey: "bootstrap",
      },
      {
        name: "Interactive SVG",
        brandColor: "#F59E0B",
        projects: [{ slug: "rigsmith", name: "RigSmith" }],
        iconKey: "svg",
      },
    ],
  },
  {
    category: "Backend",
    skills: [
      {
        name: "Python 3.12",
        brandColor: "#3776AB",
        projects: [
          { slug: "sentimentsphere", name: "SentimentSphere" },
          { slug: "rigsmith", name: "RigSmith" },
          { slug: "echotrace", name: "EchoTrace" },
          { slug: "skillsphere", name: "SkillSphere" },
        ],
        iconKey: "python",
      },
      {
        name: "Django 5.x",
        brandColor: "#092E20",
        projects: [
          { slug: "sentimentsphere", name: "SentimentSphere" },
          { slug: "rigsmith", name: "RigSmith" },
          { slug: "skillsphere", name: "SkillSphere" },
        ],
        iconKey: "django",
      },
      {
        name: "Django REST Framework",
        brandColor: "#A30000",
        projects: [
          { slug: "sentimentsphere", name: "SentimentSphere" },
          { slug: "rigsmith", name: "RigSmith" },
          { slug: "skillsphere", name: "SkillSphere" },
        ],
        iconKey: "drf",
      },
      {
        name: "Node.js",
        brandColor: "#5FA04E",
        projects: [], // Not in a featured project yet
        iconKey: "nodejs",
      },
      {
        name: "Express.js",
        brandColor: "#4A4A4A",
        projects: [], // Not in a featured project yet
        iconKey: "express",
      },
      {
        name: "REST APIs",
        brandColor: "#00599C",
        projects: [
          { slug: "sentimentsphere", name: "SentimentSphere" },
          { slug: "rigsmith", name: "RigSmith" },
          { slug: "skillsphere", name: "SkillSphere" },
        ],
        iconKey: "api",
      },
      {
        name: "Nginx",
        brandColor: "#009639",
        projects: [{ slug: "rigsmith", name: "RigSmith" }],
        iconKey: "nginx",
      },
      {
        name: "Gunicorn",
        brandColor: "#499848",
        projects: [{ slug: "rigsmith", name: "RigSmith" }],
        iconKey: "gunicorn",
      },
    ],
  },
  {
    category: "Databases",
    skills: [
      {
        name: "PostgreSQL",
        brandColor: "#4169E1",
        projects: [
          { slug: "rigsmith", name: "RigSmith" },
          { slug: "skillsphere", name: "SkillSphere" },
          { slug: "echotrace", name: "EchoTrace" },
        ],
        iconKey: "postgresql",
      },
      {
        name: "MySQL",
        brandColor: "#00758F",
        projects: [], // Not in a featured project yet
        iconKey: "mysql",
      },
      {
        name: "MongoDB",
        brandColor: "#47A248",
        projects: [], // Not in a featured project yet
        iconKey: "mongodb",
      },
      {
        name: "psycopg2-binary",
        brandColor: "#336791",
        projects: [
          { slug: "rigsmith", name: "RigSmith" },
          { slug: "skillsphere", name: "SkillSphere" },
        ],
        iconKey: "psycopg2",
      },
    ],
  },
  {
    category: "AI & Automation",
    skills: [
      {
        name: "OpenAI API",
        brandColor: "#10A37F",
        projects: [{ slug: "sentimentsphere", name: "SentimentSphere" }],
        iconKey: "openai",
      },
      {
        name: "OpenAI Whisper",
        brandColor: "#00A67E",
        projects: [{ slug: "echotrace", name: "EchoTrace" }],
        iconKey: "whisper",
      },
      {
        name: "Prompt Chaining",
        brandColor: "#8B5CF6",
        projects: [
          { slug: "sentimentsphere", name: "SentimentSphere" },
          { slug: "echotrace", name: "EchoTrace" },
        ],
        iconKey: "prompts",
      },
      {
        name: "Structured JSON Output",
        brandColor: "#D97706",
        projects: [{ slug: "echotrace", name: "EchoTrace" }],
        iconKey: "json",
      },
      {
        name: "TextBlob NLP",
        brandColor: "#2563EB",
        projects: [{ slug: "sentimentsphere", name: "SentimentSphere" }],
        iconKey: "nlp",
      },
      {
        name: "Data Ingestion Pipelines",
        brandColor: "#4F46E5",
        projects: [
          { slug: "sentimentsphere", name: "SentimentSphere" },
          { slug: "echotrace", name: "EchoTrace" },
        ],
        iconKey: "pipeline",
      },
    ],
  },
  {
    category: "Tools & Infrastructure",
    skills: [
      {
        name: "Docker",
        brandColor: "#2496ED",
        projects: [{ slug: "rigsmith", name: "RigSmith" }],
        iconKey: "docker",
      },
      {
        name: "Docker Compose",
        brandColor: "#1D63ED",
        projects: [{ slug: "rigsmith", name: "RigSmith" }],
        iconKey: "dockercompose",
      },
      {
        name: "Git / GitHub",
        brandColor: "#F05032",
        projects: [
          { slug: "sentimentsphere", name: "SentimentSphere" },
          { slug: "rigsmith", name: "RigSmith" },
          { slug: "echotrace", name: "EchoTrace" },
          { slug: "skillsphere", name: "SkillSphere" },
        ],
        iconKey: "git",
      },
      {
        name: "Linux / Bash",
        brandColor: "#1B1B1A",
        projects: [{ slug: "rigsmith", name: "RigSmith" }],
        iconKey: "linux",
      },
      {
        name: "Postman",
        brandColor: "#FF6C37",
        projects: [
          { slug: "sentimentsphere", name: "SentimentSphere" },
          { slug: "skillsphere", name: "SkillSphere" },
        ],
        iconKey: "postman",
      },
      {
        name: "Vercel",
        brandColor: "#000000",
        projects: [{ slug: "rigsmith", name: "RigSmith" }],
        iconKey: "vercel",
      },
    ],
  },
];
