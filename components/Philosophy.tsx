import React from 'react';
import { Reveal } from './Reveal';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-32 bg-slate-50 texture-membrane">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <Reveal>
          <div className="flex items-center gap-2 mb-8">
             <span className="w-3 h-3 rounded-full border-2 border-emerald-500 animate-pulse-slow"></span>
             <span className="text-xs font-bold tracking-[0.2em] text-emerald-600 uppercase">
              The Philosophy
            </span>
          </div>
        </Reveal>
        
        <div className="space-y-16">
          <Reveal delay={100}>
            <h2 className="text-3xl md:text-5xl font-light leading-tight text-slate-900">
              Energy is finite. <br/>
              <span className="text-slate-400">Leakage is the enemy.</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
            <Reveal delay={200}>
              <div className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-sm transition-all duration-700 ease-out hover:shadow-2xl hover:shadow-emerald-900/5 hover:border-emerald-500/20 hover:-translate-y-1">
                {/* Icon Container with 'Breathing' Nucleus */}
                <div className="w-10 h-10 rounded-full bg-slate-50 mb-6 flex items-center justify-center group-hover:bg-emerald-50 transition-colors duration-500">
                    <div className="w-2 h-2 bg-slate-400 rounded-full group-hover:bg-emerald-500 transition-colors duration-500 group-hover:scale-125 animate-breathe"></div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-emerald-800 transition-colors duration-500">Discipline over Distraction</h3>
                <p className="text-slate-600 font-light leading-relaxed text-sm group-hover:text-slate-700 transition-colors duration-500">
                  The cell membrane protects the nucleus. Similarly, our architecture isolates you from entropy. No external noise. No chaotic variables. Just pure signal.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-sm transition-all duration-700 ease-out hover:shadow-2xl hover:shadow-cyan-900/5 hover:border-cyan-500/20 hover:-translate-y-1">
                 {/* Icon Container with 'Breathing' Nucleus */}
                <div className="w-10 h-10 rounded-full bg-slate-50 mb-6 flex items-center justify-center group-hover:bg-cyan-50 transition-colors duration-500">
                    <div className="w-2 h-2 bg-slate-400 rounded-full group-hover:bg-cyan-500 transition-colors duration-500 group-hover:scale-125 animate-breathe"></div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-cyan-800 transition-colors duration-500">Focus as Biology</h3>
                <p className="text-slate-600 font-light leading-relaxed text-sm group-hover:text-slate-700 transition-colors duration-500">
                  We treat study endurance as a biological function. Lighting, ergonomics, and nutrition are calibrated to extend your "ATP" — your mental energy.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};