# Inner Mirror Bliss — Master Development Roadmap

**Product:** Inner Mirror Bliss by Deepika  
**Lead Architect:** Senior Full-Stack Architect  
**Architecture:** Next.js App Router, TypeScript Strict, Supabase, Tailwind, Motion  

---

## Roadmap Phases Overview

```
[ Phase 1: Architecture & Init ] ──► [ Phase 2: UI Foundation & Theme ]
                                                  │
                                                  ▼
[ Phase 4: Booking Engine & Alerts ] ◄── [ Phase 3: Public Website & Pages ]
              │
              ▼
[ Phase 5: Supabase Admin & CMS ] ────► [ Phase 6: SEO, Audit & Production Launch ]
```

---

## Phase 1: Project Initialization, Architecture and Planning *(Current Phase)*
- [x] Inspect workspace and preserve existing assets.
- [x] Analyze brand identity from authentic reference posters (colors, sacred motifs, typography).
- [x] Establish strict Next.js App Router project architecture.
- [x] Configure TypeScript in strict mode.
- [x] Configure Tailwind CSS with custom spiritual design tokens and typography.
- [x] Set up fonts, global CSS variables, and layout boundaries.
- [x] Install production dependencies (`next`, `react`, `supabase`, `motion`, `lucide`, `zod`, `react-hook-form`, `resend`).
- [x] Create comprehensive architectural documentation, component map, design system, database schema, and SEO plan.
- [x] Implement centralized business configuration (`site.ts`, `services.ts`).
- [x] Verify project builds and TypeScript compiles with zero errors.

---

## Phase 2: Design System, Foundations & Shared UI Components
- [ ] Configure typography system (Cinzel / Plus Jakarta Sans / Alex Brush script).
- [ ] Implement sacred decorative components (`<LotusDivider />`, `<ShimmerText />`, `<GlowBackground />`).
- [ ] Build accessible core UI library (`Button`, `Card`, `Badge`, `Input`, `Textarea`, `Select`, `Modal`, `Accordion`).
- [ ] Implement public website navigation layout:
  - Sticky glassmorphic `<SiteHeader />` with brand seal and booking CTA.
  - Responsive `<MobileNav />` drawer with smooth motion animations.
  - Editorial `<SiteFooter />` with sacred invocation `|| श्री स्वामी समर्थ ||`, contact NAP, service links, and copyright.
  - Floating `<FloatingWhatsApp />` quick-connect button with prefilled greeting.
- [ ] Implement admin layout shell (`AdminSidebar`, `AdminHeader`, `SessionGuard`).

---

## Phase 3: Public Website & Dedicated Service Pages
- [ ] Build high-converting Homepage (`src/app/(website)/page.tsx`):
  - Editorial Hero Section with brand tagline *Heal • Align • Transform*.
  - Deepika's Practitioner Introduction & Spiritual Philosophy.
  - Core Benefits Grid (Stress relief, emotional balance, better sleep, positive mindset, self growth, inner peace).
  - Services Preview Grid with live pricing cards.
  - Sacred quote showcase (*"The Cards Don't Decide Your Future, They Help You See It More Clearly..."*).
  - Studio sanctuary walkthrough & Google Map location.
  - Client Testimonials & FAQ accordion.
- [ ] Build dedicated service catalog & individual detail pages (`/services/[slug]`):
  - Tarot Card Reading (₹599 / 60 mins)
  - Reiki Healing Facial (₹1,000 / 60 mins)
  - Aura Cleansing (₹300 / 30 mins)
  - Crystal Healing (₹501 / 45 mins)
  - Emotional Healing (₹601 / 45 mins)
  - Reiki Healing Body Massage (₹2,001 / 90 mins)
  - Reiki Healing Head Massage (₹999 / 45 mins)
  - Angelic Healing & Angel Card Message (₹551 / 45 mins)
- [ ] Build About Page (`/about`), Contact Page with Map (`/contact`), Reviews Page (`/reviews`), and Legal Pages (`/privacy-policy`, `/terms-of-service`, `/disclaimer`).

---

## Phase 4: Dynamic Booking Engine & Notification System
- [ ] Multi-step client booking wizard (`/book`):
  - Step 1: Service selection (with duration and fee).
  - Step 2: Delivery mode selection (Studio in Ghansoli vs Online Video Consultation).
  - Step 3: Real-time calendar slot selector (excluding past dates & practitioner blocked times).
  - Step 4: Client contact details (Name, Phone, Email, Spiritual intention).
  - Step 5: Order review, summary, and instant booking submission.
- [ ] Server Action & API Route (`/api/booking`):
  - Zod server-side validation.
  - Insert booking into Supabase PostgreSQL with unique reference (`IMB-XXXXXX`).
  - Send transactional customer confirmation email via Resend.
  - Send practitioner alert email to Deepika.
  - Return instant WhatsApp confirmation link.

---

## Phase 5: Supabase Backend Integration & Secure Admin Dashboard
- [ ] Connect Supabase PostgreSQL database and apply initial schema migrations.
- [ ] Implement Supabase Auth email/password admin login at `/admin/login`.
- [ ] Protect admin routes via Next.js Middleware.
- [ ] Build Admin KPI Dashboard:
  - Metric cards: Upcoming appointments, monthly revenue, pending inquiries, active services.
- [ ] Build Bookings Management:
  - Filterable, searchable appointments table.
  - Status updates (`Pending`, `Confirmed`, `Completed`, `Cancelled`).
  - Client consultation notes.
- [ ] Build Dynamic Services & Pricing Manager:
  - Direct form to adjust prices, durations, descriptions, and active status in Supabase.
- [ ] Build Blog CMS:
  - Create, edit, and publish spiritual articles with cover images and tags.
- [ ] Build Inquiries CRM:
  - View and respond to contact form submissions.

---

## Phase 6: SEO Hardening, Performance Optimization & Launch
- [ ] Generate dynamic XML sitemap (`/sitemap.xml`) and robots directives (`/robots.txt`).
- [ ] Inject Schema.org JSON-LD structured data on all routes (`HealthAndBeautyBusiness`, `Service`, `FAQPage`, `BreadcrumbList`).
- [ ] Optimize images with Next.js image pipeline (AVIF/WebP) and placeholder blurs.
- [ ] Conduct end-to-end booking and admin testing.
- [ ] Perform WCAG 2.1 AA accessibility audit.
- [ ] Production deployment to Vercel with SSL, domain configuration (`innermirrorbliss.com`), and environment variable verification.
