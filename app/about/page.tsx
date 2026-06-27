import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main>
      {/* ─── HERO ─── */}
      <section className="bg-[#06182b] px-5 py-20 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <p className="eyebrow text-[#d9bc7b]">About</p>
          <h1 className="display-font mt-4 max-w-5xl text-5xl font-bold md:text-6xl">
            Louis Dental Center
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Growing digital dental laboratory serving the Dallas–Fort Worth area
          </p>
        </div>
      </section>

      {/* ─── INTRO ─── */}
      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            <div>
              <h2 className="display-font text-4xl font-bold text-[#1E3A5F] md:text-5xl">
                About Louis Dental Center
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Louis Dental Center is a growing digital dental laboratory providing local support in the Dallas–Fort Worth area, digital workflow coordination, CAD/CAM design services, and flexible domestic and global production options through partner manufacturing resources.
              </p>

              <h3 className="mt-8 text-2xl font-bold text-[#1E3A5F]">Our Mission</h3>
              <p className="mt-3 leading-8 text-slate-600">
                Helping dental practices improve efficiency through modern digital workflows, quality restorations, flexible manufacturing options, and personalized technical support.
              </p>

              <h3 className="mt-6 text-2xl font-bold text-[#1E3A5F]">Our Vision</h3>
              <p className="mt-3 leading-8 text-slate-600">
                Building the next generation of digital dental laboratory services while expanding local production capabilities.
              </p>

              <p className="mt-6 text-xl font-bold text-[#1E3A5F]">
                We believe every dentist deserves options.
              </p>
              <p className="mt-4 leading-8 text-slate-600">
                Different Solutions. Different Prices. One Service Standard.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/services" className="button-primary">
                  View Services
                </Link>
                <Link href="/contact" className="button-secondary">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="relative min-h-[400px] overflow-hidden rounded-[2rem] shadow-2xl">
              <Image
                src="/images/logo.png"
                alt="Louis Dental Center"
                fill
                className="object-contain p-12 bg-[#F8FAFC]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section className="bg-[#EAF4FF] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="display-font text-center text-3xl font-bold text-[#1E3A5F] md:text-4xl">
            How We Support Your Practice
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div className="premium-card rounded-3xl p-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1E3A5F] text-2xl text-white">
                1
              </div>
              <h3 className="mt-5 text-xl font-bold text-[#1E3A5F]">Local DFW Support</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Personalized support and coordination from a digital dental laboratory serving the Dallas–Fort Worth area.
              </p>
            </div>
            <div className="premium-card rounded-3xl p-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1E3A5F] text-2xl text-white">
                2
              </div>
              <h3 className="mt-5 text-xl font-bold text-[#1E3A5F]">Digital Workflow Expertise</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Modern digital coordination from case intake through final restoration using CAD/CAM design and partner manufacturing resources.
              </p>
            </div>
            <div className="premium-card rounded-3xl p-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1E3A5F] text-2xl text-white">
                3
              </div>
              <h3 className="mt-5 text-xl font-bold text-[#1E3A5F]">Flexible Production Options</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Domestic production options combined with global partner resources to match your quality requirements, timeline, and budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="px-5 py-20 text-center sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="display-font text-4xl font-bold text-[#1E3A5F] md:text-5xl">
            Ready to work with us?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-700">
            Submit your first case and experience the Louis Dental Center difference.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/case-upload" className="button-primary">
              Upload a Case
            </Link>
            <Link href="/contact" className="button-secondary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
