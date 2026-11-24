"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

export interface FloatingDecorationProps {
  children?: React.ReactNode;
  duration?: number;
  yOffset?: number;
  delay?: number;
  className?: string;
}

export function FloatingDecoration({
  children,
  duration = 5,
  yOffset = 8,
  delay = 0,
  className,
}: FloatingDecorationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={cn("pointer-events-none", className)}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{
        y: [-yOffset, yOffset, -yOffset],
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        delay,
      }}
      className={cn("pointer-events-none select-none", className)}
    >
      {children}
    </motion.div>
  );
}
