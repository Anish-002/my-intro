"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, PenTool, Code, Rocket, CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Understanding",
    description:
      "First, we talk. I try to understand what you actually want to build, who it's for, and what problem it should solve. No rush into coding.",
    icon: <Search className="w-6 h-6" />,
    color: "bg-blue-500",
  },
  {
    title: "Planning & Design",
    description:
      "Then I plan how everything will work and look. Simple layout, clean design, and a smooth user experience — nothing complicated or confusing.",
    icon: <PenTool className="w-6 h-6" />,
    color: "bg-indigo-500",
  },
  {
    title: "Building",
    description:
      "This is where I build your app or website using Flutter or Next.js. Clean code, proper structure, and focus on performance.",
    icon: <Code className="w-6 h-6" />,
    color: "bg-violet-500",
  },
  {
    title: "Testing & Launch",
    description:
      "Before going live, I test everything properly. Once it's ready, I deploy it and make sure it runs smoothly in real-world use.",
    icon: <Rocket className="w-6 h-6" />,
    color: "bg-emerald-500",
  },
];

export const Process = () => {
  return (
    <section id="process" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="w-full px-6 md:px-12 xl:px-24">

        {/* HEADER */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 text-white mb-6 font-mono text-[10px] font-bold tracking-widest uppercase">
            <CheckCircle2 className="w-3 h-3" />
            How I Work
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">
            From idea to a working product.
          </h2>

          <p className="text-lg text-slate-500 max-w-2xl font-medium">
            I keep things simple. No complicated process — just a clear way to turn your idea into something real and usable.
          </p>
        </div>

        {/* STEPS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative p-10 glass-card rounded-[3rem] group hover:border-blue-200 transition-all duration-500"
            >
              
              {/* STEP NUMBER */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center font-black text-slate-200 border border-slate-100 text-xl">
                0{idx + 1}
              </div>

              {/* ICON */}
              <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center text-white mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                {step.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-2xl font-black text-slate-900 mb-4">
                {step.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-slate-500 font-medium leading-relaxed">
                {step.description}
              </p>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};