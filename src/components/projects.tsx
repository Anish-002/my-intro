"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code, Sparkles, ChevronRight, Play, Terminal } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const projects = [
  {
    title: "AnyWall",
    description: "A high-performance digital asset marketplace optimized for creative content creators and scalable distribution.",
    image: PlaceHolderImages.find(img => img.id === 'project-1')?.imageUrl || "",
    tags: ["Flutter", "Firebase", "Appwrite"],
    github: "https://github.com/Anish-002",
    live: "https://anywall.vercel.app",
    featured: true,
  },
  {
    title: "Enterprise Dashboard",
    description: "Complex administrative interface for data visualization and user permission management.",
    image: PlaceHolderImages.find(img => img.id === 'project-2')?.imageUrl || "",
    tags: ["Next.js", "Tailwind", "Firebase"],
    github: "https://github.com/Anish-002",
    live: "https://adminpannel-chi.vercel.app",
  },
  {
    title: "SRS Digital Portal",
    description: "End-to-end service ecosystem providing automated client onboarding and management solutions.",
    image: PlaceHolderImages.find(img => img.id === 'project-3')?.imageUrl || "",
    tags: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/Anish-002",
    live: "https://srs-online-servises.vercel.app",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 bg-slate-50/50 dot-grid">
      <div className="container mx-auto px-4 md:px-8 xl:px-12 max-w-[1400px]">
        <div className="flex flex-col xl:flex-row xl:items-end justify-between mb-24 gap-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-slate-200 text-slate-400 mb-6 font-mono text-[10px] font-bold tracking-widest uppercase">
              <Terminal className="w-3 h-3" />
              selected_builds
            </div>
            <h2 className="text-5xl md:text-7xl xl:text-8xl font-black mb-6 text-slate-900">Featured <span className="text-blue-600">Creations</span></h2>
            <p className="text-xl xl:text-2xl text-slate-500 font-medium">
              A curated selection of production-grade applications.
            </p>
          </div>
          <button className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold text-sm flex items-center gap-2 hover:bg-blue-600 transition-all shadow-xl self-start xl:self-end">
            browse_all_repos
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-14">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[3rem] border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="relative aspect-video overflow-hidden p-4">
                <div className="w-full h-full rounded-[2rem] overflow-hidden relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1200}
                    height={800}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                    <a href={project.live} target="_blank" className="p-4 bg-white text-slate-900 rounded-2xl hover:bg-blue-600 hover:text-white transition-all scale-90 group-hover:scale-100 duration-500">
                      <ExternalLink className="w-6 h-6" />
                    </a>
                    <a href={project.github} target="_blank" className="p-4 bg-white text-slate-900 rounded-2xl hover:bg-blue-600 hover:text-white transition-all scale-90 group-hover:scale-100 duration-500 delay-75">
                      <Github className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-10 md:p-12 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] md:text-xs font-mono font-bold uppercase tracking-widest text-slate-400 px-3 py-1 rounded-xl bg-slate-50 border border-slate-100">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl font-black mb-4 text-slate-900">{project.title}</h3>
                <p className="text-lg md:text-xl text-slate-500 leading-relaxed mb-10 flex-1 font-medium">
                  {project.description}
                </p>
                <div className="pt-8 border-t border-slate-50 flex items-center justify-between">
                  <a href={project.live} target="_blank" className="text-slate-900 font-bold text-sm font-mono uppercase tracking-widest flex items-center gap-3 hover:text-blue-600 transition-colors">
                    view_deployment
                    <ChevronRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
