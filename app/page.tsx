import Image from "next/image";
import Link from "next/link";

const steps = [
  {
    step: 1,
    title: "Contact Louis Dental Center",
    description: "Reach out to discuss your laboratory needs and begin the partnership process.",
  },
  {
    step: 2,
    title: "Discuss Your Laboratory Needs",
    description: "We'll review your digital workflow, case types, and requirements.",
  },
  {
    step: 3,
    title: "Open a Customer Account",
    description: "Our team will set up your laboratory account with personalized pricing.",
  },
  {
    step: 4,
    title: "Receive Onboarding & Instructions",
    description: "Get shipping details, pricing information, and technical onboarding.",
  },
  {
    step: 5,
    title: "Begin Sending Cases",
    description: "Start submitting cases through our secure customer ordering system.",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* ─── HERO BANNER ─── */}
      <section className="relative min-h-[70vh]">
        <Image
          src="/images/home-hero.jpeg"
          alt="Louis Dental Center — modern dental laboratory"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </section>

      {/* ─── ZIRCONIA RESTORATION OVERVIEW ─── */}
      <section className="bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="relative">
            <Image
              src="/images/zirconia-restoration-overview.jpeg"
              alt="Zirconia Restoration Overview — View Price List, Contact Us, Learn More"
              width={1440}
              height={800}
              style={{ width: "100%", height: "auto" }}
              className="rounded-2xl shadow-lg"
              priority
            />

            {/* Desktop overlay buttons */}
            <div className="hidden sm:block absolute inset-0">
              <a
                href="/services/pricing"
                className="absolute block rounded-lg transition-colors duration-200 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-[#D9BC7B]"
                style={{ left: "14%", top: "72%", width: "20%", height: "10%" }}
                aria-label="View Price List"
              />
              <a
                href="/contact"
                className="absolute block rounded-lg transition-colors duration-200 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-[#D9BC7B]"
                style={{ left: "40%", top: "72%", width: "20%", height: "10%" }}
                aria-label="Contact Us"
              />
              <a
                href="/about"
                className="absolute block rounded-lg transition-colors duration-200 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-[#D9BC7B]"
                style={{ left: "66%", top: "72%", width: "20%", height: "10%" }}
                aria-label="Learn More"
              />
            </div>
          </div>

          {/* Mobile buttons below the image */}
          <div className="mt-6 grid grid-cols-3 gap-3 sm:hidden">
            <Link
              href="/services/pricing"
              className="rounded-full bg-[#1E3A5F] px-4 py-3 text-center text-sm font-bold text-white hover:bg-[#294d78] transition-colors"
            >
              View Price List
            </Link>
            <Link
              href="/contact"
              className="rounded-full bg-[#1E3A5F] px-4 py-3 text-center text-sm font-bold text-white hover:bg-[#294d78] transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/about"
              className="rounded-full bg-[#1E3A5F] px-4 py-3 text-center text-sm font-bold text-white hover:bg-[#294d78] transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* ─── BECOME A PARTNER ─── */}
      <section className="bg-[#EAF4FF] px-5 py-20 text-center sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <p className="eyebrow justify-center">Partnership</p>
          <h2 className="display-font mt-4 text-4xl font-bold text-[#1E3A5F] md:text-5xl">
            Become a Partner
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-700">
            We welcome dentists and dental practices interested in partnering with us.
            Our team will guide you through account setup, digital workflow onboarding,
            pricing, shipping instructions, and ongoing laboratory support.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="button-primary">
              Become a Partner
            </Link>
            <Link href="/contact" className="button-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1440px]">
          <p className="eyebrow justify-center">Onboarding</p>
          <h2 className="display-font mt-4 text-center text-4xl font-bold text-[#1E3A5F] md:text-5xl">
            How to Start Working With Us
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-5">
            {steps.map((item, index) => (
              <div key={item.step} className="relative text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#1E3A5F] text-2xl font-bold text-white shadow-lg">
                  {item.step}
                </div>
                <h3 className="mt-5 text-lg font-bold text-[#1E3A5F]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                {index < steps.length - 1 && (
                  <div className="mt-4 text-2xl text-[#D9BC7B] hidden md:block">↓</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EXISTING CUSTOMERS ─── */}
      <section className="bg-[#F8FAFC] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px] text-center">
          <p className="eyebrow justify-center">Portal</p>
          <h2 className="display-font mt-4 text-4xl font-bold text-[#1E3A5F] md:text-5xl">
            Existing Customers
          </h2>
          <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-600">
            Existing customers will receive secure login credentials for our laboratory ordering system.
            Once your account is approved, you will be able to:
          </p>
          <div className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-2">
            {[
              "Submit laboratory cases",
              "Upload STL files",
              "Upload prescriptions",
              "Track production status",
              "Communicate with technicians",
              "Receive invoices and notifications",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-[#D9BC7B]/40 bg-white px-5 py-4 font-semibold text-[#334155] shadow-sm"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1E3A5F] text-xs text-white">✓</span>
                {item}
              </div>
            ))}
          </div>
          <div className="mt-8 inline-block rounded-full bg-[#D9BC7B]/20 px-6 py-3 text-sm font-bold text-[#1E3A5F]">
            Customer Ordering Portal — Coming Soon
          </div>
        </div>
      </section>
    </main>
  );
}
