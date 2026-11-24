# Inner Mirror Bliss by Deepika — Project Development Guidelines

## 1. Strict Brand & Aesthetic Principles

### Premium Light Theme Only:
- **No Dark Mode as Default or Primary Canvas.** The website must radiate warmth, peace, light, and spiritual sanctity.
- **75% Light Backgrounds:**
  - Ivory (`#FFF9F1`): Primary background canvas
  - White (`#FFFFFF`): Elevated cards, modals, form inputs, surfaces
  - Light Lavender (`#F1E6F6`): Section fills, tags, drawer backgrounds
  - Blush Soft (`#F5DFE9`): Gentle emotional healing tints, testimonials
- **20% Purple & Lavender:**
  - Primary (`#552878`): Core brand buttons, active accents, highlighted headings
  - Deep Plum (`#351044`): Editorial titles, logo mark, high-contrast dark accents
  - Lavender (`#C8A5E8`): Borders, subtle icons, badge rings
  - Body Text (`#45364D`): Plum-Charcoal for reading comfort
  - Muted Text (`#897A8E`): Captions, dates, secondary text
- **5% Champagne Gold:**
  - Champagne Gold (`#D6B36A`): Sacred star ornaments, lotus flourishes, booking CTAs, star reviews

---

## 2. Typography Scale & Font Rules

- **Cormorant Garamond (Serif):** All headings, display titles, and editorial quotes.
- **Lato (Sans):** Body text, navigation links, form inputs, and button labels.
- **Great Vibes (Script):** Short decorative flourishes ONLY (e.g. *"Bliss"*, *"Sacred Transformation"*, quote flourishes). Never use script for long paragraphs or buttons.

---

## 3. Responsive Grid & Layout Standards

- **Maximum Content Width:** `1240px` (Never exceed or use unconstrained full-bleed text).
- **Desktop Grid:** 12-column responsive layout.
- **Tablet Grid:** 8-column layout.
- **Mobile Grid:** 4-column layout.
- **Spacing Scale:** Strictly adhere to 4, 8, 12, 16, 24, 32, 48, 64, 80, 96, 120px tokens.

---

## 4. Architectural Rules

- **Server Components by Default:** Client components (`"use client"`) are used only when interactive state, browser events, or motion transitions are needed.
- **Strict TypeScript:** No implicit `any`, no unsafe casting.
- **Real Backend / Supabase:** No fake mock API responses; all schemas must align with Supabase PostgreSQL tables and RLS security.
- **Image Integrity:**
  - Never generate fake text or logos inside images.
  - Never present generated faces as real photographs of Deepika.
  - Prioritize LCP hero images, use WebP/AVIF, and prevent layout shift with explicit sizes.

---

## 5. Development Phase Structure

- **Phase 1:** Project Initialization, Architecture & Planning *(Completed)*
- **Phase 2:** Complete Brand Design System & Visual Component Library *(Current Phase)*
- **Phase 3:** Complete Public Website Implementation (Homepage & Service Detail Pages)
- **Phase 4:** Dynamic Booking Engine & Transactional Notifications
- **Phase 5:** Supabase Backend & Secure Admin Portal
- **Phase 6:** SEO Hardening, Accessibility Audit & Production Deployment
