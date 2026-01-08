import React from 'react'
import { GoDotFill } from "react-icons/go";
import { MdHtml } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaRegSmile } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { LuClock5 } from "react-icons/lu";
import { MdElectricBolt } from "react-icons/md";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import myimage from '../assets/tukesh.png';

function Home() {
  const navigate = useNavigate();
  return (
    <main className="bg-background-dark min-h-screen text-white pt-24 md:pt-32 pb-20 overflow-hidden relative">

      {/* Neon Glow - Position adjusted for better mobile view */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-14">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">


          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2 items-center">
            {/* 1. External Neon Glow (Photo ke piche ka bada ujala) */}
            <div className="absolute w-[110%] h-[110%] bg-primary/20 rounded-full blur-[80px] opacity-50 animate-pulse"></div>

            <div className="relative w-full max-w-[320px] md:max-w-[400px] aspect-square rounded-[2.5rem] overflow-hidden border-2 border-primary/30 bg-surface-dark shadow-[0_0_50px_rgba(57,255,20,0.2)] group transition-all duration-500 hover:border-primary/60">

              {/* 2. Inner Neon Gradient Overlay (Photo ke kinaro par hara rang) */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary/10 z-10 opacity-40 group-hover:opacity-60 transition-opacity"></div>

              {/* 3. Bottom Dark Fade (Taaki badge saaf dikhe) */}
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent z-10 opacity-80"></div>

              <img
                src= {myimage}
                alt="Tukesh"
                className="w-full h-full object-cover object-top grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
              />

              {/* 4. Floating Badge with Stronger Neon Icon */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 w-[85%] bg-black/80 backdrop-blur-xl border border-white/10 px-4 py-4 rounded-2xl flex items-center gap-3 shadow-2xl">
                <div className="bg-primary shadow-[0_0_15px_rgba(57,255,20,0.8)] p-2 rounded-full text-black flex items-center justify-center animate-bounce-slow">
                  <span className="material-symbols-outlined text-[18px] font-bold">code</span>
                </div>
                <div className="whitespace-nowrap">
                  <p className="text-[10px] text-primary font-bold uppercase tracking-widest leading-none mb-1.5">Current Focus</p>
                  <p className="text-sm font-black text-white leading-none">DSA & Full Stack</p>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Text Content: Mobile par ORDER-2 (Neeche dikhega) */}
          <div className="z-10 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-bold tracking-widest uppercase mb-6 animate-pulse">
              <GoDotFill /> CURRENTLY WORKING
            </div>

            <h1 className="text-4xl md:text-7xl font-black leading-[1.1] mb-6 tracking-tight">
              Building Digital <br /> Products that <br />
              <span className="inline-block drop-shadow-[0_0_10px_rgba(57,255,20,0.8)]  animate-pulse scale-100 hover:scale-110 transition-transform duration-700 text-primary">
                Scale.
              </span>

            </h1>

            <p className="text-gray-400 text-base md:text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Hi, I'm <span className="text-white font-bold">Tukesh Khamankar</span>. A Full Stack Developer specializing in React, Node.js, and Java programming language. I craft high-performance web applications with a focus on user experience and clean code.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
              <button onClick={() => navigate("/projects")} className="flex items-center justify-center gap-2 py-3.5 px-8 bg-primary text-black font-bold rounded-lg hover:shadow-[0_0_50px_rgba(57,255,20,0.5)] transition-all hover:scale-105">
                View My Work <FaArrowRightLong />
              </button>
              <button onClick={() => navigate("/contact")} className="py-3.5 px-8 hover:scale-105 bg-white/5 border border-white/10 text-white font-bold rounded-lg hover:bg-white/10 transition-all">
                Contact Me
              </button>
            </div>
          </div>


        </div>

      </div>
      {/* --- Stats Section --- */}
      <div className="max-w-7xl mx-auto px-6 lg:px-14 mt-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { icon: <LuClock5 />, label: 'Experience', value: '1+', sub: 'Month' },
            { icon: <BsFillRocketTakeoffFill />, label: 'Projects', value: '5+', sub: 'Completed' },
            { icon: <FaRegSmile />, label: 'Happy Clients', value: '10+', sub: 'Global' },
            { icon: <MdElectricBolt />, label: 'Uptime', value: '99%', sub: 'Reliability' },
          ].map((stat, index) => (
            <div key={index} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all group">
              <div className="flex items-center gap-2 text-gray-400 text-sm mb-4 group-hover:text-primary transition-colors">
                {stat.icon} <span>{stat.label}</span>
              </div>
              <div className="flex items-baseline gap-2">
                <h2 className="text-3xl md:text-4xl font-black text-white">{stat.value}</h2>
                <p className="text-gray-500 text-sm font-medium">{stat.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Skills Marquee/Grid --- */}
      <div className="max-w-7xl mx-auto px-6 lg:px-14 mt-24 pb-20 border-t border-white/5 pt-12">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-50 grayscale-0 transition-all duration-700">
          <div className="flex items-center gap-2 font-bold text-xl"><FaJs className="text-yellow-400" /> JavaScript</div>
          <div className="flex items-center gap-2 font-bold text-xl"><MdHtml className="text-orange-500" /> HTML5</div>
          <div className="flex items-center gap-2 font-bold text-xl"><FaReact className="text-blue-400" /> React</div>
          <div className="flex items-center gap-2 font-bold text-xl"><FaNodeJs className="text-green-500" /> Node.js</div>
          <div className="flex items-center gap-2 font-bold text-xl"><FaDatabase className="text-green-600" /> MongoDB</div>
        </div>
      </div>
    </main>
  )
}

export default Home