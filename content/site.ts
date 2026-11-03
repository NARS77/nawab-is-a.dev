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
    location: "India",
    relocationNote: "Open to relocation",
    email: "nawabshaikh1014@gmail.com",
    phone: "+91 7620436307",
    github: "https://github.com/NARS77",
    linkedin: "https://linkedin.com/in/nars77",
    resumeUrl: "/resume.pdf",
    // Strictly under 40 words (33 words), factual, zero banned words:
    aboutText:
      "Full-stack developer in India. Former software engineer intern at Cruxx AI. B.Tech in CSE (AI & Data Science) from PVPIT Sangli (2025). I build reliable web apps, REST APIs, and practical LLM pipelines.",
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
    ],
  },
  projects: [
    {
      slug: "sentimentsphere",
      number: "01",
      name: "SENTIMENTSPHERE",
      oneLiner: "Customer feedback intelligence platform using dual-layer NLP for sentiment scoring and thematic clustering.",
      problemLines: [
        "Manual review analysis is too slow to catch churn signals.",
        "Passing all raw reviews into LLMs causes high latency and cost.",
      ],
      whatIBuiltLines: [
        "Dual NLP pipeline: TextBlob for fast local polarity + OpenAI for clustering.",
        "Django REST Framework backend with dynamic prompt templates.",
        "Interactive Highcharts dashboard with NPS and sentiment trends.",
      ],
      stack: ["Python 3.12", "Django 5.2", "Django REST Framework", "PostgreSQL (Intended)", "OpenAI API", "TextBlob", "Pandas", "Highcharts"],
      status: "Shipped & Active",
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
      oneLiner: "PC builder platform evaluating physical clearances, socket rules, and transient wattage margins.",
      problemLines: [
        "Mismatched socket pinouts and physical clearance conflicts ruin builds.",
        "GPU transient wattage spikes trigger unexpected system shutdowns.",
      ],
      whatIBuiltLines: [
        "Rule-based compatibility engine checking electrical and physical bounds.",
        "Normalized PostgreSQL hardware schema for thousands of component specs.",
        "Interactive SVG chassis schematic with live clearance warnings.",
      ],
      stack: ["React 18", "Vite 6", "Python", "Django 5.x", "Django REST Framework", "PostgreSQL", "Docker", "SVG"],
      status: "Shipped & Active",
      links: {
        github: "https://github.com/NARS77/RigSmith",
        demo: "https://rig-smith.vercel.app/",
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
      oneLiner: "Meeting memory app transcribing conversations into structured decisions and action items.",
      problemLines: [
        "Key engineering decisions from calls get lost in raw audio files.",
        "Manual meeting notes miss action owners and deadlines.",
      ],
      whatIBuiltLines: [
        "Chunked audio processing pipeline with OpenAI Whisper transcription.",
        "GPT-4o prompt chain extracting structured JSON action items and owners.",
        "Searchable archive linking decision logs back to timestamped audio.",
      ],
      stack: ["Python", "OpenAI Whisper API", "GPT-4o", "Next.js", "PostgreSQL"],
      status: "Prototype / Active Dev",
      plannedFeatures: [
        "Slack webhook for automated task alerts (Planned)",
        "Gmail briefing digest dispatch (Planned)",
        "Live WebSocket streaming transcription (Planned)",
      ],
      links: {
        github: "https://github.com/NARS77",
      },
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
      oneLiner: "Learning management system with role-based authorization and modular progress tracking.",
      problemLines: [
        "Learning platforms need strict boundary checks between instructors and students.",
        "Uncontrolled access can lead to unassigned course edits or grade tampering.",
      ],
      whatIBuiltLines: [
        "Hierarchical course schema (Courses → Modules → Lessons) in PostgreSQL.",
        "Custom DRF permission classes enforcing strict endpoint authorization.",
        "Atomic lesson progress tracking with instructor grading dashboards.",
      ],
      stack: ["Python", "Django", "Django REST Framework", "PostgreSQL", "JavaScript", "Bootstrap 5"],
      status: "Architecture & Foundation (In Development)",
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
