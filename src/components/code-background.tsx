"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const codeSnippets = [
  "Widget build(BuildContext context) {",
  "export default function Home() {",
  "const [data, setData] = useState();",
  "import { genkit } from 'genkit';",
  "await ai.generate({ prompt });",
  "const db = getFirestore();",
  "return <div className='flex' />",
  "async function fetchData() {",
  "void main() => runApp(MyApp());",
  "npm run dev",
  "git commit -m 'feat: new portfolio'",
];

type Stream = {
  id: number;
  left: string;
  delay: number;
  duration: number;
  text: string;
  fontSize: string;
};

export const CodeBackground = () => {
  const [streams, setStreams] = useState<Stream[]>([]);

  useEffect(() => {
    // Generate streams only on client side to avoid hydration mismatch
    const newStreams = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 10,
      duration: 15 + Math.random() * 20,
      text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
      fontSize: `${Math.random() * 0.5 + 0.7}rem`,
    }));
    setStreams(newStreams);
  }, []);

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none select-none opacity-[0.04]">
      {streams.map((stream) => (
        <motion.div
          key={stream.id}
          initial={{ y: -100, opacity: 0 }}
          animate={{ 
            y: ["0vh", "110vh"],
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: stream.duration,
            repeat: Infinity,
            delay: stream.delay,
            ease: "linear",
          }}
          className="absolute font-mono whitespace-nowrap text-slate-900"
          style={{ 
            left: stream.left,
            fontSize: stream.fontSize,
          }}
        >
          {stream.text}
        </motion.div>
      ))}
    </div>
  );
};
