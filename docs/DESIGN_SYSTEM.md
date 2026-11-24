# Inner Mirror Bliss — Brand Design System Specification

**Document Version:** 2.0.0 (Phase 2 Update)  
**Brand Identity:** Inner Mirror Bliss by Deepika  
**Visual Style:** Premium Light Spiritual Wellness Luxury  
**Core Tone:** Feminine, Mystical, Elegant, Playful, Welcoming  

---

## 1. Strict Design Direction & Color Philosophy

Inner Mirror Bliss is designed as an ethereal, welcoming, premium **LIGHT THEME** website. Dark backgrounds are strictly avoided in favor of luminous ivory, warm alabaster, gentle blush, and lavender mists.

### The 75 / 20 / 5 Golden Color Rule
- **75% Light Backgrounds:**
  - Ivory (`#FFF9F1`): Primary page canvas, warm and soothing
  - Pure White (`#FFFFFF`): Elevated cards, containers, input fields
  - Light Lavender (`#F1E6F6`): Section contrasts, subtle fills, chip badges
  - Blush Soft (`#F5DFE9`): Heart-centered accents, testimonial backdrops
- **20% Purple & Lavender:**
  - Primary Spiritual Purple (`#552878`): Primary buttons, key titles, active states
  - Deep Plum (`#351044`): Headings, navigation text, high-contrast anchors
  - Lavender Mist (`#C8A5E8`): Borders, icons, tags, gentle glow rings
  - Body Text Plum-Charcoal (`#45364D`): Crisp editorial body readability
  - Muted Lavender-Gray (`#897A8E`): Secondary captions, timestamps, icons
- **5% Champagne Gold:**
  - Champagne Gold (`#D6B36A`): Sacred ornaments, highlights, secondary CTAs, star ratings

---

## 2. Color Tokens Reference

| Token Name | Hex Code | Purpose / Usage |
| :--- | :--- | :--- |
| **Primary** | `#552878` | Primary CTA buttons, brand badges, active underlines |
| **Deep Plum** | `#351044` | Main headings (Cormorant), logo title, dark accents |
| **Lavender** | `#C8A5E8` | Secondary borders, iconography, card highlights |
| **Light Lavender** | `#F1E6F6` | Section alternations, tag backgrounds, drawer tint |
| **Blush** | `#F5DFE9` | Emotional healing accents, warm card highlights |
| **Ivory** | `#FFF9F1` | Primary site background, warm soothing canvas |
| **Champagne Gold** | `#D6B36A` | Sacred stars, lotus ornaments, pricing accents |
| **White** | `#FFFFFF` | Card surfaces, inputs, modal containers |
| **Body** | `#45364D` | High-legibility long-form prose and body text |
| **Muted** | `#897A8E` | Subtitles, reading times, breadcrumbs |

---

## 3. Typography System & Type Scale

```text
Headings & Display:  Cormorant Garamond (Serif, Editorial, Sacred Dignity)
Body & Interface:    Lato (Clean, Highly Legible, Warm Geometric Sans)
Short Flourishes:    Great Vibes (Cursive Script, Artisanal Flourish only)
```

### Complete Type Scale

| Scale Token | Class Name | Font Family | Size / Leading | Weight | Sample Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display XL** | `.text-display-xl` | Cormorant | clamp(2.75rem, 6vw, 4.5rem) / 1.1 | 600 | Hero Statement |
| **Display LG** | `.text-display-lg` | Cormorant | clamp(2.25rem, 5vw, 3.75rem) / 1.15| 600 | Page Hero Titles |
| **H1** | `.text-h1` | Cormorant | clamp(2rem, 4vw, 3rem) / 1.2 | 600 | Main Section Titles |
| **H2** | `.text-h2` | Cormorant | clamp(1.75rem, 3.5vw, 2.5rem) / 1.25| 600 | Service & Bio Headings |
| **H3** | `.text-h3` | Cormorant | clamp(1.35rem, 2.5vw, 1.85rem) / 1.3| 600 | Card Titles & Modals |
| **H4** | `.text-h4` | Cormorant | clamp(1.15rem, 2vw, 1.45rem) / 1.35 | 600 | Subsections & Features |
| **Body Large** | `.text-body-lg` | Lato | 1.125rem (18px) / 1.7 | 400 | Editorial Lead Paragraphs |
| **Body Regular**| `.text-body-reg` | Lato | 1.0rem (16px) / 1.65 | 400 | Standard Body Text |
| **Body Small** | `.text-body-sm` | Lato | 0.875rem (14px) / 1.6 | 400 | Card Details & Disclaimers |
| **Caption** | `.text-caption` | Lato | 0.75rem (12px) / 1.5 | 400 | Footnotes & Timestamps |
| **Eyebrow** | `.text-eyebrow` | Lato | 0.75rem (12px) / 1.2 | 700 | Uppercase Category Badges |
| **Button** | `.text-button` | Lato | 0.9375rem (15px) / 1.0 | 700 | Interactive CTA Buttons |

---

## 4. Responsive Grid & Layout System

- **Desktop (>= 1024px):** 12-column grid, max-width `1240px`, 32px gutters.
- **Tablet (768px - 1023px):** 8-column grid, 24px gutters, fluid padding.
- **Mobile (< 768px):** 4-column grid, 16px gutters, full-bleed touch targets.
- **Spacing Tokens:** `4px`, `8px`, `12px`, `16px`, `24px`, `32px`, `48px`, `64px`, `80px`, `96px`, `120px`.

---

## 5. Visual Component Library (30 Core Components)

1. `Container`: Responsive 12-column max-w-[1240px] wrapper.
2. `Section`: Spaced section with ivory/white/lavender/blush backgrounds.
3. `SectionHeading`: Harmonious title, script flourish, and lead text.
4. `Eyebrow`: Sacred badge with sparkles and spiritual category tokens.
5. `PrimaryButton`: Deep spiritual violet (`#552878`) with subtle sheen.
6. `SecondaryButton`: Clean white/lavender border with plum text.
7. `GoldButton`: Champagne gold (`#D6B36A`) high-conversion action button.
8. `IconButton`: Accessible circular icon button.
9. `ServiceCard`: Comprehensive service showcase with price, duration & benefits.
10. `ServiceCardCompact`: Horizontal sleek service preview.
11. `PricingCard`: Clean pricing breakdown with featured glow.
12. `TestimonialCard`: Authentic review card with gold stars and quote.
13. `BlogCard`: Editorial blog preview with reading time & author.
14. `CategoryCard`: Sacred pillar card (Tarot, Reiki, Aura, Crystal).
15. `FeatureCard`: Step-by-step benefit presentation.
16. `Breadcrumb`: Accessible semantic breadcrumbs.
17. `FAQAccordion`: Smooth expanding questions and answers.
18. `NewsletterForm`: Light theme spiritual newsletter subscription.
19. `BookingCTA`: High-impact banner connecting to booking & WhatsApp.
20. `WhatsAppButton`: Floating & inline WhatsApp contact button.
21. `ContactCard`: Studio address, phone, email & hours card.
22. `EmptyState`: Spiritual empty data state with icon and action.
23. `LoadingSkeleton`: Shimmering spiritual loading skeleton.
24. `ErrorState`: Friendly energy rebalancing error card.
25. `Modal`: Accessible dialog overlay with backdrop blur.
26. `MobileNavigation`: Slide-out drawer menu with contact actions.
27. `DesktopNavigation`: Sticky top navbar with active indicators.
28. `Footer`: Editorial light-theme footer with NAP and sacred invocation.
29. `DecorativeDivider`: Sacred lotus or celestial stars gold divider.
30. `FloatingDecoration`: Gentle Motion for React floating element.

---

## 6. Animation Utilities (Motion for React)

- `fadeUp`: Smooth 0.6s entrance with 24px vertical rise.
- `fadeIn`: Gentle opacity reveal.
- `slideLeft` / `slideRight`: Lateral entrance with custom bezier `[0.22, 1, 0.36, 1]`.
- `scaleIn`: Soft scale from 0.95 to 1.0.
- `staggerContainer` / `staggerItem`: Staggered list reveals at 0.12s intervals.
- `floating`: Infinite gentle breathing float (`repeatType: "mirror"`), respects `prefers-reduced-motion`.
- `imageReveal`: Subtle clip and blur resolution.
- `softParallax`: Gentle hover displacement.
