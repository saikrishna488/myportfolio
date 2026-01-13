"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from "@/components/ui/badge";

const About = () => {
    return (
        <section className="px-6 py-24 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                
                {/* Left Column: Visual accent or simple title */}
                <div className="hidden md:block md:col-span-1">
                    <div className="w-[2px] h-32 bg-gradient-to-b from-blue-500 to-transparent opacity-50" />
                </div>

                {/* Right Column: Content (Left Aligned) */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="md:col-span-11 text-left"
                >

                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900">
                        Hi, I’m Sai Krishna Reddy Pakkir
                    </h2>

                    <p className="text-xl md:text-2xl font-medium text-blue-600 mb-8">
                        MS in Computer Science @ UCM • Full-Stack Developer
                    </p>

                    <div className="space-y-6 text-lg text-slate-600 leading-relaxed max-w-3xl">
                        <p>
                            I am a Computer Science graduate student with a deep focus on building 
                            <span className="text-slate-900 font-medium"> real-world web applications</span>. 
                            My expertise bridges the gap between complex backend logic in <span className="font-mono text-sm bg-slate-100 px-1 rounded text-blue-700">Python & Django & Nodejs</span> 
                            and fluid, responsive frontends using <span className="font-mono text-sm bg-slate-100 px-1 rounded text-blue-700">React & Next.js</span>.
                        </p>

                        <p>
                            I value <span className="text-slate-900 font-semibold italic underline decoration-blue-500/30">clean architecture</span> and 
                            reliable systems—principles that have stood the test of time—while continuously 
                            adopting modern tools like <span className="text-slate-900">Turbopack</span> and <span className="text-slate-900">Node.js</span> to deliver 
                            high-performance user experiences.
                        </p>
                    </div>

            
                </motion.div>
            </div>
        </section>
    );
};

export default About;