import React from 'react';
import { motion } from 'framer-motion'; // Smoothness ke liye
import { FaCloud } from "react-icons/fa";
import { CiServer } from "react-icons/ci";
import { GoDotFill, GoCode } from "react-icons/go";

function Skills() {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="relative bg-background-dark text-white py-24 px-6 lg:px-14 min-h-screen overflow-hidden">

      {/* --- Background Ambient Glows --- */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto relative z-10"
      >

        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center mb-24">
          <h2 className="text-primary uppercase tracking-[0.4em] text-sm font-black mb-4">Expertise</h2>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
            Technical <span className="inline-block drop-shadow-[0_0_15px_rgba(57,255,20,0.6)] text-primary">Toolkit</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            A diverse set of skills and technologies that I have mastered to build efficient, scalable, and maintainable software solutions.
          </p>
        </motion.div>

        {/* --- 1. Technical Toolkit Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">

          {/* Frontend Card */}
          <motion.div variants={itemVariants} className="group relative">
            <div className="absolute -inset-1 bg-blue-500/25 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative bg-[#0d0d0d] border border-white/5 p-10 rounded-[2.5rem] h-full transition-all duration-500 group-hover:border-blue-500/40 group-hover:scale-[1.02]">
              <div className="flex items-center gap-4 text-blue-400 font-black text-2xl mb-8">
                <div className="p-3 bg-blue-400/10 rounded-2xl flex shadow-[0_0_20px_rgba(96,165,250,0.3)]">
                  <GoCode />
                </div>
                Frontend
              </div>
              <div className="flex flex-wrap gap-3">
                {['React', 'HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript'].map(skill => (
                  <span key={skill} className="px-5 py-2.5 bg-white/5 border border-white/5 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-blue-500/20 hover:border-blue-500/40 transition-all cursor-default">
                    <GoDotFill className="text-blue-500 text-[10px] animate-pulse" /> {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Backend Card */}
          <motion.div variants={itemVariants} className="group relative">
            <div className="absolute -inset-1 bg-primary/25 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative bg-[#0d0d0d] border border-white/5 p-10 rounded-[2.5rem] h-full transition-all duration-500 group-hover:border-primary/40 group-hover:scale-[1.02]">
              <div className="flex items-center gap-4 text-primary font-black text-2xl mb-8">
                <div className="p-3 bg-primary/10 rounded-2xl shadow-[0_0_20px_rgba(57,255,20,0.3)]">
                  <CiServer className="stroke-2" />
                </div>
                Backend & DB
              </div>
              <div className="flex flex-wrap gap-3">
                {['Node.js', 'Express.js', 'MongoDB', 'Java'].map(skill => (
                  <span key={skill} className="px-5 py-2.5 bg-white/5 border border-white/5 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-primary/20 hover:border-primary/40 transition-all cursor-default">
                    <GoDotFill className="text-primary text-[10px] animate-pulse" /> {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* DevOps Card */}
          <motion.div variants={itemVariants} className="group relative">
            <div className="absolute -inset-1 bg-orange-500/25 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative bg-[#0d0d0d] border border-white/5 p-10 rounded-[2.5rem] h-full transition-all duration-500 group-hover:border-orange-500/40 group-hover:scale-[1.02]">
              <div className="flex items-center gap-4 text-orange-400 font-black text-2xl mb-8">
                <div className="p-3 bg-orange-400/10 rounded-2xl shadow-[0_0_20px_rgba(251,146,60,0.3)]">
                  <FaCloud />
                </div>
                DevOps
              </div>
              <div className="flex flex-wrap gap-3">
                {['Git', 'GitHub', 'Vercel', 'Cloudinary'].map(skill => (
                  <span key={skill} className="px-5 py-2.5 bg-white/5 border border-white/5 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-orange-500/20 hover:border-orange-500/40 transition-all cursor-default">
                    <GoDotFill className="text-orange-500 text-[10px] animate-pulse" /> {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

   
{/* --- 2. Certificates Section with Smooth Scroll --- */}
<motion.div variants={itemVariants} className="flex items-center gap-4 mb-10">
  <span className="material-symbols-outlined text-[#38ff14] text-3xl drop-shadow-[0_0_20px_#38ff14]">workspace_premium</span>
  <h2 className="text-3xl font-bold text-white tracking-tight">Certifications</h2>
</motion.div>

{/* Scroll Container Fix: Added pt-10 to give space for hover lift */}
<div className="flex gap-6 overflow-x-auto pt-10 pb-10 -mt-10 hide-scrollbar snap-x relative">
  
  {/* Certificate Card */}
  <motion.div 
    whileHover={{ y: -10 }} // Ab ye smoothly upar uthega aur katega nahi
    className="group relative min-w-[320px] md:min-w-[420px] snap-start"
  >
    {/* Glow Layer */}
    <div className="absolute -inset-1 bg-[#38ff14]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
    
    <div className="relative flex items-center justify-between p-6 bg-[#0b160a] border border-white/5 rounded-2xl group-hover:border-[#38ff14]/40 transition-all duration-500 shadow-2xl">
      <div className="flex items-center gap-5">
        <div className="w-14 h-14 rounded-full bg-[#132311] border border-white/5 flex items-center justify-center text-[#38ff14] shadow-[0_0_20px_rgba(56,255,20,0.2)] group-hover:shadow-[0_0_40px_rgba(56,255,20,0.5)] transition-all duration-500">
          <span className="material-symbols-outlined text-3xl">terminal</span>
        </div>
        <div>
          <p className="text-white font-bold text-lg leading-tight group-hover:text-[#38ff14] transition-colors duration-500">
            Full Stack Development
          </p>
          <p className="text-gray-500 text-[11px] uppercase tracking-[0.2em] mt-1.5 font-bold">
            MERN Stack Specialization
          </p>
        </div>
      </div>
      <a
        href="/certs/fullstack.pdf"
        target="_blank"
        className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-[#38ff14] hover:border-[#38ff14]/50 transition-all"
      >
        <span className="material-symbols-outlined text-2xl">open_in_new</span>
      </a>
    </div>
  </motion.div>
        </div>

      </motion.div>
    </section>
  );
}

export default Skills;