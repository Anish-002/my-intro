"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, Code2 } from "lucide-react";
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
        scrolled ? "py-4" : "py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={cn(
            "flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-300",
            scrolled || isOpen ? "bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-sm" : "bg-transparent"
          )}
        >
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="bg-slate-900 p-2 rounded-lg group-hover:bg-blue-600 transition-colors shadow-lg">
              <Terminal className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-black tracking-tight text-slate-900">
              ANISH<span className="text-blue-600">.DEV</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xs font-mono font-bold text-slate-500 hover:text-blue-600 transition-colors tracking-widest uppercase"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="bg-slate-900 text-white px-6 py-2.5 rounded-lg text-xs font-mono font-bold hover:bg-blue-600 transition-all shadow-md active:scale-95"
            >
              /contact_me
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-slate-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-slate-200 p-8 md:hidden z-[90]"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-black text-slate-900 hover:text-blue-600 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="bg-slate-900 text-white py-4 rounded-xl font-bold text-center text-xl"
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
