import Link from "next/link";
import type { Metadata } from "next";
import {
  BookOpen,
  FileText,
  Download,
  ArrowRight,
  Filter,
} from "lucide-react";
import { resources } from "@/lib/content";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Fire safety guides, brochures, datasheets and checkbooks — download resources to help you plan and maintain fire safety systems.",
};

const typeLabels: Record<string, { label: string; icon: React.ReactNode }> = {
  guide: {
    label: "Guide",
    icon: <BookOpen className="h-5 w-5" />,
  },
  brochure: {
    label: "Brochure",
    icon: <FileText className="h-5 w-5" />,
  },
  datasheet: {
    label: "Datasheet",
    icon: <FileText className="h-5 w-5" />,
  },
  checklist: {
    label: "Checklist",
    icon: <FileText className="h-5 w-5" />,
  },
};

export default function ResourcesPage() {
  const types = ["guide", "brochure", "datasheet", "checklist"] as const;

  return (
    <div>
      {/* Hero */}
      <section className="bg-navy-900 py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Resources
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Download fire safety guides, brochures, datasheets and checklists
            to help you plan, install and maintain fire protection systems.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-slate-200 bg-white py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-4">
          <span className="flex items-center gap-1.5 text-sm font-medium text-slate-600">
            <Filter className="h-4 w-4" />
            Filter by type:
          </span>
          <span className="rounded-full border border-fire-200 bg-fire-50 px-3 py-1 text-sm font-medium text-fire-600">
            All
          </span>
          {types.map((t) => (
            <span
              key={t}
              className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 hover:border-fire-200 hover:text-fire-600"
            >
              {typeLabels[t].label}
            </span>
          ))}
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          {resources.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {resources.map((resource, i) => (
                <div
                  key={i}
                  className="group rounded-xl border border-slate-200 transition-all hover:border-fire-200 hover:shadow-md"
                >
                  <div className="aspect-[16/9] rounded-t-xl bg-slate-100" />
                  <div className="p-5">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
                        {typeLabels[resource.type]?.icon}
                        {typeLabels[resource.type]?.label || resource.type}
                      </span>
                    </div>
                    <h3 className="mt-3 font-semibold text-slate-800">
                      {resource.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      {resource.description}
                    </p>
                    {resource.downloadUrl ? (
                      <a
                        href={resource.downloadUrl}
                        className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-fire-600 hover:text-fire-700"
                        download
                      >
                        <Download className="h-4 w-4" />
                        Download
                      </a>
                    ) : (
                      <span className="mt-4 inline-flex items-center gap-1 text-sm text-slate-400">
                        Coming soon
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <BookOpen className="h-16 w-16 text-slate-300" />
              <h2 className="mt-6 text-xl font-semibold text-slate-700">
                Resources Coming Soon
              </h2>
              <p className="mt-3 max-w-md text-slate-500">
                We are preparing fire safety guides, product datasheets,
                installation checklists and other helpful resources for download.
                Check back soon.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-fire-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-fire-700"
              >
                Contact Us for Information
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
