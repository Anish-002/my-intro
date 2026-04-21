
"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code, Sparkles } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const projects = [
  {
    title: "AI Personal Portfolio",
    description: "A state-of-the-art portfolio featuring GenAI integrations and seamless smooth animations.",
    image: PlaceHolderImages.find(img => img.id === 'project-3')?.imageUrl || "",
    tags: ["Next.js", "Genkit", "Tailwind"],
    github: "#",
    live: "#",
  },
  {
    title: "EcoTrack Mobile App",
    description: "Cross-platform mobile application for tracking personal carbon footprints and eco-habits.",
    image: PlaceHolderImages.find(img => img.id === 'project-1')?.imageUrl || "",
    tags: ["React Native", "Firebase", "TypeScript"],
    github: "#",
    live: "#",
  },
  {
    title: "DevNexus Frontend",
    description: "Highly responsive developer community dashboard with real-time project collaboration tools.",
    image: PlaceHolderImages.find(img => img.id === 'project-2')?.imageUrl || "",
    tags: ["React", "Framer Motion", "Shadcn"],
    github: "#",
    live: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-chart-3/10 text-chart-3 mb-4">
              <Code className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Featured Work</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">Crafting <span className="text-chart-3">Digital</span> Realities</h2>
            <p className="text-lg text-muted-foreground">
              A selection of projects where I've blended creative design with robust engineering.
            </p>
          </div>
          <button className="px-6 py-3 glass rounded-2xl font-bold text-sm flex items-center gap-2 hover:bg-white transition-all">
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card group rounded-3xl overflow-hidden flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                   <div className="flex gap-4">
                      <a href={project.github} className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href={project.live} className="p-3 bg-primary rounded-full text-white hover:bg-primary/80 transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                   </div>
                </div>
                {idx === 0 && (
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Featured
                  </div>
                )}
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-primary px-2 py-1 rounded-md bg-primary/5 border border-primary/10">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>
                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-xs font-medium text-muted-foreground">Case Study</span>
                  <button className="text-primary text-sm font-bold flex items-center gap-1 group/btn">
                    Details
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { ChevronRight } from "lucide-react";
