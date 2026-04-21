"use client";

import React from "react";
import Link from "next/link";
import { Github, Linkedin, Twitter, Instagram, Heart, Terminal, Sparkles } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/5 bg-[#020617]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-20">
          <div className="space-y-6 max-w-sm text-center md:text-left">
            <Link href="/" className="flex items-center justify-center md:justify-start gap-3 group">
              <div className="bg-primary p-3 rounded-2xl shadow-lg">
                <Terminal className="w-6 h-6 text-white" />
              </div>
              <span className="text-3xl font-extrabold tracking-tight text-white">
                Anish<span className="text-primary">Dev</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm font-medium leading-relaxed">
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
                className="p-5 glass rounded-3xl text-muted-foreground hover:text-primary hover:scale-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-500"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-white/5">
          <p className="text-sm font-bold text-muted-foreground tracking-widest uppercase">
            © {new Date().getFullYear()} Anish Kushwaha. Built for the future.
          </p>
          
          <p className="flex items-center gap-2 text-sm font-bold text-muted-foreground uppercase tracking-widest">
            Handcrafted with <Heart className="w-5 h-5 text-rose-500 fill-rose-500 animate-pulse" /> & <Sparkles className="w-5 h-5 text-accent" />
          </p>

          <div className="flex items-center gap-8">
            <Link href="#" className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};