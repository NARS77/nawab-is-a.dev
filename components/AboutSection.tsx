import React from "react";
import { profile } from "@/data/profile";
import { experiences, certifications } from "@/data/experience";
import { Award, GraduationCap, Briefcase, Users, FileText, ArrowDownToLine } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 border-b border-border-subtle bg-bg-subtle/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-accent mb-2">
              04 / Background & Verified Experience
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-content-primary">
              Engineering journey & track record.
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-content-muted max-w-md">
            Verified academic milestones, production internships, and hands-on system building.
          </p>
        </div>

        {/* Narrative & Snapshot Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-content-secondary leading-relaxed">
            <p>
              I am a software engineer focused on building full-stack applications and integrating
              AI capabilities into practical, resilient workflows. My approach centers on
              understanding complete systems—from database indexing and relational constraints in
              PostgreSQL, through strictly typed RESTful APIs in Django and Node.js, to responsive,
              accessible user interfaces in React.
            </p>
            <p>
              During my Software Engineer Internship at{" "}
              <strong className="text-content-primary font-medium">Cruxx AI</strong> in New Delhi, I
              developed production full-stack features using React, Django, Python, and PostgreSQL. I
              built authenticated REST endpoints, resolved frontend bottlenecks, and worked within
              active sprint cycles and Git version control.
            </p>
            <p>
              Beyond internship experience, I learn most effectively by designing and shipping complete
              systems: architecting <strong className="text-content-primary font-medium">RigSmith</strong>{" "}
              with real-time multi-dimensional hardware validation and interactive SVG blueprints, and{" "}
              <strong className="text-content-primary font-medium">SentimentSphere</strong> with
              dual-layer lexical and LLM feedback processing.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Nawab_Shaikh_Resume.pdf"
                className="inline-flex items-center gap-2 text-xs font-mono font-medium text-content-primary bg-bg-elevated border border-border-medium hover:border-accent px-4 py-2 rounded transition-colors"
              >
                <ArrowDownToLine className="w-3.5 h-3.5 text-accent" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href="/cruxx_experience_letter.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-content-secondary hover:text-content-primary border border-border-subtle hover:border-border-strong px-4 py-2 rounded transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-accent" />
                <span>View Cruxx AI Experience Letter</span>
              </a>
            </div>
          </div>

          {/* Quick Stats & Credentials Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded border border-border-subtle bg-bg-card space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-accent">
                Core Profile Telemetry
              </div>

              <div className="space-y-3 text-xs font-mono">
                <div className="flex justify-between py-1.5 border-b border-border-subtle">
                  <span className="text-content-muted">Full Name</span>
                  <span className="text-content-primary font-medium">{profile.fullName}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-border-subtle">
                  <span className="text-content-muted">Location</span>
                  <span className="text-content-primary">Mira Road, Maharashtra, India</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-border-subtle">
                  <span className="text-content-muted">Relocation</span>
                  <span className="text-accent-signal">Available / Relocation Ready</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-border-subtle">
                  <span className="text-content-muted">Primary Focus</span>
                  <span className="text-content-primary">Full-Stack & AI Integration</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-content-muted">GitHub</span>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    @NARS77
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          <div className="text-xs font-mono uppercase tracking-widest text-content-muted">
            Detailed Timeline & Responsibilities
          </div>

          <div className="space-y-6">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="p-6 rounded border border-border-subtle bg-bg-card space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-border-subtle">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-base font-semibold text-content-primary">
                        {exp.role}
                      </span>
                      <span className="text-xs font-mono text-content-muted">•</span>
                      <span className="text-xs font-mono text-content-secondary">
                        {exp.organization}
                      </span>
                    </div>
                    <div className="text-xs text-content-muted mt-0.5">{exp.location}</div>
                  </div>

                  <div className="text-xs font-mono text-accent bg-bg-subtle px-2.5 py-1 rounded border border-border-subtle w-fit">
                    {exp.period}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-content-secondary">{exp.summary}</p>

                <ul className="space-y-2">
                  {exp.contributions.map((c, i) => (
                    <li
                      key={i}
                      className="text-xs text-content-secondary flex items-start gap-2.5"
                    >
                      <span className="text-accent font-mono text-xs mt-0.5">›</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>

                {exp.techStack && (
                  <div className="pt-3 border-t border-border-subtle flex flex-wrap gap-1.5">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-bg border border-border-subtle text-content-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="mt-14 pt-10 border-t border-border-subtle">
          <div className="text-xs font-mono uppercase tracking-widest text-content-muted mb-6">
            Verified Certifications & Formal Training
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="p-4 rounded border border-border-subtle bg-bg-card flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono text-accent mb-1">{cert.year}</div>
                  <div className="text-sm font-semibold text-content-primary mb-1">
                    {cert.title}
                  </div>
                  <div className="text-xs text-content-muted mb-3">{cert.issuer}</div>
                </div>
                <div className="text-[11px] font-mono text-content-secondary pt-2 border-t border-border-subtle">
                  {cert.focus}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
