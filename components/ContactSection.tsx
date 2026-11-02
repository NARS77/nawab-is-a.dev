"use client";

import React, { useState } from "react";
import { profile } from "@/data/profile";
import {
  Mail,
  Copy,
  Check,
  Phone,
  ArrowDownToLine,
  Send,
  MessageSquare,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Inquiry from ${formData.name || "Engineering Recruiter"}`,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setSuccessMessage(data.message || "Your message has been received.");
        setSent(true);
      } else {
        throw new Error(data.error || "Submission error");
      }
    } catch {
      // Graceful fallback to direct mailto
      const subject = encodeURIComponent(
        `Portfolio Inquiry from ${formData.name || "Engineering Recruiter"}`
      );
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setSuccessMessage(
        "Direct email client triggered. You can also email directly at " + profile.email
      );
      setSent(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-b border-border-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-accent mb-2">
              05 / Dispatch & Contact
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-content-primary">
              Let&apos;s build something together.
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-content-muted max-w-md">
            Open to full-time engineering roles, relocation, and high-impact software projects.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Direct Channels Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded border border-border-subtle bg-bg-card space-y-6">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-accent mb-1.5">
                  Direct Inquiries
                </div>
                <p className="text-xs sm:text-sm text-content-secondary leading-relaxed">
                  I typically respond within 24 hours. For urgent opportunities, reach out directly
                  via email or phone.
                </p>
              </div>

              {/* Email with 1-Click Copy */}
              <div className="p-3.5 rounded bg-bg-subtle border border-border-subtle flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <Mail className="w-4 h-4 text-accent shrink-0" />
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-xs sm:text-sm font-mono text-content-primary hover:text-accent truncate"
                  >
                    {profile.email}
                  </a>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  className="p-1.5 rounded hover:bg-bg-card text-content-secondary hover:text-content-primary border border-border-subtle shrink-0 transition-colors"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-accent-signal" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Phone Channel */}
              <div className="p-3.5 rounded bg-bg-subtle border border-border-subtle flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a
                  href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                  className="text-xs sm:text-sm font-mono text-content-primary hover:text-accent"
                >
                  {profile.phone}
                </a>
              </div>

              {/* Verified Profile Links */}
              <div className="pt-4 border-t border-border-subtle space-y-3 font-mono text-xs">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded hover:bg-bg-subtle text-content-secondary hover:text-content-primary transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <GithubIcon className="w-4 h-4" />
                    <span>github.com/NARS77</span>
                  </span>
                  <span className="text-content-muted">›</span>
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded hover:bg-bg-subtle text-content-secondary hover:text-content-primary transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <LinkedinIcon className="w-4 h-4" />
                    <span>linkedin.com/in/nars77</span>
                  </span>
                  <span className="text-content-muted">›</span>
                </a>

                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Nawab_Shaikh_Resume.pdf"
                  className="flex items-center justify-between p-2.5 rounded hover:bg-bg-subtle text-content-secondary hover:text-content-primary transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <ArrowDownToLine className="w-4 h-4 text-accent" />
                    <span>Verified Resume (PDF)</span>
                  </span>
                  <span className="text-content-muted">›</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded border border-border-subtle bg-bg-card">
              <div className="flex items-center gap-2 text-xs font-mono text-accent mb-1.5">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Direct Message Dispatch</span>
              </div>
              <h3 className="text-lg font-semibold text-content-primary mb-6">
                Send a quick project briefing or interview invitation
              </h3>

              {sent ? (
                <div className="p-6 rounded bg-bg-subtle border border-accent-signal/40 text-center space-y-3">
                  <div className="w-10 h-10 rounded-full bg-accent-signal/10 border border-accent-signal/30 text-accent-signal mx-auto flex items-center justify-center">
                    <Check className="w-5 h-5" />
                  </div>
                  <div className="text-sm font-semibold text-content-primary">
                    Message Dispatched
                  </div>
                  <p className="text-xs text-content-secondary max-w-sm mx-auto">
                    {successMessage || (
                      <>
                        Your message has been processed for{" "}
                        <span className="text-content-primary font-mono">{profile.email}</span>.
                      </>
                    )}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSent(false);
                      setFormData({ name: "", email: "", message: "" });
                    }}
                    className="text-xs font-mono text-accent hover:underline pt-2"
                  >
                    Send another dispatch
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-mono text-content-muted mb-1.5"
                      >
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Miller"
                        className="w-full px-3.5 py-2.5 rounded bg-bg border border-border-subtle text-content-primary text-xs sm:text-sm placeholder:text-content-dim focus:outline-none focus:border-accent"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-mono text-content-muted mb-1.5"
                      >
                        Your Email <span className="text-accent">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-3.5 py-2.5 rounded bg-bg border border-border-subtle text-content-primary text-xs sm:text-sm placeholder:text-content-dim focus:outline-none focus:border-accent"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-mono text-content-muted mb-1.5"
                    >
                      Project Scope or Role Details <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Nawab, we are looking for a software engineer to build..."
                      className="w-full px-3.5 py-2.5 rounded bg-bg border border-border-subtle text-content-primary text-xs sm:text-sm placeholder:text-content-dim focus:outline-none focus:border-accent resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-content-muted">
                      Direct delivery to nawabshaikh1014@gmail.com
                    </span>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-medium text-bg bg-content-primary hover:bg-white px-5 py-2.5 rounded transition-colors focus-visible:ring-2 focus-visible:ring-accent disabled:opacity-50"
                    >
                      <span>{submitting ? "Sending..." : "Send Message"}</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
