# Supabase Database Architecture & Schema Specification
## Inner Mirror Bliss by Deepika

**Document Version:** 1.0.0  
**Database Engine:** PostgreSQL 15+ (Supabase)  
**Security Model:** Row-Level Security (RLS) Enforced  

---

## 1. Schema Entity Relationship Overview

```text
  ┌──────────────────┐               ┌──────────────────┐
  │     services     │ 1           N │     bookings     │
  │──────────────────│───────────────│──────────────────│
  │ id (UUID, PK)    │               │ id (UUID, PK)    │
  │ slug (TEXT, UQ)  │               │ booking_ref (UQ) │
  │ title (TEXT)     │               │ service_id (FK)  │
  │ price (NUMERIC)  │               │ client_name      │
  │ duration_min     │               │ client_phone     │
  │ delivery_modes   │               │ appointment_date │
  │ is_active (BOOL) │               │ appointment_time │
  └──────────────────┘               │ status (ENUM)    │
                                     └──────────────────┘

  ┌──────────────────┐               ┌──────────────────┐
  │    blog_posts    │               │    inquiries     │
  │──────────────────│               │──────────────────│
  │ id (UUID, PK)    │               │ id (UUID, PK)    │
  │ slug (TEXT, UQ)  │               │ name (TEXT)      │
  │ title (TEXT)     │               │ email (TEXT)     │
  │ content (TEXT)   │               │ phone (TEXT)     │
  │ status (ENUM)    │               │ message (TEXT)   │
  │ published_at     │               │ status (ENUM)    │
  └──────────────────┘               └──────────────────┘

  ┌──────────────────┐               ┌──────────────────┐
  │  blocked_slots   │               │   testimonials   │
  │──────────────────│               │──────────────────│
  │ id (UUID, PK)    │               │ id (UUID, PK)    │
  │ date (DATE)      │               │ client_name      │
  │ start_time (TIME)│               │ rating (INT)     │
  │ end_time (TIME)  │               │ review_text      │
  │ reason (TEXT)    │               │ is_featured      │
  └──────────────────┘               └──────────────────┘
```

---

## 2. Table Definitions

### 2.1 `services`
Stores the complete spiritual service catalog with dynamically editable pricing, durations, and content.

```sql
CREATE TABLE public.services (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    category TEXT NOT NULL CHECK (category IN ('tarot', 'reiki', 'energy-healing', 'specialized')),
    price NUMERIC(10, 2) NOT NULL CHECK (price >= 0),
    duration_minutes INTEGER NOT NULL CHECK (duration_minutes > 0),
    delivery_modes TEXT[] NOT NULL DEFAULT ARRAY['in-person'], -- 'in-person', 'online-video', 'distance'
    short_description TEXT NOT NULL,
    full_description TEXT NOT NULL,
    benefits TEXT[] NOT NULL DEFAULT '{}',
    image_url TEXT,
    is_active BOOLEAN NOT NULL DEFAULT true,
    display_order INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', now())
);
```

### 2.2 `bookings`
Stores client appointment requests and statuses.

```sql
CREATE TYPE public.booking_status AS ENUM ('pending', 'confirmed', 'completed', 'cancelled');
CREATE TYPE public.service_mode AS ENUM ('studio', 'online_video', 'distance');

CREATE TABLE public.bookings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    booking_reference TEXT UNIQUE NOT NULL,
    service_id UUID NOT NULL REFERENCES public.services(id) ON DELETE RESTRICT,
    client_name TEXT NOT NULL,
    client_email TEXT NOT NULL,
    client_phone TEXT NOT NULL,
    appointment_date DATE NOT NULL,
    appointment_time TIME NOT NULL,
    mode public.service_mode NOT NULL DEFAULT 'studio',
    status public.booking_status NOT NULL DEFAULT 'pending',
    client_notes TEXT,
    admin_notes TEXT,
    price_at_booking NUMERIC(10, 2) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', now())
);
```

### 2.3 `blocked_slots`
Allows the practitioner to block off personal time, holidays, or fully booked hours.

```sql
CREATE TABLE public.blocked_slots (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slot_date DATE NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    reason TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', now())
);
```

### 2.4 `inquiries`
Stores inquiries from the public contact form.

```sql
CREATE TYPE public.inquiry_status AS ENUM ('new', 'in_progress', 'resolved');

CREATE TABLE public.inquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    status public.inquiry_status NOT NULL DEFAULT 'new',
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', now())
);
```

### 2.5 `blog_posts`
Stores spiritual wellness articles authored by Deepika.

```sql
CREATE TYPE public.post_status AS ENUM ('draft', 'published', 'archived');

CREATE TABLE public.blog_posts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    excerpt TEXT NOT NULL,
    content TEXT NOT NULL,
    category TEXT NOT NULL,
    tags TEXT[] NOT NULL DEFAULT '{}',
    cover_image_url TEXT,
    author_name TEXT NOT NULL DEFAULT 'Deepika',
    reading_time_minutes INTEGER NOT NULL DEFAULT 5,
    status public.post_status NOT NULL DEFAULT 'draft',
    published_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', now())
);
```

### 2.6 `testimonials`
Authentic client feedback, ratings, and transformation stories.

```sql
CREATE TABLE public.testimonials (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    client_name TEXT NOT NULL,
    service_id UUID REFERENCES public.services(id) ON DELETE SET NULL,
    service_name TEXT NOT NULL,
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    review_text TEXT NOT NULL,
    location TEXT, -- e.g. "Navi Mumbai", "Mumbai", "Pune"
    is_featured BOOLEAN NOT NULL DEFAULT false,
    is_approved BOOLEAN NOT NULL DEFAULT false,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', now())
);
```

---

## 3. Row-Level Security (RLS) Policies

All tables have RLS enabled by default:
- **`services`**: Public can `SELECT` where `is_active = true`. Authenticated admin can `SELECT`, `INSERT`, `UPDATE`, `DELETE`.
- **`bookings`**: Public (anon) can `INSERT`. Authenticated admin can `SELECT`, `UPDATE`, `DELETE`.
- **`blocked_slots`**: Public can `SELECT` (to compute available slots). Admin can manage.
- **`inquiries`**: Public can `INSERT`. Admin can manage.
- **`blog_posts`**: Public can `SELECT` where `status = 'published'`. Admin can manage all.
- **`testimonials`**: Public can `SELECT` where `is_approved = true`. Admin can manage all.
