export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: "Engineering Work" | "Leadership" | "Education";
  summary: string;
  contributions: string[];
  techStack?: string[];
  verificationDocument?: string;
}

export const experiences: ExperienceItem[] = [
  {
    id: "cruxx-ai",
    role: "Software Engineer Intern",
    organization: "Cruxx AI",
    location: "New Delhi, India (Hybrid)",
    period: "September 2024 – May 2025",
    type: "Engineering Work",
    summary:
      "Engineered full-stack features and API integrations across React, Django, Python, and PostgreSQL supporting production application workflows.",
    contributions: [
      "Developed full-stack application features using React, Django, Python, and PostgreSQL across frontend and backend workflows.",
      "Built and integrated REST APIs, authentication flows, and database-backed functionality to support production application features.",
      "Improved frontend responsiveness and usability by optimizing UI workflows, API integration, and client-side behavior.",
      "Collaborated with developers and stakeholders throughout feature development, debugging, testing, deployment, and Git-based version control.",
      "Contributed across the software development lifecycle, from implementation and testing through deployment and maintenance.",
    ],
    techStack: ["React", "Django", "Django REST Framework", "Python", "PostgreSQL", "Git"],
    verificationDocument: "/cruxx_experience_letter.pdf",
  },
  {
    id: "nirmit-2024",
    role: "Event Manager & Treasurer",
    organization: "NIRMIT 2024 (Inter-College Engineering Festival)",
    location: "PVPIT, Sangli, India",
    period: "2024",
    type: "Leadership",
    summary:
      "Led end-to-end event operations and financial accounting for a state-level inter-college engineering symposium.",
    contributions: [
      "Organized and managed a large-scale inter-college engineering event with participation from more than 20 colleges.",
      "Coordinated events, venue logistics, and schedules across nine distinct engineering departments.",
      "Managed budgeting, financial planning, and resource allocation to ensure smooth, zero-deficit execution.",
    ],
  },
  {
    id: "btech-degree",
    role: "Bachelor of Technology (B.Tech)",
    organization: "Padmabhooshan Vasantraodada Patil Institute of Technology (PVPIT)",
    location: "Sangli, Maharashtra, India",
    period: "Graduating 2025",
    type: "Education",
    summary:
      "Specialized in Artificial Intelligence & Data Science within Computer Science Engineering. CGPA: 7.5 / 10.",
    contributions: [
      "Rigorous coursework covering Data Structures & Algorithms, Database Management Systems, Operating Systems, Machine Learning, and Computer Networks.",
      "Conducted extensive hands-on projects combining full-stack web applications with applied machine learning and natural language processing.",
    ],
  },
  {
    id: "diploma-degree",
    role: "Diploma in Computer Science Engineering",
    organization: "Padmabhooshan Vasantraodada Patil Institute of Technology (PVPIT)",
    location: "Sangli, Maharashtra, India",
    period: "2022",
    type: "Education",
    summary:
      "Foundational computer science curriculum completed with distinction (84.0%).",
    contributions: [
      "Built early proficiency in procedural programming, object-oriented principles, database fundamentals, and software system design.",
    ],
  },
];

export const certifications = [
  {
    title: "Complete Web Development Bootcamp",
    issuer: "Udemy",
    year: "2024",
    focus: "Full-Stack Web Development, Modern Frontend, REST APIs",
  },
  {
    title: "Machine Learning with Python",
    issuer: "YHills Trainings",
    year: "2024",
    focus: "Supervised & Unsupervised Learning, Feature Engineering, Scikit-Learn",
  },
  {
    title: "Java Programming with JDBC",
    issuer: "AptTech Solutions",
    year: "2024",
    focus: "Object-Oriented Design, Database Connectivity, Relational Operations",
  },
  {
    title: "Python from Beginner to Advanced",
    issuer: "Udemy",
    year: "2023",
    focus: "Advanced Pythonic Idioms, Concurrency, Scripting & Data Parsing",
  },
];
