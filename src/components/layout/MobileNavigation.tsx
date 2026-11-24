"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig, getWhatsAppBookingUrl } from "@/config/site";
import { X, Sparkles, Phone, MessageCircle, MapPin } from "lucide-react";
import { GoldButton, PrimaryButton } from "@/components/ui/Buttons";
import { cn } from "@/lib/utils";

export interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNavigation({ isOpen, onClose }: MobileNavigationProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-plum/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-ivory border-l border-primary/10 shadow-floating flex flex-col justify-between p-6 sm:p-8 overflow-y-auto">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-primary/10">
            <div>
              <span className="font-serif text-lg font-bold text-plum">
                INNER MIRROR <span className="font-script text-gold text-xl">Bliss</span>
              </span>
              <p className="text-[10px] text-muted uppercase tracking-widest font-sans">
                By Deepika
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="w-9 h-9 rounded-full bg-white border border-primary/10 flex items-center justify-center text-plum hover:bg-lavender-light transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="py-6 space-y-1">
            {siteConfig.mainNav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    "flex items-center justify-between px-4 py-3 rounded-2xl text-base font-sans font-bold transition-all",
                    isActive
                      ? "bg-primary text-white shadow-soft"
                      : "text-body hover:bg-white hover:text-primary"
                  )}
                >
                  <span>{item.title}</span>
                  {isActive && <Sparkles className="w-4 h-4 text-gold" />}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer Contact & Action */}
        <div className="pt-6 border-t border-primary/10 space-y-4">
          <GoldButton href="/book-session" size="md" className="w-full" onClick={onClose}>
            <Sparkles className="w-4 h-4 mr-2" />
            Book Session Online
          </GoldButton>

          <a
            href={getWhatsAppBookingUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-sans font-bold text-sm tracking-wide shadow-sm transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp Direct Chat
          </a>

          <div className="text-center pt-2">
            <p className="text-xs text-muted font-sans flex items-center justify-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-gold" />
              Sector 5, Ghansoli, Navi Mumbai
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
