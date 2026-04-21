"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink, Smartphone, Laptop, Terminal } from "lucide-react";

const experienceData = [
  {
    role: "Full Stack Web Developer",
    company: "Accountooze",
    period: "Jan 2025 - Present",
    description: "Engineering robust financial management dashboards and business automation tools. implementing performant Next.js architectures with complex data synchronization.",
    location: "Remote / Hybrid",
    link: "https://www.instagram.com/accountooze/",
    icon: <Laptop className="w-8 h-8" />,
    skills: ["Next.js", "TypeScript", "Tailwind", "Firebase", "State Mgmt"],
    color: "blue"
  },
  {
    role: "Flutter Developer",
    company: "Anylife Digital Marketing Agency",
    period: "June 2024 - Dec 2024",
    description: "Developed and optimized cross-platform mobile applications. Focused on reactive state management and integrating high-end visual experiences for marketing campaigns.",
    location: "Gujarat, India",
    link: "https://www.instagram.com/anylife_edge",
    icon: <Smartphone className="w-8 h-8" />,
    skills: ["Flutter", "Dart", "REST APIs", "App Store Deployment"],
    color: "indigo"
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 bg-slate-50/50 dot-grid relative">
      <div className="w-full px-4 md:px-8 xl:px-16 2xl:px-24">
        <div className="max-w-7xl mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-slate-200 text-slate-400 mb-6 font-mono text-[10px] font-bold tracking-widest uppercase">
            <Terminal className="w-3 h-3" />
            career_changelog
          </div>
          <h2 className="text-5xl md:text-7xl xl:text-8xl 2xl:text-9xl font-black text-slate-900 mb-6">Work <span className="text-blue-600">History</span></h2>
          <p className="text-xl xl:text-2xl 2xl:text-3xl text-slate-500 font-medium">
            Professional trajectory in mobile and web engineering.
          </p>
        </div>

        <div className="space-y-20">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative flex gap-8 md:gap-16 items-start"
            >
              {/* Timeline node */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className={`w-20 h-20 rounded-[2rem] bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:border-blue-600 group-hover:scale-110 transition-all shadow-md group-hover:shadow-xl duration-500`}>
                  {exp.icon}
                </div>
                {idx !== experienceData.length - 1 && (
                  <div className="w-px h-full bg-slate-200 mt-8 group-hover:bg-blue-200 transition-colors" />
                )}
              </div>

              <div className="flex-1 glass-card rounded-[4rem] p-12 md:p-16 xl:p-24 hover:shadow-2xl transition-all duration-500 group-hover:border-blue-100 shadow-xl">
                <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-10 mb-12">
                  <div>
                    <div className="flex items-center gap-3 text-[10px] md:text-xs font-mono font-bold text-blue-600 uppercase tracking-widest mb-4">
                      <Calendar className="w-5 h-5" />
                      {exp.period}
                    </div>
                    <h3 className="text-4xl md:text-6xl font-black text-slate-900">{exp.role}</h3>
                  </div>
                  <div className="flex flex-col xl:items-end gap-4">
                    <a 
                      href={exp.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 text-2xl md:text-4xl font-bold text-slate-700 hover:text-blue-600 transition-colors group/link"
                    >
                      {exp.company}
                      <ExternalLink className="w-6 h-6 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                    </a>
                    <div className="flex items-center gap-3 text-base md:text-lg font-semibold text-slate-400">
                      <MapPin className="w-5 h-5 text-blue-400" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <p className="text-xl md:text-2xl 2xl:text-3xl text-slate-600 leading-relaxed mb-16 font-medium max-w-6xl">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-5">
                  {exp.skills.map(skill => (
                    <span key={skill} className="px-6 py-2.5 bg-slate-50 border border-slate-100 rounded-2xl text-[10px] md:text-xs font-mono font-bold text-slate-500 group-hover:bg-white transition-colors">
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
