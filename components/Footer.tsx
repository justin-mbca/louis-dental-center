import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  ["About", "/about"],
  ["Services", "/services"],
  ["Dental Lab", "/dental-lab"],
  ["Digital Dentistry", "/digital-dentistry"],
  ["AI Dentistry", "/ai-dentistry"],
  ["FAQs", "/faq"],
];

const portalLinks = [
  ["Upload Case", "/case-upload"],
  ["Case Tracking", "/case-tracking"],
  ["Dentist Portal", "/dentist-portal"],
  ["Send a Case", "/send-a-case"],
  ["Pricing", "/pricing"],
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#06182b] text-white">
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[#b78b3e]/10 blur-3xl" />
      <div className="relative mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-[1.25fr_.75fr_.75fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <Image src="/logo.png" alt="Louis Dental Center logo" width={58} height={58} className="rounded-full bg-white" />
              <div>
                <div className="font-bold tracking-[0.08em]">LOUIS DENTAL CENTER</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#d5b16e]">Digital Dentistry & CAD/CAM Laboratory</div>
              </div>
            </Link>
            <p className="mt-6 max-w-md text-sm leading-7 text-slate-300">
              Premium digital dental laboratory and CAD/CAM design services for dentists, dental labs, milling centers, and patients who value precision, communication, and dependable outcomes.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-[#d5b16e]">Explore</h3>
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
              <a href="tel:+19493786176" className="block hover:text-white">1 (949) 378-6176</a>
              <a href="mailto:frank28cdt@gmail.com" className="block break-all hover:text-white">frank28cdt@gmail.com</a>
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
