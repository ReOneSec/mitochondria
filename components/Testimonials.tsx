import React from 'react';
import { Reveal } from './Reveal';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-slate-50 texture-membrane border-t border-slate-200">
      <div className="container mx-auto px-6 md:px-12">
        <Reveal>
          <div className="mb-20">
            <span className="text-xs font-bold tracking-[0.2em] text-slate-400 uppercase">
              Resident Voices
            </span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Reveal delay={100} className="h-full">
            <div className="group flex flex-col justify-between h-full p-10 rounded-3xl bg-white border border-slate-100 shadow-sm transition-all duration-700 ease-out hover:shadow-2xl hover:shadow-emerald-900/5 hover:border-emerald-500/20 hover:-translate-y-1">
              <Quote className="text-emerald-200 mb-8 group-hover:text-emerald-300 transition-colors duration-500" size={40} />
              <blockquote className="text-xl md:text-2xl font-light leading-relaxed text-slate-800 mb-12 group-hover:text-slate-900 transition-colors duration-500">
                "The silence here isn't empty. It's full of answers. It’s the first place where I felt my ambition was understood by the architecture itself."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-10 h-1 bg-gradient-to-r from-emerald-400 to-emerald-200 rounded-full group-hover:scale-x-110 transition-transform duration-500 origin-left"></div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-900">S. Sharma</p>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">CA Finalist • 8 Months</p>
                </div>
              </div>
            </div>
          </Reveal>
          
          <Reveal delay={200} className="h-full">
            <div className="group flex flex-col justify-between h-full p-10 rounded-3xl bg-white border border-slate-100 shadow-sm transition-all duration-700 ease-out hover:shadow-2xl hover:shadow-cyan-900/5 hover:border-cyan-500/20 hover:-translate-y-1">
               <Quote className="text-cyan-200 mb-8 group-hover:text-cyan-300 transition-colors duration-500" size={40} />
              <blockquote className="text-xl md:text-2xl font-light leading-relaxed text-slate-800 mb-12 group-hover:text-slate-900 transition-colors duration-500">
                "I wasted years in crowded libraries. Mitochondria gave me the routine I couldn't build alone. It's not just a room, it's a mindset."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-10 h-1 bg-gradient-to-r from-cyan-400 to-cyan-200 rounded-full group-hover:scale-x-110 transition-transform duration-500 origin-left"></div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-900">A. Verma</p>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">UPSC Aspirant • 12 Months</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};