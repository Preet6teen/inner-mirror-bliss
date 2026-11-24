"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import {
  PrimaryButton,
  SecondaryButton,
  GoldButton,
  IconButton,
} from "@/components/ui/Buttons";
import { ServiceCard } from "@/components/services/ServiceCard";
import { ServiceCardCompact } from "@/components/services/ServiceCardCompact";
import { PricingCard } from "@/components/ui/PricingCard";
import { TestimonialCard } from "@/components/testimonials/TestimonialCard";
import { BlogCard } from "@/components/blog/BlogCard";
import { CategoryCard } from "@/components/services/CategoryCard";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { ContactCard } from "@/components/ui/ContactCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { LoadingSkeleton } from "@/components/ui/LoadingSkeleton";
import { ErrorState } from "@/components/ui/ErrorState";
import { Modal } from "@/components/ui/Modal";
import { DecorativeDivider } from "@/components/ui/DecorativeDivider";
import { FloatingDecoration } from "@/components/animations/FloatingDecoration";
import { initialServices } from "@/config/services";
import { siteConfig } from "@/config/site";
import {
  Sparkles,
  Heart,
  Moon,
  Compass,
  Check,
  Copy,
  Layers,
  Palette,
  Type,
  Layout,
  Sliders,
  Calendar,
} from "lucide-react";

export default function DesignSystemPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const colors = [
    { name: "Primary", hex: "#552878", role: "Primary Brand / Purple", usage: "Main CTAs, key titles, active states" },
    { name: "Deep Plum", hex: "#351044", role: "Deep Plum / Anchor", usage: "Headings, logos, high-contrast anchors" },
    { name: "Lavender", hex: "#C8A5E8", role: "Lavender Mist", usage: "Borders, badges, icon highlights" },
    { name: "Light Lavender", hex: "#F1E6F6", role: "Light Lavender Tint", usage: "Section fills, pills, drawer tint" },
    { name: "Blush", hex: "#F5DFE9", role: "Blush Rose", usage: "Heart-centered healing, soft card tints" },
    { name: "Ivory", hex: "#FFF9F1", role: "Ivory Canvas (75%)", usage: "Primary site background, warm canvas" },
    { name: "Champagne Gold", hex: "#D6B36A", role: "Champagne Gold (5%)", usage: "Celestial ornaments, rating stars, accents" },
    { name: "White", hex: "#FFFFFF", role: "Pure White", usage: "Cards, modals, inputs, containers" },
    { name: "Body", hex: "#45364D", role: "Plum-Charcoal Body", usage: "High-legibility reading typography" },
    { name: "Muted", hex: "#897A8E", role: "Muted Lavender-Gray", usage: "Captions, timestamps, secondary labels" },
  ];

  const copyToClipboard = (hex: string) => {
    navigator.clipboard?.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 1800);
  };

  const sampleFaqs = [
    {
      question: "How should I prepare for my first Tarot consultation?",
      answer:
        "Come with an open mind and heart. Take a few quiet moments to consider the areas of life where you seek clarity. Deepika creates a safe, compassionate space where no prior knowledge is needed.",
    },
    {
      question: "What is the difference between In-Studio and Distance Reiki?",
      answer:
        "In Reiki energy healing, physical distance does not diminish efficacy. Universal life energy operates beyond linear time and space. Both in-studio and distance sessions provide deep relaxation, stress release, and energetic alignment.",
    },
    {
      question: "Can I book a combined Tarot reading and Aura Cleansing session?",
      answer:
        "Yes! Many clients choose to begin with Tarot for mental clarity, followed immediately by Aura Cleansing or Crystal Healing to integrate the guidance and release stagnant emotions.",
    },
  ];

  return (
    <div className="pb-24">
      {/* Page Header */}
      <div className="bg-gradient-to-b from-lavender-light/70 via-ivory to-ivory py-16 sm:py-20 border-b border-primary/10">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Eyebrow icon={true} variant="gold">
              Phase 2 Design System & Visual Library
            </Eyebrow>

            <h1 className="font-serif text-display-lg font-bold text-plum">
              Inner Mirror Bliss <span className="font-script text-gold text-4xl sm:text-5xl">Style Guide</span>
            </h1>

            <p className="text-body text-base sm:text-lg leading-relaxed font-sans max-w-2xl mx-auto">
              A comprehensive, accessible visual component library adhering strictly to the <span className="font-bold text-primary">Premium Light Theme</span>: 75% light backgrounds, 20% purple/lavender, and 5% champagne gold.
            </p>

            <div className="flex items-center justify-center gap-3 pt-2">
              <span className="text-xs px-3 py-1 rounded-full bg-white border border-primary/15 font-bold text-primary">
                12-Column Responsive Grid
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-white border border-gold/40 font-bold text-gold-dark">
                30 Core Components
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-white border border-lavender/50 font-bold text-plum">
                WCAG 2.1 AA Compliant
              </span>
            </div>
          </div>
        </Container>
      </div>

      {/* 1. Color Palette Tokens */}
      <Section variant="white" spacing="md" id="colors">
        <Container>
          <SectionHeading
            eyebrow="Color Harmony"
            scriptFlourish="Luminous Palette"
            title="Design Tokens & The 75/20/5 Rule"
            description="Our palette emphasizes warmth, light, and spiritual tranquility. Click any swatch to copy its hex value."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {colors.map((c) => (
              <button
                key={c.name}
                type="button"
                onClick={() => copyToClipboard(c.hex)}
                className="group p-3 rounded-2xl border border-primary/10 bg-ivory/60 hover:bg-white hover:border-gold/50 shadow-soft hover:shadow-cardHover transition-all text-left flex flex-col justify-between"
              >
                <div>
                  <div
                    className="w-full h-16 rounded-xl border border-black/5 shadow-inner mb-3 relative overflow-hidden"
                    style={{ backgroundColor: c.hex }}
                  >
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <Copy className="w-4 h-4 text-white drop-shadow" />
                    </div>
                  </div>
                  <p className="font-serif font-bold text-sm text-plum">{c.name}</p>
                  <p className="text-xs font-mono font-semibold text-primary">{c.hex}</p>
                </div>
                <div className="mt-2 pt-2 border-t border-primary/5">
                  <p className="text-[10px] text-muted leading-tight">{c.usage}</p>
                </div>
              </button>
            ))}
          </div>

          {copiedColor && (
            <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-plum text-white text-xs font-bold shadow-lg flex items-center gap-2">
              <Check className="w-4 h-4 text-gold" />
              Copied {copiedColor} to clipboard!
            </div>
          )}
        </Container>
      </Section>

      <DecorativeDivider variant="lotus" />

      {/* 2. Typography Scale */}
      <Section variant="ivory" spacing="md" id="typography">
        <Container>
          <SectionHeading
            eyebrow="Editorial Hierarchy"
            scriptFlourish="Sacred Typography"
            title="Complete Responsive Type Scale"
            description="Combining Cormorant Garamond for regal spiritual dignity, Lato for pristine interface legibility, and Great Vibes for artisanal touches."
          />

          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-primary/10 shadow-card space-y-8">
            <div className="pb-6 border-b border-primary/10">
              <span className="text-caption uppercase tracking-widest text-muted block mb-1">
                Display XL • Cormorant Garamond 600
              </span>
              <p className="text-display-xl text-plum">
                Inner Mirror Bliss
              </p>
            </div>

            <div className="pb-6 border-b border-primary/10">
              <span className="text-caption uppercase tracking-widest text-muted block mb-1">
                Display LG • Cormorant Garamond 600
              </span>
              <p className="text-display-lg text-plum">
                Heal • Align • Transform
              </p>
            </div>

            <div className="pb-6 border-b border-primary/10">
              <span className="text-caption uppercase tracking-widest text-muted block mb-1">
                Heading 1 (H1) • Cormorant Garamond 600
              </span>
              <p className="text-h1 text-plum">
                Tarot Card Reading & Channeled Healing
              </p>
            </div>

            <div className="pb-6 border-b border-primary/10">
              <span className="text-caption uppercase tracking-widest text-muted block mb-1">
                Heading 2 (H2) • Cormorant Garamond 600
              </span>
              <p className="text-h2 text-plum">
                Reiki Facial Rejuvenation & Aura Cleansing
              </p>
            </div>

            <div className="pb-6 border-b border-primary/10">
              <span className="text-caption uppercase tracking-widest text-muted block mb-1">
                Heading 3 (H3) • Cormorant Garamond 600
              </span>
              <p className="text-h3 text-plum">
                Intuitive Crystal Vibrations & Chakra Balancing
              </p>
            </div>

            <div className="pb-6 border-b border-primary/10">
              <span className="text-caption uppercase tracking-widest text-muted block mb-1">
                Heading 4 (H4) • Cormorant Garamond 600
              </span>
              <p className="text-h4 text-plum">
                Sacred Sanctuary Consultations in Ghansoli
              </p>
            </div>

            <div className="pb-6 border-b border-primary/10">
              <span className="text-caption uppercase tracking-widest text-muted block mb-1">
                Body Large • Lato 400
              </span>
              <p className="text-body-lg text-body">
                Our sessions combine ancient intuitive wisdom with gentle energetic frequencies to guide you through life crossroads, release chronic stress, and restore your natural inner radiance.
              </p>
            </div>

            <div className="pb-6 border-b border-primary/10">
              <span className="text-caption uppercase tracking-widest text-muted block mb-1">
                Body Regular • Lato 400
              </span>
              <p className="text-body-reg text-body">
                Throughout daily life, our energetic biofield absorbs emotional fatigue and environmental vibrations. Regular chakra alignment gently sweeps away stagnation and clears mental confusion.
              </p>
            </div>

            <div className="pb-6 border-b border-primary/10">
              <span className="text-caption uppercase tracking-widest text-muted block mb-1">
                Decorative Script Flourish • Great Vibes
              </span>
              <p className="font-script text-4xl text-gold">
                &ldquo;The Cards Don&apos;t Decide Your Future, They Help You See It More Clearly...&rdquo;
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
              <div>
                <span className="text-caption uppercase tracking-widest text-muted block mb-1">
                  Eyebrow Badge
                </span>
                <span className="text-eyebrow">|| श्री स्वामी समर्थ ||</span>
              </div>
              <div>
                <span className="text-caption uppercase tracking-widest text-muted block mb-1">
                  Button Label
                </span>
                <span className="text-button text-primary">Book Your Session</span>
              </div>
              <div>
                <span className="text-caption uppercase tracking-widest text-muted block mb-1">
                  Caption / Footnote
                </span>
                <span className="text-caption">Prior Booking Required • Navi Mumbai</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <DecorativeDivider variant="stars" />

      {/* 3. Button Suite */}
      <Section variant="white" spacing="md" id="buttons">
        <Container>
          <SectionHeading
            eyebrow="Interactive Elements"
            scriptFlourish="Touch & Interaction"
            title="Button Suite & Action Tokens"
            description="Engineered with tactile feedback, accessible focus rings, and high contrast."
          />

          <div className="bg-ivory/80 rounded-3xl p-6 sm:p-10 border border-primary/10 space-y-8">
            {/* Primary Buttons */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-muted mb-3 font-sans">
                Primary Button (#552878) — Sizes (sm, md, lg)
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <PrimaryButton size="sm">Primary Small</PrimaryButton>
                <PrimaryButton size="md">
                  <Sparkles className="w-4 h-4 mr-1.5" />
                  Primary Medium
                </PrimaryButton>
                <PrimaryButton size="lg">Primary Large</PrimaryButton>
                <PrimaryButton size="md" disabled>Disabled State</PrimaryButton>
              </div>
            </div>

            {/* Gold Buttons */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-muted mb-3 font-sans">
                Gold Button (#D6B36A) — Celestial Actions & Bookings
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <GoldButton size="sm">Gold Small</GoldButton>
                <GoldButton size="md">
                  <Sparkles className="w-4 h-4 mr-1.5" />
                  Gold Medium
                </GoldButton>
                <GoldButton size="lg">Book 1 Hour Session</GoldButton>
              </div>
            </div>

            {/* Secondary Buttons */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-muted mb-3 font-sans">
                Secondary Button — White / Lavender Outline
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <SecondaryButton size="sm">Secondary Small</SecondaryButton>
                <SecondaryButton size="md">Explore Catalog</SecondaryButton>
                <SecondaryButton size="lg">Read Guidelines</SecondaryButton>
              </div>
            </div>

            {/* Icon Buttons */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-muted mb-3 font-sans">
                Icon Button Suite (Accessible circular targets)
              </p>
              <div className="flex items-center gap-3">
                <IconButton icon={<Sparkles className="w-4 h-4" />} aria-label="Sparkles" variant="primary" />
                <IconButton icon={<Heart className="w-4 h-4 text-rose-500" />} aria-label="Heart" variant="secondary" />
                <IconButton icon={<Moon className="w-4 h-4" />} aria-label="Moon" variant="gold" />
                <IconButton icon={<Compass className="w-4 h-4" />} aria-label="Compass" variant="ghost" />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <DecorativeDivider variant="simple" />

      {/* 4. Cards Showcase */}
      <Section variant="ivory" spacing="md" id="cards">
        <Container>
          <SectionHeading
            eyebrow="Card Components"
            scriptFlourish="Information Architecture"
            title="Service & Presentation Cards"
            description="Dynamic, content-rich cards built with light-theme glassmorphism and subtle gold borders."
          />

          {/* Service Cards (Standard & Featured) */}
          <div className="space-y-4 mb-12">
            <h3 className="font-serif text-xl font-bold text-plum">
              1. ServiceCard Component (Featured vs Standard)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ServiceCard
                service={initialServices[0]} // Tarot
                featured={true}
              />
              <ServiceCard
                service={initialServices[1]} // Reiki Facial
                featured={false}
              />
            </div>
          </div>

          {/* ServiceCardCompact */}
          <div className="space-y-4 mb-12">
            <h3 className="font-serif text-xl font-bold text-plum">
              2. ServiceCardCompact Component
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ServiceCardCompact service={initialServices[2]} />
              <ServiceCardCompact service={initialServices[3]} />
            </div>
          </div>

          {/* PricingCard */}
          <div className="space-y-4 mb-12">
            <h3 className="font-serif text-xl font-bold text-plum">
              3. PricingCard Component
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <PricingCard
                title="Tarot Card Consultation"
                price={599}
                duration="60 Minutes"
                description="Comprehensive intuitive reading covering all major life areas and personalized guidance."
                features={[
                  "Love & Relationship guidance",
                  "Career & financial trajectory",
                  "Direct answers to your questions",
                  "In-Studio or Video Call delivery",
                ]}
                popular={true}
              />
              <PricingCard
                title="Reiki Facial & Aura Cleansing"
                price={1200}
                duration="75 Minutes"
                description="Holistic facial relaxation combined with subtle electromagnetic aura purification."
                features={[
                  "Facial tension release",
                  "Negative energy cleansing",
                  "Chakra frequency alignment",
                  "Studio consultation in Ghansoli",
                ]}
                popular={false}
              />
            </div>
          </div>

          {/* TestimonialCard */}
          <div className="space-y-4 mb-12">
            <h3 className="font-serif text-xl font-bold text-plum">
              4. TestimonialCard Component
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <TestimonialCard
                testimonial={{
                  clientName: "Pooja Sharma",
                  location: "Ghansoli, Navi Mumbai",
                  serviceName: "Tarot Reading",
                  rating: 5,
                  reviewText:
                    "Deepika gave me so much clarity when I was feeling completely lost about my job switch. Her energy is so calming and truthful.",
                }}
              />
              <TestimonialCard
                testimonial={{
                  clientName: "Neha Kulkarni",
                  location: "Vashi, Navi Mumbai",
                  serviceName: "Reiki Facial",
                  rating: 5,
                  reviewText:
                    "The Reiki facial was unlike any salon treatment I have ever had. My skin looked glowing, and my racing thoughts finally calmed down.",
                }}
              />
              <TestimonialCard
                testimonial={{
                  clientName: "Ananya Iyer",
                  location: "Mumbai",
                  serviceName: "Aura Cleansing",
                  rating: 5,
                  reviewText:
                    "Felt an immediate sense of lightness after the session. Deepika is gifted and deeply compassionate.",
                }}
              />
            </div>
          </div>

          {/* CategoryCard & FeatureCard */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold text-plum">
                5. CategoryCard (Practice Pillars)
              </h3>
              <CategoryCard
                title="Tarot Intuitive Guidance"
                subtitle="Uncover what the universe wants you to know through sacred archetypes and celestial mirrors."
                count={1}
                icon={<Sparkles className="w-6 h-6" />}
                href="/services"
                variant="lavender"
              />
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold text-plum">
                6. FeatureCard (Core Transformation)
              </h3>
              <FeatureCard
                title="Emotional Equilibrium"
                description="Gently dissolve accumulated stress, grief, and anxieties held within your subtle body."
                icon={<Heart className="w-5 h-5 text-rose-500" />}
                stepNumber="01"
              />
            </div>
          </div>

          {/* BlogCard */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-plum">
              7. BlogCard Component
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
              <BlogCard
                post={{
                  slug: "how-tarot-illuminates-clarity",
                  title: "How Tarot Card Reading Illuminates Clarity, Not Fear",
                  excerpt:
                    "Discover the compassionate philosophy behind intuitive tarot: cards do not dictate fate, they reflect your highest potential and hidden strengths.",
                  category: "Tarot Wisdom",
                  readingTimeMinutes: 5,
                  publishedAt: "November 2026",
                  authorName: "Deepika",
                }}
              />
              <BlogCard
                post={{
                  slug: "understanding-reiki-energy-healing",
                  title: "A Beginner's Guide to Channeled Reiki Energy Healing",
                  excerpt:
                    "Learn how universal life-force energy works to soothe the nervous system, release tension, and harmonize chakra vortexes.",
                  category: "Energy Healing",
                  readingTimeMinutes: 6,
                  publishedAt: "November 2026",
                  authorName: "Deepika",
                }}
              />
            </div>
          </div>
        </Container>
      </Section>

      <DecorativeDivider variant="lotus" />

      {/* 5. Navigation, Forms & Interactive Feedback */}
      <Section variant="white" spacing="md" id="interactive">
        <Container>
          <SectionHeading
            eyebrow="Interactive & Feedback States"
            scriptFlourish="User Journey"
            title="Navigation, Modals, Forms & States"
            description="Fully responsive components for navigation, accordion interactions, empty states, and feedback."
          />

          {/* Breadcrumb Demo */}
          <div className="bg-ivory/80 rounded-2xl p-5 border border-primary/10 mb-8">
            <p className="text-xs font-bold uppercase tracking-wider text-muted mb-2 font-sans">
              Breadcrumb Navigation
            </p>
            <Breadcrumb
              items={[
                { label: "Healing Services", href: "/services" },
                { label: "Tarot Card Reading" },
              ]}
            />
          </div>

          {/* FAQ Accordion */}
          <div className="mb-12">
            <h3 className="font-serif text-xl font-bold text-plum text-center mb-6">
              FAQAccordion Component
            </h3>
            <FAQAccordion items={sampleFaqs} />
          </div>

          {/* Newsletter Form */}
          <div className="mb-12">
            <h3 className="font-serif text-xl font-bold text-plum text-center mb-6">
              NewsletterForm Component
            </h3>
            <NewsletterForm />
          </div>

          {/* Contact Card & Empty / Error States */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="font-serif text-xl font-bold text-plum mb-4">
                ContactCard Component
              </h3>
              <ContactCard />
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-xl font-bold text-plum mb-4">
                  EmptyState Component
                </h3>
                <EmptyState
                  title="No Scheduled Sessions"
                  description="You have no upcoming appointments reserved. Discover an experience to restore your energy."
                  actionText="Explore Services"
                  actionHref="/services"
                />
              </div>

              <div>
                <h3 className="font-serif text-xl font-bold text-plum mb-4">
                  ErrorState Component
                </h3>
                <ErrorState
                  title="Connection Rebalancing"
                  message="A minor interruption occurred. Please refresh or try again."
                  homeLink={false}
                />
              </div>
            </div>
          </div>

          {/* Loading Skeleton Demo */}
          <div className="mb-12 bg-ivory rounded-3xl p-6 border border-primary/10">
            <h3 className="font-serif text-xl font-bold text-plum mb-4">
              LoadingSkeleton Component (Card & Line Variants)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <LoadingSkeleton variant="card" count={1} />
              <div className="space-y-4 pt-4">
                <LoadingSkeleton variant="line" count={4} />
                <div className="flex items-center gap-3 pt-2">
                  <LoadingSkeleton variant="circle" />
                  <div className="flex-1">
                    <LoadingSkeleton variant="line" count={2} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modal Demo Trigger */}
          <div className="text-center p-8 bg-lavender-light/50 rounded-3xl border border-lavender/40">
            <h3 className="font-serif text-xl font-bold text-plum mb-2">
              Accessible Modal Dialog
            </h3>
            <p className="text-sm text-body/80 mb-4 font-sans">
              Click below to trigger the accessible modal overlay.
            </p>
            <PrimaryButton onClick={() => setModalOpen(true)}>
              Open Demo Modal
            </PrimaryButton>

            <Modal
              isOpen={modalOpen}
              onClose={() => setModalOpen(false)}
              title="Sacred Booking Confirmation"
              description="Review your consultation details before proceeding."
            >
              <div className="space-y-4 font-sans text-sm text-body">
                <p>
                  You are scheduling a <strong>Tarot Card Reading (60 mins)</strong> with Deepika at our Ghansoli studio sanctuary.
                </p>
                <div className="p-4 rounded-xl bg-ivory border border-primary/10 space-y-1 text-xs">
                  <p><strong>Location:</strong> Shop No. C-38, Panchvati Co-op, Sector 5, Ghansoli</p>
                  <p><strong>Session Fee:</strong> ₹599</p>
                </div>
                <div className="pt-2 flex justify-end gap-3">
                  <SecondaryButton size="sm" onClick={() => setModalOpen(false)}>
                    Close
                  </SecondaryButton>
                  <GoldButton size="sm" onClick={() => setModalOpen(false)}>
                    Confirm
                  </GoldButton>
                </div>
              </div>
            </Modal>
          </div>
        </Container>
      </Section>

      {/* 6. High-Conversion Booking CTA Banner */}
      <Section variant="ivory" spacing="md">
        <Container>
          <BookingCTA />
        </Container>
      </Section>
    </div>
  );
}
