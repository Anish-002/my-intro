
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, Rocket, Code2, Coffee, Laptop, Trophy } from "lucide-react";
import Image from "next/image";

const strengths = [
  "Clean and maintainable code",
  "Focus on user experience",
  "Fast communication",
  "Always learning new things",
  "Attention to detail",
];

const stats = [
  { label: "Years Experience", value: "2+", icon: <Laptop className="w-5 h-5" /> },
  { label: "Real-world Projects", value: "15+", icon: <Code2 className="w-5 h-5" /> },
  { label: "Cups of Coffee", value: "500+", icon: <Coffee className="w-5 h-5" /> },
  { label: "Successful Deliveries", value: "100%", icon: <Trophy className="w-5 h-5" /> },
];

export const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white">
      <div className="w-full px-6 md:px-12 xl:px-24">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-4xl md:text-6xl font-black text-slate-100 select-none">01</span>
          <div className="h-px flex-1 bg-slate-100" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-mono text-[10px] font-bold tracking-widest uppercase">
            <Sparkles className="w-3 h-3" />
            Getting to know me
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left Side: Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100/50 to-indigo-100/50 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-slate-200 p-2 bg-white shadow-2xl">
                <div className="w-full h-full rounded-[2rem] overflow-hidden relative">
                  <Image
                    src="https://picsum.photos/seed/anishdev/1000/1250"
                    alt="Anish Kushwaha"
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                    data-ai-hint="developer portrait"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="glass-card p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-blue-600 mb-3">{stat.icon}</div>
                  <div className="text-2xl font-black text-slate-900 mb-1">{stat.value}</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 pt-4"
          >
            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight text-slate-900">
              I turn complex ideas into <span className="text-gradient">elegant digital products.</span>
            </h2>
            
            <div className="space-y-6 text-lg text-slate-500 font-medium leading-relaxed mb-12">
              <p>
                I'm a developer who enjoys building things that work well and look great. My focus is on clean design, smooth user experiences, and high performance.
              </p>
              <p>
                Whether I'm architecting a mobile app with <span className="text-slate-900 font-bold">Flutter</span> or building a fast-loading website with <span className="text-slate-900 font-bold">Next.js</span>, I always aim for code that is as beautiful as the UI it powers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Why work with me?</h4>
                <div className="space-y-4">
                  {strengths.map((strength, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span className="text-sm font-bold text-slate-700">{strength}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-end">
                <button className="group relative w-full overflow-hidden px-8 py-5 bg-slate-900 text-white rounded-2xl font-bold text-sm transition-all hover:shadow-2xl hover:shadow-blue-500/20 active:scale-95 flex items-center justify-center gap-3">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <span className="relative z-10 flex items-center gap-2">
                    Get My Resume
                    <Rocket className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
