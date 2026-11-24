import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig, getWhatsAppBookingUrl } from "@/config/site";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  Sparkles,
  Train,
  Bus,
  Navigation,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact & Studio Location | Inner Mirror Bliss Ghansoli Navi Mumbai",
  description:
    "Connect with Deepika at Inner Mirror Bliss in Sector 5, Ghansoli, Navi Mumbai. Phone: +91 9987969557. Inquire about Tarot readings, Reiki, and spiritual wellness sessions.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="bg-ivory/40 min-h-screen">
      {/* Breadcrumb Bar */}
      <div className="border-b border-primary/10 bg-white/70 backdrop-blur-sm">
        <Container>
          <div className="py-3">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Contact", href: "/contact" },
              ]}
            />
          </div>
        </Container>
      </div>

      {/* Hero Header */}
      <Section variant="light" spacing="lg" className="pt-12 sm:pt-16 pb-12">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Eyebrow>WE WELCOME YOU WITH WARMTH & CARE</Eyebrow>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-plum leading-tight">
              Connect With Inner Mirror Bliss
            </h1>
            <p className="font-sans text-lg sm:text-xl text-body/90 leading-relaxed max-w-2xl mx-auto">
              Whether you are scheduling your first tarot reading or inquiring about our energy wellness sessions, Deepika is here to guide you.
            </p>
          </div>
        </Container>
      </Section>

      {/* Main Grid: Contact Details & Form */}
      <Section variant="white" spacing="lg" className="pt-0 pb-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Direct Info Cards (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Primary Info Card */}
              <div className="p-8 rounded-3xl bg-ivory border-2 border-gold/40 shadow-card space-y-6 font-sans">
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-widest text-primary font-bold">
                    {siteConfig.sacredInvocation}
                  </span>
                  <h2 className="font-serif text-2xl font-bold text-plum">
                    Deepika & Inner Mirror Bliss
                  </h2>
                  <p className="text-xs text-muted">
                    Tarot Reading & Spiritual Wellness Sanctuary
                  </p>
                </div>

                <div className="space-y-4 pt-2 text-sm text-body">
                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-lavender-light flex items-center justify-center text-primary shrink-0 mt-0.5">
                      <Phone className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <span className="block text-[11px] uppercase tracking-wider text-muted font-bold">
                        Phone Consultation
                      </span>
                      <a
                        href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
                        className="font-bold text-plum hover:text-primary transition"
                      >
                        {siteConfig.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0 mt-0.5">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[11px] uppercase tracking-wider text-muted font-bold">
                        WhatsApp Instant Chat
                      </span>
                      <a
                        href={getWhatsAppBookingUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-emerald-700 hover:underline"
                      >
                        Chat Directly with Deepika
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-lavender-light flex items-center justify-center text-primary shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 text-gold" />
                    </div>
                    <div>
                      <span className="block text-[11px] uppercase tracking-wider text-muted font-bold">
                        Studio Address
                      </span>
                      <p className="text-plum font-medium leading-relaxed">
                        {siteConfig.address.full}
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-lavender-light flex items-center justify-center text-primary shrink-0 mt-0.5">
                      <Clock className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <span className="block text-[11px] uppercase tracking-wider text-muted font-bold">
                        Studio Operating Hours
                      </span>
                      <p className="text-plum font-semibold">
                        {siteConfig.openingHours.days}: {siteConfig.openingHours.hours}
                      </p>
                      <p className="text-xs text-primary font-medium">
                        * Prior Booking Strictly Required
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-primary/10 flex items-center gap-2 text-xs text-muted">
                  <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
                  <span>100% Private, Respectful & Confidential Consultations</span>
                </div>
              </div>

              {/* Transit & Directions Card */}
              <div className="p-6 rounded-3xl bg-white border border-primary/10 shadow-soft space-y-4 font-sans text-xs text-body leading-relaxed">
                <h3 className="font-serif text-lg font-bold text-plum flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-gold" />
                  How to Reach the Studio
                </h3>

                <div className="space-y-3">
                  <div className="flex items-start gap-2.5">
                    <Train className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-plum block">By Mumbai Suburban Railway:</strong>
                      Alight at <strong>Ghansoli Station</strong> (Trans-Harbour line). Auto-rickshaws are readily available outside the station (approx. 7–10 minutes to Sector 5 Panchvati).
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Bus className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-plum block">By NMMT / BEST Bus:</strong>
                      Direct buses stop right at <strong>Panchvati Bus Stop</strong>, situated directly in front of Panchvati Co-op Society.
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-plum block">Key Landmarks:</strong>
                      Shop No. C-38, Ground Level, Sector 5 Ghansoli, Navi Mumbai. Easy road connection from Thane-Belapur Highway and Palm Beach Road.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form & Interactive Map (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              {/* Contact Form Container */}
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-primary/10 shadow-card space-y-6">
                <div>
                  <Eyebrow>SEND A MESSAGE</Eyebrow>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-plum mt-1">
                    Send an Inquiry or Schedule a Visit
                  </h2>
                  <p className="text-sm font-sans text-body/80 mt-1">
                    Fill out the form below and Deepika will personally respond within a few hours.
                  </p>
                </div>

                <ContactForm />
              </div>

              {/* Embedded Google Map */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-primary/10 shadow-card space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-xl font-bold text-plum flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-gold" />
                    Interactive Studio Map
                  </h3>
                  <a
                    href="https://maps.google.com/?q=Panchvati+Co-op+Society+Sector+5+Ghansoli+Navi+Mumbai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-primary hover:underline font-sans"
                  >
                    Open in Full Google Maps →
                  </a>
                </div>

                <div className="w-full h-72 sm:h-80 rounded-2xl overflow-hidden border border-primary/10 relative bg-lavender-light/40">
                  <iframe
                    title="Inner Mirror Bliss Studio Location Map in Ghansoli"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0881858599427!2d72.9959656!3d19.1235123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c0c1b489a805%3A0x6b4ef8d1d867cfa2!2sPanchavati%20Co-op%20Housing%20Society%2C%20Sector%205%2C%20Ghansoli%2C%20Navi%20Mumbai%2C%20Maharashtra%20400701!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
