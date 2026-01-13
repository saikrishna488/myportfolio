"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Connect = () => {
  const links = [
    { name: 'LinkedIn', url: 'https://linkedin.com/in/saikrishna488' }, // [cite: 40]
    { name: 'GitHub', url: 'https://github.com/saikrishna488' }, // [cite: 39]
    { name: 'Portfolio', url: 'https://saikrishna488.github.io/portfolio' } // [cite: 41]
  ];

  return (
    <section id="contact" className="px-6 py-10 max-w-5xl mx-auto border-t border-slate-100 mb-20">
      <div className="flex items-center gap-6 mb-16">
        <span className="text-[11px] font-black uppercase tracking-[0.5em] text-slate-400 whitespace-nowrap">
          Connect
        </span>
        <div className="h-[1px] w-full bg-gradient-to-r from-slate-200 to-transparent" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
        {/* Contact Info */}
        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="space-y-1"
          >
            <p className="text-[10px] font-bold uppercase tracking-widest text-blue-500">Email</p>
            <a href="mailto:saikrishnapakkir@gmail.com" className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors">
              saikrishnapakkir@gmail.com
            </a> 
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="space-y-1"
          >
            <p className="text-[10px] font-bold uppercase tracking-widest text-blue-500">Location</p>
            <p className="text-slate-600 font-medium">Overland Park, KS</p> 
          </motion.div>
        </div>

        {/* Professional Links */}
        <div className="flex flex-wrap gap-x-8 gap-y-4 md:justify-end">
          {links.map((link, idx) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-slate-900 transition-all border-b border-transparent hover:border-slate-900 pb-1"
            >
              {link.name}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Subtle Copyright Baseline */}
      <div className="mt-24 pt-8 border-t border-slate-50 flex justify-between items-center text-[9px] font-bold uppercase tracking-widest text-slate-300">
        <span>Built with Next.js & Framer Motion</span>
        <span>© 2026 Sai Krishna Reddy Pakkir</span>
      </div>
    </section>
  );
};

export default Connect;