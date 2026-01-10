import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className='fixed w-full top-0 left-0 right-0 border-b border-white/5 bg-background-dark h-20 z-50 px-4 md:px-14'>
        {/* Main Wrapper: Logo, Links, and Buttons ko ek line mein lane ke liye */}
        <div className="flex items-center justify-between h-full w-full">

          {/* 1. Logo Section */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2 group cursor-pointer">
              <span className="material-symbols-outlined text-primary text-3xl transition-transform group-hover:rotate-12">terminal</span>
              <span className="font-display font-bold text-xl tracking-tight text-white">Tukesh.dev</span>
            </Link>
          </div>

          {/* 2. Desktop Menu (Hidden on Mobile) */}
          <div className='hidden md:flex gap-6'>
            {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
              <Link key={item} to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className='text-white hover:text-primary px-3 py-2  rounded-md text-sm font-medium transition-all hover:drop-shadow-[0_0_10px_rgba(57,255,20,0.8)]'>
                {item}
              </Link>
            ))}
          </div>

          {/* 3. Right Side: Resume Button (Always Visible) + Hamburger Icon */}
          <div className='flex items-center gap-2 sm:gap-4'>
            {/* Resume Link - Styled as a Button */}
            <a
              href="/certs/resume.pdf"
              download="Tukesh_Khamankar_Resume.pdf"
              className="py-1.5 px-4 sm:px-6 font-bold rounded-xl border border-primary text-primary bg-background-dark shadow-[0_0_10px_rgba(57,255,20,0.3)] hover:shadow-[0_0_50px_rgba(57,255,20,0.6)] transition-all duration-300 flex items-center hover:scale-[1.05] text-xs sm:text-sm no-underline cursor-pointer"
            >
              Resume
              <span className="material-symbols-outlined align-middle ms-2 text-[16px] sm:text-[18px]">
                download
              </span>
            </a>
            {/* Hamburger Icon - Strictly aligned with logo level */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors flex items-center justify-center"
            >
              <span className="material-symbols-outlined text-3xl">
                {isOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* --- Mobile Dropdown Menu --- */}
        {isOpen && (
          <div className="absolute top-20 left-0 w-full bg-background-dark/95 backdrop-blur-xl border-b border-white/5 flex flex-col p-6 gap-4 md:hidden animate-in fade-in slide-in-from-top-4 shadow-2xl">
            {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-primary text-xl font-semibold py-2 border-b border-white/5 last:border-0"
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar