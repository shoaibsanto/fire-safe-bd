import Link from "next/link";
import { siteConfig, services, partners } from "@/lib/data";
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  Users,
  HeadphonesIcon,
  Wrench,
  Eye,
  Target,
  Heart,
  Leaf,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden bg-gradient-to-r from-navy-900 via-fire-900/80 to-red-900 text-white">
        {/* Fire background */}
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/services/fire-pumps.jpg"
            alt=""
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-900/60 to-transparent" />
        </div>

        <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            {/* Left — tagline text */}
            <div className="hidden lg:block lg:col-span-3">
              <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                <div className="text-2xl font-bold italic leading-tight">
                  Safety Today,<br />
                  A Better<br />
                  Tomorrow.
                </div>
              </div>
            </div>

            {/* Center — hero image */}
            <div className="hidden lg:block lg:col-span-4">
              <img
                src="/images/services/fire-extinguishers.jpg"
                alt="Fire Safe BD Team"
                className="rounded-2xl shadow-2xl"
              />
            </div>

            {/* Right — content */}
            <div className="lg:col-span-5 lg:text-right">
              <div className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-fire-400">
                PROTECTING LIVES · SECURING TOMORROWS
              </div>
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.8rem]">
                Complete Fire Safety Solutions for a{" "}
                <span className="text-fire-400">Safer Bangladesh</span>
              </h1>
              <p className="mt-4 text-base text-slate-300">
                Design | Supply | Installation | Testing | Commissioning | Maintenance
              </p>
              <p className="mt-2 text-sm text-slate-400">
                Trusted by leading businesses, industries, and institutions across Bangladesh.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 lg:justify-end">
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-md bg-fire-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-fire-700"
                >
                  Our Services <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-md border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Contact Us
                </a>
              </div>
              {/* Certification badges */}
              <div className="mt-8 flex flex-wrap items-center gap-4 lg:justify-end">
                {[
                  { label: "UL", sub: "Certified" },
                  { label: "FM", sub: "Approved" },
                  { label: "NFPA", sub: "Compliant" },
                  { label: "CE", sub: "Certified" },
                  { label: "ISO", sub: "Standards" },
                ].map((cert) => (
                  <div key={cert.label} className="flex h-14 w-14 flex-col items-center justify-center rounded-full border border-white/20 bg-white/5 text-center">
                    <div className="text-xs font-bold text-white">{cert.label}</div>
                    <div className="text-[8px] text-slate-400">{cert.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== TRUST / USP ===================== */}
      <section className="bg-white py-10 shadow-sm">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {[
              { icon: Shield, title: "Quality Products", desc: "Globally recognized and certified brands" },
              { icon: Users, title: "Experienced Team", desc: "Qualified engineers & certified professionals" },
              { icon: HeadphonesIcon, title: "24/7 Support", desc: "Always here when you need us" },
              { icon: Wrench, title: "Tailor-Made Solutions", desc: "Customized for every project need" },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-fire-50">
                  <item.icon className="h-5 w-5 text-fire-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== ABOUT US ===================== */}
      <section id="about" className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="text-sm font-semibold uppercase tracking-widest text-fire-600">About Us</div>
              <h2 className="mt-3 text-3xl font-bold text-navy-900 sm:text-4xl">
                A Trusted Name in{" "}
                <span className="text-fire-600">Fire Protection & Life Safety</span>
              </h2>
              <p className="mt-5 leading-relaxed text-slate-600">
                Fire Safe BD Ltd is a comprehensive fire safety service provider in Bangladesh, offering tailored, turnkey solutions for diverse industries and infrastructure.
              </p>
              <p className="mt-3 leading-relaxed text-slate-600">
                We specialize in fire detection, suppression, hydrant &amp; sprinkler systems, fire pumps, fire doors, CCTV, solar systems, LPS, and more — ensuring safety, compliance, and peace of mind.
              </p>
              <a href="#" className="mt-6 inline-flex items-center gap-2 rounded-md bg-fire-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-fire-700">
                Learn More About Us <ArrowRight className="h-4 w-4" />
              </a>
              {/* Mission / Vision / Value */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { icon: Target, label: "Our Mission", text: "Safer Communities" },
                  { icon: Eye, label: "Our Vision", text: "A Fire-Safe Bangladesh" },
                  { icon: Heart, label: "Our Value", text: "Integrity · Quality · Commitment" },
                ].map((v) => (
                  <div key={v.label} className="flex flex-col items-center text-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-fire-50">
                      <v.icon className="h-5 w-5 text-fire-600" />
                    </div>
                    <div className="mt-2 text-xs font-semibold uppercase text-slate-400">{v.label}</div>
                    <div className="mt-1 text-xs font-medium text-navy-900">{v.text}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/services/fire-suppression.jpg"
                alt="Fire Safe BD Ltd"
                className="rounded-2xl shadow-lg"
              />
              {/* Overlay badge */}
              <div className="absolute -bottom-4 -left-4 rounded-xl bg-fire-600 p-5 text-white shadow-lg sm:-bottom-6 sm:-left-6">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm">Years of Trust</div>
                <div className="text-xs text-fire-200">Since 2013</div>
              </div>
              <div className="absolute -right-2 top-4 rounded-lg bg-navy-900 px-4 py-2 text-xs font-medium text-white shadow-lg">
                Delivering Safer Environments Across Bangladesh
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== OUR SERVICES ===================== */}
      <section id="services" className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div>
            <div className="text-sm font-semibold uppercase tracking-widest text-fire-600">Our Services</div>
            <h2 className="mt-3 text-3xl font-bold text-navy-900 sm:text-4xl">End-to-End Fire Safety Solutions</h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              From design to maintenance — we cover all your fire safety and security needs.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {services.map((svc) => (
              <a
                key={svc.title}
                href="#"
                className="group overflow-hidden rounded-xl bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-3 text-center">
                  <h3 className="text-xs font-semibold leading-tight text-navy-900 group-hover:text-fire-600">
                    {svc.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== OUR PROJECTS ===================== */}
      <section id="projects" className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="text-sm font-semibold uppercase tracking-widest text-fire-600">Our Projects</div>
              <h2 className="mt-3 text-3xl font-bold text-navy-900 sm:text-4xl">Building a Safer Tomorrow</h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                We have successfully delivered fire safety solutions for residential, commercial, industrial, and government projects across Bangladesh.
              </p>
              <a href="#" className="mt-6 inline-flex items-center gap-2 rounded-md bg-fire-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-fire-700">
                View Our Projects <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Commercial Buildings", img: "/images/services/fire-suppression.jpg" },
                { label: "Industrial Facilities", img: "/images/services/fire-pumps.jpg" },
                { label: "Residential Projects", img: "/images/services/fire-doors.jpg" },
                { label: "Hospitals & Healthcare", img: "/images/services/fire-detection.jpg" },
              ].map((proj) => (
                <div key={proj.label} className="group relative overflow-hidden rounded-xl">
                  <img
                    src={proj.img}
                    alt={proj.label}
                    className="h-32 w-full object-cover transition-transform duration-300 group-hover:scale-105 sm:h-40"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent" />
                  <div className="absolute bottom-2 left-2 text-xs font-semibold text-white sm:text-sm">
                    {proj.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== GLOBAL PARTNERS ===================== */}
      <section id="partners" className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-end justify-between">
            <div>
              <div className="text-sm font-semibold uppercase tracking-widest text-fire-600">Our Global Partners</div>
              <h2 className="mt-3 text-3xl font-bold text-navy-900">World-Class Brands. Trusted Solutions.</h2>
              <p className="mt-3 max-w-2xl text-slate-600">
                We work with internationally renowned manufacturers to deliver the highest quality fire safety products and technologies.
              </p>
            </div>
            <a href="#" className="hidden items-center gap-2 rounded-md border border-fire-200 px-4 py-2 text-sm font-medium text-fire-700 transition-colors hover:bg-fire-50 sm:flex">
              View All Partners <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 sm:grid-cols-4 lg:grid-cols-7">
            {partners.map((p) => (
              <div key={p.name} className="flex flex-col items-center justify-center rounded-xl bg-white p-4 shadow-sm transition hover:shadow-md">
                <div className="text-base font-bold text-navy-900">{p.name}</div>
                <div className="text-[10px] text-slate-400">{p.country}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CSR ===================== */}
      <section id="csr" className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="relative">
              <img src="/images/services/solar.jpg" alt="CSR Initiative" className="rounded-2xl shadow-lg" />
            </div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-widest text-fire-600">Corporate Social Responsibility</div>
              <h2 className="mt-3 text-3xl font-bold text-navy-900 sm:text-4xl">
                A Safer, Healthier, and Greener Bangladesh
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                We are committed to sustainable development, community welfare, and a cleaner environment through education, support, and green initiatives.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-4">
                {[
                  { icon: Shield, text: "Fire Safety Education" },
                  { icon: Heart, text: "Community Support" },
                  { icon: Leaf, text: "Environmental Sustainability" },
                ].map((item) => (
                  <div key={item.text} className="flex flex-col items-center text-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-fire-50">
                      <item.icon className="h-5 w-5 text-fire-600" />
                    </div>
                    <div className="mt-2 text-xs font-medium text-slate-600">{item.text}</div>
                  </div>
                ))}
              </div>
              <a href="#" className="mt-6 inline-flex items-center gap-2 rounded-md bg-fire-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-fire-700">
                Our CSR Initiatives <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FINAL CTA ===================== */}
      <section id="contact" className="relative overflow-hidden bg-gradient-to-r from-fire-900 via-fire-800 to-navy-900 text-white">
        <div className="absolute inset-0 -z-10">
          <img src="/images/services/fire-detection.jpg" alt="" className="h-full w-full object-cover opacity-10" />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="text-sm font-semibold uppercase tracking-widest text-fire-400">
                Need a Reliable Fire Safety Partner?
              </div>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Let&apos;s Build a Safer Future Together
              </h2>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#" className="inline-flex items-center gap-2 rounded-md bg-fire-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-fire-700">
                  Get a Quote <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#" className="inline-flex items-center gap-2 rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-fire-400" />
                <div>
                  <div className="font-semibold">{siteConfig.phone}</div>
                  <div className="text-slate-300">{siteConfig.phone2}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-fire-400" />
                <div>{siteConfig.email}</div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-fire-400" />
                <div>{siteConfig.corporateOffice}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
