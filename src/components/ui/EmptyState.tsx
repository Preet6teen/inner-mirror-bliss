import React from "react";
import { Sparkles } from "lucide-react";
import { PrimaryButton } from "./Buttons";
import { cn } from "@/lib/utils";

export interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  actionText?: string;
  actionHref?: string;
  onAction?: () => void;
  className?: string;
}

export function EmptyState({
  icon,
  title,
  description,
  actionText,
  actionHref,
  onAction,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center p-8 sm:p-12 bg-white rounded-3xl border border-primary/10 shadow-soft max-w-lg mx-auto",
        className
      )}
    >
      <div className="w-16 h-16 rounded-full bg-lavender-light flex items-center justify-center text-primary mb-5 shadow-sm">
        {icon || <Sparkles className="w-8 h-8 text-gold" />}
      </div>

      <h3 className="font-serif text-2xl font-bold text-plum mb-2">{title}</h3>
      <p className="text-sm text-body/80 font-sans leading-relaxed max-w-sm mb-6">
        {description}
      </p>

      {actionText && (
        <PrimaryButton href={actionHref} onClick={onAction}>
          {actionText}
        </PrimaryButton>
      )}
    </div>
  );
}
