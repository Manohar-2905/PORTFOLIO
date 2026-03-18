import React from 'react';
import ScrollReveal from './ScrollReveal';

const Skills = () => {
  return (
    <section id="skills" className="space-y-12">
      <ScrollReveal>
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Technical <span className="text-indigo-400">Arsenal</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Mastering the modern web stack to build high-performance, accessible, and scalable digital products.</p>
        </div>
      </ScrollReveal>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Programming */}
        <div className="glass-card p-6 rounded-2xl group">
          <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-indigo-500/40 transition-colors">
            <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
          </div>
          <h3 className="font-bold mb-4">Programming</h3>
          <div className="flex flex-wrap gap-2">
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">C++</span>
            <span className="skill-tag">Java</span>
            <span className="skill-tag">Python</span>
          </div>
        </div>
        {/* Frontend */}
        <div className="glass-card p-6 rounded-2xl group">
          <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-500/40 transition-colors">
            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path></svg>
          </div>
          <h3 className="font-bold mb-4">Frontend</h3>
          <div className="flex flex-wrap gap-2">
            <span className="skill-tag">React.js</span>
            <span className="skill-tag">Next.js</span>
            <span className="skill-tag">Tailwind CSS</span>
            <span className="skill-tag">Framer Motion</span>
            <span className="skill-tag">Redux Toolkit</span>
          </div>
        </div>
        {/* Backend & DB */}
        <div className="glass-card p-6 rounded-2xl group">
          <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-500/40 transition-colors">
            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path></svg>
          </div>
          <h3 className="font-bold mb-4">Backend & DB</h3>
          <div className="flex flex-wrap gap-2">
            <span className="skill-tag">Node.js</span>
            <span className="skill-tag">Express.js</span>
            <span className="skill-tag">Socket.io</span>
            <span className="skill-tag">MongoDB</span>
            <span className="skill-tag">MySQL</span>
          </div>
        </div>
        {/* DevTools */}
        <div className="glass-card p-6 rounded-2xl group">
          <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-pink-500/40 transition-colors">
            <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
          </div>
          <h3 className="font-bold mb-4">DevTools</h3>
          <div className="flex flex-wrap gap-2">
            <span className="skill-tag">Git/GitHub</span>
            <span className="skill-tag">Postman</span>
            <span className="skill-tag">Cloudinary</span>
            <span className="skill-tag">Render/Vercel</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
