import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import { testimonials } from '@/data/testimonials';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

const Testimonials: React.FC = () => {
    return (
        <section className="relative py-10">
            {/* Decorative background element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-gradient-to-r from-primary/10 to-secondary/10 blur-3xl -z-10 rounded-full opacity-50" />

            <motion.div
                className="grid gap-8 lg:grid-cols-3 w-full"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ y: -10, transition: { duration: 0.2 } }}
                        className="relative group h-full"
                    >
                        <div className="h-full p-8 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/40 shadow-xl transition-all duration-300 group-hover:shadow-2xl group-hover:bg-white/60">
                            <div className="flex flex-col h-full">
                                <div className="flex items-center mb-6">
                                    <div className="relative w-14 h-14 mr-4 shrink-0">
                                        <Image
                                            src={testimonial.avatar}
                                            alt={`${testimonial.name}`}
                                            fill
                                            className="rounded-full object-cover shadow-lg border-2 border-primary/20"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-secondary tracking-tight">{testimonial.name}</h3>
                                        <p className="text-sm text-foreground-accent/80 font-medium">{testimonial.role}</p>
                                    </div>
                                </div>

                                <div className="flex mb-4 gap-1">
                                    {[...Array(testimonial.rating || 5)].map((_, i) => (
                                        <FiStar key={i} className="text-primary fill-primary" size={18} />
                                    ))}
                                </div>

                                <blockquote className="flex-grow">
                                    <p className="text-foreground-accent leading-relaxed italic">
                                        &quot;{testimonial.message}&quot;
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Testimonials;
