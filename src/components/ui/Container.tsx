import React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  as?: React.ElementType;
  size?: "default" | "small" | "large" | "full";
}

export function Container({
  children,
  className,
  as: Component = "div",
  size = "default",
  ...props
}: ContainerProps) {
  const sizeClasses = {
    small: "max-w-3xl",
    default: "max-w-[1240px]",
    large: "max-w-[1400px]",
    full: "w-full",
  };

  return (
    <Component
      className={cn(
        "mx-auto w-full px-4 sm:px-6 md:px-8",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
