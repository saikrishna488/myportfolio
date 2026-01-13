"use client";

import React from 'react';
import { motion } from 'framer-motion';

const certGroups = [
  {
    area: "AI & Data Science",
    certs: [
      { title: "Supervised Machine Learning", issuer: "Stanford", date: "2025" },
      { title: "Machine Learning with Python", issuer: "IBM", date: "2025" },
      { title: "Python for Data Science", issuer: "IBM", date: "2023" }
    ]
  },
  {
    area: "Cloud & Infrastructure",
    certs: [
      { title: "Azure Cloud Services", issuer: "Microsoft", date: "2023" },
      { title: "Docker", issuer: "IBM", date: "2023" },
      { title: "AWS Cloud Foundations", issuer: "AWS", date: "2022" }
    ]
  },
  {
    area: "Engineering Mastery",
    certs: [
      { title: "Advanced React", issuer: "Meta", date: "2023" },
      { title: "Back-End with Node & Express", issuer: "IBM", date: "2023" },
      { title: "Rest API / Nodejs", issuer: "HackerRank", date: "2023" }
    ]
  }
];

const Credentials = () => {
  return (
    <section className="px-6 py-10 max-w-5xl mx-auto border-t border-slate-100">
      {/* Section Label */}
      <div className="flex items-center gap-6 mb-12">
        <span className="text-[11px] font-black uppercase tracking-[0.5em] text-slate-400 whitespace-nowrap">
          Credentials
        </span>
        <div className="h-[1px] w-full bg-gradient-to-r from-slate-200 to-transparent" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {certGroups.map((group, idx) => (
          <motion.div
            key={group.area}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-[9px] font-bold uppercase tracking-[0.2em] text-blue-500 mb-8 border-b border-blue-50 pb-2 inline-block">
              {group.area}
            </h3>
            
            <div className="space-y-6">
              {group.certs.map((cert) => (
                <div key={cert.title} className="group cursor-default">
                  <div className="flex justify-between items-start gap-4">
                    <h4 className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                      {cert.title}
                    </h4>
                    <span className="text-[9px] font-mono text-slate-300 group-hover:text-slate-400 transition-colors">
                      {cert.date}
                    </span>
                  </div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 mt-1">
                    {cert.issuer}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Subtle Hint for more */}
      <p className="mt-12 text-[9px] text-slate-400 italic text-center md:text-left">
        + Additional certifications in SQL, Cybersecurity (Cisco), and JavaScript (HackerRank).
      </p>
    </section>
  );
};

export default Credentials;