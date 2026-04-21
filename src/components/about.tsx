"use client";

import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Zap, Code2, Rocket, Award, Terminal, Sparkles } from "lucide-react";
import Image from "next/image";

const stats = [
  { label: "Deployment Ready", value: "25+", icon: <Rocket className="w-5 h-5" />, color: "text-blue-600", bg: "bg-blue-50" },
  { label: "Tech Stack", value: "12+", icon: <Code2 className="w-5 h-5" />, color: "text-indigo-600", bg: "bg-indigo-50" },
  { label: "Hours Logged", value: "3k+", icon: <Zap className="w-5 h-5" />, color: "text-amber-500", bg: "bg-amber-50" },
  { label: "Core Skills", value: "08+", icon: <Award className="w-5 h-5" />, color: "text-emerald-600", bg: "bg-emerald-50" },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-white">
      <div className="w-full px-4 md:px-8 xl:px-16 2xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 aspect-square rounded-[3rem] overflow-hidden border border-slate-200 p-4 bg-slate-50 group shadow-2xl transition-all duration-700 hover:shadow-blue-500/10">
              <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative">
                <Image
                  src="https://picsum.photos/seed/anishdev/1200/1200"
                  alt="Anish Kushwaha"
                  width={1200}
                  height={1200}
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                  data-ai-hint="developer workspace"
                />
              </div>
            </div>
            
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -right-10 glass-card p-10 rounded-[2.5rem] z-20 shadow-2xl glow-primary hidden md:block"
            >
              <div className="flex items-center gap-6">
                <div className="bg-blue-600 p-4 rounded-2xl shadow-lg shadow-blue-500/30">
                  <Terminal className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-1">engine_ver</p>
                  <p className="text-xl font-mono font-black text-slate-900">FLUTTER.CORE.v3</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 mb-8 font-mono text-[10px] font-bold tracking-widest">
              <Sparkles className="w-3 h-3" />
              01_ABOUT_ME
            </div>
            <h2 className="text-5xl md:text-7xl xl:text-8xl 2xl:text-9xl font-black mb-10 leading-[0.9] text-slate-900">
              Turning <span className="text-gradient">Ideas</span> into <br />
              Functional Architectures.
            </h2>
            <p className="text-xl xl:text-2xl 2xl:text-3xl text-slate-500 mb-14 leading-relaxed font-medium max-w-4xl">
              I am Anish Kushwaha, a dedicated Software Engineer specializing in high-performance Flutter and Next.js applications. 
              I focus on modular code and seamless user experiences.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-14">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-8 md:p-10 rounded-[2.5rem] hover:bg-white hover:-translate-y-1 transition-all duration-500 shadow-lg"
                >
                  <div className={`${stat.color} mb-6 ${stat.bg} w-14 h-14 rounded-2xl flex items-center justify-center`}>{stat.icon}</div>
                  <h4 className="text-4xl md:text-5xl font-black text-slate-900">{stat.value}</h4>
                  <p className="text-[10px] md:text-xs font-mono font-bold text-slate-400 uppercase tracking-widest mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <button className="group px-14 py-6 glass-card text-slate-900 rounded-2xl font-bold text-base hover:bg-slate-900 hover:text-white transition-all shadow-xl active:scale-95 flex items-center gap-4">
              View_System_Specs (Resume)
              <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
