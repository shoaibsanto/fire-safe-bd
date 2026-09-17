import type { SVGProps } from "react";

/**
 * lucide-react ships only generic UI icons (no brand marks), so these three
 * social glyphs are hand-drawn to match its viewBox/style conventions.
 */

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M22 12.06C22 6.48 17.52 2 12 2S2 6.48 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
    </svg>
  );
}

export function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

export function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M23.5 7.2a3.02 3.02 0 0 0-2.12-2.14C19.5 4.6 12 4.6 12 4.6s-7.5 0-9.38.46A3.02 3.02 0 0 0 .5 7.2 31.6 31.6 0 0 0 0 12c0 1.6.16 3.2.5 4.8a3.02 3.02 0 0 0 2.12 2.14c1.88.46 9.38.46 9.38.46s7.5 0 9.38-.46a3.02 3.02 0 0 0 2.12-2.14c.34-1.6.5-3.2.5-4.8 0-1.6-.16-3.2-.5-4.8ZM9.6 15.5v-7l6.2 3.5-6.2 3.5Z" />
    </svg>
  );
}
