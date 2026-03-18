"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Product", href: "#product" },
  { label: "Solutions", href: "#solutions" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Resources", href: "#resources" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-[0_2px_20px_rgba(0,0,0,0.08)]"
          : "bg-white/85"
      } backdrop-blur-2xl border-b border-black/[0.06]`}
    >
      <nav className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-[68px]">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 no-underline text-gray-900">
          <span className="w-[34px] h-[34px] bg-gradient-to-br from-green-600 to-green-500 text-white font-display font-extrabold text-lg rounded-lg flex items-center justify-center shadow-[0_2px_8px_rgba(34,197,94,0.3)]">
            M
          </span>
          <span className="text-[17px] font-medium tracking-tight">
            Mintnova<strong className="font-extrabold">Labs</strong>
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-1 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="flex items-center gap-1 px-3.5 py-2 text-sm font-medium text-gray-700 rounded-lg transition-all duration-200 hover:text-green-700 hover:bg-green-50"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-2.5">
          <a
            href="#"
            className="px-5 py-2.5 text-sm font-semibold text-gray-700 border border-gray-200 rounded-lg transition-all duration-200 hover:bg-gray-100 hover:border-gray-300"
          >
            Log in
          </a>
          <a
            href="#"
            className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-br from-green-600 to-green-500 rounded-lg shadow-[0_8px_32px_rgba(34,197,94,0.25)] transition-all duration-200 hover:from-green-700 hover:to-green-600 hover:-translate-y-0.5"
          >
            Get Started Free
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-1 text-gray-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-white border-t border-gray-100"
          >
            <div className="px-6 py-4 space-y-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-base font-medium text-gray-700"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#"
                className="mt-4 block w-full text-center px-5 py-3 text-sm font-semibold text-white bg-gradient-to-br from-green-600 to-green-500 rounded-lg"
              >
                Get Started Free
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
