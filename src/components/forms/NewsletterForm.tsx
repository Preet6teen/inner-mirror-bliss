"use client";

import React, { useState } from "react";
import { Mail, CheckCircle, Sparkles, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface NewsletterFormProps {
  className?: string;
}

export function NewsletterForm({ className }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address");
      return;
    }

    setStatus("loading");
    // Simulate gentle subscription processing
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 800);
  };

  return (
    <div
      className={cn(
        "relative bg-gradient-to-br from-lavender-light/80 via-white to-blush-soft/60 rounded-3xl p-8 sm:p-10 border border-primary/10 shadow-card text-center max-w-xl mx-auto",
        className
      )}
    >
      <div className="w-12 h-12 rounded-full bg-white shadow-soft flex items-center justify-center text-gold mx-auto mb-4 border border-gold/30">
        <Sparkles className="w-6 h-6" />
      </div>

      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-plum">
        Celestial Guidance to Your Inbox
      </h3>
      <p className="mt-2 text-sm text-body/80 leading-relaxed font-sans max-w-md mx-auto">
        Join our sacred community. Receive monthly tarot insights, moon ritual reminders, and exclusive spiritual healing updates.
      </p>

      {status === "success" ? (
        <div className="mt-6 p-4 rounded-2xl bg-white border border-emerald-400/40 text-emerald-800 text-sm font-medium flex items-center justify-center gap-2 shadow-soft">
          <CheckCircle className="w-5 h-5 text-emerald-600" />
          <span>Blessed be! You are subscribed to our monthly guidance letters.</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Mail className="w-4 h-4 text-muted absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === "error") setStatus("idle");
              }}
              placeholder="Enter your email address"
              className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-primary/15 text-sm text-plum placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-gold shadow-sm font-sans"
              disabled={status === "loading"}
              required
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="px-6 py-3 rounded-full bg-primary text-white hover:bg-primary-hover font-bold text-sm tracking-wide transition shadow-md disabled:opacity-50 shrink-0 flex items-center justify-center gap-2"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Subscribing...
              </>
            ) : (
              "Subscribe"
            )}
          </button>
        </form>
      )}

      {status === "error" && (
        <p className="text-xs text-rose-600 mt-2 font-medium">{errorMessage}</p>
      )}

      <p className="mt-4 text-[11px] text-muted font-sans">
        No spam, ever. Unsubscribe at any time with one click.
      </p>
    </div>
  );
}
