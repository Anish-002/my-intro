
"use client";

import React from "react";
import Link from "next/link";
import { Github, Linkedin, Twitter, Instagram, Heart, Terminal } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary p-2 rounded-lg">
              <Terminal className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground">
              Anish<span className="text-primary">Dev</span>
            </span>
          </Link>

          <div className="flex items-center gap-6">
            {[
              { icon: <Github className="w-5 h-5" />, href: "#" },
              { icon: <Linkedin className="w-5 h-5" />, href: "#" },
              { icon: <Twitter className="w-5 h-5" />, href: "#" },
              { icon: <Instagram className="w-5 h-5" />, href: "#" },
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.href} 
                className="p-3 glass rounded-xl text-muted-foreground hover:text-primary hover:scale-110 transition-all"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-border/20 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Anish Kushwaha. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Built with <Heart className="w-4 h-4 text-accent fill-accent" /> using Next.js & GenAI
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
