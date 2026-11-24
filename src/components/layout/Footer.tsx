import React from "react";
import Link from "next/link";
import { siteConfig, getWhatsAppBookingUrl } from "@/config/site";
import { initialServices } from "@/config/services";
import { Sparkles, MapPin, Phone, Mail, MessageCircle, Heart } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="bg-ivory-cream border-t border-primary/10 pt-16 pb-12 text-body font-sans">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-primary/10">
          {/* Column 1: Brand & Sacred Invocation */}
          <div className="lg:col-span-2 space-y-4">
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white border border-gold/40 text-xs font-serif tracking-widest text-plum shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>{siteConfig.sacredInvocation}</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-plum">
              INNER MIRROR <span className="font-script text-gold text-3xl">Bliss</span>
            </h3>

            <p className="text-xs uppercase tracking-[0.16em] font-bold text-primary">
              By Deepika • {siteConfig.tagline}
            </p>

            <p className="text-sm text-body/80 leading-relaxed max-w-sm">
              A sacred sanctuary dedicated to intuitive Tarot consultations, channeled Reiki healing, chakra restoration, and emotional alignment.
            </p>

            <div className="pt-2">
              <a
                href={getWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold tracking-wide transition shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp (+91 9987969557)
              </a>
            </div>
          </div>

          {/* Column 2: Healing Experiences */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-bold text-plum">
              Healing Services
            </h4>
            <ul className="space-y-2 text-sm">
              {initialServices.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-primary transition-colors text-body/80"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-primary font-bold hover:underline inline-flex items-center gap-1 text-xs"
                >
                  View All 8 Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-bold text-plum">
              Sanctuary
            </h4>
            <ul className="space-y-2 text-sm text-body/80">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Deepika
                </Link>
              </li>
              <li>
                <Link href="/book-session" className="hover:text-primary transition-colors font-semibold text-primary">
                  Book a Session
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-primary transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">
                  Spiritual Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact & Map
                </Link>
              </li>
              <li>
                <Link href="/design-system" className="hover:text-gold transition-colors text-xs text-muted">
                  Design System Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Studio Info */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-bold text-plum">
              Studio Location
            </h4>
            <div className="space-y-3 text-xs text-body/85 leading-relaxed">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>{siteConfig.address.full}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`} className="hover:text-primary font-bold">
                  {siteConfig.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-primary">
                  {siteConfig.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>© {new Date().getFullYear()} {siteConfig.name} by {siteConfig.author}. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-primary transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/disclaimer" className="hover:text-primary transition-colors">
              Spiritual Disclaimer
            </Link>
          </div>

          <p className="flex items-center gap-1 text-[11px]">
            <span>Crafted with</span>
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
            <span>in Navi Mumbai</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
