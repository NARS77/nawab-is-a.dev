export interface ProfileData {
  name: string;
  headline: string;
  subheadline: string;
  location: string;
  timezone: string;
  totalExperience: string;
  availability: string;
  email: string;
  linkedin: string;
  github: string;
  resumeUrl: string;
  targetRoles: string[];
  coreTech: string[];
}

export const profileData: ProfileData = {
  name: "Nawab Shaikh",
  headline: "Full-Stack & AI-Integration Engineer",
  subheadline:
    "Engineering robust web architectures and production-grade LLM systems. ~5 years building, deploying, and scaling distributed backend pipelines, asynchronous AI inference workflows, and high-performance full-stack applications.",
  location: "Mumbai, India",
  timezone: "IST (UTC +5:30)",
  totalExperience: "~5 Years",
  availability: "Open to AI & Full-Stack Engineering roles",
  email: "nawabshaikh0518@gmail.com",
  linkedin: "https://www.linkedin.com/in/nawabshaikh18",
  github: "https://github.com/nawabshaikh-dev", // Clearly marked placeholder
  resumeUrl: "/resume.pdf", // Placeholder
  targetRoles: [
    "AI Engineer",
    "AI Integration Engineer",
    "MLOps Engineer",
    "Full-Stack Engineer",
    "Backend Engineer",
    "Software Engineer",
  ],
  coreTech: [
    "Python",
    "Django / DRF",
    "FastAPI",
    "OpenAI & Gemini APIs",
    "Celery & Redis",
    "PostgreSQL",
    "Docker",
    "AWS",
    "React",
    "TypeScript",
  ],
};
