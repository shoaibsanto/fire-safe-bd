import type { Metadata } from "next";
import Link from "next/link";
import {
  Flame,
  ArrowRight,
  ArrowLeft,
  type LucideProps,
} from "lucide-react";
import {
  productCategories,
  getCategory,
  getProductsByCategory,
} from "@/lib/products";

/* ------------------------------------------------------------------ */
/* Dynamic icon map — same icon names used in lib/products.ts         */
/* ------------------------------------------------------------------ */
import {
  Bell,
  ScanEye,
  Droplets,
  FlameKindling,
  ShieldAlert,
  Cable,
  Signpost,
} from "lucide-react";

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
/* Static params                                                       */
/* ------------------------------------------------------------------ */
export function generateStaticParams() {
  return productCategories.map((cat) => ({ category: cat.slug }));
}

/* ------------------------------------------------------------------ */
/* Metadata                                                            */
/* ------------------------------------------------------------------ */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: slug } = await params;
  const cat = getCategory(slug);
  const catImage = categoryImages[slug] || "/images/services/fire-detection.jpg";

  if (!cat) {
    return { title: "Category Not Found" };
  }

  return {
    title: cat.name,
    description: cat.shortDescription,
    openGraph: {
      title: `${cat.name} | Fire Safe BD Ltd.`,
      description: cat.description,
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

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = await params;
  const cat = getCategory(slug);
  const catImage = categoryImages[slug] || "/images/services/fire-detection.jpg";

  if (!cat) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-32 text-center">
        <h1 className="text-3xl font-bold text-slate-900">Category Not Found</h1>
        <p className="mt-4 text-slate-600">
          The category you are looking for does not exist.
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

  const catProducts = getProductsByCategory(slug);

  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="bg-navy-800 text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Link
            href="/products"
            className="mb-4 inline-flex items-center gap-1 text-sm text-navy-300 hover:text-white transition"
          >
            <ArrowLeft className="h-4 w-4" /> All Products
          </Link>

          <div className="flex items-center gap-4">
            <DynamicIcon
              name={cat.icon}
              className="h-12 w-12 text-fire-400"
            />
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {cat.name}
            </h1>
          </div>

          <p className="mt-4 max-w-3xl text-lg text-navy-200">
            {cat.description}
          </p>
        </div>
      </section>

      {/* ── Products grid ────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {catProducts.length === 0 ? (
          <p className="text-center text-lg text-slate-500">
            Products coming soon. Contact us for availability.
          </p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {catProducts.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${slug}/${product.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
              >
                {/* Product image */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={catImage}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-semibold text-slate-900 group-hover:text-fire-600">
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
        )}
      </section>
    </div>
  );
}
