import React from "react";
import { siteConfig } from "@/config/site";
import { MapPin, Phone, Mail, Clock, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ContactCardProps {
  className?: string;
}

export function ContactCard({ className }: ContactCardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-3xl p-6 sm:p-8 border border-primary/10 shadow-card space-y-6",
        className
      )}
    >
      <div className="flex items-center gap-2">
        <Sparkles className="w-5 h-5 text-gold" />
        <h3 className="font-serif text-2xl font-bold text-plum">
          Visit Our Studio Sanctuary
        </h3>
      </div>

      <div className="space-y-5 text-sm text-body font-sans">
        {/* Address */}
        <div className="flex items-start gap-3.5">
          <div className="w-9 h-9 rounded-xl bg-lavender-light flex items-center justify-center text-primary shrink-0 mt-0.5">
            <MapPin className="w-4 h-4 text-primary" />
          </div>
          <div>
            <p className="font-bold text-plum">Studio Address</p>
            <p className="text-body/85 leading-relaxed mt-0.5">
              {siteConfig.address.full}
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-3.5">
          <div className="w-9 h-9 rounded-xl bg-lavender-light flex items-center justify-center text-primary shrink-0 mt-0.5">
            <Phone className="w-4 h-4 text-primary" />
          </div>
          <div>
            <p className="font-bold text-plum">Phone & Appointments</p>
            <a
              href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
              className="text-primary hover:text-primary-hover font-semibold mt-0.5 block"
            >
              {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-3.5">
          <div className="w-9 h-9 rounded-xl bg-lavender-light flex items-center justify-center text-primary shrink-0 mt-0.5">
            <Mail className="w-4 h-4 text-primary" />
          </div>
          <div>
            <p className="font-bold text-plum">Email Inquiries</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-body/85 hover:text-primary mt-0.5 block"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>

        {/* Hours */}
        <div className="flex items-start gap-3.5">
          <div className="w-9 h-9 rounded-xl bg-lavender-light flex items-center justify-center text-primary shrink-0 mt-0.5">
            <Clock className="w-4 h-4 text-primary" />
          </div>
          <div>
            <p className="font-bold text-plum">Consultation Hours</p>
            <p className="text-body/85 mt-0.5">
              {siteConfig.openingHours.days}: {siteConfig.openingHours.hours}
            </p>
            <p className="text-xs text-gold font-semibold mt-0.5">
              *{siteConfig.openingHours.note}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
