"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink, Smartphone, Laptop, Terminal, GitCommit } from "lucide-react";

const experienceData = [
  {
    role: "Full Stack Web Developer",
    company: "Accountooze",
    period: "Jan 2025 - Present",
    description: "Engineering robust financial management dashboards and business automation tools. implementing performant Next.js architectures with complex data synchronization.",
    location: "Remote / Hybrid",
    link: "https://www.instagram.com/accountooze/",
    icon: <Laptop className="w-5 h-5" />,
    skills: ["Next.js", "TypeScript", "Tailwind", "Firebase", "State Mgmt"]
  },
  {
    role: "Flutter Developer",
    company: "Anylife Digital Marketing Agency",
    period: "June 2024 - Dec 2024",
    description: "Developed and optimized cross-platform mobile applications. Focused on reactive state management and integrating high-end visual experiences for marketing campaigns.",
    location: "Gujarat, India",
    link: "https://www.instagram.com/anylife_edge",
    icon: <Smartphone className="w-5 h-5" />,
    skills: ["Flutter", "Dart", "REST APIs", "App Store Deployment"]
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 bg-slate-50/50 dot-grid relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-slate-200 text-slate-400 mb-6 font-mono text-[10px] font-bold tracking-widest uppercase">
            <Terminal className="w-3 h-3" />
            career_changelog
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-6">Work <span className="text-blue-600">History</span></h2>
          <p className="text-xl text-slate-500 font-medium">
            Professional trajectory in mobile and web engineering.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="space-y-12">
            {experienceData.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative flex gap-8 items-start"
              >
                {/* Timeline node */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:border-blue-600 transition-all shadow-sm">
                    {exp.icon}
                  </div>
                  {idx !== experienceData.length - 1 && (
                    <div className="w-px h-full bg-slate-200 mt-4 group-hover:bg-blue-200 transition-colors" />
                  )}
                </div>

                <div className="flex-1 bg-white border border-slate-200 rounded-2xl p-8 md:p-10 shadow-sm group-hover:shadow-md transition-all group-hover:border-blue-100">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                      <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-blue-600 uppercase tracking-widest mb-1">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </div>
                      <h3 className="text-3xl font-bold text-slate-900">{exp.role}</h3>
                    </div>
                    <div className="flex flex-col md:items-end gap-1">
                      <a 
                        href={exp.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-lg font-bold text-slate-700 hover:text-blue-600 transition-colors"
                      >
                        {exp.company}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-lg text-slate-600 leading-relaxed mb-8 font-medium">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map(skill => (
                      <span key={skill} className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-md text-[10px] font-mono font-bold text-slate-500">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};