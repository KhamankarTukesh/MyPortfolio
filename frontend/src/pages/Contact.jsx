import React from 'react';
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";

const Contact = () => {
  return (
    /* overflow-x-hidden is the key to stopping the page from moving sideways on mobile */
    <div className="bg-[#0b160a] min-h-screen text-slate-300 font-['Inter'] px-6 flex flex-col items-center selection:bg-[#1fe00e] selection:text-black overflow-x-hidden">
      
      {/* Header Section */}
      <div className="text-center mb-16 relative">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-20 bg-[#1fe00e]/10 blur-[60px] rounded-full"></div>
        
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight relative z-10 mt-24 md:mt-32">
          Get In <span className="text-[#1fe00e] drop-shadow-[0_0_10px_rgba(31,224,14,0.5)]">Touch</span>
        </h1>
        <p className="text-gray-500 text-sm md:text-lg max-w-md mx-auto px-4">Have a project in mind or just want to say hi? My inbox is always open.</p>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start">
        
        {/* TOP ON MOBILE: Form (Using order-1 on mobile) */}
        <div className="order-1 lg:order-2 bg-[#132311]/50 border border-white/5 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] relative group overflow-hidden">
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#1fe00e]/5 rounded-full blur-[80px] group-hover:bg-[#1fe00e]/10 transition-colors duration-500"></div>
          
          <h2 className="text-xl md:text-2xl font-bold text-white mb-8">Send a Message</h2>
          
          <form className="space-y-5 relative z-10">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-black text-gray-500 ml-1">Name <span className="text-[#1fe00e]">*</span></label>
              <input type="text" placeholder="Your Name" className="w-full bg-[#0b160a] border border-white/10 rounded-xl px-5 py-3 text-sm text-white focus:outline-none focus:border-[#1fe00e]/50 focus:shadow-[0_0_15px_rgba(31,224,14,0.1)] transition-all" />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-black text-gray-500 ml-1">Email <span className="text-[#1fe00e]">*</span></label>
              <input type="email" placeholder="you@example.com" className="w-full bg-[#0b160a] border border-white/10 rounded-xl px-5 py-3 text-sm text-white focus:outline-none focus:border-[#1fe00e]/50 transition-all" />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-black text-gray-500 ml-1">Subject <span className="text-[#1fe00e]">*</span></label>
              <input type="text" placeholder="Enter your subject" className="w-full bg-[#0b160a] border border-white/10 rounded-xl px-5 py-3 text-sm text-white focus:outline-none focus:border-[#1fe00e]/50 transition-all" />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-black text-gray-500 ml-1">Message <span className="text-[#1fe00e]">*</span></label>
              <textarea rows="4" placeholder="How can I help?" className="w-full bg-[#0b160a] border border-white/10 rounded-xl px-5 py-3 text-sm text-white focus:outline-none focus:border-[#1fe00e]/50 transition-all resize-none"></textarea>
            </div>

            <button className="w-full bg-[#1fe00e] hover:bg-[#25ff12] py-4 rounded-xl text-[#0b160a] font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(31,224,14,0.2)] hover:shadow-[0_0_35px_rgba(31,224,14,0.5)] active:scale-95 transition-all duration-300">
              SEND MESSAGE <span className="text-lg">➤</span>
            </button>
          </form>
        </div>

        {/* BOTTOM ON MOBILE: Info & Socials (Using order-2 on mobile) */}
        <div className="order-2 lg:order-1 space-y-12">
          {/* Info Cards */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold text-white/50 uppercase tracking-[0.2em] mb-6">Contact Information</h2>
            
            <div className="group flex items-center gap-5 p-5 bg-[#132311] border border-white/5 rounded-2xl hover:border-[#1fe00e]/30 hover:shadow-[0_0_25px_rgba(31,224,14,0.1)] transition-all">
              <div className="w-12 h-12 rounded-full bg-[#0b160a] border border-[#1fe00e]/20 group-hover:border-[#1fe00e] flex items-center justify-center text-[#1fe00e] group-hover:shadow-[0_0_15px_rgba(31,224,14,0.4)] transition-all">
                <HiOutlineMail size={22} />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Email Me</p>
                <p className="text-gray-500 text-xs">hello@tukesh.dev</p>
              </div>
            </div>

            <div className="group flex items-center gap-5 p-5 bg-[#132311] border border-white/5 rounded-2xl hover:border-[#1fe00e]/30 transition-all">
              <div className="w-12 h-12 rounded-full bg-[#0b160a] border border-[#1fe00e]/20 flex items-center justify-center text-[#1fe00e]">
                <HiOutlineLocationMarker size={22} />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Location</p>
                <p className="text-gray-500 text-xs">San Francisco, California</p>
              </div>
            </div>
          </div>

          {/* Social Links - Forced to bottom of the stack on mobile */}
          <div>
            <h2 className="text-xs font-bold text-white/50 uppercase tracking-[0.2em] mb-6">Connect With Me</h2>
            <div className="flex gap-4">
              {[<FaLinkedinIn />, <FaGithub />, <FaTwitter />].map((icon, idx) => (
                <button key={idx} className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#132311] border border-white/5 text-gray-400 hover:text-[#1fe00e] hover:border-[#1fe00e]/50 hover:shadow-[0_0_20px_rgba(31,224,14,0.2)] hover:-translate-y-1 transition-all duration-300">
                  <span className="text-xl">{icon}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full max-w-6xl mt-24 pb-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] text-gray-600 font-bold uppercase tracking-widest gap-4">
        <p>© 2024 Tukesh Khamankar. All rights reserved.</p>
        <div className="flex gap-1">
          <span>Built with</span> 
          <span className="text-gray-400">React</span> 
          <span>&</span> 
          <span className="text-[#1fe00e]">Tailwind CSS</span>
        </div>
      </footer>
    </div>
  );
};

export default Contact;