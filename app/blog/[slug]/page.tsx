import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, Clock, User, Tag } from "lucide-react";
import { blogPosts } from "@/lib/content";
import { getService } from "@/lib/services";
import { getProduct } from "@/lib/products";
import FAQAccordion from "@/components/FAQAccordion";

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Article Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  const relatedServices = post.relatedServices
    .map((s) => getService(s))
    .filter(Boolean);

  const relatedProducts = post.relatedProducts
    .map((p) => getProduct(p))
    .filter(Boolean);

  return (
    <div>
      {/* Hero */}
      <section className="bg-navy-900 py-16">
        <div className="mx-auto max-w-4xl px-4">
          <Link
            href="/blog"
            className="mb-6 inline-flex items-center gap-1 text-sm text-slate-400 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            All Articles
          </Link>
          <span className="inline-block rounded-full bg-fire-600/20 px-3 py-1 text-xs font-medium text-fire-400">
            {post.category}
          </span>
          <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            {post.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-400">
            <span className="flex items-center gap-1">
              <User className="h-4 w-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {post.publishedDate}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readingTime}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <article className="prose prose-slate max-w-none">
            <div
              className="text-slate-600 leading-relaxed whitespace-pre-line"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          {/* Updated date */}
          {post.updatedDate !== post.publishedDate && (
            <p className="mt-8 text-xs text-slate-400">
              Last updated: {post.updatedDate}
            </p>
          )}
        </div>
      </section>

      {/* FAQ */}
      {post.faq && post.faq.length > 0 && (
        <section className="bg-slate-50 py-12">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-2xl font-bold text-slate-800">
              Frequently Asked Questions
            </h2>
            <div className="mt-6">
              <FAQAccordion faq={post.faq} />
            </div>
          </div>
        </section>
      )}

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="bg-white py-12">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-xl font-bold text-slate-800">
              Related Services
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {relatedServices.map((s) => (
                <Link
                  key={s!.slug}
                  href={`/services/${s!.slug}`}
                  className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-600 transition-all hover:border-fire-200 hover:text-fire-600"
                >
                  {s!.name}
                  <ArrowRight className="h-3 w-3" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="bg-slate-50 py-12">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-xl font-bold text-slate-800">
              Related Products
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {relatedProducts.map((p) => (
                <Link
                  key={p!.slug}
                  href={`/products/${p!.slug}`}
                  className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 transition-all hover:border-fire-200 hover:text-fire-600"
                >
                  {p!.name}
                  <ArrowRight className="h-3 w-3" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-navy-900 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-white">
            Need expert fire safety advice?
          </h2>
          <p className="mt-3 text-slate-300">
            Our team is ready to help you find the right fire safety solution.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-fire-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-fire-700"
          >
            Request a Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
