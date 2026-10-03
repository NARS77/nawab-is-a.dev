"use client";

import { useState } from "react";
import { profileData } from "@/data/profile";
import {
  Mail,
  Copy,
  Check,
  Send,
  MapPin,
  Clock,
  MessageSquare,
  AlertCircle,
  ArrowUpRight,
} from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/icons";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "AI Engineering Opportunity",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [statusMessage, setStatusMessage] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setStatusMessage(
          data.message || "Message sent successfully! Nawab will be in touch shortly."
        );
        setFormData({
          name: "",
          email: "",
          subject: "AI Engineering Opportunity",
          message: "",
        });
      } else {
        setStatus("error");
        setStatusMessage(
          data.error || "Failed to send message. Please email directly."
        );
      }
    } catch (err) {
      setStatus("error");
      setStatusMessage(
        "Network connection issue. Please use the direct mail link below."
      );
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 uppercase tracking-widest mb-3">
            <span className="h-px w-6 bg-zinc-600" />
            <span>08 / Connect &amp; Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Initiate a Conversation
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            Actively considering AI Engineering, AI Integration, MLOps, and Full-Stack Engineering roles.
            Reach out directly or send a message via the form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Direct Channels Card (Col 1-5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-xl border border-white/10 bg-zinc-900/30 p-6 sm:p-8 space-y-6">
              <h3 className="text-lg font-bold font-mono text-white">
                Direct Channels
              </h3>

              {/* Direct Email Box with 1-Click Copy */}
              <div className="p-4 rounded-lg border border-white/10 bg-zinc-950/80">
                <div className="text-xs font-mono text-zinc-400 mb-1 flex items-center justify-between">
                  <span>Primary Email</span>
                  <span className="text-[11px] text-zinc-400">Direct response</span>
                </div>
                <div className="flex items-center justify-between gap-2 mt-1">
                  <a
                    href={`mailto:${profileData.email}`}
                    className="text-sm font-mono text-zinc-200 hover:text-white transition-colors truncate"
                  >
                    {profileData.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded border border-white/10 bg-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-700 transition-colors shrink-0"
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* LinkedIn Direct Link */}
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-lg border border-white/10 bg-zinc-950/80 hover:border-white/20 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded border border-white/10 bg-zinc-900 text-zinc-200 group-hover:text-white">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-zinc-400">LinkedIn Profile</div>
                    <div className="text-sm font-mono text-zinc-200 group-hover:text-white">
                      linkedin.com/in/nawabshaikh18
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-zinc-200 transition-colors" />
              </a>

              {/* GitHub Link (Clearly marked placeholder) */}
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-lg border border-white/10 bg-zinc-950/80 hover:border-white/20 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded border border-white/10 bg-zinc-900 text-zinc-200 group-hover:text-white">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-zinc-400">
                      GitHub <span className="text-[10px] text-zinc-400">(Placeholder)</span>
                    </div>
                    <div className="text-sm font-mono text-zinc-200 group-hover:text-white">
                      github.com/nawabshaikh-dev
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-zinc-200 transition-colors" />
              </a>

              {/* Location & Timezone Card */}
              <div className="pt-4 border-t border-white/[0.08] space-y-2 text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Location: Mumbai, Maharashtra, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Timezone: Indian Standard Time (UTC +5:30)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Embedded Contact Form (Col 6-12) */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-white/10 bg-zinc-900/40 p-6 sm:p-8 backdrop-blur-sm">
              <div className="flex items-center justify-between pb-6 border-b border-white/[0.08] mb-6">
                <div>
                  <h3 className="text-lg font-bold font-mono text-white">
                    Send a Message
                  </h3>
                  <p className="text-xs text-zinc-400 font-mono mt-0.5">
                    Messages are delivered directly to Nawab Shaikh.
                  </p>
                </div>
                <MessageSquare className="w-5 h-5 text-zinc-400" />
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono text-zinc-300 mb-1.5"
                    >
                      Your Full Name <span className="text-zinc-400">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-white/10 bg-zinc-950 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all font-mono"
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono text-zinc-300 mb-1.5"
                    >
                      Your Work Email <span className="text-zinc-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="sarah@company.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-white/10 bg-zinc-950 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all font-mono"
                    />
                  </div>
                </div>

                {/* Inquiry Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-mono text-zinc-300 mb-1.5"
                  >
                    Inquiry Role / Objective
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg border border-white/10 bg-zinc-950 text-sm text-zinc-100 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all font-mono"
                  >
                    <option value="AI Engineering Opportunity">
                      AI Engineering / AI Integration Opportunity
                    </option>
                    <option value="MLOps / Inference Engineering">
                      MLOps / Inference Pipeline Role
                    </option>
                    <option value="Full-Stack / Backend Engineering">
                      Full-Stack / Python Backend Role
                    </option>
                    <option value="Technical Advisory / Consulting">
                      Technical Advisory / Consulting
                    </option>
                    <option value="General Engineering Inquiry">
                      General Engineering Inquiry
                    </option>
                  </select>
                </div>

                {/* Message field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono text-zinc-300 mb-1.5"
                  >
                    Message &amp; Role Details <span className="text-zinc-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Provide context regarding the role, engineering challenges, tech stack, or scheduling availability..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-white/10 bg-zinc-950 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all font-mono resize-y"
                  />
                </div>

                {/* Status messages */}
                {status === "success" && (
                  <div className="p-3.5 rounded-lg border border-emerald-500/30 bg-emerald-950/20 text-xs font-mono text-emerald-300 flex items-center gap-2">
                    <Check className="w-4 h-4 shrink-0 text-emerald-400" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {status === "error" && (
                  <div className="p-3.5 rounded-lg border border-red-500/30 bg-red-950/20 text-xs font-mono text-red-300 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-mono font-medium bg-zinc-100 text-zinc-950 hover:bg-white transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <div className="h-4 w-4 rounded-full border-2 border-zinc-950 border-t-transparent animate-spin" />
                      <span>Sending message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Direct Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
