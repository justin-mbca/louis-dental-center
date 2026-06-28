"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "Special Offers", href: "/services" },
  { label: "Pricing", href: "/services/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#1E3A5F]/95 text-white backdrop-blur-xl">
      <nav className="mx-auto flex h-[84px] max-w-[1440px] items-center px-5 sm:px-8 lg:px-12" aria-label="Primary navigation">
        <Link href="/" className="group flex min-w-0 shrink-0 items-center gap-3" aria-label="Louis Dental Center home">
          {isHome ? (
            <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-white shadow-md ring-1 ring-white/60 transition-transform duration-300 group-hover:scale-105">
              <Image src="/images/logo.png" alt="Louis Dental Center logo" width={38} height={38} priority className="h-full w-full object-cover" />
            </div>
          ) : (
            <>
              <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white shadow-md ring-1 ring-white/60 transition-transform duration-300 group-hover:scale-105">
                <Image src="/images/logo.jpeg" alt="Louis Dental Center logo" width={50} height={50} priority className="h-full w-full scale-[1.55] object-cover" />
              </div>
              <div className="min-w-0">
                <div className="truncate text-[15px] font-bold tracking-[0.08em] text-white sm:text-base">LOUIS DENTAL CENTER</div>
                <div className="hidden text-[10px] font-medium uppercase tracking-[0.18em] text-[#D9BC7B] sm:block">Digital Dental Laboratory</div>
              </div>
            </>
          )}
        </Link>

        <div className="hidden flex-1 items-center justify-center gap-9 sm:flex lg:gap-10">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="nav-link text-sm font-semibold tracking-[0.25px] text-slate-200 transition-colors duration-200 hover:text-white sm:text-base lg:text-lg">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden shrink-0 sm:block" style={{ width: "240px" }} />

        <button type="button" className="relative ml-auto h-10 w-10 text-white sm:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          <span className={`menu-line top-3 ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`menu-line top-5 ${open ? "opacity-0" : ""}`} />
          <span className={`menu-line top-7 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      <div className={`border-t border-white/10 bg-[#1E3A5F] px-5 py-5 shadow-xl sm:hidden ${open ? "block" : "hidden"}`}>
        <div className="grid gap-1">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="rounded-xl px-4 py-3.5 text-base font-semibold tracking-[0.25px] text-slate-100 transition-colors duration-200 hover:bg-white/10 hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
