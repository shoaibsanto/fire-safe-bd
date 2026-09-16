import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/data";
import {
  Shield,
  Eye,
  Target,
  Building2,
  Factory,
  Shirt,
  Warehouse,
  Heart,
  GraduationCap,
  Hotel,
  Home,
  ShoppingBag,
  Briefcase,
  HardHat,
  CheckCircle,
  Users,
  Award,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${siteConfig.name} — our mission, vision, and the industries we serve across Bangladesh.`,
};

/* ── static data ──────────────────────────────────────── */

const values = [
  {
    icon: Shield,
    title: "Safety First",
    description:
      "Every decision we make prioritises the safety of people and property. Our systems are designed, installed and maintained to the highest standards.",
  },
  {
    icon: Eye,
    title: "Integrity",
    description:
      "We operate with full transparency — honest assessments, fair pricing and no shortcuts on compliance or quality.",
  },
  {
    icon: Target,
    title: "Excellence",
    description:
      "From design through commissioning and ongoing maintenance, we pursue excellence at every stage of the fire-safety lifecycle.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description:
      "We build long-term relationships, working closely with clients to understand their unique risks and deliver tailored solutions.",
  },
];

const industryItems = [
  { icon: Factory, name: "Manufacturing" },
  { icon: Shirt, name: "Garments & Textiles" },
  { icon: Building2, name: "Commercial Buildings" },
  { icon: Warehouse, name: "Warehouses & Logistics" },
  { icon: Heart, name: "Hospitals & Healthcare" },
  { icon: GraduationCap, name: "Educational Institutions" },
  { icon: Hotel, name: "Hotels & Hospitality" },
  { icon: Home, name: "Residential Buildings" },
  { icon: ShoppingBag, name: "Retail & Shopping" },
  { icon: Briefcase, name: "Offices" },
  { icon: HardHat, name: "Industrial Facilities" },
];

const capabilities = [
  "Fire Alarm System Design & Installation",
  "Fire Detection System Integration",
  "Fire Suppression System Engineering",
  "Fire Extinguisher Supply & Servicing",
  "Annual Safety Inspections & Audits",
  "Preventive Maintenance Contracts",
  "Fire Safety Consultancy & Risk Assessment",
  "Emergency Evacuation Planning",
  "Code Compliance & Certification Support",
  "24/7 Emergency Response",
];

/* ── page ─────────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="relative bg-navy-900 py-24 text-white sm:py-32">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <span className="mb-4 inline-block rounded-full border border-fire-500/30 bg-fire-500/10 px-4 py-1.5 text-sm font-medium text-fire-400">
            About Us
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            About Fire Safe BD Ltd.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            {siteConfig.description}
          </p>
        </div>
      </section>

      {/* ── Company Introduction ──────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-3xl font-bold text-navy-900 sm:text-4xl">
            Who We Are
          </h2>
          <div className="mt-4 h-1 w-20 rounded bg-fire-600" />
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-slate-600">
            <p>
              [Company Introduction — Client Content Required]
            </p>
            <p>
              [Additional company history, founding story, and key milestones —
              Client Content Required]
            </p>
            <p>
              [Team overview, leadership, and organisational strengths — Client
              Content Required]
            </p>
          </div>
        </div>
      </section>

      {/* ── Mission / Vision / Values ─────────────────── */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Mission */}
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-fire-50 text-fire-600">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-navy-900">Our Mission</h3>
              <p className="mt-3 text-slate-600 leading-relaxed">
                [Mission statement — Client Content Required]
              </p>
            </div>

            {/* Vision */}
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-fire-50 text-fire-600">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-navy-900">Our Vision</h3>
              <p className="mt-3 text-slate-600 leading-relaxed">
                [Vision statement — Client Content Required]
              </p>
            </div>

            {/* Core Values */}
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-fire-50 text-fire-600">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-navy-900">Core Values</h3>
              <ul className="mt-3 space-y-2 text-slate-600">
                {values.map((v) => (
                  <li key={v.title} className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-fire-500" />
                    <span>{v.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Value cards */}
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="text-center">
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-navy-900 text-fire-500">
                  <v.icon className="h-7 w-7" />
                </div>
                <h4 className="text-lg font-semibold text-navy-900">{v.title}</h4>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries Served ─────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <span className="mb-3 inline-block rounded-full border border-fire-500/30 bg-fire-500/10 px-4 py-1.5 text-sm font-medium text-fire-600">
              Our Expertise
            </span>
            <h2 className="mt-2 text-3xl font-bold text-navy-900 sm:text-4xl">
              Industries We Serve
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-500">
              From garment factories to five-star hotels, we provide tailored
              fire-safety solutions across a wide range of sectors.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {industryItems.map((ind) => (
              <div
                key={ind.name}
                className="group flex items-center gap-4 rounded-xl border border-slate-200 p-5 transition hover:border-fire-200 hover:bg-fire-50/50"
              >
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-navy-900 text-fire-500 transition group-hover:bg-fire-600 group-hover:text-white">
                  <ind.icon className="h-5 w-5" />
                </div>
                <span className="font-medium text-navy-900">{ind.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Capabilities ──────────────────────────────── */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-4">
          <div className="text-center">
            <span className="mb-3 inline-block rounded-full border border-fire-500/30 bg-fire-500/10 px-4 py-1.5 text-sm font-medium text-fire-600">
              What We Do
            </span>
            <h2 className="mt-2 text-3xl font-bold text-navy-900 sm:text-4xl">
              Our Capabilities
            </h2>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {capabilities.map((cap) => (
              <div
                key={cap}
                className="flex items-center gap-3 rounded-lg bg-white px-5 py-4 shadow-sm"
              >
                <CheckCircle className="h-5 w-5 flex-shrink-0 text-fire-600" />
                <span className="text-slate-700">{cap}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-fire-600 px-8 py-3.5 text-base font-semibold text-white transition hover:bg-fire-700"
            >
              <Wrench className="h-4 w-4" />
              Discuss Your Project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
