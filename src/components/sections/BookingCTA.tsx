import React from "react";
import Link from "next/link";
import { siteConfig, getWhatsAppBookingUrl } from "@/config/site";
import { Sparkles, Calendar, MessageCircle, Heart } from "lucide-react";
import { GoldButton, PrimaryButton } from "@/components/ui/Buttons";
import { cn } from "@/lib/utils";

export interface BookingCTAProps {
  className?: string;
  title?: string;
  subtitle?: string;
}

export function BookingCTA({
  className,
  title = "Ready to Begin Your Sacred Transformation?",
  subtitle = "Whether seeking clarity through Tarot or profound rejuvenation with Reiki healing, Deepika welcomes you to experience peaceful alignment.",
}: BookingCTAProps) {
  return (
    <div
      className={cn(
        "relative rounded-4xl p-8 sm:p-12 md:p-16 overflow-hidden bg-gradient-to-br from-lavender-light/90 via-ivory to-blush-soft/70 border border-gold/40 shadow-card text-center",
        className
      )}
    >
      {/* Decorative Ornaments */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-white/90 border border-gold/40 text-xs font-serif tracking-widest text-plum shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-gold" />
          <span>{siteConfig.sacredInvocation}</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-plum leading-tight">
          {title}
        </h2>

        <p className="text-body text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-sans">
          {subtitle}
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <GoldButton href="/book-session" size="lg" className="w-full sm:w-auto shadow-gold">
            <Calendar className="w-4 h-4 mr-2" />
            Book Your Session Online
          </GoldButton>

          <a
            href={getWhatsAppBookingUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-sans font-bold text-sm tracking-wide shadow-md transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            Book via WhatsApp
          </a>
        </div>

        <p className="text-xs text-muted font-sans flex items-center justify-center gap-1.5 pt-2">
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          <span>In-Studio Sessions in Ghansoli, Navi Mumbai & Worldwide Online Video Calls</span>
        </p>
      </div>
    </div>
  );
}
