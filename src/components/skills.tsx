"use client";

import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Code2, Database, Terminal, Video, Bot, Layers } from "lucide-react";

const skillCategories = [
  {
    title: "Mobile Architecture",
    icon: <Smartphone className="w-6 h-6" />,
    skills: ["Flutter", "Dart", "Firebase", "State Mgmt"],
    description: "Cross-platform engineering with a focus on high-fidelity UI/UX.",
    color: "from-blue-500 to-cyan-400",
    bg: "bg-blue-50/50"
  },
  {
    title: "Web Engineering",
    icon: <Code2 className="w-6 h-6" />,
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    description: "Building modern, server-side rendered applications with speed.",
    color: "from-indigo-500 to-purple-400",
    bg: "bg-indigo-50/50"
  },
  {
    title: "Backend & Systems",
    icon: <Database className="w-6 h-6" />,
    skills: ["PostgreSQL", "Node.js", "Appwrite", "Firebase Auth"],
    description: "Scalable server infrastructures and real-time data management.",
    color: "from-emerald-500 to-teal-400",
    bg: "bg-emerald-50/50"
  },
  {
    title: "Generative AI",
    icon: <Bot className="w-6 h-6" />,
    skills: ["Gemini AI", "Prompt Engineering", "Genkit", "LLM Integration"],
    description: "Implementing intelligent agents and AI features into ecosystems.",
    color: "from-amber-500 to-orange-400",
    bg: "bg-amber-50/50"
  },
  {
    title: "Visual Design",
    icon: <Video className="w-6 h-6" />,
    skills: ["Figma", "Logo Design", "Premiere Pro", "Motion Graphics"],
    description: "Crafting digital assets that resonate with the target audience.",
    color: "from-rose-500 to-pink-400",
    bg: "bg-rose-50/50"
  },
  {
    title: "Core Programming",
    icon: <Terminal className="w-6 h-6" />,
    skills: ["Java", "Python", "JavaScript", "C++ Algorithms"],
    description: "Deep logic foundation and algorithmic problem solving.",
    color: "from-slate-700 to-slate-500",
    bg: "bg-slate-50/50"
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 text-white mb-6 font-mono text-[10px] font-bold tracking-widest uppercase">
            <Layers className="w-3 h-3" />
            tech_stack.json
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-slate-900">Technical <span className="text-gradient">Arsenal</span></h2>
          <p className="text-xl text-slate-500 font-medium">
            A comprehensive suite of tools and languages I utilize to build modern architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className={`group p-8 glass-card rounded-[2rem] hover:shadow-xl transition-all duration-500 hover:-translate-y-2`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br ${cat.color} mb-8 shadow-lg shadow-${cat.color.split(' ')[0].split('-')[1]}-500/20 group-hover:scale-110 transition-transform duration-500`}>
                {cat.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">{cat.title}</h3>
              <p className="text-sm text-slate-500 mb-8 font-medium leading-relaxed">{cat.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-lg text-[10px] font-mono font-bold text-slate-600 group-hover:bg-white group-hover:border-blue-100 transition-colors">
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