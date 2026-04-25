"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, ExternalLink, Smartphone, Laptop, Terminal } from "lucide-react";

const experienceData = [
  {
    role: "Full Stack Web Developer",
    company: "Accountooze",
    period: "Jan 2025 - Present",
    description:
      "Here, I work on building financial dashboards and tools that actually make data easier to understand. Instead of just showing numbers, I focus on making things simple, fast, and useful for real users.",
    location: "Remote / Hybrid",
    link: "https://www.instagram.com/accountooze/",
    icon: <Laptop className="w-6 h-6" />,
    skills: ["Next.js", "TypeScript", "Tailwind", "Firebase"],
  },
  {
    role: "Flutter Developer",
    company: "Anylife Digital Marketing Agency",
    period: "June 2024 - Dec 2024",
    description:
      "This is where I got hands-on with real mobile apps. I worked on making apps feel smooth, responsive, and easy to use — not just functional, but enjoyable.",
    location: "Gujarat, India",
    link: "https://www.instagram.com/anylife_edge",
    icon: <Smartphone className="w-6 h-6" />,
    skills: ["Flutter", "Dart", "REST APIs"],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-10 bg-slate-50/50 dot-grid relative">
      <div className="w-full px-6 md:px-12 xl:px-24">

        {/* HEADER */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-slate-200 text-slate-400 mb-6 font-mono text-[10px] font-bold tracking-widest uppercase">
            <Terminal className="w-3 h-3" />
            My Journey
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6">
            Where I’ve worked — and what I learned.
          </h2>

          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-2xl">
            Every step taught me something — from building real apps to understanding how users actually interact with products.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="space-y-12">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative flex gap-6 md:gap-12 items-start"
            >
              
              {/* ICON + LINE */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:border-blue-600 group-hover:scale-110 transition-all shadow-md group-hover:shadow-lg duration-500">
                  {exp.icon}
                </div>
                {idx !== experienceData.length - 1 && (
                  <div className="w-px h-full bg-slate-200 mt-6 group-hover:bg-blue-200 transition-colors" />
                )}
              </div>

              {/* CARD */}
              <div className="flex-1 glass-card rounded-[2.5rem] p-8 md:p-12 hover:shadow-xl transition-all duration-500 group-hover:border-blue-100 shadow-md">
                
                <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6 mb-8">
                  
                  <div>
                    <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-blue-600 uppercase tracking-widest mb-3">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>

                    <h3 className="text-2xl md:text-4xl font-black text-slate-900">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex flex-col xl:items-end gap-2">
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-lg md:text-2xl font-bold text-slate-700 hover:text-blue-600 transition-colors group/link"
                    >
                      {exp.company}
                      <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                    </a>
                  </div>

                </div>

                {/* DESCRIPTION */}
                <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-8 font-medium">
                  {exp.description}
                </p>

                {/* SKILLS */}
                <div className="flex flex-wrap gap-3">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-lg text-[9px] font-mono font-bold text-slate-500 group-hover:bg-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};