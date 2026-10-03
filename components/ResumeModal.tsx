"use client";

import { useEffect } from "react";
import { profileData } from "@/data/profile";
import { careerStages } from "@/data/experience";
import { educationList } from "@/data/education";
import { skillCategories } from "@/data/skills";
import { X, Download, Printer, ExternalLink, Mail, MapPin } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fade-in"
    >
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c0c0e] border border-white/20 rounded-xl shadow-2xl flex flex-col overflow-hidden">
        {/* Modal Top Action Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-zinc-900/80">
          <div className="flex items-center gap-2 font-mono text-xs text-zinc-300">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span id="resume-title" className="font-semibold text-white">
              Nawab_Shaikh_Resume.pdf
            </span>
            <span className="text-zinc-400">(Curriculum Vitae Preview)</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded border border-white/15 bg-zinc-800 text-zinc-200 hover:text-white hover:bg-zinc-700 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={() => window.print()}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded border border-white/15 bg-zinc-800 text-zinc-200 hover:text-white hover:bg-zinc-700 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg border border-white/10 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              aria-label="Close resume preview"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Resume Content */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 font-sans text-zinc-200">
          {/* Header */}
          <div className="border-b border-white/10 pb-6">
            <h1 className="text-3xl font-bold text-white tracking-tight">
              {profileData.name}
            </h1>
            <p className="font-mono text-sm text-zinc-300 mt-1 font-medium">
              {profileData.headline}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400 mt-3">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-zinc-400" />
                {profileData.location}
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-zinc-400" />
                {profileData.email}
              </span>
              <span>&bull;</span>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold mb-2">
              Professional Summary
            </h2>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Full-Stack &amp; AI-Integration Engineer with approximately 5 years of engineering experience
              architecting scalable web backends, distributed background workers, and production generative
              AI pipelines. Deep technical grounding in Python, Django REST Framework, Celery, Redis,
              PostgreSQL, Docker, and AWS, combined with hands-on expertise orchestrating foundational LLM
              capabilities via OpenAI and Google Gemini APIs.
            </p>
          </div>

          {/* Core Technical Stack */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold mb-3">
              Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              {skillCategories.slice(0, 4).map((cat, i) => (
                <div key={i} className="p-3 rounded border border-white/[0.08] bg-zinc-950/60">
                  <div className="font-semibold text-zinc-200 mb-1">{cat.title}:</div>
                  <div className="text-zinc-400">
                    {cat.skills.map((s) => s.name).join(", ")}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Progression (4 Stages) */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold mb-4">
              Career Experience (~5 Years Track)
            </h2>
            <div className="space-y-6">
              {careerStages.map((stage) => (
                <div key={stage.id} className="border-l-2 border-zinc-700 pl-4 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <h3 className="text-sm font-bold text-white font-mono">
                      {stage.title}
                    </h3>
                    <span className="text-xs font-mono text-zinc-400">
                      {stage.duration}
                    </span>
                  </div>
                  <div className="text-xs font-mono text-zinc-400 italic">
                    {stage.progression}
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {stage.summary}
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-zinc-400 pt-1">
                    {stage.responsibilities.slice(0, 3).map((r, ri) => (
                      <li key={ri}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold mb-3">
              Academic Education
            </h2>
            <div className="space-y-3">
              {educationList.map((edu, i) => (
                <div key={i} className="p-3 rounded border border-white/[0.08] bg-zinc-950/60">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-sm font-bold text-white font-mono">
                        {edu.degree}
                      </div>
                      <div className="text-xs text-zinc-400 font-mono">
                        {edu.institution} &bull; {edu.location}
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-zinc-400 mt-1">
                    Focus: {edu.focus}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Bottom Footer */}
        <div className="px-6 py-3 border-t border-white/10 bg-zinc-900/60 flex items-center justify-between text-xs font-mono text-zinc-400">
          <span>Official candidate preview</span>
          <button
            onClick={onClose}
            className="text-zinc-300 hover:text-white underline underline-offset-4"
          >
            Close preview
          </button>
        </div>
      </div>
    </div>
  );
}
