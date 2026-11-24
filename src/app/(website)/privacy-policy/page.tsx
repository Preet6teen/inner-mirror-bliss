import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { siteConfig } from "@/config/site";
import { ShieldCheck, Lock, Eye, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Inner Mirror Bliss by Deepika",
  description:
    "Read the Privacy Policy of Inner Mirror Bliss. Learn how we collect, protect, and respect your personal information and session confidentiality.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-ivory/40 min-h-screen">
      {/* Breadcrumb Bar */}
      <div className="border-b border-primary/10 bg-white/70 backdrop-blur-sm">
        <Container>
          <div className="py-3">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Privacy Policy", href: "/privacy-policy" },
              ]}
            />
          </div>
        </Container>
      </div>

      <Section variant="light" spacing="lg" className="pt-12 sm:pt-16 pb-12">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Eyebrow>YOUR TRUST & SECURITY</Eyebrow>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-plum leading-tight">
              Privacy Policy
            </h1>
            <p className="font-sans text-sm sm:text-base text-muted">
              Last updated: November 24, 2026 • Inner Mirror Bliss by Deepika
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="white" spacing="lg" className="pt-0 pb-20">
        <Container>
          <div className="max-w-3xl mx-auto p-8 sm:p-12 rounded-3xl bg-white border border-primary/10 shadow-card font-sans text-body text-sm sm:text-base leading-relaxed space-y-8">
            <div className="p-4 rounded-2xl bg-lavender-light/50 border border-primary/10 flex items-start gap-3 text-xs text-plum font-medium">
              <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span>
                At Inner Mirror Bliss, your privacy and personal trust are sacred. We treat your personal details and session dialogues with the highest ethical confidentiality.
              </span>
            </div>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl font-bold text-plum">
                1. Information We Collect
              </h2>
              <p>
                When you book an appointment, submit an inquiry form, or contact us via WhatsApp or phone, we collect only the information necessary to provide our services:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2">
                <li>Your full name and preferred mode of address.</li>
                <li>Contact information: mobile phone/WhatsApp number and email address.</li>
                <li>Appointment preferences: preferred date, time, and service selection.</li>
                <li>Any voluntary notes or context you provide regarding your session.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl font-bold text-plum">
                2. Strict Confidentiality of Consultations
              </h2>
              <p>
                All conversations, inquiries, personal questions, and card interpretations during your Tarot readings or spiritual wellness appointments are <strong>strictly confidential</strong>.
              </p>
              <p>
                Deepika does not disclose, share, publish, or discuss your private circumstances with any third parties under any circumstances, except where explicitly required by law.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl font-bold text-plum">
                3. How We Use Your Information
              </h2>
              <p>Your details are used solely to:</p>
              <ul className="list-disc list-inside space-y-1.5 pl-2">
                <li>Confirm and manage your appointment schedule.</li>
                <li>Send appointment reminders and address directions.</li>
                <li>Respond to inquiries submitted via our contact forms.</li>
              </ul>
              <p>
                We do not sell, rent, or trade your contact details to third-party advertisers or data brokers. We do not send unsolicited promotional marketing messages.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl font-bold text-plum">
                4. Data Security & Storage
              </h2>
              <p>
                We employ standard modern security protocols to protect data transmitted through our website. In-person records, if any, are kept securely and accessed only by Deepika.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl font-bold text-plum">
                5. Contact Regarding Your Privacy
              </h2>
              <p>
                If you have questions about this Privacy Policy or wish to have your contact details updated or removed from our appointment records, please reach out to:
              </p>
              <div className="p-4 rounded-xl bg-ivory border border-primary/10 text-xs space-y-1">
                <p><strong>Inner Mirror Bliss by Deepika</strong></p>
                <p>Panchvati Co-op Society, Shop No. C-38, Sector 5, Ghansoli, Navi Mumbai - 400701</p>
                <p>Phone: +91 9987969557 • Email: innermirrorbliss@gmail.com</p>
              </div>
            </section>
          </div>
        </Container>
      </Section>
    </div>
  );
}
