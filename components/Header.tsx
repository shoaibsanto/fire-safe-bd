"use client";

import { useState } from "react";
import Link from "next/link";
import { navItems, siteConfig } from "@/lib/data";
import { Menu, X, Phone, Mail, ChevronRight, ArrowRight } from "lucide-react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-fire-700 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs">
          <div className="flex items-center gap-4">
            <a href={`tel:${siteConfig.phoneFull}`} className="flex items-center gap-1 hover:text-white/80">
              <Phone className="h-3 w-3" />
              {siteConfig.phone} | {siteConfig.phone2}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="hidden sm:flex items-center gap-1 hover:text-white/80">
              <Mail className="h-3 w-3" />
              {siteConfig.email}
            </a>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <span className="text-white/70">Follow Us:</span>
            <a href="#" className="hover:text-white/80">Facebook</a>
            <a href="#" className="hover:text-white/80">LinkedIn</a>
            <a href="#" className="hover:text-white/80">YouTube</a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-white shadow-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <img src="/logo.jpg" alt="Fire Safe BD Ltd." className="h-12 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-fire-50 hover:text-fire-700"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-md bg-fire-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-fire-700"
            >
              Get a Quote
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-md p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-4 pb-4 lg:hidden shadow-lg">
          <nav className="flex flex-col gap-1 py-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-fire-50 hover:text-fire-700"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="border-t border-slate-200 pt-3">
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 rounded-md bg-fire-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-fire-700"
            >
              Get a Quote <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
