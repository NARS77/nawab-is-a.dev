import React from "react";
import { siteContent, SwissProject } from "@/content/site";
import ProjectFieldItem from "@/components/ProjectFieldItem";

export default function SwissProjects() {
  return (
    <section id="work" className="w-full">
      {siteContent.projects.filter(project => project.slug !== "portfolio").map((project: SwissProject) => (
        <ProjectFieldItem key={project.slug} project={project} />
      ))}
    </section>
  );
}
