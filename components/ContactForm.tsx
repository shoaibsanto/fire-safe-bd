"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";

const services = [
  "Fire Alarm System",
  "Fire Detection",
  "Fire Suppression",
  "Fire Extinguisher",
  "Inspection",
  "Maintenance",
  "Consultancy",
  "Other",
];

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: connect to API / email service
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-10 text-center">
        <p className="text-xl font-semibold text-green-800">
          Thank you, {form.name}!
        </p>
        <p className="mt-2 text-green-700">
          We&apos;ve received your message and will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">
          Full Name *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 transition focus:border-fire-500 focus:ring-2 focus:ring-fire-500/20 focus:outline-none"
          placeholder="Your full name"
        />
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" className="mb-1 block text-sm font-medium text-slate-700">
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          value={form.company}
          onChange={handleChange}
          className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 transition focus:border-fire-500 focus:ring-2 focus:ring-fire-500/20 focus:outline-none"
          placeholder="Your company name"
        />
      </div>

      {/* Phone + Email row */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-slate-700">
            Phone *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 transition focus:border-fire-500 focus:ring-2 focus:ring-fire-500/20 focus:outline-none"
            placeholder="+880 …"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 transition focus:border-fire-500 focus:ring-2 focus:ring-fire-500/20 focus:outline-none"
            placeholder="you@company.com"
          />
        </div>
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className="mb-1 block text-sm font-medium text-slate-700">
          Service Interested In
        </label>
        <select
          id="service"
          name="service"
          value={form.service}
          onChange={handleChange}
          className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 transition focus:border-fire-500 focus:ring-2 focus:ring-fire-500/20 focus:outline-none"
        >
          <option value="">Select a service…</option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-700">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 transition focus:border-fire-500 focus:ring-2 focus:ring-fire-500/20 focus:outline-none"
          placeholder="Tell us about your project or requirements…"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-fire-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-fire-700 focus:ring-2 focus:ring-fire-500/30 focus:outline-none"
      >
        <Send className="h-4 w-4" />
        Send Message
      </button>
    </form>
  );
}
