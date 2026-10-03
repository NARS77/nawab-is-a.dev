import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Nawab Shaikh — Full-Stack & AI-Integration Engineer",
  description:
    "Portfolio of Nawab Shaikh. Full-Stack & AI-Integration Engineer with ~5 years experience building production web platforms, asynchronous LLM pipelines (OpenAI & Gemini), Celery distributed queues, and AWS cloud infrastructure.",
  keywords: [
    "Nawab Shaikh",
    "AI Engineer",
    "AI Integration Engineer",
    "MLOps Engineer",
    "Full-Stack Engineer",
    "Backend Engineer",
    "Python",
    "Django",
    "FastAPI",
    "OpenAI",
    "Gemini",
    "Celery",
    "Redis",
    "PostgreSQL",
    "AWS",
    "Docker",
    "React",
    "Mumbai",
  ],
  authors: [{ name: "Nawab Shaikh", url: "https://www.linkedin.com/in/nawabshaikh18" }],
  creator: "Nawab Shaikh",
  metadataBase: new URL("https://nawabshaikh.dev"),
  openGraph: {
    title: "Nawab Shaikh — Full-Stack & AI-Integration Engineer",
    description:
      "Engineering robust web architectures and production-grade LLM systems. ~5 years building, deploying, and scaling distributed backend pipelines, asynchronous AI inference workflows, and high-performance full-stack applications.",
    type: "website",
    locale: "en_US",
    siteName: "Nawab Shaikh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nawab Shaikh — Full-Stack & AI-Integration Engineer",
    description:
      "Full-Stack & AI-Integration Engineer | Python · Django · OpenAI · Gemini · Celery · AWS · React",
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
    name: "Nawab Shaikh",
    jobTitle: "Full-Stack & AI-Integration Engineer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressCountry: "India",
    },
    sameAs: [
      "https://www.linkedin.com/in/nawabshaikh18",
      "https://github.com/nawabshaikh-dev",
    ],
    knowsAbout: [
      "AI Engineering",
      "Large Language Models (LLMs)",
      "OpenAI API",
      "Google Gemini API",
      "Python",
      "Django",
      "Django REST Framework",
      "FastAPI",
      "Celery",
      "Redis",
      "PostgreSQL",
      "Docker",
      "AWS Cloud Infrastructure",
      "React",
      "TypeScript",
      "MLOps",
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
      <body className="min-h-screen bg-[#09090b] text-[#fafafa] antialiased selection:bg-zinc-800 selection:text-white">
        {children}
      </body>
    </html>
  );
}
