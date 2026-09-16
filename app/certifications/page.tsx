import type { Metadata } from "next";
import { ShieldCheck, Award } from "lucide-react";
import { certifications } from "@/lib/content";

export const metadata: Metadata = {
  title: "Certifications",
  description:
    "Our fire safety certifications and industry accreditations — proof of our commitment to quality and compliance.",
};

export default function CertificationsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy-900 py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Certifications
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Our commitment to quality, safety and compliance is backed by
            recognised industry certifications.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          {certifications.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-slate-200 p-6 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-fire-50 text-fire-600">
                    <ShieldCheck className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800">
                    {cert.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-fire-600">
                    {cert.issuer}
                  </p>
                  <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <Award className="h-16 w-16 text-slate-300" />
              <h2 className="mt-6 text-xl font-semibold text-slate-700">
                Certifications Coming Soon
              </h2>
              <p className="mt-3 max-w-md text-slate-500">
                Our industry certifications and accreditations will be displayed
                here once verified and confirmed. We maintain strict compliance
                with all applicable fire safety standards.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
