import React from "react";
import { cn } from "@/lib/utils";

export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  stepNumber?: string;
  className?: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  stepNumber,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group relative bg-white/90 rounded-3xl p-6 sm:p-7 border border-primary/10 shadow-soft hover:shadow-cardHover hover:border-gold/40 transition-all duration-300 flex flex-col justify-between",
        className
      )}
    >
      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-2xl bg-lavender-light flex items-center justify-center text-primary group-hover:bg-gold-light/40 group-hover:text-gold-dark transition-colors">
            {icon}
          </div>
          {stepNumber && (
            <span className="font-serif text-2xl font-bold text-lavender/60 group-hover:text-gold/60 transition-colors">
              {stepNumber}
            </span>
          )}
        </div>

        <h3 className="font-serif text-lg sm:text-xl font-bold text-plum group-hover:text-primary transition-colors">
          {title}
        </h3>

        <p className="mt-2 text-xs sm:text-sm text-body/80 leading-relaxed font-sans">
          {description}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-primary/5 flex items-center">
        <span className="text-[11px] font-bold text-gold uppercase tracking-wider font-sans group-hover:translate-x-1 transition-transform">
          Spiritual Alignment →
        </span>
      </div>
    </div>
  );
}
