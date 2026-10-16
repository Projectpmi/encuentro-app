"use client";

import { useState } from "react";

const links = [
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#proximos-encuentros", label: "Próximos encuentros" },
  { href: "#por-que-encuentro", label: "Por qué Encuentro" },
  { href: "#seguridad", label: "Seguridad" },
  { href: "#faq", label: "Preguntas frecuentes" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#" className="text-xl font-bold tracking-tight text-rose-600">
          ENCUENTRO
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-stone-600 transition hover:text-rose-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#proximos-encuentros"
          className="hidden rounded-full bg-rose-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-rose-700 lg:inline-block"
        >
          Encontrar mi próximo encuentro
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-stone-700 lg:hidden"
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="h-6 w-6"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-stone-200 bg-white px-4 pb-4 lg:hidden">
          <nav className="flex flex-col gap-1 pt-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-stone-700 hover:bg-stone-50"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#proximos-encuentros"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-rose-600 px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Encontrar mi próximo encuentro
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
