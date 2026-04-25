"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ChevronRight, Terminal } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const projects = [
  {
    title: "AnyWall",
    description:
      "A wallpaper app built for people who actually care about clean and high-quality visuals. Instead of random clutter, it focuses on curated content with a smooth browsing experience.",
    image: PlaceHolderImages.find(img => img.id === 'project-1')?.imageUrl || "",
    tags: ["Flutter", "Firebase"],
    github: "https://github.com/Anish-002",
    live: "https://anywall.vercel.app",
  },
  {
    title: "Admin Dashboard",
    description:
      "A clean and fast dashboard to manage business data without confusion. Built to handle real usage — not just demo data — with performance and simplicity in mind.",
    image: PlaceHolderImages.find(img => img.id === 'project-2')?.imageUrl || "",
    tags: ["Next.js", "Tailwind", "Firebase"],
    github: "https://github.com/Anish-002",
    live: "https://adminpannel-chi.vercel.app",
  },
  {
    title: "SRS Digital Portal",
    description:
      "A service platform that simplifies client onboarding and management. The goal was to reduce manual work and make the process faster and more organized.",
    image: PlaceHolderImages.find(img => img.id === 'project-3')?.imageUrl || "",
    tags: ["React", "Node.js"],
    github: "https://github.com/Anish-002",
    live: "https://srs-online-servises.vercel.app",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-slate-50/50 dot-grid">
      <div className="w-full px-6 md:px-12 xl:px-24">

        {/* HEADER */}
        <div className="flex flex-col xl:flex-row xl:items-end justify-between mb-20 gap-10">
          <div className="max-w-4xl">

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-slate-200 text-slate-400 mb-6 font-mono text-[10px] font-bold tracking-widest uppercase">
              <Terminal className="w-3 h-3" />
              My Work
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 text-slate-900">
              Projects that actually solve something.
            </h2>

            <p className="text-lg md:text-xl text-slate-500 font-medium">
              Not just practice projects — these are things I built to solve real problems and improve real user experience.
            </p>

          </div>

          <a
            href="https://github.com/Anish-002"
            target="_blank"
            className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-blue-600 transition-all shadow-lg self-start xl:self-end"
          >
            View all on GitHub
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        {/* PROJECT CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[3rem] border border-slate-200 shadow-lg overflow-hidden flex flex-col h-full hover:shadow-2xl transition-all duration-500 group"
            >

              {/* IMAGE */}
              <div className="relative aspect-video overflow-hidden p-5">
                <div className="w-full h-full rounded-[2rem] overflow-hidden relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={500}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                    <a href={project.live} target="_blank" className="p-4 bg-white text-slate-900 rounded-2xl hover:bg-blue-600 hover:text-white transition-all scale-90 group-hover:scale-100 duration-500 shadow-lg">
                      <ExternalLink className="w-6 h-6" />
                    </a>
                    <a href={project.github} target="_blank" className="p-4 bg-white text-slate-900 rounded-2xl hover:bg-blue-600 hover:text-white transition-all scale-90 group-hover:scale-100 duration-500 delay-75 shadow-lg">
                      <Github className="w-6 h-6" />
                    </a>
                  </div>

                </div>
              </div>

              {/* CONTENT */}
              <div className="p-10 flex-1 flex flex-col">

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-mono font-bold uppercase tracking-widest text-slate-400 px-3 py-1 rounded-lg bg-slate-50 border border-slate-100">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* TITLE */}
                <h3 className="text-2xl font-black mb-3 text-slate-900">
                  {project.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-base text-slate-500 leading-relaxed mb-8 flex-1 font-medium">
                  {project.description}
                </p>

                {/* CTA */}
                <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                  <a href={project.live} target="_blank" className="text-slate-900 font-black text-xs font-mono uppercase tracking-widest flex items-center gap-2 hover:text-blue-600 transition-colors">
                    View Project
                    <ChevronRight className="w-4 h-4" />
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