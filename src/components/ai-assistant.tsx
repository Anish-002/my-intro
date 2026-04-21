"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Sparkles, Loader2, MessageSquare, Terminal } from "lucide-react";
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
        context: "Introduce Anish as a premium Flutter and Next.js developer who is an AI enthusiast." 
      });
      setIntroduction(res.introduction);
    } catch (error) {
      console.error(error);
      setIntroduction("Welcome! I am Anish's digital concierge. I help users discover his high-end work in Flutter and Next.js.");
    } finally {
      setLoading(false);
    }
  };

  const handleToggle = () => {
    if (!isOpen) fetchIntro();
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-10 right-10 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            className="absolute bottom-24 right-0 w-[calc(100vw-3rem)] max-w-md glass p-8 rounded-[3rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] border-white/20"
          >
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center shadow-lg">
                  <Bot className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-white">Anish's Agent</h4>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs text-muted-foreground font-bold uppercase tracking-widest">Neural Network Active</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors text-white">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="min-h-[200px] flex flex-col justify-center">
              {loading ? (
                <div className="flex flex-col items-center gap-6 text-center py-12">
                  <div className="relative">
                    <Loader2 className="w-16 h-16 text-primary animate-spin" />
                    <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-accent animate-pulse" />
                  </div>
                  <p className="text-sm text-muted-foreground font-bold uppercase tracking-widest animate-pulse">Generating Intelligence...</p>
                </div>
              ) : (
                <div className="space-y-8">
                  <div className="max-h-[400px] overflow-y-auto pr-4 custom-scrollbar">
                    <p className="text-lg leading-relaxed text-white/90 font-medium italic">
                      "{introduction}"
                    </p>
                  </div>
                  <div className="pt-6 flex flex-col sm:flex-row gap-4">
                     <button className="flex-1 py-4 glass rounded-full text-sm font-bold hover:bg-white hover:text-black transition-all border-white/20">View Case Studies</button>
                     <button className="flex-1 py-4 bg-primary text-white rounded-full text-sm font-bold hover:shadow-lg shadow-primary/30 transition-all">Direct Inquiry</button>
                  </div>
                </div>
              )}
            </div>
            
            <div className="absolute -top-10 -left-10 p-4 pointer-events-none opacity-5">
              <Terminal className="w-64 h-64 text-primary" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleToggle}
        className={`w-16 h-16 md:w-20 md:h-20 rounded-3xl flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-500 border-2 ${
          isOpen ? "bg-accent border-accent text-white" : "bg-primary border-primary text-white"
        }`}
      >
        {isOpen ? <X className="w-8 h-8 md:w-10 md:h-10" /> : <MessageSquare className="w-8 h-8 md:w-10 md:h-10" />}
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-2xl flex items-center justify-center border-4 border-background"
          >
            <Sparkles className="w-4 h-4 text-white" />
          </motion.div>
        )}
      </motion.button>
    </div>
  );
};