import Image from "next/image";
import Link from "next/link";

const coreServices = [
  {
    title: "All-on-X Restorations",
    description:
      "Starting at $2,999 per arch.\n\nIncludes immediate provisional restorations and final zirconia prostheses.\n\nA complete solution for full-arch implant rehabilitation with rapid turnaround.",
    image: "/images/all-on-x.png",
    alt: "All-on-X full arch dental restoration",
    highlight: "Starting at $2,999 / Arch",
  },
  {
    title: "Removable Dentures",
    description:
      "We offer both 3D printed dentures and traditional acrylic resin dentures.\n\nChoose between modern digital workflows and time-tested conventional solutions.",
    image: "/images/dentures.jpeg",
    alt: "Removable dentures dental restoration",
    highlight: "Digital or Traditional Options",
  },
  {
    title: "Model-less Zirconia Crowns",
    description:
      "Starting at $29.90.\n\nNo physical model required.\n\nDue to the low cost, this product follows a no-remake policy. If there is an issue, simply place a new order.",
    image: "/images/zirconia-crowns.png",
    alt: "Model-less zirconia dental crowns",
    highlight: "Starting at $29.90",
  },
  {
    title: "Metal Frameworks",
    description:
      "Starting at $89.\n\nA simple and economical framework solution for removable partial denture cases.",
    image: "/images/metal-framework.jpeg",
    alt: "Metal framework for removable partial denture",
    highlight: "Starting at $89",
  },
  {
    title: "CAD/CAM Ti Custom Abutment & Crown Package",
    description:
      "Starting at $230.\n\nPrecision-milled titanium custom abutments paired with high-quality restorations.",
    image: "/images/custom-abutment-package.png",
    alt: "CAD/CAM titanium custom abutment and crown package",
    highlight: "Starting at $230",
  },
  {
    title: "Free Intraoral Scanner Program",
    description:
      "For qualified dental practices.\n\nHelping doctors transition to digital dentistry and improve clinical efficiency.",
    image: "/images/free-intraoral-scanner.jpeg",
    alt: "Free intraoral scanner for qualified dental practices",
    highlight: "Qualified Practices Only",
  },
];

const advantages = [
  "Fast Turnaround",
  "Digital Workflow Expertise",
  "Lab Direct Pricing",
  "Free Shipping on Orders Over $200",
  "U.S. Manufacturing Options",
  "Personalized Technical Support",
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* ─── HERO ─── */}
      <section className="bg-[#F8FAFC]">
        <div className="section-shell grid min-h-[720px] items-center gap-12 py-16 lg:grid-cols-[1.08fr_.92fr] lg:py-24">
          <div className="max-w-4xl">
            <p className="eyebrow">Louis Dental Center</p>
            <h1 className="display-font mt-5 text-5xl font-bold leading-[1.04] text-[#1E3A5F] sm:text-6xl lg:text-[72px]">
              Your Comprehensive Dental Solution Center
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#334155]">
              Louis Dental Center combines local support, digital dentistry,
              domestic manufacturing, and global production resources to provide
              flexible solutions for modern dental practices.
            </p>
            <p className="mt-5 text-xl font-bold text-[#1E3A5F]">
              We believe every dentist deserves options.
            </p>
            <p className="mt-4 max-w-3xl leading-8 text-[#334155]">
              Whether you prioritize premium U.S.-made restorations, affordable
              global manufacturing, remote CAD/CAM design services, or complex
              implant and full-arch solutions, our team works with you to find
              the right balance of quality, turnaround time, and budget.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Premium U.S.-Made Restorations",
                "Affordable Global Manufacturing",
                "Remote CAD/CAM Design",
                "Implant & Full-Arch Solutions",
                "Personalized Technical Support",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-[#D9BC7B]/50 bg-white px-4 py-3 font-semibold text-[#334155] shadow-sm"
                >
                  <span className="text-[#B58A3C]">✓</span>
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-7 text-xl font-bold italic text-[#1E3A5F]">
              Different Solutions. Different Prices. One Service Standard.
            </p>
          </div>
          <div className="relative min-h-[430px] overflow-hidden rounded-[2rem] shadow-2xl sm:min-h-[560px]">
            <Image
              src="/images/hero-dental-lab.png"
              alt="Modern digital dental laboratory workflow"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/30" />
          </div>
        </div>
      </section>

      {/* ─── OUR CORE SOLUTIONS ─── */}
      <section
        className="bg-[#EAF4FF] px-5 py-20 sm:px-8 lg:px-12"
        id="core-solutions"
        aria-labelledby="core-solutions-title"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow justify-center">Products & Services</p>
            <h2
              className="display-font mt-4 text-4xl font-bold tracking-tight text-[#1E3A5F] md:text-5xl"
              id="core-solutions-title"
            >
              Our Core Solutions
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Flexible solutions for every dental practice, from affordable
              digital workflows to complex implant restorations.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((service) => (
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
                  <div className="mt-3 flex-1 space-y-2 leading-7 text-slate-600">
                    {service.description.split("\n\n").map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                  <div className="mt-5 inline-block self-start rounded-full bg-[#1E3A5F] px-5 py-2 text-sm font-bold text-white">
                    {service.highlight}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section
        className="bg-[#F8FAFC] px-5 py-20 sm:px-8 lg:px-12"
        id="advantages"
        aria-labelledby="advantages-title"
      >
        <div className="mx-auto max-w-[1440px]">
          <h2
            className="display-font text-center text-4xl font-bold tracking-tight text-[#1E3A5F] md:text-5xl"
            id="advantages-title"
          >
            Why Choose Louis Dental Center?
          </h2>
          <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-[#D9BC7B]/40 bg-white px-5 py-4 font-semibold text-[#334155] shadow-sm transition-shadow duration-200 hover:shadow-md"
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

      {/* ─── CTA ─── */}
      <section
        className="bg-[#EAF4FF] px-5 py-20 text-center sm:px-8 lg:px-12"
        id="cta"
      >
        <div className="mx-auto max-w-[1440px]">
          <h2 className="display-font text-4xl font-bold text-[#1E3A5F] md:text-5xl">
            Ready to get started?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-700">
            Submit your first case or explore our full range of services and
            digital solutions.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/case-upload" className="button-primary">
              Upload a Case
            </Link>
            <Link href="/services" className="button-secondary">
              Explore Services
            </Link>
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-xs leading-5 text-slate-500">
            Prices shown are starting prices and may vary depending on case
            complexity, materials, turnaround requirements, and restoration
            design.
          </p>
        </div>
      </section>
    </main>
  );
}
