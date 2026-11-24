import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { initialServices } from "@/config/services";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { ServicesClient } from "./ServicesClient";

export const metadata: Metadata = {
  title: "Explore Our Services | Tarot & Spiritual Wellness in Ghansoli",
  description:
    "Discover tarot readings and spiritual wellness experiences designed around your personal journey. Explore Tarot Reading (₹599), Reiki Facials, Aura Cleansing, and more by Deepika in Navi Mumbai.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="bg-ivory/40 min-h-screen">
      {/* Breadcrumb Bar */}
      <div className="border-b border-primary/10 bg-white/70 backdrop-blur-sm">
        <Container>
          <div className="py-3">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
              ]}
            />
          </div>
        </Container>
      </div>

      {/* Hero Section */}
      <Section variant="light" spacing="lg" className="pt-12 sm:pt-16 pb-12">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Eyebrow>OUR SACRED EXPERIENCES</Eyebrow>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-plum leading-tight">
              Explore Our Services
            </h1>
            <p className="font-sans text-lg sm:text-xl text-body/90 leading-relaxed max-w-2xl mx-auto">
              Discover tarot readings and spiritual wellness experiences designed around your personal journey.
            </p>
          </div>
        </Container>
      </Section>

      {/* Services Grid with Interactive Filtering */}
      <Section variant="white" spacing="lg" className="pt-0">
        <Container>
          <ServicesClient initialServices={initialServices} />
        </Container>
      </Section>

      {/* Booking CTA */}
      <BookingCTA
        title="Find the Experience That Resonates With You"
        subtitle="Prior booking is required to ensure personal attention and a dedicated peaceful atmosphere for every guest."
      />
    </div>
  );
}
