import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Bell,
  ScanEye,
  FlameKindling,
  Droplets,
  ClipboardCheck,
  Wrench,
  Ruler,
  BookOpen,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Phone,
} from "lucide-react";
import { services, getService } from "@/lib/services";
import { getProduct } from "@/lib/products";
import FAQAccordion from "@/components/FAQAccordion";

const iconMap: Record<string, React.ReactNode> = {
  Bell: <Bell className="h-8 w-8" />,
  ScanEye: <ScanEye className="h-8 w-8" />,
  FlameKindling: <FlameKindling className="h-8 w-8" />,
  Droplets: <Droplets className="h-8 w-8" />,
  ClipboardCheck: <ClipboardCheck className="h-8 w-8" />,
  Wrench: <Wrench className="h-8 w-8" />,
  Ruler: <Ruler className="h-8 w-8" />,
  BookOpen: <BookOpen className="h-8 w-8" />,
};

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: service.name,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) notFound();

  const relatedProducts = service.relatedProducts
    .map((p) => getProduct(p))
    .filter(Boolean);

  return (
    <div>
      {/* Hero */}
      <section className="bg-navy-900 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <Link
            href="/services"
            className="mb-6 inline-flex items-center gap-1 text-sm text-slate-400 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            All Services
          </Link>
          <div className="flex items-start gap-5">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-fire-600 text-white">
              {iconMap[service.icon] || <Bell className="h-8 w-8" />}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white sm:text-4xl">
                {service.name}
              </h1>
              <p className="mt-3 max-w-2xl text-lg text-slate-300">
                {service.shortDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold text-slate-800">Overview</h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            {service.description}
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold text-slate-800">Key Features</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {service.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-fire-600" />
                <span className="text-slate-600">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold text-slate-800">Our Process</h2>
          <ol className="mt-6 space-y-4">
            {service.process.map((step, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-fire-600 text-sm font-bold text-white">
                  {i + 1}
                </span>
                <span className="pt-1 text-slate-600">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Applications */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold text-slate-800">Applications</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {service.applications.map((app, i) => (
              <span
                key={i}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600"
              >
                {app}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="bg-white py-16">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-2xl font-bold text-slate-800">
              Related Products
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {relatedProducts.map((product) => (
                <Link
                  key={product!.slug}
                  href={`/products/${product!.slug}`}
                  className="rounded-xl border border-slate-200 p-5 transition-all hover:border-fire-200 hover:shadow-sm"
                >
                  <h3 className="font-semibold text-slate-800">
                    {product!.name}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    {product!.shortDescription}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-fire-600">
                    View product <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {service.faq && service.faq.length > 0 && (
        <section className="bg-slate-50 py-16">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-2xl font-bold text-slate-800">
              Frequently Asked Questions
            </h2>
            <div className="mt-6">
              <FAQAccordion faq={service.faq} />
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-navy-900 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-white">
            Ready to get started?
          </h2>
          <p className="mt-3 text-slate-300">
            Contact us for a free site survey and tailored solution for{" "}
            {service.name.toLowerCase()}.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-fire-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-fire-700"
            >
              Request a Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+8801712960336"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-600 px-6 py-3 text-sm font-medium text-slate-300 transition-colors hover:border-white hover:text-white"
            >
              <Phone className="h-4 w-4" />
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
