"use client";

import React from 'react';
import { motion } from 'framer-motion';

const works = [
  {
    title: "Hackermars",
    context: "System Design",
    desc: "A production-grade hackathon hosting platform. Engineered with scalable backend logic for seamless organizer workflows and participant discovery.",
    tech: ["Next.js", "React", "Node.js", "Express", "MongoDB"]
  },
  {
    title: "Wribate",
    context: "Product Thinking",
    desc: "A minimal, text-first social platform focused on intentional usage. Built with a disciplined approach to distraction-free UI/UX.",
    tech: ["Next.js", "React", "Node.js", "Express", "MongoDB"]
  },
  {
    title: "TastyGo",
    context: "Full-Stack Logistics",
    desc: "A comprehensive food delivery system covering dual-interface user flows, restaurant listings, and complex ordering logic.",
    tech: ["Next.js", "React", "Node.js", "Express", "MongoDB"]
  },
  {
    title: "WChat",
    context: "Real-time Systems",
    desc: "Real-time messaging suite focusing on asynchronous systems, random user matching, and persistent WebSocket communication.",
    tech: ["Next.js", "React", "Node.js", "Express", "MongoDB", "Socket.io"]
  },
  {
    title: "ApnaInterview Cracker",
    context: "EdTech",
    desc: "Preparation platform designed to help users master technical interviews through structured content and practice-oriented features.",
    tech: ["Next.js", "React", "Node.js", "Express", "MongoDB"]
  }
];

const MyWork = () => {
  return (
    <section className="px-6 py-10 max-w-5xl mx-auto border-t border-slate-100">
      {/* Section Label & Line */}
      <div className="flex items-center gap-6 mb-24">
        <span className="text-[11px] font-black uppercase tracking-[0.5em] text-slate-400 whitespace-nowrap">
          My Work
        </span>
        <div className="h-[1px] w-full bg-gradient-to-r from-slate-200 to-transparent" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
        {works.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group flex flex-col"
          >
            {/* Project Context */}
            <div className="mb-6 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 group-hover:text-blue-500 transition-colors">
                {item.context}
              </span>
            </div>

            {/* Project Title */}
            <h3 className="text-2xl font-bold text-slate-900 mb-5 tracking-tight group-hover:translate-x-1 transition-transform duration-300">
              {item.title}
            </h3>

            {/* Project Description with custom quote-style border */}
            <p className="text-slate-500 text-sm leading-relaxed mb-10 pl-6 border-l border-slate-200 relative group-hover:border-blue-500 transition-colors">
              {item.desc}
            </p>

            {/* Fixed Tech Stack baseline */}
            <div className="flex flex-wrap gap-x-4 gap-y-2 mt-auto pt-6">
              {item.tech.map((t) => (
                <span 
                  key={t} 
                  className="text-[9px] font-bold uppercase tracking-widest text-slate-300 group-hover:text-slate-500 transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MyWork;