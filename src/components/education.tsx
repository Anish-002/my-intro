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
    icon: <School className="w-6 h-6" />
  },
  {
    degree: "HSC (Higher Secondary Certificate)",
    school: "Shree Swaminarayan Gurukul",
    period: "2020 - 2022",
    description: "Science stream with specialized focus on Computer Science and Mathematics.",
    location: "Rajkot, Gujarat",
    icon: <School className="w-6 h-6" />
  },
  {
    degree: "SSC (Secondary School Certificate)",
    school: "Knowledge High School",
    period: "2019 - 2020",
    description: "Foundational academic excellence with high honors in technology subjects.",
    location: "Anand, Gujarat",
    icon: <School className="w-6 h-6" />
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-32 bg-[#020617] relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent mb-6">
            <GraduationCap className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-widest">The Foundation</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold">Academic <span className="text-accent">Journey</span></h2>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-accent to-chart-3 hidden md:block" />

          <div className="space-y-20">
            {educationData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`relative flex flex-col md:flex-row items-center gap-12 ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-[30px] md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full glass border-2 border-primary z-10 hidden md:flex items-center justify-center bg-background">
                  <div className="w-4 h-4 rounded-full bg-primary animate-pulse" />
                </div>

                <div className="w-full md:w-[45%]">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="glass-card p-10 rounded-[3rem] border-white/10 hover:border-primary/50 relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                      <GraduationCap className="w-32 h-32" />
                    </div>
                    <div className="flex items-center gap-2 text-primary font-bold mb-4">
                      <Calendar className="w-4 h-4" />
                      {item.period}
                    </div>
                    <h3 className="text-3xl font-bold mb-3">{item.degree}</h3>
                    <p className="text-xl text-white font-medium mb-6">{item.school}</p>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-3 text-sm font-semibold text-muted-foreground">
                      <MapPin className="w-4 h-4 text-accent" />
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