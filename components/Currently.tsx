import Link from "next/link";
import { currentWork } from "@/content/current";

export default function Currently() {
  return <section id="currently" aria-labelledby="currently-title" className="border-b-4 border-[#1B1B1A] bg-[#EAD9A0] px-4 sm:px-8 py-10 sm:py-14">
    <div className="flex flex-wrap items-baseline justify-between gap-3 border-b-2 border-current pb-4">
      <h2 id="currently-title" className="text-3xl sm:text-5xl font-bold tracking-tighter uppercase">Currently</h2>
      <p className="text-xs">Updated <time dateTime={currentWork.updated}>{currentWork.updatedLabel}</time></p>
    </div>
    <div className="grid md:grid-cols-3 gap-8 mt-6">
      <div><h3 className="text-xs font-bold uppercase tracking-widest">At Meatndoor</h3><p className="mt-3 text-lg">AI engineering and full-stack development, including the mobile app, dashboard work, and generative product imagery.</p></div>
      <div><h3 className="text-xs font-bold uppercase tracking-widest">On my own time</h3><p className="mt-3 text-lg">{currentWork.personal}</p><Link href="/projects/portfolio" className="inline-block mt-4 underline underline-offset-4 font-bold">Inside this portfolio →</Link></div>
      <div><h3 className="text-xs font-bold uppercase tracking-widest">From the code</h3><p className="mt-3 text-lg">Try one compatibility rule from RigSmith, or read the notes behind this site.</p><div className="flex flex-col items-start gap-3 mt-4 font-bold underline underline-offset-4"><Link href="/projects/rigsmith#try-it">Try the socket check →</Link><Link href="/notes">Read build notes →</Link></div></div>
    </div>
  </section>;
}
