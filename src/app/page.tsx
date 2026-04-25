
"use client";

import React, { useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Services } from "@/components/services";
import { Skills } from "@/components/skills";
import { Education } from "@/components/education";
import { Projects } from "@/components/projects";
import { ContactForm } from "@/components/contact-form";
import { AIAssistant } from "@/components/ai-assistant";
import { Footer } from "@/components/footer";
import { CodeBackground } from "@/components/code-background";
import { Process } from "@/components/process";
import { ExtraSkills } from "@/components/extra-skills";

export default function Home() {
  useEffect(() => {
    // Custom cursor effect
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor hidden lg:block pointer-events-none fixed z-[9999] w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/30 backdrop-blur-sm -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out';
    document.body.appendChild(cursor);

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      if (document.body.contains(cursor)) document.body.removeChild(cursor);
    };
  }, []);

  return (
    <main className="relative min-h-screen bg-white">
      <CodeBackground />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Process />
      <Experience />
      <Skills />
      <ExtraSkills />
      <Education />
      <Projects />
      <ContactForm />
      <Footer />
      <AIAssistant />
    </main>
  );
}
