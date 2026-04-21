"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Terminal, Github, Smartphone, Code2, Sparkles } from "lucide-react";
import Link from "next/link";

const titles = ["Flutter Developer", "Full Stack Engineer", "AI Enthusiast", "Firebase Expert"];

export const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

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
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-white dot-grid">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-indigo-100/40 rounded-full blur-[120px] -z-10" />

      <div className="w-full px-4 md:px-8 xl:px-16 2xl:px-24 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/5 border border-slate-900/10 text-slate-600 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase">system.status: active_for_hire</span>
              <Sparkles className="w-3 h-3 text-amber-500" />
            </motion.div>
            
            <h1 className="text-5xl sm:text-7xl md:text-8xl xl:text-9xl 2xl:text-[10rem] font-black tracking-tight text-slate-900 mb-8 leading-[0.85]">
              Building <span className="text-gradient">Robust</span> <br />
              Digital Solutions.
            </h1>

            <div className="text-xl md:text-2xl 2xl:text-3xl text-slate-500 font-mono mb-12 h-8 flex items-center">
              <span className="text-blue-600 mr-3">❯</span>
              <span>{displayText}</span>
              <span className="w-2 h-7 md:h-9 bg-blue-600 inline-block ml-2 animate-pulse" />
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link
                href="#projects"
                className="w-full sm:w-auto px-12 py-5 bg-slate-900 text-white rounded-2xl font-bold text-sm hover:bg-blue-600 hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-2xl shadow-blue-500/20 group"
              >
                ./explore_work
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="https://github.com/Anish-002"
                target="_blank"
                className="w-full sm:w-auto px-12 py-5 bg-white border border-slate-200 text-slate-900 rounded-2xl font-bold text-sm hover:bg-slate-50 hover:border-slate-300 hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <Github className="w-4 h-4" />
                view_github
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2.5rem] blur opacity-15 group-hover:opacity-25 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative glass-card rounded-[3rem] p-10 xl:p-16 2xl:p-20">
                <div className="flex items-center gap-2 mb-8 border-b border-slate-900/5 pb-6">
                  <div className="flex gap-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-red-400" />
                    <div className="w-3.5 h-3.5 rounded-full bg-amber-400" />
                    <div className="w-3.5 h-3.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="text-xs font-mono text-slate-400 ml-6 flex items-center gap-2">
                    <Terminal className="w-3 h-3" />
                    anish_kushwaha.dart
                  </div>
                </div>
                <div className="font-mono text-sm xl:text-lg space-y-4 text-slate-600">
                  <p><span className="text-indigo-600 font-bold">class</span> <span className="text-blue-600 font-bold">Developer</span> {'{'}</p>
                  <p className="pl-6">String name = <span className="text-emerald-600">'Anish Kushwaha'</span>;</p>
                  <p className="pl-6">List tools = [<span className="text-emerald-600">'Flutter'</span>, <span className="text-emerald-600">'Next.js'</span>];</p>
                  <p className="pl-6">bool lovesAI = <span className="text-orange-600">true</span>;</p>
                  <p className="pl-6"><span className="text-indigo-600 font-bold">void</span> work() {'{'}</p>
                  <p className="pl-12">buildPremiumApps();</p>
                  <p className="pl-6">{'}'}</p>
                  <p>{'}'}</p>
                </div>
              </div>

              {/* Floating Tech Badges */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-12 -right-12 p-8 glass-card rounded-2xl flex items-center gap-4 glow-primary z-20"
              >
                <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center">
                  <Smartphone className="w-8 h-8 text-blue-500" />
                </div>
                <span className="text-lg font-bold text-slate-900">Flutter Expert</span>
              </motion.div>
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5, ease: "easeInOut" }}
                className="absolute -bottom-12 -left-12 p-8 glass-card rounded-2xl flex items-center gap-4 glow-accent z-20"
              >
                <div className="w-14 h-14 bg-indigo-500/10 rounded-xl flex items-center justify-center">
                  <Code2 className="w-8 h-8 text-indigo-500" />
                </div>
                <span className="text-lg font-bold text-slate-900">Next.js Guru</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
