"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/data";

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    `Hello! I'm interested in your fire safety solutions. Could you please provide more information?`
  );
  const href = `https://wa.me/${siteConfig.whatsapp}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center rounded-full bg-[#25D366] p-4 text-white shadow-lg transition-transform hover:scale-110 lg:hidden"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
