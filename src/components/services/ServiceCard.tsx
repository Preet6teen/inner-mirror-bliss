import React from "react";
import Link from "next/link";
import Image from "next/image";
import { formatINR, formatDuration, cn } from "@/lib/utils";
import { Service } from "@/types";
import { Clock, Check, Sparkles, ArrowRight } from "lucide-react";
import { PrimaryButton, GoldButton } from "@/components/ui/Buttons";

export interface ServiceCardProps {
  service: Service;
  featured?: boolean;
  className?: string;
}

export function ServiceCard({ service, featured = false, className }: ServiceCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between bg-white rounded-3xl p-6 sm:p-8 transition-all duration-300 border hover:-translate-y-1.5",
        featured
          ? "border-gold shadow-gold/20 hover:shadow-goldHover bg-gradient-to-b from-white via-ivory to-white"
          : "border-primary/10 shadow-card hover:shadow-cardHover hover:border-primary/25",
        className
      )}
    >
      {featured && (
        <div className="absolute -top-3 left-8 inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-gold text-plum text-[11px] font-sans font-black tracking-wider uppercase shadow-sm">
          <Sparkles className="w-3 h-3 text-plum" />
          Most Popular
        </div>
      )}

      <div>
        {/* Image / Header Banner */}
        {service.imageUrl && (
          <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden mb-6 bg-lavender-light/50">
            <Image
              src={service.imageUrl}
              alt={service.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-plum/40 via-transparent to-transparent" />
          </div>
        )}

        {/* Category & Duration */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-lavender-light text-primary">
            {service.displayCategory || service.category}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs text-muted font-semibold">
            <Clock className="w-4 h-4 text-gold" />
            {formatDuration(service.durationMinutes)}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-plum group-hover:text-primary transition-colors leading-tight">
          {service.title}
        </h3>

        {/* Short Description */}
        <p className="mt-3 text-sm sm:text-base text-body/85 leading-relaxed">
          {service.shortDescription}
        </p>

        {/* Key Benefits */}
        {service.benefits && service.benefits.length > 0 && (
          <div className="mt-6 pt-5 border-t border-primary/10 space-y-2.5">
            <p className="text-[11px] font-bold uppercase tracking-wider text-muted">
              Session Focus & Highlights:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {service.benefits.slice(0, 4).map((benefit, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 text-xs text-body font-medium bg-ivory/60 px-2.5 py-1.5 rounded-xl border border-primary/5"
                >
                  <span className="w-4 h-4 rounded-full bg-lavender-light text-primary flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5" />
                  </span>
                  <span className="truncate">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Pricing & Actions Footer */}
      <div className="mt-8 pt-5 border-t border-primary/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="block text-[11px] uppercase tracking-wider text-muted font-medium">
            Session Fee
          </span>
          <span className="font-serif text-2xl sm:text-3xl font-bold text-plum">
            {formatINR(service.price)}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={`/services/${service.slug}`}
            className="inline-flex items-center justify-center px-3.5 py-2 rounded-full text-xs font-bold border border-primary/20 text-plum hover:bg-lavender-light transition-colors"
          >
            Details
          </Link>

          <Link
            href={`/book-session?service=${service.slug}`}
            className={cn(
              "inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300",
              featured
                ? "bg-gold text-plum hover:bg-gold-hover shadow-gold"
                : "bg-primary text-white hover:bg-primary-hover shadow-soft"
            )}
          >
            Book
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
