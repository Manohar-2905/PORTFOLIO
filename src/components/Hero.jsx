import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, Award, Code, Coffee, Briefcase, ArrowRight, Download, Github, Linkedin, Instagram, Mail, MessageCircle } from 'lucide-react';
import resumePdf from '../assets/manohar Resume final.pdf';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    "Full Stack MERN Developer",
    "React.js & Next.js Expert",
    "Backend Architecture Enthusiast"
  ];

  useEffect(() => {
    let timer;
    const currentRole = roles[loopNum % roles.length];

    if (isDeleting) {
      timer = setTimeout(() => {
        setText(currentRole.substring(0, text.length - 1));
        setTypingSpeed(50);
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setText(currentRole.substring(0, text.length + 1));
        setTypingSpeed(150);
      }, typingSpeed);
    }

    if (!isDeleting && text === currentRole) {
      setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, roles, typingSpeed]);

  return (
    <header id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Dynamic Background Elements (Simulated code particles) */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <span className="absolute top-1/4 left-1/4 text-indigo-500 font-mono text-sm rotate-12 blur-[1px]">React</span>
        <span className="absolute top-1/3 right-1/4 text-purple-500 font-mono text-xl -rotate-12 blur-[1px]">{`{ }`}</span>
        <span className="absolute bottom-1/4 left-1/3 text-blue-500 font-mono text-sm -rotate-45 blur-[2px]">Node.js</span>
        <span className="absolute bottom-1/3 right-1/3 text-indigo-400 font-mono text-lg rotate-45 blur-[1px]">API</span>
        <span className="absolute top-1/2 left-10 text-pink-500 font-mono text-sm rotate-90 blur-[1px]">CSS</span>
      </div>

      <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center">

        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-amber-500/50 bg-amber-500/5 mb-8 hover:bg-amber-500/10 transition-colors cursor-default animate-fade-in-up">
          <span className="text-amber-500">🏆</span>
          <span className="text-amber-500/90 text-sm font-semibold tracking-wide">
            Full Stack Developer  | 8.6 CGPA ✨
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-6xl md:text-[5.5rem] font-bold mb-4 tracking-tight leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 drop-shadow-[0_0_20px_rgba(56,189,248,0.3)]">
            Manohar Kumar
          </span>
        </h1>

        {/* Typewriter Subtitle */}
        <p className="text-2xl md:text-3xl font-light text-slate-300 mb-8 h-10 flex items-center justify-center gap-2">
          <span>21-year-old</span>
          <span className="font-semibold text-indigo-400">{text}</span>
          <span className="animate-pulse inline-block w-0.5 h-8 bg-indigo-500"></span>
        </p>

        {/* Location & Availability */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400 mb-10 font-medium">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-blue-500" />
            <span>Delhi, India</span>
          </div>
          <span className="w-1 h-1 rounded-full bg-slate-600"></span>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-emerald-500" />
            <span>Available for opportunities</span>
          </div>
        </div>

        {/* Stat Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="flex items-center gap-2 px-5 py-2 rounded-full border border-blue-500/30 bg-blue-500/5 hover:bg-blue-500/10 transition-colors">
            <Briefcase className="w-4 h-4 text-blue-400" />
            <span className="text-slate-200 font-semibold text-sm">1 Internships</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-2 rounded-full border border-purple-500/30 bg-purple-500/5 hover:bg-purple-500/10 transition-colors">
            <Code className="w-4 h-4 text-purple-400" />
            <span className="text-slate-200 font-semibold text-sm">10+ Projects</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/5 hover:bg-emerald-500/10 transition-colors">
            <Award className="w-4 h-4 text-emerald-400" />
            <span className="text-slate-200 font-semibold text-sm">MERN Expert</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-2 rounded-full border border-slate-600 bg-slate-800/30 hover:bg-slate-800/50 transition-colors">
            <Coffee className="w-4 h-4 text-slate-300" />
            <span className="text-slate-200 font-semibold text-sm">Coffee Cups</span>
          </div>
        </div>

        {/* Description Text */}
        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-lg text-slate-400 leading-relaxed mb-6">
            Crafting <span className="text-blue-500 font-semibold">scalable web applications</span> with passion and precision. Specialized in <span className="text-purple-400 font-semibold">React.js & Next.js</span> ecosystems, with expertise in <span className="text-emerald-500 font-semibold">Node.js & PostgreSQL</span> backends.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            <span className="flex items-center gap-2">🎯 Building products that make a difference</span>
            <span className="flex items-center gap-2">🚀 Startup mindset</span>
            <span className="flex items-center gap-2">💡 Innovation driven</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <a href="#experience" className="group relative flex items-center gap-3 px-8 py-3.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]">
            <span className="relative z-10">🚀 Explore My Work</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </a>

          <a href={resumePdf} download="Manohar_Kumar_Resume.pdf" className="flex items-center gap-3 px-8 py-3.5 rounded-full border border-slate-600 text-slate-200 font-semibold hover:bg-slate-800 transition-all hover:border-blue-500 hover:text-blue-400">
            <Download className="w-5 h-5" />
            <span>Download CV</span>
          </a>
        </div>

        {/* Fixed Social Sidebar (Left) */}
      </div>

      {/* Fixed Social Sidebar (Left) */}
      <div className="hidden xl:flex flex-col items-center gap-6 fixed left-8 top-1/2 -translate-y-1/2 z-40 bg-slate-900/40 p-3 rounded-3xl border border-slate-800/50 backdrop-blur-sm">
        <a href="https://github.com/Manohar-2905" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-white transition-colors">
          <Github className="w-6 h-6" />
        </a>
        <a href="https://www.linkedin.com/in/manohar-kumar-661981294/" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-blue-400 transition-colors">
          <Linkedin className="w-6 h-6" />
        </a>
        <a href="https://www.instagram.com/manoharsahu_295?igsh=MXFpOXE3eGZieWw1cg==" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-pink-400 transition-colors">
          <Instagram className="w-6 h-6" />
        </a>
        <a href="mailto:kumarmanohar6206@gmail.com" className="p-2 text-slate-400 hover:text-red-400 transition-colors">
          <Mail className="w-6 h-6" />
        </a>
      </div>

      {/* Fixed Floating Action (Right) */}
      <div className="hidden xl:flex fixed right-12 top-1/2 -translate-y-1/2 z-40">
        <a href="https://www.linkedin.com/in/manohar-kumar-661981294/" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-800/50 rounded-2xl border border-slate-700 backdrop-blur text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all opacity-50 hover:opacity-100 rotate-12 hover:rotate-0">
          <Linkedin className="w-8 h-8" />
        </a>
      </div>
    </header>
  );
};

export default Hero;
