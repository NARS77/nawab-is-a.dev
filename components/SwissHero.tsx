import { siteContent } from "@/content/site";
import { LiveStatusDisplay } from "@/lib/status";
import LiveStatusHeroLine from "@/components/LiveStatusHeroLine";

export default function SwissHero({ status }: { status?: LiveStatusDisplay | null }) {
  return <header className="page-shell">
    <nav aria-label="Primary navigation" className="flex flex-wrap items-center justify-between gap-6 border-b border-current/20 py-7 text-sm">
      <a href="#main-content" className="font-bold">Nawab Shaikh<span className="ml-3 font-normal text-muted">/ India</span></a>
      <div className="flex flex-wrap gap-6"><a href="#work">Work</a><a href="#about">About</a><a href="/notes">Notes</a><a href="#contact">Contact</a><a href={siteContent.author.resumeUrl} target="_blank" rel="noopener noreferrer">Résumé ↗</a></div>
    </nav>
    <div className="grid gap-10 py-16 sm:py-24 lg:grid-cols-[1fr_220px] lg:items-end">
      <div><p className="eyebrow mb-6">Programmer & full-stack developer</p><h1 className="max-w-4xl text-5xl sm:text-7xl lg:text-8xl font-medium tracking-[-0.055em] leading-[1.04]">I build apps, APIs,<br className="hidden sm:block" /> and the pieces<br className="hidden sm:block" /> that connect them.</h1><p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">I’m Nawab. I look for a problem, then work through the interface, server, and data behind a possible fix.</p><a href="#work" className="action-link mt-8">Explore my work ↓</a></div>
      <div className="border-l border-current/20 pl-5 text-sm leading-relaxed"><LiveStatusHeroLine initialStatus={status} /><p className="mt-3 text-muted">Currently building at <a href="#about" className="underline underline-offset-4">Meatndoor</a>.</p></div>
    </div>
  </header>;
}
