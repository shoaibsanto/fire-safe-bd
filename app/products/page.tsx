import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { productCategories, products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Our Products",
  description:
    "Browse our complete range of fire safety products — alarm systems, extinguishers, detection, suppression, pumps, doors, sprinklers and safety equipment.",
};

export default function ProductsPage() {
  // Map category slugs to catalog images for product cards
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

  return (
    <div>
      {/* Hero */}
      <section className="bg-navy-900 py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Our Products
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            From fire alarm panels to extinguishers and suppression systems —
            everything you need to keep people and property safe.
          </p>
        </div>
      </section>

      {/* Category Grid with Images */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-navy-900">Product Categories</h2>
        <p className="mt-2 text-slate-600">
          Explore our categories to find the right solution for your needs.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {productCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/products/${cat.slug}`}
              className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:border-fire-400 hover:shadow-md"
            >
              {/* Category Image */}
              <div className="relative h-36 overflow-hidden bg-slate-100">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-navy-900 group-hover:text-fire-600">
                  {cat.name}
                </h3>
                <p className="mt-2 text-sm text-slate-600 line-clamp-2">
                  {cat.shortDescription}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-fire-600 group-hover:gap-2 transition-all">
                  View products <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* All Products with Images */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy-900">All Products</h2>
          <p className="mt-2 text-slate-600">
            Browse every product we supply — click through for full specifications.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.categorySlug}/${product.slug}`}
                className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
              >
                {/* Product Image */}
                <div className="relative h-44 overflow-hidden bg-slate-100">
                  <img
                    src={categoryImages[product.categorySlug] || "/images/services/fire-detection.jpg"}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
                </div>

                <div className="p-5">
                  <span className="text-xs font-medium uppercase tracking-wide text-fire-600">
                    {product.category}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-navy-900 group-hover:text-fire-600">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 line-clamp-2">
                    {product.shortDescription}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-fire-600 group-hover:gap-2 transition-all">
                    View details <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
