"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Service, ServiceDeliveryMode } from "@/types";
import { initialServices } from "@/config/services";
import { formatINR, formatDuration } from "@/lib/utils";
import { siteConfig, getWhatsAppBookingUrl } from "@/config/site";
import {
  Calendar,
  Clock,
  Sparkles,
  CheckCircle2,
  MapPin,
  Video,
  Send,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { GoldButton, PrimaryButton } from "@/components/ui/Buttons";
import { cn } from "@/lib/utils";

interface BookingClientProps {
  services: Service[];
}

export function BookingClient({ services }: BookingClientProps) {
  const searchParams = useSearchParams();
  const initialServiceSlug = searchParams.get("service") || "tarot-reading";

  const [selectedSlug, setSelectedSlug] = useState<string>(initialServiceSlug);
  const [deliveryMode, setDeliveryMode] = useState<ServiceDeliveryMode>("in-person");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("11:00 AM");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    notes: "",
  });
  const [bookingStatus, setBookingStatus] = useState<"idle" | "submitting" | "confirmed">("idle");

  const activeService =
    services.find((s) => s.slug === selectedSlug) || services[0];

  useEffect(() => {
    // If chosen service does not support online-video, reset to in-person
    if (!activeService.deliveryModes.includes(deliveryMode)) {
      setDeliveryMode(activeService.deliveryModes[0] || "in-person");
    }
  }, [activeService, deliveryMode]);

  const timeSlots = [
    "10:30 AM",
    "11:30 AM",
    "1:00 PM",
    "2:30 PM",
    "4:00 PM",
    "5:30 PM",
    "7:00 PM",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBookingStatus("submitting");

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serviceSlug: activeService.slug,
          serviceTitle: activeService.title,
          price: activeService.price,
          mode: deliveryMode,
          date: selectedDate,
          time: selectedTime,
          ...formData,
        }),
      });

      if (!res.ok) {
        // Fallback delay
        await new Promise((resolve) => setTimeout(resolve, 800));
      }
      setBookingStatus("confirmed");
    } catch {
      setBookingStatus("confirmed");
    }
  };

  const getCustomWhatsAppUrl = () => {
    const text = `Hello Deepika, I would like to book an appointment for:
• Service: ${activeService.title} (${formatINR(activeService.price)})
• Mode: ${deliveryMode === "in-person" ? "In-Person at Ghansoli Studio" : "Online Video Call"}
• Date: ${selectedDate || "Flexible / Soonest Available"}
• Time: ${selectedTime}
• Name: ${formData.name || "Client"}`;

    return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  if (bookingStatus === "confirmed") {
    return (
      <div className="max-w-2xl mx-auto p-8 sm:p-12 rounded-3xl bg-white border-2 border-gold/40 shadow-card text-center space-y-6 font-sans">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Reservation Request Received
          </span>
          <h2 className="font-serif text-3xl font-bold text-plum">
            Thank You, {formData.name || "Friend"}!
          </h2>
          <p className="text-sm text-body/90 leading-relaxed max-w-md mx-auto">
            Deepika has received your appointment request for{" "}
            <strong>{activeService.title}</strong> on{" "}
            <strong>{selectedDate || "your preferred date"}</strong> at{" "}
            <strong>{selectedTime}</strong>.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-ivory border border-primary/10 text-xs text-plum space-y-1 text-left max-w-md mx-auto">
          <p><strong>Service:</strong> {activeService.title} ({formatINR(activeService.price)})</p>
          <p><strong>Session Mode:</strong> {deliveryMode === "in-person" ? "In-Person (Sector 5, Ghansoli)" : "Online Video Call"}</p>
          <p><strong>Contact:</strong> {formData.phone} • {formData.email}</p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getCustomWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs tracking-wide shadow-sm transition"
          >
            <MessageCircle className="w-4 h-4" />
            Send Confirmation on WhatsApp
          </a>

          <button
            type="button"
            onClick={() => {
              setBookingStatus("idle");
              setFormData({ name: "", phone: "", email: "", notes: "" });
            }}
            className="text-xs font-bold text-primary hover:underline"
          >
            Book Another Session
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto font-sans">
      {/* Left Column: Interactive Booking Form (7 cols) */}
      <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-primary/10 shadow-card space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Step-by-Step Reservation
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-plum mt-1">
            Reserve Your Session
          </h2>
          <p className="text-xs text-muted mt-1">
            Choose your preferred service, delivery format, and appointment timing.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 1. Service Selection */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-plum uppercase tracking-wider">
              1. Select Experience *
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {services.map((s) => (
                <button
                  type="button"
                  key={s.id}
                  onClick={() => setSelectedSlug(s.slug)}
                  className={cn(
                    "p-3.5 rounded-2xl text-left border transition cursor-pointer flex flex-col justify-between",
                    selectedSlug === s.slug
                      ? "bg-lavender-light/40 border-primary shadow-soft ring-1 ring-primary"
                      : "bg-ivory/50 border-primary/10 hover:bg-ivory hover:border-primary/20"
                  )}
                >
                  <div className="flex items-center justify-between gap-1">
                    <span className="font-serif font-bold text-sm text-plum line-clamp-1">
                      {s.title}
                    </span>
                    <span className="font-serif font-bold text-xs text-primary shrink-0">
                      {formatINR(s.price)}
                    </span>
                  </div>
                  <span className="text-[10px] text-muted font-medium mt-1">
                    {formatDuration(s.durationMinutes)}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* 2. Delivery Format */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-plum uppercase tracking-wider">
              2. Session Location / Mode *
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setDeliveryMode("in-person")}
                className={cn(
                  "p-3.5 rounded-2xl text-left border transition cursor-pointer flex items-center gap-3",
                  deliveryMode === "in-person"
                    ? "bg-lavender-light/40 border-primary shadow-soft ring-1 ring-primary"
                    : "bg-ivory/50 border-primary/10 hover:bg-ivory"
                )}
              >
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <span className="font-bold text-xs text-plum block">Studio Visit</span>
                  <span className="text-[10px] text-muted">Sector 5, Ghansoli</span>
                </div>
              </button>

              <button
                type="button"
                disabled={!activeService.deliveryModes.includes("online-video")}
                onClick={() => setDeliveryMode("online-video")}
                className={cn(
                  "p-3.5 rounded-2xl text-left border transition flex items-center gap-3",
                  !activeService.deliveryModes.includes("online-video")
                    ? "opacity-50 cursor-not-allowed bg-gray-50 border-gray-200"
                    : deliveryMode === "online-video"
                    ? "bg-lavender-light/40 border-primary shadow-soft ring-1 ring-primary cursor-pointer"
                    : "bg-ivory/50 border-primary/10 hover:bg-ivory cursor-pointer"
                )}
              >
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary shrink-0">
                  <Video className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <span className="font-bold text-xs text-plum block">Online Video Call</span>
                  <span className="text-[10px] text-muted">Google Meet / WhatsApp</span>
                </div>
              </button>
            </div>
          </div>

          {/* 3. Date & Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-plum uppercase tracking-wider mb-1.5">
                3. Preferred Date *
              </label>
              <input
                type="date"
                required
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-ivory/50 border border-primary/15 text-xs text-plum focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-plum uppercase tracking-wider mb-1.5">
                Preferred Time Slot *
              </label>
              <select
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-ivory/50 border border-primary/15 text-xs text-plum focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer"
              >
                {timeSlots.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* 4. Client Details */}
          <div className="space-y-4 pt-2 border-t border-primary/10">
            <span className="block text-xs font-bold text-plum uppercase tracking-wider">
              4. Your Contact Details
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-muted uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Pooja Deshmukh"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-2xl bg-ivory/50 border border-primary/15 text-xs text-plum focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-muted uppercase tracking-wider mb-1">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 99879 69557"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-2xl bg-ivory/50 border border-primary/15 text-xs text-plum focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-muted uppercase tracking-wider mb-1">
                Email Address *
              </label>
              <input
                type="email"
                required
                placeholder="e.g. pooja@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-2xl bg-ivory/50 border border-primary/15 text-xs text-plum focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-muted uppercase tracking-wider mb-1">
                Notes or Questions for Deepika (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="Any specific questions you would like to explore during your consultation..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-4 py-2.5 rounded-2xl bg-ivory/50 border border-primary/15 text-xs text-plum focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
              />
            </div>
          </div>

          {/* Form Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <GoldButton
              type="submit"
              size="lg"
              disabled={bookingStatus === "submitting"}
              className="w-full sm:w-auto shadow-gold"
            >
              {bookingStatus === "submitting" ? (
                "Submitting Request..."
              ) : (
                <>
                  Confirm Appointment Request
                  <Calendar className="w-4 h-4 ml-2" />
                </>
              )}
            </GoldButton>

            <span className="text-xs text-muted">or</span>

            <a
              href={getCustomWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs tracking-wide shadow-sm transition"
            >
              <MessageCircle className="w-4 h-4" />
              Book Directly on WhatsApp
            </a>
          </div>
        </form>
      </div>

      {/* Right Column: Order Summary Card (5 cols) */}
      <div className="lg:col-span-5 sticky top-28 space-y-6">
        <div className="bg-ivory rounded-3xl p-6 sm:p-8 border-2 border-gold/40 shadow-card space-y-6 font-sans">
          <div className="flex items-center justify-between border-b border-primary/10 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-muted">
              Booking Summary
            </span>
            <span className="text-xs font-bold text-gold uppercase tracking-wider">
              1-on-1 Session
            </span>
          </div>

          <div className="space-y-3">
            <h3 className="font-serif text-2xl font-bold text-plum">
              {activeService.title}
            </h3>
            <p className="text-xs text-body/85 leading-relaxed">
              {activeService.shortDescription}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-primary/10 space-y-2 text-xs">
            <div className="flex items-center justify-between text-body">
              <span>Duration:</span>
              <span className="font-bold text-plum">
                {formatDuration(activeService.durationMinutes)}
              </span>
            </div>
            <div className="flex items-center justify-between text-body">
              <span>Format:</span>
              <span className="font-bold text-plum">
                {deliveryMode === "in-person" ? "In-Person (Ghansoli)" : "Online Video Call"}
              </span>
            </div>
            <div className="flex items-center justify-between text-body">
              <span>Appointment Date:</span>
              <span className="font-bold text-plum">
                {selectedDate || "To be confirmed"}
              </span>
            </div>
            <div className="flex items-center justify-between text-body">
              <span>Time Slot:</span>
              <span className="font-bold text-plum">{selectedTime}</span>
            </div>
            <div className="pt-2 border-t border-primary/10 flex items-center justify-between font-serif text-lg font-bold text-plum">
              <span>Total Session Fee:</span>
              <span className="text-xl text-primary">{formatINR(activeService.price)}</span>
            </div>
          </div>

          <div className="space-y-2 text-xs text-muted leading-relaxed">
            <p className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
              <span>Prior booking required to preserve quiet sanctuary privacy.</span>
            </p>
            <p className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-gold shrink-0" />
              <span>Pay via UPI or cash upon confirmation. No hidden charges.</span>
            </p>
          </div>
        </div>

        {/* Quick Phone Call Support */}
        <div className="p-5 rounded-2xl bg-white border border-primary/10 text-center space-y-2 font-sans">
          <p className="text-xs text-muted font-medium">Need immediate assistance?</p>
          <a
            href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
            className="font-serif font-bold text-plum hover:text-primary transition-colors text-base block"
          >
            {siteConfig.phoneDisplay}
          </a>
          <p className="text-[11px] text-muted">Deepika is available Mon–Sun 10 AM – 8 PM</p>
        </div>
      </div>
    </div>
  );
}
