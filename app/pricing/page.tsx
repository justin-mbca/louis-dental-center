import Link from "next/link";

const items = [
  ["Single-unit CAD design", "Quote based on material, turnaround, and file quality"],
  ["Crown and bridge", "Custom quote after RX and scan review"],
  ["Implant restoration", "Quote based on implant system and restorative complexity"],
  ["Custom abutment", "Quote based on platform, material, and design requirements"],
  ["Full arch / All-on-X", "Case consultation recommended"],
  ["Overflow lab design", "Volume pricing available after workflow review"],
];

export default function PricingPage() {
  return (
    <main>
      <section className="bg-[#06182b] px-5 py-20 text-white sm:px-8 lg:px-12"><div className="mx-auto max-w-[1440px]"><p className="eyebrow text-[#d9bc7b]">Pricing</p><h1 className="display-font mt-4 max-w-5xl text-5xl font-bold md:text-6xl">Transparent estimates after case review.</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">Use this page for starting prices, partner pricing, or request-a-quote workflows after final business pricing is confirmed.</p></div></section>
      <section className="px-5 py-20 sm:px-8 lg:px-12"><div className="mx-auto grid max-w-[1200px] gap-5 md:grid-cols-2">{items.map(([title,text])=><div key={title} className="premium-card rounded-3xl p-7"><h2 className="text-2xl font-bold text-[#09233f]">{title}</h2><p className="mt-3 leading-7 text-slate-600">{text}</p></div>)}</div><div className="mx-auto mt-10 max-w-[1200px] rounded-3xl bg-[#f6f1e8] p-8 text-center"><h2 className="display-font text-4xl font-bold text-[#09233f]">Request a custom quote.</h2><p className="mt-4 text-slate-700">Upload case details or contact the lab team for pricing based on file quality, materials, due date, and complexity.</p><Link href="/case-upload" className="button-primary mt-7">Upload for Quote</Link></div>
      <div className="mx-auto mt-6 max-w-[1200px] rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center text-sm leading-6 text-slate-500">
        <strong>Disclaimer:</strong> Prices shown are starting prices and may vary depending on case complexity, materials, workflow requirements, and restoration design.
      </div></section>
    </main>
  );
}
