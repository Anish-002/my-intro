"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight, Sparkles, Rocket, Smartphone, Cpu, Globe } from "lucide-react";
import Link from "next/link";

const titles = ["Flutter Developer", "Next.js Expert", "AI Enthusiast", "Firebase Pro"];

export const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const speed = isDeleting ? 40 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentTitle) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentTitle.substring(0, displayText.length - 1)
            : currentTitle.substring(0, displayText.length + 1)
        );
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden bg-white">
      {/* Background Blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30" 
             style={{ backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10">
        <motion.div style={{ y: y1 }} className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em]">Open for Premium Collaboration</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter mb-8 leading-none text-slate-900"
          >
            I build powerful <br />
            <span className="text-gradient">apps & AI tools</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-3xl text-slate-500 font-medium mb-12 h-10"
          >
            <span>{displayText}</span>
            <span className="w-1 h-8 bg-primary inline-block ml-2 animate-pulse align-middle" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              href="#projects"
              className="w-full sm:w-auto px-10 py-5 bg-primary text-white rounded-full font-bold text-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
            >
              View Projects
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#contact"
              className="w-full sm:w-auto px-10 py-5 bg-white border border-slate-200 text-slate-900 rounded-full font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              Hire Me
              <Rocket className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Floating Icons */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
           <motion.div 
             animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
             transition={{ duration: 5, repeat: Infinity }}
             className="absolute top-[20%] left-[10%] p-6 bg-white shadow-xl rounded-3xl border border-slate-100 opacity-40 md:opacity-100"
           >
              <Smartphone className="w-12 h-12 text-blue-500" />
           </motion.div>
           <motion.div 
             animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
             transition={{ duration: 7, repeat: Infinity }}
             className="absolute bottom-[20%] right-[10%] p-6 bg-white shadow-xl rounded-3xl border border-slate-100 opacity-40 md:opacity-100"
           >
              <Cpu className="w-12 h-12 text-purple-500" />
           </motion.div>
           <motion.div 
             animate={{ y: [20, 0, 20] }}
             transition={{ duration: 6, repeat: Infinity }}
             className="absolute top-[60%] left-[5%] p-4 bg-white shadow-lg rounded-2xl border border-slate-100 opacity-20 md:opacity-60"
           >
              <Globe className="w-8 h-8 text-emerald-500" />
           </motion.div>
        </div>
      </div>
    </section>
  );
};