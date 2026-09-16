"use client";

import { useState } from "react";
import Link from "next/link";
import { navItems, siteConfig } from "@/lib/data";
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  ChevronDown,
} from "lucide-react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy-900 text-white shadow-lg">
      {/* Top bar */}
      <div className="hidden border-b border-navy-700 bg-navy-950 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs text-slate-300">
          <div className="flex items-center gap-4">
            <a
              href={`tel:${siteConfig.phoneFull}`}
              className="flex items-center gap-1 hover:text-white"
            >
              <Phone className="h-3 w-3" />
              {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="hover:text-white"
            >
              {siteConfig.email}
            </a>
          </div>
          <div>{siteConfig.businessHours}</div>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-fire-600 font-bold text-white">
            FS
          </div>
          <div>
            <div className="text-lg font-bold leading-tight">
              Fire Safe BD
            </div>
            <div className="text-[10px] leading-tight text-slate-300">
              {siteConfig.tagline}
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-slate-200 transition-colors hover:bg-navy-700 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hello Fire Safe BD, I would like to know more about your fire safety solutions.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-md border border-green-500/40 px-3 py-2 text-sm text-green-400 transition-colors hover:bg-green-500/10"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
          <Link
            href="/contact"
            className="rounded-md bg-fire-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-fire-700"
          >
            Request a Consultation
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-md p-2 text-slate-200 hover:bg-navy-700 lg:hidden"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-navy-700 bg-navy-900 px-4 pb-4 lg:hidden">
          <nav className="flex flex-col gap-1 py-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm text-slate-200 hover:bg-navy-700 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-2 border-t border-navy-700 pt-3">
            <a
              href={`tel:${siteConfig.phoneFull}`}
              className="flex items-center gap-2 rounded-md px-3 py-2.5 text-sm text-slate-200 hover:bg-navy-700"
            >
              <Phone className="h-4 w-4" />
              Call {siteConfig.phone}
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hello Fire Safe BD, I would like to know more about your fire safety solutions.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md px-3 py-2.5 text-sm text-green-400 hover:bg-green-500/10"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="rounded-md bg-fire-600 px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-fire-700"
            >
              Request a Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
