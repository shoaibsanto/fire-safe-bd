import { Metadata } from "next";
import { industries } from "@/lib/data";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import {
  Building2,
  Factory,
  Warehouse,
  Heart,
  GraduationCap,
  Hotel,
  ShoppingBag,
  HardHat,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Fire Safe BD LTD provides tailored fire protection solutions for factories, hospitals, hotels, offices, warehouses, shopping malls and more across Bangladesh.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  Factory,
  Warehouse,
  Heart,
  GraduationCap,
  Hotel,
  ShoppingBag,
  HardHat,
};

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-navy-900 py-16 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Industries", href: "/industries" },
            ]}
          />
          <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Industries We Serve
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-300">
            Tailored fire protection and detection solutions for every sector — from
            garment factories to hospitals, we protect every environment.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => {
              const Icon = iconMap[ind.icon] || Building2;
              return (
                <div
                  key={ind.slug}
                  className="rounded-2xl border border-slate-200 p-6 transition-all hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-fire-50">
                    <Icon className="h-6 w-6 text-fire-600" />
                  </div>
                  <h2 className="mt-4 text-lg font-bold text-navy-900">{ind.name}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {ind.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        title="Need Fire Safety for Your Industry?"
        description="Every industry has unique fire risks. Contact us for a tailored fire protection solution."
        primaryLabel="Request a Consultation"
        primaryHref="/contact"
        secondaryLabel="WhatsApp Us"
        secondaryHref="https://wa.me/8801712960336"
      />
    </>
  );
}
