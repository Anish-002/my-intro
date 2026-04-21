
"use client";

import React, { useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Education } from "@/components/education";
import { Projects } from "@/components/projects";
import { ContactForm } from "@/components/contact-form";
import { AIAssistant } from "@/components/ai-assistant";
import { BackgroundElements } from "@/components/background-elements";
import { Footer } from "@/components/footer";

export default function Home() {
  useEffect(() => {
    // Custom cursor effect logic can go here if needed
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor hidden md:block';
    document.body.appendChild(cursor);

    const moveCursor = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
    };

    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.body.removeChild(cursor);
    };
  }, []);

  return (
    <main className="relative min-h-screen">
      <BackgroundElements />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <ContactForm />
      <Footer />
      <AIAssistant />
    </main>
  );
}
