"use client";

import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Laptop, Sparkles, Zap, ShieldCheck, Globe, Code2, Bot } from "lucide-react";

const services = [
  {
    title: "Mobile App Development",
    description: "Building high-performance, cross-platform apps using Flutter that feel native and run smoothly on iOS and Android.",
    icon: <Smartphone className="w-7 h-7" />,
    color: "bg-blue-500",
    shadow: "shadow-blue-500/20"
  },
  {
    title: "Full Stack Web Solutions",
    description: "Developing scalable, SEO-optimized web applications using Next.js, React, and robust backend systems like Firebase.",
    icon: <Globe className="w-7 h-7" />,
    color: "bg-indigo-500",
    shadow: "shadow-indigo-500/20"
  },
  {
    title: "AI & LLM Integration",
    description: "Implementing intelligent features, chatbots, and automated workflows using Gemini and Genkit into existing ecosystems.",
    icon: <Bot className="w-7 h-7" />,
    color: "bg-amber-500",
    shadow: "shadow-amber-500/20"
  },
  {
    title: "UI/UX & Logo Design",
    description: "Crafting visually stunning user interfaces and unique brand identities that resonate with your target audience.",
    icon: <Zap className="w-7 h-7" />,
    color: "bg-rose-500",
    shadow: "shadow-rose-500/20"
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-32 bg-white relative">
      <div className="container mx-auto px-4 md:px-8 xl:px-12 max-w-[1400px]">
        <div className="text-center max-w-5xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 mb-6 font-mono text-[10px] font-bold tracking-widest uppercase"
          >
            <Code2 className="w-3 h-3" />
            offerings.v1
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl xl:text-8xl font-black text-slate-900 mb-8"
          >
            High-Impact <span className="text-gradient">Solutions.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl xl:text-2xl text-slate-500 font-medium max-w-3xl mx-auto"
          >
            I provide end-to-end digital services designed to scale your business and elevate your digital presence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card p-10 md:p-14 xl:p-16 rounded-[4rem] group hover:border-blue-200 transition-all duration-500"
            >
              <div className="flex flex-col xl:flex-row gap-8 xl:gap-12 items-start">
                <div className={`w-24 h-24 rounded-[2.5rem] ${service.color} flex items-center justify-center text-white shadow-2xl ${service.shadow} group-hover:scale-110 transition-transform duration-500 flex-shrink-0`}>
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Background Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-[0.03] pointer-events-none">
          <Sparkles className="w-[800px] h-[800px] text-blue-600" />
        </div>
      </div>
    </section>
  );
};
