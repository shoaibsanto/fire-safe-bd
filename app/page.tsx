import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, industries } from "@/lib/data";
import { productCategories } from "@/lib/products";
import { services } from "@/lib/services";

import {
  Shield,
  Wrench,
  HeadphonesIcon,
  Building2,
  ArrowRight,
  Factory,
  Shirt,
  Warehouse,
  Heart,
  GraduationCap,
  Home,
  ShoppingBag,
  Briefcase,
  HardHat,
  Bell,
  Flame,
  ScanEye,
  Droplets,
  FlameKindling,
  ShieldAlert,
  ClipboardCheck,
  BookOpen,
  Phone,
  CheckCircle,
  ChevronRight,
  Zap,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Icon map — resolves the string icon name from data files to a real */
/*  lucide-react component so we stay fully server-rendered.           */
/* ------------------------------------------------------------------ */
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Factory,
  Shirt,
  Building2,
  Warehouse,
  Heart,
  GraduationCap,
  Home,
  ShoppingBag,
  Briefcase,
  HardHat,
  Bell,
  Flame,
  ScanEye,
  Droplets,
  FlameKindling,
  ShieldAlert,
  ClipboardCheck,
  BookOpen,
  Wrench,
};

/* ------------------------------------------------------------------ */
/*  Static metadata for the homepage (server-rendered)                 */
/* ------------------------------------------------------------------ */
export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
};

/* ------------------------------------------------------------------ */
/*  Reusable sub-components (all server — no "use client")             */
/* ------------------------------------------------------------------ */

function SectionHeading({
  title,
  subtitle,
  dark = false,
}: {
  title: string;
  subtitle?: string;
  dark?: boolean;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl ${
          dark ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            dark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

function IconBadge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${className}`}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function HomePage() {
  const featuredProducts = productCategories.slice(0, 4);
  const featuredServices = services.slice(0, 4);
  const featuredIndustries = industries.slice(0, 6);

  return (
    <>
      {/* ============================================================ */}
      {/*  1. HERO                                                     */}
      {/* ============================================================ */}
      <section className="relative isolate overflow-hidden bg-navy-900">
        {/* Background gradients */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute -left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-fire-600/10 blur-3xl" />
          <div className="absolute -right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-fire-500/5 blur-3xl" />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-900 to-navy-950" />
        </div>

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="mx-auto max-w-7xl px-4 py-24 sm:py-32 lg:py-40">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-fire-500/20 bg-fire-500/10 px-4 py-1.5 text-sm font-medium text-fire-400">
              <Shield className="h-4 w-4" />
              Trusted Fire Safety Partner in Bangladesh
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {siteConfig.tagline.split(". ")[0]}.{" "}
              <span className="bg-gradient-to-r from-fire-400 to-fire-500 bg-clip-text text-transparent">
                {siteConfig.tagline.split(". ")[1]}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
              Professional fire safety, detection, protection and fighting
              solutions for buildings, industries and businesses in{" "}
              <span className="font-medium text-white">Dhaka, Bangladesh</span>.
              We design, install and maintain complete fire safety systems
              that meet international standards.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/products"
                className="group inline-flex items-center gap-2 rounded-lg bg-fire-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-fire-600/25 transition-all hover:bg-fire-700 hover:shadow-fire-600/40"
              >
                Explore Our Solutions
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-600 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-slate-500 hover:bg-white/10"
              >
                <Phone className="h-4 w-4" />
                Request a Consultation
              </Link>
            </div>

            {/* Quick stats */}
            <div className="mx-auto mt-16 grid max-w-lg grid-cols-3 gap-8 border-t border-navy-700 pt-8">
              <div>
                <div className="text-2xl font-bold text-white">[Number]</div>
                <div className="mt-1 text-sm text-slate-400">
                  Projects Completed
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">[Number]</div>
                <div className="mt-1 text-sm text-slate-400">
                  Corporate Clients
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">[Number]</div>
                <div className="mt-1 text-sm text-slate-400">
                  Years of Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  2. TRUST / WHY CHOOSE US                                    */}
      {/* ============================================================ */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            title="Why Choose Fire Safe BD"
            subtitle="End-to-end fire safety solutions backed by certified expertise, international standards and dedicated after-sales support."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 */}
            <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-fire-200 hover:shadow-md">
              <IconBadge className="bg-fire-50 text-fire-600 group-hover:bg-fire-600 group-hover:text-white transition-colors">
                <Shield className="h-6 w-6" />
              </IconBadge>
              <h3 className="mt-5 text-lg font-semibold text-navy-900">
                Fire Safety Solutions
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Complete fire safety ecosystem — from detection and alarm
                systems to suppression, extinguishers and emergency equipment.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-fire-200 hover:shadow-md">
              <IconBadge className="bg-fire-50 text-fire-600 group-hover:bg-fire-600 group-hover:text-white transition-colors">
                <Wrench className="h-6 w-6" />
              </IconBadge>
              <h3 className="mt-5 text-lg font-semibold text-navy-900">
                Professional Installation
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Certified engineers design and install systems to BS, EN and
                NFPA standards — with full commissioning and handover.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-fire-200 hover:shadow-md">
              <IconBadge className="bg-fire-50 text-fire-600 group-hover:bg-fire-600 group-hover:text-white transition-colors">
                <HeadphonesIcon className="h-6 w-6" />
              </IconBadge>
              <h3 className="mt-5 text-lg font-semibold text-navy-900">
                Technical Support
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Ongoing maintenance contracts, emergency call-out service and
                scheduled inspections keep your systems operational.
              </p>
            </div>

            {/* Card 4 */}
            <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-fire-200 hover:shadow-md">
              <IconBadge className="bg-fire-50 text-fire-600 group-hover:bg-fire-600 group-hover:text-white transition-colors">
                <Building2 className="h-6 w-6" />
              </IconBadge>
              <h3 className="mt-5 text-lg font-semibold text-navy-900">
                Corporate &amp; Industrial
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Tailored fire safety strategies for factories, warehouses,
                offices, hospitals, hotels and large commercial complexes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  3. PRODUCTS                                                 */}
      {/* ============================================================ */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            title="Our Product Range"
            subtitle="Industry-leading fire safety products from global manufacturers — designed for reliability and compliance."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((cat) => {
              const IconComponent = iconMap[cat.icon] ?? Shield;
              return (
                <Link
                  key={cat.slug}
                  href={`/products/${cat.slug}`}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-fire-300 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-white transition-colors group-hover:bg-fire-600">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-navy-900">
                    {cat.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 line-clamp-3">
                    {cat.shortDescription}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-fire-600 transition-colors group-hover:text-fire-700">
                    View Products
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-lg border border-navy-200 bg-white px-6 py-3 text-sm font-semibold text-navy-900 shadow-sm transition-all hover:border-navy-300 hover:shadow-md"
            >
              View All Products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  4. SERVICES                                                 */}
      {/* ============================================================ */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            title="Professional Services"
            subtitle="From initial consultation and design through installation, commissioning and long-term maintenance."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredServices.map((svc) => {
              const IconComponent = iconMap[svc.icon] ?? Shield;
              return (
                <Link
                  key={svc.slug}
                  href={`/services/${svc.slug}`}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-fire-300 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-fire-50 text-fire-600 transition-colors group-hover:bg-fire-600 group-hover:text-white">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-navy-900">
                    {svc.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 line-clamp-3">
                    {svc.shortDescription}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-fire-600 transition-colors group-hover:text-fire-700">
                    Learn More
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-lg border border-navy-200 bg-white px-6 py-3 text-sm font-semibold text-navy-900 shadow-sm transition-all hover:border-navy-300 hover:shadow-md"
            >
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  5. INDUSTRIES                                               */}
      {/* ============================================================ */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            title="Industries We Serve"
            subtitle="Sector-specific fire safety expertise — from garment factories to hospitals, we protect every environment."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredIndustries.map((ind) => {
              const IconComponent = iconMap[ind.icon] ?? Shield;
              return (
                <div
                  key={ind.slug}
                  className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:border-fire-200 hover:shadow-md"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-white transition-colors group-hover:bg-fire-600">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold text-navy-900">
                      {ind.name}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600 line-clamp-2">
                      {ind.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-lg border border-navy-200 bg-white px-6 py-3 text-sm font-semibold text-navy-900 shadow-sm transition-all hover:border-navy-300 hover:shadow-md"
            >
              Learn About Our Expertise
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  6. CTA — Ready to Protect?                                  */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-navy-900">
        {/* Decorative gradients */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fire-600/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 py-20 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <Zap className="mx-auto h-10 w-10 text-fire-400" />
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Protect Your Facility?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-slate-300">
              Get a free fire safety consultation for your building or facility.
              Our experts will assess your needs and recommend the right
              solutions — with no obligation.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-lg bg-fire-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-fire-600/25 transition-all hover:bg-fire-700 hover:shadow-fire-600/40"
              >
                Get Your Free Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href={`tel:${siteConfig.phoneFull}`}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-600 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-slate-500 hover:bg-white/10"
              >
                <Phone className="h-4 w-4" />
                Call {siteConfig.phone}
              </a>
            </div>

            {/* Trust signals */}
            <div className="mx-auto mt-12 flex max-w-md flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-fire-400" />
                Free Site Survey
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-fire-400" />
                No Obligation
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-fire-400" />
                24/7 Support
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  7. FULL-WIDTH TRUST BAR                                     */}
      {/* ============================================================ */}
      <section className="bg-navy-950 py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-fire-600/20 text-fire-400">
                <Shield className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">
                  Certified Products
                </div>
                <div className="text-xs text-slate-400">
                  EN, BS &amp; NFPA standards
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-fire-600/20 text-fire-400">
                <Wrench className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">
                  Expert Installation
                </div>
                <div className="text-xs text-slate-400">
                  Factory-trained engineers
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-fire-600/20 text-fire-400">
                <HeadphonesIcon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">
                  After-Sales Support
                </div>
                <div className="text-xs text-slate-400">
                  Maintenance &amp; emergency call-out
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-fire-600/20 text-fire-400">
                <CheckCircle className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">
                  Compliance Guaranteed
                </div>
                <div className="text-xs text-slate-400">
                  Local &amp; international codes
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
