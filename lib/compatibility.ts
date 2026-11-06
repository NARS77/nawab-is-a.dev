export const sockets = ["AM4", "AM5", "LGA1700", "LGA1200"] as const;
export type Socket = typeof sockets[number];
export function checkSocket(cpu: string, motherboard: string) {
  if (!cpu || !motherboard) return { state: "incomplete", message: "Select both sockets to run the check." } as const;
  if (!sockets.includes(cpu as Socket) || !sockets.includes(motherboard as Socket)) return { state: "unknown", message: "That socket is outside this example’s catalog." } as const;
  if (cpu !== motherboard) return { state: "mismatch", message: `Socket mismatch: the CPU uses ${cpu}, but the motherboard uses ${motherboard}.` } as const;
  return { state: "match", message: `Socket match: both use ${cpu}. Other compatibility checks are still needed.` } as const;
}
