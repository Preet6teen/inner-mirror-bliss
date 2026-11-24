import React from "react";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

export interface EyebrowProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  icon?: boolean;
  variant?: "primary" | "gold" | "lavender";
}

export function Eyebrow({
  children,
  className,
  icon = true,
  variant = "primary",
  ...props
}: EyebrowProps) {
  const variantStyles = {
    primary: "bg-lavender-light text-primary border-primary/20",
    gold: "bg-gold-light/40 text-gold-dark border-gold/40",
    lavender: "bg-lavender/20 text-plum border-lavender/40",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-sans font-bold uppercase tracking-[0.16em]",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {icon && <Sparkles className="w-3 h-3 text-gold" />}
      {children}
    </div>
  );
}
