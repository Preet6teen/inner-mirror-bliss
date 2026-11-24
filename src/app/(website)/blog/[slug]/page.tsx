import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { getBlogPostBySlug, initialBlogPosts } from "@/data/blog-posts";
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Sparkles, Share2, Heart } from "lucide-react";
import { GoldButton, PrimaryButton } from "@/components/ui/Buttons";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { siteConfig } from "@/config/site";
import { getAssetPath } from "@/lib/utils";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return initialBlogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Article Not Found" };
  }

  return {
    title: `${post.title} | The Sacred Mirror Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.imageUrl }],
    },
  };
}

export default async function BlogPostDetailPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

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
                { label: post.title, href: `/blog/${post.slug}` },
              ]}
            />
          </div>
        </Container>
      </div>

      {/* Article Header */}
      <Section variant="light" spacing="lg" className="pt-10 sm:pt-14 pb-8">
        <Container>
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-lavender-light text-primary font-sans">
                {post.category}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-plum leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-sans text-muted pt-2 border-b border-primary/10 pb-4">
              <span className="flex items-center gap-1.5 text-plum font-semibold">
                <User className="w-4 h-4 text-gold" />
                By {post.author}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-gold" />
                {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-gold" />
                {post.readingTime}
              </span>
            </div>
          </div>
        </Container>
      </Section>

      {/* Main Content */}
      <Section variant="white" spacing="lg" className="pt-0 pb-16">
        <Container>
          <article className="max-w-3xl mx-auto space-y-8 font-sans">
            {/* Featured Image */}
            <div className="relative w-full h-[320px] sm:h-[450px] rounded-3xl overflow-hidden border border-primary/10 shadow-card bg-lavender-light/40">
              <Image
                src={getAssetPath(post.imageUrl)}
                alt={post.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 800px"
              />
            </div>

            {/* Article Body */}
            <div className="prose prose-plum max-w-none text-body text-base sm:text-lg leading-relaxed space-y-6">
              {post.content.split("\n\n").map((paragraph, index) => {
                if (paragraph.startsWith("### ")) {
                  return (
                    <h2
                      key={index}
                      className="font-serif text-2xl sm:text-3xl font-bold text-plum mt-8 mb-4"
                    >
                      {paragraph.replace("### ", "")}
                    </h2>
                  );
                }
                if (paragraph.startsWith("> ")) {
                  return (
                    <blockquote
                      key={index}
                      className="my-6 p-6 rounded-2xl bg-ivory border-l-4 border-gold text-plum font-serif text-xl italic"
                    >
                      {paragraph.replace("> ", "").replaceAll("*", "")}
                    </blockquote>
                  );
                }
                if (paragraph.startsWith("1. ") || paragraph.startsWith("- ")) {
                  return (
                    <ul key={index} className="space-y-2 list-disc list-inside text-body text-base">
                      {paragraph
                        .split("\n")
                        .map((line, lIdx) => (
                          <li key={lIdx} className="leading-relaxed">
                            {line.replace(/^(\d+\.|\-)\s+/, "")}
                          </li>
                        ))}
                    </ul>
                  );
                }
                return (
                  <p key={index} className="text-body text-base sm:text-lg leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="pt-6 border-t border-primary/10 flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-muted uppercase tracking-wider mr-2">
                  Tags:
                </span>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-ivory border border-primary/10 text-plum"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Author Bio Box */}
            <div className="p-6 sm:p-8 rounded-3xl bg-lavender-light/40 border border-primary/15 flex flex-col sm:flex-row items-center gap-6">
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-gold shrink-0 bg-white">
                <Image
                  src={getAssetPath("/images/services/tarot-reading-session.webp")}
                  alt="Deepika"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-1.5 text-center sm:text-left font-sans">
                <span className="text-xs uppercase tracking-widest text-primary font-bold">
                  About the Author
                </span>
                <h3 className="font-serif text-xl font-bold text-plum">
                  {siteConfig.author} — Founder, Inner Mirror Bliss
                </h3>
                <p className="text-xs sm:text-sm text-body/80 leading-relaxed">
                  Deepika is an intuitive tarot reader and spiritual wellness practitioner based in Ghansoli, Navi Mumbai. She is dedicated to creating compassionate, grounded spaces for self-reflection and inner alignment.
                </p>
              </div>
            </div>

            {/* Navigation back to blog */}
            <div className="pt-4 flex items-center justify-between border-t border-primary/10">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-primary hover:text-plum transition"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to All Articles
              </Link>

              <Link
                href="/services/tarot-reading"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-primary hover:text-plum transition"
              >
                Explore Tarot Consultations
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </article>
        </Container>
      </Section>

      {/* Booking CTA */}
      <BookingCTA
        title="Ready to Deepen Your Reflection?"
        subtitle="Schedule a private 60-minute tarot consultation or energy healing session with Deepika today."
      />
    </div>
  );
}
