"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Perspective = () => {
  return (
    <section className="px-6 py-10 max-w-5xl mx-auto border-t border-slate-100">
      {/* Section Label */}
      <div className="flex items-center gap-6 mb-12">
        <span className="text-[11px] font-black uppercase tracking-[0.5em] text-slate-400 whitespace-nowrap">
          Perspective
        </span>
        <div className="h-[1px] w-full bg-gradient-to-r from-slate-200 to-transparent" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Corrected Industry Experience Block */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-blue-500 mb-6">
            Industry Experience
          </h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h4 className="text-lg font-bold text-slate-900">SDE Intern</h4>
                <span className="text-[10px] font-mono text-slate-400 italic">May — July 2025</span>
              </div>
              <p className="text-sm font-semibold text-slate-600 uppercase tracking-tight">
                InnoRize Enterprises Pvt Ltd
              </p>
            </div>
            
            <ul className="space-y-3 text-sm text-slate-500 border-l border-slate-200 pl-4">
              <li className="leading-relaxed">
                Developed and maintained full-stack web applications utilizing React, Node.js, and MongoDB.
              </li>
              <li className="leading-relaxed">
                Streamlined application deployment using CI/CD pipelines and Docker on AWS infrastructure.
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Core Interests Block */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-blue-500 mb-6">
            Focus Areas
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Scalable Full-Stack Systems",
              "Cloud Architecture (AWS)",
              "DevOps & Automation",
              "Social Informatics",
              "Linux Systems"
            ].map((interest) => (
              <span 
                key={interest}
                className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-50 border border-slate-100 rounded"
              >
                {interest}
              </span>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-8 leading-relaxed italic">
            Focusing on the intersection of robust backend engineering and 
            user-centric frontend performance.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Perspective;