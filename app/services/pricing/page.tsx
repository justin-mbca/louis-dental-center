import Link from "next/link";
import fs from "fs";
import path from "path";

type PricingRow = {
  category: string;
  product: string;
  price: string;
  note: string;
};

function parseCSV(text: string): PricingRow[] {
  const lines = text.trim().split("\n");
  const rows: PricingRow[] = [];

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    const parts = line.split(",");
    if (parts.length < 3) continue;

    const [category, product, price, ...rest] = parts;
    const note = rest.length > 0 ? rest.join(",").trim() : "";

    if (category && product) {
      rows.push({
        category: category.trim(),
        product: product.trim(),
        price: price.trim(),
        note: note,
      });
    }
  }

  return rows;
}

function groupByCategory(rows: PricingRow[]): Map<string, PricingRow[]> {
  const map = new Map<string, PricingRow[]>();
  for (const row of rows) {
    const existing = map.get(row.category) || [];
    existing.push(row);
    map.set(row.category, existing);
  }
  return map;
}

function formatPrice(raw: string): string {
  const cleaned = raw.replace(/[^0-9.]/g, "");
  const num = parseFloat(cleaned);
  if (isNaN(num)) return raw;
  if (Number.isInteger(num)) return `$${num}`;
  return `$${num.toFixed(2)}`;
}

export default function PricingPage() {
  const csvPath = path.join(process.cwd(), "public", "data", "louis-price-list.csv");
  const csvContent = fs.readFileSync(csvPath, "utf-8");
  const rows = parseCSV(csvContent);
  const grouped = groupByCategory(rows);

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

      {/* ─── PRICING TABLES (from CSV) ─── */}
      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-8 md:grid-cols-2">
            {Array.from(grouped.entries()).map(([category, items]) => (
              <div
                key={category}
                className="premium-card overflow-hidden rounded-2xl"
              >
                <div className="bg-[#1E3A5F] px-6 py-4">
                  <h3 className="text-lg font-bold text-white">
                    {category}
                  </h3>
                </div>
                <div className="divide-y divide-slate-100">
                  {items.map((item, idx) => (
                    <div
                      key={`${item.product}-${idx}`}
                      className="flex items-center justify-between px-6 py-3.5 text-sm"
                    >
                      <span className="text-slate-700">
                        {item.product}
                        {item.note ? (
                          <span className="ml-1 text-xs text-slate-400">
                            ({item.note})
                          </span>
                        ) : null}
                      </span>
                      <span className="ml-4 shrink-0 font-bold text-[#1E3A5F]">
                        {formatPrice(item.price)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-slate-400">
            Prices sourced from official price list. Contact us for current pricing and custom quotes.
          </p>
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
            <Link href="/services" className="button-secondary">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
