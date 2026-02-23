'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { logos } from '@/data/logos';

const Logos: React.FC = () => {
    // Duplicate logos for seamless marquee
    const marqueeLogos = [...logos, ...logos, ...logos];

    return (
        <section id="logos" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-5 mb-12">
                <div className="flex flex-col items-center justify-center space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-secondary/10 text-secondary ring-1 ring-inset ring-secondary/20 uppercase tracking-wider"
                    >
                        Partnerships
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold text-center tracking-tight text-foreground"
                    >
                        Trusted by <span className="text-secondary">2000+</span> customers worldwide
                    </motion.h2>
                </div>
            </div>

            <div className="relative group">
                {/* Fade Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                <div className="flex w-full overflow-hidden">
                    <motion.div
                        className="flex flex-nowrap shrink-0 gap-12 sm:gap-20 py-4"
                        animate={{
                            x: [0, -1035], // Adjust based on content width roughly
                        }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        {marqueeLogos.map((logo, index) => (
                            <div
                                key={`${logo.name}-${index}`}
                                className="flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-110 cursor-pointer"
                            >
                                {logo.svg("h-8 sm:h-10 w-auto")}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Logos;