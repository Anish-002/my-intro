
"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, School, Award } from "lucide-react";

const educationData = [
  {
    degree: "Graduation (BCA)",
    school: "VNSGU (Veer Narmad South Gujarat University)",
    period: "2022 - 2025",
    description: "Focused on computer applications, software engineering, and modern development architectures.",
    location: "Surat, Gujarat",
    icon: <GraduationCap className="w-5 h-5" />
  },
  {
    degree: "ADCA (Advanced Diploma in Computer Applications)",
    school: "Era Institute",
    period: "2022",
    description: "Specialized computer education course covering advanced software applications and digital foundations.",
    location: "Gujarat, India",
    icon: <Award className="w-5 h-5" />
  },
  {
    degree: "HSC (Higher Secondary Certificate)",
    school: "Shree Krishna Rashriya Vidhyalay",
    period: "2020 - 2022",
    description: "Completed higher secondary education with a focus on core academic excellence.",
    location: "Gujarat, India",
    icon: <School className="w-5 h-5" />
  },
  {
    degree: "SSC (Secondary School Certificate)",
    school: "Suman High School No. 14",
    period: "2019 - 2020",
    description: "Secondary education foundation with strong honors in technology and science.",
    location: "Gujarat, India",
    icon: <School className="w-5 h-5" />
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-32 bg-white relative">
      <div className="w-full px-6 md:px-12 xl:px-24">
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 text-white mb-6 font-mono text-[10px] font-bold tracking-widest uppercase">
            <GraduationCap className="w-3 h-3" />
            Qualifications
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900">Academic <span className="text-blue-600">Journey</span></h2>
        </div>

        <div className="max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {educationData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-slate-50/50 p-8 md:p-10 rounded-[2.5rem] border border-slate-100 hover:border-blue-200 transition-all duration-500 shadow-sm hover:shadow-xl"
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-md group-hover:scale-110 transition-transform duration-500">
                    {item.icon}
                  </div>
                  <div className="text-[10px] font-mono font-bold text-slate-400 bg-white px-3 py-1 rounded-full border border-slate-100 uppercase tracking-widest">
                    {item.period}
                  </div>
                </div>
                
                <h3 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {item.degree}
                </h3>
                <p className="text-lg font-bold text-slate-700 mb-4">
                  {item.school}
                </p>
                <p className="text-slate-500 leading-relaxed font-medium mb-8">
                  {item.description}
                </p>
                
                <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                  <MapPin className="w-3 h-3 text-blue-500" />
                  {item.location}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
