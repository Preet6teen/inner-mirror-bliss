-- ==============================================================================
-- INNER MIRROR BLISS BY DEEPIKA - INITIAL SUPABASE SCHEMA
-- ==============================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. ENUMS
CREATE TYPE public.booking_status AS ENUM ('pending', 'confirmed', 'completed', 'cancelled');
CREATE TYPE public.service_mode AS ENUM ('studio', 'online_video', 'distance');
CREATE TYPE public.inquiry_status AS ENUM ('new', 'in_progress', 'resolved');
CREATE TYPE public.post_status AS ENUM ('draft', 'published', 'archived');

-- 2. SERVICES TABLE
CREATE TABLE IF NOT EXISTS public.services (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    category TEXT NOT NULL CHECK (category IN ('tarot', 'reiki', 'energy-healing', 'specialized')),
    price NUMERIC(10, 2) NOT NULL CHECK (price >= 0),
    duration_minutes INTEGER NOT NULL CHECK (duration_minutes > 0),
    delivery_modes TEXT[] NOT NULL DEFAULT ARRAY['in-person'],
    short_description TEXT NOT NULL,
    full_description TEXT NOT NULL,
    benefits TEXT[] NOT NULL DEFAULT '{}',
    image_url TEXT,
    is_active BOOLEAN NOT NULL DEFAULT true,
    display_order INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', now())
);

-- 3. BOOKINGS TABLE
CREATE TABLE IF NOT EXISTS public.bookings (
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

-- 4. BLOCKED SLOTS TABLE
CREATE TABLE IF NOT EXISTS public.blocked_slots (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slot_date DATE NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    reason TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', now())
);

-- 5. INQUIRIES TABLE
CREATE TABLE IF NOT EXISTS public.inquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    status public.inquiry_status NOT NULL DEFAULT 'new',
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', now())
);

-- 6. BLOG POSTS TABLE
CREATE TABLE IF NOT EXISTS public.blog_posts (
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

-- 7. TESTIMONIALS TABLE
CREATE TABLE IF NOT EXISTS public.testimonials (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    client_name TEXT NOT NULL,
    service_id UUID REFERENCES public.services(id) ON DELETE SET NULL,
    service_name TEXT NOT NULL,
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    review_text TEXT NOT NULL,
    location TEXT,
    is_featured BOOLEAN NOT NULL DEFAULT false,
    is_approved BOOLEAN NOT NULL DEFAULT false,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', now())
);

-- 8. ROW LEVEL SECURITY (RLS)
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blocked_slots ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;

-- Services Policies
CREATE POLICY "Public services can be viewed by anyone"
    ON public.services FOR SELECT
    USING (is_active = true);

CREATE POLICY "Admins have full access to services"
    ON public.services FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- Bookings Policies
CREATE POLICY "Public can insert bookings"
    ON public.bookings FOR INSERT
    WITH CHECK (true);

CREATE POLICY "Admins have full access to bookings"
    ON public.bookings FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- Inquiries Policies
CREATE POLICY "Public can insert inquiries"
    ON public.inquiries FOR INSERT
    WITH CHECK (true);

CREATE POLICY "Admins can view and manage inquiries"
    ON public.inquiries FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- Blog Posts Policies
CREATE POLICY "Public can view published blog posts"
    ON public.blog_posts FOR SELECT
    USING (status = 'published');

CREATE POLICY "Admins have full access to blog posts"
    ON public.blog_posts FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- Testimonials Policies
CREATE POLICY "Public can view approved testimonials"
    ON public.testimonials FOR SELECT
    USING (is_approved = true);

CREATE POLICY "Admins have full access to testimonials"
    ON public.testimonials FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);
