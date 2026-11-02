import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg text-content-primary flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md space-y-6">
        <div className="text-xs font-mono uppercase tracking-widest text-accent">
          404 / Error
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-content-primary">
          Resource Not Found
        </h1>
        <p className="text-sm text-content-secondary leading-relaxed">
          The requested system endpoint or case study does not exist or has been moved.
        </p>
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-medium text-bg bg-content-primary hover:bg-white px-5 py-2.5 rounded transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Portfolio</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
