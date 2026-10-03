import { educationList } from "@/data/education";
import { GraduationCap, MapPin, BookOpen, Check } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 uppercase tracking-widest mb-3">
            <span className="h-px w-6 bg-zinc-600" />
            <span>07 / Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Education &amp; Foundations
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            Formal training in Computer Science and Engineering principles, algorithms,
            and systems architecture at PVPIT, Sangli.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationList.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-white/10 bg-zinc-900/30 p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 pb-6 border-b border-white/[0.08] mb-6">
                  <div>
                    <span className="inline-block text-[11px] font-mono px-2 py-0.5 rounded border border-white/10 bg-zinc-800 text-zinc-300 mb-2">
                      Formal Degree
                    </span>
                    <h3 className="text-xl font-bold text-white font-mono leading-snug">
                      {item.degree}
                    </h3>
                  </div>
                  <div className="p-2.5 rounded border border-white/10 bg-zinc-800 text-zinc-200 shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm font-medium text-zinc-200 font-mono">
                    <BookOpen className="w-4 h-4 text-zinc-400" />
                    <span>{item.institution}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <div className="p-4 rounded-lg border border-white/[0.06] bg-zinc-950/60 mb-6">
                  <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1">
                    Academic Focus
                  </div>
                  <p className="text-xs text-zinc-300 font-mono">
                    {item.focus}
                  </p>
                </div>
              </div>

              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-2">
                  Key Disciplines:
                </span>
                <ul className="space-y-1.5">
                  {item.highlights.map((highlight, hIdx) => (
                    <li
                      key={hIdx}
                      className="text-xs text-zinc-400 flex items-start gap-2"
                    >
                      <Check className="w-3 h-3 text-zinc-300 mt-0.5 shrink-0" />
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
