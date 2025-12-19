import React from 'react';
import { Reveal } from './Reveal';
import { ArrowRight } from 'lucide-react';

interface CTAProps {
  onNavigate?: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onNavigate }) => {
  return (
    <section className="py-40 bg-white texture-membrane flex flex-col items-center justify-center text-center relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-radial-gradient from-emerald-50/50 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <Reveal>
          <div className="relative inline-block mb-6">
             {/* Concentric Energy Ripples */}
             <div className="absolute inset-0 border border-emerald-500 rounded-full animate-energy-pulse opacity-50"></div>
             <div className="absolute inset-0 border border-emerald-400 rounded-full animate-energy-pulse opacity-30" style={{ animationDelay: '0.5s' }}></div>
             
             <div className="relative p-4 rounded-full bg-emerald-50 border border-emerald-100 z-10">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
             </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-light text-slate-900 mb-8 leading-tight">
            If focus matters,<br />
            this place will feel <span className="font-serif italic text-emerald-600">right</span>.
          </h2>
        </Reveal>
        
        <Reveal delay={200}>
          <div className="mt-12 flex flex-col items-center">
            <button 
              onClick={onNavigate}
              className="group relative inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-slate-900 to-slate-800 text-white overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20 hover:scale-105 rounded-full"
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <span className="relative text-sm font-bold tracking-widest uppercase z-10">Request a Seat</span>
              <ArrowRight size={16} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <p className="mt-8 text-xs text-slate-400 uppercase tracking-widest font-medium">
              Limited Intake: <span className="text-emerald-600">Open</span> for next session
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};