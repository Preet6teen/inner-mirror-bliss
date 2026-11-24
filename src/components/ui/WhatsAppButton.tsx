import React from "react";
import { MessageCircle } from "lucide-react";
import { getWhatsAppBookingUrl } from "@/config/site";
import { cn } from "@/lib/utils";

export interface WhatsAppButtonProps {
  serviceName?: string;
  variant?: "floating" | "inline";
  className?: string;
  label?: string;
}

export function WhatsAppButton({
  serviceName,
  variant = "floating",
  className,
  label = "Chat with Deepika on WhatsApp",
}: WhatsAppButtonProps) {
  const url = getWhatsAppBookingUrl(serviceName);

  if (variant === "inline") {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-sans font-bold text-xs sm:text-sm tracking-wide shadow-md transition-all",
          className
        )}
      >
        <MessageCircle className="w-4 h-4" />
        <span>{label}</span>
      </a>
    );
  }

  return (
    <aside
      aria-label="Direct WhatsApp Contact"
      className={cn("fixed bottom-6 right-6 z-50", className)}
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
      >
        <MessageCircle className="w-7 h-7" />

        {/* Tooltip on hover */}
        <span className="absolute right-16 px-3 py-1.5 rounded-xl bg-plum text-white text-xs font-sans whitespace-nowrap shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none hidden sm:block">
          {label}
        </span>
      </a>
    </aside>
  );
}
