import React from 'react';
import resumePdf from '../assets/manohar Resume final.pdf';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 glass-card border-none rounded-none bg-dark/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 font-bold text-xl tracking-tighter text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]">
            Manohar Kumar
          </div>
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center space-x-2 bg-slate-900/40 rounded-full px-4 py-1.5 border border-slate-800/50 backdrop-blur-md">
              <a href="#home" className="flex items-center gap-2 hover:bg-slate-800 hover:text-white transition-colors px-4 py-2 text-sm font-semibold rounded-full text-indigo-400 bg-indigo-500/10">🏠 Home</a>
              <a href="#about" className="flex items-center gap-2 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors px-4 py-2 text-sm font-medium rounded-full">👤 About</a>
              <a href="#experience" className="flex items-center gap-2 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors px-4 py-2 text-sm font-medium rounded-full">💼 Experience</a>
              <a href="#projects" className="flex items-center gap-2 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors px-4 py-2 text-sm font-medium rounded-full">🚀 Projects</a>
              <a href="#contact" className="flex items-center gap-2 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors px-4 py-2 text-sm font-medium rounded-full">✉️ Contact</a>
              <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors px-4 py-2 text-sm font-medium rounded-full">📄 Resume <span className="text-xs">↗</span></a>
            </div>
          </div>
          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button type="button" className="text-slate-300 hover:text-white">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
