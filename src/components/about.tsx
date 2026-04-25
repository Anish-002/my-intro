
"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Code2, Rocket, Heart, Coffee } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "1+", icon: <Rocket className="w-4 h-4" /> },
  { label: "Projects Built", value: "15+", icon: <Code2 className="w-4 h-4" /> },
  { label: "Tech Stack", value: "8+", icon: <Heart className="w-4 h-4" /> },
  { label: "Coffee Consumed", value: "∞", icon: <Coffee className="w-4 h-4" /> },
];

export const About = () => {
  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      <div className="w-full px-6 md:px-12 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 text-white mb-6 font-mono text-[10px] font-bold tracking-widest uppercase">
              <User className="w-3 h-3" />
              About Me
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">
              I turn complex problems into <span className="text-blue-600">simple solutions.</span>
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-2xl">
              <p>
                I'm a developer who actually cares about the end product. Whether it's a mobile app in Flutter or a high-performance web dashboard in Next.js, my goal is always the same: make it work perfectly and look beautiful.
              </p>
              <p>
                My mindset is simple — keep learning, keep building, and never ship code I'm not proud of. I enjoy the challenge of taking a rough idea and turning it into something real that people can actually use.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {stats.map((stat, i) => (
                <div key={i} className="p-6 bg-slate-50 rounded-3xl border border-slate-100 group hover:border-blue-200 transition-all">
                  <div className="text-blue-600 mb-3 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-black text-slate-900 mb-1">{stat.value}</div>
                  <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-[4rem] bg-gradient-to-br from-blue-50 to-indigo-50 border border-slate-100 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 dot-grid opacity-30" />
              <div className="relative z-10 text-center">
                <div className="w-32 h-32 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl shadow-blue-500/10">
                  <User className="w-16 h-16 text-blue-600" />
                </div>
                <div className="font-mono text-sm text-slate-400 bg-white px-6 py-2 rounded-full border border-slate-100 shadow-sm inline-block">
                  system.status: <span className="text-emerald-500 font-bold">ready_to_build</span>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100/50 rounded-full blur-[80px] -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-100/50 rounded-full blur-[80px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
