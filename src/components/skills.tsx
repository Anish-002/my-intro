"use client";

import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Code2, Database, Terminal, Video, Bot, Layers } from "lucide-react";

const skillCategories = [
  {
    title: "Mobile Architecture",
    icon: <Smartphone className="w-8 h-8" />,
    skills: ["Flutter", "Dart", "Firebase", "State Mgmt"],
    description: "Cross-platform engineering with a focus on high-fidelity UI/UX.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Web Engineering",
    icon: <Code2 className="w-8 h-8" />,
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    description: "Building modern, server-side rendered applications with speed.",
    color: "from-indigo-500 to-purple-400",
  },
  {
    title: "Backend & Systems",
    icon: <Database className="w-8 h-8" />,
    skills: ["PostgreSQL", "Node.js", "Appwrite", "Firebase Auth"],
    description: "Scalable server infrastructures and real-time data management.",
    color: "from-emerald-500 to-teal-400",
  },
  {
    title: "Generative AI",
    icon: <Bot className="w-8 h-8" />,
    skills: ["Gemini AI", "Prompt Engineering", "Genkit", "LLM Integration"],
    description: "Implementing intelligent agents and AI features into ecosystems.",
    color: "from-amber-500 to-orange-400",
  },
  {
    title: "Visual Design",
    icon: <Video className="w-8 h-8" />,
    skills: ["Figma", "Logo Design", "Premiere Pro", "Motion Graphics"],
    description: "Crafting digital assets that resonate with the target audience.",
    color: "from-rose-500 to-pink-400",
  },
  {
    title: "Core Programming",
    icon: <Terminal className="w-8 h-8" />,
    skills: ["Java", "Python", "JavaScript", "C++ Algorithms"],
    description: "Deep logic foundation and algorithmic problem solving.",
    color: "from-slate-700 to-slate-500",
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      
      <div className="w-full px-4 md:px-8 xl:px-16 2xl:px-24">
        <div className="max-w-7xl mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 text-white mb-6 font-mono text-[10px] font-bold tracking-widest uppercase">
            <Layers className="w-3 h-3" />
            tech_stack.json
          </div>
          <h2 className="text-5xl md:text-7xl xl:text-8xl 2xl:text-9xl font-black mb-8 text-slate-900">Technical <span className="text-gradient">Arsenal</span></h2>
          <p className="text-xl xl:text-2xl 2xl:text-3xl text-slate-500 font-medium max-w-5xl">
            A comprehensive suite of tools and languages I utilize to build modern architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-16">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className={`group p-12 xl:p-16 glass-card rounded-[4rem] hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 shadow-xl`}
            >
              <div className={`w-20 h-20 rounded-[2rem] flex items-center justify-center text-white bg-gradient-to-br ${cat.color} mb-12 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                <div className="scale-125">{cat.icon}</div>
              </div>
              <h3 className="text-3xl md:text-4xl font-black mb-8 text-slate-900">{cat.title}</h3>
              <p className="text-lg md:text-xl 2xl:text-2xl text-slate-500 mb-12 font-medium leading-relaxed">{cat.description}</p>
              
              <div className="flex flex-wrap gap-4">
                {cat.skills.map((skill, i) => (
                  <span key={i} className="px-5 py-2 bg-slate-50 border border-slate-100 rounded-xl text-[10px] md:text-xs font-mono font-bold text-slate-600 group-hover:bg-white group-hover:border-blue-100 transition-colors">
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
