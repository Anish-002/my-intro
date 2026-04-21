
"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Cpu, Lightbulb, Zap, Globe, Languages } from "lucide-react";
import Image from "next/image";

export const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative z-10 overflow-hidden rounded-3xl aspect-square glass p-2 group">
              <Image
                src="https://picsum.photos/seed/anish/800/800"
                alt="Anish Kushwaha"
                width={800}
                height={800}
                className="rounded-2xl object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                data-ai-hint="developer portrait"
              />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 glass p-4 rounded-2xl shadow-xl z-20 animate-bounce">
              <Cpu className="w-8 h-8 text-primary" />
            </div>
            <div className="absolute -bottom-4 -left-4 glass p-4 rounded-2xl shadow-xl z-20 animate-pulse">
              <Zap className="w-8 h-8 text-accent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary mb-4">
              <User className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">About Me</span>
            </div>
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Driven by <span className="text-primary">Innovation</span> and <span className="text-accent">Learning</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I am Anish Kushwaha, a dedicated developer with the best learning skills in Technology and Developments. 
              As a quick learner and AI enthusiast, I thrive on tackling complex problems and turning them into 
              intuitive digital solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="glass-card p-6 rounded-2xl">
                <Lightbulb className="w-8 h-8 text-chart-4 mb-4" />
                <h3 className="font-bold mb-2">Core Philosophy</h3>
                <p className="text-sm text-muted-foreground">Embracing rapid technological shifts with curiosity and agility.</p>
              </div>
              <div className="glass-card p-6 rounded-2xl">
                <Globe className="w-8 h-8 text-chart-3 mb-4" />
                <h3 className="font-bold mb-2">Background</h3>
                <p className="text-sm text-muted-foreground">Rooted in diverse culture, fluent in Hindi, English, and Gujarati.</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="flex items-center gap-2 font-bold text-foreground">
                <Languages className="w-5 h-5 text-primary" />
                Language Proficiency
              </h4>
              <div className="flex flex-wrap gap-3">
                {["Hindi", "English", "Gujarati"].map((lang) => (
                  <span key={lang} className="px-4 py-2 rounded-xl glass border-primary/10 text-sm font-medium">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
