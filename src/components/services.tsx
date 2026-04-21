"use client";

import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Sparkles, Globe, Code2, Bot, Zap } from "lucide-react";

const services = [
  {
    title: "Mobile App Development",
    description: "I build high-performance mobile apps using Flutter. They look great and run smoothly on both iOS and Android.",
    icon: <Smartphone className="w-8 h-8" />,
    color: "bg-blue-500",
    shadow: "shadow-blue-500/20"
  },
  {
    title: "Web Solutions",
    description: "I develop fast, responsive websites using Next.js and React. I focus on clean design and solid backend integration with Firebase.",
    icon: <Globe className="w-8 h-8" />,
    color: "bg-indigo-500",
    shadow: "shadow-indigo-500/20"
  },
  {
    title: "AI Integration",
    description: "I help businesses use AI by integrating smart features and chatbots into their existing apps and websites.",
    icon: <Bot className="w-8 h-8" />,
    color: "bg-amber-500",
    shadow: "shadow-amber-500/20"
  },
  {
    title: "Branding & Design",
    description: "I design professional logos and modern user interfaces that help your brand stand out from the competition.",
    icon: <Zap className="w-8 h-8" />,
    color: "bg-rose-500",
    shadow: "shadow-rose-500/20"
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-32 bg-white relative">
      <div className="w-full px-6 md:px-12 xl:px-24">
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 mb-6 font-mono text-[10px] font-bold tracking-widest uppercase"
          >
            <Code2 className="w-3 h-3" />
            What I can do for you
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl xl:text-8xl font-black text-slate-900 mb-8"
          >
            Helping you build <span className="text-gradient">better.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-500 font-medium mx-auto"
          >
            I provide complete digital services designed to help your ideas scale and reach more people.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card p-12 rounded-[3.5rem] group hover:border-blue-200 transition-all duration-500 shadow-xl"
            >
              <div className="flex flex-col xl:flex-row gap-10 items-start">
                <div className={`w-24 h-24 rounded-[2rem] ${service.color} flex items-center justify-center text-white shadow-2xl ${service.shadow} group-hover:scale-110 transition-transform duration-500 flex-shrink-0`}>
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-black text-slate-900 mb-6 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-lg text-slate-500 leading-relaxed font-medium">
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
