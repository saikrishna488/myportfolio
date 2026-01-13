"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section className="px-6 py-10 max-w-5xl mx-auto border-t border-slate-100">
      {/* Section Label */}
      <div className="flex items-center gap-6 mb-12">
        <span className="text-[11px] font-black uppercase tracking-[0.5em] text-slate-400 whitespace-nowrap">
          Background
        </span>
        <div className="h-[1px] w-full bg-gradient-to-r from-slate-200 to-transparent" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Education Block */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-blue-500 mb-6">
            Education
          </h3>
          <div className="space-y-2">
            <div className="flex justify-between items-baseline">
              <h4 className="text-xl font-bold text-slate-900">MS in Computer Science</h4>
              <span className="text-xs font-mono text-slate-400">2025</span>
            </div>
            <p className="text-slate-600 font-medium italic">University of Central Missouri</p>
            <p className="text-sm text-slate-500 leading-relaxed mt-4">
              Focusing on advanced software engineering paradigms and scalable system architectures.
            </p>
          </div>
        </motion.div>

        {/* Publication Block */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-blue-500 mb-6">
            Publication
          </h3>
          <div className="space-y-3">
            <h4 className="text-lg font-bold text-slate-900 leading-snug group cursor-default">
              "From Mindless Scrolling to Meaningful Conversations: A New Paradigm in Social Networking"
            </h4>
            <p className="text-sm text-slate-500 italic">Zenodo Repository</p>
            <div className="pt-2">
               <span className="inline-block px-3 py-1 text-[10px] font-mono text-slate-400 bg-slate-50 border border-slate-100 rounded">
                 DOI: 10.5281/zenodo.15104278
               </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;