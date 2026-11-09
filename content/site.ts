export interface SwissProject {
  slug: string;
  number: string;
  name: string;
  oneLiner: string;
  problemLines: string[];
  whatIBuiltLines: string[];
  stack: string[];
  status: string;
  links: {
    github?: string;
    demo?: string;
  };
  theme: {
    bg: string;
    text: string;
    rule: string;
    badgeBg: string;
    badgeText: string;
  };
  diagram: {
    input: { title: string; detail: string };
    processing: { title: string; detail: string; subdetail?: string };
    output: { title: string; detail: string };
  };
  plannedFeatures?: string[];
}

export interface SwissSiteContent {
  author: {
    name: string;
    role: string;
    oneLineHeadline: string;
    location: string;
    relocationNote: string;
    email: string;
    phone: string;
    github: string;
    linkedin: string;
    resumeUrl: string;
  };
  projects: SwissProject[];
  stack: {
    category: string;
    items: string[];
  }[];
  contact: {
    email: string;
    github: string;
    linkedin: string;
    resumeUrl: string;
  };
}

export const siteContent: SwissSiteContent = {
  author: {
    name: "NAWAB SHAIKH",
    role: "Programmer · Full-stack software",
    oneLineHeadline: "I look for a problem, then try to fix it.",
    location: "India",
    relocationNote: "Open to relocation",
    email: "nawabshaikh1014@gmail.com",
    phone: "+91 7620436307",
    github: "https://github.com/NARS77",
    linkedin: "https://linkedin.com/in/nars77",
    resumeUrl: "/resume.pdf",
  },
  projects: [
    {
      slug: "sentimentsphere",
      number: "01",
      name: "SENTIMENTSPHERE",
      oneLiner: "A feedback analysis app that combines sentiment scoring with AI-assisted theme grouping.",
      problemLines: [
        "Reading feedback one review at a time makes recurring issues hard to spot.",
        "A single sentiment score does not explain what people are responding to.",
      ],
      whatIBuiltLines: [
        "Built a Django app that accepts customer feedback and analyzes it in batches.",
        "Used TextBlob for sentiment scores and the OpenAI API to group themes.",
        "Added charts to make sentiment and feedback patterns easier to inspect.",
      ],
      stack: ["Python 3.12", "Django 5.2", "Django REST Framework", "OpenAI API", "TextBlob", "Pandas", "Highcharts"],
      status: "Source on GitHub",
      links: {
        github: "https://github.com/NARS77/SentimentSphere",
      },
      theme: {
        bg: "#E8B4A6", // Soft Coral
        text: "#1B1B1A",
        rule: "#1B1B1A",
        badgeBg: "#1B1B1A",
        badgeText: "#F4F1EA",
      },
      diagram: {
        input: {
          title: "RAW FEEDBACK",
          detail: "Customer reviews and feedback",
        },
        processing: {
          title: "SENTIMENT & THEMES",
          detail: "TextBlob sentiment scoring and OpenAI theme grouping",
          subdetail: "Batch analysis in a Django application",
        },
        output: {
          title: "METRICS & DASHBOARD",
          detail: "Charts for sentiment and review patterns",
        },
      },
    },
    {
      slug: "rigsmith",
      number: "02",
      name: "RIGSMITH",
      oneLiner: "A PC builder that helps check whether selected parts fit together.",
      problemLines: [
        "Choosing PC parts means keeping track of compatibility across components.",
        "It is hard to picture a build from a list of part names alone.",
      ],
      whatIBuiltLines: [
        "Built a compatibility checker for common component constraints.",
        "Made an interactive SVG view of the selected parts inside a case.",
        "Connected the React interface to a Django API and a component catalog.",
      ],
      stack: ["React 18", "Vite 6", "Python", "Django 5.x", "Django REST Framework", "PostgreSQL", "Docker", "SVG"],
      status: "Demo + source available",
      links: {
        github: "https://github.com/NARS77/RigSmith",
        demo: "https://rigsmith20.vercel.app/",
      },
      theme: {
        bg: "#B7CCE0", // Powder Blue
        text: "#1B1B1A",
        rule: "#1B1B1A",
        badgeBg: "#1B1B1A",
        badgeText: "#F4F1EA",
      },
      diagram: {
        input: {
          title: "COMPONENT SELECTION",
          detail: "Selected PC components",
        },
        processing: {
          title: "COMPATIBILITY CHECKS",
          detail: "Checks component rules and case fit",
          subdetail: "Results update as parts are selected",
        },
        output: {
          title: "BUILD OVERVIEW",
          detail: "A parts list and visual build overview",
        },
      },
    },
    {
      slug: "echotrace",
      number: "03",
      name: "ECHOTRACE",
      oneLiner: "A prototype for turning recorded meetings into searchable notes and action items.",
      problemLines: [
        "Important decisions can be hard to find again in a long recording.",
        "A useful summary needs more than a wall of transcription text.",
      ],
      whatIBuiltLines: [
        "Explored transcribing audio with Whisper and summarizing it with an LLM.",
        "Designed the output around decisions and follow-up actions.",
        "This is still a prototype; integrations listed below are planned.",
      ],
      stack: ["Python", "OpenAI Whisper API", "GPT-4o", "Next.js", "PostgreSQL"],
      status: "Prototype / Active Dev",
      plannedFeatures: [
        "Slack webhook for automated task alerts (Planned)",
        "Gmail briefing digest dispatch (Planned)",
        "Live WebSocket streaming transcription (Planned)",
      ],
      links: {},
      theme: {
        bg: "#EAD9A0", // Butter
        text: "#1B1B1A",
        rule: "#1B1B1A",
        badgeBg: "#1B1B1A",
        badgeText: "#F4F1EA",
      },
      diagram: {
        input: {
          title: "MEETING RECORDING",
          detail: "Segmented raw audio files via async upload endpoint",
        },
        processing: {
          title: "WHISPER STT + LLM",
          detail: "Exploring transcription and summarization",
          subdetail: "Prototype workflow",
        },
        output: {
          title: "STRUCTURED MINUTES",
          detail: "Searchable meeting database (Slack & Gmail alerts Planned)",
        },
      },
    },
    {
      slug: "skillsphere",
      number: "04",
      name: "SKILLSPHERE",
      oneLiner: "A learning platform I’m building around courses, roles, and progress.",
      problemLines: [
        "Students and instructors need different access to course tools.",
        "Course progress needs to be recorded against the right learner and lesson.",
      ],
      whatIBuiltLines: [
        "Built the course, module, and lesson structure.",
        "Added role-based permissions to the Django REST API.",
        "The project is in development; the repository has the current state.",
      ],
      stack: ["Python", "Django", "Django REST Framework", "PostgreSQL", "JavaScript", "Bootstrap 5"],
      status: "In development",
      links: {
        github: "https://github.com/NARS77/SkillsSphere",
      },
      theme: {
        bg: "#B8CDB4", // Sage
        text: "#1B1B1A",
        rule: "#1B1B1A",
        badgeBg: "#1B1B1A",
        badgeText: "#F4F1EA",
      },
      diagram: {
        input: {
          title: "USER ENROLLMENT",
          detail: "Student and instructor authenticated sessions",
        },
        processing: {
          title: "ROLES & API",
          detail: "Different permissions for students and instructors",
          subdetail: "Django REST Framework",
        },
        output: {
          title: "PROGRESS TRACKING",
          detail: "Course and lesson progress",
        },
      },
    },
    {
      slug: "portfolio", number: "05", name: "THIS PORTFOLIO",
      oneLiner: "The site you’re reading: project notes, interactive examples, and a small live-status system.",
      problemLines: ["Project descriptions need enough detail to be useful.", "A live activity status should not stay visible indefinitely after updates stop."],
      whatIBuiltLines: ["Built the public pages with Next.js and TypeScript.", "Added an authenticated status editor, webhook input, and expiring storage.", "Added build notes, a socket-rule demo, and automated checks for critical behavior."],
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Upstash Redis", "Node.js tests"],
      status: "In progress", links: { github: "https://github.com/NARS77/nawab-is-a.dev" },
      theme: { bg: "#EAD9A0", text: "#1B1B1A", rule: "#1B1B1A", badgeBg: "#1B1B1A", badgeText: "#F4F1EA" },
      diagram: {
        input: { title: "STATUS UPDATE", detail: "Admin session or webhook secret" },
        processing: { title: "AUTH & STORAGE", detail: "Validate, save, and expire", subdetail: "Redis TTL or local development storage" },
        output: { title: "PUBLIC STATUS", detail: "Current activity, hidden on expiry" }
      }
    },
  ],
  stack: [
    {
      category: "Interface",
      items: ["React", "Next.js", "TypeScript"],
    },
    {
      category: "Server",
      items: ["Python", "Django", "Django REST Framework", "REST APIs"],
    },
    {
      category: "Data & AI",
      items: ["PostgreSQL", "OpenAI API", "TextBlob"],
    },
  ],
  contact: {
    email: "nawabshaikh1014@gmail.com",
    github: "https://github.com/NARS77",
    linkedin: "https://linkedin.com/in/nars77",
    resumeUrl: "/resume.pdf",
  },
};
