import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "All-on-X Restorations",
    image: "/images/all-on-x.png",
    alt: "All-on-X full arch dental restoration",
    price: "Starting at $2,999 per arch",
    highlights: [
      "Immediate provisional restoration",
      "Final zirconia prosthesis",
      "Complete full-arch rehabilitation",
      "Rapid turnaround",
    ],
  },
  {
    title: "Removable Dentures",
    image: "/images/dentures.jpeg",
    alt: "Removable dentures",
    highlights: [
      "3D printed dentures",
      "Traditional acrylic dentures",
      "Choose digital or conventional workflow",
    ],
  },
  {
    title: "Model-less Zirconia Crowns",
    image: "/images/zirconia-crowns.png",
    alt: "Model-less zirconia crowns",
    price: "Starting at $29.90",
    highlights: [
      "No physical model required",
      "No-remake policy",
      "If there is any issue, simply submit a new scan",
    ],
  },
  {
    title: "Metal Frameworks",
    image: "/images/metal-framework.jpeg",
    alt: "Metal framework for removable partial denture",
    price: "Starting at $89",
    highlights: [
      "Simple and economical framework solution",
      "For removable partial dentures",
    ],
  },
  {
    title: "CAD/CAM Ti Custom Abutment & Crown Package",
    image: "/images/custom-abutment-package.png",
    alt: "CAD/CAM titanium custom abutment and crown package",
    price: "Starting at $230",
    highlights: [
      "Precision titanium custom abutment",
      "Implant crown package",
    ],
  },
  {
    title: "Free Intraoral Scanner Program",
    image: "/images/free-intraoral-scanner.jpeg",
    alt: "Free intraoral scanner program",
    highlights: [
      "For qualified dental practices",
      "Helping clinics transition to digital dentistry",
      "Improve digital workflow efficiency",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* ─── HERO ─── */}
      <section className="bg-[#06182b] px-5 py-20 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <p className="eyebrow text-[#d9bc7b]">Special Offers</p>
          <h1 className="display-font mt-4 max-w-4xl text-5xl font-bold md:text-6xl">
            Special Offers
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Discover our featured products, exclusive pricing, and special programs designed to help dental practices reduce costs while delivering exceptional patient care.
          </p>
        </div>
      </section>

      {/* ─── SERVICE CARDS ─── */}
      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                  <div className="mt-3 flex-1 space-y-2 text-lg leading-8 text-slate-600">
                    {service.highlights.map((item, i) => (
                      <p key={i}>{item}</p>
                    ))}
                  </div>
                  {service.price && (
                    <div className="mt-5 inline-block self-start rounded-full bg-[#1E3A5F] px-5 py-2 text-base font-bold text-white">
                      {service.price}
                    </div>
                  )}
                  {!service.price && service.title === "Free Intraoral Scanner Program" && (
                    <div className="mt-5 inline-block self-start rounded-full bg-[#D9BC7B] px-5 py-2 text-base font-bold text-[#1E3A5F]">
                      Qualified Practices Only
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-[#EAF4FF] px-5 py-20 text-center sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="display-font text-4xl font-bold text-[#1E3A5F] md:text-5xl">
            Interested in our services?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-700">
            Contact us to discuss your laboratory needs and learn how we can support your practice.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
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
