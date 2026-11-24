import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { siteConfig, getWhatsAppBookingUrl } from "@/config/site";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { HelpCircle, Sparkles, MessageCircle, Phone } from "lucide-react";
import { GoldButton } from "@/components/ui/Buttons";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Inner Mirror Bliss Navi Mumbai",
  description:
    "Find answers to all your questions regarding Tarot card reading, Reiki healing facials, aura cleansing, appointments, payments, and studio location in Ghansoli.",
  alternates: {
    canonical: "/faq",
  },
};

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  id: string;
  category: string;
  description: string;
  items: FAQItem[];
}

const faqData: FAQCategory[] = [
  {
    id: "tarot-reading",
    category: "Tarot Reading",
    description: "Everything you need to know about preparing for and experiencing a tarot consultation.",
    items: [
      {
        question: "Is Tarot card reading about predicting an unchangeable future?",
        answer:
          "No. At Inner Mirror Bliss, tarot is approached as a reflective spiritual mirror. The cards reveal current energetic trajectories, emotional currents, and subconscious patterns. Your personal free will and everyday choices always determine your future.",
      },
      {
        question: "What topics can I ask about during a 1-hour session?",
        answer:
          "You are welcome to ask about any area of your life: love and relationships, career transitions, money and abundance mindset, personal growth, family situations, or broad life direction. The 60-minute session provides ample time for comprehensive questions.",
      },
      {
        question: "How should I prepare for my first tarot reading with Deepika?",
        answer:
          "No special preparation is needed. It helps to come with an open mind, a curious attitude, and 2 or 3 questions or life themes written down if that makes you feel comfortable.",
      },
      {
        question: "Can I attend a tarot reading online if I cannot visit Navi Mumbai?",
        answer:
          "Yes! Deepika conducts one-on-one virtual consultations via Google Meet or WhatsApp Video. The intuitive resonance is equally clear and powerful whether in-person or online.",
      },
    ],
  },
  {
    id: "healing-services",
    category: "Healing Services",
    description: "Insights into our Reiki, Aura Cleansing, and Crystal wellness offerings.",
    items: [
      {
        question: "What is the difference between Aura Cleansing and Crystal Healing?",
        answer:
          "Aura Cleansing (₹300 / 30 mins) focuses on sweeping and clearing sluggish, stagnant vibrations from your subtle biofield to help you feel energetically light. Crystal Healing (₹501 / 45 mins) utilizes specific consecrated gemstones aligned with your seven chakras to restore grounded vibrational harmony.",
      },
      {
        question: "Are your wellness services a replacement for medical treatments?",
        answer:
          "No. All spiritual wellness sessions (including Reiki Facials, Massages, and Aura Cleansing) are complementary holistic practices intended for relaxation, stress relief, and energetic rejuvenation. They are not substitutes for medical, dermatological, or psychiatric care.",
      },
      {
        question: "What should I wear to an in-person healing session?",
        answer:
          "Please wear comfortable, loose-fitting clothing. For sessions like Crystal Healing or Aura Cleansing, you remain fully clothed throughout the appointment.",
      },
    ],
  },
  {
    id: "appointments",
    category: "Appointments & Scheduling",
    description: "Guidelines on booking, rescheduling, and studio arrival times.",
    items: [
      {
        question: "Do I need to book an appointment in advance?",
        answer:
          "Yes, prior booking is strictly required. To maintain a serene, private, and dedicated atmosphere without walk-in interruptions, we reserve specific time slots for each guest.",
      },
      {
        question: "How can I book a session?",
        answer:
          "You can book directly through our online booking page (/book-session), send a WhatsApp message to +91 9987969557, or call us during business hours.",
      },
      {
        question: "What happens if I need to reschedule?",
        answer:
          "We understand unexpected schedule shifts occur. Please notify us via WhatsApp or phone at least 4 hours in advance so we can offer your slot to another seeker and reschedule your visit.",
      },
    ],
  },
  {
    id: "payments",
    category: "Payments & Pricing",
    description: "Transparent pricing structure and accepted payment methods.",
    items: [
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept UPI (Google Pay, PhonePe, Paytm), direct bank transfers, and cash for in-person studio appointments. For online video consultations, advance UPI payment confirms your slot.",
      },
      {
        question: "Are there any hidden costs or surprise fees?",
        answer:
          "None whatsoever. Our pricing is completely transparent: Tarot Reading is ₹599 for 60 minutes, Reiki Facial is ₹1,000, Aura Cleansing is ₹300, etc. We do not engage in fear-based upselling or ritual charges.",
      },
    ],
  },
  {
    id: "location",
    category: "Location & Studio Guidelines",
    description: "Directions to our studio in Ghansoli, parking, and quiet-hours policy.",
    items: [
      {
        question: "Where exactly is the studio located?",
        answer:
          "We are located at Panchvati Co-op Society, Shop No. C-38, Ground Floor, Near Panchvati Bus Stop, Sector 5, Ghansoli, Navi Mumbai - 400701.",
      },
      {
        question: "How far is the studio from Ghansoli Railway Station?",
        answer:
          "The studio is approximately 7 to 10 minutes away by auto-rickshaw from Ghansoli Railway Station (Trans-Harbour suburban line).",
      },
      {
        question: "Can I bring a friend or family member with me?",
        answer:
          "You are welcome to bring a companion to accompany you to the studio. However, during the actual tarot reading or healing session, we recommend sitting one-on-one with Deepika so your energy remains entirely focused and confidential.",
      },
    ],
  },
  {
    id: "privacy",
    category: "Privacy & Confidentiality",
    description: "Our solemn commitment to keeping your personal life secure and private.",
    items: [
      {
        question: "Is what I share in my reading kept confidential?",
        answer:
          "Yes, 100%. Everything discussed during your consultation—including personal questions, family matters, and emotional disclosures—is held in strict, absolute confidentiality.",
      },
      {
        question: "Do you record online video reading sessions?",
        answer:
          "We do not record video sessions to safeguard your privacy. If you wish to take handwritten notes or record your own session for personal reflection, you are welcome to do so.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="bg-ivory/40 min-h-screen">
      {/* Breadcrumb Bar */}
      <div className="border-b border-primary/10 bg-white/70 backdrop-blur-sm">
        <Container>
          <div className="py-3">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Frequently Asked Questions", href: "/faq" },
              ]}
            />
          </div>
        </Container>
      </div>

      {/* Hero Header */}
      <Section variant="light" spacing="lg" className="pt-12 sm:pt-16 pb-12">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Eyebrow>CLEAR ANSWERS FOR YOUR PEACE OF MIND</Eyebrow>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-plum leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="font-sans text-lg sm:text-xl text-body/90 leading-relaxed max-w-2xl mx-auto">
              Find transparent answers about our Tarot readings, spiritual wellness offerings, appointments, and studio visits in Ghansoli.
            </p>
          </div>
        </Container>
      </Section>

      {/* Quick Category Navigation Pills */}
      <Section variant="white" spacing="sm" className="py-6 border-y border-primary/10">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {faqData.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="px-4 py-2 rounded-full text-xs font-sans font-bold text-plum bg-ivory border border-primary/10 hover:bg-lavender-light hover:text-primary transition"
              >
                {cat.category}
              </a>
            ))}
          </div>
        </Container>
      </Section>

      {/* Categorized FAQs */}
      <Section variant="white" spacing="lg" className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            {faqData.map((category) => (
              <div key={category.id} id={category.id} className="scroll-mt-24 space-y-6">
                <div className="border-b border-primary/10 pb-3">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-plum flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-gold" />
                    {category.category}
                  </h2>
                  <p className="text-xs sm:text-sm text-muted font-sans mt-1">
                    {category.description}
                  </p>
                </div>

                <div className="space-y-4 font-sans">
                  {category.items.map((item, idx) => (
                    <details
                      key={idx}
                      className="group p-6 rounded-2xl bg-ivory/60 border border-primary/10 shadow-soft open:bg-white open:border-primary/20 transition-all cursor-pointer"
                    >
                      <summary className="font-serif text-lg sm:text-xl font-bold text-plum list-none flex items-center justify-between gap-4">
                        <span>{item.question}</span>
                        <span className="text-primary group-open:rotate-180 transition-transform text-xl shrink-0">
                          ↓
                        </span>
                      </summary>
                      <p className="mt-3 text-sm text-body leading-relaxed pt-3 border-t border-primary/5">
                        {item.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            ))}

            {/* Have More Questions Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-lavender-light/40 border border-primary/15 text-center space-y-4 font-sans">
              <HelpCircle className="w-10 h-10 text-primary mx-auto" />
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-plum">
                Have a Question Not Answered Here?
              </h3>
              <p className="text-sm text-body/90 max-w-lg mx-auto leading-relaxed">
                Deepika is always glad to assist. Feel free to send a message on WhatsApp or reach out through our contact page.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={getWhatsAppBookingUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs tracking-wide shadow-sm transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  Ask on WhatsApp
                </a>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full bg-white border border-primary/20 text-plum font-bold text-xs tracking-wide hover:bg-ivory transition"
                >
                  Visit Contact Page
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Booking CTA */}
      <BookingCTA
        title="Ready to Reserve Your Personal Space?"
        subtitle="Book online now or connect directly with Deepika on WhatsApp for customized scheduling."
      />
    </div>
  );
}
