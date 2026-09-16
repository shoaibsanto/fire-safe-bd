"use client";

import { useState } from "react";
import Link from "next/link";
import { navItems, siteConfig } from "@/lib/data";
import { Menu, X, Phone, MessageCircle } from "lucide-react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy-900 text-white shadow-lg">
      {/* Top bar */}
      <div className="hidden border-b border-navy-700 bg-navy-950 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5 text-xs text-slate-400">
          <div className="flex items-center gap-5">
            <a
              href={`tel:${siteConfig.phoneFull}`}
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <Phone className="h-3 w-3" />
              {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="hover:text-white transition-colors"
            >
              {siteConfig.email}
            </a>
          </div>
          <div>{siteConfig.businessHours}</div>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2.5 lg:py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-fire-600 text-sm font-bold text-white">
            FS
          </div>
          <div className="hidden sm:block">
            <div className="text-base font-bold leading-tight tracking-tight">
              Fire Safe BD
            </div>
            <div className="text-[10px] leading-tight text-slate-400 tracking-wide">
              {siteConfig.tagline}
            </div>
          </div>
        </Link>

        {/* Desktop nav — single line */}
        <nav className="hidden items-center gap-0.5 xl:flex whitespace-nowrap">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-2.5 py-1.5 text-[13px] font-medium text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-2.5 xl:flex shrink-0">
          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hello Fire Safe BD, I would like to know more about your fire safety solutions.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-md border border-green-500/30 px-3 py-1.5 text-[13px] font-medium text-green-400 transition-colors hover:bg-green-500/10"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            WhatsApp
          </a>
          <Link
            href="/contact"
            className="rounded-md bg-fire-600 px-4 py-1.5 text-[13px] font-semibold text-white transition-colors hover:bg-fire-700"
          >
            Request a Consultation
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-md p-2 text-slate-200 hover:bg-white/10 xl:hidden"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-navy-700 bg-navy-900 px-4 pb-4 xl:hidden">
          <nav className="flex flex-col gap-0.5 py-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm text-slate-200 hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-2 border-t border-navy-700 pt-3">
            <a
              href={`tel:${siteConfig.phoneFull}`}
              className="flex items-center gap-2 rounded-md px-3 py-2.5 text-sm text-slate-200 hover:bg-white/10"
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
