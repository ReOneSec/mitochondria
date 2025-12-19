import React from 'react';
import { Reveal } from './Reveal';

interface HeroProps {
  onNavigate?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-screen flex flex-col pt-32 pb-12 overflow-hidden bg-slate-50">
      
      {/* Background Abstract Blob (Cellular Vibe) */}
      <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-cyan-100/50 rounded-full blur-[120px] pointer-events-none animate-drift"></div>
      <div className="absolute bottom-[0%] left-[-10%] w-[40vw] h-[40vw] bg-emerald-100/40 rounded-full blur-[100px] pointer-events-none animate-drift-slow"></div>

      {/* Floating ATP Particles (Energy Metaphor) */}
      <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-emerald-400/30 rounded-full blur-[2px] animate-float pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-cyan-300/40 rounded-full blur-[1px] animate-float-delayed pointer-events-none"></div>
      <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-emerald-200/20 rounded-full blur-[4px] animate-pulse-slow pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col justify-between h-full min-h-[80vh] relative z-10">
        
        {/* Top: Massive Typography */}
        <div className="relative">
          <div className="flex flex-col">
            <Reveal>
              <h1 className="text-[12vw] md:text-[10vw] font-bold leading-[0.85] tracking-tighter text-slate-900 uppercase">
                Silence <br />
                <span className="ml-[10vw] md:ml-[15vw] text-slate-300 transition-colors duration-700 hover:text-emerald-800/50 cursor-default">Fuels The</span> <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-900 to-cyan-700">Powerhouse</span>
              </h1>
            </Reveal>
          </div>
        </div>

        {/* Middle/Bottom: Asymmetrical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mt-12 lg:mt-0">
          
          {/* Visual Element - Organic Shape */}
          <div className="lg:col-span-5 lg:col-start-8 relative">
            <Reveal delay={300} className="w-full">
              <div className="relative aspect-[3/4] md:aspect-[4/3] w-full overflow-hidden bg-emerald-50 rounded-3xl shadow-2xl shadow-emerald-900/10 group cursor-pointer border border-emerald-100/50">
                <img 
                  src="https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=2070&auto=format&fit=crop" 
                  alt="Minimalist Study Space" 
                  className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 opacity-90 group-hover:scale-110 group-hover:grayscale-0 transition-all duration-[1.5s] ease-out"
                />
                 {/* Membrane Overlay */}
                <div className="absolute inset-0 border border-white/20 rounded-3xl pointer-events-none transition-colors duration-500 group-hover:border-emerald-400/30"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/10 to-cyan-500/10 mix-blend-overlay opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Tech Badge */}
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-slate-100 shadow-sm group-hover:scale-105 transition-transform duration-500">
                   <div className="flex items-center gap-2">
                     <div className="relative w-2 h-2">
                        <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-75"></div>
                        <div className="relative w-2 h-2 bg-emerald-500 rounded-full"></div>
                     </div>
                     <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600">Bio-rhythm Active</span>
                   </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Bottom Left Info */}
          <div className="lg:col-span-4 lg:col-start-1 lg:row-start-1 pb-4">
             <Reveal delay={500}>
              <div className="space-y-6">
                <div className="w-12 h-1 bg-gradient-to-r from-emerald-600 to-cyan-500 rounded-full"></div>
                <p className="text-slate-600 text-lg leading-relaxed font-normal max-w-sm">
                  The cellular level of focus. <br/>
                  A residential facility engineered for boys to metabolize ambition into results.
                </p>
                <div className="flex items-center gap-6 pt-4">
                  <button 
                    onClick={onNavigate}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-900 bg-emerald-50 px-6 py-3.5 rounded-full border border-emerald-100 hover:bg-emerald-900 hover:text-white hover:scale-[1.03] hover:shadow-xl hover:shadow-emerald-900/15 active:scale-95 transition-all duration-500 ease-out group"
                  >
                    Request a Seat
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 group-hover:bg-white transition-colors duration-300"></span>
                  </button>
                </div>
              </div>
             </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};