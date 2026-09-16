import type { Metadata } from "next";
import { siteConfig } from "@/lib/data";
import { FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: `Terms and conditions for using ${siteConfig.name} website and services.`,
};

export default function TermsPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="bg-navy-900 py-24 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <span className="mb-4 inline-block rounded-full border border-fire-500/30 bg-fire-500/10 px-4 py-1.5 text-sm font-medium text-fire-400">
            Legal
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Terms and Conditions
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            Please read these terms carefully before using our website or
            engaging our services.
          </p>
        </div>
      </section>

      {/* ── Content ───────────────────────────────────── */}
      <section className="bg-white py-20">
        <article className="mx-auto max-w-3xl px-4 prose prose-slate prose-headings:text-navy-900 prose-a:text-fire-600">
          <p className="text-sm text-slate-400">Last updated: [Date — Client Content Required]</p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            [Acceptance clause — Client Content Required]
          </p>
          <p>
            By accessing and using the {siteConfig.name} website and services,
            you agree to be bound by these Terms and Conditions. If you do not
            agree, please do not use our website or services.
          </p>

          <h2>2. Services</h2>
          <p>
            [Description of services and scope — Client Content Required]
          </p>
          <p>
            {siteConfig.name} provides fire safety, detection, protection and
            fighting solutions including system design, installation, inspection,
            maintenance and consultancy services in Bangladesh.
          </p>

          <h2>3. Quotations and Pricing</h2>
          <p>
            [Quotation terms, validity, pricing policy — Client Content Required]
          </p>
          <p>
            All quotations are valid for the period stated therein. Prices are
            subject to change without prior notice unless confirmed in a signed
            agreement.
          </p>

          <h2>4. Contracts and Agreements</h2>
          <p>
            [Contract formation terms — Client Content Required]
          </p>
          <p>
            A binding contract is formed only upon written acceptance of our
            quotation and execution of a formal service agreement.
          </p>

          <h2>5. Intellectual Property</h2>
          <p>
            [IP rights and ownership — Client Content Required]
          </p>
          <p>
            All content on this website, including text, graphics, logos and
            designs, is the property of {siteConfig.name} and is protected by
            applicable intellectual property laws.
          </p>

          <h2>6. Limitation of Liability</h2>
          <div className="not-prose my-6 flex items-start gap-4 rounded-xl border border-slate-200 bg-slate-50 p-6">
            <FileText className="mt-0.5 h-6 w-6 flex-shrink-0 text-fire-600" />
            <p className="text-sm text-slate-600">
              [Limitation of liability clause — Client Content Required].
              {siteConfig.name} shall not be liable for any indirect, incidental
              or consequential damages arising from the use of our website or
              services.
            </p>
          </div>

          <h2>7. Warranty</h2>
          <p>
            [Warranty terms for products and services — Client Content Required]
          </p>

          <h2>8. Indemnification</h2>
          <p>
            [Indemnification clause — Client Content Required]
          </p>

          <h2>9. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with
            the laws of Bangladesh. Any disputes shall be subject to the
            exclusive jurisdiction of the courts of Dhaka, Bangladesh.
          </p>

          <h2>10. Modifications</h2>
          <p>
            We reserve the right to modify these Terms at any time. Changes
            will be effective immediately upon posting on this page. Your
            continued use of our website constitutes acceptance of the modified
            Terms.
          </p>

          <h2>11. Contact</h2>
          <p>
            For questions about these Terms, contact us:
          </p>
          <ul>
            <li>Email: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></li>
            <li>Phone: {siteConfig.phone}</li>
            <li>Address: {siteConfig.corporateOffice}</li>
          </ul>
        </article>
      </section>
    </>
  );
}
