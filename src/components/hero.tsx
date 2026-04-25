
"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Terminal, Smartphone, Code2, Sparkles, Cpu, Globe, Database } from "lucide-react";
import Link from "next/link";

const titles = ["Flutter developer by passion, problem solver by mindset", "I turn ideas into real apps", "Currently exploring AI + modern web to build smarter products", "Building Products", "Solving Problems", "Software Developer"];

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
    <section className="relative min-h-screen flex items-center pt-10 pb-12 overflow-hidden bg-white dot-grid">
      {/* Animated Background Glows */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-indigo-100/40 rounded-full blur-[120px] -z-10" />

      {/* Floating Tech Icons */}
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-10 text-blue-500/20 hidden xl:block"
      >
        <Smartphone size={80} />
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/3 right-20 text-indigo-500/20 hidden xl:block"
      >
        <Globe size={100} />
      </motion.div>
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 text-emerald-500/10 hidden xl:block"
      >
        <Database size={60} />
      </motion.div>

      <div className="w-full px-6 md:px-12 xl:px-24 z-10">
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
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase">Available for new projects</span>
              <Sparkles className="w-3 h-3 text-amber-500" />
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black tracking-tight text-slate-900 mb-8 leading-[1.1]">
              Hi, I&apos;m Anish — I don’t just <span className="text-gradient">write code</span> -I build things people can use.
            </h1>

            <div className="text-lg md:text-2xl text-slate-500 font-mono mb-12 h-10 flex items-center">
              <span className="text-blue-600 mr-3">❯</span>
              <span>{displayText}</span>
              <span className="w-2 h-6 md:h-8 bg-blue-600 inline-block ml-2 animate-pulse" />
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link
                href="#projects"
                className="w-full sm:w-auto px-10 py-4 bg-slate-900 text-white rounded-2xl font-bold text-sm hover:bg-blue-600 hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-2xl shadow-blue-500/20 group"
              >
                Explore My Projects
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#contact"
                className="w-full sm:w-auto px-10 py-4 bg-white border border-slate-200 text-slate-900 rounded-2xl font-bold text-sm hover:bg-slate-50 hover:border-slate-300 hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                Let’s Work Together
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
              <div className="relative glass-card rounded-[3rem] p-10 xl:p-12">
                <div className="flex items-center gap-2 mb-8 border-b border-slate-900/5 pb-6">
                  <div className="flex gap-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-red-400" />
                    <div className="w-3.5 h-3.5 rounded-full bg-amber-400" />
                    <div className="w-3.5 h-3.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="text-xs font-mono text-slate-400 ml-2 flex items-center gap-2">
                    <Terminal className="w-3 h-3" />
                    anish_kushwaha.dart
                  </div>
                </div>
                <div className="font-mono text-sm xl:text-base space-y-4 text-slate-600">
                  <p><span className="text-indigo-600 font-bold">class</span> <span className="text-blue-600 font-bold">Developer</span> {'{'}</p>
                  <p className="pl-6">String name = <span className="text-emerald-600">&apos;Anish Kushwaha&apos;</span>;</p>
                  <p className="pl-6">List tools = [<span className="text-emerald-600">&apos;Flutter&apos;</span>, <span className="text-emerald-600">&apos;Next.js&apos;</span>];</p>
                  <p className="pl-6">bool simplifiesComplexity = <span className="text-orange-600">true</span>;</p>
                  <p className="pl-6"><span className="text-indigo-600 font-bold">void</span> work() {'{'}</p>
                  <p className="pl-12">buildCleanExperiences();</p>
                  <p className="pl-6">{'}'}</p>
                  <p>{'}'}</p>
                </div>
              </div>

              {/* Badges */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 -right-8 p-6 glass-card rounded-2xl flex items-center gap-4 glow-primary z-20"
              >
                <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-blue-500" />
                </div>
                <span className="text-sm font-bold text-slate-900">.\Flutter</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5, ease: "easeInOut" }}
                className="absolute -bottom-8 -left-8 p-6 glass-card rounded-2xl flex items-center gap-4 glow-accent z-20"
              >
                <div className="w-10 h-10 bg-indigo-500/10 rounded-xl flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-indigo-500" />
                </div>
                <span className="text-sm font-bold text-slate-900">Next.js</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
