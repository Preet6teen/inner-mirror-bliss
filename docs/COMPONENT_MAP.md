# Inner Mirror Bliss — Component Hierarchy & Architectural Map

**Document Version:** 1.0.0  
**Framework:** Next.js (App Router, Server/Client Hybrid Architecture)  

---

## 1. Component Design Strategy

Inner Mirror Bliss utilizes a strictly structured atomic component hierarchy.
- **Server Components (Default):** Static sections, layout shells, markdown articles, SEO headers, footer links.
- **Client Components (`"use client"`):** Interactive forms, dynamic pricing calculators, date/slot pickers, motion transitions, floating action buttons, admin data tables.

---

## 2. Component Taxonomy & Directory Map

```text
src/components/
├── layout/
│   ├── SiteHeader.tsx                 # [Server/Client] Sticky navigation with backdrop blur & booking CTA
│   ├── SiteFooter.tsx                 # [Server] Editorial footer with sacred motifs, contact & legal links
│   ├── AnnouncementBar.tsx            # [Server/Client] Subtle banner for special offers or sacred dates
│   ├── MobileNav.tsx                  # [Client] Drawer navigation with smooth motion slide-in
│   └── FloatingWhatsApp.tsx           # [Client] Direct click-to-chat WhatsApp widget with prefilled text
│
├── navigation/
│   ├── NavLinks.tsx                   # [Client] Desktop nav items with animated active underline
│   ├── Breadcrumbs.tsx                # [Server] Accessible semantic breadcrumbs with schema.org integration
│   └── ServiceCategoryTabs.tsx        # [Client] Filter tabs for services (All, Tarot, Reiki, Healing)
│
├── sections/
│   ├── HeroSection.tsx                # [Server/Client] Editorial hero with typography, sacred motifs & CTA
│   ├── PractitionerBio.tsx            # [Server] Deepika's story, background, values, and authentic portrait
│   ├── CoreBenefits.tsx               # [Server] 8 Key benefits from the brand posters (Stress, Sleep, etc.)
│   ├── ServicesPreview.tsx            # [Server] Highlighted service cards with dynamic pricing badges
│   ├── SacredPhilosophy.tsx           # [Server] "The Cards Don't Decide Your Future..." quote & teachings
│   ├── StudioExperience.tsx           # [Server] Peaceful Ghansoli studio ambience and sanctuary details
│   ├── TestimonialsSection.tsx        # [Client] Client experiences, before/after healing reviews
│   ├── FAQSection.tsx                 # [Client] Accordion for common tarot & energy healing questions
│   ├── MapLocationSection.tsx         # [Server/Client] Google Maps embed, studio address, transit directions
│   └── CTASection.tsx                 # [Server/Client] High-conversion booking banner with gold glow
│
├── services/
│   ├── ServiceCard.tsx                # [Server/Client] Reusable service preview card with price, duration, CTA
│   ├── ServiceGrid.tsx                # [Server] Responsive grid layout for catalog
│   ├── ServiceDetailHero.tsx          # [Server] Hero banner for individual service landing pages
│   ├── ServiceFeaturesList.tsx        # [Server] Checkmark list of key benefits per service
│   ├── ServiceSessionOutline.tsx      # [Server] Step-by-step breakdown of what happens during a session
│   └── ServiceBookingCard.tsx         # [Client] Floating sidebar card on detail page for instant booking
│
├── booking/
│   ├── BookingFlow.tsx                # [Client] Multi-step wizard coordinator
│   ├── StepServiceSelect.tsx          # [Client] Step 1: Select or confirm service
│   ├── StepModeSelect.tsx             # [Client] Step 2: Choose Studio (Ghansoli) vs Online (Video Call)
│   ├── StepDateTimeSelect.tsx         # [Client] Step 3: Interactive date picker & time slot selector
│   ├── StepClientDetails.tsx          # [Client] Step 4: Full Name, Phone, Email, Intention/Notes
│   ├── StepConfirmation.tsx           # [Client] Step 5: Summary, price recap, submit booking
│   └── BookingSuccessCard.tsx         # [Client] Success screen with calendar add, WhatsApp confirm link
│
├── blog/
│   ├── BlogCard.tsx                   # [Server] Card preview with reading time, category badge, date
│   ├── BlogGrid.tsx                   # [Server] Grid layout with pagination / load more
│   ├── BlogArticleHeader.tsx          # [Server] Title, author (Deepika), published date, social share
│   └── BlogContentRenderer.tsx        # [Server] Markdown/HTML prose renderer with styled typography
│
├── forms/
│   ├── ContactForm.tsx                # [Client] General inquiries, questions, feedback
│   ├── QuickBookingModal.tsx          # [Client] Fast slide-over booking drawer accessible from any page
│   └── FormFieldWrapper.tsx           # [Client] Standardized label, error message, and helper text
│
├── ui/
│   ├── Button.tsx                     # [Client/Server] Primary (Gold), Secondary (Violet), Outline, Ghost
│   ├── Badge.tsx                      # [Server] Status and category pills (₹599, In-Studio, Online)
│   ├── Card.tsx                       # [Server] Styled glassmorphic container with violet/gold borders
│   ├── Input.tsx                      # [Client] Accessible text input with focus ring
│   ├── Textarea.tsx                   # [Client] Accessible textarea
│   ├── Select.tsx                     # [Client] Native & custom styled select dropdown
│   ├── Modal.tsx                      # [Client] Accessible dialog overlay with portal & focus trap
│   ├── Accordion.tsx                  # [Client] Smooth expanding FAQ accordion
│   └── LotusDivider.tsx               # [Server] Decorative sacred lotus divider icon with gold accents
│
├── animations/
│   ├── FadeIn.tsx                     # [Client] Smooth viewport fade-in with customizable direction
│   ├── StaggerContainer.tsx           # [Client] Staggered children container for cards and lists
│   ├── ShimmerText.tsx                # [Client] Elegant gold text shimmer effect
│   └── GlowBackground.tsx             # [Client] Ambient breathing violet/gold background light
│
└── admin/
    ├── AdminSidebar.tsx               # [Client] Sidebar navigation with active route highlights
    ├── AdminHeader.tsx                # [Client] User profile, notifications, logout button
    ├── MetricCard.tsx                 # [Server] KPI summary card (Total revenue, Bookings, Leads)
    ├── BookingsTable.tsx              # [Client] Data table with sorting, filtering, and status toggle
    ├── ServicePriceEditor.tsx         # [Client] Modal to edit service price, duration, and details
    └── InquiryList.tsx                # [Client] CRM list for customer messages with respond actions
```

---

## 3. Reusability & Consistency Guidelines

- **Props Interface Standard:** Every UI component exports a TypeScript interface (e.g. `ButtonProps`, `ServiceCardProps`) extending standard HTML element attributes.
- **Dynamic Theming Support:** Components consume Tailwind tokens mapped to CSS variables (`--primary`, `--gold-metallic`, `--spiritual-night`).
- **Motion Restraint:** Animations adhere to a calm, grounded spiritual pace (durations of 0.5s–0.8s, gentle easings `[0.22, 1, 0.36, 1]`), fully honoring `prefers-reduced-motion: reduce`.
