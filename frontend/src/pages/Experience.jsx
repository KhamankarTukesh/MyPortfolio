import React from 'react';
import { PiBagSimpleFill } from "react-icons/pi";
import { FaGraduationCap, FaCloud } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { GoCheckCircleFill, GoCode } from "react-icons/go";
import { CiBank } from "react-icons/ci";
import { LiaCertificateSolid } from "react-icons/lia";
import { HiOutlineTrophy } from "react-icons/hi2";

function Experience() {
  const experiences = [
    {
      role: "Senior Full Stack Engineer",
      company: "TechSolutions Inc.",
      date: "Jan 2024 - Present",
      points: [
        "Architected and deployed scalable microservices using Spring Boot, reducing system latency by 40%.",
        "Led a team of 4 juniors in migrating the legacy frontend to a modern React/Next.js stack.",
        "Implemented CI/CD pipelines with GitHub Actions and AWS CodeDeploy."
      ],
      tags: ["React", "Spring Boot", "AWS", "PostgreSQL"]
    },
    {
      role: "Frontend Developer",
      company: "CreativeWeb Agency",
      date: "Jun 2022 - Dec 2023",
      points: [
        "Developed responsive, pixel-perfect user interfaces for over 15 client projects.",
        "Optimized website performance achieving 95+ scores on Google Lighthouse."
      ],
      tags: ["JavaScript", "Tailwind CSS", "Figma"]
    }
  ];

  return (
    <section className="bg-black text-white py-20 px-6 lg:px-14">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Experience & <span className="text-primary">Education</span>
          </h1>
          <p className="text-gray-400 max-w-2xl leading-relaxed">
            A timeline of my professional journey, academic background, and the technical milestones that define my career as a Full Stack Developer.
          </p>
        </div>

        {/* Professional Experience Section */}
        <div className="mb-20">
          <h2 className="flex items-center gap-3 text-xl font-bold mb-10">
            <PiBagSimpleFill className="text-primary text-2xl" /> Professional Experience
          </h2>
          
          <div className="relative border-l border-white/10 ml-3 space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8">
                {/* Timeline Dot */}
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1 shadow-[0_0_10px_#39FF14]"></div>
                
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight">{exp.role}</h3>
                    <p className="text-primary font-medium text-sm">{exp.company}</p>
                  </div>
                  <span className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-2 md:mt-0 px-3 py-1 bg-white/5 rounded-md border border-white/5">
                    {exp.date}
                  </span>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
                      <GoCheckCircleFill className="text-primary shrink-0 mt-1" /> {point}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-[10px] font-bold text-primary uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

{/* Education Section Header */}
<div className="flex items-center gap-3 mb-10 border-b border-white/10 pb-4">
  <span className="material-symbols-outlined text-primary text-3xl drop-shadow-[0_0_8px_rgba(56,255,20,0.5)]">school</span>
  <h2 className="text-2xl font-bold text-white tracking-tight">Education</h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {/* Degree Card with Deep Aura Glow */}
  <div className="group relative bg-[#0d160b] border border-white/5 p-8 rounded-[2rem] hover:border-primary/40 transition-all duration-500 overflow-hidden shadow-2xl">
    {/* Subtle Inner Glow Overlay */}
    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 blur-[60px] transition-opacity duration-700 pointer-events-none"></div>
    
    <div className="relative z-10">
      <div className="flex justify-between items-start mb-8">
        <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20 shadow-[inset_0_0_15px_rgba(57,255,20,0.2)] group-hover:shadow-[0_0_20px_rgba(57,255,20,0.4)] transition-all">
          <span className="material-symbols-outlined text-primary text-3xl">account_balance</span>
        </div>
        <span className="text-[10px] font-mono text-gray-500 bg-white/5 px-3 py-1 rounded-full border border-white/5">2017 - 2021</span>
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">B.Tech in Computer Science</h3>
      <p className="text-gray-500 text-sm mb-12">State University of Technology</p>
      
      <div className="pt-6 border-t border-white/5">
        <p className="text-[10px] font-black tracking-[0.3em] text-primary mb-5 uppercase opacity-80">Notable Achievements</p>
        <ul className="space-y-4">
          <li className="flex items-center gap-3 text-xs text-gray-400 font-medium">
            <span className="material-symbols-outlined text-primary text-lg drop-shadow-[0_0_5px_rgba(56,255,20,0.8)]">verified</span>
            Graduated with First Class Honors (3.8 GPA)
          </li>
          <li className="flex items-center gap-3 text-xs text-gray-400 font-medium">
            <span className="material-symbols-outlined text-primary text-lg drop-shadow-[0_0_5px_rgba(56,255,20,0.8)]">verified</span>
            Dean's List for Academic Excellence (2019, 2020)
          </li>
        </ul>
      </div>
    </div>
  </div>

  {/* Professional Certifications Card */}
  <div className="group relative bg-[#0d160b] border border-white/5 p-8 rounded-[2rem] hover:border-primary/40 transition-all duration-500 overflow-hidden shadow-2xl">
    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 blur-[60px] transition-opacity duration-700 pointer-events-none"></div>
    
    <div className="relative z-10">
      <div className="flex justify-between items-start mb-8">
        <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20 group-hover:shadow-[0_0_20px_rgba(57,255,20,0.3)] transition-all">
          <span className="material-symbols-outlined text-primary text-3xl">workspace_premium</span>
        </div>
        <span className="text-[10px] font-mono text-gray-500 bg-white/5 px-3 py-1 rounded-full border border-white/5 uppercase tracking-tighter">Continuous Learning</span>
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-tight">Professional Certifications</h3>
      <p className="text-gray-500 text-sm mb-10 italic">Industry Recognized Credentials</p>
      
      <div className="space-y-4">
        {/* Certificate Item Loop */}
        {[
          { icon: "cloud", title: "AWS Certified Solutions Architect", sub: "Amazon Web Services • 2023", iconColor: "text-yellow-400" },
          { icon: "code", title: "Meta Front-End Developer", sub: "Coursera • 2022", iconColor: "text-blue-400" },
          { icon: "security", title: "Cybersecurity Fundamentals", sub: "IBM • 2021", iconColor: "text-green-400" }
        ].map((cert, i) => (
          <div key={i} className="flex items-center gap-5 p-4 bg-white/[0.03] border border-white/5 rounded-2xl hover:bg-white/[0.07] hover:border-white/10 transition-all group/item">
            <div className={`p-2 bg-white/5 rounded-full ${cert.iconColor} drop-shadow-[0_0_5px_currentColor] group-hover/item:scale-110 transition-transform`}>
              <span className="material-symbols-outlined">{cert.icon}</span>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-100">{cert.title}</p>
              <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">{cert.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

        {/* Footer Copyright */}
        <div className="text-center pt-10 border-t border-white/5 text-gray-700 text-[10px] uppercase tracking-widest">
          © 2024 DevPortfolio. Designed with Code & Creativity.
        </div>
      </div>
    </section>
  );
}

export default Experience;