import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PrimaryButton, SecondaryButton, GoldButton } from "@/components/ui/Buttons";
import { ServiceCard } from "@/components/services/ServiceCard";
import { DecorativeDivider } from "@/components/ui/DecorativeDivider";
import { FloatingDecoration } from "@/components/animations/FloatingDecoration";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { TestimonialCarousel } from "@/components/testimonials/TestimonialCarousel";
import { ContactCard } from "@/components/ui/ContactCard";
import { siteConfig, getWhatsAppBookingUrl } from "@/config/site";
import { initialServices } from "@/config/services";
import { formatINR } from "@/lib/utils";
import {
  Sparkles,
  ArrowRight,
  Heart,
  Compass,
  Moon,
  Sun,
  Shield,
  Clock,
  MapPin,
  Phone,
  MessageCircle,
  Check,
  Star,
  Calendar,
  Layers,
  Smile,
  Instagram,
  Eye,
  Lock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Inner Mirror Bliss by Deepika | Tarot Reading & Spiritual Wellness Navi Mumbai",
  description:
    "Discover your inner wisdom with Deepika at Inner Mirror Bliss. Intuitive Tarot Card Readings (₹599), Reiki Healing Facial, Aura Cleansing, and Crystal Therapy in Ghansoli, Navi Mumbai.",
};

export default function HomePage() {
  // Section 6: Tarot Categories
  const tarotCategories = [
    {
      title: "Love & Relationships",
      description: "Gain compassionate insight into romantic dynamics, soulmate connections, mutual intentions, and emotional alignment.",
      icon: <Heart className="w-5 h-5 text-rose-500" />,
    },
    {
      title: "Career & Job Guidance",
      description: "Navigate workplace crossroads, career transitions, upcoming opportunities, and professional fulfillment.",
      icon: <Compass className="w-5 h-5 text-primary" />,
    },
    {
      title: "Finance & Money Flow",
      description: "Uncover energetic blocks around abundance, material security, and mindful financial decision-making.",
      icon: <Sparkles className="w-5 h-5 text-gold" />,
    },
    {
      title: "Personal Growth",
      description: "Deepen self-awareness, awaken inner confidence, and identify subconscious patterns holding you back.",
      icon: <Sun className="w-5 h-5 text-amber-500" />,
    },
    {
      title: "Health & Well-being",
      description: "Reflect upon emotional vitality, chronic fatigue patterns, and restoring mind-body-spirit equilibrium.",
      icon: <Moon className="w-5 h-5 text-indigo-500" />,
    },
    {
      title: "Family & Life Situation",
      description: "Understand complex household relationships, parental transitions, and creating harmony at home.",
      icon: <Smile className="w-5 h-5 text-emerald-500" />,
    },
    {
      title: "Answers to Your Questions",
      description: "Bring your specific life queries for thoughtful, direct intuitive exploration and grounded reflection.",
      icon: <Eye className="w-5 h-5 text-purple-600" />,
    },
    {
      title: "Future Guidance",
      description: "Explore the natural trajectory of your path and empower yourself to shape your destiny with clarity.",
      icon: <Star className="w-5 h-5 text-gold-dark" />,
    },
  ];

  // Section 7: Why Choose Us Cards
  const whyChooseUs = [
    {
      title: "Personal Attention",
      description: "Every consultation is strictly 1-on-1, ensuring undivided presence, gentle pacing, and empathetic care.",
      icon: <Heart className="w-6 h-6 text-primary" />,
    },
    {
      title: "Welcoming Environment",
      description: "A serene, peaceful, and judgment-free sanctuary where you can speak openly and breathe with ease.",
      icon: <Smile className="w-6 h-6 text-primary" />,
    },
    {
      title: "Multiple Wellness Experiences",
      description: "From intuitive Tarot to Reiki facials and crystal chakra alignment, select the modalities that resonate with you.",
      icon: <Layers className="w-6 h-6 text-primary" />,
    },
    {
      title: "Clear Session Information",
      description: "Transparent pricing, explicit session durations, and honest explanations of what to expect without hidden fees.",
      icon: <Sparkles className="w-6 h-6 text-primary" />,
    },
    {
      title: "Prior Booking",
      description: "We protect your dedicated time without rushed overlaps or noisy walk-in interruptions.",
      icon: <Calendar className="w-6 h-6 text-primary" />,
    },
    {
      title: "Respect for Client Privacy",
      description: "All questions, reflections, and personal details remain sacredly confidential and protected.",
      icon: <Lock className="w-6 h-6 text-primary" />,
    },
  ];

  // Section 8: How It Works Steps
  const howItWorksSteps = [
    {
      step: "01",
      title: "Choose Your Service",
      description: "Browse our 8 healing experiences, from a 60-minute Tarot consultation to restorative Reiki facials.",
      icon: <Compass className="w-5 h-5 text-primary" />,
    },
    {
      step: "02",
      title: "Book Your Appointment",
      description: "Reserve your preferred date and time online or via WhatsApp. Prior booking ensures your private slot.",
      icon: <Calendar className="w-5 h-5 text-primary" />,
    },
    {
      step: "03",
      title: "Attend Your Session",
      description: "Join Deepika at our peaceful Ghansoli studio sanctuary or connect comfortably via private online video.",
      icon: <Heart className="w-5 h-5 text-primary" />,
    },
    {
      step: "04",
      title: "Reflect & Move Forward",
      description: "Integrate fresh clarity, emotional release, and positive momentum into your daily life with renewed confidence.",
      icon: <Sparkles className="w-5 h-5 text-gold" />,
    },
  ];

  // Section 12: Genuine Testimonials
  const testimonialsData = [
    {
      id: "1",
      clientName: "Pooja Sharma",
      location: "Ghansoli, Navi Mumbai",
      serviceName: "Tarot Card Reading",
      rating: 5,
      reviewText:
        "Deepika provided such grounding clarity when I was facing an overwhelming career decision. Her reading felt like holding up a truthful, gentle mirror. Highly recommend booking a 1-hour session!",
    },
    {
      id: "2",
      clientName: "Sneha Patel",
      location: "Vashi, Navi Mumbai",
      serviceName: "Reiki Healing Facial",
      rating: 5,
      reviewText:
        "The Reiki Healing Facial was the most deeply relaxing experience I have had in years. My skin felt glowing and radiant, and the mental tension I was carrying in my forehead simply vanished.",
    },
    {
      id: "3",
      clientName: "Rohan Deshmukh",
      location: "Kopar Khairane, Navi Mumbai",
      serviceName: "Aura Cleansing",
      rating: 5,
      reviewText:
        "I was feeling heavy and energetically drained for weeks. After Deepika's aura cleansing session, I walked out feeling genuinely lighter and with a clear, peaceful mindset.",
    },
  ];

  // Section 13: Instagram Gallery Images
  const instagramGallery = [
    {
      src: "/images/hero/inner-mirror-hero.webp",
      alt: "Tarot cards with gold edges, raw amethyst, and ivory candles",
    },
    {
      src: "/images/services/tarot-reading-session.webp",
      alt: "Realistic tarot consultation table with celestial cards",
    },
    {
      src: "/images/services/crystal-healing-amethyst.webp",
      alt: "Natural amethyst and quartz healing gemstones on linen",
    },
    {
      src: "/images/services/aura-cleansing.webp",
      alt: "Serene sacred smoke and singing bowl atmosphere",
    },
    {
      src: "/images/services/reiki-healing-facial.webp",
      alt: "Reiki facial relaxation setting with jade roller and botanicals",
    },
    {
      src: "/images/services/angel-card-reading.webp",
      alt: "Golden celestial feather and white garden roses",
    },
  ];

  // Section 14: FAQ Items
  const faqItems = [
    {
      question: "What is Tarot Card Reading?",
      answer:
        "Tarot card reading is an ancient intuitive tradition that uses archetypal imagery, sacred geometry, and symbolic cards to reflect your subconscious thoughts, clarify life crossroads, and provide constructive spiritual perspective on love, career, and personal growth.",
    },
    {
      question: "How long is a tarot session?",
      answer:
        "A full personal Tarot consultation with Deepika is 60 minutes long. This allows ample, unhurried time to explore your key questions, examine energetic patterns, and discuss practical guidance.",
    },
    {
      question: "How can I book an appointment?",
      answer:
        "You can schedule your session directly through our online booking page or by messaging Deepika on WhatsApp at +91 9987969557. Because we provide individual personal attention, all visits require advance reservation.",
    },
    {
      question: "Do I need to prepare anything before my reading?",
      answer:
        "No prior experience or preparation is required. Simply arrive with an open mind. If you have specific questions about love, work, or family, having them in mind helps focus the energy of your session.",
    },
    {
      question: "Can I ask about my career and finances?",
      answer:
        "Absolutely. Career transitions, workplace dynamics, business direction, and financial momentum are common focus areas explored during our tarot sessions.",
    },
    {
      question: "Are online sessions available?",
      answer:
        "Yes! While in-studio sessions are held at our Ghansoli sanctuary in Navi Mumbai, we offer private distance Tarot readings, emotional healing, and angel card consultations via secure 1-on-1 video call worldwide.",
    },
    {
      question: "Where is the studio located?",
      answer:
        "Our studio is located at Panchvati Co-op Society, Shop No. C-38, Near Panchvati Bus Stop, Sector 5, Ghansoli, Navi Mumbai - 400701, Maharashtra, India. It is easily reachable from Ghansoli railway station.",
    },
    {
      question: "How do I confirm my appointment?",
      answer:
        "Once you submit a booking request or message us on WhatsApp, Deepika will confirm your selected slot, provide studio directions or video call links, and answer any questions you may have.",
    },
    {
      question: "How is my privacy protected?",
      answer:
        "Client confidentiality is sacred at Inner Mirror Bliss. Everything shared during your reading or healing treatment remains strictly private between you and Deepika. We never disclose client identities or consultation details.",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* =================================================================== */}
      {/* SECTION 3 — HERO (Two-Column Editorial Layout)                       */}
      {/* =================================================================== */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 lg:py-28 bg-gradient-to-b from-ivory via-lavender-light/30 to-ivory">
        {/* Subtle Celestial Ambient Lights */}
        <div className="absolute top-12 left-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* LEFT COLUMN (Text 50%) */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left order-1">
              <Eyebrow icon={true} variant="primary">
                HEAL • ALIGN • TRANSFORM
              </Eyebrow>

              <h1 className="text-display-xl font-serif font-bold text-plum tracking-tight leading-[1.1]">
                Discover Your <br className="hidden sm:inline" />
                <span className="font-serif italic text-primary">Inner Wisdom.</span>
              </h1>

              <p className="text-body-reg sm:text-body-lg text-body/85 font-sans leading-relaxed max-w-xl mx-auto lg:mx-0">
                Find clarity, explore new perspectives and reconnect with yourself through tarot readings and spiritual wellness experiences.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <GoldButton href="/book-session" size="lg" className="w-full sm:w-auto shadow-gold">
                  Book Your Session
                  <ArrowRight className="w-4 h-4 ml-2" />
                </GoldButton>

                <SecondaryButton href="/services" size="lg" className="w-full sm:w-auto">
                  Explore Our Services
                </SecondaryButton>
              </div>

              {/* Supporting Text */}
              <p className="text-xs sm:text-sm font-sans font-semibold text-muted pt-2 flex items-center justify-center lg:justify-start gap-2">
                <Sparkles className="w-3.5 h-3.5 text-gold shrink-0" />
                <span>Personal Attention • Prior Booking Required</span>
              </p>
            </div>

            {/* RIGHT COLUMN (Image 50% with Floating Celestial Ornaments) */}
            <div className="lg:col-span-6 relative order-2">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Floating Celestial Stars Decoration */}
                <div className="absolute -top-6 -left-6 z-20 hidden sm:block">
                  <FloatingDecoration duration={6} yOffset={10}>
                    <div className="w-14 h-14 rounded-2xl bg-white/90 backdrop-blur-md border border-gold/40 shadow-soft flex items-center justify-center text-gold">
                      <Sparkles className="w-7 h-7" />
                    </div>
                  </FloatingDecoration>
                </div>

                <div className="absolute -bottom-6 -right-4 z-20 hidden sm:block">
                  <FloatingDecoration duration={5} yOffset={8} delay={1}>
                    <div className="px-4 py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-primary/15 shadow-card flex items-center gap-2 text-xs font-serif font-bold text-plum">
                      <Moon className="w-4 h-4 text-gold" />
                      <span>{siteConfig.sacredInvocation}</span>
                    </div>
                  </FloatingDecoration>
                </div>

                {/* Hero Image Container */}
                <div className="relative w-full h-[380px] sm:h-[480px] lg:h-[540px] rounded-4xl overflow-hidden border-2 border-gold/40 shadow-floating bg-lavender-light/50">
                  <Image
                    src="/images/hero/inner-mirror-hero.webp"
                    alt="Luxurious spiritual arrangement of tarot cards, amethyst crystals, lavender blossoms, and ivory candles"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-plum/30 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =================================================================== */}
      {/* SECTION 4 — BRAND INTRODUCTION                                     */}
      {/* =================================================================== */}
      <Section variant="white" spacing="lg" id="about-intro">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Editorial Visual */}
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              <div className="relative w-full h-[400px] sm:h-[460px] rounded-3xl overflow-hidden border border-primary/15 shadow-card bg-ivory">
                <Image
                  src="/images/services/tarot-reading-session.webp"
                  alt="Peaceful tarot reading sanctuary table at Inner Mirror Bliss"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white text-center">
                  <p className="font-serif text-lg font-bold">Inner Mirror Bliss Sanctuary</p>
                  <p className="text-xs text-lavender-light tracking-wider font-sans uppercase">Sector 5, Ghansoli</p>
                </div>
              </div>
            </div>

            {/* Right Brand Copy */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2 text-center lg:text-left">
              <Eyebrow icon={true} variant="lavender">
                A LITTLE SPACE FOR YOURSELF
              </Eyebrow>

              <h2 className="font-serif text-h1 font-bold text-plum leading-tight">
                Welcome to Inner Mirror Bliss
              </h2>

              <p className="font-serif text-xl sm:text-2xl text-primary font-medium italic">
                &ldquo;Sometimes, all we need is a moment of stillness, a little guidance and the courage to listen to our inner voice.&rdquo;
              </p>

              <p className="text-body-reg sm:text-body-lg text-body/85 font-sans leading-relaxed">
                Inner Mirror Bliss by Deepika is a welcoming space for self-discovery, spiritual exploration and personal growth through tarot readings and spiritual wellness experiences.
              </p>

              {/* Decorative Lotus */}
              <div className="py-2">
                <DecorativeDivider variant="lotus" />
              </div>

              <div>
                <PrimaryButton href="/about" size="md">
                  Learn More About Deepika
                  <ArrowRight className="w-4 h-4 ml-2" />
                </PrimaryButton>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* =================================================================== */}
      {/* SECTION 5 — SERVICES OVERVIEW (All 8 Services)                      */}
      {/* =================================================================== */}
      <Section variant="ivory" spacing="xl" id="services">
        <Container>
          <SectionHeading
            eyebrow="OUR EXPERIENCES"
            scriptFlourish="Sacred Modalities"
            title="Explore Our Services"
            description="Discover a collection of tarot and wellness experiences designed around reflection, relaxation and personal growth."
            size="large"
          />

          {/* 8 Services Grid: 2 cols desktop & tablet for spacious, editorial readability */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {initialServices.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                featured={index === 0}
              />
            ))}
          </div>

          {/* Bottom Explore All CTA */}
          <div className="mt-14 text-center">
            <SecondaryButton href="/services" size="lg">
              Explore All 8 Services in Detail
              <ArrowRight className="w-4 h-4 ml-2" />
            </SecondaryButton>
          </div>
        </Container>
      </Section>

      {/* =================================================================== */}
      {/* SECTION 6 — TAROT READING CATEGORIES                                */}
      {/* =================================================================== */}
      <Section variant="white" spacing="lg" id="tarot-categories">
        <Container>
          <SectionHeading
            eyebrow="FIND YOUR CLARITY"
            scriptFlourish="Intuitive Mirrors"
            title="What Would You Like Guidance About?"
            description="Every area of life holds energetic patterns. Bring your questions to a compassionate 1-on-1 Tarot consultation."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {tarotCategories.map((category, idx) => (
              <div
                key={idx}
                className="group p-6 rounded-3xl bg-lavender-light/50 border border-primary/10 hover:border-gold/50 hover:bg-white hover:shadow-cardHover transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-white shadow-soft flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-gold-light/40 transition-all">
                    {category.icon}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-plum group-hover:text-primary transition-colors mb-2">
                    {category.title}
                  </h3>
                  <p className="text-xs text-body/80 leading-relaxed font-sans">
                    {category.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center space-y-3">
            <GoldButton href="/services/tarot-reading" size="lg">
              Explore Tarot Reading Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </GoldButton>
            <p className="text-xs text-muted font-sans italic">
              *Tarot consultations are reflective and intuitive. We do not make guaranteed future predictions.
            </p>
          </div>
        </Container>
      </Section>

      {/* =================================================================== */}
      {/* SECTION 7 — WHY CHOOSE US                                           */}
      {/* =================================================================== */}
      <Section variant="ivory" spacing="lg">
        <Container>
          <SectionHeading
            eyebrow="OUR COMMITMENT"
            scriptFlourish="Mindful Ethics"
            title="A Welcoming Space for Your Journey"
            description="Built with authenticity, confidentiality, and respect for every seeker's individual spiritual path."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border border-primary/10 shadow-soft hover:shadow-cardHover hover:border-primary/25 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-lavender-light flex items-center justify-center mb-5">
                    {item.icon}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-plum mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-body/80 font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* =================================================================== */}
      {/* SECTION 8 — HOW IT WORKS (Connected Timeline)                       */}
      {/* =================================================================== */}
      <Section variant="white" spacing="lg">
        <Container>
          <SectionHeading
            eyebrow="EASY CONSULTATION PROCESS"
            scriptFlourish="Simple Steps"
            title="Your Journey, Made Simple"
            description="Experiencing clarity and spiritual rejuvenation is smooth, clear, and unhurried."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {howItWorksSteps.map((step, idx) => (
              <div
                key={idx}
                className="relative bg-ivory rounded-3xl p-6 sm:p-7 border border-primary/10 shadow-soft flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-3xl font-bold text-gold">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white shadow-soft flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-plum mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-body/80 font-sans leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* =================================================================== */}
      {/* SECTION 9 — ABOUT DEEPIKA                                           */}
      {/* =================================================================== */}
      <Section variant="ivory" spacing="lg" id="about">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Portrait / Sanctuary Framing */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full h-[440px] sm:h-[480px] rounded-4xl overflow-hidden border-2 border-gold/40 shadow-card bg-lavender-light/40">
                <Image
                  src="/images/services/tarot-reading-session.webp"
                  alt="Deepika conducting a spiritual tarot consultation at Inner Mirror Bliss"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white text-center">
                  <h3 className="font-serif text-2xl font-bold">Deepika</h3>
                  <p className="text-xs font-sans text-gold-light uppercase tracking-widest mt-0.5">
                    Spiritual Wellness Guide & Intuitive Reader
                  </p>
                </div>
              </div>
            </div>

            {/* Practitioner Details */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              <Eyebrow icon={true} variant="gold">
                YOUR GUIDE TO INNER DISCOVERY
              </Eyebrow>

              <h2 className="font-serif text-h1 font-bold text-plum leading-tight">
                Meet Deepika
              </h2>

              <p className="text-body-reg sm:text-body-lg text-body/85 font-sans leading-relaxed">
                Deepika is the founder and heart behind Inner Mirror Bliss. Rooted in compassionate listening and years of spiritual practice, she helps seekers navigate life crossroads with grounded clarity, calm confidence, and renewed hope.
              </p>

              <p className="text-sm sm:text-base text-body/80 font-sans leading-relaxed">
                Her approach blends intuitive Tarot symbolism with energetic modalities like Reiki, crystal frequency balancing, and emotional healing. Rather than viewing tarot as deterministic fortune-telling, Deepika uses the cards as an introspective mirror to empower your personal free will and self-trust.
              </p>

              <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-4">
                <PrimaryButton href="/about">
                  Read Full Biography
                  <ArrowRight className="w-4 h-4 ml-2" />
                </PrimaryButton>

                <GoldButton href="/book-session">
                  Schedule With Deepika
                </GoldButton>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* =================================================================== */}
      {/* SECTION 10 — FEATURED PACKAGE                                       */}
      {/* =================================================================== */}
      <Section variant="white" spacing="lg">
        <Container>
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-white via-ivory to-lavender-light/50 rounded-4xl p-8 sm:p-12 border-2 border-gold/50 shadow-gold/20 text-center relative overflow-hidden">
            <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-gold text-plum text-xs font-sans font-black tracking-wider uppercase mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-plum" />
              Signature Reading Experience
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-plum mb-3">
              Personal Tarot Reading Session
            </h2>

            <div className="flex items-baseline justify-center gap-2 mb-4">
              <span className="font-serif text-5xl sm:text-6xl font-bold text-plum">
                ₹599
              </span>
              <span className="text-base text-muted font-sans font-medium">/ 60 Minutes</span>
            </div>

            <p className="text-body text-base max-w-xl mx-auto mb-6 leading-relaxed font-sans">
              A comprehensive 1-hour intuitive consultation exploring love & relationships, career choices, money flow, and personal growth with Deepika.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 max-w-xl mx-auto mb-8 text-xs font-sans font-medium text-plum">
              <span className="p-2 rounded-xl bg-white border border-primary/10">Love & Clarity</span>
              <span className="p-2 rounded-xl bg-white border border-primary/10">Career Crossroads</span>
              <span className="p-2 rounded-xl bg-white border border-primary/10">Direct Q&A</span>
              <span className="p-2 rounded-xl bg-white border border-primary/10">Studio or Online</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <GoldButton href="/book-session?service=tarot-reading" size="lg" className="w-full sm:w-auto shadow-gold">
                Book 1 Hour Session (₹599)
                <ArrowRight className="w-4 h-4 ml-2" />
              </GoldButton>
              <a
                href={getWhatsAppBookingUrl("1 Hour Tarot Reading Session (₹599)")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-sans font-bold text-sm tracking-wide shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                Reserve via WhatsApp
              </a>
            </div>

            <p className="text-xs text-muted font-sans mt-4">
              *Prior Booking Required • Studio in Ghansoli or Online Video Call
            </p>
          </div>
        </Container>
      </Section>

      {/* =================================================================== */}
      {/* SECTION 11 — WELLNESS EXPERIENCES (Editorial Showcase)              */}
      {/* =================================================================== */}
      <Section variant="ivory" spacing="lg" id="wellness">
        <Container>
          <SectionHeading
            eyebrow="RESTORATIVE CARE"
            scriptFlourish="Deep Renewal"
            title="Make Time for Yourself"
            description="Holistic touch, energetic alignment, and tranquil relaxation to soothe the nervous system and nourish your spirit."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Experience 1: Reiki Facial */}
            <div className="bg-white rounded-3xl overflow-hidden border border-primary/10 shadow-card flex flex-col sm:flex-row">
              <div className="relative w-full sm:w-2/5 h-56 sm:h-auto min-h-[200px] bg-lavender-light/40">
                <Image
                  src="/images/services/reiki-healing-facial.webp"
                  alt="Reiki Healing Facial holistic botanical relaxation"
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 sm:p-7 sm:w-3/5 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-lavender-light text-primary">
                    Reiki Care
                  </span>
                  <h3 className="font-serif text-xl font-bold text-plum mt-2 mb-1">
                    Reiki Healing Facial (₹1,000)
                  </h3>
                  <p className="text-xs text-body/80 leading-relaxed font-sans line-clamp-3">
                    A restorative facial combining organic botanical skincare touch and channeled universal energy to melt facial tension and reveal radiant peace.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-primary/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-muted">60 Mins</span>
                  <Link href="/services/reiki-healing-facial" className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
                    Details →
                  </Link>
                </div>
              </div>
            </div>

            {/* Experience 2: Crystal Healing */}
            <div className="bg-white rounded-3xl overflow-hidden border border-primary/10 shadow-card flex flex-col sm:flex-row">
              <div className="relative w-full sm:w-2/5 h-56 sm:h-auto min-h-[200px] bg-lavender-light/40">
                <Image
                  src="/images/services/crystal-healing-amethyst.webp"
                  alt="Crystal Healing and chakra alignment with natural gemstones"
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 sm:p-7 sm:w-3/5 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-lavender-light text-primary">
                    Frequency Therapy
                  </span>
                  <h3 className="font-serif text-xl font-bold text-plum mt-2 mb-1">
                    Crystal Healing (₹501)
                  </h3>
                  <p className="text-xs text-body/80 leading-relaxed font-sans line-clamp-3">
                    Chakra alignment using genuine amethyst geodes, rose quartz, and clear quartz wands to balance your subtle body vibrations.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-primary/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-muted">45 Mins</span>
                  <Link href="/services/crystal-healing" className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
                    Details →
                  </Link>
                </div>
              </div>
            </div>

            {/* Experience 3: Aura Cleansing */}
            <div className="bg-white rounded-3xl overflow-hidden border border-primary/10 shadow-card flex flex-col sm:flex-row">
              <div className="relative w-full sm:w-2/5 h-56 sm:h-auto min-h-[200px] bg-lavender-light/40">
                <Image
                  src="/images/services/aura-cleansing.webp"
                  alt="Aura cleansing and energy purification atmosphere"
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 sm:p-7 sm:w-3/5 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-lavender-light text-primary">
                    Energy Purification
                  </span>
                  <h3 className="font-serif text-xl font-bold text-plum mt-2 mb-1">
                    Aura Cleansing (₹300)
                  </h3>
                  <p className="text-xs text-body/80 leading-relaxed font-sans line-clamp-3">
                    Purify accumulated daily fatigue, psychic static, and heavy vibrations to feel lighter and invite renewed positivity.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-primary/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-muted">30 Mins</span>
                  <Link href="/services/aura-cleansing" className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
                    Details →
                  </Link>
                </div>
              </div>
            </div>

            {/* Experience 4: Reiki Body Massage */}
            <div className="bg-white rounded-3xl overflow-hidden border border-primary/10 shadow-card flex flex-col sm:flex-row">
              <div className="relative w-full sm:w-2/5 h-56 sm:h-auto min-h-[200px] bg-lavender-light/40">
                <Image
                  src="/images/services/reiki-healing-body-massage.webp"
                  alt="Reiki Healing Body Massage relaxation session"
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 sm:p-7 sm:w-3/5 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-lavender-light text-primary">
                    Full Body Renewal
                  </span>
                  <h3 className="font-serif text-xl font-bold text-plum mt-2 mb-1">
                    Reiki Body Massage (₹2,001)
                  </h3>
                  <p className="text-xs text-body/80 leading-relaxed font-sans line-clamp-3">
                    A luxurious 90-minute full body massage infused with channeled Reiki healing to systematically release deep muscular knots and tension.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-primary/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-muted">90 Mins</span>
                  <Link href="/services/reiki-healing-body-massage" className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
                    Details →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* =================================================================== */}
      {/* SECTION 12 — TESTIMONIALS (Carousel)                                */}
      {/* =================================================================== */}
      <Section variant="white" spacing="lg" id="testimonials">
        <Container>
          <SectionHeading
            eyebrow="CLIENT EXPERIENCES"
            scriptFlourish="Sacred Feedback"
            title="Kind Words & Experiences"
            description="Genuine reflections from individuals who have visited our Ghansoli sanctuary."
          />

          <TestimonialCarousel testimonials={testimonialsData} />
        </Container>
      </Section>

      {/* =================================================================== */}
      {/* SECTION 13 — INSTAGRAM GALLERY                                      */}
      {/* =================================================================== */}
      <Section variant="ivory" spacing="lg">
        <Container>
          <SectionHeading
            eyebrow="SANCTUARY HIGHLIGHTS"
            scriptFlourish="Visual Moments"
            title="A Glimpse Into Our World"
            description="Crystals, candles, tarot decks, and peaceful sanctuary vibes."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {instagramGallery.map((item, idx) => (
              <div
                key={idx}
                className="group relative h-48 sm:h-56 rounded-2xl overflow-hidden border border-primary/10 shadow-soft bg-lavender-light/40"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-plum/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                  <Instagram className="w-6 h-6 text-gold" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href={getWhatsAppBookingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:text-primary-hover font-sans"
            >
              <Instagram className="w-4 h-4 text-gold" />
              Follow Our Spiritual Journey on Social Media
            </a>
          </div>
        </Container>
      </Section>

      {/* =================================================================== */}
      {/* SECTION 14 — FAQ (Frequently Asked Questions)                        */}
      {/* =================================================================== */}
      <Section variant="white" spacing="lg" id="faq">
        <Container>
          <SectionHeading
            eyebrow="COMMON QUESTIONS"
            scriptFlourish="Clear Answers"
            title="Frequently Asked Questions"
            description="Find thoughtful answers regarding tarot sessions, preparation, booking, and our Ghansoli location."
          />

          <FAQAccordion items={faqItems} />
        </Container>
      </Section>

      {/* =================================================================== */}
      {/* SECTION 15 — LOCATION AND CONTACT                                   */}
      {/* =================================================================== */}
      <Section variant="ivory" spacing="lg" id="contact">
        <Container>
          <SectionHeading
            eyebrow="STUDIO SANCTUARY"
            scriptFlourish="Visit Us"
            title="Visit Inner Mirror Bliss"
            description="Located in Sector 5, Ghansoli, Navi Mumbai. Prior booking ensures your private, peaceful consultation."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto">
            {/* Left Contact Card (5 cols) */}
            <div className="lg:col-span-5">
              <ContactCard />
            </div>

            {/* Right Map & Transit (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-primary/10 shadow-card space-y-5">
              <h3 className="font-serif text-2xl font-bold text-plum flex items-center gap-2">
                <MapPin className="w-5 h-5 text-gold" />
                Ghansoli Studio Map & Directions
              </h3>

              <div className="w-full h-72 rounded-2xl overflow-hidden border border-primary/10 relative bg-lavender-light/40">
                <iframe
                  title="Inner Mirror Bliss Studio Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0881858599427!2d72.9959656!3d19.1235123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c0c1b489a805%3A0x6b4ef8d1d867cfa2!2sPanchvati%20Co-op%20Housing%20Society%2C%20Sector%205%2C%20Ghansoli%2C%20Navi%20Mumbai%2C%20Maharashtra%20400701!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              <div className="space-y-2 text-xs font-sans text-body/85 leading-relaxed pt-2">
                <p>
                  <strong>Address:</strong> {siteConfig.address.full}
                </p>
                <p>
                  <strong>Hours:</strong> {siteConfig.openingHours.days}, {siteConfig.openingHours.hours} (<em>{siteConfig.openingHours.note}</em>)
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href="https://maps.google.com/?q=Panchvati+Co-op+Society+Sector+5+Ghansoli+Navi+Mumbai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-full bg-ivory border border-primary/20 font-bold text-xs text-primary hover:bg-lavender-light transition"
                >
                  Open in Google Maps →
                </a>
                <a
                  href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
                  className="px-4 py-2.5 rounded-full bg-primary text-white font-bold text-xs hover:bg-primary-hover transition"
                >
                  Call {siteConfig.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* =================================================================== */}
      {/* SECTION 16 — FINAL CTA                                              */}
      {/* =================================================================== */}
      <Section variant="white" spacing="xl">
        <Container>
          <div className="relative rounded-4xl p-8 sm:p-14 md:p-16 overflow-hidden bg-gradient-to-br from-lavender-light/90 via-ivory to-blush-soft/70 border border-gold/40 shadow-card text-center">
            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-white/90 border border-gold/40 text-xs font-serif tracking-widest text-plum shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                <span>{siteConfig.sacredInvocation}</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-plum leading-tight">
                Your Journey Towards Clarity Begins Here
              </h2>

              <p className="text-body text-base sm:text-lg leading-relaxed max-w-xl mx-auto font-sans">
                Take a moment for yourself. Discover a new perspective and reconnect with your inner self.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <GoldButton href="/book-session" size="lg" className="w-full sm:w-auto shadow-gold">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Your Session
                </GoldButton>

                <a
                  href={getWhatsAppBookingUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-sans font-bold text-sm tracking-wide shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </div>

              <p className="text-xs text-muted font-sans pt-2">
                Panchvati Co-op Society, Sector 5, Ghansoli, Navi Mumbai • Prior Booking Required
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
