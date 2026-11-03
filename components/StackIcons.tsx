import React from "react";

interface IconProps {
  className?: string;
  style?: React.CSSProperties;
}

export function StackIcon({ name, className = "w-5 h-5", style }: { name: string } & IconProps) {
  switch (name) {
    case "react":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} style={style}>
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(0 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      );
    case "nextjs":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.83 17.65L9.64 6.8h2.15l6.57 9.25-.53 1.6zM7.2 6.8h2.1v10.4H7.2V6.8z" />
        </svg>
      );
    case "typescript":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
          <path d="M1.5 0h21A1.5 1.5 0 0 1 24 1.5v21a1.5 1.5 0 0 1-1.5 1.5h-21A1.5 1.5 0 0 1 0 22.5v-21A1.5 1.5 0 0 1 1.5 0zm9.7 13.9H8.7V20H6.5v-6.1H4V12h7.2v1.9zm3.5 1.7c.6.8 1.4 1.2 2.4 1.2 1 0 1.6-.4 1.6-1 0-.6-.5-.9-1.5-1.3l-1.3-.5c-1.6-.6-2.5-1.5-2.5-3 0-2 1.6-3.3 3.9-3.3 1.7 0 3 .6 3.8 1.7l-1.4 1.4c-.6-.7-1.4-1.1-2.4-1.1-1 0-1.6.4-1.6 1 0 .5.4.8 1.4 1.2l1.2.5c1.8.7 2.7 1.6 2.7 3.2 0 2.2-1.7 3.4-4.2 3.4-2.1 0-3.6-.8-4.5-2.1l1.8-1.3z" />
        </svg>
      );
    case "javascript":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
          <path d="M0 0h24v24H0V0zm11.5 18.5c-.8.8-1.9 1.2-3.1 1.2-2.4 0-3.9-1.5-3.9-3.9v-.2h2.2v.3c0 1.2.6 1.9 1.7 1.9 1 0 1.5-.5 1.5-1.4V8.5h2.2v8c0 .8-.2 1.4-.6 2zm8 0c-.8.8-1.9 1.2-3.1 1.2-2.4 0-3.8-1.4-3.8-3.7 0-2.3 1.5-3.7 3.7-3.7.8 0 1.5.2 2 .5V8.5h2.2v10.9h-1zm-1-3.6c-.4-.3-1-.5-1.6-.5-1.2 0-1.9.7-1.9 1.9s.7 1.9 1.9 1.9c.6 0 1.2-.2 1.6-.5v-2.8z" />
        </svg>
      );
    case "html5":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
          <path d="M1.5 0h21l-1.9 21.3L12 24l-8.6-2.7L1.5 0zm17 5.2H5.5l.4 4.5h12.2l-.4 4.5-5.7 1.6-5.7-1.6-.3-3H4.1l.5 5.5 7.4 2.1 7.4-2.1 1.1-11.5z" />
        </svg>
      );
    case "tailwind":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
        </svg>
      );
    case "bootstrap":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
          <path d="M21 4.5C21 2.57 19.43 1 17.5 1h-11C4.57 1 3 2.57 3 4.5v15C3 21.43 4.57 23 6.5 23h11c1.93 0 3.5-1.57 3.5-3.5v-15zM12.8 18.5H7.7V5.5h5.1c2 0 3.5 1.1 3.5 2.8 0 1.2-.7 2.1-1.8 2.5 1.4.3 2.3 1.4 2.3 2.8 0 2-1.7 3.1-4 3.1v1.8zm-2.8-5h2.5c1.1 0 1.8-.6 1.8-1.5s-.7-1.5-1.8-1.5H10v3zm0-4.6h2.2c1 0 1.6-.5 1.6-1.3s-.6-1.3-1.6-1.3H10v2.6z" />
        </svg>
      );
    case "svg":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} style={style}>
          <path d="M4 4h4v4H4zM16 4h4v4h-4zM16 16h4v4h-4zM4 16h4v4H4zM6 8v8M18 8v8M8 6h8M8 18h8" />
        </svg>
      );
    case "python":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
          <path d="M11.9 0C5.4 0 5.8 2.8 5.8 2.8l.01 2.9h6.2v.9H3.7S0 6.1 0 12.5s3.3 6.2 3.3 6.2h2V16s-.1-3.3 3.3-3.3h5.7s3.2.1 3.2-3.1V2.8S18.3 0 11.9 0zM8.8 1.9a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2zm3.3 22.1c6.5 0 6.1-2.8 6.1-2.8l-.01-2.9h-6.2v-.9h8.3s3.7.5 3.7-5.9-3.3-6.2-3.3-6.2h-2V8s.1 3.3-3.3 3.3H9.7s-3.2-.1-3.2 3.1v6.8s-.8 2.8 5.6 2.8zm3.1-1.9a1.1 1.1 0 1 1 0-2.2 1.1 1.1 0 0 1 0 2.2z" />
        </svg>
      );
    case "django":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
          <path d="M11.15 0h3.5v17.48c-.7.13-1.38.2-2.03.2-3.56 0-5.32-1.74-5.32-5.18 0-3.35 1.77-5.22 5.08-5.22.42 0 .8.04 1.18.1V0zm-.41 10.36c-.22-.04-.45-.06-.7-.06-1.57 0-2.43.91-2.43 2.62 0 1.67.8 2.58 2.4 2.58.26 0 .5-.02.73-.06V10.36zM18.8 7.37h3.55v16.35c-1.12.28-2.3.42-3.55.42-3.8 0-6.02-1.8-6.02-4.93v-.05c0-3.1 2.24-4.94 6.02-4.94zm.05 3.03c-1.75 0-2.6.86-2.6 2.45v.05c0 1.57.85 2.43 2.6 2.43.68 0 1.34-.11 1.95-.33v-4.27c-.6-.22-1.26-.33-1.95-.33z" />
        </svg>
      );
    case "drf":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
          <rect x="2" y="3" width="20" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M6 8h4a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2H6V8zm8 0h4M14 12h3M14 16h4M6 14h3l3 2" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      );
    case "nodejs":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
          <path d="M12 0l10.4 6v12L12 24 1.6 18V6L12 0zm0 3.2L4 7.8v8.4l8 4.6 8-4.6V7.8L12 3.2zm-2.4 7.3h4.8v1.8h-4.8v-1.8zm0 3.6h4.8v1.8h-4.8v-1.8z" />
        </svg>
      );
    case "express":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
          <path d="M2.5 12c0-5.24 4.26-9.5 9.5-9.5s9.5 4.26 9.5 9.5-4.26 9.5-9.5 9.5-9.5-4.26-9.5-9.5zm9.5-7.5c-4.14 0-7.5 3.36-7.5 7.5s3.36 7.5 7.5 7.5 7.5-3.36 7.5-7.5-3.36-7.5-7.5-7.5zm-3 5.5h6v1.5h-4.5v2.25h4v1.5h-4v2.25h4.5V17H9V10z" />
        </svg>
      );
    case "api":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} style={style}>
          <circle cx="6" cy="6" r="3" />
          <circle cx="18" cy="6" r="3" />
          <circle cx="12" cy="18" r="3" />
          <path d="M8.5 7.5L15.5 7.5M7.5 8.5L10.5 15.5M16.5 8.5L13.5 15.5" />
        </svg>
      );
    case "nginx":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
          <path d="M12 0L1.6 6v12L12 24l10.4-6V6L12 0zm-4 7.2h2.2l4 6.4V7.2h2.2v9.6h-2.2l-4-6.4v6.4H8V7.2z" />
        </svg>
      );
    case "gunicorn":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} style={style}>
          <path d="M4 18v-8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8" />
          <circle cx="8" cy="18" r="2" />
          <circle cx="16" cy="18" r="2" />
          <path d="M12 6V2M10 2h4" />
        </svg>
      );
    case "postgresql":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
          <path d="M12 2C6.48 2 2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2v-2c0-2.2 1.8-4 4-4h3v3h-3c-.55 0-1 .45-1 1v2h4l-.5 3h-3.5v6.9C18.6 21.2 22 17 22 12c0-5.52-4.48-10-10-10z" />
        </svg>
      );
    case "mysql":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} style={style}>
          <ellipse cx="12" cy="6" rx="8" ry="3" />
          <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
        </svg>
      );
    case "mongodb":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
          <path d="M12 0s4 6.2 4 12.2c0 4.8-3.2 8.6-4 9.8-.8-1.2-4-5-4-9.8C8 6.2 12 0 12 0zm0 18.5V4.2c-2.3 3.8-2.5 7.8-2.5 8.8 0 3.2 1.7 5.5 2.5 5.5z" />
        </svg>
      );
    case "psycopg2":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} style={style}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M7 10h10M7 14h6" />
        </svg>
      );
    case "openai":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
          <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 8.937a4.485 4.485 0 0 1 2.334-2.016l-.004.164v5.518a.784.784 0 0 0 .392.68l5.844 3.37-2.02 1.167a.08.08 0 0 1-.07 0l-4.839-2.793A4.504 4.504 0 0 1 2.34 8.937zm16.598 3.845l-5.844-3.37 2.02-1.167a.08.08 0 0 1 .07 0l4.839 2.793a4.504 4.504 0 0 1 .637 7.534v-5.11a.784.784 0 0 0-.722-.68zm2.01-3.016l-.142-.085-4.782-2.758a.771.771 0 0 0-.78 0L9.4 10.302V7.97a.08.08 0 0 1 .033-.062L14.27 5.11a4.5 4.5 0 0 1 6.68 4.656zM8.508 13.5l2.67-1.542 2.67 1.542v3.084l-2.67 1.542-2.67-1.542V13.5z" />
        </svg>
      );
    case "whisper":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} style={style}>
          <path d="M12 2v20M17 5v14M7 5v14M2 9v6M22 9v6" />
        </svg>
      );
    case "prompts":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} style={style}>
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2zM8 9h8M8 13h5" />
        </svg>
      );
    case "json":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} style={style}>
          <path d="M8 3H6a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2 2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h2M16 3h2a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2 2 2 0 0 0-2 2v4a2 2 0 0 1-2 2h-2" />
        </svg>
      );
    case "nlp":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} style={style}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3.6 9h16.8M3.6 15h16.8M11.5 3a17 17 0 0 0 0 18M12.5 3a17 17 0 0 1 0 18" />
        </svg>
      );
    case "pipeline":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} style={style}>
          <rect x="2" y="7" width="6" height="10" rx="1" />
          <rect x="16" y="7" width="6" height="10" rx="1" />
          <path d="M8 12h8M13 9l3 3-3 3" />
        </svg>
      );
    case "docker":
    case "dockercompose":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
          <path d="M13.98 11.08h2.09v1.98h-2.09zm-3.14 0h2.09v1.98h-2.09zm-3.14 0h2.09v1.98H7.7zm6.28-3.14h2.09v1.98h-2.09zm-3.14 0h2.09v1.98h-2.09zm-3.14 0h2.09v1.98H7.7zm6.28-3.14h2.09v1.98h-2.09zm-3.14 0h2.09v1.98h-2.09zm13.1 7.42c-.44-.31-1.42-.39-2.19-.17-.18-.89-.78-1.58-1.57-1.89-.54-.21-1.12-.19-1.63.03V7.27H4.55v5.79H2.46c-.52 0-.96.38-1.03.89-.69 4.8 2.94 8.76 8.35 8.76 6.3 0 10.97-4.14 11.5-8.8.03-.27-.08-.54-.28-.71z" />
        </svg>
      );
    case "git":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
          <path d="M23.54 10.93L13.07.46a1.5 1.5 0 0 0-2.12 0L8.83 2.58l3.19 3.19c.73-.25 1.59-.09 2.18.5a2.02 2.02 0 0 1 .46 2.22l3.07 3.07a2.02 2.02 0 0 1 2.22.46 2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0 2.02 2.02 0 0 1-.46-2.22l-2.87-2.87v6.62a2.02 2.02 0 0 1 .59 1.44 2 2 0 0 1-2 2 2 2 0 0 1-2-2c0-.55.22-1.05.59-1.44V8.71a2.02 2.02 0 0 1-1.15-1.15L6.64 10.74l-.01.01-6.17 6.18a1.5 1.5 0 0 0 0 2.12l10.47 10.47c.59.59 1.54.59 2.12 0l10.49-10.47a1.5 1.5 0 0 0 0-2.12z" />
        </svg>
      );
    case "linux":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
          <path d="M12 0c-4.4 0-8 3.6-8 8 0 2.5 1.1 4.7 2.9 6.2-.2 1.3-.8 3.5-2.9 5.8 2.6 0 5-1.1 6.6-2.9 4.6 2.5 9.4-1.2 9.4-7.1 0-5.5-3.6-10-8-10zm-2.5 7c.8 0 1.5.7 1.5 1.5S10.3 10 9.5 10 8 9.3 8 8.5 8.7 7 9.5 7zm5 0c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5.7-1.5 1.5-1.5z" />
        </svg>
      );
    case "postman":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
          <path d="M13.5 0C6.04 0 0 6.04 0 13.5S6.04 27 13.5 27 27 20.96 27 13.5 20.96 0 13.5 0zm6.8 9.2l-3.3 1.9c-.3-.4-.7-.7-1.2-.9l.7-3.7c1.5.6 2.8 1.5 3.8 2.7zm-6.8-6.9c1.6 0 3.2.4 4.5 1.2l-.7 3.8c-.8-.2-1.7-.3-2.6-.3-.4 0-.8 0-1.2.1L12.5 3c.3-.5.6-1 .9-1.2h.1z" />
        </svg>
      );
    case "vercel":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
          <path d="M12 1L24 22H0L12 1z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} style={style}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
        </svg>
      );
  }
}
