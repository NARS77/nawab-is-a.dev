import { siteContent } from "./site";

export interface StatusItem {
  text: string;
  updatedAt: number; // epoch ms
  expiresAt?: number; // epoch ms for native expiration
}

// Generate project building presets
export const projectStatusPresets: string[] = siteContent.projects.map((p) => {
  // Format as e.g. Building SentimentSphere
  const formattedName = p.slug === "sentimentsphere" ? "SentimentSphere" :
    p.slug === "rigsmith" ? "RigSmith" :
    p.slug === "echotrace" ? "EchoTrace" :
    p.slug === "skillsphere" ? "SkillSphere" : p.name;
  return `Building ${formattedName}`;
});

export const generalStatusPresets: string[] = [
  "Scrolling reels",
  "Eating lunch",
  "Coffee break",
  "At the gym",
  "Learning something new",
  "Sleeping",
  "Offline",
];

export const allStatusPresets: string[] = [
  ...projectStatusPresets,
  ...generalStatusPresets,
];
