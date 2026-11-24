import React from "react";
import { cn } from "@/lib/utils";
import { Eyebrow } from "./Eyebrow";

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  scriptFlourish?: string;
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center" | "right";
  size?: "default" | "large";
}

export function SectionHeading({
  eyebrow,
  scriptFlourish,
  title,
  subtitle,
  description,
  align = "center",
  size = "default",
  className,
  ...props
}: SectionHeadingProps) {
  const displayDesc = subtitle || description;
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div
      className={cn(
        "flex flex-col max-w-3xl mb-12 sm:mb-16",
        alignmentClasses[align],
        className
      )}
      {...props}
    >
      {eyebrow && (
        <div className="mb-3">
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
      )}

      {scriptFlourish && (
        <span className="font-script text-2xl sm:text-3xl text-gold mb-1">
          {scriptFlourish}
        </span>
      )}

      <h2
        className={cn(
          "font-serif font-bold text-plum tracking-tight leading-[1.2]",
          size === "large" ? "text-display-lg" : "text-h2"
        )}
      >
        {title}
      </h2>

      {displayDesc && (
        <p className="mt-4 text-body-reg sm:text-body-lg text-body/85 leading-relaxed max-w-2xl font-sans">
          {displayDesc}
        </p>
      )}
    </div>
  );
}
