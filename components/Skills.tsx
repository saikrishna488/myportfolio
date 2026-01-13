"use client";

import React from 'react';
import { motion } from 'framer-motion';

const stack = [
  { category: "Languages", items: ["Python", "JavaScript", "Java", "C/C++", "TypeScript"] },
  { category: "Frameworks", items: ["Next.js", "React", "Node.js", "Express.js", "Django"] },
  { category: "Infrastructure", items: ["AWS", "Docker", "CI/CD", "Linux", "Azure", "Git"] },
  { category: "Data Architecture", items: ["MongoDB", "PostgreSQL", "MySQL", "REST APIs", "Postman"] }
];

const Capabilities = () => {
  return (
    <section className="px-6 py-10 max-w-5xl mx-auto border-t border-slate-100">
      {/* Section Label */}
      <div className="flex items-center gap-6 mb-20">
        <span className="text-[11px] font-black uppercase tracking-[0.5em] text-slate-400 whitespace-nowrap">
          Capabilities
        </span>
        <div className="h-[1px] w-full bg-gradient-to-r from-slate-200 to-transparent" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
        {stack.map((group, idx) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-6 group-hover:text-blue-600 transition-colors">
              {group.category}
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 bg-white border border-slate-200 rounded-full hover:border-blue-400 hover:bg-blue-50/50 hover:text-blue-600 hover:shadow-sm transition-all duration-300 cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Capabilities;