import React from 'react'
import { PiBagSimpleFill } from "react-icons/pi";
import {  GoDotFill } from "react-icons/go";
import { MdLightbulbCircle } from "react-icons/md";


function About() {
    return (
        <section className="bg-background-dark text-white py-24 px-6 lg:px-14 min-h-screen">
            <div className="max-w-7xl mx-auto">

                {/* 1. Journey & Philosophy Section */}
                <div className="flex flex-col lg:flex-row gap-16 items-start mb-32">
                    {/* Left: Journey Text */}
                    <div className="flex-1">
                        <h1 className="text-5xl font-black mb-10 tracking-tight mt-14">My <span className='inline-block drop-shadow-[0_0_10px_rgba(57,255,20,0.8)]  animate-pulse scale-100 hover:scale-110 transition-transform duration-700 text-primary'>Journey</span></h1>
                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed max-w-2xl">
                            <p>I started my journey by exploring the fundamentals of web development, driven by a curiosity about how things work. What began as simple HTML experiments gradually evolved into a deep passion for building scalable applications and solving complex architectural challenges.</p>
                            <p>Over the years, I have refined my skills within the React ecosystem and modern backend technologies. I focus on delivering seamless user experiences supported by robust, secure, and maintainable architectures.</p>
                            <p>My work blends strong technical expertise with a user-centric mindset. Whether optimizing database queries or refining micro-interactions, I ensure every line of code contributes to a meaningful solution.</p>
                        </div>

                        {/* Currently Working Badge */}
                        <div className="mt-12 inline-flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl shadow-xl group hover:border-primary/30 transition-all">
                            <div className="bg-[#1a1a1a] p-3 rounded-xl text-primary">
                                <PiBagSimpleFill size={24} />
                            </div>
                            <div>
                                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1">CURRENTLY WORKING AT</p>
                                <div className="flex items-center gap-2">
                                    <h3 className="text-lg font-bold">TantrataSolutions Pvt. Ltd.</h3>
                                    <GoDotFill className="text-primary animate-pulse shadow-[0_0_10px_#39FF14]" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Philosophy Card Container */}
                    <div className="lg:w-[420px] sticky top-32 group">

                        {/* 1. The "Home Page" Neon Orb - Background Glow */}
                        {/* Ye div card ke bilkul piche glow karega, jaisa home page image mein hai */}
                        <div className="absolute -inset-10 bg-primary/20 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-glow pointer-events-none"></div>

                        <div className="relative bg-[#0d0d0d] border border-white/5 p-12 rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500 group-hover:border-primary/20">

                            {/* Background Decorative Quote */}
                            <div className="absolute -top-4 -right-2 text-[#222] text-[10rem] font-serif opacity-30 select-none group-hover:text-primary/10 transition-colors duration-700">”</div>

                            {/* Glowing Icon Source */}
                            <div className="relative mb-8 inline-block">
                                {/* Inner Icon Glow */}
                                <div className="absolute inset-0 bg-primary/40 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <MdLightbulbCircle className="relative text-primary text-6xl drop-shadow-[0_0_20px_rgba(57,255,20,0.8)]" />
                            </div>

                            <p className="text-primary uppercase tracking-[0.2em] text-[11px] font-black mb-6">Philosophy</p>

                            <h2 className="text-white text-[26px] font-bold leading-[1.4] italic mb-10 relative z-10">
                                "Great software is not just about code; it's about solving problems efficiently."
                            </h2>

                            {/* Neon Status Bar with Glow */}
                            <div className="relative w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                                <div className="absolute top-0 left-0 h-full w-[45%] bg-primary shadow-[0_0_20px_#39FF14] animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default About