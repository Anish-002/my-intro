
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, PenTool, Code, Rocket, CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Discovery",
    description: "We talk about your goals, audience, and the problem we're solving. No code yet—just strategy.",
    icon: <Search className="w-6 h-6" />,
    color: "bg-blue-500",
  },
  {
    title: "Design",
    description: "I create a visual roadmap. We focus on UX and clean design to make sure it looks and feels right.",
    icon: <PenTool className="w-6 h-6" />,
    color: "bg-indigo-500",
  },
  {
    title: "Development",
    description: "The heavy lifting. I build your product using Flutter or Next.js with clean, maintainable code.",
    icon: <Code className="w-6 h-6" />,
    color: "bg-violet-500",
  },
  {
    title: "Launch",
    description: "Final testing and deployment. I make sure everything is optimized and ready for the real world.",
    icon: <Rocket className="w-6 h-6" />,
    color: "bg-emerald-500",
  },
];

export const Process = () => {
  return (
    <section id="process" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="w-full px-6 md:px-12 xl:px-24">
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 text-white mb-6 font-mono text-[10px] font-bold tracking-widest uppercase">
            <CheckCircle2 className="w-3 h-3" />
            My Workflow
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">
            How I turn your <span className="text-blue-600">ideas</span> into reality.
          </h2>
        </div>

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
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center font-black text-slate-200 border border-slate-100 text-xl">
                0{idx + 1}
              </div>
              <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center text-white mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                {step.icon}
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">{step.title}</h3>
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
