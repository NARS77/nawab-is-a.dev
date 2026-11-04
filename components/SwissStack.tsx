"use client";

import React, { useState } from "react";
import Link from "next/link";
import { stackData, StackSkill } from "@/content/stack";
import { StackIcon } from "@/components/StackIcons";
import InteractiveVariableHeading from "@/components/InteractiveVariableHeading";

export default function SwissStack() {
  const [activeSkillName, setActiveSkillName] = useState<string | null>(null);

  function handleToggle(skillName: string) {
    setActiveSkillName((prev) => (prev === skillName ? null : skillName));
  }

  return (
    <section
      id="stack"
      className="w-full bg-[#F4F1EA] text-[#1B1B1A] border-b-4 border-[#1B1B1A] px-4 sm:px-8 py-12 sm:py-20"
    >
      {/* Section Header */}
      <div className="border-b-2 border-[#1B1B1A] pb-4 mb-8 sm:mb-12">
        <InteractiveVariableHeading
          text="TECHNICAL STACK"
          as="h2"
          radius={220}
          className="text-3xl sm:text-5xl font-bold uppercase tracking-tighter"
        />
      </div>

      {/* Grouped Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
        {stackData.map((group, idx) => (
          <div
            key={group.category}
            className="border-2 border-[#1B1B1A] p-5 sm:p-6 bg-white/50 space-y-4"
          >
            {/* Category Title */}
            <div className="border-b-2 border-[#1B1B1A] pb-2 text-xs font-bold uppercase tracking-widest text-[#1B1B1A]">
              0{idx + 1} / {group.category}
            </div>

            {/* Skills List */}
            <ul className="space-y-2">
              {group.skills.map((skill: StackSkill) => {
                const isActive = activeSkillName === skill.name;

                return (
                  <li
                    key={skill.name}
                    className="relative"
                    onMouseEnter={() => setActiveSkillName(skill.name)}
                    onMouseLeave={() => setActiveSkillName(null)}
                  >
                    <button
                      type="button"
                      onClick={() => handleToggle(skill.name)}
                      onFocus={() => setActiveSkillName(skill.name)}
                      className="w-full border border-[#1B1B1A]/30 p-2.5 flex items-center justify-between text-left text-xs sm:text-sm font-bold tracking-tight bg-white hover:border-[#1B1B1A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1B1B1A] group transition-colors"
                      aria-expanded={isActive}
                      aria-label={`${skill.name} — view project implementations`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="w-5 h-5 flex items-center justify-center text-[#1B1B1A] group-hover:scale-110 transition-transform"
                          style={{
                            color: isActive ? skill.brandColor : undefined,
                          }}
                        >
                          <StackIcon
                            name={skill.iconKey}
                            className="w-5 h-5 transition-colors"
                            style={{
                              color: isActive ? skill.brandColor : "inherit",
                            }}
                          />
                        </span>
                        <span className="text-[#1B1B1A]">{skill.name}</span>
                      </div>

                      <span className="text-[10px] font-mono opacity-50 group-hover:opacity-100">
                        {skill.projects.length > 0
                          ? `${skill.projects.length} proj`
                          : "info"}
                      </span>
                    </button>

                    {/* Popover / Associated Projects */}
                    {isActive && (
                      <div
                        className="absolute left-0 right-0 top-full mt-1 z-30 border-2 border-[#1B1B1A] bg-[#F4F1EA] p-3 text-xs shadow-lg space-y-1.5"
                        role="tooltip"
                      >
                        <div className="font-bold uppercase tracking-wider text-[10px] opacity-70">
                          {skill.name} Project Usage:
                        </div>
                        {skill.projects.length > 0 ? (
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {skill.projects.map((proj) => (
                              <Link
                                key={proj.slug}
                                href={`/projects/${proj.slug}`}
                                className="border border-[#1B1B1A] bg-white px-2 py-1 font-bold text-[11px] text-[#1B1B1A] hover:bg-[#1B1B1A] hover:text-[#F4F1EA] transition-colors"
                              >
                                {proj.name} ↗
                              </Link>
                            ))}
                          </div>
                        ) : (
                          <div className="text-[11px] font-mono text-[#1B1B1A]/75">
                            Not in a featured project yet
                          </div>
                        )}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
