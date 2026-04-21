"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, School } from "lucide-react";

const educationData = [
  {
    degree: "BCA (Bachelor of Computer Applications)",
    school: "Dharmsinh Desai University",
    period: "2022 - 2025",
    description: "Focusing on Software Engineering, Mobile App Architectures, and Full Stack Development.",
    location: "Nadiad, Gujarat",
    icon: <School className="w-5 h-5" />
  },
  {
    degree: "HSC (Higher Secondary Certificate)",
    school: "Shree Swaminarayan Gurukul",
    period: "2020 - 2022",
    description: "Science stream with specialized focus on Computer Science and Mathematics.",
    location: "Rajkot, Gujarat",
    icon: <School className="w-5 h-5" />
  },
  {
    degree: "SSC (Secondary School Certificate)",
    school: "Knowledge High School",
    period: "2019 - 2020",
    description: "Foundational academic excellence with high honors in technology subjects.",
    location: "Anand, Gujarat",
    icon: <School className="w-5 h-5" />
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent mb-6">
            <GraduationCap className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-widest">The Foundation</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900">Academic <span className="text-accent">Journey</span></h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-accent to-blue-400 hidden md:block opacity-10" />

          <div className="space-y-16">
            {educationData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-2 border-primary z-10 hidden md:flex items-center justify-center shadow-md">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                </div>

                <div className="w-full md:w-[45%]">
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-lg relative overflow-hidden group transition-all duration-500"
                  >
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                      <GraduationCap className="w-24 h-24 text-slate-900" />
                    </div>
                    <div className="flex items-center gap-2 text-primary font-bold mb-3 text-sm">
                      <Calendar className="w-4 h-4" />
                      {item.period}
                    </div>
                    <h3 className="text-xl md:text-2xl font-black mb-2 text-slate-900">{item.degree}</h3>
                    <p className="text-base text-slate-700 font-medium mb-4">{item.school}</p>
                    <p className="text-sm text-slate-500 leading-relaxed mb-6">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      <MapPin className="w-3 h-3 text-accent" />
                      {item.location}
                    </div>
                  </motion.div>
                </div>
                <div className="hidden md:block md:w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
