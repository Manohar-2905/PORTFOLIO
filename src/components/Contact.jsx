import React from 'react';
import ScrollReveal from './ScrollReveal';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thanks for reaching out! I will get back to you soon.');
  };

  return (
    <ScrollReveal>
      <section id="contact" className="glass-card p-12 rounded-[3rem] border-indigo-500/30 overflow-hidden relative">
        <div className="relative z-10 grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="text-5xl font-black leading-tight">Let's build something <span className="text-gradient">remarkable.</span></h2>
            <p className="text-slate-400 text-lg">I'm always looking for opportunities to contribute to meaningful projects. Whether it's a new startup or a social initiative, let's talk.</p>
            <div className="space-y-6">
              <a href="mailto:kumarmanohar6206@gmail.com" className="flex items-center gap-4 text-slate-300 hover:text-indigo-400 transition-colors group">
                <div className="w-12 h-12 bg-indigo-500/10 rounded-full flex items-center justify-center group-hover:bg-indigo-500/20">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <p className="text-xs uppercase text-slate-500">Email Me</p>
                  <p className="font-bold">kumarmanohar6206@gmail.com</p>
                </div>
              </a>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 bg-indigo-500/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div>
                  <p className="text-xs uppercase text-slate-500">Location</p>
                  <p className="font-bold">Delhi, India</p>
                </div>
              </div>
            </div>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-6 py-4 focus:ring-2 focus:ring-indigo-500 outline-none transition-all" />
            <input type="email" placeholder="Your Email" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-6 py-4 focus:ring-2 focus:ring-indigo-500 outline-none transition-all" />
            <textarea rows="4" placeholder="How can I help you?" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-6 py-4 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"></textarea>
            <button type="submit" className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/20 transition-transform active:scale-95">
              Send Message
            </button>
          </form>
        </div>
        {/* Subtle Gradient for the contact section */}
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"></div>
      </section>
    </ScrollReveal>
  );
};

export default Contact;
