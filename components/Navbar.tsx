"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { profileData } from "@/data/profile";
import {
  Menu,
  X,
  FileText,
  ArrowUpRight,
  Terminal,
} from "lucide-react";
import { LinkedinIcon } from "@/components/icons";

interface NavbarProps {
  onOpenResume?: () => void;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "AI & MLOps", href: "#ai-mlops" },
    { name: "Philosophy", href: "#philosophy" },
    { name: "Stack", href: "#stack" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#09090b]/90 backdrop-blur-md border-b border-white/[0.08] py-3 shadow-lg shadow-black/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <Link
            href="/"
            className="group flex items-center gap-3 text-zinc-100 hover:text-white transition-colors focus:outline-none"
            aria-label="Nawab Shaikh - Home"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded border border-white/15 bg-zinc-900/80 font-mono text-sm font-semibold tracking-wider text-zinc-200 group-hover:border-white/30 transition-colors">
              NS
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-sm font-bold tracking-tight text-zinc-100 group-hover:text-white transition-colors">
                NAWAB SHAIKH
              </span>
              <span className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                AI & Full-Stack SWE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 font-mono text-xs text-zinc-400">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 rounded text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/40 transition-colors duration-150"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Quick Actions (Desktop) */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded border border-white/15 bg-zinc-900 text-zinc-300 hover:text-white hover:border-white/30 hover:bg-zinc-800/80 transition-all duration-150"
              title="View CV / Resume"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded border border-white/15 bg-zinc-900 text-zinc-300 hover:text-white hover:border-white/30 hover:bg-zinc-800/80 transition-all duration-150"
              title="Visit LinkedIn Profile"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-500" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-medium rounded bg-zinc-100 text-zinc-950 hover:bg-white transition-colors duration-150 shadow-sm"
            >
              <span>Get in touch</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex sm:hidden p-2 text-zinc-400 hover:text-zinc-100 rounded focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-white/[0.08] bg-[#09090b]/95 backdrop-blur-xl px-4 pt-3 pb-6 animate-fade-in">
          <nav className="flex flex-col gap-1.5 font-mono text-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded text-zinc-300 hover:text-white hover:bg-zinc-800/60 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="mt-4 pt-4 border-t border-white/[0.08] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenResume) onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono rounded border border-white/15 bg-zinc-900 text-zinc-200"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View Resume / CV</span>
            </button>

            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono rounded border border-white/15 bg-zinc-900 text-zinc-200"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn Profile</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-500" />
            </a>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono font-medium rounded bg-zinc-100 text-zinc-950"
            >
              <span>Get in touch</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
