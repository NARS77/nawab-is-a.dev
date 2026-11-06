import React from "react";
import Currently from "@/components/Currently";
import SwissHero from "@/components/SwissHero";
import SwissProjects from "@/components/SwissProjects";
import SwissStack from "@/components/SwissStack";
import SwissAbout from "@/components/SwissAbout";
import SwissContact from "@/components/SwissContact";
import { getLiveStatus } from "@/lib/status";

// The public site reads the status server-side and revalidates on update (at most every 60s)
export const revalidate = 60;

export default async function HomePage() {
  const liveStatus = await getLiveStatus();

  return (
    <main id="main-content" className="w-full swiss-load-entry">
      <SwissHero status={liveStatus} />
      <Currently />
      <SwissAbout />
      <SwissProjects />
      <SwissStack />
      <SwissContact />
    </main>
  );
}
