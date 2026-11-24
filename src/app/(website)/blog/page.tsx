import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { initialBlogPosts } from "@/data/blog-posts";
import { BlogClient } from "./BlogClient";
import { BookingCTA } from "@/components/sections/BookingCTA";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Calendar, Clock, ArrowRight, User } from "lucide-react";
import { getAssetPath } from "@/lib/utils";

export const metadata: Metadata = {
  title: "The Sacred Mirror Blog | Tarot, Reiki & Spiritual Wellness Articles",
  description:
    "Explore inspiring articles on tarot card reading, aura cleansing, crystal healing, chakra alignment, and mindful daily rituals by Deepika at Inner Mirror Bliss.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogListingPage() {
  const featuredPost = initialBlogPosts[0];

  return (
    <div className="bg-ivory/40 min-h-screen">
      {/* Breadcrumb Bar */}
      <div className="border-b border-primary/10 bg-white/70 backdrop-blur-sm">
        <Container>
          <div className="py-3">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
              ]}
            />
          </div>
        </Container>
      </div>

      {/* Hero Header */}
      <Section variant="light" spacing="lg" className="pt-12 sm:pt-16 pb-12">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Eyebrow>THE SACRED MIRROR JOURNAL</Eyebrow>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-plum leading-tight">
              Spiritual Insights & Reflection
            </h1>
            <p className="font-sans text-lg sm:text-xl text-body/90 leading-relaxed max-w-2xl mx-auto">
              Gentle articles exploring tarot symbolism, energy healing practices, and peaceful mindfulness for everyday living.
            </p>
          </div>
        </Container>
      </Section>

      {/* Featured Article Spotlight */}
      {featuredPost && (
        <Section variant="white" spacing="md" className="pt-0 pb-12">
          <Container>
            <div className="p-6 sm:p-10 rounded-4xl bg-gradient-to-br from-white via-ivory to-lavender-light/40 border-2 border-gold/40 shadow-card">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 relative w-full h-72 sm:h-96 rounded-3xl overflow-hidden border border-primary/10 bg-lavender-light/30">
                  <Image
                    src={getAssetPath(featuredPost.imageUrl)}
                    alt={featuredPost.title}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold text-plum font-sans shadow-sm">
                      Featured Reading
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-4 font-sans">
                  <div className="flex items-center gap-3 text-xs text-muted">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-gold" />
                      {new Date(featuredPost.publishedAt).toLocaleDateString("en-IN", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-gold" />
                      {featuredPost.readingTime}
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-plum leading-snug">
                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="hover:text-primary transition-colors"
                    >
                      {featuredPost.title}
                    </Link>
                  </h2>

                  <p className="text-sm sm:text-base text-body/85 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="pt-3 flex items-center justify-between">
                    <span className="text-xs font-bold text-plum flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-gold" />
                      By {featuredPost.author}
                    </span>

                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white font-bold text-xs tracking-wide hover:bg-primary-hover shadow-soft transition"
                    >
                      Read Full Article
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* Main Articles Grid with Filters */}
      <Section variant="white" spacing="lg" className="pt-0 pb-16">
        <Container>
          <BlogClient initialPosts={initialBlogPosts} />
        </Container>
      </Section>

      {/* Booking CTA */}
      <BookingCTA
        title="Experience Clarity in Real Life"
        subtitle="Turn reflective reading into personal transformation. Book an intuitive tarot consultation or energy session with Deepika today."
      />
    </div>
  );
}
