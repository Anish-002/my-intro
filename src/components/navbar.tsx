"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-300",
        scrolled ? "py-2 md:py-4" : "py-4 md:py-8"
      )}
    >
      <div className="w-full px-4 md:px-8 xl:px-16 2xl:px-24">
        <div
          className={cn(
            "flex items-center justify-between px-6 md:px-10 py-4 rounded-[2rem] transition-all duration-300",
            scrolled || isOpen ? "bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-lg" : "bg-transparent"
          )}
        >
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-slate-900 p-2.5 rounded-xl group-hover:bg-blue-600 transition-colors shadow-xl">
              <Terminal className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-black tracking-tight text-slate-900">
              ANISH<span className="text-blue-600">.DEV</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-mono font-bold text-slate-500 hover:text-blue-600 transition-colors tracking-widest uppercase"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="bg-slate-900 text-white px-10 py-3.5 rounded-xl text-sm font-mono font-bold hover:bg-blue-600 transition-all shadow-xl active:scale-95"
            >
              /contact_me
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-slate-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-4 right-4 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-[2.5rem] p-10 md:hidden z-[90] shadow-2xl mt-4"
          >
            <div className="flex flex-col gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-black text-slate-900 hover:text-blue-600 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="bg-slate-900 text-white py-5 rounded-2xl font-bold text-center text-2xl shadow-xl"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
