import React from "react";
import SwissHero from "@/components/SwissHero";
import SwissProjects from "@/components/SwissProjects";
import SwissStack from "@/components/SwissStack";
import SwissAbout from "@/components/SwissAbout";
import SwissContact from "@/components/SwissContact";

export default function HomePage() {
  return (
    <main id="main-content" className="w-full swiss-load-entry">
      <SwissHero />
      <SwissProjects />
      <SwissStack />
      <SwissAbout />
      <SwissContact />
    </main>
  );
}
