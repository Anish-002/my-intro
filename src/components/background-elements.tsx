
"use client";

import React from "react";
import { motion } from "framer-motion";

export const BackgroundElements = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] animate-blob" />
      <div className="absolute top-[20%] right-[-10%] w-[35%] h-[35%] bg-accent/10 rounded-full blur-[100px] animate-blob animation-delay-2000" />
      <div className="absolute bottom-[-10%] left-[20%] w-[45%] h-[45%] bg-chart-3/10 rounded-full blur-[140px] animate-blob animation-delay-4000" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
    </div>
  );
};
