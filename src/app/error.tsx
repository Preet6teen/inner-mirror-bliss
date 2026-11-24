"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RefreshCw, Home } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error for internal diagnostics
    console.error("Unhandled runtime error:", error);
  }, [error]);

  return (
    <main className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full bg-spiritual-night/80 border border-gold-metallic/30 rounded-2xl p-8 text-center backdrop-blur-md shadow-purple-lg">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-950 border border-gold-metallic/40 mb-6 text-gold-radiant text-2xl">
          ✨
        </div>
        <p className="text-xs uppercase tracking-widest text-lavender-300 mb-2">
          || श्री स्वामी समर्थ ||
        </p>
        <h1 className="text-2xl font-serif font-bold text-slate-100 mb-3">
          Momentary Energy Shift
        </h1>
        <p className="text-sm text-slate-300 leading-relaxed mb-6">
          A temporary disturbance occurred while loading this page. Please reset your connection or return to peace.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-slate-950 font-medium text-sm hover:brightness-110 transition shadow-gold"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-gold-metallic/30 text-lavender-200 hover:bg-spiritual-amethyst/40 transition text-sm font-medium"
          >
            <Home className="w-4 h-4" />
            Return Home
          </Link>
        </div>
      </div>
    </main>
  );
}
