"use client";

import React from "react";
import Link from "next/link";
import { Github, Linkedin, Twitter, Instagram, Heart, Terminal, Sparkles } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-20 border-t border-slate-100 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-20">
          <div className="space-y-6 max-w-sm text-center md:text-left">
            <Link href="/" className="flex items-center justify-center md:justify-start gap-3 group">
              <div className="bg-primary p-3 rounded-2xl shadow-lg">
                <Terminal className="w-6 h-6 text-white" />
              </div>
              <span className="text-3xl font-extrabold tracking-tight text-slate-900">
                Anish<span className="text-primary">Dev</span>
              </span>
            </Link>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">
              Designing and developing high-performance digital experiences with Flutter, Next.js, and cutting-edge AI tools.
            </p>
          </div>

          <div className="flex items-center gap-6">
            {[
              { icon: <Linkedin className="w-6 h-6" />, href: "#" },
              { icon: <Github className="w-6 h-6" />, href: "#" },
              { icon: <Twitter className="w-6 h-6" />, href: "#" },
              { icon: <Instagram className="w-6 h-6" />, href: "#" },
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.href} 
                className="p-5 bg-white border border-slate-100 rounded-3xl text-slate-400 hover:text-primary hover:scale-110 shadow-sm hover:shadow-md transition-all duration-500"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-slate-50">
          <p className="text-sm font-bold text-slate-400 tracking-widest uppercase">
            © {new Date().getFullYear()} Anish Kushwaha. Built for the future.
          </p>
          
          <p className="flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-widest">
            Handcrafted with <Heart className="w-5 h-5 text-rose-500 fill-rose-500 animate-pulse" /> & <Sparkles className="w-5 h-5 text-accent" />
          </p>

          <div className="flex items-center gap-8">
            <Link href="#" className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors">Privacy</Link>
            <Link href="#" className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};