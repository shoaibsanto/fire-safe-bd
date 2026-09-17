import Image from "next/image";
import Link from "next/link";
import { siteConfig, services, partners } from "@/lib/data";
import { FramedImage } from "@/components/FramedImage";
import { ServiceCard } from "@/components/ServiceCard";
import { Reveal } from "@/components/Reveal";
import {
  ArrowRight,
  ShieldCheck,
  Users,
  Headphones,
  Building2,
  Target,
  Eye,
  Heart,
  Leaf,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  BadgeCheck,
  Siren,
  Wind,
  Droplets,
  FireExtinguisher,
  Gauge,
  DoorClosed,
  ClipboardCheck,
  HardHat,
} from "lucide-react";

const heroCredentials = ["UL", "FM", "NFPA", "CE", "ISO"];

const trustPoints = [
  { icon: ShieldCheck, label: "People Safety" },
  { icon: Building2, label: "Property Protection" },
  { icon: Leaf, label: "Safer Communities" },
  { icon: Users, label: "A Stronger Bangladesh" },
];

const homeServiceIcons = [Siren, Wind, Droplets, FireExtinguisher, Gauge, DoorClosed];
const homeServices = services.slice(0, 6).map((svc, i) => ({ ...svc, icon: homeServiceIcons[i] }));

const aboutStrengths = [
  "Turnkey delivery — design through maintenance under one roof",
  "Certified international brands: Simplex, Apollo, Notifier by Honeywell & more",
  "NOC & occupancy certificate support for full compliance",
  "1st Class Government Contractor — trusted on public-sector projects",
];

const stats = [
  { value: `${new Date().getFullYear() - Number(siteConfig.foundedYear)}+`, label: "Years of Trust" },
  { value: siteConfig.employees, label: "Team Members" },
  { value: `${services.length}`, label: "Service Categories" },
  { value: `${partners.length}+`, label: "Global Partners" },
];

const whyChooseUs = [
  { icon: BadgeCheck, title: "Certified & Compliant", desc: "Products and systems aligned with UL, FM, NFPA, and CE standards." },
  { icon: HardHat, title: "Experienced Engineers", desc: "Qualified engineers and certified professionals on every project." },
  { icon: ClipboardCheck, title: "End-to-End Delivery", desc: "Design, supply, installation, testing, and commissioning — handled in-house." },
  { icon: Headphones, title: "Nationwide Support", desc: "24/7 maintenance and troubleshooting across Bangladesh." },
];

function HeroCopy() {
  return (
    <>
      <div className="text-sm font-semibold uppercase tracking-[0.2em] text-fire-600">
        Protecting Lives · Securing Tomorrows
      </div>
      <h1 className="mt-4 text-4xl font-bold leading-tight text-navy-900 sm:text-5xl">
        Complete Fire Safety Solutions for a{" "}
        <span className="text-fire-600">Safer Bangladesh</span>
      </h1>
      <p className="mt-5 text-base font-medium text-slate-600">
        Design · Supply · Installation · Testing · Commissioning · Maintenance
      </p>
      <p className="mt-2 text-base text-slate-500">
        Trusted by leading businesses, industries, and institutions across Bangladesh.
      </p>
      <div className="mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-4">
        <Link
          href="#contact"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-fire-600 px-4 py-3.5 text-sm font-semibold text-white shadow-sm shadow-fire-600/20 transition-colors hover:bg-fire-700 sm:px-6"
        >
          Request a Quote <ArrowRight className="h-4 w-4 shrink-0" />
        </Link>
        <Link
          href="#services"
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-4 py-3.5 text-center text-sm font-semibold text-navy-900 transition-colors hover:border-navy-300 hover:bg-slate-50 sm:px-6"
        >
          Explore Our Solutions
        </Link>
      </div>
      <div className="mt-10 flex items-center gap-x-3 overflow-x-auto border-t border-slate-100 pt-6 sm:flex-wrap sm:gap-x-6 sm:gap-y-3">
        <span className="shrink-0 whitespace-nowrap text-xs font-semibold uppercase tracking-wide text-slate-400">
          Certified Standards
        </span>
        {heroCredentials.map((cert) => (
          <span key={cert} className="shrink-0 whitespace-nowrap text-sm font-bold text-navy-700">
            {cert}
          </span>
        ))}
      </div>
    </>
  );
}

function TrustRow({ align = "start" }: { align?: "start" | "end" }) {
  return (
    <div
      className={`grid grid-cols-2 gap-x-6 gap-y-5 sm:flex sm:flex-wrap sm:items-center sm:gap-x-10 ${
        align === "end" ? "sm:justify-end" : ""
      }`}
    >
      {trustPoints.map((item) => (
        <div key={item.label} className="flex items-center gap-2.5">
          <item.icon className="h-5 w-5 shrink-0 text-fire-600" strokeWidth={1.75} />
          <span className="text-sm font-semibold text-navy-900">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden bg-white">
        {/* Desktop: full-bleed photographic hero, image fading to white on the left for text */}
        <div className="relative hidden lg:block lg:min-h-[660px] xl:min-h-[720px]">
          <Image
            src="/images/hero-background.png"
            alt="Fire hose cabinet, extinguisher, and fire pump installed on a rooftop at sunset, overlooking the city skyline"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[65%_35%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,white_0%,white_38%,rgba(255,255,255,0.9)_50%,rgba(255,255,255,0)_66%)]" />

          <div className="absolute inset-0 flex flex-col justify-center">
            <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
              <Reveal className="max-w-xl">
                <HeroCopy />
              </Reveal>
            </div>
          </div>

          <div className="absolute bottom-[16%] left-[54%] rounded-2xl bg-navy-900 px-6 py-4 text-white shadow-xl lg:bottom-[15%] lg:left-[51%]">
            <div className="text-3xl font-bold">{stats[0].value}</div>
            <div className="text-sm font-semibold text-slate-200">Years of Trust</div>
            <div className="text-xs text-slate-400">Since {siteConfig.foundedYear}</div>
          </div>

          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white via-white/80 to-transparent px-6 pb-6 pt-16 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <TrustRow align="end" />
            </div>
          </div>
        </div>

        {/* Mobile / tablet: photo as background, headline and copy overlaid directly on it */}
        <div className="relative lg:hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-background.png"
              alt="Fire hose cabinet, extinguisher, and fire pump installed on a rooftop at sunset, overlooking the city skyline"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[55%_25%]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_0%,rgba(255,255,255,0.6)_32%,white_50%)]" />
          </div>

          <div className="absolute right-4 top-4 rounded-xl bg-navy-900/95 px-4 py-3 text-white shadow-lg sm:right-6 sm:top-6">
            <div className="text-xl font-bold leading-none">{stats[0].value}</div>
            <div className="text-[11px] font-semibold text-slate-200">Years of Trust</div>
          </div>

          <div className="relative px-4 pb-10 pt-[210px] sm:px-6 sm:pt-[250px]">
            <Reveal className="max-w-xl">
              <HeroCopy />
            </Reveal>
          </div>
        </div>
        <div className="border-t border-slate-100 px-4 py-8 sm:px-6 lg:hidden">
          <TrustRow />
        </div>
      </section>

      {/* ===================== CORE SERVICES ===================== */}
      <section id="services" className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <div className="text-sm font-bold uppercase tracking-widest text-fire-600">Our Services</div>
            <h2 className="mt-2 text-3xl font-bold text-navy-900 sm:text-4xl">
              End-to-End Fire Safety Solutions
            </h2>
            <p className="mt-3 text-slate-500">
              From design to maintenance — we cover all your fire safety and security needs.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {homeServices.map((svc, i) => (
              <Reveal key={svc.title} delay={(i % 3) * 0.06}>
                <ServiceCard icon={svc.icon} title={svc.title} description={svc.description} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SOLUTIONS / PROJECTS ===================== */}
      <section id="projects" className="bg-slate-50 py-24 lg:py-32">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
          <Reveal className="order-2 lg:order-none">
            <FramedImage
              src="/images/solutions-fire-protection.png"
              alt="Fire Safe BD fire pump system installed on-site, with fire protection use cases for commercial, industrial, residential, and healthcare facilities"
              objectPosition="center"
              className="aspect-[16/9] w-full"
            />
          </Reveal>
          <Reveal delay={0.1} className="order-1 lg:order-none">
            <div className="text-sm font-bold uppercase tracking-widest text-fire-600">Fire Protection Solutions</div>
            <h2 className="mt-2 text-3xl font-bold text-navy-900 sm:text-4xl">
              Engineered Systems, Built for Every Risk
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              We have successfully delivered fire safety solutions for residential, commercial,
              industrial, and government projects across Bangladesh — backed by internationally
              certified equipment and a team that manages every stage of the project.
            </p>
            <Link
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-fire-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-fire-700"
            >
              Request a Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ===================== ABOUT US ===================== */}
      <section id="about" className="py-24 lg:py-32">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
          <Reveal>
            <div className="text-sm font-bold uppercase tracking-widest text-fire-600">About Us</div>
            <h2 className="mt-2 text-3xl font-bold text-navy-900 sm:text-4xl">
              A Trusted Name in{" "}
              <span className="text-fire-600">Fire Protection &amp; Life Safety</span>
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              Fire Safe BD Ltd is a comprehensive fire safety service provider in Bangladesh, offering
              tailored, turnkey solutions for diverse industries and infrastructure.
            </p>
            <p className="mt-3 leading-relaxed text-slate-600">
              We specialize in fire detection, suppression, hydrant &amp; sprinkler systems, fire pumps,
              fire doors, CCTV, solar systems, LPS, and more — ensuring safety, compliance, and peace
              of mind.
            </p>
            <ul className="mt-6 space-y-3">
              {aboutStrengths.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-fire-600" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="#"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-fire-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-fire-700"
            >
              Learn More About Us <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl bg-navy-900 p-8 text-white shadow-xl sm:p-10">
              <div className="text-5xl font-bold text-fire-400">{stats[0].value}</div>
              <div className="mt-1 text-lg font-semibold">Years of Trust</div>
              <div className="text-sm text-slate-400">Since {siteConfig.foundedYear}</div>
              <div className="mt-8 space-y-6 border-t border-white/10 pt-8">
                {[
                  { icon: Target, label: "Our Mission", text: "Safer Communities" },
                  { icon: Eye, label: "Our Vision", text: "A Fire-Safe Bangladesh" },
                  { icon: Heart, label: "Our Value", text: "Integrity · Quality · Commitment" },
                ].map((v) => (
                  <div key={v.label} className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                      <v.icon className="h-5 w-5 text-fire-400" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        {v.label}
                      </div>
                      <div className="text-sm font-medium text-white">{v.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== STATS ===================== */}
      <section className="bg-navy-900 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.05} className="text-center">
                <div className="text-3xl font-bold text-white sm:text-4xl">{s.value}</div>
                <div className="mt-1 text-sm font-medium text-slate-400">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== WHY CHOOSE US ===================== */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <div className="text-sm font-bold uppercase tracking-widest text-fire-600">Why Choose Us</div>
            <h2 className="mt-2 text-3xl font-bold text-navy-900 sm:text-4xl">
              Built on Certification, Experience &amp; Trust
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06} className="text-center sm:text-left">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-fire-50 text-fire-600 sm:mx-0">
                  <item.icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 font-semibold text-navy-900">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== GLOBAL PARTNERS ===================== */}
      <section id="partners" className="bg-slate-50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="text-sm font-bold uppercase tracking-widest text-fire-600">Our Global Partners</div>
              <h2 className="mt-2 text-3xl font-bold text-navy-900">
                World-Class Brands. Trusted Solutions.
              </h2>
              <p className="mt-2 text-slate-500">
                We work with internationally renowned manufacturers to deliver the highest quality
                fire safety products and technologies.
              </p>
            </div>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-7">
            {partners.map((p, i) => (
              <Reveal key={p.name} delay={(i % 7) * 0.04}>
                <div className="flex h-full flex-col items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-6 text-center shadow-sm transition-shadow hover:shadow-md">
                  <div className="text-sm font-bold leading-snug text-navy-900">{p.name}</div>
                  <div className="mt-1 text-[11px] text-slate-400">{p.country}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CSR ===================== */}
      <section id="csr" className="py-24 lg:py-32">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
          <Reveal className="order-2 lg:order-1">
            <div className="rounded-3xl bg-gradient-to-br from-fire-600 to-fire-800 p-10 text-white shadow-xl">
              <Leaf className="h-10 w-10 text-fire-200" strokeWidth={1.5} />
              <div className="mt-6 text-2xl font-bold leading-snug">
                A Safer, Healthier, and Greener Bangladesh
              </div>
              <p className="mt-3 text-sm leading-relaxed text-fire-100">
                Committed to sustainable development, community welfare, and a cleaner environment.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="order-1 lg:order-2">
            <div className="text-sm font-bold uppercase tracking-widest text-fire-600">
              Corporate Social Responsibility
            </div>
            <h2 className="mt-2 text-3xl font-bold text-navy-900 sm:text-4xl">
              Giving Back to the Communities We Protect
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              We are committed to sustainable development, community welfare, and a cleaner
              environment through education, support, and green initiatives.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4">
              {[
                { icon: ShieldCheck, text: "Fire Safety Education" },
                { icon: Heart, text: "Community Support" },
                { icon: Leaf, text: "Environmental Sustainability" },
              ].map((item) => (
                <div key={item.text} className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-fire-50">
                    <item.icon className="h-6 w-6 text-fire-600" />
                  </div>
                  <div className="mt-2 text-xs font-medium text-slate-600">{item.text}</div>
                </div>
              ))}
            </div>
            <Link
              href="#"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-fire-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-fire-700"
            >
              Our CSR Initiatives <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ===================== FINAL CTA ===================== */}
      <section id="contact" className="relative overflow-hidden bg-navy-900 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-20 sm:px-6 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8 lg:py-24">
          <Reveal>
            <div className="text-sm font-bold uppercase tracking-widest text-fire-400">
              Need a Reliable Fire Safety Partner?
            </div>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Let&apos;s Build a Safer Future Together
            </h2>
            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 rounded-lg bg-fire-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-fire-700"
              >
                Request a Quote <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={`tel:${siteConfig.phoneFull}`}
                className="inline-flex items-center gap-2 rounded-lg border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Call Us Now
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="space-y-4 text-sm">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0 text-fire-400" />
              <div>
                <div className="font-semibold">{siteConfig.phone}</div>
                <div className="text-slate-300">{siteConfig.phone2}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 shrink-0 text-fire-400" />
              <div>{siteConfig.email}</div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-fire-400" />
              <div>{siteConfig.corporateOffice}</div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
