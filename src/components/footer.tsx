"use client";

import React from "react";
import Link from "next/link";
import { Heart, Terminal, Sparkles, Mail } from "lucide-react";

const SocialLogos = {
  GitHub: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  ),
  LinkedIn: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  ),
  Instagram: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.947.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  ),
  Facebook: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
    </svg>
  ),
};

const socialLinks = [
  { icon: <SocialLogos.LinkedIn />, href: "https://www.linkedin.com/in/anish-kushwaha-1a6aa0277", label: "LinkedIn", color: "hover:text-[#0077B5]" },
  { icon: <SocialLogos.GitHub />, href: "https://github.com/Anish-002", label: "GitHub", color: "hover:text-[#333]" },
  { icon: <SocialLogos.Instagram />, href: "https://www.instagram.com/ak_anish.02", label: "Instagram", color: "hover:text-[#E4405F]" },
  { icon: <SocialLogos.Facebook />, href: "https://www.facebook.com/share/1FBinqSsoP/", label: "Facebook", color: "hover:text-[#1877F2]" },
];

export const Footer = () => {
  return (
    <footer className="py-24 border-t border-slate-100 bg-white">
      <div className="w-full px-4 md:px-8 xl:px-16 2xl:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-20">
          <div className="space-y-8 max-w-md text-center md:text-left">
            <Link href="/" className="flex items-center justify-center md:justify-start gap-4 group">
              <div className="bg-primary p-4 rounded-2xl shadow-lg">
                <Terminal className="w-8 h-8 text-white" />
              </div>
              <span className="text-4xl font-black tracking-tight text-slate-900">
                Anish<span className="text-primary">Dev</span>
              </span>
            </Link>
            <p className="text-slate-500 text-lg font-medium leading-relaxed">
              Designing and developing high-performance digital experiences with Flutter, Next.js, and cutting-edge AI tools.
            </p>
            <div className="flex items-center gap-4 text-slate-400 font-bold text-lg justify-center md:justify-start">
              <Mail className="w-5 h-5 text-primary" />
              <a href="mailto:kushwahaanish25@gmail.com" className="hover:text-primary transition-colors">
                kushwahaanish25@gmail.com
              </a>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8">
            {socialLinks.map((social, i) => (
              <a 
                key={i} 
                href={social.href} 
                target="_blank"
                rel="noopener noreferrer"
                className={`p-6 bg-white border border-slate-100 rounded-[2rem] text-slate-400 hover:scale-110 shadow-md hover:shadow-xl transition-all duration-500 ${social.color}`}
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-10 pt-16 border-t border-slate-50">
          <p className="text-sm md:text-base font-bold text-slate-400 tracking-widest uppercase">
            © {new Date().getFullYear()} Anish Kushwaha. Built for the future.
          </p>
          
          <p className="flex items-center gap-3 text-sm md:text-base font-bold text-slate-400 uppercase tracking-widest">
            Handcrafted with <Heart className="w-6 h-6 text-rose-500 fill-rose-500 animate-pulse" /> & <Sparkles className="w-6 h-6 text-accent" />
          </p>

          <div className="flex items-center gap-10">
            <Link href="#" className="text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors">Privacy</Link>
            <Link href="#" className="text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
