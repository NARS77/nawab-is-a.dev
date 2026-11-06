"use client";
import { useState } from "react";
import { checkSocket, sockets } from "@/lib/compatibility";

export default function SocketDemo() {
  const [cpu, setCpu] = useState("AM5");
  const [board, setBoard] = useState("AM4");
  const result = checkSocket(cpu, board);
  return <section id="try-it" aria-labelledby="socket-title" className="border-2 border-current bg-[#F4F1EA] p-5 sm:p-8 scroll-mt-6">
    <p className="text-xs uppercase font-bold tracking-widest">Try one rule</p>
    <h2 id="socket-title" className="text-2xl sm:text-4xl font-bold tracking-tight mt-2">Will these sockets match?</h2>
    <p className="mt-3 max-w-2xl">Change either socket to see the result. This example adapts RigSmith’s socket equality rule and runs entirely in your browser.</p>
    <div className="grid sm:grid-cols-2 gap-5 my-6">
      <div><label htmlFor="demo-cpu" className="block text-sm font-bold mb-2">CPU socket</label><select id="demo-cpu" value={cpu} onChange={e => setCpu(e.target.value)} className="w-full border-2 border-current p-3 bg-white"><option value="">Choose a socket</option>{sockets.map(s => <option key={s}>{s}</option>)}</select></div>
      <div><label htmlFor="demo-board" className="block text-sm font-bold mb-2">Motherboard socket</label><select id="demo-board" value={board} onChange={e => setBoard(e.target.value)} className="w-full border-2 border-current p-3 bg-white"><option value="">Choose a socket</option>{sockets.map(s => <option key={s}>{s}</option>)}</select></div>
    </div>
    <div role="status" aria-live="polite" aria-atomic="true" className={`border-2 border-current p-4 font-bold ${result.state === "match" ? "bg-[#B8CDB4]" : result.state === "mismatch" ? "bg-[#E8B4A6]" : "bg-white"}`}>{result.message}</div>
    <p className="mt-4 text-sm leading-relaxed">A socket match alone does not establish full build compatibility. BIOS support, memory, power, and physical fit need separate checks. This example does not save a build or call RigSmith’s API.</p>
    <details className="mt-5 border-t border-current pt-4"><summary className="cursor-pointer font-bold">Show the rule</summary><pre className="mt-3 bg-[#1B1B1A] text-[#F4F1EA] p-4 overflow-x-auto text-sm"><code>{`if (!cpu || !motherboard) return "incomplete";
if (cpu.socket_type !== motherboard.socket_type) {
  return "socket mismatch";
}
return "socket match";`}</code></pre><p className="text-xs mt-2">Simplified explanation; the full source is linked below.</p></details>
  </section>;
}
