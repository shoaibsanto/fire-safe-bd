import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Fire Safe BD Ltd. — Smart Detection. Safe Protection.",
    template: "%s | Fire Safe BD Ltd.",
  },
  description:
    "Professional fire safety, fire detection, fire protection and fire fighting solutions for buildings, industries and businesses in Dhaka, Bangladesh.",
  keywords: [
    "fire safety Bangladesh",
    "fire alarm system Dhaka",
    "fire extinguisher Bangladesh",
    "fire detection system",
    "fire suppression system",
    "fire protection solutions",
    "fire fighting equipment",
    "fire safety company Bangladesh",
    "fire alarm installation Dhaka",
    "fire safety inspection",
    "industrial fire safety",
    "commercial fire protection",
  ],
  authors: [{ name: "Fire Safe BD Ltd." }],
  creator: "Fire Safe BD Ltd.",
  metadataBase: new URL("https://firesafebd.com"),
  openGraph: {
    type: "website",
    locale: "en_BD",
    url: "https://firesafebd.com",
    siteName: "Fire Safe BD Ltd.",
    title: "Fire Safe BD Ltd. — Smart Detection. Safe Protection.",
    description:
      "Professional fire safety, fire detection, fire protection and fire fighting solutions for buildings, industries and businesses in Dhaka, Bangladesh.",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Fire Safe BD Ltd.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fire Safe BD Ltd. — Smart Detection. Safe Protection.",
    description:
      "Professional fire safety, fire detection, fire protection and fire fighting solutions for buildings, industries and businesses in Dhaka, Bangladesh.",
    images: ["/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="antialiased">
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
