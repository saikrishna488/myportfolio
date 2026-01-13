"use client";

import React from 'react';
import { motion } from 'framer-motion';

const awards = [
  { title: "Hagan International Scholarship", detail: "Full tuition scholarship for MS in USA", year: "2025" },
  { title: "Project Saadhana (Google Cloud Initiative)", detail: "Winner", year: "2024" },
  { title: "Red Bull Basement", detail: "National Participant", year: "2024" },
  { title: "College Project Expo", detail: "1st Prize, Technical Presentation", year: "2024" },
  { title: "Buzzler Technologies", detail: "Professional Job Offer", year: "2023" }
];

const Recognition = () => {
  return (
    <section className="px-6 py-10 max-w-5xl mx-auto border-t border-slate-100">
      <div className="flex items-center gap-6 mb-12">
        <span className="text-[11px] font-black uppercase tracking-[0.5em] text-slate-400 whitespace-nowrap">
          Recognition
        </span>
        <div className="h-[1px] w-full bg-gradient-to-r from-slate-200 to-transparent" />
      </div>

      <div className="space-y-10">
        {awards.map((award, idx) => (
          <motion.div
            key={award.title}
            initial={{ opacity: 0, x: -5 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-12 gap-2 items-baseline group"
          >
            <div className="md:col-span-2 text-[10px] font-mono text-slate-400 uppercase tracking-widest">
              {award.year}
            </div>
            <div className="md:col-span-10">
              <h4 className="text-md font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                {award.title}
              </h4>
              <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-medium">
                {award.detail}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Recognition;