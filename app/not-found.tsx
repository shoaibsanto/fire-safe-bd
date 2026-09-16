import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-bold text-navy-900">404</h1>
      <p className="mt-4 text-xl text-slate-500">Page Not Found</p>
      <p className="mt-2 text-slate-400">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-fire-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-fire-700 transition-colors"
      >
        Back to Home
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
