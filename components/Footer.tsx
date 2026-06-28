import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  ["About", "/about"],
  ["Services", "/services"],
  ["Pricing", "/services/pricing"],
  ["FAQs", "/faq"],
];

const portalLinks = [
  ["Pricing", "/services/pricing"],
  ["Contact", "/contact"],
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#1E3A5F] text-white">
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[#b78b3e]/10 blur-3xl" />
      <div className="relative mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-[1.25fr_.75fr_.75fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white p-1.5">
                <Image src="/images/logo.jpeg" alt="Louis Dental Center logo" width={58} height={58} className="h-full w-full object-contain" />
              </div>
              <div>
                <div className="font-bold tracking-[0.08em]">LOUIS DENTAL CENTER</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#d5b16e]">Digital Dentistry & CAD/CAM Laboratory</div>
              </div>
            </Link>
            <p className="mt-6 max-w-md text-sm leading-7 text-slate-300">
              Growing digital dental laboratory providing local support in the Dallas–Fort Worth area, digital workflow coordination, CAD/CAM design services, and flexible production options through partner manufacturing resources.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-[#d5b16e]">Quick Links</h3>
            <div className="mt-5 grid gap-3 text-sm text-slate-300">
              {quickLinks.map(([label, href]) => <Link key={label} href={href} className="w-fit hover:text-white">{label}</Link>)}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-[#d5b16e]">Digital Portal</h3>
            <div className="mt-5 grid gap-3 text-sm text-slate-300">
              {portalLinks.map(([label, href]) => <Link key={label} href={href} className="w-fit hover:text-white">{label}</Link>)}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-[#d5b16e]">Contact</h3>
            <div className="mt-5 space-y-4 text-sm leading-6 text-slate-300">
              <span className="block text-slate-300">1 (949) 378-6176</span>
              <a href="mailto:louisdentalcenter@gmail.com" className="block break-all hover:text-white">louisdentalcenter@gmail.com</a>
              <p>Serving dental practices, laboratories, milling centers, and patients nationwide.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-7 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Louis Dental Center. All rights reserved.</p>
          <p>Website preview. Confirm final address, licensing, and service availability before publishing.</p>
        </div>
      </div>
    </footer>
  );
}
