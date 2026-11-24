"use client";

import React, { useState, useMemo } from "react";
import { Service, DisplayServiceCategory } from "@/types";
import { ServiceCard } from "@/components/services/ServiceCard";
import { ChevronLeft, ChevronRight, Sparkles, SlidersHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCarouselProps {
  services: Service[];
  className?: string;
  showCategoryFilter?: boolean;
}

type CategoryFilter = "All" | DisplayServiceCategory;

export function ServiceCarousel({
  services,
  className,
  showCategoryFilter = true,
}: ServiceCarouselProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");
  const [currentSlide, setCurrentSlide] = useState(0);

  const categories: { label: CategoryFilter; count: number }[] = [
    { label: "All", count: services.length },
    {
      label: "Tarot Reading",
      count: services.filter((s) => s.displayCategory === "Tarot Reading").length,
    },
    {
      label: "Energy and Spiritual Experiences",
      count: services.filter((s) => s.displayCategory === "Energy and Spiritual Experiences").length,
    },
    {
      label: "Relaxation and Wellness",
      count: services.filter((s) => s.displayCategory === "Relaxation and Wellness").length,
    },
  ];

  const filteredServices = useMemo(() => {
    if (activeCategory === "All") return services;
    return services.filter((s) => s.displayCategory === activeCategory);
  }, [services, activeCategory]);

  // Group services into pairs of 2 for carousel slides
  const slides = useMemo(() => {
    const pairs: Service[][] = [];
    for (let i = 0; i < filteredServices.length; i += 2) {
      pairs.push(filteredServices.slice(i, i + 2));
    }
    return pairs;
  }, [filteredServices]);

  // Reset to first slide when category changes
  const handleCategoryChange = (category: CategoryFilter) => {
    setActiveCategory(category);
    setCurrentSlide(0);
  };

  const totalSlides = slides.length;

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  if (filteredServices.length === 0) {
    return (
      <div className="text-center py-16 bg-white rounded-3xl border border-primary/10 p-8 space-y-3 font-sans">
        <Sparkles className="w-8 h-8 text-gold mx-auto" />
        <h3 className="font-serif text-2xl font-bold text-plum">No Services in this Category</h3>
      </div>
    );
  }

  const activePair = slides[currentSlide] || [];

  return (
    <div className={cn("space-y-8 font-sans", className)}>
      {/* Category Filter Pills & Carousel Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-2 border-b border-primary/10">
        {showCategoryFilter ? (
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.label}
                type="button"
                onClick={() => handleCategoryChange(cat.label)}
                className={cn(
                  "px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer",
                  activeCategory === cat.label
                    ? "bg-primary text-white shadow-soft"
                    : "bg-white text-plum/80 border border-primary/10 hover:bg-lavender-light hover:text-plum"
                )}
              >
                <span>{cat.label}</span>
                <span
                  className={cn(
                    "ml-2 px-2 py-0.5 rounded-full text-[10px] sm:text-[11px]",
                    activeCategory === cat.label
                      ? "bg-white/20 text-white"
                      : "bg-lavender-light text-primary"
                  )}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        ) : (
          <div className="flex items-center gap-2 text-xs font-bold text-plum uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-gold" />
            <span>Interactive Service Carousel</span>
          </div>
        )}

        {/* Prev / Next Navigation Controls */}
        {totalSlides > 1 && (
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs text-muted font-semibold">
              Slide {currentSlide + 1} of {totalSlides}
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous services slide"
                className="w-10 h-10 rounded-full bg-white border border-primary/20 text-plum hover:bg-gold hover:text-plum hover:border-gold shadow-sm flex items-center justify-center transition-all cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next services slide"
                className="w-10 h-10 rounded-full bg-white border border-primary/20 text-plum hover:bg-gold hover:text-plum hover:border-gold shadow-sm flex items-center justify-center transition-all cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Carousel Active Slide Cards (2 Per Row on Desktop, 1 on Mobile) */}
      <div className="relative overflow-hidden py-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 transition-all duration-500 ease-out">
          {activePair.map((service) => (
            <div key={service.id} className="animate-fadeIn">
              <ServiceCard
                service={service}
                featured={service.slug === "tarot-reading"}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Dots / Step Indicators */}
      {totalSlides > 1 && (
        <div className="flex items-center justify-center gap-2 pt-4">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={cn(
                "h-2.5 rounded-full transition-all duration-300 cursor-pointer",
                currentSlide === index
                  ? "w-8 bg-gold shadow-sm"
                  : "w-2.5 bg-primary/20 hover:bg-primary/40"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
