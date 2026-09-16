import Link from "next/link";
import { siteConfig } from "@/lib/data";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy-900 text-slate-300">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <img src="/logo.jpg" alt="Fire Safe BD Ltd." className="h-10 w-auto" />
            <p className="mt-3 text-sm text-slate-400">
              {siteConfig.tagline}
            </p>
            <p className="mt-3 text-xs text-slate-500">
              Professional fire safety solutions since {siteConfig.foundedYear}.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white">Quick Links</h4>
            <ul className="mt-3 space-y-2">
              {["Home", "About Us", "Our Services", "Our Projects", "Partners", "CSR", "News", "Contact Us"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, "-").replace("home", "")}`} className="text-sm text-slate-400 hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white">Our Services</h4>
            <ul className="mt-3 space-y-2">
              {["Fire Detection", "Fire Suppression", "Hydrant & Sprinkler", "Fire Extinguisher", "Fire Pump", "Fire Door", "AMC & Troubleshooting", "Consultancy", "CCTV", "Solar System", "LPS"].map((svc) => (
                <li key={svc}>
                  <a href="#services" className="text-sm text-slate-400 hover:text-white">
                    → {svc}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white">Connect With Us</h4>
            <div className="mt-3 flex gap-3">
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-fire-600">
                Facebook
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-fire-600">
                LinkedIn
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-fire-600">
                YouTube
              </a>
            </div>
            <div className="mt-4 space-y-2 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5" />
                {siteConfig.phone}
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5" />
                {siteConfig.email}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-navy-700">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-slate-500 sm:flex-row">
          <div>&copy; 2024 {siteConfig.name}. All Rights Reserved.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms &amp; Conditions</a>
            <a href="#" className="hover:text-slate-300">Site Map</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
