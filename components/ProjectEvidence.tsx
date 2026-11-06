import Link from "next/link";
import SocketDemo from "@/components/SocketDemo";
import { projectProgress, buildNotes, rigSource } from "@/content/projectNotes";

export default function ProjectEvidence({ slug }: { slug: string }) {
  const progress = projectProgress[slug];
  const notes = buildNotes.filter(note => note.project === slug);
  return <>
    {slug === "rigsmith" && <>
      <SocketDemo />
      <section className="space-y-5 border-t-2 border-current pt-6">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Follow the check through the code</h2>
        <ol className="grid md:grid-cols-3 gap-6 list-none">
          <li><h3 className="font-bold">01 / Choose parts</h3><p className="mt-2">The React build context holds the selected components. It compares their socket_type values and produces a message for the interface.</p><a className="inline-block mt-3 underline underline-offset-4" href={`${rigSource}/frontend/src/context/BuildContext.jsx#L452-L469`} target="_blank" rel="noopener noreferrer">Read the browser rule ↗</a></li>
          <li><h3 className="font-bold">02 / Validate the request</h3><p className="mt-2">The Django serializer repeats the socket check. On partial updates it also considers the existing build, so omitted fields still participate in validation.</p><a className="inline-block mt-3 underline underline-offset-4" href={`${rigSource}/backend/compatibility/serializers.py#L46-L61`} target="_blank" rel="noopener noreferrer">Read the API validation ↗</a></li>
          <li><h3 className="font-bold">03 / Explain the failure</h3><p className="mt-2">A mismatch adds errors to the CPU and motherboard fields. The serializer raises ValidationError before accepting the build.</p><a className="inline-block mt-3 underline underline-offset-4" href={`${rigSource}/backend/compatibility/serializers.py#L94-L97`} target="_blank" rel="noopener noreferrer">Read the rejection path ↗</a></li>
        </ol>
        <div className="border-2 border-current p-5 bg-white/40"><h3 className="font-bold">The tradeoff</h3><p className="mt-2">The browser gives immediate feedback; the server validates requests independently. Keeping the same rule in JavaScript and Python introduces a maintenance cost: a change needs matching behavior in both places.</p></div>
        <p className="text-xs opacity-70">Source snapshot: RigSmith commit 40c88e9. This walkthrough describes that version.</p>
      </section>
    </>}
    {slug === "portfolio" && <section className="space-y-4 border-t-2 border-current pt-6">
      <h2 className="text-2xl sm:text-3xl font-bold">Why a status has an expiry</h2>
      <p className="max-w-3xl leading-relaxed">An activity update is temporary. If a phone stops sending updates, the last activity should disappear. Status writes carry an expiry; Redis uses a key TTL, and the reader also checks the stored expiry. The local development fallback checks the same timestamp.</p>
      <p className="max-w-3xl leading-relaxed">The public status refreshes once a minute. Authentication stays on the server: admin updates require a signed session, while webhook updates require a configured secret. Read failures hide the status; failed writes are reported as errors.</p>
      <div className="border-2 border-current p-5 bg-white/40"><h3 className="font-bold">Checks you can inspect</h3><p className="mt-2">The suite exercises rejected admin requests, session expiry and tampering, status expiration, webhook persistence failures, and contact delivery failures. The socket example also has boundary cases.</p><a className="inline-block mt-3 underline underline-offset-4" href="https://github.com/NARS77/nawab-is-a.dev/actions" target="_blank" rel="noopener noreferrer">Repository checks ↗</a><p className="text-xs mt-2">The workflow will run on GitHub after this update is pushed. No passing CI result is claimed here.</p></div>
    </section>}
    {progress && <section className="border-t-2 border-current pt-6" aria-label="Project progress">
      <h2 className="text-2xl sm:text-3xl font-bold">Where it stands</h2>
      <p className="text-xs mt-2 opacity-70">Build scope · updated 5 November 2026</p>
      <div className="grid md:grid-cols-3 gap-6 mt-5">
        {([["Implemented", progress.working], ["Unfinished / limits", progress.unfinished], ["Next", progress.next]] as const).map(([title, items]) => <div key={title} className="border-t border-current pt-3"><h3 className="font-bold">{title}</h3><ul className="list-disc pl-5 mt-3 space-y-2 text-sm leading-relaxed">{items.map(item => <li key={item}>{item}</li>)}</ul></div>)}
      </div>
    </section>}
    {notes.length > 0 && <section className="border-t-2 border-current pt-6"><h2 className="text-2xl font-bold">Build notes</h2><ul className="mt-4 space-y-3">{notes.map(note => <li key={note.id}><Link className="underline underline-offset-4" href={`/notes#${note.id}`}>{note.title} →</Link></li>)}</ul></section>}
  </>;
}
