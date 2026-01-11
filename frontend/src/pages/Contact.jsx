import React, { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(""); // "", "sending", "success", "error"

  const handleLinkedIn = () => window.open('https://linkedin.com/in/tukesh-khamankar', '_blank');
  const handleGitHub = () => window.open('https://github.com/khamankartukesh', '_blank');
  const handleLeetcode = () => window.open('https://leetcode.com/u/CodeWithTukesh/', '_blank');

  const sendEmail = async (e) => {
    e.preventDefault();

    // Validation
    const name = form.current.user_name.value.trim();
    const email = form.current.user_email.value.trim();
    const subject = form.current.subject.value.trim();
    const message = form.current.message.value.trim();

    if (!name || !email || !subject || !message) {
      alert("Please fill all fields! ⚠️");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      form.current.reset();
      setTimeout(() => setStatus(""), 5000);
    } catch (error) {
      console.error(error);
      setStatus("error");
      setTimeout(() => setStatus(""), 5000);
    }
  };

  return (
    <div className="bg-[#0b160a] min-h-screen text-slate-300 font-['Inter'] px-6 flex flex-col items-center selection:bg-[#1fe00e] selection:text-black overflow-x-hidden">

      {/* Header Section */}
      <div className="text-center mb-16 relative">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-20 bg-[#1fe00e]/10 blur-[60px] rounded-full"></div>

        <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight relative z-10 mt-24 md:mt-32">
          Get In <span className="inline-block drop-shadow-[0_0_10px_rgba(57,255,20,0.8)] animate-pulse scale-100 hover:scale-110 transition-transform duration-700 text-primary">Touch</span>
        </h1>
        <p className="text-gray-500 text-sm md:text-lg max-w-md mx-auto px-4">Have a project in mind or just want to say hi? My inbox is always open.</p>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start mb-20">

        {/* INFO & SOCIALS (LEFT Side on Desktop) */}
        <div className="order-2 lg:order-1 space-y-12">
          <div className="space-y-4">
            <h2 className="text-xs font-bold text-white/50 uppercase tracking-[0.2em] mb-6">Contact Information</h2>

            <div
              onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=tukeshkhamankar@gmail.com", "_blank")}
              className="group cursor-pointer flex items-center gap-5 p-5 bg-[#132311] border border-white/5 rounded-2xl hover:border-[#1fe00e]/30 hover:shadow-[0_0_25px_rgba(31,224,14,0.1)] transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-[#0b160a] border border-[#1fe00e]/20 group-hover:border-[#1fe00e] flex items-center justify-center text-[#1fe00e] group-hover:shadow-[0_0_15px_rgba(31,224,14,0.4)] transition-all">
                <HiOutlineMail size={22} />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Email Me</p>
                <p className="text-gray-500 text-xs">tukeshkhamankar@gmail.com</p>
              </div>
            </div>

            <div onClick={() => window.open("https://maps.google.com", "_blank")} className="group cursor-pointer flex items-center gap-5 p-5 bg-[#132311] border border-white/5 rounded-2xl hover:border-[#1fe00e]/30 transition-all">
              <div className="w-12 h-12 rounded-full bg-[#0b160a] border border-[#1fe00e]/20 flex items-center justify-center text-[#1fe00e]">
                <HiOutlineLocationMarker size={22} />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Location</p>
                <p className="text-gray-500 text-xs">Narhe, Pune – Maharashtra</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-bold text-white/50 uppercase tracking-[0.2em] mb-6">Connect With Me</h2>
            <div className="flex gap-4">
              {[ {icon: <FaLinkedinIn />, fn: handleLinkedIn}, {icon: <FaGithub />, fn: handleGitHub}, {icon: <SiLeetcode />, fn: handleLeetcode} ].map((item, idx) => (
                <button key={idx} onClick={item.fn} className="group relative w-12 h-12 flex items-center justify-center rounded-xl bg-[#132311] border border-white/5 text-gray-400 hover:text-[#38ff14] hover:border-[#38ff14]/50 hover:shadow-[0_0_20px_rgba(56,255,20,0.3)] hover:-translate-y-1 transition-all duration-300">
                  <div className="absolute inset-0 bg-[#38ff14]/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 animate-pulse pointer-events-none"></div>
                  <span className="relative z-10 text-xl">{item.icon}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* FORM SECTION (RIGHT Side on Desktop) */}
        <div className="order-1 lg:order-2 bg-[#132311]/50 border border-white/5 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] relative group overflow-hidden">
          {/* Pulsing Background Glow */}
          <div className="absolute -inset-10 bg-[#1fe00e]/10 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-pulse pointer-events-none"></div>
          
          <h2 className="text-xl md:text-2xl font-bold text-white mb-8 relative z-10">Send a Message</h2>

          <form ref={form} onSubmit={sendEmail} className="space-y-5 relative z-10">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-black text-gray-500 ml-1">Name <span className="text-[#1fe00e]">*</span></label>
              <input name="user_name" type="text" placeholder="Your Name" className="w-full bg-[#0b160a] border border-white/10 rounded-xl px-5 py-3 text-sm text-white focus:outline-none focus:border-[#1fe00e]/50 focus:shadow-[0_0_15px_rgba(31,224,14,0.1)] transition-all" />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-black text-gray-500 ml-1">Email <span className="text-[#1fe00e]">*</span></label>
              <input name="user_email" type="email" placeholder="you@example.com" className="w-full bg-[#0b160a] border border-white/10 rounded-xl px-5 py-3 text-sm text-white focus:outline-none focus:border-[#1fe00e]/50 transition-all" />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-black text-gray-500 ml-1">Subject <span className="text-[#1fe00e]">*</span></label>
              <input name="subject" type="text" placeholder="Enter your subject" className="w-full bg-[#0b160a] border border-white/10 rounded-xl px-5 py-3 text-sm text-white focus:outline-none focus:border-[#1fe00e]/50 transition-all" />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-black text-gray-500 ml-1">Message <span className="text-[#1fe00e]">*</span></label>
              <textarea name="message" rows="4" placeholder="How can I help?" className="w-full bg-[#0b160a] border border-white/10 rounded-xl px-5 py-3 text-sm text-white focus:outline-none focus:border-[#1fe00e]/50 transition-all resize-none"></textarea>
            </div>

            <button 
              type="submit" 
              disabled={status === "sending"}
              className={`w-full bg-[#1fe00e] hover:bg-[#25ff12] py-4 rounded-xl text-[#0b160a] font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(31,224,14,0.2)] hover:shadow-[0_0_35px_rgba(31,224,14,0.5)] active:scale-95 transition-all duration-300 ${status === "sending" ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {status === "sending" ? "SENDING..." : "SEND MESSAGE"} <span className="text-lg">➤</span>
            </button>

            {/* Status Feedback */}
            {status === "success" && <p className="text-[#1fe00e] text-center text-xs font-bold animate-bounce mt-2">✅ Message sent successfully!</p>}
            {status === "error" && <p className="text-red-500 text-center text-xs font-bold mt-2">❌ Failed! Check your internet or try later.</p>}
          </form>
        </div>
      </div>

      <footer className="w-full max-w-6xl mt-auto pb-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] text-gray-600 font-bold uppercase tracking-widest gap-4">
        <p>© 2024 Tukesh Khamankar. All rights reserved.</p>
        <div className="flex gap-1">
          <span>Built with</span> <span className="text-gray-400">React</span> <span>&</span> <span className="text-[#1fe00e]">Tailwind CSS</span>
        </div>
      </footer>
    </div>
  );
};

export default Contact;