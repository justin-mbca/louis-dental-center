"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#1E3A5F]/95 text-white backdrop-blur-xl">
      <nav className="mx-auto flex h-[78px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12" aria-label="Primary navigation">
        <Link href="/" className="group flex min-w-0 items-center gap-3" aria-label="Louis Dental Center home">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white shadow-md ring-1 ring-white/60 transition-transform duration-300 group-hover:scale-105">
            <Image src="/images/logo.jpeg" alt="Louis Dental Center logo" width={50} height={50} priority className="h-full w-full scale-[1.55] object-cover" />
          </div>
          <div className="min-w-0">
            <div className="truncate text-[15px] font-bold tracking-[0.08em] text-white sm:text-base">LOUIS DENTAL CENTER</div>
            <div className="hidden text-[10px] font-medium uppercase tracking-[0.18em] text-[#D9BC7B] sm:block">Digital Dental Laboratory</div>
          </div>
        </Link>

        <div className="hidden items-center gap-6 xl:flex">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="nav-link text-sm font-semibold text-slate-200 hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 xl:flex">
          <a href="tel:+19493786176" className="button-light text-sm">Call Us</a>
          <Link href="/case-upload" className="rounded-full bg-white px-6 py-[0.9rem] text-sm font-bold text-[#1E3A5F] hover:bg-[#EAF4FF]">Upload a Case</Link>
        </div>

        <button type="button" className="relative h-10 w-10 text-white xl:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          <span className={`menu-line top-3 ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`menu-line top-5 ${open ? "opacity-0" : ""}`} />
          <span className={`menu-line top-7 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      <div className={`border-t border-white/10 bg-[#1E3A5F] px-5 py-5 shadow-xl xl:hidden ${open ? "block" : "hidden"}`}>
        <div className="grid gap-2">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-100 hover:bg-white/10 hover:text-white">
              {link.label}
            </Link>
          ))}
          <div className="grid grid-cols-2 gap-3 pt-4">
            <a href="tel:+19493786176" className="button-light text-center text-sm">Call Us</a>
            <Link href="/case-upload" className="rounded-full bg-white px-6 py-[0.9rem] text-center text-sm font-bold text-[#1E3A5F]">Upload a Case</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
