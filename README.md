# Inner Mirror Bliss by Deepika — Production Application

> **Heal • Align • Transform**  
> *|| श्री स्वामी समर्थ ||*

Inner Mirror Bliss is a modern, high-performance web platform and appointment booking system for Deepika's spiritual wellness practice in Navi Mumbai, offering Tarot Card Reading, Reiki Healing, Crystal Therapy, Aura Cleansing, and Emotional Healing.

---

## 🔮 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) 15+ (App Router, Server Components by default)
- **Language:** TypeScript (Strict mode enabled)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) with spiritual luxury design tokens
- **Animations:** [Motion for React](https://motion.dev/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Database & Auth:** [Supabase](https://supabase.com/) PostgreSQL + Supabase Auth with Row-Level Security (RLS)
- **Forms & Validation:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Transactional Notifications:** [Resend](https://resend.com/) + WhatsApp Business direct messaging API

---

## 📁 Repository Structure

```text
src/
├── app/
│   ├── (website)/          # Public storefront & landing pages
│   ├── (admin)/            # Protected administrative portal
│   ├── api/                # Secure server route handlers (booking, contact)
│   ├── layout.tsx          # Root HTML shell & font providers
│   ├── error.tsx           # Client error boundary
│   └── not-found.tsx       # Spiritual 404 page
├── components/
│   ├── layout/             # SiteHeader, SiteFooter, MobileNav, WhatsApp CTA
│   ├── navigation/         # NavLinks, Breadcrumbs, Category Tabs
│   ├── sections/           # Hero, Bio, Benefits, Philosophy, Services, FAQ
│   ├── services/           # ServiceCard, Grid, DetailHero, BookingCard
│   ├── booking/            # Multi-step booking wizard & slot selector
│   ├── ui/                 # Reusable atomic UI (Button, Card, Badge, Modal, etc.)
│   ├── animations/         # Motion wrappers (FadeIn, Glow, Shimmer)
│   └── admin/              # Admin table, price editor, metrics
├── config/                 # Centralized business, contact & service configuration
├── data/                   # Static fallback data and initial content
├── hooks/                  # Custom React hooks
├── lib/
│   ├── supabase/           # Client & server Supabase client factories
│   ├── seo/                # Metadata generators & JSON-LD schemas
│   ├── validations/        # Zod validation schemas
│   ├── email/              # Resend email templates & dispatcher
│   └── utils/              # Utility functions (cn, formatters, dates)
└── types/                  # TypeScript interfaces and database schemas

docs/                       # Comprehensive architectural documentation
public/                     # Static media, icons & brand references
supabase/                   # SQL migrations & seed data
```

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js 20+ (LTS)
- npm 10+ or pnpm 9+

### 2. Environment Configuration
Copy `.env.example` to `.env.local` and configure your credentials:

```bash
cp .env.example .env.local
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Run Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

### 5. Verification Commands
```bash
npm run type-check   # Validate TypeScript compilation
npm run build        # Production Next.js build
npm run lint         # ESLint verification
```

---

## 📍 Business Information

- **Founder & Healer:** Deepika
- **Phone / WhatsApp:** `+91 9987969557`
- **Location:** Panchvati Co-op Society, Shop No. C-38, Near Panchvati Bus Stop, Sector 5, Ghansoli, Navi Mumbai - 400701, Maharashtra, India.
