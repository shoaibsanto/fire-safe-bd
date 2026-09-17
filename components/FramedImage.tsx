import Image from "next/image";
import { cn } from "@/lib/utils";

interface FramedImageProps {
  src: string;
  alt: string;
  objectPosition?: string;
  className?: string;
  priority?: boolean;
}

/** A rounded, shadowed image frame with a tuned crop focus — used for the few large photographic moments on the homepage. */
export function FramedImage({ src, alt, objectPosition = "center", className, priority = false }: FramedImageProps) {
  return (
    <div className={cn("relative overflow-hidden rounded-3xl bg-slate-100 shadow-xl shadow-slate-900/10", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 50vw, 100vw"
        style={{ objectFit: "cover", objectPosition }}
      />
    </div>
  );
}
