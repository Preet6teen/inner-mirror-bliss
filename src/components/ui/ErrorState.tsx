import React from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { PrimaryButton, SecondaryButton } from "./Buttons";
import { cn } from "@/lib/utils";

export interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
  homeLink?: boolean;
  className?: string;
}

export function ErrorState({
  title = "Energy Rebalancing Needed",
  message = "An unexpected disturbance interrupted this connection. Please try again or return to our home sanctuary.",
  onRetry,
  homeLink = true,
  className,
}: ErrorStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center p-8 sm:p-12 bg-white rounded-3xl border border-rose-200 shadow-soft max-w-lg mx-auto",
        className
      )}
    >
      <div className="w-16 h-16 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 mb-5 shadow-sm">
        <AlertTriangle className="w-8 h-8" />
      </div>

      <h3 className="font-serif text-2xl font-bold text-plum mb-2">{title}</h3>
      <p className="text-sm text-body/80 font-sans leading-relaxed max-w-sm mb-6">
        {message}
      </p>

      <div className="flex items-center gap-3">
        {onRetry && (
          <PrimaryButton onClick={onRetry} size="sm">
            <RefreshCw className="w-3.5 h-3.5 mr-1.5" />
            Try Again
          </PrimaryButton>
        )}
        {homeLink && (
          <SecondaryButton href="/" size="sm">
            Return Home
          </SecondaryButton>
        )}
      </div>
    </div>
  );
}
