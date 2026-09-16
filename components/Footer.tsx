import Link from "next/link";
import { siteConfig } from "@/lib/data";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

const footerLinks = {
  products: [
    { label: "Fire Alarm Systems", href: "/products/fire-alarm-systems" },
    { label: "Fire Extinguishers", href: "/products/fire-extinguishers" },
    { label: "Fire Detection", href: "/products/fire-detection-systems" },
    { label: "Fire Suppression", href: "/products/fire-suppression-systems" },
    { label: "Fire Fighting Equipment", href: "/products/fire-fighting-equipment" },
    { label: "Safety Equipment", href: "/products/emergency-safety-equipment" },
  ],
  services: [
    { label: "Alarm Installation", href: "/services/fire-alarm-system-installation" },
    { label: "Fire Detection", href: "/services/fire-detection-system" },
    { label: "Fire Suppression", href: "/services/fire-suppression-system" },
    { label: "Inspection & Audit", href: "/services/fire-safety-inspection" },
    { label: "Maintenance", href: "/services/fire-safety-maintenance" },
    { label: "Consultancy", href: "/services/fire-safety-consultancy" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Clients & Partners", href: "/clients" },
    { label: "Certifications", href: "/certifications" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy-900 text-slate-300">
      {/* CTA bar */}
      <div className="border-b border-navy-700 bg-navy-950">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
          <div>
            <h3 className="text-xl font-bold text-white">
              Need a Fire Safety Solution?
            </h3>
            <p className="mt-1 text-sm text-slate-400">
              Talk to our team about fire detection, protection and safety for
              your building or facility.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hello Fire Safe BD, I would like to know more about your fire safety solutions.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md border border-green-500/40 px-4 py-2.5 text-sm font-medium text-green-400 transition-colors hover:bg-green-500/10"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>
            <Link
              href="/contact"
              className="rounded-md bg-fire-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-fire-700"
            >
              Request a Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company info */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-fire-600 font-bold text-white">
                FS
              </div>
              <div className="text-lg font-bold text-white">Fire Safe BD</div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Professional fire safety, detection, protection and fighting
              solutions for buildings, industries and businesses in Dhaka,
              Bangladesh.
            </p>
            <div className="mt-4 space-y-2 text-sm">
              <a
                href={`tel:${siteConfig.phoneFull}`}
                className="flex items-center gap-2 text-slate-400 hover:text-white"
              >
                <Phone className="h-4 w-4" />
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-slate-400 hover:text-white"
              >
                <Mail className="h-4 w-4" />
                {siteConfig.email}
              </a>
              <div className="flex items-start gap-2 text-slate-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                {siteConfig.corporateOffice}
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Products
            </h4>
            <ul className="mt-3 space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="mt-3 space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="mt-3 space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-700">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-slate-500 sm:flex-row">
          <div>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </div>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-slate-300">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-slate-300">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
