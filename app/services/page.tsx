import Link from "next/link";
import type { Metadata } from "next";
import {
  Bell,
  ScanEye,
  FlameKindling,
  Droplets,
  ClipboardCheck,
  Wrench,
  Ruler,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Professional fire safety services — alarm installation, detection, suppression, inspection, maintenance, design and consultancy for buildings and industries in Dhaka, Bangladesh.",
};

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

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy-900 py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Our Services
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Comprehensive fire safety services from initial consultation through
            design, installation, commissioning and ongoing maintenance.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-fire-200 hover:shadow-md"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-fire-50 text-fire-600 transition-colors group-hover:bg-fire-600 group-hover:text-white">
                  {iconMap[service.icon] || (
                    <Bell className="h-8 w-8" />
                  )}
                </div>
                <h3 className="text-lg font-semibold text-slate-800">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {service.shortDescription}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-fire-600 transition-colors group-hover:text-fire-700">
                  Learn more <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-50 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-800">
            Not sure which service you need?
          </h2>
          <p className="mt-3 text-slate-600">
            Our team will assess your building and recommend the right fire
            safety solution. Get a free consultation today.
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
