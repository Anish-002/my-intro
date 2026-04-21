"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Sparkles, Send, Loader2 } from "lucide-react";
import { aiAssistantIntroduction } from "@/ai/flows/ai-assistant-introduction";

export const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [introduction, setIntroduction] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchIntro = async () => {
    if (introduction) return;
    setLoading(true);
    try {
      const res = await aiAssistantIntroduction({ 
        context: "Introduce Anish as a modern developer passionate about AI and mobile experiences" 
      });
      setIntroduction(res.introduction);
    } catch (error) {
      console.error(error);
      setIntroduction("Hi! I'm Anish's AI assistant. I'm currently having trouble connecting, but you can explore Anish's work below!");
    } finally {
      setLoading(false);
    }
  };

  const handleToggle = () => {
    if (!isOpen) fetchIntro();
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-20 right-0 w-[calc(100vw-3rem)] max-w-sm md:w-96 glass-card p-6 rounded-[32px] shadow-2xl overflow-hidden"
          >
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-border">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Anish's AI Agent</h4>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] text-muted-foreground font-medium">Online</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-secondary rounded-full transition-colors">
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>

            <div className="min-h-[200px] flex flex-col justify-center">
              {loading ? (
                <div className="flex flex-col items-center gap-4 text-center py-8">
                  <Loader2 className="w-10 h-10 text-primary animate-spin" />
                  <p className="text-sm text-muted-foreground animate-pulse">Consulting neural networks...</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                    <p className="text-sm leading-relaxed text-foreground/80 italic">
                      "{introduction}"
                    </p>
                  </div>
                  <div className="pt-4 flex flex-col sm:flex-row gap-2">
                     <button className="flex-1 py-3 glass rounded-xl text-xs font-bold hover:bg-primary hover:text-white transition-all">View Resume</button>
                     <button className="flex-1 py-3 bg-primary text-white rounded-xl text-xs font-bold hover:opacity-90 transition-all">Book a Call</button>
                  </div>
                </div>
              )}
            </div>
            
            <div className="absolute top-0 right-0 p-4 pointer-events-none opacity-10">
              <Sparkles className="w-32 h-32 text-primary" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleToggle}
        className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 ${
          isOpen ? "bg-accent text-white" : "bg-primary text-white"
        }`}
      >
        {isOpen ? <X className="w-6 h-6 md:w-7 md:h-7" /> : <Bot className="w-6 h-6 md:w-7 md:h-7" />}
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute -top-1 -right-1 w-5 h-5 bg-accent rounded-full flex items-center justify-center"
          >
            <Sparkles className="w-3 h-3 text-white" />
          </motion.div>
        )}
      </motion.button>
    </div>
  );
};
