"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { Phone, Sparkles, Menu } from "lucide-react";
import { GoldButton } from "@/components/ui/Buttons";
import { cn } from "@/lib/utils";

export interface DesktopNavigationProps {
  onOpenMobileMenu?: () => void;
  className?: string;
}

export function DesktopNavigation({
  onOpenMobileMenu,
  className,
}: DesktopNavigationProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-soft border-b border-primary/10 py-3"
          : "bg-ivory/90 backdrop-blur-sm border-b border-primary/5 py-4",
        className
      )}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Tagline */}
        <Link href="/" className="flex flex-col group">
          <div className="flex items-center gap-1.5">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-plum group-hover:text-primary transition-colors">
              INNER MIRROR
            </span>
            <span className="font-script text-2xl sm:text-3xl text-gold font-normal -mt-1">
              Bliss
            </span>
          </div>
          <span className="text-[10px] font-sans font-bold tracking-[0.16em] uppercase text-muted -mt-1">
            By Deepika • Spiritual Wellness
          </span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {siteConfig.mainNav.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-sm font-sans font-bold transition-colors py-1.5",
                  isActive
                    ? "text-primary font-black"
                    : "text-body/80 hover:text-primary"
                )}
              >
                {item.title}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold via-primary to-gold rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <a
            href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
            className="hidden xl:flex items-center gap-1.5 text-xs font-sans font-bold text-plum hover:text-primary transition-colors"
          >
            <div className="w-7 h-7 rounded-full bg-lavender-light flex items-center justify-center text-primary">
              <Phone className="w-3.5 h-3.5" />
            </div>
            <span>{siteConfig.phoneDisplay}</span>
          </a>

          <GoldButton href="/book-session" size="sm" className="hidden sm:inline-flex">
            <Sparkles className="w-3.5 h-3.5 mr-1.5" />
            Book Session
          </GoldButton>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={onOpenMobileMenu}
            aria-label="Open mobile navigation menu"
            className="lg:hidden p-2 rounded-xl bg-white border border-primary/10 text-plum hover:bg-lavender-light transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
