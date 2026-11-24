import React from "react";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export interface DecorativeDividerProps {
  variant?: "lotus" | "stars" | "simple";
  className?: string;
}

export function DecorativeDivider({
  variant = "lotus",
  className,
}: DecorativeDividerProps) {
  return (
    <div className={cn("flex items-center justify-center my-8 sm:my-12 w-full", className)}>
      <div className="flex-1 max-w-xs h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-gold" />

      <div className="mx-4 flex items-center gap-2 text-gold">
        {variant === "lotus" && (
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-gold/60" />
            <svg
              className="w-6 h-6 text-gold fill-gold/20"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21c-4-4-7-8.5-7-12a7 7 0 0 1 14 0c0 3.5-3 8-7 12z M12 21c-2-3-4-6.5-4-9a4 4 0 0 1 8 0c0 2.5-2 6-4 9z M12 21c-1-2-2-4-2-6a2 2 0 0 1 4 0c0 2-1 4-2 6z"
              />
            </svg>
            <span className="w-1.5 h-1.5 rounded-full bg-gold/60" />
          </div>
        )}

        {variant === "stars" && (
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-gold/70" />
            <Sparkles className="w-5 h-5 text-gold" />
            <Sparkles className="w-3.5 h-3.5 text-gold/70" />
          </div>
        )}

        {variant === "simple" && (
          <span className="w-2 h-2 rounded-full bg-gold" />
        )}
      </div>

      <div className="flex-1 max-w-xs h-[1px] bg-gradient-to-l from-transparent via-gold/40 to-gold" />
    </div>
  );
}
