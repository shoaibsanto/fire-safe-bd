import type { Metadata } from "next";
import { Building2, Users, Handshake } from "lucide-react";
import { clients, partners } from "@/lib/content";

export const metadata: Metadata = {
  title: "Clients & Partners",
  description:
    "Trusted by leading businesses and organisations across Bangladesh. Meet our clients and technology partners.",
};

export default function ClientsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy-900 py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Clients & Partners
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Trusted by leading businesses and organisations across Bangladesh
            for reliable fire safety solutions.
          </p>
        </div>
      </section>

      {/* Clients */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center gap-3">
            <Building2 className="h-7 w-7 text-fire-600" />
            <h2 className="text-2xl font-bold text-slate-800">Our Clients</h2>
          </div>

          {clients.length > 0 ? (
            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
              {clients.map((client, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center rounded-xl border border-slate-200 p-6 transition-all hover:shadow-sm"
                >
                  <div className="flex h-20 w-32 items-center justify-center rounded-lg bg-slate-100 text-xs text-slate-400">
                    {client.name}
                  </div>
                  <p className="mt-3 text-xs text-slate-500">
                    {client.industry}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-xl border border-dashed border-slate-300 bg-slate-50 py-16 text-center">
              <Users className="mx-auto h-12 w-12 text-slate-300" />
              <h3 className="mt-4 text-lg font-semibold text-slate-600">
                Client Logos Coming Soon
              </h3>
              <p className="mt-2 max-w-md mx-auto text-sm text-slate-400">
                We are gathering client logos and testimonials to showcase our
                partnerships. Check back soon.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Partners */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center gap-3">
            <Handshake className="h-7 w-7 text-fire-600" />
            <h2 className="text-2xl font-bold text-slate-800">
              Technology Partners
            </h2>
          </div>

          {partners.length > 0 ? (
            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
              {partners.map((partner, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-6 transition-all hover:shadow-sm"
                >
                  <div className="flex h-20 w-32 items-center justify-center rounded-lg bg-slate-100 text-xs text-slate-400">
                    {partner.name}
                  </div>
                  <p className="mt-3 text-xs text-slate-500">{partner.type}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-xl border border-dashed border-slate-300 bg-white py-16 text-center">
              <Handshake className="mx-auto h-12 w-12 text-slate-300" />
              <h3 className="mt-4 text-lg font-semibold text-slate-600">
                Partner Logos Coming Soon
              </h3>
              <p className="mt-2 max-w-md mx-auto text-sm text-slate-400">
                Our technology and manufacturer partnerships will be displayed
                here once confirmed.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
