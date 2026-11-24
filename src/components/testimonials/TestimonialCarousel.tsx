"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote, Sparkles } from "lucide-react";
import { EmptyState } from "@/components/ui/EmptyState";
import { cn } from "@/lib/utils";

export interface TestimonialItem {
  id: string;
  clientName: string;
  location: string;
  serviceName: string;
  rating: number;
  reviewText: string;
}

export interface TestimonialCarouselProps {
  testimonials?: TestimonialItem[];
  className?: string;
}

export function TestimonialCarousel({
  testimonials = [],
  className,
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!testimonials || testimonials.length === 0) {
    return (
      <EmptyState
        title="Sanctuary Stories Arriving Soon"
        description="We are gathering authentic reflection notes from our lovely clients. Experience a session and share your personal journey with us."
        actionText="Book Your Experience"
        actionHref="/book-session"
      />
    );
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <div className={cn("relative max-w-4xl mx-auto", className)}>
      <div className="bg-white rounded-4xl p-8 sm:p-12 md:p-14 border border-gold/40 shadow-card relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-lavender-light/60 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col justify-between min-h-[220px]">
          <div>
            <div className="flex items-center justify-between mb-6">
              {/* Star Rating */}
              <div
                className="flex items-center gap-1"
                aria-label={`Rating: ${current.rating} out of 5 stars`}
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "w-5 h-5",
                      i < current.rating ? "fill-gold text-gold" : "text-muted/30"
                    )}
                  />
                ))}
              </div>

              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-lavender-light text-primary">
                {current.serviceName}
              </span>
            </div>

            {/* Testimonial Quote */}
            <p className="font-serif text-xl sm:text-2xl text-plum leading-relaxed italic">
              &ldquo;{current.reviewText}&rdquo;
            </p>
          </div>

          {/* Client Identity & Navigation */}
          <div className="mt-8 pt-6 border-t border-primary/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="font-serif text-lg font-bold text-plum">
                {current.clientName}
              </h4>
              <p className="text-xs text-muted font-sans mt-0.5">
                {current.location}
              </p>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2 self-end sm:self-auto">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-full bg-ivory border border-primary/15 flex items-center justify-center text-plum hover:bg-lavender-light transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <span className="text-xs font-mono font-bold text-muted px-2">
                {currentIndex + 1} / {testimonials.length}
              </span>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-full bg-ivory border border-primary/15 flex items-center justify-center text-plum hover:bg-lavender-light transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to review ${idx + 1}`}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              idx === currentIndex ? "w-8 bg-gold" : "w-2 bg-primary/20 hover:bg-primary/40"
            )}
          />
        ))}
      </div>
    </div>
  );
}
