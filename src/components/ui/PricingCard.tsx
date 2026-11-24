import React from "react";
import Link from "next/link";
import { formatINR, cn } from "@/lib/utils";
import { Check, Sparkles } from "lucide-react";
import { PrimaryButton, GoldButton } from "./Buttons";

export interface PricingCardProps {
  title: string;
  price: number;
  duration: string;
  description: string;
  features: string[];
  popular?: boolean;
  ctaText?: string;
  ctaHref?: string;
  className?: string;
}

export function PricingCard({
  title,
  price,
  duration,
  description,
  features,
  popular = false,
  ctaText = "Book Session",
  ctaHref = "/book-session",
  className,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col justify-between rounded-3xl p-6 sm:p-8 transition-all duration-300 border",
        popular
          ? "bg-white border-gold shadow-gold/30 hover:shadow-goldHover ring-1 ring-gold"
          : "bg-white/90 border-primary/10 shadow-card hover:shadow-cardHover",
        className
      )}
    >
      {popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-gold text-plum text-xs font-sans font-black tracking-wider uppercase shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-plum" />
          Recommended Experience
        </div>
      )}

      <div>
        <h3 className="font-serif text-2xl font-bold text-plum">{title}</h3>
        <p className="mt-2 text-sm text-body/80 leading-relaxed">{description}</p>

        <div className="mt-6 pb-6 border-b border-primary/10">
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-4xl sm:text-5xl font-bold text-plum">
              {formatINR(price)}
            </span>
            <span className="text-sm font-medium text-muted">/ {duration}</span>
          </div>
          <span className="text-xs text-primary font-medium mt-1 block">
            Inclusive of consultation & energetic alignment
          </span>
        </div>

        <ul className="mt-6 space-y-3">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-body">
              <span className="w-5 h-5 rounded-full bg-lavender-light text-primary flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3 h-3" />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 pt-6 border-t border-primary/10">
        {popular ? (
          <GoldButton href={ctaHref} size="lg" className="w-full">
            {ctaText}
          </GoldButton>
        ) : (
          <PrimaryButton href={ctaHref} size="lg" className="w-full">
            {ctaText}
          </PrimaryButton>
        )}
      </div>
    </div>
  );
}
