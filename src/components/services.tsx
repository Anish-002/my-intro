"use client";

import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Globe, Code2, Bot, Zap } from "lucide-react";

const services = [
  {
    title: "Mobile App Development",
    description:
      "I build mobile apps using Flutter that are fast, smooth, and easy to use. My focus is on performance and clean UI so users actually enjoy using the app — not just download it once and forget.",
    icon: <Smartphone className="w-6 h-6" />,
    color: "bg-blue-500",
    shadow: "shadow-blue-500/20",
  },
  {
    title: "Web Development",
    description:
      "I create modern websites and dashboards using Next.js and React. Clean design, responsive layout, and proper structure — so your product feels solid and works well on every device.",
    icon: <Globe className="w-6 h-6" />,
    color: "bg-indigo-500",
    shadow: "shadow-indigo-500/20",
  },
  {
    title: "AI Features & Integration",
    description:
      "I add smart features like chatbots and AI tools into apps and websites. Not overhyped stuff — only what actually improves user experience and saves time.",
    icon: <Bot className="w-6 h-6" />,
    color: "bg-amber-500",
    shadow: "shadow-amber-500/20",
  },
  {
    title: "UI Design & Branding",
    description:
      "I design clean user interfaces, logos, and visuals that look modern and feel easy to use. Simple, clear, and focused — no unnecessary clutter.",
    icon: <Zap className="w-6 h-6" />,
    color: "bg-rose-500",
    shadow: "shadow-rose-500/20",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-white relative">
      <div className="w-full px-6 md:px-12 xl:px-24">
        
        {/* HEADER */}
        <div className="text-center max-w-5xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 mb-6 font-mono text-[10px] font-bold tracking-widest uppercase"
          >
            <Code2 className="w-6 h-6" />
            What I Do
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6"
          >
            I build things that actually work.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-500 font-medium"
          >
            From mobile apps to web platforms — I focus on building simple, useful, and reliable digital products.
          </motion.p>
        </div>

        {/* SERVICES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-10 rounded-[2.5rem] group hover:border-blue-200 transition-all duration-500 shadow-lg"
            >
              <div className="flex flex-col xl:flex-row gap-8 items-start">
                
                <div
                  className={`w-16 h-16 rounded-[1.5rem] ${service.color} flex items-center justify-center text-white shadow-xl ${service.shadow} group-hover:scale-110 transition-transform duration-500 flex-shrink-0`}
                >
                  {service.icon}
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-base text-slate-500 leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};