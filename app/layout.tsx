import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import { siteContent } from "@/content/site";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#F4F1EA",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-rho-peach-95.vercel.app"),
  title: `${siteContent.author.name} — ${siteContent.author.role}`,
  description: siteContent.author.oneLineHeadline,
  keywords: [
    "Nawab Shaikh",
    "Full-Stack Developer",
    "AI Integration Engineer",
    "Python",
    "Django",
    "React",
    "Next.js",
    "PostgreSQL",
    "OpenAI API",
    "RigSmith",
    "SentimentSphere",
  ],
  authors: [{ name: siteContent.author.name, url: siteContent.author.github }],
  creator: siteContent.author.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-rho-peach-95.vercel.app",
    title: `${siteContent.author.name} — ${siteContent.author.role}`,
    description: siteContent.author.oneLineHeadline,
    siteName: `${siteContent.author.name}`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteContent.author.name} — ${siteContent.author.role}`,
    description: siteContent.author.oneLineHeadline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable}`}>
      <body className="bg-[#F4F1EA] text-[#1B1B1A] antialiased min-h-screen font-grotesk">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#1B1B1A] focus:text-[#F4F1EA] focus:text-sm focus:font-bold"
        >
          Skip to main content
        </a>
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
