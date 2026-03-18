import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © 2026 Manohar Kumar. Build with Purpose.
          </p>
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/manohar-kumar-661981294/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">LinkedIn</a>
            <a href="https://github.com/Manohar-2905" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">GitHub</a>
            <a href="https://manoharkumar.in" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">Portfolio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
