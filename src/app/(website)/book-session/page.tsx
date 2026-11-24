import { Suspense } from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { initialServices } from "@/config/services";
import { BookingClient } from "./BookingClient";
import { LoadingSkeleton } from "@/components/ui/LoadingSkeleton";

export const metadata: Metadata = {
  title: "Book a Session | Tarot & Spiritual Wellness in Ghansoli, Navi Mumbai",
  description:
    "Schedule your one-on-one Tarot card reading, Reiki healing facial, or spiritual wellness consultation with Deepika at Inner Mirror Bliss.",
  alternates: {
    canonical: "/book-session",
  },
};

export default function BookSessionPage() {
  return (
    <div className="bg-ivory/40 min-h-screen">
      {/* Breadcrumb Bar */}
      <div className="border-b border-primary/10 bg-white/70 backdrop-blur-sm">
        <Container>
          <div className="py-3">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Book a Session", href: "/book-session" },
              ]}
            />
          </div>
        </Container>
      </div>

      {/* Hero Header */}
      <Section variant="light" spacing="lg" className="pt-12 sm:pt-16 pb-12">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Eyebrow>SCHEDULE YOUR SACRED APPOINTMENT</Eyebrow>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-plum leading-tight">
              Book Your Session
            </h1>
            <p className="font-sans text-lg sm:text-xl text-body/90 leading-relaxed max-w-2xl mx-auto">
              A gentle moment of stillness, clarity, and personal alignment. Choose to visit our Ghansoli studio in Navi Mumbai or connect online via video call.
            </p>
          </div>
        </Container>
      </Section>

      {/* Interactive Booking Experience */}
      <Section variant="white" spacing="lg" className="pt-0 pb-20">
        <Container>
          <Suspense
            fallback={
              <div className="max-w-4xl mx-auto py-12">
                <LoadingSkeleton variant="card" count={3} />
              </div>
            }
          >
            <BookingClient services={initialServices} />
          </Suspense>
        </Container>
      </Section>
    </div>
  );
}
