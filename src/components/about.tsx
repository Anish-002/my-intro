"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, Rocket } from "lucide-react";
import Image from "next/image";

const strengths = [
  "Clean and maintainable code",
  "Focus on user experience",
  "Fast communication",
  "Always learning new things",
  "Attention to detail",
];

export const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white">
      <div className="w-full px-6 md:px-12 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 aspect-square rounded-[2rem] overflow-hidden border border-slate-200 p-3 bg-slate-50 group shadow-xl transition-all duration-700 hover:shadow-blue-500/10">
              <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative">
                <Image
                  src="https://picsum.photos/seed/anishdev/1000/1000"
                  alt="Anish Kushwaha"
                  width={1000}
                  height={1000}
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                  data-ai-hint="developer portrait"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 mb-6 font-mono text-[10px] font-bold tracking-widest uppercase">
              <Sparkles className="w-3 h-3" />
              Getting to know me
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight text-slate-900">
              I turn ideas into <span className="text-gradient">real products.</span>
            </h2>
            <div className="space-y-6 text-lg text-slate-500 font-medium leading-relaxed">
              <p>
                I&apos;m a developer who enjoys building things that work well and look great. I focus on clean design, smooth user experiences, and high performance.
              </p>
              <p>
                I like learning new technologies and constantly improving my skills by working on real-world projects. Whether it&apos;s a complex mobile app or a simple website, I aim to make it useful and intuitive.
              </p>
            </div>

            <div className="mt-10 mb-10">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Why work with me?</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {strengths.map((strength, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span className="text-base font-bold text-slate-700">{strength}</span>
                  </div>
                ))}
              </div>
            </div>

            <button className="group px-10 py-4 glass-card text-slate-900 rounded-xl font-bold text-sm hover:bg-slate-900 hover:text-white transition-all shadow-lg active:scale-95 flex items-center gap-3">
              Get My Resume
              <Rocket className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
