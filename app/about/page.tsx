import { Metadata } from "next";
import Link from "next/link";
import {
  siteConfig,
  industries,
  managingDirector,
  leadership,
  partners,
  complianceStandards,
} from "@/lib/data";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import {
  Shield,
  Target,
  Eye,
  Heart,
  Lightbulb,
  Users,
  Award,
  CheckCircle2,
  ArrowRight,
  Building2,
  Factory,
  Warehouse,
  GraduationCap,
  Hotel,
  ShoppingBag,
  HardHat,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about Fire Safe BD Limited — established ${siteConfig.foundedYear}, a trusted name in fire protection, detection and life safety solutions in Bangladesh.`,
};

const industryIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2, Factory, Warehouse, Heart, GraduationCap, Hotel, ShoppingBag, HardHat,
};

const values = [
  { icon: Shield, title: "Integrity", desc: "Honesty, transparency and accountability in every relationship — with clients, partners and team members." },
  { icon: Users, title: "Customer Focus", desc: "Understanding unique client needs and offering personalized fire safety solutions that exceed expectations." },
  { icon: Award, title: "Excellence", desc: "Continuous learning and performance improvement to deliver the highest quality outcomes every time." },
  { icon: Lightbulb, title: "Innovation", desc: "Embracing technology and smarter systems to deliver future-ready fire safety solutions." },
  { icon: Shield, title: "Safety First", desc: "Strict adherence to national and international safety standards — protecting lives, property and the environment." },
  { icon: Users, title: "Teamwork", desc: "Best results come from collaboration — across departments, with clients, and with partners." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 py-16 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
            ]}
          />
          <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            About Fire Safe BD Limited
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-300">
            A trusted name in fire protection, detection and life safety solutions
            in Bangladesh since {siteConfig.foundedYear}.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-navy-900">Company Overview</h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                Fire Safe BD LTD is a trusted name in the field of fire protection,
                detection, and life safety solutions in Bangladesh. Established with a
                clear vision to protect lives, property, and the environment, our company
                has rapidly evolved into a comprehensive fire safety service provider
                offering tailored, turnkey solutions for diverse industries and infrastructure.
              </p>
              <p className="mt-4 leading-relaxed text-slate-600">
                We specialize in the design, supply, installation, testing, commissioning,
                and maintenance of a wide range of fire detection and suppression systems.
                Our offerings include conventional and addressable fire alarm systems, fire
                hydrant and sprinkler systems, gas suppression systems (FM-200, NOVEC 1230,
                CO2), fire extinguishers, fire pumps, and related accessories.
              </p>
              <p className="mt-4 leading-relaxed text-slate-600">
                All our systems are designed in accordance with national and international
                standards such as BNBC, NFPA, and ISO, and we only source equipment from
                globally recognized and certified manufacturers to ensure quality and reliability.
              </p>

              {/* Key Facts */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-slate-50 p-4 text-center">
                  <div className="text-2xl font-bold text-fire-600">{siteConfig.foundedYear}</div>
                  <div className="text-sm text-slate-500">Established</div>
                </div>
                <div className="rounded-xl bg-slate-50 p-4 text-center">
                  <div className="text-2xl font-bold text-fire-600">{siteConfig.employees}</div>
                  <div className="text-sm text-slate-500">Employees</div>
                </div>
                <div className="rounded-xl bg-slate-50 p-4 text-center">
                  <div className="text-2xl font-bold text-fire-600">55+</div>
                  <div className="text-sm text-slate-500">Projects Completed</div>
                </div>
                <div className="rounded-xl bg-slate-50 p-4 text-center">
                  <div className="text-2xl font-bold text-fire-600">120+</div>
                  <div className="text-sm text-slate-500">Corporate Clients</div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900">Managing Director&apos;s Message</h2>
              <blockquote className="mt-4 border-l-4 border-fire-500 pl-4 italic text-slate-600">
                &ldquo;{managingDirector.message}&rdquo;
              </blockquote>
              <div className="mt-4">
                <div className="font-semibold text-navy-900">{managingDirector.name}</div>
                <div className="text-sm text-slate-500">{managingDirector.title}</div>
                <div className="text-xs text-slate-400">{managingDirector.education}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-fire-50">
                <Eye className="h-6 w-6 text-fire-600" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-navy-900">Our Vision</h3>
              <p className="mt-3 leading-relaxed text-slate-600">
                To become the most trusted and recognized name in fire safety solutions,
                not only in Bangladesh but across the global landscape. We aim to lead the
                industry through innovation, integrity, and a relentless commitment to
                safeguarding lives and properties.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-fire-50">
                <Target className="h-6 w-6 text-fire-600" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-navy-900">Our Mission</h3>
              <p className="mt-3 leading-relaxed text-slate-600">
                To deliver innovative fire protection solutions, protect lives, assets and
                the environment, and provide end-to-end support from design to maintenance.
                We offer comprehensive support throughout the lifecycle of every project —
                your one-stop solution partner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl font-bold text-navy-900 lg:text-center">Core Values</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-xl border border-slate-200 p-6">
                <v.icon className="h-6 w-6 text-fire-600" />
                <h3 className="mt-3 font-semibold text-navy-900">{v.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl font-bold text-navy-900 lg:text-center">Our Leadership</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map((person) => (
              <div key={person.name} className="rounded-xl border border-slate-200 bg-white p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-900 text-sm font-bold text-white">
                  {person.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <h3 className="mt-4 font-semibold text-navy-900">{person.name}</h3>
                <p className="text-sm font-medium text-fire-600">{person.role}</p>
                <p className="mt-1 text-xs text-slate-500">{person.education}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl font-bold text-navy-900 lg:text-center">Industries We Serve</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((ind) => {
              const Icon = industryIconMap[ind.icon] || Building2;
              return (
                <div key={ind.slug} className="rounded-xl border border-slate-200 p-5">
                  <Icon className="h-6 w-6 text-fire-600" />
                  <h3 className="mt-3 font-semibold text-navy-900">{ind.name}</h3>
                  <p className="mt-1 text-sm text-slate-600 line-clamp-3">{ind.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global Partners */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl font-bold text-navy-900 lg:text-center">Global Partners &amp; Sourcing</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
            We source equipment from internationally recognized and certified manufacturers
            to ensure quality and reliability.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {partners.map((partner) => (
              <div key={partner.name} className="rounded-xl border border-slate-200 bg-white p-5 text-center">
                <div className="text-lg font-bold text-navy-900">{partner.name}</div>
                <div className="text-xs font-medium text-fire-600">{partner.country}</div>
                <p className="mt-2 text-sm text-slate-500">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl font-bold text-navy-900 lg:text-center">Compliance &amp; Standards</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {complianceStandards.map((std) => (
              <div key={std.code} className="flex items-start gap-3 rounded-xl border border-slate-200 p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-fire-600" />
                <div>
                  <div className="font-semibold text-navy-900">{std.code}</div>
                  <div className="text-sm text-slate-500">{std.name}</div>
                  <div className="text-xs text-slate-400">{std.details}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Partner With Fire Safe BD"
        description="Contact us for a free consultation on fire safety solutions for your building or facility."
        primaryLabel="Request a Consultation"
        primaryHref="/contact"
        secondaryLabel="WhatsApp Us"
        secondaryHref={`https://wa.me/${siteConfig.whatsapp}`}
      />
    </>
  );
}
