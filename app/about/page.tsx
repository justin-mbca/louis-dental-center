import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "All-on-X Restorations",
    image: "/images/all-on-x.png",
    alt: "All-on-X full arch dental restoration",
    description: "Complete full-arch implant rehabilitation with immediate provisional and final zirconia prostheses.",
  },
  {
    title: "Zirconia Crowns",
    image: "/images/zirconia-crowns.png",
    alt: "Model-less zirconia crowns",
    description: "High-quality zirconia restorations with digital workflow efficiency and competitive pricing.",
  },
  {
    title: "Implant Restorations",
    image: "/images/implant-restoration.png",
    alt: "Implant restorations",
    description: "Precision implant crown and bridge solutions compatible with major implant systems.",
  },
  {
    title: "CAD/CAM Ti Custom Abutments",
    image: "/images/custom-abutment-package.png",
    alt: "CAD/CAM titanium custom abutment",
    description: "Custom-milled titanium abutments designed for optimal fit and restorative outcomes.",
  },
  {
    title: "Metal Frameworks",
    image: "/images/metal-framework.jpeg",
    alt: "Metal framework for removable partial denture",
    description: "Economical Co-Cr and clear framework solutions for removable partial dentures.",
  },
  {
    title: "Removable Dentures",
    image: "/images/dentures.jpeg",
    alt: "Removable dentures",
    description: "3D printed and traditional acrylic dentures with digital or conventional workflow options.",
  },
  {
    title: "Free Intraoral Scanner Program",
    image: "/images/free-intraoral-scanner.jpeg",
    alt: "Free intraoral scanner program",
    description: "Helping qualified practices transition to digital dentistry with improved workflow efficiency.",
  },
];

const features = [
  {
    icon: "✓",
    title: "High Quality Restorations",
    description: "Precision-crafted restorations using premium materials and advanced digital workflows.",
  },
  {
    icon: "✓",
    title: "Digital Dentistry Workflow",
    description: "End-to-end digital coordination from case intake through final restoration delivery.",
  },
  {
    icon: "✓",
    title: "Competitive Pricing",
    description: "Flexible pricing options with domestic and global manufacturing to match your budget.",
  },
  {
    icon: "✓",
    title: "Implant Expertise",
    description: "Comprehensive implant restoration support across major implant platforms.",
  },
  {
    icon: "✓",
    title: "Fast Turnaround",
    description: "Efficient production timelines without compromising quality or precision.",
  },
  {
    icon: "✓",
    title: "Personalized Technical Support",
    description: "Dedicated support team to assist with case planning, design review, and troubleshooting.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* ─── HERO ─── */}
      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            <div>
              <p className="eyebrow">About</p>
              <h1 className="display-font mt-4 text-5xl font-bold leading-[1.05] text-[#1E3A5F] md:text-6xl">
                About Louis Dental Center
              </h1>
              <p className="mt-6 text-2xl font-bold text-[#1E3A5F]">
                Your Comprehensive Dental Solution Center
              </p>
              <p className="mt-3 text-lg font-semibold italic text-[#D9BC7B]">
                Different Solutions. Different Prices. One Service Standard.
              </p>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Louis Dental Center provides modern digital dental laboratory services with flexible domestic
                and global production solutions. We support dental practices with high-quality restorations,
                CAD/CAM design, implant solutions, digital workflows, and personalized technical support.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="button-primary">
                  Become a Partner
                </Link>
                <Link href="/services" className="button-secondary">
                  View Special Offers
                </Link>
              </div>
            </div>
            <div className="relative min-h-[400px] overflow-hidden rounded-[2rem] shadow-2xl sm:min-h-[500px]">
              <Image
                src="/images/company.png"
                alt="Louis Dental Center facility"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHO WE ARE ─── */}
      <section className="bg-[#F8FAFC] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <p className="eyebrow">Overview</p>
          <h2 className="display-font mt-4 text-4xl font-bold text-[#1E3A5F] md:text-5xl">
            Who We Are
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              "Local support in the Dallas–Fort Worth area",
              "Digital workflow coordination",
              "CAD/CAM design expertise",
              "Domestic production options",
              "Flexible manufacturing solutions",
              "Personalized customer support",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-[#D9BC7B]/40 bg-white px-5 py-4 font-semibold text-[#334155] shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1E3A5F] text-xs text-white">
                  ✓
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <p className="eyebrow justify-center text-center">Why Choose Us</p>
          <h2 className="display-font mt-4 text-center text-4xl font-bold text-[#1E3A5F] md:text-5xl">
            Why Choose Louis Dental Center
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="premium-card rounded-3xl p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1E3A5F] text-lg font-bold text-white">
                  {feature.icon}
                </div>
                <h3 className="mt-5 text-xl font-bold text-[#1E3A5F]">
                  {feature.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OUR PRODUCTS & SERVICES ─── */}
      <section className="bg-[#EAF4FF] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <p className="eyebrow justify-center text-center">Products & Services</p>
          <h2 className="display-font mt-4 text-center text-4xl font-bold text-[#1E3A5F] md:text-5xl">
            Our Products & Services
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="premium-card group flex h-full flex-col overflow-hidden rounded-3xl"
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(min-width: 1024px) 31vw, (min-width: 768px) 46vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-2xl font-bold text-[#1E3A5F]">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 leading-7 text-slate-600">
                    {service.description}
                  </p>
                  <Link
                    href="/services"
                    className="mt-5 inline-block self-start rounded-full border border-[#1E3A5F] px-5 py-2 text-sm font-bold text-[#1E3A5F] transition-colors hover:bg-[#1E3A5F] hover:text-white"
                  >
                    Learn More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OUR VISION ─── */}
      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="rounded-3xl bg-gradient-to-br from-[#1E3A5F] to-[#0f2a45] p-10 text-white shadow-xl md:p-14">
            <p className="eyebrow text-[#D9BC7B]">Looking Forward</p>
            <h2 className="display-font mt-4 text-3xl font-bold md:text-4xl">
              Our Vision
            </h2>
            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
              Louis Dental Center is committed to expanding digital dentistry services and building
              long-term partnerships with dental practices. As the business grows, we plan to expand
              our local laboratory capabilities while continuing to provide flexible, high-quality
              restorative solutions.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="rounded-full bg-white px-8 py-4 text-sm font-bold text-[#1E3A5F] hover:bg-[#EAF4FF]">
                Become a Partner
              </Link>
              <Link href="/services" className="rounded-full border-2 border-white/50 px-8 py-4 text-sm font-bold text-white hover:bg-white/10">
                View Special Offers
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-[#EAF4FF] px-5 py-20 text-center sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="display-font text-4xl font-bold text-[#1E3A5F] md:text-5xl">
            Ready to work with us?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-700">
            Take the first step toward partnering with Louis Dental Center.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="button-primary">
              Become a Partner
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
