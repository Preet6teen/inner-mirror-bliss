import React from "react";
import { cn } from "@/lib/utils";

export interface LoadingSkeletonProps {
  className?: string;
  variant?: "card" | "line" | "circle" | "image";
  count?: number;
}

export function LoadingSkeleton({
  className,
  variant = "line",
  count = 1,
}: LoadingSkeletonProps) {
  const baseClasses =
    "animate-pulse bg-gradient-to-r from-lavender-light/60 via-white/80 to-lavender-light/60 bg-[length:200%_100%]";

  const renderSingle = (key: number) => {
    switch (variant) {
      case "circle":
        return (
          <div
            key={key}
            className={cn("w-12 h-12 rounded-full", baseClasses, className)}
          />
        );
      case "image":
        return (
          <div
            key={key}
            className={cn("w-full h-48 rounded-2xl", baseClasses, className)}
          />
        );
      case "card":
        return (
          <div
            key={key}
            className={cn(
              "w-full rounded-3xl p-6 bg-white border border-primary/10 space-y-4",
              className
            )}
          >
            <div className={cn("w-full h-40 rounded-xl", baseClasses)} />
            <div className={cn("w-1/3 h-4 rounded-md", baseClasses)} />
            <div className={cn("w-3/4 h-6 rounded-md", baseClasses)} />
            <div className={cn("w-full h-12 rounded-md", baseClasses)} />
          </div>
        );
      case "line":
      default:
        return (
          <div
            key={key}
            className={cn("w-full h-4 rounded-md", baseClasses, className)}
          />
        );
    }
  };

  return (
    <div className="space-y-3 w-full">
      {Array.from({ length: count }).map((_, i) => renderSingle(i))}
    </div>
  );
}
