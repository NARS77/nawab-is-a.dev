export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  focus: string;
  highlights: string[];
}

export const educationList: EducationItem[] = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "PVPIT, Sangli",
    location: "Sangli, Maharashtra, India",
    focus: "Advanced Computing, System Architecture & Data Structures",
    highlights: [
      "Rigorous foundations in Data Structures, Algorithms, Relational Databases, and Operating Systems.",
      "Hands-on architectural coursework in Object-Oriented Software Design and Distributed Systems.",
      "Comprehensive senior technical project emphasizing software engineering fundamentals.",
    ],
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "PVPIT, Sangli",
    location: "Sangli, Maharashtra, India",
    focus: "Applied Computer Engineering & Programming Fundamentals",
    highlights: [
      "Extensive laboratory coursework in computer hardware, networking principles, and assembly/procedural programming.",
      "Early mastery of software development life-cycle (SDLC) and systems analysis.",
      "Strong practical foundation enabling immediate transition to professional software engineering workflows.",
    ],
  },
];
