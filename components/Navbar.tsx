"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { profile } from "@/data/profile";
import { ArrowDownToLine, Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Work", href: "#work" },
    { label: "Approach", href: "#approach" },
    { label: "Stack", href: "#stack" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-[#0B0C0E]/90 backdrop-blur-md border-b border-border-subtle py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand / Wordmark */}
        <Link
          href="/"
          className="group flex items-center gap-3 text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-accent"
        >
          <div className="w-8 h-8 rounded bg-bg-elevated border border-border-medium flex items-center justify-center font-mono text-sm font-semibold text-content-primary group-hover:border-accent transition-colors">
            NS
          </div>
          <div>
            <div className="text-sm font-semibold tracking-tight text-content-primary group-hover:text-accent transition-colors">
              {profile.name}
            </div>
            <div className="text-[11px] font-mono text-content-muted hidden sm:block">
              Full-Stack & AI Systems
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-1 text-xs font-mono text-content-secondary"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 rounded hover:text-content-primary hover:bg-bg-subtle transition-colors focus-visible:ring-1 focus-visible:ring-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action: Status & Resume */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="flex items-center gap-2 text-[11px] font-mono text-content-muted border border-border-subtle bg-bg-subtle px-2.5 py-1 rounded">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-signal animate-pulse" />
            <span>Available for hire</span>
          </div>

          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Nawab_Shaikh_Resume.pdf"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-content-primary bg-bg-elevated border border-border-medium hover:border-accent px-3 py-1.5 rounded transition-colors focus-visible:ring-1 focus-visible:ring-accent"
          >
            <ArrowDownToLine className="w-3.5 h-3.5 text-accent" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          className="md:hidden p-2 rounded text-content-secondary hover:text-content-primary hover:bg-bg-subtle border border-border-subtle"
        >
          {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B0C0E] border-b border-border-subtle px-4 py-4 space-y-3">
          <div className="flex flex-col space-y-2 font-mono text-xs text-content-secondary">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-2 py-1.5 rounded hover:text-content-primary hover:bg-bg-subtle transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-border-subtle flex flex-col gap-2.5">
            <div className="flex items-center gap-2 text-[11px] font-mono text-content-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-signal" />
              <span>Available for engineering roles</span>
            </div>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Nawab_Shaikh_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 text-xs font-mono font-medium text-content-primary bg-bg-elevated border border-border-medium py-2 rounded"
            >
              <ArrowDownToLine className="w-3.5 h-3.5 text-accent" />
              <span>Download Resume (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
