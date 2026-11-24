"use client";

import React, { useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface FAQAccordionProps {
  items: FAQItem[];
  allowMultiple?: boolean;
  className?: string;
}

export function FAQAccordion({
  items,
  allowMultiple = false,
  className,
}: FAQAccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  const toggleIndex = (index: number) => {
    if (allowMultiple) {
      setOpenIndexes((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setOpenIndexes((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className={cn("space-y-3 max-w-3xl mx-auto", className)}>
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index);
        return (
          <div
            key={index}
            className={cn(
              "rounded-2xl border transition-all duration-300 overflow-hidden",
              isOpen
                ? "bg-white border-gold/40 shadow-soft"
                : "bg-white/80 border-primary/10 hover:border-primary/20"
            )}
          >
            <button
              type="button"
              onClick={() => toggleIndex(index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-lg sm:text-xl font-bold text-plum flex items-center gap-2.5">
                <Sparkles className={cn("w-4 h-4 shrink-0 transition-colors", isOpen ? "text-gold" : "text-lavender")} />
                {item.question}
              </span>
              <span
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300",
                  isOpen ? "bg-lavender-light text-primary rotate-180" : "bg-ivory text-muted"
                )}
              >
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>

            {isOpen && (
              <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-body/85 leading-relaxed font-sans border-t border-primary/5">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
