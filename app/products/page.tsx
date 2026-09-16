import type { Metadata } from "next";
import Link from "next/link";
import {
  Bell,
  Flame,
  ScanEye,
  Droplets,
  FlameKindling,
  ShieldAlert,
  Cable,
  Signpost,
  ArrowRight,
  type LucideProps,
} from "lucide-react";
import {
  productCategories,
  products,
} from "@/lib/products";

export const metadata: Metadata = {
  title: "Our Products",
  description:
    "Browse our complete range of fire safety products — alarm systems, extinguishers, detection, suppression, fighting equipment, emergency gear, hoses and safety signage.",
  openGraph: {
    title: "Our Products | Fire Safe BD Ltd.",
    description:
      "Professional fire safety products for buildings, industries and businesses in Dhaka, Bangladesh.",
  },
};

/* ------------------------------------------------------------------ */
/* Dynamic icon mapper                                                 */
/* ------------------------------------------------------------------ */
const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Bell,
  Flame,
  ScanEye,
  Droplets,
  FlameKindling,
  ShieldAlert,
  Cable,
  Sign: Signpost,
};

function DynamicIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = iconMap[name];
  return Icon ? <Icon className={className} /> : null;
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */
export default function ProductsPage() {
  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="bg-navy-800 text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Our Products
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-navy-200">
            From fire alarm panels to extinguishers and suppression systems —
            everything you need to keep people and property safe.
          </p>
        </div>
      </section>

      {/* ── Category grid ────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900">Product Categories</h2>
        <p className="mt-2 text-slate-600">
          Explore our categories to find the right solution for your needs.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {productCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/products/${cat.slug}`}
              className="group flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-fire-400 hover:shadow-md"
            >
              <DynamicIcon
                name={cat.icon}
                className="mb-4 h-10 w-10 text-fire-600 transition group-hover:text-fire-500"
              />
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-fire-600">
                {cat.name}
              </h3>
              <p className="mt-2 flex-1 text-sm text-slate-600">
                {cat.shortDescription}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-fire-600 group-hover:gap-2 transition-all">
                View products <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── All products ─────────────────────────────────────────── */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">All Products</h2>
          <p className="mt-2 text-slate-600">
            Browse every product we supply — click through for full specifications.
          </p>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.categorySlug}/${product.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
              >
                {/* Image placeholder */}
                <div className="relative flex h-48 items-center justify-center bg-navy-50 text-navy-300">
                  <Flame className="h-16 w-16" />
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <span className="text-xs font-medium uppercase tracking-wide text-fire-600">
                    {product.category}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900 group-hover:text-fire-600">
                    {product.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-slate-600">
                    {product.shortDescription}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-fire-600 group-hover:gap-2 transition-all">
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
