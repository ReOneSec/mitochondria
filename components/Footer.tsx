import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-24 bg-brand-dark text-slate-300 border-t border-emerald-900/50 relative overflow-hidden">
      {/* Subtle Glows */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start relative z-10">
        
        <div className="mb-12 md:mb-0">
          <div className="mb-8 hover:opacity-80 transition-all duration-500 hover:scale-105 origin-left inline-block">
             <Logo height={50} />
          </div>
          <p className="font-light max-w-xs text-sm leading-relaxed mb-8 text-slate-300">
            The membrane for your focus.<br />
            An isolated environment for serious academic pursuit.
          </p>
          <a href="mailto:admission@mitochondria.space" className="text-sm text-emerald-400 hover:text-emerald-300 transition-all duration-300 flex items-center gap-2 group">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 group-hover:scale-150 transition-transform duration-300"></span>
            <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">admission@mitochondria.space</span>
          </a>
        </div>

        <div className="grid grid-cols-2 gap-12 text-sm">
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Visit</h4>
            <address className="not-italic font-light leading-relaxed text-slate-300 hover:text-emerald-100 transition-colors duration-300 cursor-default">
              Plot 45, Quiet Zone<br />
              Civil Lines, Sector 4<br />
              [City Name], India
            </address>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Contact</h4>
            <p className="font-light leading-relaxed text-slate-300 hover:text-emerald-100 transition-colors duration-300 cursor-default">
              +91 98765 43210<br />
              Mon - Sat<br />
              10:00 AM - 06:00 PM
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 mt-20 pt-8 border-t border-emerald-900/30 text-xs font-light text-slate-500">
        <div className="flex justify-center md:justify-start mb-4">
           <p className="text-slate-500 text-center md:text-left">
             Disclaimer: Site Contents designed, developed, maintained and updated by <a href="https://www.epplicon.net" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 transition-colors">"Epplicon Technologies"</a>
           </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500">&copy; {new Date().getFullYear()} Mitochondria Study Space.</p>
          <p className="mt-2 md:mt-0 flex items-center gap-2 text-slate-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-slow shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
              Biology of Discipline
          </p>
        </div>
      </div>
    </footer>
  );
};