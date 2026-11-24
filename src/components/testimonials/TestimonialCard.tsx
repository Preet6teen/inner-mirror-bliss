import React from "react";
import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { Testimonial } from "@/types";

export interface TestimonialCardProps {
  testimonial: Partial<Testimonial> & {
    clientName: string;
    reviewText: string;
    serviceName?: string;
    rating?: number;
    location?: string;
    date?: string;
  };
  className?: string;
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  const rating = testimonial.rating || 5;

  return (
    <div
      className={cn(
        "relative flex flex-col justify-between bg-white/95 rounded-3xl p-6 sm:p-8 border border-primary/10 shadow-card hover:shadow-cardHover transition-all duration-300",
        className
      )}
    >
      <div className="absolute top-6 right-6 text-lavender/40">
        <Quote className="w-8 h-8" />
      </div>

      <div>
        {/* Star Rating */}
        <div className="flex items-center gap-1 mb-4" aria-label={`Rating: ${rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "w-4 h-4",
                i < rating ? "fill-gold text-gold" : "text-muted/30"
              )}
            />
          ))}
        </div>

        {/* Review Quote */}
        <p className="text-body font-sans text-sm sm:text-base leading-relaxed italic">
          &ldquo;{testimonial.reviewText}&rdquo;
        </p>
      </div>

      {/* Client Identity & Service */}
      <div className="mt-6 pt-5 border-t border-primary/10 flex items-center justify-between">
        <div>
          <h4 className="font-serif font-bold text-base text-plum">
            {testimonial.clientName}
          </h4>
          <p className="text-xs text-muted font-sans mt-0.5">
            {testimonial.location || "Navi Mumbai, India"}
          </p>
        </div>

        {testimonial.serviceName && (
          <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-lavender-light text-primary">
            {testimonial.serviceName}
          </span>
        )}
      </div>
    </div>
  );
}
