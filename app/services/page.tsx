import Link from "next/link";
import type { Metadata } from "next";
import { services } from "@/lib/services";
import {
  Bell,
  ScanEye,
  Droplets,
  Flame,
  Shield,
  Zap,
  Wrench,
  BookOpen,
  Camera,
  Sun,
  Radio,
  Cable,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Professional fire safety services — alarm installation, detection, suppression, inspection, maintenance, design and consultancy for buildings and industries in Dhaka, Bangladesh.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Bell, ScanEye, Droplets, Flame, Shield, Zap, Wrench, BookOpen, Camera, Sun, Radio, Cable,
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
            Comprehensive fire safety services — from initial consultation
            through design, installation, commissioning and ongoing maintenance.
          </p>
        </div>
      </section>

      {/* Services Grid with Images */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Bell;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:border-fire-200 hover:shadow-md"
                >
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-lg bg-fire-600 text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-slate-800">
                      {service.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500 line-clamp-3">
                      {service.shortDescription}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-fire-600 transition-colors group-hover:text-fire-700">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-navy-900">
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
