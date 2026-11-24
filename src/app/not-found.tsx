import Link from "next/link";
import { Compass, Home, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function NotFound() {
  return (
    <main className="min-h-[75vh] flex items-center justify-center px-4 py-20">
      <div className="max-w-lg w-full bg-spiritual-night/90 border border-gold-metallic/30 rounded-2xl p-8 sm:p-10 text-center backdrop-blur-md shadow-purple-lg">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-950/80 border border-gold-metallic/40 mb-6 text-gold-radiant">
          <Compass className="w-10 h-10 animate-spin" style={{ animationDuration: "20s" }} />
        </div>
        <p className="text-xs uppercase tracking-widest text-lavender-300 mb-2">
          {siteConfig.sacredInvocation}
        </p>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-slate-100 mb-3">
          404 — Path Not Found
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
          The celestial page you seek has moved into another realm or does not exist. Allow your intuition to guide you back to our sanctuary.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-slate-950 font-semibold text-sm hover:brightness-110 transition shadow-gold"
          >
            <Home className="w-4 h-4" />
            Return to Sanctuary
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-gold-metallic/40 text-lavender-200 hover:bg-spiritual-amethyst/50 transition text-sm font-medium"
          >
            <Sparkles className="w-4 h-4 text-gold-metallic" />
            Explore Services
          </Link>
        </div>
      </div>
    </main>
  );
}
