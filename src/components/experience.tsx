"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ExternalLink, Globe, Smartphone, Laptop } from "lucide-react";

const experienceData = [
  {
    role: "Full Stack Web Developer",
    company: "Accountooze",
    period: "Current",
    description: "Leading the development of modern web architectures, focusing on building high-performance financial management tools and business solutions using Next.js and robust backend systems.",
    location: "Remote / Hybrid",
    link: "https://www.instagram.com/accountooze/",
    icon: <Laptop className="w-6 h-6" />,
    skills: ["Next.js", "TypeScript", "Tailwind", "Firebase"]
  },
  {
    role: "Flutter Developer",
    company: "Anylife Digital Marketing Agency",
    period: "6 Months",
    description: "Architected and deployed cross-platform mobile applications for diverse clients. Focused on pixel-perfect UI implementation and seamless API integrations to drive digital marketing success.",
    location: "Gujarat, India",
    link: "https://www.instagram.com/anylife_edge",
    icon: <Smartphone className="w-6 h-6" />,
    skills: ["Flutter", "Dart", "Firebase", "State Management"]
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 bg-slate-50/30 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 mb-6">
            <Briefcase className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-widest">Professional Path</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-slate-900">Career <span className="text-blue-600">Milestones</span></h2>
          <p className="text-xl text-slate-500 leading-relaxed mt-4">
            A journey of engineering excellence across mobile and web platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-white rounded-[3rem] p-8 md:p-12 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-600 shadow-sm">
                      {exp.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-sm font-bold text-blue-500 uppercase tracking-wider">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <h3 className="text-3xl font-extrabold text-slate-900 mt-1">{exp.role}</h3>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-xl font-bold text-slate-700">{exp.company}</span>
                    <a 
                      href={exp.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-slate-50 rounded-full transition-colors text-slate-400 hover:text-blue-500"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-3xl">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {exp.skills.map(skill => (
                      <span key={skill} className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-full text-xs font-bold text-slate-600">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col items-start md:items-end gap-3 text-slate-400">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </div>
                </div>
              </div>
              
              {/* Decorative side accent */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1/2 bg-blue-500 rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
