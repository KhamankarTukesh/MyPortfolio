import React from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GoCheckCircleFill, GoCode, GoArrowRight } from "react-icons/go";
import { FaEye, FaRegCopyright } from "react-icons/fa";
import game from '../assets/game.png';
import temp from '../assets/temp.png';
import song from '../assets/song.png';

function Projects() {
  const navigate = useNavigate();
  const projectList = [
    {
      title: "Simon Game Dashboard",
      desc: "The admin dashboard for a Simon Game application.",
      tags: ["HTML5", "CSS3", "JavaScript"],
      features: ["Improove Mental Skills", "Interactive Gameplay", "Responsive Design"],
      img: game,
      demoLink: "https://signalsimon.netlify.app/", 
      githubLink: "https://github.com/KhamankarTukesh/Simon-Game"
    },
    {
      title: "Weather Tracker App",
      desc: "Real-time weather updates with personalized alerts and forecasts.",
      tags: ['React', 'API Integration', 'Tailwind CSS'],
      features: ["Live Weather Data", "Custom Alerts", "User-friendly Interface"],
      img: temp,
      demoLink: "https://blueskyly.netlify.app/",
      githubLink: "https://github.com/KhamankarTukesh/Weather-App"
    },
    {
      title: "Spotify Clone",
      desc: "Looks like Spotify to Improove my frontend skills.",
      tags: ['HTML5', 'CSS3',],
      features: ["Responsive Layout", 'Respected Original Design', "Responsive Design"],
      img: song,
      demoLink: "https://lifymusic.netlify.app/",
      githubLink: "https://github.com/KhamankarTukesh/Spotify-clone"
    }
  ];

  return (
    <section className="bg-black text-white py-20 px-6 lg:px-14">
      <div className="max-w-6xl mx-auto"> {/* Container width reduced */}
        
        {/* Header Section */}
        <div className="text-center mb-16 mt-16">
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            Featured <span className="inline-block drop-shadow-[0_0_10px_rgba(57,255,20,0.8)]  animate-pulse scale-100 hover:scale-110 transition-transform duration-700 text-primary">Projects</span>
          </h1>
          <p className="text-gray-400 text-md max-w-2xl mx-auto">
            A curated collection demonstrating technical proficiency and architectural thinking.
          </p>
        </div>

{/* --- Projects Grid (Compact Size + Heavy Neon Glow) --- */}
<div className="max-w-5xl mx-auto px-4"> 
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
    {projectList.map((project, index) => (
      <motion.div 
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative h-[420px]" // Relative for glow positioning
      >
        {/* 1. The "Heavy Glow" Layer - Only visible on hover */}
        <div className="absolute -inset-0.5 bg-primary/40 rounded-[1.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* 2. Main Card Content */}
        <div className="relative h-full bg-[#0d0d0d] border border-white/5 rounded-[1.5rem] overflow-hidden flex flex-col group-hover:border-primary/50 transition-all duration-500">
          
          {/* Image Section */}
          <div className="h-32 overflow-hidden relative">
            <img 
              src={project.img} 
              alt={project.title} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent"></div>
          </div>

          {/* Text Content */}
          <div className="p-5 flex flex-col flex-1">
            <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-500 text-[10px] mb-3 leading-tight line-clamp-2">
              {project.desc}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tags.map(tag => (
                <span key={tag} className="px-2 py-0.5 bg-primary/10 border border-primary/20 rounded-md text-[8px] font-bold text-primary uppercase">
                  {tag}
                </span>
              ))}
            </div>

            {/* Features */}
            <ul className="space-y-1.5 mb-4 flex-1">
              {project.features.map(feat => (
                <li key={feat} className="flex items-center gap-2 text-[10px] text-gray-400">
                  <GoCheckCircleFill className="text-primary text-xs shrink-0" /> {feat}
                </li>
              ))}
            </ul>

            {/* Buttons with Extra Glow */}
            <div className="flex gap-2 pt-4 border-t border-white/5">
              <a 
                href={project.demoLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-1 bg-primary text-black font-black py-2 rounded-lg flex items-center justify-center hover:shadow-[0_0_20px_rgba(57,255,20,0.8)] transition-all hover:scale-105 gap-1.5 text-[9px] uppercase"
              >
                <FaEye size={12} /> Live Demo
              </a>
              
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-1 bg-white/5 border border-white/10 text-white font-black py-2 rounded-lg flex hover:scale-105 items-center justify-center gap-1.5 hover:bg-white/10 transition-all text-[9px] uppercase"
              >
                <GoCode size={12} /> GitHub
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</div>
        {/* Minimalist Footer CTA */}
        <div className="text-center py-16 border-t border-white/5">
          <h2 className="text-3xl font-black mb-4">Want to see more?</h2>
          <p className="text-gray-500 mb-8 text-sm max-w-md mx-auto">
            I'm always open to discussing new projects and creative ideas.
          </p>
          <button onClick={()=> navigate('/contact')} className="inline-flex items-center gap-2 border border-primary/50 text-primary px-8 py-3 rounded-full text-xs font-black hover:bg-primary hover:text-black transition-all duration-300 group uppercase tracking-widest">
            Let's Connect <GoArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Footer */}
        <div className="flex justify-center items-center gap-2 text-gray-700 text-[10px] mt-8 uppercase tracking-widest font-bold">
          <FaRegCopyright /> 2026 DevPortfolio.
        </div>
      </div>
    </section>
  )
}

export default Projects