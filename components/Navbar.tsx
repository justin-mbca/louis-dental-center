"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Dental Lab", href: "/dental-lab" },
  { label: "Digital Dentistry", href: "/digital-dentistry" },
  { label: "AI Dentistry", href: "/ai-dentistry" },
  { label: "Portal", href: "/dentist-portal" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
      <nav className="mx-auto flex h-[78px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12" aria-label="Primary navigation">
        <Link href="/" className="group flex min-w-0 items-center gap-3" aria-label="Louis Dental Center home">
          <Image src="/logo.png" alt="Louis Dental Center logo" width={50} height={50} priority className="h-11 w-11 shrink-0 rounded-full ring-1 ring-slate-200 transition-transform duration-300 group-hover:scale-105" />
          <div className="min-w-0">
            <div className="truncate text-[15px] font-bold tracking-[0.08em] text-[#09233f] sm:text-base">LOUIS DENTAL CENTER</div>
            <div className="hidden text-[10px] font-medium uppercase tracking-[0.18em] text-[#a57b31] sm:block">Digital Dental Laboratory</div>
          </div>
        </Link>

        <div className="hidden items-center gap-6 xl:flex">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="nav-link text-sm font-semibold text-slate-700 hover:text-[#09233f]">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 xl:flex">
          <a href="tel:+19493786176" className="button-secondary text-sm">Call Us</a>
          <Link href="/case-upload" className="button-primary text-sm">Upload Case</Link>
        </div>

        <button type="button" className="relative h-10 w-10 text-[#09233f] xl:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          <span className={`menu-line top-3 ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`menu-line top-5 ${open ? "opacity-0" : ""}`} />
          <span className={`menu-line top-7 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      <div className={`border-t border-slate-200 bg-white px-5 py-5 shadow-xl xl:hidden ${open ? "block" : "hidden"}`}>
        <div className="grid gap-2">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#09233f]">
              {link.label}
            </Link>
          ))}
          <div className="grid grid-cols-2 gap-3 pt-4">
            <a href="tel:+19493786176" className="button-secondary text-center text-sm">Call Us</a>
            <Link href="/case-upload" className="button-primary text-center text-sm">Upload Case</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
