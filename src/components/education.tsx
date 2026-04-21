
"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const educationData = [
  {
    degree: "BCA (Bachelor of Computer Applications)",
    school: "Dharmsinh Desai University",
    period: "2022 - 2025",
    description: "Focusing on Software Engineering, Data Structures, and Web Technologies.",
    location: "Nadiad, Gujarat",
  },
  {
    degree: "HSC (Higher Secondary Certificate)",
    school: "Shree Swaminarayan Gurukul",
    period: "2020 - 2022",
    description: "Specialized in Science stream with focus on Physics, Maths and Computer Science.",
    location: "Rajkot, Gujarat",
  },
  {
    degree: "SSC (Secondary School Certificate)",
    school: "Knowledge High School",
    period: "2019 - 2020",
    description: "Foundation in basic sciences and mathematics with high honors.",
    location: "Anand, Gujarat",
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent mb-4">
            <GraduationCap className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">Education</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Academic <span className="text-accent">Journey</span></h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-chart-3 hidden md:block" />

          <div className="space-y-12">
            {educationData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-primary z-10 hidden md:block" />

                <div className="w-full md:w-1/2">
                  <div className="glass-card p-8 rounded-3xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                       <GraduationCap className="w-24 h-24" />
                    </div>
                    <div className="flex items-center gap-2 text-primary text-sm font-bold mb-2">
                      <Calendar className="w-4 h-4" />
                      {item.period}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{item.degree}</h3>
                    <p className="text-muted-foreground font-medium mb-4">{item.school}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      {item.location}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
