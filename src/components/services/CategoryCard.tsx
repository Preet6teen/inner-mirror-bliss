import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

export interface CategoryCardProps {
  title: string;
  subtitle: string;
  count?: number;
  icon: React.ReactNode;
  href: string;
  variant?: "lavender" | "blush" | "ivory" | "white";
  className?: string;
}

export function CategoryCard({
  title,
  subtitle,
  count,
  icon,
  href,
  variant = "white",
  className,
}: CategoryCardProps) {
  const variantStyles = {
    white: "bg-white border-primary/10 hover:border-gold/50 shadow-soft",
    lavender: "bg-lavender-light/70 border-lavender/40 hover:border-primary/40",
    blush: "bg-blush-soft/80 border-blush/50 hover:border-plum/30",
    ivory: "bg-ivory border-gold/30 hover:border-gold",
  };

  return (
    <Link
      href={href}
      className={cn(
        "group relative flex flex-col justify-between p-6 sm:p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-cardHover border",
        variantStyles[variant],
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div className="w-14 h-14 rounded-2xl bg-white/90 shadow-soft flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-gold/20 group-hover:text-gold-dark transition-all duration-300">
          {icon}
        </div>
        <div className="w-8 h-8 rounded-full bg-white/80 border border-primary/10 flex items-center justify-center text-muted group-hover:bg-primary group-hover:text-white transition-all">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>

      <div className="mt-8">
        {count !== undefined && (
          <span className="text-[11px] font-bold uppercase tracking-wider text-muted block mb-1">
            {count} {count === 1 ? "Experience" : "Experiences"}
          </span>
        )}
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-plum group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-body/80 leading-relaxed font-sans">
          {subtitle}
        </p>
      </div>
    </Link>
  );
}
