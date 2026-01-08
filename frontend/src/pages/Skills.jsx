import React from 'react';
import { FaCloud, FaGraduationCap } from "react-icons/fa";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { CiServer } from "react-icons/ci";
import { GoDotFill, GoCode } from "react-icons/go";
function Skills() {
  return (
    <section className="relative bg-background-dark text-white py-24 px-6 lg:px-14 min-h-screen overflow-hidden">

      {/* --- Background Ambient Glows (Exactly like Home Page) --- */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header Section */}
        <div className="text-center mb-24">
          <h2 className="text-primary uppercase tracking-[0.4em] text-sm font-black mb-4">Expertise</h2>
          <h1 className="text-6xl md:text-7xl font-black mb-6 tracking-tighter">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Toolkit</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            A diverse set of skills and technologies that I have mastered to build efficient, scalable, and maintainable software solutions.
          </p>
        </div>

        {/* --- 1. Technical Toolkit Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">

          {/* Frontend Card - Blue Glow */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-blue-500/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative bg-[#0d0d0d] border border-white/5 p-10 rounded-[2.5rem] h-full transition-all duration-500 group-hover:border-blue-500/30">
              <div className="flex items-center gap-4 text-blue-400 font-black text-2xl mb-8">
                <div className="p-3 bg-blue-400/10 rounded-2xl flex shadow-[0_0_15px_rgba(96,165,250,0.2)]">
                  <GoCode />
                </div>
                Frontend
              </div>
              <div className="flex flex-wrap gap-3">
                {['React', 'HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript'].map(skill => (
                  <span key={skill} className="px-5 py-2.5 bg-white/5 border border-white/5 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-blue-500/10 hover:border-blue-500/40 transition-all cursor-default">
                    <GoDotFill className="text-blue-500 text-[10px]" /> {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Backend Card - Green Glow (Primary) */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-primary/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative bg-[#0d0d0d] border border-white/5 p-10 rounded-[2.5rem] h-full transition-all duration-500 group-hover:border-primary/30">
              <div className="flex items-center gap-4 text-primary font-black text-2xl mb-8">
                <div className="p-3 bg-primary/10 rounded-2xl shadow-[0_0_15px_rgba(57,255,20,0.2)]">
                  <CiServer className="stroke-2" />
                </div>
                Backend & DB
              </div>
              <div className="flex flex-wrap gap-3">
                {['Node.js', 'Express.js', 'MongoDB', 'npm-packages'].map(skill => (
                  <span key={skill} className="px-5 py-2.5 bg-white/5 border border-white/5 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-primary/10 hover:border-primary/40 transition-all cursor-default">
                    <GoDotFill className="text-primary text-[10px]" /> {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* DevOps Card - Orange Glow */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-orange-500/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative bg-[#0d0d0d] border border-white/5 p-10 rounded-[2.5rem] h-full transition-all duration-500 group-hover:border-orange-500/30">
              <div className="flex items-center gap-4 text-orange-400 font-black text-2xl mb-8">
                <div className="p-3 bg-orange-400/10 rounded-2xl shadow-[0_0_15px_rgba(251,146,60,0.2)]">
                  <FaCloud />
                </div>
                DevOps & Cloud
              </div>
              <div className="flex flex-wrap gap-3">
                {['Git', 'GitHub', 'Cloudinary'].map(skill => (
                  <span key={skill} className="px-5 py-2.5 bg-white/5 border border-white/5 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-orange-500/10 hover:border-orange-500/40 transition-all cursor-default">
                    <GoDotFill className="text-orange-500 text-[10px]" /> {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>


        {/* Header Section */}
        <div className="flex items-center gap-4 mb-8">
          <span className="material-symbols-outlined text-[#38ff14] text-3xl drop-shadow-[0_0_40px_#38ff14]">workspace_premium</span>
          <h2 className="text-2xl font-bold text-white">Course Certificates</h2>
        </div>

        {/* Scroll Container */}
        <div className="flex gap-4 overflow-x-auto pb-6 hide-scrollbar snap-x">

          {/* --- Certificate Card 1 with Heavy Glow --- */}
          <div className="group relative min-w-[320px] md:min-w-[380px] snap-start">

            <div className="absolute -inset-1 bg-[#38ff14]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

            {/* 2. Main Content Div */}
            <div className="relative flex items-center justify-between p-4 bg-[#0b160a] border border-white/5 rounded-2xl group-hover:border-[#38ff14]/30 transition-all duration-500">
              <div className="flex items-center gap-4">
                {/* Icon Circle with Glow */}
                <div className="w-12 h-12 rounded-full bg-[#132311] border border-white/5 flex items-center justify-center text-[#38ff14] shadow-[0_0_15px_rgba(56,255,20,0.1)] group-hover:shadow-[0_0_30px_rgba(56,255,20,0.4)] transition-all duration-500">
                  <span className="material-symbols-outlined text-2xl">terminal</span>
                </div>

                <div>
                  <p className="text-white font-bold text-sm leading-tight group-hover:text-[#38ff14] transition-colors duration-500">
                    Front-End Development
                  </p>
                  <p className="text-gray-500 text-[10px] uppercase tracking-widest mt-1 font-bold">
                    HTML5, CSS3, JavaScript
                  </p>
                </div>
              </div>

              {/* Redirect Button */}
              <a
                href="/certs/frontend.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#0b160a] border border-white/10 text-gray-500 hover:text-[#38ff14] hover:border-[#38ff14]/50 hover:shadow-[0_0_15px_rgba(56,255,20,0.3)] transition-all z-10"
              >
                <span className="material-symbols-outlined text-[20px]">open_in_new</span>
              </a>
            </div>
          </div>

          {/* --- Certificate Card 1 with Heavy Glow --- */}
          <div className="group relative min-w-[320px] md:min-w-[380px] snap-start">

            {/* 1. Heavy Glow Background (Ye layer piche glow degi) */}
            <div className="absolute -inset-1 bg-[#38ff14]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

            {/* 2. Main Content Div */}
            <div className="relative flex items-center justify-between p-4 bg-[#0b160a] border border-white/5 rounded-2xl group-hover:border-[#38ff14]/30 transition-all duration-500">
              <div className="flex items-center gap-4">
                {/* Icon Circle with Glow */}
                <div className="w-12 h-12 rounded-full bg-[#132311] border border-white/5 flex items-center justify-center text-[#38ff14] shadow-[0_0_15px_rgba(56,255,20,0.1)] group-hover:shadow-[0_0_30px_rgba(56,255,20,0.4)] transition-all duration-500">
                  <span className="material-symbols-outlined text-2xl">terminal</span>
                </div>

                <div>
                  <p className="text-white font-bold text-sm leading-tight group-hover:text-[#38ff14] transition-colors duration-500">
                    Front-End Development
                  </p>
                  <p className="text-gray-500 text-[10px] uppercase tracking-widest mt-1 font-bold">
                    HTML5, CSS3, JavaScript
                  </p>
                </div>
              </div>

              {/* Redirect Button */}
              <a
                href="/certs/frontend.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#0b160a] border border-white/10 text-gray-500 hover:text-[#38ff14] hover:border-[#38ff14]/50 hover:shadow-[0_0_15px_rgba(56,255,20,0.3)] transition-all z-10"
              >
                <span className="material-symbols-outlined text-[20px]">open_in_new</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Skills;