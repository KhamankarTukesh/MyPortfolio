import React from 'react';
import { motion } from 'framer-motion'; // Smooth entry ke liye
import { PiBagSimpleFill } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";
import { MdLightbulbCircle } from "react-icons/md";

function About() {
    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <section className="bg-background-dark text-white py-24 px-6 lg:px-14 min-h-screen relative overflow-hidden">
            
            {/* Background Decorative Glow (Consistent with Home Page) */}
            <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-7xl mx-auto"
            >

                {/* 1. Journey & Philosophy Section */}
                <div className="flex flex-col lg:flex-row gap-16 items-start mb-32">
                    
                    {/* Left: Journey Text */}
                    <motion.div variants={fadeInUp} className="flex-1">
                        <h1 className="text-5xl md:text-6xl font-black mb-10 tracking-tight mt-14">
                            My <span className='inline-block drop-shadow-[0_0_15px_rgba(57,255,20,0.6)] text-primary'>Journey</span>
                        </h1>
                        
                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed max-w-2xl">
                            <p>I am a Computer Science Engineering student focused on building modern, scalable web applications with a strong emphasis on clean architecture and user experience.</p>
                            <p>Alongside web development, I am exploring <span className="text-white font-semibold">AI-driven automation</span>, experimenting with tools like <span className="text-primary/80">n8n</span> to understand how intelligent systems can optimize processes.</p>
                            <p>I believe great software is built by combining strong fundamentals, continuous learning, and real-world problem solving.</p>
                        </div>

                        {/* Currently Working Badge */}
                        <motion.div 
                            whileHover={{ x: 10 }}
                            className="mt-12 inline-flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl shadow-xl group hover:border-primary/30 transition-all cursor-default"
                        >
                            <div className="bg-[#1a1a1a] p-3 rounded-xl text-primary shadow-[0_0_15px_rgba(57,255,20,0.2)]">
                                <PiBagSimpleFill size={24} />
                            </div>
                            <div>
                                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1">CURRENTLY WORKING AT</p>
                                <div className="flex items-center gap-2">
                                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors">TantrataSolutions Pvt. Ltd.</h3>
                                    <GoDotFill className="text-primary animate-pulse shadow-[0_0_10px_#39FF14]" />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right: Philosophy Card Container */}
                    <motion.div 
                        variants={fadeInUp}
                        className="lg:w-[420px] sticky top-32 group w-full"
                    >
                        {/* The Neon Orb Background Glow */}
                        <div className="absolute -inset-10 bg-primary/20 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-glow pointer-events-none"></div>

                        <div className="relative bg-[#0d0d0d] border border-white/5 p-12 rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500 group-hover:border-primary/20 group-hover:scale-[1.02]">

                            {/* Background Decorative Quote */}
                            <div className="absolute -top-4 -right-2 text-[#222] text-[10rem] font-serif opacity-30 select-none group-hover:text-primary/10 transition-colors duration-700">”</div>

                            {/* Glowing Icon Source */}
                            <div className="relative mb-8 inline-block">
                                <div className="absolute inset-0 bg-primary/40 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <MdLightbulbCircle className="relative text-primary text-6xl drop-shadow-[0_0_20px_rgba(57,255,20,0.8)]" />
                            </div>

                            <p className="text-primary uppercase tracking-[0.2em] text-[11px] font-black mb-6">Philosophy</p>

                            <h2 className="text-white text-[24px] md:text-[26px] font-bold leading-[1.4] italic mb-10 relative z-10">
                                "Great software is not just about code; it's about <span className="text-primary">solving problems</span> efficiently."
                            </h2>

                            {/* Neon Status Bar with Glow */}
                            <div className="relative w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                                <motion.div 
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "45%" }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                    className="absolute top-0 left-0 h-full bg-primary shadow-[0_0_20px_#39FF14]"
                                ></motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default About;