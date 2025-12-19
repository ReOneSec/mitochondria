import React from 'react';
import { Reveal } from './Reveal';

export const Manifesto: React.FC = () => {
  return (
    <section id="manifesto" className="py-40 bg-brand-dark text-slate-200 relative overflow-hidden">
      
      {/* Biological Gradient Mesh Background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2 mix-blend-screen"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3 mix-blend-screen"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <Reveal>
            <h2 className="text-[15vw] leading-[0.8] font-bold text-transparent bg-clip-text bg-gradient-to-b from-emerald-900 to-brand-dark select-none pointer-events-none mb-12 stroke-text opacity-50">
                MITOCHONDRIA
            </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-emerald-900/30 pt-16">
          <div className="lg:col-span-4">
             <Reveal delay={200}>
              <h3 className="text-3xl md:text-4xl font-bold leading-tight text-white">
                The Powerhouse <br /> <span className="text-emerald-500">of Focus.</span>
              </h3>
              <p className="mt-6 text-sm text-slate-400 max-w-xs leading-relaxed">
                  Just as mitochondria generate energy for the cell, this space generates the mental discipline required for the toughest competitive exams (UPSC, CA, JEE).
              </p>
             </Reveal>
          </div>
          
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-12">
            <Reveal delay={300}>
              <div className="space-y-4 group cursor-default">
                <span className="text-xs font-mono text-emerald-400 px-2 py-1 bg-emerald-900/30 rounded-md transition-colors duration-300 group-hover:bg-emerald-800/50 border border-emerald-900/30">Step 01</span>
                <h4 className="text-lg font-medium text-white group-hover:text-emerald-300 transition-colors duration-300 group-hover:translate-x-2 transform">The Input</h4>
                <p className="text-slate-400 font-light text-sm leading-relaxed transition-opacity duration-300 group-hover:text-slate-300">
                  Satvik-inspired nutrition designed to prevent lethargy. Fuel that burns clean for 12+ hours of cognitive load.
                </p>
              </div>
            </Reveal>
            
            <Reveal delay={400}>
               <div className="space-y-4 group cursor-default">
                <span className="text-xs font-mono text-cyan-400 px-2 py-1 bg-cyan-900/30 rounded-md transition-colors duration-300 group-hover:bg-cyan-800/50 border border-cyan-900/30">Step 02</span>
                <h4 className="text-lg font-medium text-white group-hover:text-cyan-300 transition-colors duration-300 group-hover:translate-x-2 transform">The Process</h4>
                <p className="text-slate-400 font-light text-sm leading-relaxed transition-opacity duration-300 group-hover:text-slate-300">
                  Routine is the enzyme of success. We provide the operational backbone so you can focus entirely on studying.
                </p>
              </div>
            </Reveal>

            <Reveal delay={500}>
               <div className="space-y-4 group cursor-default">
                <span className="text-xs font-mono text-white px-2 py-1 bg-emerald-800/30 rounded-md transition-colors duration-300 group-hover:bg-emerald-700/40 border border-emerald-700/30">Step 03</span>
                <h4 className="text-lg font-medium text-white group-hover:text-emerald-100 transition-colors duration-300 group-hover:translate-x-2 transform">The Output</h4>
                <p className="text-slate-400 font-light text-sm leading-relaxed transition-opacity duration-300 group-hover:text-slate-300">
                  You are the average of the people around you. Live amongst 25 others who share your intense ambition.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};