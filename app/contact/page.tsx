import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
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
              <Image
                src="/images/logo.png"
                alt="Louis Dental Center"
                width={64}
                height={64}
                className="rounded-full bg-white"
              />
              <div>
                <h2 className="text-2xl font-bold text-[#1E3A5F]">Louis Dental Center</h2>
                <p className="text-sm text-slate-500">Your Comprehensive Dental Solution Center</p>
              </div>
            </div>

            <div className="mt-8 space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100">
                <h3 className="font-bold text-[#1E3A5F]">📞 Phone</h3>
                <a href="tel:+19493786176" className="mt-2 block text-lg text-[#8f671f] hover:underline">1 (949) 378-6176</a>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100">
                <h3 className="font-bold text-[#1E3A5F]">✉️ Email</h3>
                <a href="mailto:frank28cdt@gmail.com" className="mt-2 block text-lg text-[#8f671f] break-all hover:underline">frank28cdt@gmail.com</a>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100">
                <h3 className="font-bold text-[#1E3A5F]"> Business Hours</h3>
                <div className="mt-3 space-y-1 text-sm text-slate-600">
                  <div className="flex justify-between"><span>Monday – Friday</span><span>8:00 AM – 5:00 PM</span></div>
                  <div className="flex justify-between"><span>Saturday</span><span>By appointment</span></div>
                  <div className="flex justify-between"><span>Sunday</span><span>Closed</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* ─── FORM ─── */}
          <form className="premium-card rounded-3xl p-7">
            <h2 className="text-2xl font-bold text-[#1E3A5F]">Send us a message</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Fill out the form and our team will get back to you.
            </p>

            <div className="mt-7 grid gap-5 md:grid-cols-2">
              <input className="field" placeholder="Name" required />
              <input className="field" type="email" placeholder="Email" required />
              <input className="field" placeholder="Phone" />
              <select className="field" defaultValue="">
                <option value="" disabled>Subject</option>
                <option>General inquiry</option>
                <option>Case submission</option>
                <option>Pricing question</option>
                <option>Partnership inquiry</option>
                <option>Technical support</option>
              </select>
            </div>
            <textarea className="field mt-5 min-h-40" placeholder="Tell us about your case, service need, or question." />
            <button type="button" className="button-primary mt-6">Send Message</button>
            <p className="mt-4 text-sm text-slate-500">Frontend form only. Connect to email or CRM before production use.</p>
          </form>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-[#EAF4FF] px-5 py-20 text-center sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="display-font text-4xl font-bold text-[#1E3A5F] md:text-5xl">
            Ready to submit a case?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-700">
            Upload your case details directly and our team will begin processing.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/case-upload" className="button-primary">
              Upload a Case
            </Link>
            <Link href="/services/pricing" className="button-secondary">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
