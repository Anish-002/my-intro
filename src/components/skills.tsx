
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Code2, Database, Terminal, Video, Palette, Bot, Layers } from "lucide-react";

const skillCategories = [
  {
    title: "Mobile Development",
    icon: <Smartphone className="w-6 h-6 text-primary" />,
    skills: ["React Native", "Flutter", "iOS Development", "Android Studio"],
    color: "bg-primary/10",
  },
  {
    title: "Frontend Development",
    icon: <Code2 className="w-6 h-6 text-accent" />,
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    color: "bg-accent/10",
  },
  {
    title: "Backend Development",
    icon: <Database className="w-6 h-6 text-chart-3" />,
    skills: ["Node.js", "Firebase", "PostgreSQL", "REST APIs"],
    color: "bg-chart-3/10",
  },
  {
    title: "Programming",
    icon: <Terminal className="w-6 h-6 text-chart-4" />,
    skills: ["JavaScript", "TypeScript", "Python", "C++"],
    color: "bg-chart-4/10",
  },
  {
    title: "Extra Creative Skills",
    icon: <Video className="w-6 h-6 text-chart-5" />,
    skills: ["Video Editing", "Logo Design", "UI/UX Prototyping"],
    color: "bg-chart-5/10",
  },
  {
    title: "AI Tools",
    icon: <Bot className="w-6 h-6 text-primary" />,
    skills: ["ChatGPT", "Midjourney", "Gemini", "AI Integration"],
    color: "bg-primary/10",
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary mb-4">
            <Layers className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">Expertise</span>
          </div>
          <h2 className="text-4xl font-bold mb-6">Technical <span className="text-primary">Arsenal</span></h2>
          <p className="text-lg text-muted-foreground">
            A comprehensive set of tools and technologies I've mastered to build world-class digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 rounded-3xl"
            >
              <div className={`${cat.color} w-12 h-12 rounded-2xl flex items-center justify-center mb-6`}>
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-background text-xs font-semibold text-muted-foreground border border-border shadow-sm"
                  >
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
