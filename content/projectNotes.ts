export const rigSource = "https://github.com/NARS77/RigSmith/blob/40c88e9ab85b5b4743a3da674c097c5518e3fda9";
export interface Progress { working: string[]; unfinished: string[]; next: string[] }
export const projectProgress: Record<string, Progress> = {
  rigsmith: { working: ["Component selection, socket rules, and an SVG build view.", "Django validation for sockets, RAM type, wattage, and case fit."], unfinished: ["The small example here covers sockets only.", "Socket matching does not model BIOS support."], next: ["Add more boundary examples and compare browser rules with API validation."] },
  sentimentsphere: { working: ["Feedback analysis with TextBlob and OpenAI, plus result charts."], unfinished: ["No public hosted demo is linked here yet."], next: ["Add a reproducible sample dataset and an evaluation of the results."] },
  echotrace: { working: ["Prototype work on transcription and structured meeting notes."], unfinished: ["Slack, Gmail, and streaming integrations are planned.", "No public repository or demo is linked here yet."], next: ["Document a complete recording-to-notes example, including failures."] },
  skillsphere: { working: ["Course, module, and lesson structure with role-based API permissions."], unfinished: ["The project is still in development."], next: ["Document student and instructor flows with concrete permission examples."] },
  portfolio: { working: ["Project pages, build notes, and the socket example.", "Admin authentication, live-status storage, and contact delivery handling.", "Local type, behavior, and build checks; a CI workflow is included."], unfinished: ["CI results become public after these changes are pushed.", "Project walkthroughs are being added one at a time."], next: ["Add deeper walkthroughs for SentimentSphere and SkillSphere."] },
};
export const buildNotes = [
  { id: "preview-config", project: "portfolio", date: "2026-11-05", title: "The preview loaded. Admin login still failed.",
    problem: "During this portfolio update, Next.js failed to compile from a folder containing a question mark. A temporary copy got the site rendering, but its admin login had no password configuration.",
    cause: "The preview copy excluded .env.local. A successful page response did not establish that the environment-dependent features worked.",
    change: "The local configuration was restored to the preview and the server restarted. The admin login page loaded again. The password was not changed.",
    lesson: "A preview needs the expected configuration as well as the source. The new preview command copies local configuration with restricted file permissions and checks for missing admin settings." },
  { id: "contact-delivery", project: "portfolio", date: "2026-11-05", title: "A successful request is not a delivered message.",
    problem: "The contact endpoint used to return success when email delivery failed. With no provider configured, it also logged the message and reported success.",
    cause: "The response described receiving the request rather than the outcome of sending the email. The form treated any successful HTTP response as delivery.",
    change: "Missing email configuration is now a failed delivery. The endpoint returns 503 when sending fails, and the form shows the direct email address. A regression test covers the missing-provider path.",
    lesson: "The state shown to a visitor should follow the actual operation. These checks do not prove that a configured provider delivers to an inbox." },
  { id: "socket-rule", project: "rigsmith", date: "2026-11-05", title: "One rule, checked in two places.",
    problem: "A PC builder needs to flag a mismatched CPU and motherboard while the user selects parts, and reject an invalid saved build.",
    cause: "Browser feedback can be bypassed by sending a request directly to an API.",
    change: "RigSmith checks socket_type in the React build context and again in the Django serializer. The portfolio example demonstrates just that rule, with links to both implementations.",
    lesson: "This gives immediate feedback and a server-side boundary. It also means the two implementations must stay consistent; a matching socket alone cannot establish full hardware compatibility." },
];
