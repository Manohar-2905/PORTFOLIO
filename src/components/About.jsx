import React from 'react';
import ScrollReveal from './ScrollReveal';

const About = () => {
  return (
    <section id="about" className="relative">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <ScrollReveal direction="right">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold flex items-center gap-4">
              <span className="w-12 h-1 bg-indigo-500"></span>
              About Me
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              I am a Software Development Engineer (SDE) aspirant with strong foundations in Data Structures, Algorithms, and Object-Oriented Programming. I have successfully solved 200+ complex problems and possess extensive experience in designing and deploying scalable full-stack MERN applications.
            </p>
            <p className="text-lg text-slate-400 italic">
              "The transition from a MERN developer to an AI-integrated Full-Stack Engineer is evidenced by my focus on Next.js and Cloudinary, pointing toward a strategic preference for scalable architectures."
            </p>
            <div className="flex gap-4 pt-4">
              <div className="p-4 glass-card rounded-2xl flex-1 text-center">
                <span className="block text-2xl font-bold text-indigo-400">200+</span>
                <span className="text-xs uppercase tracking-widest text-slate-500">DSA Problems</span>
              </div>
              <div className="p-4 glass-card rounded-2xl flex-1 text-center">
                <span className="block text-2xl font-bold text-indigo-400">Arctic</span>
                <span className="text-xs uppercase tracking-widest text-slate-500">Code Vault Contributor</span>
              </div>
              <div className="p-4 glass-card rounded-2xl flex-1 text-center">
                <span className="block text-2xl font-bold text-indigo-400">Postman</span>
                <span className="text-xs uppercase tracking-widest text-slate-500">Student Expert</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="left" delay={0.2}>
          <div className="glass-card p-8 rounded-3xl border-indigo-500/20">
            <h3 className="text-xl font-bold mb-6 text-indigo-300">Education</h3>
            <div className="space-y-8">
              <div className="relative pl-8 border-l border-slate-700">
                <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-indigo-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.8)]"></div>
                <p className="text-sm text-indigo-400 font-mono">2023 — 2027</p>
                <h4 className="text-lg font-bold">B.Tech, Information Technology</h4>
                <p className="text-slate-400">Bhagwan Parshuram Institute of Technology (BPIT), New Delhi</p>
                <p className="text-slate-500 mt-2 font-medium">CGPA: 8.5</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;
