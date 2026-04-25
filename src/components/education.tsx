
"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, School, Award, Calendar } from "lucide-react";

const educationData = [
  {
    degree: "Graduation (BCA)",
    school: "VNSGU (Veer Narmad South Gujarat University)",
    period: "2022 - 2025",
    description: "Specialized in Computer Applications and Software Development. Focused on modern architectures and project management.",
    location: "Surat, Gujarat",
    icon: <GraduationCap className="w-5 h-5" />
  },
  {
    degree: "ADCA (Advanced Diploma in Computer Applications)",
    school: "Era Institute",
    period: "2022",
    description: "Advanced diploma covering comprehensive computer application concepts and digital tools.",
    location: "Gujarat, India",
    icon: <Award className="w-5 h-5" />
  },
  {
    degree: "HSC (Higher Secondary Certificate)",
    school: "Shree Krishna Rashriya Vidhyalay",
    period: "2020 - 2022",
    description: "Completed higher secondary education with a strong focus on core academics.",
    location: "Gujarat, India",
    icon: <School className="w-5 h-5" />
  },
  {
    degree: "SSC (Secondary School Certificate)",
    school: "Suman High School No. 14",
    period: "2019 - 2020",
    description: "Foundational secondary education with honors in science and technology subjects.",
    location: "Gujarat, India",
    icon: <School className="w-5 h-5" />
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="w-full px-6 md:px-12 xl:px-24">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 text-white mb-6 font-mono text-[10px] font-bold tracking-widest uppercase"
          >
            <GraduationCap className="w-3 h-3" />
            Academic Journey
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight"
          >
            My <span className="text-blue-600">Qualifications</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {educationData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 hover:border-blue-200 transition-all duration-500 shadow-sm hover:shadow-xl flex flex-col md:flex-row gap-8 items-start"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-md group-hover:scale-110 transition-transform duration-500 shrink-0">
                {item.icon}
              </div>
              
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                    {item.degree}
                  </h3>
                  <div className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold text-slate-400 bg-white px-3 py-1 rounded-full border border-slate-100 uppercase tracking-widest">
                    <Calendar className="w-3 h-3 text-blue-500" />
                    {item.period}
                  </div>
                </div>

                <p className="text-lg font-bold text-slate-700 mb-3">
                  {item.school}
                </p>
                <p className="text-slate-500 leading-relaxed font-medium mb-6 max-w-2xl">
                  {item.description}
                </p>
                
                <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                  <MapPin className="w-3 h-3 text-blue-500" />
                  {item.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
