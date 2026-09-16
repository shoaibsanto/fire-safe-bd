import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Flame,
  Phone,
  Tag,
  ShieldCheck,
  type LucideProps,
} from "lucide-react";
import {
  products,
  productCategories,
  getProduct,
  getCategory,
  getProductsByCategory,
} from "@/lib/products";

/* ------------------------------------------------------------------ */
/* Static params                                                       */
/* ------------------------------------------------------------------ */
export function generateStaticParams() {
  return products.map((p) => ({
    category: p.categorySlug,
    slug: p.slug,
  }));
}

/* ------------------------------------------------------------------ */
/* Metadata                                                            */
/* ------------------------------------------------------------------ */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} | Fire Safe BD Ltd.`,
      description: product.description,
    },
  };
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */
const categoryImages: Record<string, string> = {
  "fire-alarm-systems": "/images/services/fire-detection.jpg",
  "fire-pumps": "/images/services/fire-pumps.jpg",
  "fire-suppression-systems": "/images/services/fire-suppression.jpg",
  "fire-extinguishers": "/images/services/fire-extinguishers.jpg",
  "fire-doors": "/images/services/fire-doors.jpg",
  "sprinkler-systems": "/images/services/sprinkler.jpg",
  "fire-hose-fittings": "/images/services/fire-pumps.jpg",
  "safety-signage": "/images/services/fire-detection.jpg",
};

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category: categorySlug, slug } = await params;
  const product = getProduct(slug);
  const category = getCategory(categorySlug);

  if (!product || !category) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-32 text-center">
        <h1 className="text-3xl font-bold text-slate-900">Product Not Found</h1>
        <p className="mt-4 text-slate-600">
          The product you are looking for does not exist.
        </p>
        <Link
          href="/products"
          className="mt-6 inline-flex items-center gap-2 text-fire-600 hover:underline"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Products
        </Link>
      </div>
    );
  }

  const catImage = categoryImages[product.categorySlug] || "/images/services/fire-detection.jpg";
  const relatedProducts = getProductsByCategory(categorySlug).filter(
    (p) => p.slug !== slug,
  );

  const contactHref = `/contact?product=${encodeURIComponent(product.name)}`;

  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="bg-navy-800 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <Link
            href={`/products/${categorySlug}`}
            className="mb-4 inline-flex items-center gap-1 text-sm text-navy-300 hover:text-white transition"
          >
            <ArrowLeft className="h-4 w-4" /> {category.name}
          </Link>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {product.name}
          </h1>

          <p className="mt-3 max-w-3xl text-lg text-navy-200">
            {product.shortDescription}
          </p>
        </div>
      </section>

      {/* ── Main content ─────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Left column — overview + specs */}
          <div className="lg:col-span-2 space-y-10">
            {/* Product image from catalog */}
            <div className="overflow-hidden rounded-xl bg-slate-100">
              <img
                src={catImage}
                alt={product.name}
                className="h-64 w-full object-cover sm:h-80"
              />
            </div>

            {/* Overview */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Overview</h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                {product.description}
              </p>
            </div>

            {/* Key features */}
            {product.features.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Key Features
                </h2>
                <ul className="mt-4 space-y-3">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-fire-600" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technical specifications */}
            {product.specs && Object.keys(product.specs).length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Technical Specifications
                </h2>
                <div className="mt-4 overflow-hidden rounded-xl border border-slate-200">
                  <table className="w-full text-left text-sm">
                    <tbody>
                      {Object.entries(product.specs).map(
                        ([key, value], idx) => (
                          <tr
                            key={key}
                            className={idx % 2 === 0 ? "bg-slate-50" : "bg-white"}
                          >
                            <td className="px-4 py-3 font-medium text-slate-700">
                              {key.replace(/([A-Z])/g, " $1").trim()}
                            </td>
                            <td className="px-4 py-3 text-slate-600">{value}</td>
                          </tr>
                        ),
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Applications */}
            {product.applications.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Applications</h2>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {product.applications.map((app) => (
                    <li key={app} className="flex items-center gap-2 text-slate-700">
                      <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-fire-500" />
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right sidebar */}
          <div className="space-y-6">
            {/* Brand */}
            {product.brand && (
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                  <ShieldCheck className="h-5 w-5" />
                  Brand
                </div>
                <p className="mt-2 text-slate-800">{product.brand}</p>
              </div>
            )}

            {/* Enquiry CTAs */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Interested in this product?
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Get a quote or speak with our fire safety experts.
              </p>

              {/* Primary CTA */}
              <Link
                href={contactHref}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-fire-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-fire-700"
              >
                <Tag className="h-4 w-4" />
                Request Product Enquiry
              </Link>

              {/* Secondary CTA */}
              <Link
                href="/contact"
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg border border-navy-700 px-5 py-3 text-sm font-semibold text-navy-700 transition hover:bg-navy-50"
              >
                <Phone className="h-4 w-4" />
                Talk to an Expert
              </Link>
            </div>

            {/* Category link */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-medium text-slate-500">Category</p>
              <Link
                href={`/products/${categorySlug}`}
                className="mt-2 inline-flex items-center gap-1 font-semibold text-fire-600 hover:underline"
              >
                {category.name} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* ── Related products ────────────────────────────────────── */}
        {relatedProducts.length > 0 && (
          <section className="mt-16 border-t border-slate-200 pt-12">
            <h2 className="text-2xl font-bold text-slate-900">
              Related Products
            </h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/products/${categorySlug}/${rp.slug}`}
                  className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
                >
                  <div className="relative flex h-40 items-center justify-center bg-navy-50 text-navy-300">
                    <img src={catImage} alt={rp.name} className="h-24 w-full object-cover rounded-lg" />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-lg font-semibold text-slate-900 group-hover:text-fire-600">
                      {rp.name}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-slate-600">
                      {rp.shortDescription}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-fire-600 group-hover:gap-2 transition-all">
                      View details <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
