'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { stats } from "@/data/stats";
import SectionTitle from './SectionTitle';

const Counter: React.FC<{ value: number; decimals?: number }> = ({ value, decimals = 0 }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = latest.toFixed(decimals);
            }
        });
    }, [springValue, decimals]);

    return <span ref={ref}>0</span>;
};

const Stats: React.FC = () => {
    return (
        <section id="stats" className="py-24 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20">
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto px-5 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <SectionTitle>
                        <h2 className="mb-4">Our Impact in Numbers</h2>
                    </SectionTitle>
                    <p className="text-foreground-accent text-lg">
                        Discover how Vintage is transforming the financial landscape with secure, scalable, and trusted solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{ y: -5 }}
                            className="group p-8 rounded-3xl bg-white/50 backdrop-blur-xl border border-white/20 shadow-xl shadow-gray-200/20 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300"
                        >
                            <div className="flex flex-col items-center text-center space-y-4">
                                <motion.div
                                    whileHover={{ rotate: 15, scale: 1.1 }}
                                    className="p-4 rounded-2xl bg-white shadow-inner shadow-gray-100 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300"
                                >
                                    {stat.icon}
                                </motion.div>

                                <div className="space-y-1">
                                    <h3 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground flex items-center justify-center">
                                        <Counter value={stat.value} decimals={stat.decimals} />
                                        <span className="text-primary ml-0.5">{stat.suffix}</span>
                                    </h3>
                                    <p className="text-sm font-semibold uppercase tracking-widest text-secondary/80">
                                        {stat.label}
                                    </p>
                                </div>

                                <p className="text-foreground-accent leading-relaxed text-sm">
                                    {stat.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;