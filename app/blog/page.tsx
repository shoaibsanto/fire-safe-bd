import Link from "next/link";
import type { Metadata } from "next";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { blogPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Fire safety insights, guides and news — expert articles on fire detection, protection, compliance and best practices from Fire Safe BD.",
};

export default function BlogPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy-900 py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Blog</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Fire safety insights, expert guides and industry news from our team
            of professionals.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          {blogPosts.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group overflow-hidden rounded-xl border border-slate-200 transition-all hover:shadow-md"
                >
                  <div className="aspect-[16/9] bg-slate-100" />
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-xs text-slate-400">
                      <span className="inline-flex items-center gap-1 rounded-full bg-fire-50 px-2.5 py-0.5 font-medium text-fire-600">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readingTime}
                      </span>
                    </div>
                    <h2 className="mt-3 font-semibold text-slate-800 group-hover:text-fire-600">
                      {post.title}
                    </h2>
                    <p className="mt-2 line-clamp-2 text-sm text-slate-500">
                      {post.excerpt}
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="flex items-center gap-1 text-xs text-slate-400">
                        <Calendar className="h-3 w-3" />
                        {post.publishedDate}
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-fire-600 group-hover:text-fire-700">
                        Read more <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <BookOpen className="h-16 w-16 text-slate-300" />
              <h2 className="mt-6 text-xl font-semibold text-slate-700">
                Blog Coming Soon
              </h2>
              <p className="mt-3 max-w-md text-slate-500">
                Our team is preparing expert articles on fire safety, detection
                systems, compliance and best practices. Check back soon for
                insights and guides.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-fire-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-fire-700"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
