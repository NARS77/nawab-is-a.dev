import type { Metadata, Viewport } from "next";
import { profile } from "@/data/profile";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0B0C0E",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-rho-peach-95.vercel.app"),
  title: `${profile.name} — ${profile.role}`,
  description:
    "Full-Stack Software Engineer & AI Integration Engineer. Building robust web architectures, practical LLM workflows, and maintainable software systems.",
  keywords: [
    "Nawab Shaikh",
    "Nawab Rahim Shaikh",
    "Full-Stack Developer",
    "AI Integration Engineer",
    "React",
    "Django",
    "Python",
    "PostgreSQL",
    "LLM Applications",
    "RigSmith",
    "SentimentSphere",
  ],
  authors: [{ name: profile.name, url: "https://github.com/NARS77" }],
  creator: profile.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-rho-peach-95.vercel.app",
    title: `${profile.name} — ${profile.role}`,
    description: profile.summary,
    siteName: `${profile.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description: profile.summary,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    alternateName: profile.fullName,
    jobTitle: profile.role,
    url: "https://portfolio-rho-peach-95.vercel.app",
    sameAs: [profile.github, profile.linkedin],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Padmabhooshan Vasantraodada Patil Institute of Technology (PVPIT), Sangli",
    },
    knowsAbout: [
      "Full-Stack Web Development",
      "Django",
      "React",
      "Python",
      "PostgreSQL",
      "Artificial Intelligence",
      "Large Language Models",
      "Docker",
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-bg text-content-primary antialiased selection:bg-accent/20">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-bg focus:font-mono focus:text-xs focus:rounded"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
