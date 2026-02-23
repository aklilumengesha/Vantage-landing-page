'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRight, FaChartLine, FaShieldHalved, FaWallet } from 'react-icons/fa6';

import AppStoreButton from './AppStoreButton';
import PlayStoreButton from './PlayStoreButton';
import Container from './Container';

import { heroDetails } from '@/data/hero';

const FloatingCard = ({ icon: Icon, title, value, delay, className }: { icon: any, title: string, value: string, delay: number, className: string }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{
            opacity: 1,
            scale: 1,
            y: [0, -10, 0],
        }}
        transition={{
            opacity: { duration: 0.5, delay },
            scale: { duration: 0.5, delay },
            y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay + 0.5
            }
        }}
        className={`absolute hidden lg:flex items-center gap-3 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/20 z-20 ${className}`}
    >
        <div className="bg-primary/10 p-2 rounded-lg text-primary">
            <Icon className="w-5 h-5" />
        </div>
        <div>
            <p className="text-xs text-foreground/60 font-medium">{title}</p>
            <p className="text-sm font-bold text-foreground">{value}</p>
        </div>
    </motion.div>
);

const Hero: React.FC = () => {
    return (
        <section
            id="hero"
            className="relative min-h-[90vh] flex items-center justify-center pt-32 md:pt-40 pb-20 overflow-hidden"
        >
            {/* Background Effects */}
            <div className="absolute inset-0 -z-10 bg-[#FAFAFB]">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-secondary/10 rounded-full blur-[100px]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            </div>

            <Container className="relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full mb-8"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        <span className="text-sm font-bold text-primary tracking-wide uppercase">New: AI-Powered Insights</span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground mb-6 leading-[1.1]"
                    >
                        <span className="block">Take Control of Your</span>
                        <span className="bg-gradient-to-r from-primary via-primary-accent to-primary bg-clip-text text-transparent">Financial Future</span>
                    </motion.h1>

                    {/* Subheading */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed"
                    >
                        {heroDetails.subheading}
                    </motion.p>

                    {/* Actions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
                    >
                        <div className="flex items-center gap-4">
                            <AppStoreButton dark />
                            <PlayStoreButton dark />
                        </div>
                    </motion.div>

                    {/* Mockup Container */}
                    <div className="relative mx-auto max-w-[800px]">
                        {/* Floating Feature Cards */}
                        <FloatingCard
                            icon={FaWallet}
                            title="Total Balance"
                            value="$12,450.00"
                            delay={0.8}
                            className="top-20 -left-16"
                        />
                        <FloatingCard
                            icon={FaChartLine}
                            title="Monthly Growth"
                            value="+18.4%"
                            delay={1}
                            className="bottom-40 -right-20"
                        />
                        <FloatingCard
                            icon={FaShieldHalved}
                            title="Security Score"
                            value="98/100"
                            delay={1.2}
                            className="top-40 -right-24"
                        />

                        {/* Main Mockup */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="relative z-10 perspective-1000"
                        >
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-primary/20 rounded-[40px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <Image
                                    src={heroDetails.centerImageSrc}
                                    width={700}
                                    height={500}
                                    quality={100}
                                    priority
                                    unoptimized
                                    alt="app mockup"
                                    className="relative rounded-2xl md:rounded-[32px] shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;
