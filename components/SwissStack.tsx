import React from "react";
import { siteContent } from "@/content/site";
import InteractiveVariableHeading from "@/components/InteractiveVariableHeading";

export default function SwissStack() {
  return (
    <section
      id="stack"
      className="w-full bg-[#F4F1EA] text-[#1B1B1A] border-b-4 border-[#1B1B1A] px-4 sm:px-8 py-12 sm:py-16"
    >
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 border-b-2 border-[#1B1B1A] pb-4 mb-8">
        <InteractiveVariableHeading
          text="Tools I use"
          as="h2"
          radius={220}
          className="text-3xl sm:text-5xl font-bold uppercase tracking-tighter"
        />
        <p className="text-sm opacity-70">Shown in the projects above.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {siteContent.stack.map((group, index) => (
          <div
            key={group.category}
            className="border-t-2 border-[#1B1B1A] pt-3"
          >
            <h3 className="text-xs font-bold uppercase tracking-widest opacity-60">
              0{index + 1} / {group.category}
            </h3>
            <p className="mt-3 text-lg sm:text-xl font-bold tracking-tight leading-snug">
              {group.items.join(" · ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
