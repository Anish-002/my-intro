"use client";

import React from "react";
import { motion } from "framer-motion";
import { Video, Palette, Sparkles, Wand2, Image, Bot } from "lucide-react";

const extras = [
  {
    title: "Video Editing",
    description:
      "I create short-form videos, reels, and edits that actually grab attention. Clean cuts, smooth transitions, and content that feels modern.",
    icon: <Video className="w-6 h-6" />,
    color: "from-rose-500 to-orange-400",
  },
  {
    title: "Logo & UI Design",
    description:
      "I design logos, banners, and UI that look clean and modern. Simple design that makes your product feel professional.",
    icon: <Palette className="w-6 h-6" />,
    color: "from-blue-500 to-indigo-400",
  },
  {
    title: "AI Features",
    description:
      "I work with AI tools and integrate smart features like chatbots and automation into apps to make them more useful.",
    icon: <Bot className="w-6 h-6" />,
    color: "from-emerald-500 to-teal-400",
  },
  {
    title: "Content & Visuals",
    description:
      "From thumbnails to app visuals — I make sure things not only work well but also look good and feel engaging.",
    icon: <Image className="w-6 h-6" />,
    color: "from-purple-500 to-pink-400",
  },
];

export const ExtraSkills = () => {
  return (
    <section id="creative" className="py-20 bg-white relative">
      <div className="w-full px-6 md:px-12 xl:px-24">

        {/* HEADER */}
        <div className="max-w-4xl mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 text-white mb-6 font-mono text-[10px] font-bold tracking-widest uppercase">
            <Wand2 className="w-3 h-3" />
            More Than Just Code
          </div>

          <h2 className="text-3xl md:text-6xl lg:text-5xl font-black text-slate-900 leading-tight w-[800px]">
            I don’t just build apps <br/>— I shape the whole experience.
          </h2>

          <p className="text-lg md:text-xl text-slate-500 mt-6 max-w-2xl font-medium">
            Along with development, I also work on design, content, and AI<br/> — so everything feels complete, not disconnected.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {extras.map((extra, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-10 bg-slate-50 rounded-[3rem] border border-slate-100 hover:border-blue-200 hover:bg-white transition-all duration-500 shadow-sm hover:shadow-xl"
            >

              {/* ICON */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${extra.color} flex items-center justify-center text-white mb-8 shadow-md group-hover:rotate-6 transition-transform`}>
                {extra.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-2xl font-black text-slate-900 mb-4">
                {extra.title}
              </h3>

              {/* DESCRIPTION */}
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