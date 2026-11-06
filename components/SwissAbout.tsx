import React from "react";
import { currentWork } from "@/content/current";
import InteractiveVariableHeading from "@/components/InteractiveVariableHeading";

export default function SwissAbout() {
  return (
    <section
      id="about"
      className="w-full bg-[#F4F1EA] text-[#1B1B1A] border-b-4 border-[#1B1B1A] px-4 sm:px-8 py-12 sm:py-20"
    >
      <div className="border-b-2 border-[#1B1B1A] pb-4 mb-8 sm:mb-12">
        <InteractiveVariableHeading
          text="HOW I WORK"
          as="h2"
          radius={220}
          className="text-3xl sm:text-5xl font-bold uppercase tracking-tighter"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-7">
          <p className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight max-w-2xl">
            I build the whole thing.
          </p>
          <p className="mt-5 text-lg sm:text-xl font-medium leading-relaxed max-w-2xl">
            The personal projects here are mine end to end. I start by looking for a
            problem, then build an interface, API, and data model around a
            possible fix. The project pages show those parts and link to the
            code.
          </p>
          <p className="mt-5 text-sm sm:text-base leading-relaxed max-w-2xl opacity-80">
            I am a programmer based in India. I studied Computer Science
            Engineering, with a focus on AI and Data Science, at PVPIT Sangli.
          </p>
        </div>

        <div className="lg:col-span-5 border-t-2 lg:border-t-0 lg:border-l-2 border-[#1B1B1A] pt-5 lg:pt-0 lg:pl-6 space-y-6">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest opacity-60">Current role</div>
            <h3 className="mt-2 text-lg font-bold">{currentWork.role}</h3>
            <a href={currentWork.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Meatndoor ↗</a>
            <p className="mt-2 text-xs opacity-70">{currentWork.tenure}</p>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed list-disc pl-4">
              {currentWork.contributions.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div className="border-t border-[#1B1B1A]/30 pt-5">
            <div className="text-[10px] font-bold uppercase tracking-widest opacity-60">
              Previously
            </div>
            <p className="mt-2 text-base font-bold">
              Software Engineer Intern · Cruxx AI
            </p>
            <p className="mt-1 text-sm leading-relaxed opacity-80">
              September 2024 – May 2025. Worked across React, Django, Python,
              PostgreSQL, and REST APIs.
            </p>
          </div>

          <div className="border-t border-[#1B1B1A]/30 pt-5">
            <div className="text-[10px] font-bold uppercase tracking-widest opacity-60">
              Outside the editor
            </div>
            <p className="mt-2 text-base font-bold">
              Event Manager & Treasurer · NIRMIT 2024
            </p>
            <p className="mt-1 text-sm leading-relaxed opacity-80">
              Helped run an inter-college engineering festival involving more
              than 20 colleges and nine departments.
            </p>
          </div>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-b-2 border-[#1B1B1A] pb-1 text-xs font-bold uppercase tracking-wider hover:pr-2 transition-[padding]"
          >
            More background in my résumé ↗
          </a>
        </div>
      </div>
    </section>
  );
}
