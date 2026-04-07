"use client";

import { useState } from "react";
import { navigationItems } from "@/data/site";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40">
      <div className="page-shell py-4 sm:py-5">
        <div className="paper-panel relative flex items-center justify-between px-5 py-3 sm:px-6">
          <a
            className="font-serif text-[1.2rem] tracking-[0.18em] text-foreground"
            href="#main"
          >
            Aoba
          </a>

          <nav aria-label="Primary navigation" className="hidden items-center gap-8 md:flex">
            {navigationItems.map((item) => (
              <a
                className="text-xs uppercase tracking-[0.3em] text-muted hover:text-foreground"
                href={item.href}
                key={item.label}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(216,209,198,0.9)] text-muted md:hidden"
            onClick={() => setIsOpen((open) => !open)}
            type="button"
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-[0.22rem]">
              <span className="block h-px w-4 bg-current" />
              <span className="block h-px w-4 bg-current" />
              <span className="block h-px w-4 bg-current" />
            </span>
          </button>

          {isOpen ? (
            <nav
              aria-label="Mobile navigation"
              className="absolute inset-x-3 top-[calc(100%+0.75rem)] rounded-[1.5rem] border border-[rgba(216,209,198,0.9)] bg-[rgba(251,248,242,0.96)] p-4 shadow-soft backdrop-blur-sm md:hidden"
            >
              <ul className="space-y-3">
                {navigationItems.map((item) => (
                  <li key={item.label}>
                    <a
                      className="block rounded-2xl px-3 py-3 text-sm uppercase tracking-[0.28em] text-muted hover:bg-[rgba(120,129,111,0.08)] hover:text-foreground"
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}
        </div>
      </div>
    </header>
  );
}

