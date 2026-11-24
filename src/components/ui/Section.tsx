import React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: React.ElementType;
  variant?: "ivory" | "white" | "lavender" | "blush" | "gradient" | "light";
  spacing?: "sm" | "md" | "lg" | "xl" | "none";
}

export function Section({
  children,
  className,
  as: Component = "section",
  variant = "ivory",
  spacing = "lg",
  ...props
}: SectionProps) {
  const variantClasses = {
    ivory: "bg-ivory text-body",
    light: "bg-ivory/60 text-body",
    white: "bg-white text-body",
    lavender: "bg-lavender-light/60 text-body",
    blush: "bg-blush-soft/60 text-body",
    gradient: "bg-gradient-to-b from-ivory via-lavender-light/40 to-ivory text-body",
  };

  const spacingClasses = {
    none: "py-0",
    sm: "py-8 md:py-12",       // 32px / 48px
    md: "py-12 md:py-16",      // 48px / 64px
    lg: "py-16 md:py-24",      // 64px / 96px
    xl: "py-20 md:py-30",      // 80px / 120px
  };

  return (
    <Component
      className={cn(
        "relative overflow-hidden",
        variantClasses[variant],
        spacingClasses[spacing],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
