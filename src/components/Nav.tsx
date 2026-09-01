"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import recurvedLogo from "@/app/images/Recurved Logo black.png";

const links = [
  { href: "#offer", label: "Offer" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-cream">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
        <a href="#top" aria-label="Recurved home" onClick={() => setOpen(false)}>
          <Image src={recurvedLogo} alt="Recurved" className="h-9 w-auto" priority />
        </a>
        <div className="hidden gap-6 text-sm font-medium text-ink/80 sm:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-teal">
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2 sm:gap-0">
          <a
            href="#apply"
            className="rounded-full bg-terracotta px-4 py-2 text-sm font-semibold text-white transition hover:bg-terracotta/90"
            onClick={() => setOpen(false)}
          >
            Apply
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink sm:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="border-t border-black/5 bg-cream px-5 py-3 sm:hidden">
          <div className="flex flex-col gap-1 text-sm font-medium text-ink/80">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 hover:bg-teal/10 hover:text-teal"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
