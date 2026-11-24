import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { initialServices, getServiceBySlug, getRelatedServices } from "@/config/services";
import { formatINR, formatDuration } from "@/lib/utils";
import {
  Clock,
  Check,
  Sparkles,
  MapPin,
  Calendar,
  MessageCircle,
  Heart,
  ShieldAlert,
  ArrowRight,
  HelpCircle,
  Compass,
  Layers,
  ChevronRight,
  Flower2,
} from "lucide-react";
import { GoldButton, PrimaryButton } from "@/components/ui/Buttons";
import { getWhatsAppBookingUrl, siteConfig } from "@/config/site";
import { BookingCTA } from "@/components/sections/BookingCTA";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return initialServices.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: `${service.title} (${formatINR(service.price)}) | Inner Mirror Bliss Navi Mumbai`,
    description: service.shortDescription,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | Inner Mirror Bliss`,
      description: service.shortDescription,
      images: service.imageUrl ? [{ url: service.imageUrl }] : undefined,
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const isTarot = service.slug === "tarot-reading";
  const relatedServices = getRelatedServices(service.slug, 2);

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
                { label: service.title, href: `/services/${service.slug}` },
              ]}
            />
          </div>
        </Container>
      </div>

      {/* Hero Header */}
      <Section variant="light" spacing="lg" className="pt-10 sm:pt-14 pb-10">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-lavender-light text-primary text-xs font-bold uppercase tracking-wider font-sans">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              {service.displayCategory}
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-plum leading-tight">
              {service.heroHeading || service.title}
            </h1>

            {service.heroSubtitle && (
              <p className="font-sans text-base sm:text-xl text-body/90 leading-relaxed max-w-2xl mx-auto">
                {service.heroSubtitle}
              </p>
            )}

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs sm:text-sm font-sans font-medium text-plum/80">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-primary/10">
                <Clock className="w-4 h-4 text-gold" />
                {formatDuration(service.durationMinutes)}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-primary/10 font-bold text-primary">
                {formatINR(service.price)}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-primary/10">
                <MapPin className="w-4 h-4 text-gold" />
                Sector 5, Ghansoli & Online
              </span>
            </div>
          </div>
        </Container>
      </Section>

      {/* Main Content & Sticky Sidebar */}
      <Section variant="white" spacing="lg" className="pt-0 pb-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Content Column (8 cols) */}
            <div className="lg:col-span-8 space-y-12">
              {/* Featured Image */}
              {service.imageUrl && (
                <div className="relative w-full h-[320px] sm:h-[440px] rounded-3xl overflow-hidden border border-primary/10 shadow-card bg-lavender-light/40">
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 65vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-plum/40 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white font-sans">
                    <span className="text-xs uppercase tracking-widest text-gold-light font-bold block">
                      {siteConfig.name}
                    </span>
                    <span className="font-serif text-xl sm:text-2xl font-bold">
                      {service.title}
                    </span>
                  </div>
                </div>
              )}

              {/* SECTION 1: Service Introduction */}
              <div className="space-y-4">
                <Eyebrow>1. INTRODUCTION & OVERVIEW</Eyebrow>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-plum">
                  About {service.title}
                </h2>
                <div className="prose prose-plum max-w-none text-body font-sans text-base sm:text-lg leading-relaxed space-y-4">
                  <p>{service.fullDescription}</p>
                </div>
              </div>

              {/* SECTION 2: What Is the Session Experience? */}
              {service.whatToExpect && service.whatToExpect.length > 0 && (
                <div className="p-8 rounded-3xl bg-ivory border border-primary/10 shadow-soft space-y-5 font-sans">
                  <div className="flex items-center gap-2">
                    <Flower2 className="w-5 h-5 text-gold" />
                    <h2 className="font-serif text-2xl font-bold text-plum">
                      What to Expect During Your Session
                    </h2>
                  </div>
                  <ul className="space-y-3">
                    {service.whatToExpect.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-body">
                        <span className="w-5 h-5 rounded-full bg-lavender-light text-primary flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                          ✓
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* BESPOKE SECTIONS FOR TAROT READING (Topics 4-9) */}
              {isTarot && service.topics && (
                <div className="space-y-8">
                  <div className="space-y-2">
                    <Eyebrow>TOPICS YOU CAN EXPLORE</Eyebrow>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-plum">
                      Areas of Guidance & Clarification
                    </h2>
                    <p className="text-sm font-sans text-muted">
                      A dedicated 60-minute reading provides generous space to explore multiple aspects of your life.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {service.topics.map((topic, idx) => (
                      <div
                        key={idx}
                        className="p-6 rounded-2xl bg-white border border-primary/10 shadow-soft space-y-3 font-sans hover:shadow-card transition-all"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-primary font-mono">
                            0{idx + 4}.
                          </span>
                          <span className="text-[11px] font-bold text-gold uppercase tracking-wider">
                            Life Theme
                          </span>
                        </div>
                        <h3 className="font-serif text-xl font-bold text-plum">
                          {topic.title}
                        </h3>
                        <p className="text-xs text-body leading-relaxed">
                          {topic.description}
                        </p>
                        {topic.questions && topic.questions.length > 0 && (
                          <div className="pt-2 border-t border-primary/5 space-y-1">
                            <span className="text-[11px] font-semibold text-muted block">
                              Example Questions:
                            </span>
                            <ul className="text-xs text-body/80 space-y-1 italic">
                              {topic.questions.map((q, qIdx) => (
                                <li key={qIdx} className="leading-snug">
                                  &ldquo;{q}&rdquo;
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* General Highlights / Benefits */}
              {service.benefits && service.benefits.length > 0 && (
                <div className="p-8 rounded-3xl bg-white border border-primary/10 shadow-card space-y-5">
                  <h2 className="font-serif text-2xl font-bold text-plum flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-gold" />
                    Key Focus Areas & Benefits
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    {service.benefits.map((benefit, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-3.5 rounded-xl bg-ivory/60 border border-primary/5 text-sm text-plum font-sans font-medium"
                      >
                        <span className="w-5 h-5 rounded-full bg-lavender-light text-primary flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3" />
                        </span>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SECTION: Session Process Steps */}
              {service.sessionProcess && service.sessionProcess.length > 0 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Eyebrow>HOW YOUR SESSION UNFOLDS</Eyebrow>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-plum">
                      The Step-by-Step Experience
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 gap-4 font-sans">
                    {service.sessionProcess.map((step) => (
                      <div
                        key={step.step}
                        className="p-5 rounded-2xl bg-white border border-primary/10 shadow-soft flex items-start gap-4"
                      >
                        <div className="w-8 h-8 rounded-full bg-lavender-light text-primary flex items-center justify-center shrink-0 font-bold text-sm">
                          {step.step}
                        </div>
                        <div className="space-y-1">
                          <h3 className="font-serif text-lg font-bold text-plum">
                            {step.title}
                          </h3>
                          <p className="text-sm text-body leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Ethical Disclaimer Callout */}
              {service.ethicalDisclaimer && (
                <div className="p-6 rounded-2xl bg-lavender-light/40 border border-primary/15 flex items-start gap-3.5 text-xs text-body leading-relaxed font-sans">
                  <ShieldAlert className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-serif text-plum text-sm mb-1 font-bold">
                      Ethical Practice & Wellness Notice
                    </strong>
                    <p>{service.ethicalDisclaimer}</p>
                  </div>
                </div>
              )}

              {/* Service Specific FAQs */}
              {service.faqs && service.faqs.length > 0 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Eyebrow>FREQUENTLY ASKED QUESTIONS</Eyebrow>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-plum">
                      Common Questions About {service.title}
                    </h2>
                  </div>

                  <div className="space-y-3 font-sans">
                    {service.faqs.map((faq, idx) => (
                      <details
                        key={idx}
                        className="group p-5 rounded-2xl bg-white border border-primary/10 shadow-soft open:border-primary/20 transition-all cursor-pointer"
                      >
                        <summary className="font-serif text-lg font-bold text-plum list-none flex items-center justify-between">
                          <span>{faq.question}</span>
                          <span className="text-primary group-open:rotate-180 transition-transform text-xl">
                            ↓
                          </span>
                        </summary>
                        <p className="mt-3 text-sm text-body leading-relaxed pt-2 border-t border-primary/5">
                          {faq.answer}
                        </p>
                      </details>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Services */}
              <div className="pt-6 border-t border-primary/10 space-y-6">
                <div className="space-y-1">
                  <Eyebrow>COMPLEMENTARY SESSIONS</Eyebrow>
                  <h3 className="font-serif text-2xl font-bold text-plum">
                    You May Also Resonate With
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {relatedServices.map((rel) => (
                    <Link
                      key={rel.id}
                      href={`/services/${rel.slug}`}
                      className="group p-4 rounded-2xl bg-white border border-primary/10 shadow-soft hover:shadow-card hover:border-primary/30 transition-all block"
                    >
                      <span className="text-[10px] font-bold uppercase tracking-wider text-primary block mb-1">
                        {rel.displayCategory}
                      </span>
                      <h4 className="font-serif text-base font-bold text-plum group-hover:text-primary transition-colors">
                        {rel.title}
                      </h4>
                      <p className="text-xs text-muted font-serif font-bold mt-2">
                        {formatINR(rel.price)}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sticky Booking Sidebar (4 cols) */}
            <div className="lg:col-span-4 sticky top-28 space-y-6">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-gold/40 shadow-card space-y-6">
                <div className="border-b border-primary/10 pb-6 space-y-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold text-plum text-[11px] font-bold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-plum" />
                    Session Details
                  </span>
                  <div className="flex items-baseline gap-2 pt-2">
                    <span className="font-serif text-4xl sm:text-5xl font-bold text-plum">
                      {formatINR(service.price)}
                    </span>
                    <span className="text-sm text-muted font-sans font-medium">
                      / {formatDuration(service.durationMinutes)}
                    </span>
                  </div>
                  <p className="text-xs text-primary font-medium">
                    Personal Attention • Prior Booking Required
                  </p>
                </div>

                <div className="space-y-3 font-sans">
                  <GoldButton
                    href={`/book-session?service=${service.slug}`}
                    size="lg"
                    className="w-full shadow-gold justify-center text-center"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Book This Experience
                  </GoldButton>

                  <a
                    href={getWhatsAppBookingUrl(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-sans font-bold text-sm tracking-wide shadow-sm transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Inquire on WhatsApp
                  </a>
                </div>

                <div className="pt-4 border-t border-primary/10 space-y-3 text-xs text-body/80 font-sans">
                  <p className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <span>Panchvati Co-op Society, Sector 5, Ghansoli, Navi Mumbai</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gold shrink-0" />
                    <span>Mon - Sun: 10:00 AM - 8:00 PM</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-primary shrink-0" />
                    <span>100% Confidential & Respectful</span>
                  </p>
                </div>
              </div>

              {/* Direct Call Quick Assistance */}
              <div className="p-5 rounded-2xl bg-lavender-light/50 border border-primary/10 text-center space-y-2 font-sans">
                <p className="text-xs text-muted font-medium">Prefer speaking directly?</p>
                <a
                  href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
                  className="font-serif font-bold text-plum hover:text-primary transition-colors text-base block"
                >
                  {siteConfig.phoneDisplay}
                </a>
                <p className="text-[11px] text-muted">Deepika is happy to answer your questions</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Global Booking CTA */}
      <BookingCTA
        title="Schedule Your Session With Deepika"
        subtitle="Book online in minutes or message us on WhatsApp for flexible timings and inquiries."
      />
    </div>
  );
}
