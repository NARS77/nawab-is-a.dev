import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import EngineeringApproach from "@/components/EngineeringApproach";
import TechnicalStack from "@/components/TechnicalStack";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-bg text-content-primary selection:bg-accent/20">
      <Navbar />
      <main id="main-content">
        <Hero />
        <Projects />
        <EngineeringApproach />
        <TechnicalStack />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
