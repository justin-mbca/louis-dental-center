"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

type SubmissionStatus = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<SubmissionStatus>("idle");

  const updateField = (field: keyof typeof initialForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Message sending failed");
      }

      setForm(initialForm);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <main>
      {/* ─── HERO ─── */}
      <section className="bg-[#06182b] px-5 py-20 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <p className="eyebrow text-[#d9bc7b]">Contact</p>
          <h1 className="display-font mt-4 max-w-5xl text-5xl font-bold md:text-6xl">
            Get in Touch
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Reach out for case upload questions, digital lab support, or professional collaboration.
          </p>
        </div>
      </section>

      {/* ─── CONTENT ─── */}
      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[.9fr_1.1fr]">
          {/* ─── INFO ─── */}
          <div>
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white p-1.5">
                <Image
                  src="/images/logo.jpeg"
                  alt="Louis Dental Center"
                  width={64}
                  height={64}
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#1E3A5F]">Louis Dental Center</h2>
                <p className="text-base leading-7 text-slate-500">Your Comprehensive Dental Solution Center</p>
              </div>
            </div>

            <div className="mt-8 space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold text-[#1E3A5F]">📞 Phone</h3>
                <p className="mt-2 text-lg text-[#8f671f]">1 (949) 378-6176</p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold text-[#1E3A5F]">✉️ Email</h3>
                <a href="mailto:louisdentalcenter@gmail.com" className="mt-2 block text-lg text-[#8f671f] break-all hover:underline">louisdentalcenter@gmail.com</a>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold text-[#1E3A5F]"> Business Hours</h3>
                <div className="mt-3 space-y-2 text-base leading-7 text-slate-600">
                  <div className="flex justify-between"><span>Monday – Friday</span><span>8:00 AM – 5:00 PM</span></div>
                  <div className="flex justify-between"><span>Saturday</span><span>By appointment</span></div>
                  <div className="flex justify-between"><span>Sunday</span><span>Closed</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* ─── FORM ─── */}
          <form className="premium-card rounded-3xl p-7" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold text-[#1E3A5F]">Send us a message</h2>
            <p className="mt-2 text-lg leading-8 text-slate-600">
              Fill out the form and our team will get back to you.
            </p>

            <div className="mt-7 grid gap-5 md:grid-cols-2">
              <input
                className="field"
                placeholder="Name"
                required
                value={form.name}
                onChange={(e) => updateField("name", e.target.value)}
              />
              <input
                className="field"
                type="email"
                placeholder="Email"
                required
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
              />
              <input
                className="field"
                placeholder="Phone"
                value={form.phone}
                onChange={(e) => updateField("phone", e.target.value)}
              />
              <select
                className="field"
                value={form.subject}
                onChange={(e) => updateField("subject", e.target.value)}
              >
                <option value="">Subject</option>
                <option value="General inquiry">General inquiry</option>
                <option value="Case submission">Case submission</option>
                <option value="Pricing question">Pricing question</option>
                <option value="Partnership inquiry">Partnership inquiry</option>
                <option value="Technical support">Technical support</option>
              </select>
            </div>
            <textarea
              className="field mt-5 min-h-40"
              placeholder="Tell us about your case, service need, or question."
              required
              value={form.message}
              onChange={(e) => updateField("message", e.target.value)}
            />
            <button
              type="submit"
              className="button-primary mt-6 disabled:cursor-not-allowed disabled:opacity-60"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
            </button>

            <div aria-live="polite">
              {status === "success" && (
                <div className="mt-6 rounded-2xl bg-emerald-50 p-5 text-emerald-900">
                  <p className="text-lg font-bold">Message Sent Successfully</p>
                  <p className="mt-1 text-base leading-7">Thank you. Louis Dental Center has received your message.</p>
                </div>
              )}
              {status === "error" && (
                <p className="mt-6 rounded-2xl bg-red-50 p-5 text-base font-semibold leading-7 text-red-800">
                  Message failed to send. Please try again later.
                </p>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-[#EAF4FF] px-5 py-20 text-center sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="display-font text-4xl font-bold text-[#1E3A5F] md:text-5xl">
            Ready to work together?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-700">
            Contact us to discuss your laboratory needs, request pricing, schedule a consultation, or learn about our digital workflow.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/services/pricing" className="button-primary">
              View Pricing
            </Link>
            <Link href="/services" className="button-secondary">
              View Special Offers
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
