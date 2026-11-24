import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | Inner Mirror Bliss by Deepika",
  description:
    "Review the terms, studio booking policies, appointment scheduling rules, and guidelines for Inner Mirror Bliss in Ghansoli, Navi Mumbai.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-ivory/40 min-h-screen">
      {/* Breadcrumb Bar */}
      <div className="border-b border-primary/10 bg-white/70 backdrop-blur-sm">
        <Container>
          <div className="py-3">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Terms & Conditions", href: "/terms-and-conditions" },
              ]}
            />
          </div>
        </Container>
      </div>

      <Section variant="light" spacing="lg" className="pt-12 sm:pt-16 pb-12">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Eyebrow>TRANSPARENT CLIENT AGREEMENT</Eyebrow>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-plum leading-tight">
              Terms & Conditions
            </h1>
            <p className="font-sans text-sm sm:text-base text-muted">
              Effective Date: November 24, 2026 • Inner Mirror Bliss by Deepika
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="white" spacing="lg" className="pt-0 pb-20">
        <Container>
          <div className="max-w-3xl mx-auto p-8 sm:p-12 rounded-3xl bg-white border border-primary/10 shadow-card font-sans text-body text-sm sm:text-base leading-relaxed space-y-8">
            <section className="space-y-3">
              <h2 className="font-serif text-2xl font-bold text-plum">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing this website, scheduling an appointment, or attending an in-person or online consultation with <strong>Inner Mirror Bliss by Deepika</strong>, you agree to be bound by these Terms and Conditions and our accompanying <Link href="/disclaimer" className="text-primary underline">Spiritual & Wellness Disclaimer</Link>.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl font-bold text-plum">
                2. Prior Booking & Studio Guidelines
              </h2>
              <p>
                All sessions at our Ghansoli studio or over video call require prior booking. To preserve a peaceful and safe atmosphere:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2">
                <li>Please arrive punctually at your scheduled appointment time.</li>
                <li>Please keep your mobile phone on silent during sessions to foster uninterrupted presence.</li>
                <li>We reserve the right to decline or terminate a session if a client behaves in an abusive, intoxicated, or inappropriate manner.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl font-bold text-plum">
                3. Rescheduling & Cancellation Policy
              </h2>
              <p>
                We kindly request a minimum of <strong>4 hours prior notice</strong> if you need to reschedule or cancel your appointment. This allows us to offer the time slot to other clients on our waiting list.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl font-bold text-plum">
                4. Nature of Services
              </h2>
              <p>
                Our services encompass intuitive Tarot card consultations, Reiki energy balancing, crystal therapy, and relaxation massages. These are strictly holistic, reflective, and spiritual wellness practices.
              </p>
              <p>
                They do not constitute medical, psychological, legal, or financial advice. For complete details, please review our <Link href="/disclaimer" className="text-primary underline">Disclaimer</Link>.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl font-bold text-plum">
                5. Intellectual Property
              </h2>
              <p>
                All content, brand assets, imagery, and written materials on this website are the property of Inner Mirror Bliss by Deepika and may not be reproduced without prior written permission.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl font-bold text-plum">
                6. Governing Law & Jurisdiction
              </h2>
              <p>
                These terms are governed by the laws of India. Any disputes arising in connection with our services shall be subject to the exclusive jurisdiction of the competent courts in Navi Mumbai / Thane, Maharashtra.
              </p>
            </section>
          </div>
        </Container>
      </Section>
    </div>
  );
}
