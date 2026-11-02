export interface Profile {
  name: string;
  fullName: string;
  role: string;
  location: string;
  relocation: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  headline: string;
  summary: string;
  availability: {
    status: string;
    description: string;
  };
  education: {
    degree: string;
    field: string;
    institution: string;
    year: string;
    grade: string;
  }[];
  leadership: {
    role: string;
    organization: string;
    year: string;
    highlights: string[];
  }[];
}

export const profile: Profile = {
  name: "Nawab Shaikh",
  fullName: "Nawab Rahim Shaikh",
  role: "Full-Stack Developer | AI Integration Engineer",
  location: "Mira Road, Maharashtra, India",
  relocation: "Open to relocation & remote engineering roles",
  email: "nawabshaikh1014@gmail.com",
  phone: "+91 7620436307",
  github: "https://github.com/NARS77",
  linkedin: "https://linkedin.com/in/nars77",
  resumeUrl: "/resume.pdf",
  headline: "Software that solves real problems.",
  summary:
    "I build full-stack products, integrate AI into useful workflows, and turn complex requirements into maintainable software. Experienced across React, Django, Python, PostgreSQL, and LLM APIs.",
  availability: {
    status: "Available for Hire",
    description: "Open to Full-Stack & AI Integration Engineering roles",
  },
  education: [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science Engineering (Artificial Intelligence & Data Science)",
      institution: "Padmabhooshan Vasantraodada Patil Institute of Technology (PVPIT), Sangli",
      year: "2025",
      grade: "CGPA: 7.5 / 10",
    },
    {
      degree: "Diploma in Computer Science Engineering",
      field: "Computer Science & Engineering",
      institution: "Padmabhooshan Vasantraodada Patil Institute of Technology (PVPIT), Sangli",
      year: "2022",
      grade: "84.0%",
    },
  ],
  leadership: [
    {
      role: "Event Manager & Treasurer",
      organization: "NIRMIT 2024 (Inter-College Engineering Festival)",
      year: "2024",
      highlights: [
        "Organized and managed a multi-department engineering symposium hosting participants from 20+ colleges.",
        "Coordinated schedules and logistical pipelines across 9 engineering departments.",
        "Managed budgeting, financial accounting, and resource allocation to ensure zero deficit execution.",
      ],
    },
  ],
};
