import { skillCategories } from "@/data/skills";
import { Terminal, Check, Star } from "lucide-react";

export default function SkillsMatrix() {
  return (
    <section id="stack" className="py-24 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 uppercase tracking-widest mb-3">
            <span className="h-px w-6 bg-zinc-600" />
            <span>06 / Technical Competency Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Curated Technical Stack
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            Technologies vetted and deployed in production environments over ~5 years.
            Prioritized around AI integration, high-concurrency backend services, and cloud delivery.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-white/10 bg-zinc-900/30 p-6 flex flex-col justify-between"
            >
              <div>
                <div className="pb-4 border-b border-white/[0.08] mb-4">
                  <h3 className="text-base font-bold font-mono text-white mb-1">
                    {category.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded border transition-colors ${
                        skill.emphasis
                          ? "border-white/25 bg-zinc-800 text-white font-medium"
                          : "border-white/[0.08] bg-zinc-950 text-zinc-300"
                      }`}
                    >
                      {skill.emphasis && (
                        <span className="h-1 w-1 rounded-full bg-zinc-200" />
                      )}
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span>{category.skills.length} core competencies</span>
                <Terminal className="w-3.5 h-3.5 text-zinc-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
