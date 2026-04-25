
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Video, Palette, Sparkles, Wand2 } from "lucide-react";

const extras = [
  {
    title: "Video Editing",
    description: "I create engaging video content and reels that help brands tell their story visually.",
    icon: <Video className="w-6 h-6" />,
    color: "from-rose-500 to-orange-400",
  },
  {
    title: "Logo & Branding",
    description: "Designing modern, minimal logos that give your business a unique professional identity.",
    icon: <Palette className="w-6 h-6" />,
    color: "from-blue-500 to-indigo-400",
  },
  {
    title: "AI Integrations",
    description: "Adding smart features like LLMs and chatbots to automate business workflows.",
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-emerald-500 to-teal-400",
  },
];

export const ExtraSkills = () => {
  return (
    <section id="creative" className="py-24 bg-white relative">
      <div className="w-full px-6 md:px-12 xl:px-24">
        <div className="max-w-4xl mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 text-white mb-6 font-mono text-[10px] font-bold tracking-widest uppercase">
            <Wand2 className="w-3 h-3" />
            Beyond Coding
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900">The <span className="text-blue-600">Creative</span> Suite</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {extras.map((extra, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-10 bg-slate-50 rounded-[3rem] border border-slate-100 hover:border-blue-200 hover:bg-white transition-all duration-500 shadow-sm hover:shadow-xl"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${extra.color} flex items-center justify-center text-white mb-8 shadow-md group-hover:rotate-6 transition-transform`}>
                {extra.icon}
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">{extra.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                {extra.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
