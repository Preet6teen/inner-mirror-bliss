import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { siteConfig, getWhatsAppBookingUrl } from "@/config/site";
import { GoldButton, PrimaryButton, SecondaryButton } from "@/components/ui/Buttons";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { initialServices } from "@/config/services";
import {
  Sparkles,
  Heart,
  Compass,
  Shield,
  CheckCircle2,
  Moon,
  Sun,
  Eye,
  Flower2,
  Calendar,
  MessageCircle,
  MapPin,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Get to Know Inner Mirror Bliss | About Deepika & Our Sanctuary",
  description:
    "Every journey towards clarity begins with a moment of reflection. Learn about Inner Mirror Bliss by Deepika, our philosophy, tarot approach, and spiritual wellness experiences in Ghansoli, Navi Mumbai.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="bg-ivory/40">
      {/* Breadcrumb Bar */}
      <div className="border-b border-primary/10 bg-white/70 backdrop-blur-sm">
        <Container>
          <div className="py-3">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
              ]}
            />
          </div>
        </Container>
      </div>

      {/* Hero Section */}
      <Section variant="light" spacing="lg" className="relative overflow-hidden pt-12 sm:pt-16 pb-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Eyebrow>HEAL • ALIGN • TRANSFORM</Eyebrow>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-plum leading-tight">
              Get to Know Inner Mirror Bliss
            </h1>
            <p className="font-script text-2xl sm:text-3xl text-gold">
              A gentle space for self-discovery & mindful reflection
            </p>
            <p className="font-sans text-lg sm:text-xl text-body/90 leading-relaxed max-w-2xl mx-auto pt-2">
              Every journey towards clarity begins with a moment of reflection.
            </p>
          </div>
        </Container>
      </Section>

      {/* SECTION 1 — ABOUT THE BRAND */}
      <Section variant="white" spacing="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative">
              <div className="relative w-full h-[400px] sm:h-[480px] rounded-3xl overflow-hidden border border-gold/30 shadow-card bg-lavender-light/40">
                <Image
                  src="/images/hero/inner-mirror-bliss-altar.webp"
                  alt="Inner Mirror Bliss sacred sanctuary space with crystals, candles, and spiritual wellness elements"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white text-center">
                  <span className="font-script text-3xl text-gold-light block">Inner Mirror Bliss</span>
                  <span className="text-xs uppercase tracking-widest font-sans font-bold">
                    Ghansoli, Navi Mumbai
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6 font-sans">
              <Eyebrow>1. ABOUT THE BRAND</Eyebrow>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-plum leading-snug">
                A Sanctuary for Stillness and Clarity in Navi Mumbai
              </h2>
              <p className="text-body text-base sm:text-lg leading-relaxed">
                Modern life moves at an exhilarating yet exhausting speed. Between personal responsibilities, professional demands, and internal doubts, finding space to listen to your authentic inner self can feel nearly impossible.
              </p>
              <p className="text-body text-base leading-relaxed">
                <strong>Inner Mirror Bliss by Deepika</strong> was created to serve as that quiet refuge. Located at Sector 5, Ghansoli, our studio offers a gentle, judgment-free haven where individuals can step away from daily noise, explore their questions through intuitive tarot readings, and restore their energetic equilibrium through personalized wellness sessions.
              </p>
              <div className="pt-2 flex items-center gap-3 text-sm font-semibold text-primary">
                <div className="w-8 h-8 rounded-full bg-lavender-light flex items-center justify-center text-primary">
                  <Sparkles className="w-4 h-4 text-gold" />
                </div>
                <span>{siteConfig.sacredInvocation} — Dedicated to uplifting every seeker</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 2 & 3 — MEET DEEPIKA & HER JOURNEY */}
      <Section variant="light" spacing="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 font-sans order-2 lg:order-1">
              <Eyebrow>2. MEET DEEPIKA & 3. HER JOURNEY</Eyebrow>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-plum leading-snug">
                Your Intuitive Host and Spiritual Companion
              </h2>
              <p className="text-body text-base sm:text-lg leading-relaxed">
                Deepika is the heart and founder of Inner Mirror Bliss. As an intuitive tarot reader and spiritual wellness practitioner, she approaches every consultation with deep compassion, patience, and a grounded perspective.
              </p>
              <div className="space-y-4 text-body text-base leading-relaxed">
                <p>
                  Her journey with tarot and energy practices grew from a lifelong fascination with how human emotions, subconscious patterns, and subtle energies interact. Recognizing that many people seek spiritual guidance but feel intimidated by rigid, fear-based predictions, Deepika sought to create a practice rooted in warmth, empathy, and practical empowerment.
                </p>
                <p>
                  Today, Deepika works closely with clients seeking clarity across love, career, family, and personal growth. She sees her role not as a teller of absolute futures, but as an intuitive companion holding a clear mirror to your own inherent wisdom.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-primary/10 shadow-soft">
                <p className="font-script text-2xl text-gold mb-1">Deepika’s Message</p>
                <blockquote className="font-serif italic text-plum text-base sm:text-lg">
                  &ldquo;When you sit with me, you are not stepping into a realm of superstition. You are entering a peaceful room where your thoughts, fears, and hopes are honored with absolute care.&rdquo;
                </blockquote>
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="relative w-full h-[450px] sm:h-[520px] rounded-3xl overflow-hidden border-2 border-gold/40 shadow-card bg-white">
                <Image
                  src="/images/services/tarot-reading-session.webp"
                  alt="Deepika in her Ghansoli spiritual studio arranging tarot cards with crystals"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-center text-white">
                  <h3 className="font-serif text-2xl font-bold">Deepika</h3>
                  <p className="text-xs uppercase tracking-widest text-gold-light font-sans font-semibold">
                    Founder & Intuitive Reader
                  </p>
                  <p className="text-xs text-white/80 font-sans mt-1">
                    Inner Mirror Bliss • Navi Mumbai
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 4 — PHILOSOPHY AND APPROACH */}
      <Section variant="white" spacing="lg">
        <Container>
          <SectionHeading
            eyebrow="4. PHILOSOPHY & VALUES"
            title="The Principles That Guide Inner Mirror Bliss"
            subtitle="Our work is built on transparency, respect for your free will, and unwavering ethical responsibility."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-8 rounded-3xl bg-ivory border border-primary/10 shadow-soft text-center space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-lavender-light mx-auto flex items-center justify-center text-primary">
                <Compass className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-plum">Empathy & Respect</h3>
              <p className="font-sans text-body text-sm leading-relaxed">
                There are no silly questions or judged life choices. You are welcomed exactly as you are, with your unique background and perspective honored.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-ivory border border-primary/10 shadow-soft text-center space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-lavender-light mx-auto flex items-center justify-center text-primary">
                <Shield className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-plum">Absolute Privacy</h3>
              <p className="font-sans text-body text-sm leading-relaxed">
                Everything shared during readings or wellness sessions is held in strict personal confidence. Your sanctuary is sacred and secure.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-ivory border border-primary/10 shadow-soft text-center space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-lavender-light mx-auto flex items-center justify-center text-primary">
                <Sun className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-plum">Grounded Empowerment</h3>
              <p className="font-sans text-body text-sm leading-relaxed">
                We do not create dependency or fatalism. We encourage you to leave with actionable insights, restored self-confidence, and peace of mind.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 5 — TAROT READING APPROACH */}
      <Section variant="light" spacing="lg">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <Eyebrow>5. TAROT READING APPROACH</Eyebrow>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-plum">
                Tarot as a Sacred Mirror, Not a Fearful Crystal Ball
              </h2>
              <p className="font-script text-2xl text-gold">
                {siteConfig.quote}
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-primary/10 shadow-card space-y-6 font-sans">
              <p className="text-body text-base sm:text-lg leading-relaxed">
                Many portrayals of tarot focus on sensational predictions of doom or guaranteed fate. At Inner Mirror Bliss, our approach is intentionally different:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-plum text-base">Intuitive Dialogue</h3>
                    <p className="text-xs text-muted leading-relaxed mt-1">
                      A collaborative 60-minute exploration where your questions guide the spreads and interpretations.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-plum text-base">Honoring Free Will</h3>
                    <p className="text-xs text-muted leading-relaxed mt-1">
                      Cards highlight currents and subconscious patterns; your daily choices shape what happens next.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-plum text-base">Practical Relevance</h3>
                    <p className="text-xs text-muted leading-relaxed mt-1">
                      Actionable perspectives for relationships, job transitions, and personal emotional boundaries.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-plum text-base">No Medical or Legal Claims</h3>
                    <p className="text-xs text-muted leading-relaxed mt-1">
                      We strictly observe professional boundaries and refer clients to licensed experts when appropriate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 6 — SPIRITUAL WELLNESS SERVICES */}
      <Section variant="white" spacing="lg">
        <Container>
          <SectionHeading
            eyebrow="6. SPIRITUAL WELLNESS SERVICES"
            title="Comprehensive Restorative Offerings"
            subtitle="From gentle reiki facials to crystal chakra harmonization and aura cleansing, explore our complete sanctuary menu."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {initialServices.slice(0, 4).map((service) => (
              <div
                key={service.id}
                className="p-6 rounded-3xl bg-ivory/60 border border-primary/10 shadow-soft hover:shadow-card transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                    {service.displayCategory}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-plum">
                    {service.title}
                  </h3>
                  <p className="text-xs text-body leading-relaxed line-clamp-3 font-sans">
                    {service.shortDescription}
                  </p>
                </div>
                <div className="pt-6 border-t border-primary/10 mt-6 flex items-center justify-between">
                  <span className="font-serif text-xl font-bold text-plum">
                    ₹{service.price}
                  </span>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-xs font-bold text-primary hover:text-plum inline-flex items-center gap-1 font-sans"
                  >
                    Details <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <PrimaryButton href="/services" size="lg">
              View All 8 Offerings & Full Menu
              <ArrowRight className="w-4 h-4 ml-2" />
            </PrimaryButton>
          </div>
        </Container>
      </Section>

      {/* SECTION 7 — WHY CLIENTS CHOOSE INNER MIRROR BLISS */}
      <Section variant="light" spacing="lg">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            <SectionHeading
              eyebrow="7. WHY CLIENTS CHOOSE US"
              title="A Personal, Heartfelt Experience"
              subtitle="What makes a visit to Inner Mirror Bliss a refreshing departure from ordinary consultations."
              align="center"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="p-6 rounded-2xl bg-white border border-primary/10 shadow-soft flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-lavender-light flex items-center justify-center shrink-0 text-primary">
                  <Heart className="w-5 h-5 text-rose-500" />
                </div>
                <div className="space-y-1 font-sans">
                  <h3 className="font-serif font-bold text-plum text-lg">One-on-One Dedicated Attention</h3>
                  <p className="text-xs text-muted leading-relaxed">
                    We never double-book or rush sessions. Your scheduled time is entirely yours to unwind and reflect.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-primary/10 shadow-soft flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-lavender-light flex items-center justify-center shrink-0 text-primary">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div className="space-y-1 font-sans">
                  <h3 className="font-serif font-bold text-plum text-lg">Peaceful Studio in Ghansoli</h3>
                  <p className="text-xs text-muted leading-relaxed">
                    Conveniently located near Panchvati Bus Stop, Sector 5, Navi Mumbai with dedicated spiritual ambiance.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-primary/10 shadow-soft flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-lavender-light flex items-center justify-center shrink-0 text-primary">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <div className="space-y-1 font-sans">
                  <h3 className="font-serif font-bold text-plum text-lg">Online or In-Person Flexibility</h3>
                  <p className="text-xs text-muted leading-relaxed">
                    Join us in person or connect from anywhere across India via private, high-quality video call.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-primary/10 shadow-soft flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-lavender-light flex items-center justify-center shrink-0 text-primary">
                  <Sparkles className="w-5 h-5 text-gold" />
                </div>
                <div className="space-y-1 font-sans">
                  <h3 className="font-serif font-bold text-plum text-lg">Fair & Transparent Pricing</h3>
                  <p className="text-xs text-muted leading-relaxed">
                    Clear upfront pricing starting from ₹300, with no hidden upselling or fear-based pressure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 8 — BOOKING CTA */}
      <BookingCTA
        title="Ready to Begin Your Reflection?"
        subtitle="Schedule a private 60-minute tarot consultation or restorative wellness experience with Deepika today."
      />
    </div>
  );
}
