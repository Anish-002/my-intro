"use client";

import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Code2, Database, Terminal, Video, Bot, Layers, CheckCircle2 } from "lucide-react";

const skillCategories = [
  {
    title: "Mobile Architecture",
    icon: <Smartphone className="w-6 h-6" />,
    skills: ["Flutter", "Dart", "Firebase", "State Mgmt"],
    description: "Cross-platform engineering with a focus on UI/UX and native performance.",
  },
  {
    title: "Web Engineering",
    icon: <Code2 className="w-6 h-6" />,
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    description: "Building modern, server-side rendered applications with high SEO optimization.",
  },
  {
    title: "Backend & Systems",
    icon: <Database className="w-6 h-6" />,
    skills: ["PostgreSQL", "Node.js", "Appwrite", "Auth Systems"],
    description: "Scalable server infrastructures and real-time database management.",
  },
  {
    title: "Generative AI",
    icon: <Bot className="w-6 h-6" />,
    skills: ["Gemini AI", "Prompt Engineering", "Genkit", "LLM Integration"],
    description: "Implementing intelligent agents and AI features into existing ecosystems.",
  },
  {
    title: "Visual Design",
    icon: <Video className="w-6 h-6" />,
    skills: ["Figma", "Logo Design", "Video Post-Prod", "Motion Graphics"],
    description: "Crafting digital assets that resonate with the target audience.",
  },
  {
    title: "Core Programming",
    icon: <Terminal className="w-6 h-6" />,
    skills: ["Java", "Python", "JavaScript", "C++ Algorithms"],
    description: "Deep logic foundation and algorithmic problem solving.",
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-32 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 text-white mb-6 font-mono text-[10px] font-bold tracking-widest uppercase">
            <Layers className="w-3 h-3" />
            tech_stack.json
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-slate-900">Technical <span className="text-gradient">Arsenal</span></h2>
          <p className="text-xl text-slate-500 font-medium">
            A comprehensive suite of tools and languages I utilize to solve complex architectural problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="p-8 bg-white border border-slate-200 rounded-2xl hover:border-blue-400 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-900 group-hover:bg-blue-600 group-hover:text-white transition-colors mb-8 shadow-sm">
                {cat.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">{cat.title}</h3>
              <p className="text-sm text-slate-500 mb-8 font-medium leading-relaxed">{cat.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-md text-[10px] font-mono font-bold text-slate-500">
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