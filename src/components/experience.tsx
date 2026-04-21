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
    icon: <Laptop className="w-6 h-6" />,
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
    icon: <Smartphone className="w-6 h-6" />,
    skills: ["Flutter", "Dart", "REST APIs", "App Store Deployment"],
    color: "indigo"
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
                  <div className={`w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-${exp.color}-600 group-hover:border-${exp.color}-600 group-hover:scale-110 transition-all shadow-sm group-hover:shadow-lg duration-500`}>
                    {exp.icon}
                  </div>
                  {idx !== experienceData.length - 1 && (
                    <div className="w-px h-full bg-slate-200 mt-4 group-hover:bg-blue-200 transition-colors" />
                  )}
                </div>

                <div className="flex-1 glass-card rounded-[2.5rem] p-10 md:p-12 hover:shadow-2xl transition-all duration-500 group-hover:border-blue-100">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                    <div>
                      <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-blue-600 uppercase tracking-widest mb-2">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </div>
                      <h3 className="text-4xl font-bold text-slate-900">{exp.role}</h3>
                    </div>
                    <div className="flex flex-col md:items-end gap-2">
                      <a 
                        href={exp.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xl font-bold text-slate-700 hover:text-blue-600 transition-colors group/link"
                      >
                        {exp.company}
                        <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                        <MapPin className="w-3 h-3 text-blue-400" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-xl text-slate-600 leading-relaxed mb-10 font-medium">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {exp.skills.map(skill => (
                      <span key={skill} className="px-4 py-1.5 bg-slate-50 border border-slate-100 rounded-xl text-[10px] font-mono font-bold text-slate-500 group-hover:bg-white transition-colors">
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