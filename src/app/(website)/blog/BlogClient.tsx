"use client";

import { useState, useMemo } from "react";
import { BlogPost } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Search, Clock, Calendar, ArrowRight, User, Sparkles } from "lucide-react";
import { cn, getAssetPath } from "@/lib/utils";

interface BlogClientProps {
  initialPosts: BlogPost[];
}

export function BlogClient({ initialPosts }: BlogClientProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = useMemo(() => {
    const cats = Array.from(new Set(initialPosts.map((p) => p.category)));
    return ["All", ...cats];
  }, [initialPosts]);

  const filteredPosts = useMemo(() => {
    return initialPosts.filter((post) => {
      const matchesCategory =
        activeCategory === "All" || post.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [initialPosts, activeCategory, searchQuery]);

  return (
    <div className="space-y-10">
      {/* Search and Category Filter Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-4 border-b border-primary/10">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-2 rounded-full text-xs font-sans font-bold tracking-wide transition-all cursor-pointer",
                activeCategory === cat
                  ? "bg-primary text-white shadow-soft"
                  : "bg-white text-plum/80 border border-primary/10 hover:bg-lavender-light hover:text-plum"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search spiritual articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-full bg-white border border-primary/15 text-xs font-sans text-plum placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 transition shadow-sm"
          />
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <article
            key={post.slug}
            className="group rounded-3xl bg-white border border-primary/10 shadow-soft hover:shadow-card hover:border-primary/25 transition-all overflow-hidden flex flex-col justify-between font-sans"
          >
            <div>
              {/* Post Thumbnail */}
              <div className="relative w-full h-52 overflow-hidden bg-lavender-light/40">
                <Image
                  src={getAssetPath(post.imageUrl)}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-sm text-primary shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Post Meta & Excerpt */}
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-3 text-xs text-muted">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-gold" />
                    {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-gold" />
                    {post.readingTime}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-plum group-hover:text-primary transition-colors leading-snug">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>

                <p className="text-xs text-body/80 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
            </div>

            {/* Card Footer */}
            <div className="px-6 pb-6 pt-3 border-t border-primary/5 flex items-center justify-between">
              <span className="text-[11px] font-bold text-plum flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-gold" />
                By {post.author}
              </span>

              <Link
                href={`/blog/${post.slug}`}
                className="text-xs font-bold text-primary group-hover:text-plum inline-flex items-center gap-1 transition"
              >
                Read Article
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-16 bg-white rounded-3xl border border-primary/10 p-8 space-y-3 font-sans">
          <Sparkles className="w-8 h-8 text-gold mx-auto" />
          <h3 className="font-serif text-2xl font-bold text-plum">No Articles Found</h3>
          <p className="text-sm text-muted">
            Try adjusting your search query or selecting a different category.
          </p>
        </div>
      )}
    </div>
  );
}
