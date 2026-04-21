"use client";

import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Code2, Database, Terminal, Video, Bot, Layers, CheckCircle2 } from "lucide-react";

const skillCategories = [
  {
    title: "Mobile Development",
    icon: <Smartphone className="w-8 h-8 text-primary" />,
    skills: ["Flutter", "Dart", "React Native", "Android SDK"],
    description: "Building cross-platform apps with native performance.",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Frontend Engineering",
    icon: <Code2 className="w-8 h-8 text-accent" />,
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    description: "Pixel-perfect UIs with advanced state management.",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Backend & Cloud",
    icon: <Database className="w-8 h-8 text-emerald-400" />,
    skills: ["Firebase", "Node.js", "Appwrite", "PostgreSQL"],
    description: "Scalable infrastructures and real-time databases.",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "AI & Innovation",
    icon: <Bot className="w-8 h-8 text-orange-400" />,
    skills: ["Gemini AI", "OpenAI", "Genkit", "Prompt Eng."],
    description: "Integrating intelligent features into modern apps.",
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "Design & Media",
    icon: <Video className="w-8 h-8 text-rose-400" />,
    skills: ["Video Editing", "Figma", "Logo Design", "UI/UX"],
    description: "Visual storytelling and aesthetic interface design.",
    gradient: "from-rose-500/20 to-indigo-500/20",
  },
  {
    title: "Programming",
    icon: <Terminal className="w-8 h-8 text-sky-400" />,
    skills: ["Java", "Python", "JavaScript", "C++"],
    description: "Deep understanding of logic and algorithms.",
    gradient: "from-sky-500/20 to-blue-500/20",
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-32 bg-[#020617] relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent mb-6">
            <Layers className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-widest">Expertise</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8">Technical <span className="text-gradient">Arsenal</span></h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            I leverage a powerful tech stack to transform ideas into scalable, high-performance digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className={`glass-card p-10 rounded-[3rem] relative group overflow-hidden bg-gradient-to-br ${cat.gradient}`}
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                {cat.icon}
              </div>
              <div className="mb-8 p-4 glass w-fit rounded-2xl text-white">
                {cat.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{cat.title}</h3>
              <p className="text-sm text-muted-foreground mb-8 line-clamp-2">{cat.description}</p>
              
              <div className="space-y-3">
                {cat.skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold">{skill}</span>
                  </div>
                ))}
              </div>
              
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-accent transition-all duration-500 w-0 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};