import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("py-3 text-xs font-sans", className)}>
      <ol className="flex items-center flex-wrap gap-1.5 text-muted">
        <li>
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-primary transition-colors text-body/70"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1.5">
              <ChevronRight className="w-3 h-3 text-lavender" />
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-primary transition-colors text-body/80"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="font-semibold text-plum truncate max-w-[200px] sm:max-w-none">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
