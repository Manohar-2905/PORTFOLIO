import React from 'react';
import ScrollReveal from './ScrollReveal';

const Projects = () => {
  return (
    <section id="projects" className="space-y-12">
      <ScrollReveal>
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-4xl font-bold">My <span className="text-indigo-400">Projects</span></h2>
            <p className="text-slate-400 mt-2">Real-world applications I have designed, developed and deployed.</p>
          </div>
          <a href="https://github.com/Manohar-2905" target="_blank" rel="noopener noreferrer" className="hidden md:block text-indigo-400 hover:text-indigo-300 font-medium">View GitHub →</a>
        </div>
      </ScrollReveal>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Project 1: Studify Hub */}
        <ScrollReveal delay={0.1}>
          <div className="glass-card rounded-3xl overflow-hidden flex flex-col h-full">
            <div className="p-8 space-y-5 flex-1 flex flex-col">
              <div>
                <div className="flex items-center justify-between flex-wrap gap-3 mb-3">
                  <h3 className="text-2xl font-bold text-white">Studify Hub</h3>
                  <div className="flex gap-2 flex-wrap">
                    <span className="skill-tag">JavaScript</span>
                    <span className="skill-tag">Groq API</span>
                  </div>
                </div>
                <p className="text-slate-400 text-sm mb-4">A feature-rich study platform powered by Groq API integration for AI interactions, multilingual translation, and real-time code execution.</p>
              </div>
              <ul className="text-slate-400 text-sm space-y-2 flex-1">
                <li className="flex gap-2"><span className="text-indigo-400 mt-0.5">▸</span>Built modular frontend architecture using reusable components and optimized rendering techniques.</li>
                <li className="flex gap-2"><span className="text-indigo-400 mt-0.5">▸</span>Integrated Groq API to implement AI chatbot, multilingual translation, and real-time code execution.</li>
                <li className="flex gap-2"><span className="text-indigo-400 mt-0.5">▸</span>Improved user engagement through responsive design and efficient client-side state handling.</li>
              </ul>
              <div className="flex gap-4 pt-4">
                <a href="https://manohar-2905.github.io/StudifyHub/" target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-indigo-500/10 rounded-lg text-indigo-400 text-sm font-bold hover:bg-indigo-500/20 transition-colors border border-indigo-500/20">Live Demo ↗</a>
                <a href="https://github.com/Manohar-2905/StudifyHub" target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded-lg text-slate-400 text-sm font-bold hover:text-white transition-colors border border-slate-700 hover:border-slate-500">Source Code</a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Project 2: CRUD Operation */}
        <ScrollReveal delay={0.2}>
          <div className="glass-card rounded-3xl overflow-hidden flex flex-col h-full">
            <div className="p-8 space-y-5 flex-1 flex flex-col">
              <div>
                <div className="flex items-center justify-between flex-wrap gap-3 mb-3">
                  <h3 className="text-2xl font-bold text-white">CRUD Operation</h3>
                  <div className="flex gap-2 flex-wrap">
                    <span className="skill-tag">JavaScript</span>
                    <span className="skill-tag">Local Storage</span>
                  </div>
                </div>
                <p className="text-slate-400 text-sm mb-4">A clean client-side CRUD application showcasing persistent state management using browser Local Storage with smooth data flow architecture.</p>
              </div>
              <ul className="text-slate-400 text-sm space-y-2 flex-1">
                <li className="flex gap-2"><span className="text-indigo-400 mt-0.5">▸</span>Developed structured CRUD application implementing client-side data persistence and dynamic UI updates.</li>
                <li className="flex gap-2"><span className="text-indigo-400 mt-0.5">▸</span>Designed clean data flow architecture with validation, pagination, and state synchronization.</li>
                <li className="flex gap-2"><span className="text-indigo-400 mt-0.5">▸</span>Improved usability with SweetAlert confirmations and optimized DOM manipulation.</li>
              </ul>
              <div className="flex gap-4 pt-4">
                <a href="https://manohar-2905.github.io/CrudeOperation/" target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-indigo-500/10 rounded-lg text-indigo-400 text-sm font-bold hover:bg-indigo-500/20 transition-colors border border-indigo-500/20">Live Demo ↗</a>
                <a href="https://github.com/Manohar-2905/CrudeOperation" target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded-lg text-slate-400 text-sm font-bold hover:text-white transition-colors border border-slate-700 hover:border-slate-500">Source Code</a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Projects;
