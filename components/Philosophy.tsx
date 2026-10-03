import { engineeringPrinciples } from "@/data/philosophy";
import { Check, ShieldCheck } from "lucide-react";

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 uppercase tracking-widest mb-3">
            <span className="h-px w-6 bg-zinc-600" />
            <span>05 / Engineering Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Battle-Tested Architectural Principles
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            Principles honed through 5 years of shipping web features, managing database transactions,
            debugging distributed worker queues, and integrating generative AI into production products.
          </p>
        </div>

        {/* 6 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {engineeringPrinciples.map((principle) => (
            <div
              key={principle.number}
              className="rounded-xl border border-white/10 bg-zinc-900/30 p-7 flex flex-col justify-between hover:border-white/20 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-4">
                  <span className="font-mono text-xs text-zinc-400 font-semibold tracking-wider">
                    PRINCIPLE {principle.number}
                  </span>
                  <ShieldCheck className="w-4 h-4 text-zinc-400" />
                </div>

                <h3 className="text-base font-bold font-mono text-white mb-2 leading-snug">
                  {principle.title}
                </h3>

                <p className="text-xs font-mono text-zinc-400 italic mb-4 leading-normal">
                  &ldquo;{principle.tagline}&rdquo;
                </p>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6 font-normal">
                  {principle.body}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.08]">
                <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-2">
                  In Practice:
                </div>
                <ul className="space-y-1.5">
                  {principle.practices.map((practice, idx) => (
                    <li
                      key={idx}
                      className="text-xs text-zinc-400 flex items-start gap-2"
                    >
                      <Check className="w-3 h-3 text-zinc-300 mt-0.5 shrink-0" />
                      <span>{practice}</span>
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
