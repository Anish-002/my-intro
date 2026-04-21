"use client";

import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Zap, Code2, Rocket, Award, Lightbulb, Terminal } from "lucide-react";
import Image from "next/image";

const stats = [
  { label: "Deployment Ready", value: "25+", icon: <Rocket className="w-4 h-4" /> },
  { label: "Tech Stack", value: "12+", icon: <Code2 className="w-4 h-4" /> },
  { label: "Hours Logged", value: "3k+", icon: <Zap className="w-4 h-4" /> },
  { label: "Core Skills", value: "08+", icon: <Award className="w-4 h-4" /> },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 aspect-square rounded-[2rem] overflow-hidden border border-slate-200 p-3 bg-slate-50 group shadow-2xl">
              <div className="w-full h-full rounded-[1.5rem] overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/anishdev/1000/1000"
                  alt="Anish Kushwaha"
                  width={1000}
                  height={1000}
                  className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                  data-ai-hint="developer workspace"
                />
              </div>
            </div>
            
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-8 -right-8 bg-slate-900 text-white p-6 rounded-2xl z-20 shadow-2xl border border-white/10"
            >
              <div className="flex items-center gap-4">
                <div className="bg-white/10 p-2.5 rounded-lg">
                  <Terminal className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">engine_ver</p>
                  <p className="text-sm font-mono font-bold">FLUTTER.CORE.v3</p>
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-100 text-blue-600 mb-6 font-mono text-[10px] font-bold tracking-widest">
              <Lightbulb className="w-3 h-3" />
              01_ABOUT_ME
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight text-slate-900">
              Turning <span className="text-gradient">Ideas</span> into <br />
              Functional Architectures.
            </h2>
            <p className="text-xl text-slate-500 mb-12 leading-relaxed font-medium">
              I am Anish Kushwaha, a dedicated Software Engineer specializing in high-performance Flutter and Next.js applications. 
              My focus is on modular, scalable code and seamless user experiences, bridging the gap between design and production-ready systems.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-12">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-slate-50 border border-slate-100 p-5 rounded-xl hover:bg-white hover:shadow-md transition-all"
                >
                  <div className="text-blue-600 mb-3">{stat.icon}</div>
                  <h4 className="text-2xl font-black text-slate-900">{stat.value}</h4>
                  <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <button className="px-10 py-5 bg-white border border-slate-200 text-slate-900 rounded-lg font-bold text-sm hover:bg-slate-50 transition-all shadow-sm">
              View_System_Specs (Resume)
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};