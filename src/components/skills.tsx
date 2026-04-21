"use client";

import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Code2, Database, Terminal, Video, Bot, Layers } from "lucide-react";

const skillGroups = [
  {
    title: "Mobile",
    icon: <Smartphone className="w-8 h-8" />,
    skills: ["Flutter", "Dart", "Firebase"],
    description: "Building fast, smooth mobile apps for iOS and Android.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Frontend",
    icon: <Code2 className="w-8 h-8" />,
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind"],
    description: "Designing clean, responsive interfaces that feel natural to use.",
    color: "from-indigo-500 to-purple-400",
  },
  {
    title: "Backend",
    icon: <Database className="w-8 h-8" />,
    skills: ["Node.js", "Express", "Firebase Auth", "PostgreSQL"],
    description: "Setting up secure and reliable server-side systems.",
    color: "from-emerald-500 to-teal-400",
  },
  {
    title: "Tools",
    icon: <Terminal className="w-8 h-8" />,
    skills: ["Git", "GitHub", "VS Code", "Vercel", "Figma"],
    description: "The tools I use every day to keep my workflow efficient.",
    color: "from-slate-700 to-slate-500",
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      
      <div className="w-full px-6 md:px-12 xl:px-24">
        <div className="mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 text-white mb-6 font-mono text-[10px] font-bold tracking-widest uppercase">
            <Layers className="w-3 h-3" />
            My Toolkit
          </div>
          <h2 className="text-5xl md:text-7xl xl:text-8xl font-black mb-8 text-slate-900">Technologies I work with <span className="text-gradient">regularly:</span></h2>
          <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-4xl">
            I don&apos;t just list tools; I focus on mastering the ones that help me build better products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {skillGroups.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className={`group p-10 glass-card rounded-[3rem] hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 shadow-xl`}
            >
              <div className={`w-16 h-16 rounded-[1.5rem] flex items-center justify-center text-white bg-gradient-to-br ${cat.color} mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                <div className="scale-110">{cat.icon}</div>
              </div>
              <h3 className="text-3xl font-black mb-4 text-slate-900">{cat.title}</h3>
              <p className="text-lg text-slate-500 mb-8 font-medium leading-relaxed">{cat.description}</p>
              
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, i) => (
                  <span key={i} className="px-4 py-1.5 bg-slate-50 border border-slate-100 rounded-xl text-[10px] font-mono font-bold text-slate-600 group-hover:bg-white group-hover:border-blue-100 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
