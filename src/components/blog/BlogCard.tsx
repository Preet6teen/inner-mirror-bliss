import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BlogCardProps {
  post: {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    coverImageUrl?: string;
    readingTimeMinutes?: number;
    publishedAt?: string;
    authorName?: string;
  };
  className?: string;
}

export function BlogCard({ post, className }: BlogCardProps) {
  return (
    <article
      className={cn(
        "group flex flex-col bg-white rounded-3xl overflow-hidden border border-primary/10 shadow-card hover:shadow-cardHover transition-all duration-300",
        className
      )}
    >
      {post.coverImageUrl && (
        <div className="relative w-full h-52 sm:h-56 bg-lavender-light/40 overflow-hidden">
          <Image
            src={post.coverImageUrl}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/90 text-primary shadow-sm backdrop-blur-sm">
              {post.category}
            </span>
          </div>
        </div>
      )}

      <div className="flex-1 p-6 sm:p-7 flex flex-col justify-between">
        <div>
          {/* Metadata */}
          <div className="flex items-center gap-3 text-xs text-muted mb-3 font-sans">
            {post.readingTimeMinutes && (
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-gold" />
                {post.readingTimeMinutes} min read
              </span>
            )}
            {post.publishedAt && (
              <>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {post.publishedAt}
                </span>
              </>
            )}
          </div>

          <h3 className="font-serif text-xl sm:text-2xl font-bold text-plum group-hover:text-primary transition-colors leading-snug">
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </h3>

          <p className="mt-3 text-sm text-body/80 leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
        </div>

        <div className="mt-6 pt-5 border-t border-primary/10 flex items-center justify-between">
          <span className="text-xs font-semibold text-primary">
            By {post.authorName || "Deepika"}
          </span>
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-plum group-hover:text-primary group-hover:translate-x-1 transition-all"
          >
            Read Article
            <ArrowRight className="w-3.5 h-3.5 text-gold" />
          </Link>
        </div>
      </div>
    </article>
  );
}
