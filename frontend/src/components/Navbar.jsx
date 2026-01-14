import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'; // Smooth animation library

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Links array for cleaner code
  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];

  return (
    <>
      <nav className='fixed w-full top-0 left-0 right-0 border-b border-white/5 bg-background-dark/80 backdrop-blur-md h-20 z-50 px-4 md:px-14'>
        <div className="flex items-center justify-between h-full w-full">

          {/* 1. Logo Section */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2 group cursor-pointer">
              <span className="material-symbols-outlined text-primary text-3xl transition-transform group-hover:rotate-12 group-hover:drop-shadow-[0_0_8px_rgba(57,255,20,0.6)]">
                terminal
              </span>
              <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-primary transition-colors">
                Tukesh.dev
              </span>
            </Link>
          </div>

          {/* 2. Desktop Menu */}
          <div className='hidden md:flex gap-4'>
            {navLinks.map((item) => (
              <Link 
                key={item} 
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                className='text-gray-400 hover:text-primary px-3 py-2 rounded-md text-sm font-semibold transition-all hover:drop-shadow-[0_0_10px_rgba(57,255,20,0.5)]'
              >
                {item}
              </Link>
            ))}
          </div>

          {/* 3. Right Side: Resume + Hamburger */}
          <div className='flex items-center gap-2 sm:gap-4'>
            <a
              href="/certs/resume.pdf"
              download="Tukesh_Khamankar_Resume.pdf"
              className="py-1.5 px-4 sm:px-6 font-bold rounded-xl border border-primary text-primary bg-transparent shadow-[0_0_10px_rgba(57,255,20,0.2)] hover:shadow-[0_0_30px_rgba(57,255,20,0.5)] transition-all duration-300 flex items-center hover:scale-[1.05] text-xs sm:text-sm no-underline cursor-pointer"
            >
              Resume
              <span className="material-symbols-outlined ms-2 text-[16px] sm:text-[18px]">download</span>
            </a>

            {/* Hamburger Icon */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors relative z-50"
            >
              <span className="material-symbols-outlined text-3xl">
                {isOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
{/* --- Simple & Clean Mobile Menu --- */}
<AnimatePresence>
  {isOpen && (
    <motion.div 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      className="fixed top-20 left-0 w-full bg-[#0b160a] border-b border-[#38ff14]/10 shadow-2xl z-[9999] md:hidden"
    >
      <div className="flex flex-col p-6 gap-2">
        {navLinks.map((item) => (
          <Link
            key={item}
            to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
            onClick={() => setIsOpen(false)}
            // Simple white text with neon hover
            className="text-gray-300 hover:text-[#38ff14] text-lg font-bold py-3 px-4 rounded-xl hover:bg-[#38ff14]/5 transition-all flex justify-between items-center"
          >
            {item}
            <span className="material-symbols-outlined text-sm opacity-50">chevron_right</span>
          </Link>
        ))}
        
        {/* Simple Footer inside menu */}
        <div className="mt-4 pt-4 border-t border-white/5 px-4">
          <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Contact</p>
          <p className="text-sm text-gray-300">tukeshkhamankar@gmail.com</p>
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>
      </nav>
    </>
  );
}

export default Navbar;