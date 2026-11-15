"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        aria-label="Main navigation"
        className="glass-panel mx-auto flex max-w-6xl items-center justify-between px-5 py-3"
      >
        <a
          href="#home"
          className="rounded-md text-sm font-bold tracking-wide text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-cyan"
          onClick={() => setMenuOpen(false)}
        >
          NA<span className="text-accent-cyan">.</span>
          <span className="sr-only"> — Nivashini A, home</span>
        </a>
        <button
          type="button"
          className="rounded-lg p-2 text-slate-200 transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-cyan sm:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <ul
          id="primary-navigation"
          className={`${menuOpen ? "flex" : "hidden"} absolute left-4 right-4 top-[calc(100%+0.5rem)] flex-col gap-1 rounded-2xl border border-white/10 bg-slate-950/95 p-3 shadow-xl backdrop-blur-xl sm:static sm:flex sm:flex-row sm:items-center sm:gap-1 sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none`}
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-cyan"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
