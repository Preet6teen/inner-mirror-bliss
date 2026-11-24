"use client";

import { useState, useMemo } from "react";
import { Service, DisplayServiceCategory } from "@/types";
import { ServiceCard } from "@/components/services/ServiceCard";
import { Sparkles, Filter, ArrowUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServicesClientProps {
  initialServices: Service[];
}

type CategoryFilter = "All" | DisplayServiceCategory;
type SortOption = "default" | "price-asc" | "price-desc";

export function ServicesClient({ initialServices }: ServicesClientProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");
  const [sortBy, setSortBy] = useState<SortOption>("default");

  const categories: { label: CategoryFilter; count: number }[] = [
    { label: "All", count: initialServices.length },
    {
      label: "Tarot Reading",
      count: initialServices.filter((s) => s.displayCategory === "Tarot Reading").length,
    },
    {
      label: "Energy and Spiritual Experiences",
      count: initialServices.filter((s) => s.displayCategory === "Energy and Spiritual Experiences").length,
    },
    {
      label: "Relaxation and Wellness",
      count: initialServices.filter((s) => s.displayCategory === "Relaxation and Wellness").length,
    },
  ];

  const filteredServices = useMemo(() => {
    let result = [...initialServices];

    if (activeCategory !== "All") {
      result = result.filter((s) => s.displayCategory === activeCategory);
    }

    if (sortBy === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    } else {
      result.sort((a, b) => a.displayOrder - b.displayOrder);
    }

    return result;
  }, [initialServices, activeCategory, sortBy]);

  return (
    <div className="space-y-10">
      {/* Category Pills & Sorting Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-4 border-b border-primary/10">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.label}
              onClick={() => setActiveCategory(cat.label)}
              className={cn(
                "px-5 py-2.5 rounded-full text-xs sm:text-sm font-sans font-bold tracking-wide transition-all duration-200 cursor-pointer",
                activeCategory === cat.label
                  ? "bg-primary text-white shadow-soft"
                  : "bg-white text-plum/80 border border-primary/10 hover:bg-lavender-light hover:text-plum"
              )}
            >
              <span>{cat.label}</span>
              <span
                className={cn(
                  "ml-2 px-2 py-0.5 rounded-full text-[11px]",
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

        {/* Sort Dropdown */}
        <div className="flex items-center gap-2 shrink-0">
          <ArrowUpDown className="w-4 h-4 text-muted" />
          <span className="text-xs text-muted font-sans font-semibold">Sort:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="text-xs font-sans font-bold text-plum bg-white border border-primary/15 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer shadow-sm"
          >
            <option value="default">Recommended</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Services Grid: 2 per row for comfortable, spacious reading */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {filteredServices.map((service, index) => (
          <ServiceCard
            key={service.id}
            service={service}
            featured={service.slug === "tarot-reading"}
          />
        ))}
      </div>

      {filteredServices.length === 0 && (
        <div className="text-center py-16 bg-white rounded-3xl border border-primary/10 p-8 space-y-3">
          <Sparkles className="w-8 h-8 text-gold mx-auto" />
          <h3 className="font-serif text-2xl font-bold text-plum">No Services Found</h3>
          <p className="text-sm text-muted font-sans">
            Please select another category filter to explore our offerings.
          </p>
        </div>
      )}
    </div>
  );
}
