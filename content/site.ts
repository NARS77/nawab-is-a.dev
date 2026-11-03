export interface SwissProject {
  slug: string;
  number: string;
  name: string;
  oneLiner: string;
  problem: string;
  whatIBuilt: string;
  stack: string[];
  status: string;
  links: {
    github?: string;
    demo?: string;
  };
  theme: {
    bg: string; // Hex color
    text: string; // Text color on this bg
    rule: string; // Border color on this bg
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
    email: string;
    phone: string;
    github: string;
    linkedin: string;
    resumeUrl: string;
    aboutText: string;
    placeholders: {
      key: string;
      description: string;
      status: string;
    }[];
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
    role: "Full-Stack Developer | AI Integration Engineer",
    oneLineHeadline: "Full-stack developer building AI-integrated products and workflow automation.",
    location: "India (Open to relocation)",
    email: "nawabshaikh1014@gmail.com",
    phone: "+91 7620436307",
    github: "https://github.com/NARS77",
    linkedin: "https://linkedin.com/in/nars77",
    resumeUrl: "/resume.pdf",
    // Strictly under 100 words (75 words), factual, zero banned words:
    aboutText:
      "I am a full-stack developer based in India, open to relocation. I build end-to-end web applications, design REST APIs, and integrate AI into production workflows. Previously, I worked as a software engineer intern at Cruxx AI, shipping features across React, Django, Python, and PostgreSQL. I hold a B.Tech in Computer Science Engineering (Artificial Intelligence & Data Science) from PVPIT Sangli. I focus on concrete systems: reliable database schemas, clear API contracts, and practical LLM pipelines.",
    placeholders: [
      {
        key: "SENTIMENTSPHERE_LIVE_DEMO",
        description: "Public live demo URL for SentimentSphere",
        status: "Local / GitHub code verified; no public live demo URL in records.",
      },
      {
        key: "ECHOTRACE_SLACK_GMAIL",
        description: "Slack bot and Gmail webhook integration",
        status: "Marked explicitly as 'Planned' in EchoTrace per prompt instructions.",
      },
      {
        key: "SKILLSPHERE_DEPLOYMENT",
        description: "Production URL for SkillSphere LMS",
        status: "Marked as 'Architecture & Foundation' in development; repository code verified.",
      },
      {
        key: "AVAILABILITY_FLAG",
        description: "Official real-time hiring availability indicator",
        status: "Omitted from hero UI until explicitly confirmed by Nawab.",
      },
    ],
  },
  projects: [
    {
      slug: "sentimentsphere",
      number: "01",
      name: "SENTIMENTSPHERE",
      oneLiner: "Customer feedback intelligence platform using dual-layer NLP for sentiment scoring and thematic clustering.",
      problem: "Reading thousands of user reviews manually is slow, while running every feedback row through external LLMs causes latency bottlenecks and high API bills.",
      whatIBuilt: "Architected the Django REST Framework backend, engineered the dual-layer NLP pipeline (TextBlob for local lexical scoring + OpenAI API for thematic extraction), dynamic prompt templates, and Highcharts dashboards.",
      stack: ["Python 3.12", "Django 5.2", "Django REST Framework", "PostgreSQL (Intended)", "OpenAI API", "TextBlob", "Pandas", "Highcharts"],
      status: "Shipped & Active",
      links: {
        github: "https://github.com/NARS77/SentimentSphere",
      },
      theme: {
        bg: "#D82818", // Signal Red
        text: "#FFFFFF",
        rule: "#FFFFFF",
        badgeBg: "#FFFFFF",
        badgeText: "#D82818",
      },
      diagram: {
        input: {
          title: "RAW FEEDBACK",
          detail: "CSV datasets & App Store review payloads",
        },
        processing: {
          title: "DUAL-LAYER NLP",
          detail: "TextBlob (local polarity) → OpenAI API (thematic categorization)",
          subdetail: "AnalysisRun state machine & dynamic prompt models",
        },
        output: {
          title: "METRICS & DASHBOARD",
          detail: "NPS ratings, sentiment distribution & Highcharts trends",
        },
      },
    },
    {
      slug: "rigsmith",
      number: "02",
      name: "RIGSMITH",
      oneLiner: "PC builder platform that evaluates physical compatibility, electrical clearances, and transient wattage margins.",
      problem: "Custom PC building involves mechanical dimensions (GPU length vs front radiator) and electrical constraints (CPU socket pinout, transient power spikes) that cause build failure.",
      whatIBuilt: "Designed the normalized PostgreSQL hardware schema, built the rule-based compatibility engine in Django, created the interactive SVG chassis schematic in React, and containerized the system with Docker and Nginx.",
      stack: ["React 18", "Vite 6", "Python", "Django 5.x", "Django REST Framework", "PostgreSQL", "Docker", "SVG"],
      status: "Shipped & Active",
      links: {
        github: "https://github.com/NARS77/RigSmith",
        demo: "https://rig-smith.vercel.app/",
      },
      theme: {
        bg: "#0C38DF", // Cobalt Blue
        text: "#FFFFFF",
        rule: "#FFFFFF",
        badgeBg: "#FFFFFF",
        badgeText: "#0C38DF",
      },
      diagram: {
        input: {
          title: "COMPONENT SELECTION",
          detail: "Interactive SVG chassis & hardware slot choices",
        },
        processing: {
          title: "COMPATIBILITY MATRIX",
          detail: "Socket, clearance, RAM clock & PCIe lane validation",
          subdetail: "Dynamic GPU transient power spike margin calculation",
        },
        output: {
          title: "VERIFIED SYSTEM BUILD",
          detail: "PostgreSQL build records & automated price drop mailers",
        },
      },
    },
    {
      slug: "echotrace",
      number: "03",
      name: "ECHOTRACE",
      oneLiner: "Meeting memory app that transcribes conversations and extracts structured decisions and action items.",
      problem: "Technical decisions and assigned tasks from recurring engineering meetings are lost in unorganized notes or forgotten audio recordings.",
      whatIBuilt: "Designed the audio segmentation pipeline and built prompt chains with strict JSON schema constraints for structured database storage.",
      stack: ["Python", "OpenAI Whisper API", "GPT-4o", "Next.js", "PostgreSQL"],
      status: "Prototype / Active Dev",
      plannedFeatures: [
        "Slack bot webhook integration for automated task alerts (Planned)",
        "Gmail briefing digest dispatch (Planned)",
        "Live WebSocket audio transcription (Planned)",
      ],
      links: {
        github: "https://github.com/NARS77",
      },
      theme: {
        bg: "#D6EE10", // Acid Yellow
        text: "#0A0A0A",
        rule: "#0A0A0A",
        badgeBg: "#0A0A0A",
        badgeText: "#D6EE10",
      },
      diagram: {
        input: {
          title: "MEETING RECORDING",
          detail: "Segmented raw audio files via async upload endpoint",
        },
        processing: {
          title: "WHISPER STT + LLM",
          detail: "Timestamped dialogue transcription → JSON schema prompt chains",
          subdetail: "Strict extraction of decision logs and assigned owners",
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
      oneLiner: "Learning management system with role-based authorization and modular curriculum progress tracking.",
      problem: "Learning platforms need strict authorization boundaries between instructors and students to prevent unassigned material tampering or grade manipulation.",
      whatIBuilt: "Modeled the hierarchical course catalog schema (Courses → Modules → Lessons) in PostgreSQL, built DRF permission classes (`IsInstructorOrReadOnly`), and built enrollment tracking views.",
      stack: ["Python", "Django", "Django REST Framework", "PostgreSQL", "JavaScript", "Bootstrap 5"],
      status: "Architecture & Foundation (In Development)",
      links: {
        github: "https://github.com/NARS77/SkillsSphere",
      },
      theme: {
        bg: "#0F1115", // Off-Black
        text: "#F4F4F4",
        rule: "#333333",
        badgeBg: "#FFFFFF",
        badgeText: "#0F1115",
      },
      diagram: {
        input: {
          title: "USER ENROLLMENT",
          detail: "Student and instructor authenticated sessions",
        },
        processing: {
          title: "RBAC & SERIALIZERS",
          detail: "DRF custom permission classes enforce endpoint boundaries",
          subdetail: "Hierarchical foreign-key cascade validation in PostgreSQL",
        },
        output: {
          title: "PROGRESS TRACKING",
          detail: "Atomic lesson completion records & instructor dashboards",
        },
      },
    },
  ],
  stack: [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3 / Tailwind CSS", "Bootstrap", "Interactive SVG"],
    },
    {
      category: "Backend",
      items: ["Python 3.12", "Django 5.x", "Django REST Framework", "Node.js", "Express.js", "REST APIs", "Nginx", "Gunicorn"],
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MySQL", "MongoDB", "psycopg2-binary"],
    },
    {
      category: "AI & Automation",
      items: ["OpenAI API", "OpenAI Whisper", "Prompt Chaining", "Structured JSON Output", "TextBlob NLP", "Data Ingestion Pipelines"],
    },
    {
      category: "Tools & Infrastructure",
      items: ["Docker", "Docker Compose", "Git / GitHub", "Linux / Bash", "Postman", "Vercel"],
    },
  ],
  contact: {
    email: "nawabshaikh1014@gmail.com",
    github: "https://github.com/NARS77",
    linkedin: "https://linkedin.com/in/nars77",
    resumeUrl: "/resume.pdf",
  },
};
