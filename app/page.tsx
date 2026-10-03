"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import AiMlOpsSection from "@/components/AiMlOpsSection";
import Philosophy from "@/components/Philosophy";
import SkillsMatrix from "@/components/SkillsMatrix";
import Education from "@/components/Education";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ResumeModal";

export default function Home() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#09090b] text-[#fafafa] flex flex-col font-sans selection:bg-zinc-800 selection:text-white">
      {/* Sticky Top Navigation */}
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenResume={() => setResumeModalOpen(true)} />
        <About />
        <Experience />
        <Projects />
        <AiMlOpsSection />
        <Philosophy />
        <SkillsMatrix />
        <Education />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Recruiter CV / Resume Preview Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
