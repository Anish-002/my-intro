"use client";

import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Zap, Code2, Rocket, Award, Lightbulb } from "lucide-react";
import Image from "next/image";

const stats = [
  { label: "Projects Completed", value: "25+", icon: <Rocket className="w-5 h-5" /> },
  { label: "Tech Mastered", value: "12+", icon: <Code2 className="w-5 h-5" /> },
  { label: "Learning Hours", value: "3k+", icon: <Zap className="w-5 h-5" /> },
  { label: "Certifications", value: "08+", icon: <Award className="w-5 h-5" /> },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-[#020617]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 aspect-square rounded-[3rem] overflow-hidden border-2 border-white/10 group">
              <Image
                src="https://picsum.photos/seed/anishdev/1000/1000"
                alt="Anish Kushwaha"
                width={1000}
                height={1000}
                className="object-cover w-full h-full scale-110 group-hover:scale-100 transition-transform duration-1000"
                data-ai-hint="developer workspace"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-[80px]" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-[80px]" />
            
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-8 -right-8 glass p-6 rounded-3xl z-20 shadow-2xl border-white/20"
            >
              <div className="flex items-center gap-4">
                <div className="bg-primary/20 p-3 rounded-2xl">
                  <Smartphone className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase">Expertise</p>
                  <p className="text-lg font-bold">Flutter Specialist</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary mb-6">
              <Lightbulb className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-widest">The Story</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Crafting <span className="text-gradient">Seamless</span> Mobile Experiences
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              I am Anish Kushwaha, a dedicated Flutter and Next.js developer with a focus on building
              premium digital solutions. As a quick learner and AI enthusiast, I specialize in bridging
              the gap between complex problems and elegant, user-centric applications.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-12">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-6 rounded-[2rem] hover:bg-white/[0.05]"
                >
                  <div className="text-primary mb-3">{stat.icon}</div>
                  <h4 className="text-3xl font-extrabold mb-1">{stat.value}</h4>
                  <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <button className="px-10 py-5 bg-white text-black rounded-full font-bold hover:bg-primary hover:text-white transition-all shadow-xl">
              Download Full Resume
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};