import React from 'react';
import ScrollReveal from './ScrollReveal';

const Experience = () => {
  return (
    <section id="experience" className="space-y-12">
      <ScrollReveal>
        <h2 className="text-4xl font-bold">Work <span className="text-indigo-400">Journey</span></h2>
      </ScrollReveal>
      <div className="space-y-8 max-w-4xl">
        {/* Experience 1 */}
        <ScrollReveal delay={0.1}>
          <div className="relative pl-12 pb-12 border-l-2 border-slate-800">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-500 border-4 border-dark"></div>
            <div className="glass-card p-6 rounded-2xl space-y-4">
              <div className="flex flex-wrap justify-between items-start gap-2">
                <div>
                  <h3 className="text-xl font-bold">Frontend Developer Intern</h3>
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="text-indigo-400 font-medium">Coding Bits | New Delhi</p>
                    <a href="https://ralegal.in/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 hover:bg-indigo-500/20 transition-colors font-semibold">
                      Visit Site ↗
                    </a>
                  </div>
                </div>
                <span className="px-3 py-1 bg-slate-800 rounded-full text-xs font-mono">June 2025 — July 2025</span>
              </div>
              <ul className="list-disc list-inside text-slate-400 space-y-2 text-sm md:text-base">
                <li>Developed scalable React.js components with reusable architecture, reducing redundancy by 25%.</li>
                <li>Implemented automated communication workflows using EmailJS handling dynamic form submissions.</li>
                <li>Optimized UI performance and routing logic using React Router and modular state management.</li>
              </ul>
            </div>
          </div>
        </ScrollReveal>

        {/* Experience 2 */}
        <ScrollReveal delay={0.2}>
          <div className="relative pl-12 pb-12 border-l-2 border-slate-800">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-500 border-4 border-dark"></div>
            <div className="glass-card p-6 rounded-2xl space-y-4">
              <div className="flex flex-wrap justify-between items-start gap-2">
                <div>
                  <h3 className="text-xl font-bold">Freelance Full-Stack Developer</h3>
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="text-indigo-400 font-medium">Dasgupta Maiti and Associates | Kolkata</p>
                    <a href="https://dasguptamaitiassociates.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 hover:bg-indigo-500/20 transition-colors font-semibold">
                      Visit Site ↗
                    </a>
                  </div>
                </div>
                <span className="px-3 py-1 bg-slate-800 rounded-full text-xs font-mono">Nov 2025 — Jan 2026</span>
              </div>
              <ul className="list-disc list-inside text-slate-400 space-y-2 text-sm md:text-base">
                <li>Designed and developed secure full-stack MERN application with structured RESTful APIs.</li>
                <li>Implemented JWT-based authentication and role-based access control (RBAC).</li>
                <li>Integrated Cloudinary for media handling and Nodemailer for automated transactional emails.</li>
              </ul>
            </div>
          </div>
        </ScrollReveal>

        {/* Experience 3 */}
        <ScrollReveal delay={0.3}>
          <div className="relative pl-12 border-l-2 border-slate-800">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-500 border-4 border-dark"></div>
            <div className="glass-card p-6 rounded-2xl space-y-4">
              <div className="flex flex-wrap justify-between items-start gap-2">
                <div>
                  <h3 className="text-xl font-bold">Freelance Full-Stack Developer (HMS Project)</h3>
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="text-indigo-400 font-medium">Yashoda Bhawan | Jharkhand</p>
                    <a href="https://yashodabhawan.in/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 hover:bg-indigo-500/20 transition-colors font-semibold">
                      Visit Site ↗
                    </a>
                  </div>
                </div>
                <span className="px-3 py-1 bg-slate-800 rounded-full text-xs font-mono">Dec 2025 — Jan 2026</span>
              </div>
              <ul className="list-disc list-inside text-slate-400 space-y-2 text-sm md:text-base">
                <li>Architected and built Hostel Management System using MERN stack with scalable backend principles.</li>
                <li>Developed protected REST APIs with authentication middleware and Bcrypt encryption.</li>
                <li>Automated report generation using pdf-lib and integrated email notification workflows.</li>
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Experience;
