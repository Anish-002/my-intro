"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Sparkles, Code2, Rocket } from "lucide-react";
import Link from "next/link";

const titles = ["Mobile Developer", "Frontend Expert", "AI Enthusiast", "Quick Learner"];

export const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const speed = isDeleting ? 50 : 150;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentTitle) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentTitle.substring(0, displayText.length - 1)
            : currentTitle.substring(0, displayText.length + 1)
        );
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-12 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/20 text-primary mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-xs md:text-sm font-semibold uppercase tracking-wider">Available for New Projects</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8"
          >
            Hi, I'm <span className="text-gradient">Anish</span> <br />
            <span className="text-foreground/90">I am a </span>
            <span className="block md:inline-block relative">
              <span className="text-primary inline-block min-w-[240px] md:min-w-[400px] text-center">
                {displayText}
                <span className="w-1 h-8 md:h-12 bg-primary inline-block ml-1 animate-pulse align-middle" />
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed px-4"
          >
            Passionate about building seamless digital experiences. Quick learner with 
            deep expertise in Mobile and Web development, always exploring the frontiers of AI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
          >
            <Link
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-2xl font-bold text-lg hover:shadow-xl hover:shadow-primary/30 transition-all flex items-center justify-center gap-2 group"
            >
              View My Work
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 glass text-foreground rounded-2xl font-bold text-lg hover:bg-white/80 transition-all flex items-center justify-center gap-2"
            >
              Get in Touch
              <Rocket className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12"
          >
            {[
              { label: "Projects Completed", value: "15+" },
              { label: "Learning Hours", value: "2k+" },
              { label: "Tech Stack", value: "10+" },
              { label: "Happy Clients", value: "05+" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-4 glass rounded-2xl">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-1">{stat.value}</h3>
                <p className="text-[10px] md:text-sm text-muted-foreground uppercase tracking-wider font-semibold">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
