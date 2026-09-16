import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, MapPin, Briefcase } from "lucide-react";
import { projects } from "@/lib/content";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.name,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <div>
      {/* Hero */}
      <section className="bg-navy-900 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <Link
            href="/projects"
            className="mb-6 inline-flex items-center gap-1 text-sm text-slate-400 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            All Projects
          </Link>
          <div className="text-xs font-medium uppercase tracking-wider text-fire-400">
            {project.industry}
          </div>
          <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            {project.name}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-300">
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {project.location}
            </span>
            <span className="flex items-center gap-1">
              <Briefcase className="h-4 w-4" />
              {project.scope}
            </span>
          </div>
        </div>
      </section>

      {/* Image placeholder */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="aspect-[16/9] rounded-xl bg-slate-100" />
        </div>
      </section>

      {/* Description */}
      <section className="bg-white pb-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold text-slate-800">Project Details</h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            {project.description}
          </p>

          {/* Services applied */}
          {project.services.length > 0 && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-slate-800">
                Services Applied
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.services.map((s, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-600"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-50 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-800">
            Similar project in mind?
          </h2>
          <p className="mt-3 text-slate-600">
            Contact us to discuss your fire safety requirements.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-fire-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-fire-700"
          >
            Request a Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
