import type { Metadata } from "next";
import { siteConfig } from "@/lib/data";
import { Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.name} — how we collect, use and protect your personal information.`,
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="bg-navy-900 py-24 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <span className="mb-4 inline-block rounded-full border border-fire-500/30 bg-fire-500/10 px-4 py-1.5 text-sm font-medium text-fire-400">
            Legal
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            Your privacy matters to us. This policy explains how we handle your
            data.
          </p>
        </div>
      </section>

      {/* ── Content ───────────────────────────────────── */}
      <section className="bg-white py-20">
        <article className="mx-auto max-w-3xl px-4 prose prose-slate prose-headings:text-navy-900 prose-a:text-fire-600">
          <p className="text-sm text-slate-400">Last updated: [Date — Client Content Required]</p>

          <h2>1. Introduction</h2>
          <p>
            [Introduction to privacy policy — Client Content Required]
          </p>
          <p>
            This Privacy Policy describes how {siteConfig.name} (&ldquo;we,&rdquo;
            &ldquo;our,&rdquo; or &ldquo;us&rdquo;) collects, uses and protects
            information when you visit our website and use our services.
          </p>

          <h2>2. Information We Collect</h2>
          <p>
            [Details of personal and non-personal data collected — Client Content Required]
          </p>
          <p>
            We may collect information such as your name, email address, phone
            number, company name and project details when you submit a contact
            form, request a quote, or otherwise communicate with us.
          </p>

          <h2>3. How We Use Your Information</h2>
          <p>
            [Purpose of data processing — Client Content Required]
          </p>
          <p>
            Your information may be used to respond to your enquiries, provide
            service quotes, improve our website and services, and comply with
            legal obligations.
          </p>

          <h2>4. Data Retention</h2>
          <p>
            [Retention periods and criteria — Client Content Required]
          </p>
          <p>
            We retain personal data only for as long as necessary to fulfil the
            purposes for which it was collected, or as required by law.
          </p>

          <h2>5. Data Security</h2>
          <div className="not-prose my-6 flex items-start gap-4 rounded-xl border border-slate-200 bg-slate-50 p-6">
            <Shield className="mt-0.5 h-6 w-6 flex-shrink-0 text-fire-600" />
            <p className="text-sm text-slate-600">
              We implement appropriate technical and organisational measures to
              protect your personal data against unauthorised access, alteration,
              disclosure or destruction.
            </p>
          </div>

          <h2>6. Third-Party Services</h2>
          <p>
            [Third-party tools and services used — Client Content Required]
          </p>

          <h2>7. Cookies</h2>
          <p>
            [Cookie policy details — Client Content Required]
          </p>

          <h2>8. Your Rights</h2>
          <p>
            [Data subject rights — Client Content Required]
          </p>
          <p>
            You have the right to access, correct, delete or restrict processing
            of your personal data. To exercise these rights, please contact us at{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          </p>

          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. Any changes will be
            posted on this page with an updated &ldquo;Last updated&rdquo; date.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us:
          </p>
          <ul>
            <li>Email: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></li>
            <li>Phone: {siteConfig.phone}</li>
            <li>Address: {siteConfig.address}</li>
          </ul>
        </article>
      </section>
    </>
  );
}
