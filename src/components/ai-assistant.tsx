"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Sparkles, Loader2, MessageSquare, Terminal, Send, User } from "lucide-react";
import { aiAssistantChat } from "@/ai/flows/ai-assistant-introduction";

type Message = {
  role: 'user' | 'model';
  content: string;
};

export const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', content: "Hi! I'm Anish's digital concierge. How can I help you today? You can ask me about his skills, projects, or how to hire him." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);

    try {
      const res = await aiAssistantChat({ 
        message: userMessage,
        history: messages 
      });
      setMessages(prev => [...prev, { role: 'model', content: res.response }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', content: "Sorry, I encountered a neural glitch. Please try again or contact Anish directly via email." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            className="absolute bottom-24 right-0 w-[calc(100vw-3rem)] max-w-md bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 flex flex-col overflow-hidden h-[600px] max-h-[80vh]"
          >
            {/* Header */}
            <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Anish's Concierge</h4>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest opacity-70">Online</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar bg-slate-50/30">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 ${
                      msg.role === 'user' ? 'bg-slate-200' : 'bg-blue-100'
                    }`}>
                      {msg.role === 'user' ? <User className="w-4 h-4 text-slate-600" /> : <Bot className="w-4 h-4 text-blue-600" />}
                    </div>
                    <div className={`p-4 rounded-2xl text-sm font-medium leading-relaxed shadow-sm ${
                      msg.role === 'user' 
                        ? 'bg-slate-900 text-white rounded-tr-none' 
                        : 'bg-white border border-slate-100 text-slate-700 rounded-tl-none'
                    }`}>
                      {msg.content}
                    </div>
                  </div>
                </motion.div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="flex gap-3 items-center">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                      <Loader2 className="w-4 h-4 text-blue-600 animate-spin" />
                    </div>
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 bg-blue-300 rounded-full animate-bounce" />
                      <div className="w-1.5 h-1.5 bg-blue-300 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <div className="w-1.5 h-1.5 bg-blue-300 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSendMessage} className="p-6 bg-white border-t border-slate-100 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Anish's expertise..."
                className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-all font-medium"
              />
              <button 
                type="submit"
                disabled={!input.trim() || loading}
                className="bg-slate-900 text-white p-3 rounded-xl hover:bg-blue-600 transition-all shadow-md active:scale-95 disabled:opacity-50"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 md:w-20 md:h-20 rounded-3xl flex items-center justify-center shadow-2xl transition-all duration-500 border-2 ${
          isOpen ? "bg-white border-slate-200 text-slate-900" : "bg-slate-900 border-slate-900 text-white"
        }`}
      >
        {isOpen ? <X className="w-8 h-8 md:w-10 md:h-10" /> : <MessageSquare className="w-8 h-8 md:w-10 md:h-10" />}
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 rounded-2xl flex items-center justify-center border-4 border-white"
          >
            <Sparkles className="w-4 h-4 text-white" />
          </motion.div>
        )}
      </motion.button>
    </div>
  );
};
