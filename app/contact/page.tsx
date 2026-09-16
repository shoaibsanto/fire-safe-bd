import type { Metadata } from "next";
import { siteConfig } from "@/lib/data";
import { ContactForm } from "@/components/ContactForm";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${siteConfig.name} for fire safety solutions, consultations, and service enquiries in Dhaka, Bangladesh.`,
};

const whatsappGreeting = encodeURIComponent(
  `Hello ${siteConfig.name}! I'm interested in your fire safety services.`
);

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="relative bg-navy-900 py-24 text-white sm:py-32">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <span className="mb-4 inline-block rounded-full border border-fire-500/30 bg-fire-500/10 px-4 py-1.5 text-sm font-medium text-fire-400">
            Get in Touch
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            Have a question or ready to start your fire-safety project? Reach out
            and our team will respond promptly.
          </p>
        </div>
      </section>

      {/* ── Two-column: Form + Details ────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* ── Left: Contact Form (3 cols) ─── */}
            <div className="lg:col-span-3">
              <h2 className="mb-2 text-2xl font-bold text-navy-900">
                Send Us a Message
              </h2>
              <p className="mb-8 text-slate-500">
                Fill out the form below and we&apos;ll get back to you within one
                business day.
              </p>
              <ContactForm />
            </div>

            {/* ── Right: Contact Info (2 cols) ─── */}
            <div className="lg:col-span-2">
              <h2 className="mb-2 text-2xl font-bold text-navy-900">
                Contact Information
              </h2>
              <p className="mb-8 text-slate-500">
                Reach us directly through any of the channels below.
              </p>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-navy-900 text-fire-500">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy-900">Office Address</p>
                    <p className="mt-0.5 text-slate-600">{siteConfig.corporateOffice}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-navy-900 text-fire-500">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy-900">Phone</p>
                    <a
                      href={`tel:${siteConfig.phoneFull}`}
                      className="mt-0.5 text-slate-600 transition hover:text-fire-600"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-navy-900 text-fire-500">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy-900">Email</p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="mt-0.5 text-slate-600 transition hover:text-fire-600"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-navy-900 text-fire-500">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy-900">WhatsApp</p>
                    <a
                      href={`https://wa.me/${siteConfig.whatsapp}?text=${whatsappGreeting}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-0.5 text-slate-600 transition hover:text-fire-600"
                    >
                      Chat on WhatsApp →
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-navy-900 text-fire-500">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy-900">Business Hours</p>
                    <p className="mt-0.5 text-slate-600">{siteConfig.businessHours}</p>
                  </div>
                </div>
              </div>

              {/* Google Maps placeholder */}
              <div className="mt-10 overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                <div className="flex h-56 items-center justify-center text-slate-400">
                  <div className="text-center">
                    <MapPin className="mx-auto h-8 w-8" />
                    <p className="mt-2 text-sm">Google Maps embed</p>
                    <p className="text-xs text-slate-300">
                      Replace with actual map embed code
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
