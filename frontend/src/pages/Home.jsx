import React from 'react';
import { motion } from 'framer-motion'; // Smooth animation library
import { GoDotFill } from "react-icons/go";
import { MdHtml, MdElectricBolt } from "react-icons/md";

import { FaDatabase, FaReact, FaNodeJs, FaRegSmile, FaJs, FaLongArrowAltRight } from "react-icons/fa";
import { LuClock5 } from "react-icons/lu";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import myimage from '../assets/tukesh.png';

function Home() {
  const navigate = useNavigate();

  // Animation Variants for reusability
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <main className="bg-background-dark min-h-screen text-white pt-24 md:pt-32 pb-20 overflow-hidden relative">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-14">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center"
        >

          {/* 1. Profile Image Section with Motion */}
{/* Profile Image Section */}
<motion.div 
  variants={fadeIn}
  className="relative flex justify-center lg:justify-end order-1 lg:order-2 items-center"
>
  {/* Pulsing External Glow */}
  <div className="absolute w-[110%] h-[110%] bg-primary/20 rounded-full blur-[80px] opacity-40 animate-pulse"></div>

  <motion.div 
    whileHover={{ scale: 1.02 }}
    className="relative w-full max-w-[320px] md:max-w-[400px] aspect-square rounded-[2.5rem] overflow-hidden border-2 border-primary/30 bg-surface-dark shadow-[0_0_50px_rgba(57,255,20,0.2)] group"
  >
    <img
      src={myimage}
      alt="Tukesh"
      className="w-full h-full object-cover object-top grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent z-10 opacity-80"></div>

    {/* --- FIXED FLOATING BADGE --- */}
    <motion.div 
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      // Mobile: Bottom-right, Small Width | Desktop: Centered, Large Width
      className="absolute bottom-4 right-4 md:bottom-6 md:left-1/2 md:-translate-x-1/2 z-20 w-fit md:w-[85%] bg-black/90 backdrop-blur-xl border border-white/10 px-3 py-3 md:px-4 md:py-4 rounded-2xl flex items-center gap-3 shadow-2xl"
    >
      <div className="bg-primary shadow-[0_0_15px_rgba(57,255,20,0.8)] p-1.5 md:p-2 rounded-full text-black flex items-center justify-center">
        <span className="material-symbols-outlined text-[14px] md:text-[18px] font-bold">code</span>
      </div>
      <div className="whitespace-nowrap">
        <p className="text-[8px] md:text-[10px] text-primary font-bold uppercase tracking-widest leading-none mb-1 md:mb-1.5">Current Focus</p>
        <p className="text-[10px] md:text-sm font-black text-white leading-none">DSA IN JAVA</p>
      </div>
    </motion.div>
  </motion.div>
</motion.div>

          {/* 2. Text Content with Staggered Fade-In */}
          <div className="z-10 text-center lg:text-left order-2 lg:order-1">
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-bold tracking-widest uppercase mb-6">
              <GoDotFill className="animate-ping" /> CURRENTLY WORKING
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-4xl md:text-7xl font-black leading-[1.1] mb-6 tracking-tight">
              Building Digital <br /> Products that <br />
              <span className="inline-block drop-shadow-[0_0_15px_rgba(57,255,20,0.6)] text-primary">Scale.</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-gray-400 text-base md:text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Hi, I'm <span className="text-white font-bold">Tukesh Khamankar</span>. An AI-focused aspiring Full Stack Developer skilled in MongoDB, Express.js, React, and Node.js, currently focused on learning DSA with Java and Exploring AI automation workflows using n8n.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
              <button onClick={() => navigate("/projects")} className="flex items-center justify-center gap-2 py-3.5 px-8 bg-primary text-black font-bold rounded-lg hover:shadow-[0_0_30px_rgba(57,255,20,0.5)] transition-all hover:scale-105 active:scale-95">
                View My Work <FaLongArrowAltRight />
              </button>
              <button onClick={() => navigate("/contact")} className="py-3.5 px-8 hover:scale-105 bg-white/5 border border-white/10 text-white font-bold rounded-lg hover:bg-white/10 transition-all active:scale-95">
                Contact Me
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* 3. Stats Section with Scroll Animation */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 lg:px-14 mt-20"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { icon: <LuClock5 />, label: 'Experience', value: '1+', sub: 'Month' },
            { icon: <BsFillRocketTakeoffFill />, label: 'Projects', value: '5+', sub: 'Completed' },
            { icon: <FaRegSmile />, label: 'Happy Clients', value: '10+', sub: 'Global' },
            { icon: <MdElectricBolt />, label: 'Uptime', value: '99%', sub: 'Reliability' },
          ].map((stat, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all group"
            >
              <div className="flex items-center gap-2 text-gray-400 text-sm mb-4 group-hover:text-primary transition-colors">
                {stat.icon} <span>{stat.label}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white">{stat.value}</h2>
              <p className="text-gray-500 text-sm font-medium">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 4. Skills Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-14 mt-24 pb-20 border-t border-white/5 pt-12">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex flex-wrap justify-center md:justify-between items-center gap-8"
        >
          {/* Skill items */}
          {[
            { icon: <FaJs className="text-yellow-400" />, name: 'JavaScript' },
            { icon: <MdHtml className="text-orange-500" />, name: 'HTML5' },
            { icon: <FaReact className="text-blue-400" />, name: 'React' },
            { icon: <FaNodeJs className="text-green-500" />, name: 'Node.js' },
            { icon: <FaDatabase className="text-green-600" />, name: 'MongoDB' },
          ].map((skill, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.1, filter: "grayscale(0%)" }}
              className="flex items-center gap-2 font-bold text-xl opacity-50 grayscale transition-all cursor-default"
            >
              {skill.icon} {skill.name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}

export default Home;