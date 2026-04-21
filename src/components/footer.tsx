"use client";

import React from "react";
import Link from "next/link";
import { Heart, Terminal, Sparkles, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-16 border-t border-slate-100 bg-white">
      <div className="w-full px-6 md:px-12 xl:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex items-center gap-4">
            <div className="bg-primary p-3 rounded-xl">
              <Terminal className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-black tracking-tight text-slate-900">
              Anish<span className="text-primary">Dev</span>
            </span>
          </div>

          <p className="text-sm font-bold text-slate-400 tracking-widest uppercase text-center">
            Designed & built by Anish Kushwaha © {new Date().getFullYear()}
          </p>
          
          <p className="flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-widest">
            Made with <Heart className="w-4 h-4 text-rose-500 fill-rose-500 animate-pulse" /> & <Sparkles className="w-4 h-4 text-accent" />
          </p>
        </div>
      </div>
    </footer>
  );
};
