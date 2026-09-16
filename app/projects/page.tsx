import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, FolderOpen } from "lucide-react";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "View our portfolio of fire safety projects — alarm installations, detection systems, suppression systems and fire safety solutions across Bangladesh.",
};

export default function ProjectsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy-900 py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Our Projects
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            A showcase of our completed fire safety projects across commercial,
            industrial and institutional sectors in Bangladesh.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          {projects.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="group overflow-hidden rounded-xl border border-slate-200 transition-all hover:shadow-md"
                >
                  <div className="aspect-[16/9] bg-slate-100" />
                  <div className="p-5">
                    <div className="text-xs font-medium uppercase tracking-wider text-fire-600">
                      {project.industry}
                    </div>
                    <h3 className="mt-1 font-semibold text-slate-800">
                      {project.name}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      {project.location}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-fire-600 group-hover:text-fire-700">
                      View details <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <FolderOpen className="h-16 w-16 text-slate-300" />
              <h2 className="mt-6 text-xl font-semibold text-slate-700">
                Projects Coming Soon
              </h2>
              <p className="mt-3 max-w-md text-slate-500">
                We are currently showcasing our completed fire safety projects.
                Check back soon to see our portfolio of work across Bangladesh.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-fire-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-fire-700"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
