import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { siteConfig } from "@/config/site";
import { ShieldAlert, Sparkles, HeartHandshake, AlertCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Spiritual & Wellness Disclaimer | Inner Mirror Bliss",
  description:
    "Important disclaimer regarding Tarot reading and spiritual wellness practices at Inner Mirror Bliss by Deepika. Clarifying scope, ethics, and boundaries.",
  alternates: {
    canonical: "/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <div className="bg-ivory/40 min-h-screen">
      {/* Breadcrumb Bar */}
      <div className="border-b border-primary/10 bg-white/70 backdrop-blur-sm">
        <Container>
          <div className="py-3">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Disclaimer", href: "/disclaimer" },
              ]}
            />
          </div>
        </Container>
      </div>

      <Section variant="light" spacing="lg" className="pt-12 sm:pt-16 pb-12">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Eyebrow>HONESTY, ETHICS & CLARITY</Eyebrow>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-plum leading-tight">
              Spiritual & Wellness Disclaimer
            </h1>
            <p className="font-sans text-sm sm:text-base text-muted">
              Last updated: November 24, 2026 • Inner Mirror Bliss by Deepika
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="white" spacing="lg" className="pt-0 pb-20">
        <Container>
          <div className="max-w-3xl mx-auto space-y-8 font-sans">
            {/* Top Important Banner */}
            <div className="p-6 rounded-3xl bg-amber-50 border border-amber-200 flex items-start gap-3.5 text-xs sm:text-sm text-amber-900 leading-relaxed">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block font-bold mb-1">
                  Important Notice Before Scheduling
                </strong>
                Please read this disclaimer carefully before booking or attending any session with Inner Mirror Bliss. By engaging our services, you acknowledge and agree to the guidelines and ethical scope stated below.
              </div>
            </div>

            {/* PART 1: TAROT DISCLAIMER */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-primary/10 shadow-card space-y-4">
              <div className="flex items-center gap-2 text-primary">
                <Sparkles className="w-5 h-5 text-gold" />
                <span className="text-xs font-bold uppercase tracking-widest font-sans">
                  Section 1
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-plum">
                Tarot Card Reading Disclaimer
              </h2>

              <div className="text-body text-sm sm:text-base leading-relaxed space-y-4">
                <p>
                  Tarot card consultations with Deepika at Inner Mirror Bliss are intended solely for <strong>self-reflection, personal empowerment, intuitive guidance, and spiritual perspective</strong>.
                </p>

                <p>
                  <strong>No Guaranteed Future Predictions:</strong> We do not claim to predict absolute, unchangeable future events. Tarot reflects current energetic patterns and potential pathways, honoring that <strong>your free will, mindset, and conscious actions always determine your life outcomes</strong>.
                </p>

                <p>
                  <strong>Not Professional Advice:</strong> Tarot readings do not constitute, and should never be used as a substitute for, professional financial, legal, medical, psychiatric, or psychological advice. If you require specialized counsel in these domains, please consult licensed professionals.
                </p>

                <p>
                  <strong>Client Responsibility:</strong> Any decisions made or actions taken based on a tarot reading are made entirely at your own discretion and sole personal responsibility.
                </p>
              </div>
            </div>

            {/* PART 2: WELLNESS SERVICE DISCLAIMER */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-primary/10 shadow-card space-y-4">
              <div className="flex items-center gap-2 text-primary">
                <HeartHandshake className="w-5 h-5 text-primary" />
                <span className="text-xs font-bold uppercase tracking-widest font-sans">
                  Section 2
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-plum">
                Spiritual Wellness & Healing Disclaimer
              </h2>

              <div className="text-body text-sm sm:text-base leading-relaxed space-y-4">
                <p>
                  All energy and relaxation services offered at Inner Mirror Bliss—including <strong>Reiki Healing Facials, Aura Cleansing, Crystal Healing, Emotional Healing sessions, and Reiki Massages</strong>—are complementary spiritual and relaxation practices designed to promote holistic well-being, stress relief, and energetic rejuvenation.
                </p>

                <p>
                  <strong>No Medical or Dermatological Claims:</strong> These wellness experiences do not claim to diagnose, treat, prevent, or cure physical diseases, medical ailments, skin conditions, or psychiatric disorders. They are not scientifically established medical treatments.
                </p>

                <p>
                  <strong>Mental Health Care:</strong> Emotional healing consultations are gentle, non-clinical supportive containers. They do not constitute psychotherapy, clinical counseling, psychiatry, or mental health crisis intervention.
                </p>

                <p>
                  <strong>Health Consultation Recommendation:</strong> Clients with pre-existing medical conditions, pregnancy, recent surgeries, or severe skin allergies are advised to consult their medical doctor prior to receiving physical relaxation treatments.
                </p>
              </div>
            </div>

            {/* Questions Box */}
            <div className="p-6 rounded-2xl bg-lavender-light/40 border border-primary/15 text-center space-y-2 text-xs text-body">
              <p className="font-bold text-plum">Questions About Our Ethical Scope?</p>
              <p>
                Deepika is dedicated to answering any questions you may have before booking. Feel free to contact us at{" "}
                <a href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`} className="text-primary font-bold underline">
                  {siteConfig.phoneDisplay}
                </a>{" "}
                or message us on WhatsApp.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
