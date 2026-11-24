"use client";

import React, { useState } from "react";
import { Sparkles, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export interface AnnouncementBarProps {
  className?: string;
}

export function AnnouncementBar({ className }: AnnouncementBarProps) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <aside
      aria-label="Welcome announcement"
      className={cn(
        "relative bg-lavender-light border-b border-primary/10 py-2 px-4 sm:px-8 text-center text-xs font-sans text-plum transition-all duration-300",
        className
      )}
    >
      <div className="max-w-[1240px] mx-auto flex items-center justify-center gap-2 sm:gap-3 pr-6 sm:pr-0">
        <Sparkles className="w-3.5 h-3.5 text-gold shrink-0 animate-pulse" />
        <span className="font-serif font-bold text-plum hidden md:inline tracking-wider">
          {siteConfig.sacredInvocation}
        </span>
        <span className="hidden md:inline text-gold">•</span>
        <span className="font-medium text-body/90">
          Welcome to Inner Mirror Bliss — A Space for Clarity, Reflection & Positive Transformation.
        </span>
        <span className="hidden sm:inline text-gold">•</span>
        <span className="hidden sm:inline font-bold text-primary">
          Prior Booking Required
        </span>
      </div>

      {/* Dismiss Button */}
      <button
        type="button"
        onClick={() => setDismissed(true)}
        aria-label="Dismiss announcement"
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full text-muted hover:text-plum hover:bg-white/60 transition-colors"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </aside>
  );
}
