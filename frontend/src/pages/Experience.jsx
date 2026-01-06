import React from 'react';

const ExperiencePage = () => {
  return (
    <div className="bg-[#0b160a] font-['Inter'] text-slate-300 antialiased min-h-screen overflow-x-hidden selection:bg-[#38ff14] selection:text-black">
      
      {/* CSS Injection for hidden scrollbar */}
      <style dangerouslySetInnerHTML={{ __html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />



      <main className="max-w-5xl mx-auto px-6 py-16 space-y-24">
        
        {/* Page Heading */}
        <section className="relative">
          <div className="absolute -top-10 left-0 w-64 h-64 bg-[#38ff14]/5 blur-[100px] rounded-full"></div>
          <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl font-black text-white mt-16 leading-tight">
              Experience & <br/>
              <span className="inline-block drop-shadow-[0_0_10px_rgba(57,255,20,0.8)]  animate-pulse scale-100 hover:scale-110 transition-transform duration-700 text-primary">Education</span>
            </h1>
            <p className="text-gray-500 text-lg mt-6 max-w-2xl leading-relaxed font-medium">
              A timeline of my professional journey, academic background, and the technical milestones that define my career.
            </p>
          </div>
        </section>

        {/* 1. Professional Experience Section */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-10 rounded-xl bg-[#132311] border border-[#38ff14]/20 flex items-center justify-center text-[#38ff14] shadow-[0_0_15px_rgba(56,255,20,0.2)]">
              <span className="material-symbols-outlined">work</span>
            </div>
            <h2 className="text-2xl font-bold text-white uppercase tracking-widest text-sm opacity-80">Professional Experience</h2>
          </div>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#38ff14]/40 before:via-white/5 before:to-transparent">
            <ExperienceCard 
              role="Senior Full Stack Engineer"
              company="TechSolutions Inc."
              date="Jan 2024 - Present"
              desc={[
                "Architected scalable microservices reducing system latency by 40%.",
                "Led a team of 4 juniors in migrating legacy frontend to Next.js.",
                "Optimized cloud infrastructure on AWS for high availability."
              ]}
              tech={['React', 'Spring Boot', 'AWS', 'PostgreSQL']}
            />
            <ExperienceCard 
              role="Frontend Developer"
              company="CreativeWeb Agency"
              date="Jun 2022 - Dec 2023"
              desc={[
                "Developed pixel-perfect UIs for over 15 client projects.",
                "Improved Lighthouse performance scores from 60 to 98."
              ]}
              tech={['JavaScript', 'Tailwind CSS', 'Figma', 'React']}
            />
          </div>
        </section>

        {/* 2. Education & Certifications Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Education Card */}
          <div className="group bg-[#132311]/40 border border-[#38ff14]/10 p-8 rounded-[2.5rem] hover:border-[#38ff14]/50 hover:shadow-[0_0_30px_rgba(56,255,20,0.15)] transition-all duration-500 relative overflow-hidden">
            <div className="relative z-10">
              <div className="w-14 h-14 bg-[#0b160a] border border-[#38ff14]/20 rounded-2xl flex items-center justify-center text-[#38ff14] mb-8 shadow-[inset_0_0_15px_rgba(56,255,20,0.1)] group-hover:shadow-[0_0_20px_rgba(56,255,20,0.3)] transition-all">
                <span className="material-symbols-outlined text-3xl">school</span>
              </div>
              <p className="text-[#38ff14] text-[10px] font-black tracking-[0.3em] uppercase mb-2">2017 — 2021</p>
              <h3 className="text-2xl font-bold text-white mb-2">B.Tech in Computer Science</h3>
              <p className="text-gray-500 font-medium mb-8 text-lg">State University of Technology</p>
              
              <div className="pt-6 border-t border-white/5 space-y-4">
                <p className="text-[10px] font-black tracking-widest text-white/40 uppercase">Notable Achievements</p>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#38ff14] text-sm">verified</span>
                  <p className="text-sm text-gray-400 font-bold">First Class Honors (3.8 GPA)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications Card (Vertical List) */}
          <div className="group bg-[#132311]/40 border border-[#38ff14]/10 p-8 rounded-[2.5rem] hover:border-[#38ff14]/50 hover:shadow-[0_0_30px_rgba(56,255,20,0.15)] transition-all duration-500">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined text-[#38ff14]">workspace_premium</span>
              Certifications
            </h3>
            <div className="space-y-4">
              <CertItem icon="cloud" color="text-yellow-500" name="AWS Solutions Architect" org="Amazon" />
              <CertItem icon="code" color="text-blue-500" name="Meta Front-End Developer" org="Meta" />
              <CertItem icon="security" color="text-[#38ff14]" name="Cybersecurity Specialist" org="IBM" />
            </div>
          </div>
        </section>

        {/* 3. Achievements (Horizontal Scroll - Hidden Scrollbar) */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <span className="material-symbols-outlined text-[#38ff14] text-3xl drop-shadow-[0_0_8px_#38ff14]">emoji_events</span>
            <h2 className="text-2xl font-bold text-white">Achievements & Hackathons</h2>
          </div>
          
          <div className="flex gap-6 overflow-x-auto pb-4 hide-scrollbar snap-x">
            <AchievementCard title="Global AI Hackathon 2023" role="Winner (1st Place)" icon="trophy" color="text-yellow-500" />
            <AchievementCard title="LeetCode Annual Contest" role="Top 10%" icon="code_blocks" color="text-[#38ff14]" />
            <AchievementCard title="Google Summer of Code" role="Mentor" icon="groups" color="text-blue-400" />
            <AchievementCard title="Smart India Hackathon" role="Finalist" icon="lightbulb" color="text-purple-400" />
          </div>
        </section>

      </main>

      <footer className="py-12 text-center border-t border-white/5">
        <p className="text-[10px] font-bold text-gray-600 tracking-widest uppercase">
          © 2024 DevPortfolio. Designed with Neon & Logic.
        </p>
      </footer>
    </div>
  );
};

/* --- Helper Components --- */

const ExperienceCard = ({ role, company, date, desc, tech }) => (
  <div className="relative pl-12 group">
    {/* Animated Timeline Node */}
    <div className="absolute left-[11px] top-2 w-4 h-4 rounded-full bg-[#0b160a] border-2 border-white/20 group-hover:border-[#38ff14] group-hover:shadow-[0_0_15px_#38ff14] transition-all z-10 flex items-center justify-center">
      <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#38ff14] transition-colors"></div>
    </div>
    
    <div className="bg-[#132311]/20 border border-white/5 p-6 md:p-8 rounded-[2rem] group-hover:border-[#38ff14]/40 group-hover:bg-[#132311]/40 group-hover:shadow-[0_0_25px_rgba(56,255,20,0.1)] transition-all duration-300">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-[#38ff14] transition-colors">{role}</h3>
          <p className="text-[#38ff14] font-bold text-sm">{company}</p>
        </div>
        <span className="text-[10px] font-mono bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-gray-500">{date}</span>
      </div>
      <ul className="space-y-3 mb-8">
        {desc.map((item, i) => (
          <li key={i} className="text-sm text-gray-500 flex gap-3 leading-relaxed group-hover:text-gray-300 transition-colors">
            <span className="text-[#38ff14] mt-1.5">●</span> {item}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {tech.map(t => (
          <span key={t} className="px-3 py-1 bg-black/40 border border-white/5 rounded-full text-[10px] font-black text-gray-400 group-hover:text-white group-hover:border-[#38ff14]/30 transition-all uppercase tracking-tighter">
            {t}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const CertItem = ({ icon, color, name, org }) => (
  <div className="flex items-center gap-4 p-4 bg-black/30 border border-white/5 rounded-[1.2rem] hover:border-[#38ff14]/40 hover:bg-[#132311]/60 transition-all group cursor-default">
    <div className={`w-11 h-11 rounded-full bg-white/5 flex items-center justify-center ${color} group-hover:shadow-[0_0_15px_currentColor] group-hover:scale-110 transition-all duration-300`}>
      <span className="material-symbols-outlined text-2xl">{icon}</span>
    </div>
    <div className="flex-1">
      <p className="text-sm font-bold text-white group-hover:text-[#38ff14] transition-colors">{name}</p>
      <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest">{org} • 2023</p>
    </div>
  </div>
);

const AchievementCard = ({ title, role, icon, color }) => (
  <div className="min-w-[300px] md:min-w-[340px] snap-center bg-[#132311]/40 border border-[#38ff14]/10 p-6 rounded-[2rem] flex items-center gap-5 hover:border-[#38ff14]/60 hover:shadow-[0_0_25px_rgba(56,255,20,0.2)] transition-all duration-500 group">
    <div className={`w-16 h-16 rounded-2xl bg-[#0b160a] border border-white/5 flex items-center justify-center ${color} group-hover:shadow-[0_0_20px_currentColor] transition-all`}>
      <span className="material-symbols-outlined text-3xl">{icon}</span>
    </div>
    <div>
      <p className={`font-black text-[10px] uppercase tracking-widest ${color} mb-1`}>{role}</p>
      <p className="text-base font-bold text-white group-hover:text-[#38ff14] transition-colors leading-tight">{title}</p>
    </div>
  </div>
);

export default ExperiencePage;