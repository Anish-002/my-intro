"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Code2, Rocket, Heart, Coffee, Terminal, Sparkles } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "1+", icon: <Rocket />, color: "text-blue-500", bg: "bg-blue-50" },
  { label: "Projects Built", value: "15+", icon: <Code2 />, color: "text-purple-500", bg: "bg-purple-50" },
  { label: "Tech Stack", value: "8+", icon: <Heart />, color: "text-pink-500", bg: "bg-pink-50" },
  { label: "Coffee/Day", value: "∞", icon: <Coffee />, color: "text-orange-500", bg: "bg-orange-50" },
];

export const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-0 pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-100/50 blur-[120px] animate-pulse" />
        <div className="absolute top-[20%] -right-[10%] w-[30%] h-[30%] rounded-full bg-purple-100/50 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Side: Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-900 mb-8 shadow-sm">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-bold uppercase tracking-wider">Meet the Developer</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight leading-[1.1]">
              Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Digital Magic</span> through code.
            </h2>

            <div className="space-y-6 text-slate-600 text-lg md:text-xl font-medium max-w-xl">
              <p>
                I specialize in bridging the gap between <span className="text-slate-900 font-bold underline decoration-blue-200 decoration-4 underline-offset-4">vision and reality</span>. 
                Whether it's a high-performance Next.js dashboard or a sleek Flutter app, I build products that are fast, accessible, and delightful.
              </p>
              <p>
                My philosophy is simple: <span className="italic font-semibold text-slate-800 text-2xl font-serif">"Detail is everything."</span> I don't just ship code; I ship experiences that I'm proud to sign my name on.
              </p>
            </div>

            {/* Quick Tech Tag */}
            <div className="mt-10 flex flex-wrap gap-3">
              {['Next.js', 'React', 'Tailwind', 'Framer Motion', 'Stripe'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-slate-200/50 rounded text-slate-600 text-xs font-mono uppercase tracking-widest">
                  #{tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Visual Bento Stats */}
          <div className="flex-1 w-full max-w-2xl">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className={`relative p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden group`}
                >
                  {/* Background Icon Watermark */}
                  <div className={`absolute -right-4 -bottom-4 w-24 h-24 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity group-hover:scale-110 duration-500`}>
                    {React.cloneElement(stat.icon as React.ReactElement, { className: "w-full h-full" })}
                  </div>

                  <div className={`${stat.color} mb-4 p-3 rounded-2xl ${stat.bg} w-fit group-hover:scale-110 transition-transform`}>
                    {React.cloneElement(stat.icon as React.ReactElement, { className: "w-6 h-6" })}
                  </div>
                  
                  <div className="text-4xl font-black text-slate-900 mb-1">{stat.value}</div>
                  <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
                </motion.div>
              ))}

              {/* Status Card (Spans 2 columns) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="col-span-2 p-6 rounded-[2rem] bg-slate-900 text-white flex items-center justify-between overflow-hidden relative group"
              >
                <div className="relative z-10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                    <Terminal className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-slate-400">Current Status</p>
                    <p className="text-lg font-bold text-emerald-400">Available for New Projects</p>
                  </div>
                </div>
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-ping mr-4" />
                
                {/* Decorative Pattern for the dark card */}
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};