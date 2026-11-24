import React from "react";
import Link from "next/link";
import { formatINR, formatDuration, cn } from "@/lib/utils";
import { Service } from "@/types";
import { Clock, ArrowRight, Sparkles } from "lucide-react";

export interface ServiceCardCompactProps {
  service: Service;
  className?: string;
}

export function ServiceCardCompact({ service, className }: ServiceCardCompactProps) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(
        "group relative flex items-center justify-between p-4 sm:p-5 bg-white rounded-2xl border border-primary/10 hover:border-gold/50 shadow-soft hover:shadow-cardHover transition-all duration-300",
        className
      )}
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-lavender-light flex items-center justify-center text-primary shrink-0 group-hover:bg-gold/20 group-hover:text-gold-dark transition-colors">
          <Sparkles className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-serif text-base sm:text-lg font-bold text-plum group-hover:text-primary transition-colors">
            {service.title}
          </h4>
          <div className="flex items-center gap-3 text-xs text-muted mt-0.5 font-sans">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-gold" />
              {formatDuration(service.durationMinutes)}
            </span>
            <span>•</span>
            <span className="capitalize">{service.category}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 pl-3">
        <div className="text-right">
          <span className="font-serif text-lg sm:text-xl font-bold text-plum block">
            {formatINR(service.price)}
          </span>
        </div>
        <div className="w-8 h-8 rounded-full bg-ivory flex items-center justify-center text-muted group-hover:bg-primary group-hover:text-white transition-all">
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
}
