import Image from "next/image";
import Link from "next/link";

const pricingCategories = [
  {
    title: "All Ceramic",
    rows: [
      ["e.max CAD (model required)", "$95"],
      ["e.max Press / Layered", "$115"],
      ["Zirconia (model-less)", "$39.90"],
      ["Zirconia (model required)", "$55"],
      ["3D Zirconia (IPS e.max / layered)", "$99"],
    ],
  },
  {
    title: "Implant Crown & Bridge",
    rows: [
      ["Screw-Retained (titanium base)", "$250"],
      ["Screw-Retained (PFM)", "$195"],
      ["Cement-Retained (PFM)", "$195"],
      ["Cement-Retained (e.max)", "$240"],
      ["Full-Arch Zirconia Frame", "$1,800"],
      ["Full-Arch Zirconia Stacked", "$2,200"],
      ["Full-Arch Acrylic (PMMA) Provisionals", "$1,500"],
    ],
  },
  {
    title: "Porcelain Fused to Metal",
    rows: [
      ["PFM Full Contour (noble metal)", "$95"],
      ["PFM Full Contour (high noble)", "$105"],
      ["PFM Buildup (noble metal)", "$105"],
      ["PFM Buildup (high noble)", "$120"],
      ["PFM Full Cast Crown (noble)", "$90"],
      ["PFM Full Cast Crown (high noble)", "$95"],
    ],
  },
  {
    title: "Removable",
    rows: [
      ["Complete Denture (standard)", "$450"],
      ["Complete Denture (premium / custom)", "$650"],
      ["Partial Denture (acrylic)", "$350"],
      ["Partial Denture (cast metal frame)", "$550"],
      ["Flexible Partial Denture", "$450"],
      ["Implant-Retained Overdenture", "$1,200"],
    ],
  },
  {
    title: "Metal Framework",
    rows: [
      ["Removable Partial Denture Framework (CoCr)", "$89"],
      ["Removable Partial Denture Framework (Ti-based)", "$150"],
    ],
  },
  {
    title: "Mouth Guards",
    rows: [
      ["Single Arch (soft)", "$85"],
      ["Single Arch (hard / dual laminate)", "$110"],
      ["Single Arch (night guard - hard)", "$99"],
      ["Double Arch", "$150"],
    ],
  },
  {
    title: "Extras",
    rows: [
      ["Custom Shade / Staining", "$25"],
      ["Custom Characterized / Layered", "$35"],
      ["Dies (per unit)", "$8"],
      ["Soft Tissue Model (per arch)", "$45"],
      ["Digital Smile Design", "$85"],
      ["Implant Surgical Guide (per arch)", "$250"],
    ],
  },
];

export default function PricingPage() {
  return (
    <main>
      {/* ─── HERO ─── */}
      <section className="bg-[#06182b] px-5 py-20 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <p className="eyebrow text-[#d9bc7b]">Pricing</p>
          <h1 className="display-font mt-4 max-w-5xl text-5xl font-bold md:text-6xl">
            Our Price List
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Competitive pricing for high-quality dental restorations. Prices subject to case complexity.
          </p>
        </div>
      </section>

      {/* ─── NEW CUSTOMER PROMO ─── */}
      <section className="px-5 pt-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="rounded-3xl bg-gradient-to-br from-[#1E3A5F] to-[#0f2a45] p-8 text-white shadow-xl ring-1 ring-[#D9BC7B]/30 md:p-12">
            <div className="flex flex-col items-start gap-1">
              <span className="rounded-full bg-[#D9BC7B]/20 px-4 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#D9BC7B]">
                Limited Time Offer
              </span>
              <h2 className="display-font mt-3 text-3xl font-bold md:text-4xl">
                NEW CUSTOMER WELCOME PROGRAM
              </h2>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#D9BC7B] text-xs font-bold text-[#1E3A5F]">✦</span>
                <div>
                  <p className="font-semibold">Free first zirconia crown for qualified new dental clinics*</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#D9BC7B] text-xs font-bold text-[#1E3A5F]">✦</span>
                <div>
                  <p className="font-semibold">Free shipping on qualifying orders over $200</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#D9BC7B] text-xs font-bold text-[#1E3A5F]">✦</span>
                <div>
                  <p className="font-semibold">Free business card design for partner clinics</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#D9BC7B] text-xs font-bold text-[#1E3A5F]">✦</span>
                <div>
                  <p className="font-semibold">Free intraoral scanner program for qualified practices</p>
                </div>
              </div>
            </div>
            <p className="mt-6 text-xs text-slate-400">*Terms and conditions apply.</p>
          </div>
        </div>
      </section>

      {/* ─── PRICING TABLES ─── */}
      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-8 md:grid-cols-2">
            {pricingCategories.map((category) => (
              <div
                key={category.title}
                className="premium-card overflow-hidden rounded-2xl"
              >
                <div className="bg-[#1E3A5F] px-6 py-4">
                  <h3 className="text-lg font-bold text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="divide-y divide-slate-100">
                  {category.rows.map(([item, price]) => (
                    <div
                      key={item}
                      className="flex items-center justify-between px-6 py-3.5 text-sm"
                    >
                      <span className="text-slate-700">{item}</span>
                      <span className="ml-4 shrink-0 font-bold text-[#1E3A5F]">
                        {price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── REFERENCE IMAGE ─── */}
      <section className="bg-[#F8FAFC] px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <p className="eyebrow text-center justify-center">Reference</p>
          <h2 className="display-font mt-4 text-center text-3xl font-bold text-[#1E3A5F] md:text-4xl">
            Original Price List Brochure
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
            Prices reflected in the brochure are for reference. Contact us for current pricing.
          </p>
          <div className="relative mx-auto mt-8 max-w-3xl">
            <Image
              src="/images/price-list-2026.jpeg"
              alt="Louis Dental Center Price List 2026 brochure"
              width={1200}
              height={900}
              className="h-auto w-full rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-[#EAF4FF] px-5 py-20 text-center sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="display-font text-4xl font-bold text-[#1E3A5F] md:text-5xl">
            Questions about pricing?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-700">
            Contact us for custom quotes, volume pricing, or clarification on any service.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="button-primary">
              Contact Us
            </Link>
            <Link href="/case-upload" className="button-secondary">
              Upload a Case
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
