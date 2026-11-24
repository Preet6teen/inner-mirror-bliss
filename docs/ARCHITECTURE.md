# System Architecture & Technical Specifications
## Inner Mirror Bliss — Next.js Enterprise Spiritual Wellness Platform

**Document Version:** 1.0.0  
**Target Environment:** Node.js v20+ / Next.js 15+ (App Router)  

---

## 1. Architectural Principles

1. **Server Components by Default:**  
   Every page, layout, and data-fetching component is executed on the server. Client components (`"use client"`) are restricted solely to interactive elements (e.g. slot pickers, animated carousels, modals, form inputs, dynamic filter tabs).

2. **Clean Separation of Concerns:**  
   - `src/app/`: Routing, metadata, route handlers, error boundaries, page layouts.
   - `src/components/`: Reusable presentation and interaction blocks, separated by domain.
   - `src/config/`: Single source of truth for business metadata, contact details, static defaults.
   - `src/lib/`: Reusable clients (Supabase, Resend), validation schemas, utility functions.
   - `src/types/`: Centralized TypeScript interfaces and Database row types.

3. **Progressive Enhancement & Resilience:**  
   - Critical content (services, about, reviews, SEO text) renders in static HTML without client-side JS dependency.
   - Forms utilize standard HTML form capabilities enhanced with React Hook Form and Zod server-side validation.

---

## 2. Route Hierarchy & Route Groups

```text
src/app/
├── layout.tsx                    # Global root layout (Fonts, Providers, Global Toast, Schema.org)
├── not-found.tsx                 # Spiritual-themed 404 error page
├── error.tsx                     # Top-level client error boundary
├── global-error.tsx              # Fallback for critical layout errors
├── sitemap.ts                    # Dynamic XML sitemap generator
├── robots.ts                     # Search engine crawler directive generator
│
├── (website)/                    # Public storefront route group
│   ├── layout.tsx                # Website layout (SiteHeader, AnnouncementBar, SiteFooter, FloatingWhatsApp)
│   ├── page.tsx                  # High-impact editorial homepage
│   ├── about/
│   │   └── page.tsx              # Deepika's story, values, ethics, and studio tour
│   ├── services/
│   │   ├── page.tsx              # Complete service catalog with category filtering
│   │   └── [slug]/
│   │       └── page.tsx          # Dynamic individual service landing page
│   ├── book/
│   │   └── page.tsx              # Interactive booking engine & calendar slot selector
│   ├── blog/
│   │   ├── page.tsx              # Blog index with categories & search
│   │   └── [slug]/
│   │       └── page.tsx          # Detailed spiritual article page with JSON-LD
│   ├── contact/
│   │   └── page.tsx              # Location, Google Maps, studio hours, inquiry form
│   ├── reviews/
│   │   └── page.tsx              # Client testimonials & success stories
│   ├── privacy-policy/page.tsx   # Privacy policy
│   ├── terms-of-service/page.tsx # Terms & booking policies
│   └── disclaimer/page.tsx       # Spiritual disclaimer
│
├── (admin)/                      # Secure Admin Portal route group
│   ├── layout.tsx                # Admin layout (AdminSidebar, AdminHeader, SessionGuard)
│   ├── admin/
│   │   ├── login/
│   │   │   └── page.tsx          # Secure email/password login
│   │   ├── dashboard/
│   │   │   └── page.tsx          # KPI dashboard (Bookings, Revenue, Pending queries)
│   │   ├── bookings/
│   │   │   ├── page.tsx          # Bookings table with filters, search & status updates
│   │   │   └── [id]/page.tsx     # Booking detail view & consultation notes
│   │   ├── services/
│   │   │   └── page.tsx          # Price & duration manager (updates Supabase in real-time)
│   │   ├── blog/
│   │   │   ├── page.tsx          # Article management & status
│   │   │   ├── new/page.tsx      # Create article
│   │   │   └── [id]/page.tsx     # Edit article
│   │   └── inquiries/
│   │       └── page.tsx          # Contact messages CRM
│
└── api/
    ├── booking/
    │   └── route.ts              # Booking creation, slot reservation & email notification
    ├── contact/
    │   └── route.ts              # Inquiry processing & alert dispatch
    └── revalidate/
        └── route.ts              # On-demand ISR revalidation webhook for CMS updates
```

---

## 3. Data Flow & Security Pipeline

```
[ User Browser ]
       │
       ▼ (HTTPS POST with JSON payload)
[ Server Action / API Route (/api/booking) ]
       │
       ├──> 1. Zod Schema Validation (src/lib/validations/booking.ts)
       │    └── Fails: Return 400 with detailed field errors
       │
       ├──> 2. Supabase Server Client (src/lib/supabase/server.ts)
       │    └── Verify slot availability in `bookings` table
       │    └── Insert booking with 'pending' status
       │
       ├──> 3. Resend Email Dispatch (src/lib/email/resend.ts)
       │    ├── Customer confirmation email
       │    └── Deepika admin alert email
       │
       └──> 4. Return sanitized booking confirmation to client
```

---

## 4. Supabase Auth & RLS Model

1. **Authentication:**
   - Supabase Auth handles admin sessions using HTTP-only Secure cookies via `@supabase/ssr`.
   - Next.js Middleware (`src/middleware.ts`) validates sessions on all `/(admin)` paths, redirecting unauthenticated traffic to `/admin/login`.

2. **Row Level Security (RLS):**
   - `services`: Public can READ where `is_active = true`. Admins can SELECT, INSERT, UPDATE, DELETE.
   - `bookings`: Public can INSERT (create new bookings). Only authenticated Admins can SELECT, UPDATE, DELETE.
   - `blog_posts`: Public can READ where `status = 'published'`. Admins have full access.
   - `inquiries`: Public can INSERT. Only Admins can SELECT, UPDATE, DELETE.
