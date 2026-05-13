"use client";

import { useEffect, useState } from "react";
import { LogoFull } from "./Logo";
import { Whatsapp } from "./Icons";
import { NAV_LINKS, SITE, WHATSAPP_LINK } from "./site-data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-border shadow-[0_2px_24px_-12px_rgba(6,95,70,0.25)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a
          href="#topo"
          className="group flex items-center gap-3 rounded-xl ring-1 ring-transparent transition-all hover:ring-brand-200/80"
        >
          <LogoFull
            priority
            className="h-8 w-auto shrink-0 rounded-lg shadow-sm ring-1 ring-black/5 transition-transform group-hover:scale-[1.02] sm:h-9"
          />
          <div className="hidden min-[380px]:flex flex-col leading-tight">
            <span className="font-display font-bold text-brand-900 tracking-tight text-sm sm:text-base">
              {SITE.name}
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-brand-700/80 font-medium">
              Curitiba · RMC · Litoral
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-zinc-700 rounded-full hover:bg-brand-50 hover:text-brand-800 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-soft hover:bg-brand-700 transition-all hover:shadow-glow"
          >
            <Whatsapp className="h-4 w-4" />
            Solicitar entrega
          </a>
          <button
            type="button"
            aria-label="Abrir menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-brand-800 hover:bg-brand-50"
          >
            <span className="sr-only">Menu</span>
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              strokeLinecap="round"
            >
              {open ? (
                <>
                  <path d="M6 6 18 18" />
                  <path d="M18 6 6 18" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-white">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-zinc-700 hover:bg-brand-50 hover:text-brand-800"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-4 py-3 text-sm font-semibold text-white shadow-soft"
            >
              <Whatsapp className="h-4 w-4" />
              Solicitar entrega
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
