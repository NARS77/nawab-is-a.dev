import React from "react";
import { siteContent } from "@/content/site";

export default function SwissStack() {
  return (
    <section id="stack" className="w-full bg-white text-black border-b-4 border-black px-4 sm:px-8 py-16 sm:py-24">
      {/* Section Header */}
      <div className="flex items-baseline justify-between border-b-2 border-black pb-4 mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tighter">
          TECHNICAL STACK
        </h2>
        <span className="text-xs sm:text-sm font-bold uppercase tracking-widest opacity-60">
          INDEX / TOOLS
        </span>
      </div>

      {/* Grouped Plain List with Hard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {siteContent.stack.map((group, idx) => (
          <div
            key={group.category}
            className="border-2 border-black p-5 sm:p-6 space-y-4"
          >
            <div className="flex items-center justify-between border-b-2 border-black pb-2 text-xs font-bold uppercase tracking-widest">
              <span>0{idx + 1} / {group.category}</span>
            </div>

            <ul className="space-y-2 text-sm sm:text-base font-medium">
              {group.items.map((tech) => (
                <li key={tech} className="flex items-center gap-2">
                  <span className="text-xs font-bold opacity-40">■</span>
                  <span>{tech}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
