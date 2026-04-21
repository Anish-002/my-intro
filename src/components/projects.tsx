"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code, Sparkles, ChevronRight, Play } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const projects = [
  {
    title: "AnyWall",
    description: "A premium digital wallpaper marketplace designed for high-end creative visuals and seamless distribution.",
    image: PlaceHolderImages.find(img => img.id === 'project-1')?.imageUrl || "",
    tags: ["Flutter", "Firebase", "Appwrite"],
    github: "#",
    live: "https://anywall.vercel.app",
    featured: true,
  },
  {
    title: "Enterprise Dashboard",
    description: "Advanced analytics platform for corporate data management, featuring real-time visualization and user controls.",
    image: PlaceHolderImages.find(img => img.id === 'project-2')?.imageUrl || "",
    tags: ["Next.js", "Tailwind", "Firebase"],
    github: "#",
    live: "https://adminpannel-chi.vercel.app",
  },
  {
    title: "SRS Digital Portal",
    description: "Comprehensive online service ecosystem providing automated solutions for professional client management.",
    image: PlaceHolderImages.find(img => img.id === 'project-3')?.imageUrl || "",
    tags: ["React", "Node.js", "MongoDB"],
    github: "#",
    live: "https://srs-online-servises.vercel.app",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 bg-[#020617]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/10 text-emerald-400 mb-6">
              <Code className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-widest">Featured Work</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8">Selected <span className="text-emerald-400">Creations</span></h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover a gallery of engineering excellence, where design meets advanced functionality.
            </p>
          </div>
          <button className="px-8 py-4 glass rounded-full font-bold text-sm flex items-center gap-2 hover:bg-white/10 transition-all border-white/20">
            Explore All Work
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`group glass-card rounded-[3rem] overflow-hidden flex flex-col h-full ${
                project.featured ? "md:col-span-2 lg:col-span-1 border-primary/30" : ""
              }`}
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1200}
                  height={800}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4 backdrop-blur-sm">
                  <a href={project.live} target="_blank" className="p-4 bg-primary text-white rounded-full hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-current" />
                  </a>
                  <a href={project.github} target="_blank" className="p-4 glass text-white rounded-full hover:scale-110 transition-transform">
                    <Github className="w-6 h-6" />
                  </a>
                </div>
                {project.featured && (
                  <div className="absolute top-6 left-6 bg-primary text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                    <Sparkles className="w-3 h-3" /> Featured Project
                  </div>
                )}
              </div>
              
              <div className="p-10 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-primary px-3 py-1 rounded-full glass border-primary/20 bg-primary/5">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-8 flex-1 text-sm">
                  {project.description}
                </p>
                <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                  <a href={project.live} target="_blank" className="text-white font-bold text-sm flex items-center gap-2 group/link">
                    View Case Study
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
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