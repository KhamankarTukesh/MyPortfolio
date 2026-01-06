import React from 'react';
import { FaCloud, FaGraduationCap, FaCode, FaServer, FaTerminal, FaRegCopyright } from "react-icons/fa"; // FaRegCopyright add kiya
import { AiFillSafetyCertificate } from "react-icons/ai";
import { CiServer } from "react-icons/ci";
import { GoChevronRight, GoChevronLeft, GoDotFill ,GoCode} from "react-icons/go";
import { LiaCertificateSolid } from "react-icons/lia";
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
            The technology stack and professional credentials I've mastered to build high-performance digital solutions.
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
                {['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Redux'].map(skill => (
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
                {['Node.js', 'Express.js', 'Java', 'Spring Boot', 'MongoDB', 'PostgreSQL'].map(skill => (
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
                {['Docker', 'AWS', 'CI/CD', 'Git', 'Linux'].map(skill => (
                  <span key={skill} className="px-5 py-2.5 bg-white/5 border border-white/5 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-orange-500/10 hover:border-orange-500/40 transition-all cursor-default">
                    <GoDotFill className="text-orange-500 text-[10px]" /> {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- 2. Education & Credentials Section --- */}
        <div className="relative">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-4xl font-black tracking-tight">Certifications & University</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'B.Tech Computer Science', org: 'ZCOER', date: '2024-2028', icon: <FaGraduationCap />, color: 'primary' },
              { title: 'Full Stack Development', org: 'Apna College', date: 'Issued 2025', icon: <AiFillSafetyCertificate />, color: 'primary' },
              { title: 'Gen AI Professional', org: 'IIT Roorkee Program', date: 'In Progress', icon: <LiaCertificateSolid />, color: 'primary' }
            ].map((edu, idx) => (
              <div key={idx} className="group relative">
                <div className="relative bg-white/5 border border-white/10 p-8 rounded-3xl flex items-center gap-6 overflow-hidden transition-all duration-500 hover:bg-white/[0.08] hover:-translate-y-2">
                  <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                    <div className="text-8xl scale-150 rotate-12">{edu.icon}</div>
                  </div>
                  
                  <div className="bg-primary/10 p-5 rounded-2xl text-primary shadow-[inset_0_0_15px_rgba(57,255,20,0.1)] group-hover:scale-110 transition-transform duration-500">
                    {React.cloneElement(edu.icon, { size: 28 })}
                  </div>
                  
                  <div className="relative z-10">
                    <h4 className="font-bold text-xl leading-tight text-white group-hover:text-primary transition-colors">{edu.title}</h4>
                    <p className="text-gray-400 text-sm mt-1.5 font-medium">{edu.org}</p>
                    <div className="inline-block mt-3 px-3 py-1 bg-primary/10 rounded-lg text-primary text-[10px] font-black tracking-widest uppercase">
                      {edu.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills;