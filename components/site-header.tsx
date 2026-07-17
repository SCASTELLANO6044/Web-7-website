"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["Work", "/portfolio"],
  ["Services", "/services"],
  ["About", "/about"],
  ["Contact", "/contact"],
];
export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4 md:px-7">
      <nav className="mx-auto flex max-w-[1540px] items-center justify-between border border-white/10 bg-[#090909]/75 px-4 py-3 backdrop-blur-md md:px-5">
        <Link
          href="/"
          className="display text-3xl leading-none tracking-[-.12em]"
          aria-label="Web7 home"
        >
          WEB7
        </Link>
        <div className="hidden items-center gap-7 text-xs uppercase tracking-[.12em] md:flex">
          {links.map(([name, href]) => (
            <Link
              key={href}
              href={href}
              className="transition-colors hover:text-[#ff0000]"
            >
              {name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-[#f3efe8] px-4 py-2 text-[#090909] transition-transform hover:scale-95"
            style={{ color: "#090909" }}
          >
            Start a project
          </Link>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="grid size-10 place-items-center md:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open && (
        <div className="border-x border-b border-white/10 bg-[#090909] p-5 md:hidden">
          {links.map(([name, href]) => (
            <Link
              onClick={() => setOpen(false)}
              key={href}
              href={href}
              className="block border-b border-white/10 py-4 text-2xl"
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
