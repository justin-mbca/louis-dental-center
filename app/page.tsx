import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* ─── HERO BANNER ─── */}
      <section className="relative min-h-[70vh] flex items-center">
        <Image
          src="/images/home-hero.jpeg"
          alt="Louis Dental Center — modern dental laboratory"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 text-center">
          <h1 className="display-font text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-[1.1] max-w-4xl mx-auto">
            Precision Dental Solutions for Modern Practices
          </h1>
          <p className="mt-5 text-lg text-white/80 max-w-2xl mx-auto">
            Combining local support, digital dentistry, and global production resources.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/case-upload" className="rounded-full bg-white px-8 py-4 text-base font-bold text-[#1E3A5F] hover:bg-[#EAF4FF] shadow-lg hover:shadow-xl transition-all">
              Upload a Case
            </Link>
            <Link href="/contact" className="rounded-full border-2 border-white px-8 py-4 text-base font-bold text-white hover:bg-white/10 transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ─── ZIRCONIA RESTORATION OVERVIEW ─── */}
      <section className="bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="relative">
            <Image
              src="/images/zirconia-restoration-overview.jpeg"
              alt="Zirconia Restoration Overview — View Price List, Send a Case, Learn More"
              width={1440}
              height={800}
              className="w-full h-auto rounded-2xl shadow-lg"
              priority
            />

            {/* Desktop overlay buttons */}
            <div className="hidden sm:block absolute inset-0">
              {/* View Price List — positioned based on image content */}
              <a
                href="/services/pricing"
                className="absolute block rounded-lg transition-colors duration-200 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-[#D9BC7B]"
                style={{ left: "14%", top: "72%", width: "20%", height: "10%" }}
                aria-label="View Price List"
              />

              {/* Send A Case */}
              <a
                href="/case-upload"
                className="absolute block rounded-lg transition-colors duration-200 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-[#D9BC7B]"
                style={{ left: "40%", top: "72%", width: "20%", height: "10%" }}
                aria-label="Send A Case"
              />

              {/* Learn More */}
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
              href="/case-upload"
              className="rounded-full bg-[#1E3A5F] px-4 py-3 text-center text-sm font-bold text-white hover:bg-[#294d78] transition-colors"
            >
              Send A Case
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

      {/* ─── CTA ─── */}
      <section className="bg-[#EAF4FF] px-5 py-20 text-center sm:px-8 lg:px-12" id="cta">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="display-font text-4xl font-bold text-[#1E3A5F] md:text-5xl">
            Ready to get started?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-700">
            Submit your first case or explore our full range of services and digital solutions.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/case-upload" className="button-primary">
              Upload a Case
            </Link>
            <Link href="/services" className="button-secondary">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
