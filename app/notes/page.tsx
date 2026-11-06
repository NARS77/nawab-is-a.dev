import type { Metadata } from "next";
import Link from "next/link";
import { buildNotes } from "@/content/projectNotes";
export const metadata: Metadata = { title: "Build notes — Nawab Shaikh", description: "Code decisions, fixes, and limitations from my personal projects." };
export default function NotesPage() {
  return <main id="main-content" className="max-w-5xl mx-auto px-4 sm:px-8 py-10 sm:py-16">
    <Link href="/" className="font-bold text-sm underline underline-offset-4">← Back to portfolio</Link>
    <header className="border-b-4 border-current py-8 mb-10"><p className="text-xs uppercase tracking-widest font-bold">From the projects</p><h1 className="text-5xl sm:text-7xl font-bold tracking-tighter mt-3">Build notes</h1><p className="mt-5 text-xl max-w-2xl">Small records of what the code does, what went wrong, and what changed. These notes cover personal projects and this portfolio.</p></header>
    <nav aria-label="Build notes index" className="mb-12"><ul className="space-y-3">{buildNotes.map(note => <li key={note.id}><a href={`#${note.id}`} className="underline underline-offset-4">{note.title}</a></li>)}</ul></nav>
    {buildNotes.map(note => <article id={note.id} key={note.id} className="border-t-2 border-current py-8 sm:py-12 scroll-mt-6">
      <div className="flex flex-wrap gap-3 text-xs font-bold uppercase"><time dateTime={note.date}>5 November 2026</time><span>·</span><Link href={`/projects/${note.project}`} className="underline">{note.project}</Link></div>
      <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">{note.title}</h2>
      <dl className="mt-6 space-y-5 max-w-3xl">{([["The problem", note.problem], ["What was happening", note.cause], ["What changed / how it works", note.change], ["Takeaway", note.lesson]] as const).map(([label, text]) => <div key={label}><dt className="font-bold text-sm">{label}</dt><dd className="mt-1 leading-relaxed">{text}</dd></div>)}</dl>
    </article>)}
  </main>;
}
