export const siteConfig = {
  name: "Inner Mirror Bliss",
  author: "Deepika",
  tagline: "Heal • Align • Transform",
  secondaryTagline: "Energy Healing • Emotional Balance • Positive Transformation",
  sacredInvocation: "|| श्री स्वामी समर्थ ||",
  quote: "The Cards Don't Decide Your Future, They Help You See It More Clearly...",
  description:
    "Authentic spiritual wellness, Tarot card reading, Reiki energy healing, crystal balancing, and aura cleansing in Ghansoli, Navi Mumbai by Deepika.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://innermirrorbliss.com",
  phone: "+91 9987969557",
  phoneDisplay: "+91 9987969557",
  whatsappNumber: "919987969557",
  email: "innermirrorbliss@gmail.com",
  address: {
    line1: "Panchvati Co-op Society, Shop No. C-38",
    line2: "Near Panchvati Bus Stop, Sector 5",
    area: "Ghansoli",
    city: "Navi Mumbai",
    pincode: "400701",
    state: "Maharashtra",
    country: "India",
    full: "Panchvati Co-op Society, Shop No. C-38, Near Panchvati Bus Stop, Sector 5, Ghansoli, Navi Mumbai - 400701, Maharashtra, India.",
  },
  geo: {
    latitude: 19.1235,
    longitude: 72.9981,
  },
  openingHours: {
    days: "Monday - Sunday",
    hours: "10:00 AM - 8:00 PM",
    note: "Prior Booking Required",
  },
  mainNav: [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Tarot Reading", href: "/services/tarot-reading" },
    { title: "Contact", href: "/contact" },
  ],
  coreBenefits: [
    { title: "Stress Relief", description: "Dissolve deep chronic anxiety and mental tension." },
    { title: "Emotional Balance", description: "Heal past emotional wounds and regain equilibrium." },
    { title: "Better Sleep", description: "Calm the restless mind and restore restorative sleep." },
    { title: "Positive Mindset", description: "Transform negative thought cycles into empowering clarity." },
    { title: "Energy Healing", description: "Clear subtle blockages and align your natural chakra flow." },
    { title: "Self Love & Growth", description: "Awaken confidence, self-worth, and inner radiance." },
    { title: "Clarity in Life", description: "Navigate crossroads with divine intuitive direction." },
    { title: "Inner Peace", description: "Rebalance mind, body, and spirit into harmonious bliss." },
  ],
  tarotFocusAreas: [
    "Love & Relationships",
    "Career & Job Guidance",
    "Finance & Money Flow",
    "Personal Growth",
    "Health & Well-being",
    "Family & Life Situation",
    "Answers to Your Questions",
    "Future Guidance",
  ],
} as const;

export type SiteConfig = typeof siteConfig;

export function getWhatsAppBookingUrl(serviceName?: string): string {
  const text = serviceName
    ? `Hello Deepika, I would like to book an appointment for "${serviceName}" at Inner Mirror Bliss.`
    : `Hello Deepika, I would like to inquire about booking a healing session at Inner Mirror Bliss.`;
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
