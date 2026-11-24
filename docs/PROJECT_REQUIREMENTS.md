# Project Requirements Document (PRD)
## Inner Mirror Bliss by Deepika — Production Web Application

**Document Version:** 1.0.0  
**Status:** Approved for Phase 1 Architecture  
**Owner:** Deepika  
**Brand:** Inner Mirror Bliss  
**Tagline:** Heal • Align • Transform  

---

## 1. Executive Summary & Brand Identity

Inner Mirror Bliss is a holistic spiritual wellness practice founded and operated by Deepika, offering Tarot Card Reading, Reiki Energy Healing, Crystal Therapy, Aura Cleansing, and Emotional Healing.

### Brand Essence & Values:
- **Sacred Invocation:** *|| श्री स्वामी समर्थ ||*
- **Core Mission:** Empower individuals with clarity, emotional balance, deep relaxation, energetic alignment, and positive life transformation.
- **Visual Identity:**
  - **Primary Palette:** Deep Royal Violet (`#2E1065`, `#3B0764`), Sacred Amethyst (`#581C87`), Mystic Lavender (`#9333EA`, `#C084FC`, `#E9D5FF`).
  - **Accent Palette:** Celestial Radiant Gold (`#D4AF37`, `#F59E0B`, `#EAB308`).
  - **Base Palette:** Ethereal Soft Ivory / Alabaster (`#FAF7F2`, `#FFFDF9`, `#0F071D` for dark spiritual canvas).
  - **Motifs:** Sacred lotus, celestial stars, amethyst geodes, crystals, radiant aura glow, tarot geometry.
  - **Tone & Voice:** Calming, compassionate, empowering, dignified, professional, and spiritually grounded.

---

## 2. Business Details & Locations

- **Founder & Practitioner:** Deepika
- **Phone / WhatsApp:** `+91 9987969557` (Direct WhatsApp booking integration required)
- **Email:** `innermirrorbliss@gmail.com`
- **Location Address:**
  ```text
  Panchvati Co-op Society, Shop No. C-38,
  Near Panchvati Bus Stop, Sector 5, Ghansoli,
  Navi Mumbai - 400701, Maharashtra, India.
  ```
- **Service Modes:**
  - In-person sessions at Ghansoli studio
  - Distance / Online Tarot & Energy Healing sessions via Video / Audio Call

---

## 3. Service Catalog & Dynamic Pricing Model

All service definitions, pricing, durations, and active statuses **must be centrally configured and editable dynamically via the Admin Dashboard and Supabase backend**.

| Service Name | Base Price (INR) | Duration | Delivery Mode | Key Highlights / Focus Areas |
| :--- | :--- | :--- | :--- | :--- |
| **Tarot Card Reading** | ₹599 | 60 mins | Studio & Online | Love & relationships, career/job guidance, finance, personal growth, life questions, future guidance |
| **Reiki Healing Facial** | ₹1,000 | 45-60 mins | Studio Only | Glowing skin, energy balancing, deep facial relaxation, tension release |
| **Aura Cleansing** | ₹300 | 30 mins | Studio & Distance | Negative energy removal, aura purification, feeling lighter, inviting positivity |
| **Crystal Healing** | ₹501 | 45 mins | Studio Only | Chakra alignment, gemstone frequencies, natural cellular healing, vibrational boost |
| **Emotional Healing** | ₹601 | 45 mins | Studio & Online | Stress release, healing past trauma & grief, emotional stability, inner peace |
| **Reiki Healing Body Massage**| ₹2,001 | 75-90 mins | Studio Only | Full body energy release, muscle relaxation, blood circulation, mind-body rejuvenation |
| **Reiki Healing Head Massage**| ₹999 | 45 mins | Studio Only | Relieves mental stress, migraine relief, deep sleep induction, mental clarity |
| **Angelic Healing & Angel Card**| ₹551 | 45 mins | Studio & Online | Divine angelic messages, higher-self connection, spiritual guidance, renewed hope |

---

## 4. System Architecture & Tech Stack

- **Framework:** Next.js (App Router, Server Components by default, Client Components for interactivity)
- **Language:** TypeScript (Strict mode enabled)
- **Styling:** Tailwind CSS with CSS custom variables for semantic theming
- **Animation:** Motion for React (framer-motion) with prefers-reduced-motion support
- **Icons:** Lucide React
- **Database & Auth:** Supabase PostgreSQL with Row Level Security (RLS) & Supabase Auth
- **Forms & Validation:** React Hook Form + Zod schema validation (dual client and server validation)
- **Transactional Notifications:** Resend API for email alerts + WhatsApp direct integration API
- **SEO & Social:** OpenGraph, Twitter Cards, Schema.org LocalBusiness, Service, BreadcrumbList, FAQPage JSON-LD

---

## 5. Scope of Application Modules

### 5.1 Public Website (`src/app/(website)`)
- **Homepage:** High-impact editorial hero, trust indicators, practitioner bio preview, service carousel/cards, interactive benefits, client reviews, FAQ accordion, location map & contact form.
- **Services Catalog & Individual Service Detail Pages:**
  - Dedicated SEO landing pages for each service (e.g. `/services/tarot-card-reading`, `/services/reiki-healing-facial`, etc.).
  - Rich metadata, structured data, pricing, session outline, FAQs, and instant booking trigger.
- **About Deepika Page (`/about`):** Philosophy, spiritual journey, certifications, ethics, and studio environment.
- **Booking Flow (`/book`):**
  - Multi-step booking experience: service selection, location mode (Studio vs Online), calendar date/time slot picker, client details, validation, booking confirmation.
  - Generates pending booking in Supabase, triggers confirmation email via Resend and WhatsApp alert.
- **Blog & Spiritual Guidance (`/blog`):**
  - Articles on tarot, chakra healing, crystal care, meditation, and wellness.
  - Rich SEO schema (`BlogPosting`), reading time, category filters.
- **Contact & Studio Visit (`/contact`):**
  - Interactive Google Maps embed for Ghansoli location.
  - Direct inquiry form, click-to-call, click-to-WhatsApp.
- **Legal Pages:** `/privacy-policy`, `/terms-of-service`, `/disclaimer` (spiritual disclaimer compliance).

### 5.2 Admin Portal (`src/app/(admin)`)
- **Protected Route Guard:** Authenticated via Supabase Auth (admin role check).
- **Dashboard Overview:** Metric cards (Total bookings, revenue, upcoming appointments, contact queries).
- **Bookings Management:** Calendar/list view, status transitions (Pending, Confirmed, Completed, Cancelled), notes, filter by date/service.
- **Services & Pricing Management:** Real-time editing of prices, durations, descriptions, and visibility toggle.
- **Blog CMS:** Create, edit, publish, draft articles with markdown or rich text.
- **Inquiries / Leads:** Centralized CRM for contact requests.

---

## 6. Non-Functional & Quality Standards

1. **Security:**
   - Strict Supabase RLS policies preventing unauthorized access to customer records.
   - Zero hardcoded API keys or secrets in repository.
   - Input sanitization and Zod server-action validation.
2. **Performance & Core Web Vitals:**
   - Lighthouse score target: >90 across Performance, Accessibility, Best Practices, and SEO.
   - Dynamic image optimization via Next.js `<Image>` with explicit sizes and blur placeholders.
   - Server-side rendering (SSR) and Incremental Static Regeneration (ISR) where appropriate.
3. **Accessibility (WCAG 2.1 AA):**
   - High contrast ratios (Gold on Dark Violet / Violet on Alabaster).
   - Full keyboard navigation, visible focus rings, ARIA labels on all modal and interactive controls.
4. **Mobile Responsiveness:**
   - Designed mobile-first for Indian smartphone users (360px up to 4K ultra-wide screens).
