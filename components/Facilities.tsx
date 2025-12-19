import React from 'react';
import { Reveal } from './Reveal';

const facilities = [
  { 
    id: "01",
    category: "Environment",
    title: "Climate Control", 
    spec: "22°C Constant",
    desc: "Centralized silent air-conditioning maintained at optimal temperature." 
  },
  { 
    id: "02",
    category: "Ergonomics",
    title: "Dedicated Station", 
    spec: "4ft x 2ft Desk",
    desc: "Private oversized desks with orthopedically designed seating." 
  },
  { 
    id: "03",
    category: "Network",
    title: "Neural Link", 
    spec: "300 Mbps Fiber",
    desc: "Enterprise-grade dual-line WiFi. Zero latency for lectures." 
  },
  { 
    id: "04",
    category: "Security",
    title: "Surveillance", 
    spec: "24/7 CCTV",
    desc: "Full premise coverage ensures total safety and strict discipline." 
  },
  { 
    id: "05",
    category: "Power",
    title: "Backup Systems", 
    spec: "Hybrid Inverter",
    desc: "Tier-1 power redundancy. Your schedule is independent of the grid." 
  },
  { 
    id: "06",
    category: "Capacity",
    title: "Exclusivity", 
    spec: "50 Seats Only",
    desc: "Strictly limited intake to maintain acoustic and spatial density." 
  },
];

export const Facilities: React.FC = () => {
  return (
    <section id="facilities" className="py-32 bg-slate-50 texture-membrane border-t border-slate-200">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 mb-20">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="flex items-center gap-2 mb-4">
                 <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                 <h2 className="text-sm font-bold tracking-widest uppercase text-emerald-600">Lab Specifications</h2>
              </div>
              <p className="text-4xl font-light text-slate-900 leading-tight">
                Infrastructure built <br/> for the <span className="text-gradient font-bold">Long Haul</span>.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="flex flex-col space-y-3">
          {/* Rows */}
          {facilities.map((f, i) => (
            <Reveal key={f.id} width="100%" delay={i * 50}>
              <div className="group relative grid grid-cols-1 md:grid-cols-12 gap-4 p-6 md:py-8 border border-slate-100 bg-white rounded-2xl transition-all duration-700 ease-out hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-900/5 hover:-translate-y-1 cursor-default items-center overflow-hidden">
                
                {/* Parallax & Magnification Background Pattern */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none overflow-hidden rounded-2xl">
                   <div className="absolute inset-[-50%] w-[200%] h-[200%] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj4gPGcmaWxsLXJ1bGU9ImV2ZW5vZGQiPiA8cGF0aCBkPSJNMCAwaDQwdjQwSDBWMHptMjAgMjBoMjB2MjBIMjBWMjB6TTEwIDEwaDIwdjIwSDEwVjEweiIgZmlsbD0iIzEwYjk4MSIgb3BhY2l0eT0iMC4xIi8+IDwvZz4gPC9zdmc+')] transform origin-center transition-transform duration-[3s] ease-out group-hover:scale-110 group-hover:translate-x-6 group-hover:-translate-y-6"></div>
                </div>

                {/* ID Pill */}
                <div className="col-span-1 relative z-10">
                    <span className="text-[10px] font-mono font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded-md group-hover:bg-emerald-100 group-hover:text-emerald-700 transition-colors duration-300">{f.id}</span>
                </div>
                
                <div className="col-span-2 text-xs uppercase tracking-wider text-slate-500 hidden md:block font-medium relative z-10">{f.category}</div>
                <div className="col-span-3 text-lg md:text-xl font-bold text-slate-800 group-hover:text-emerald-800 transition-colors duration-300 flex items-center gap-3 relative z-10">
                    {f.title}
                    {/* Status Dot - Active on Hover with Pulsing Glow */}
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
                </div>
                
                {/* Spec Tag */}
                <div className="col-span-2 mt-1 md:mt-0 relative z-10">
                    <span className="inline-block text-xs font-mono text-cyan-700 bg-cyan-50 border border-cyan-100 px-2 py-1 rounded-full group-hover:bg-cyan-100 group-hover:border-cyan-200 transition-colors duration-300">{f.spec}</span>
                </div>
                
                <div className="col-span-4 text-sm text-slate-500 font-light mt-2 md:mt-0 leading-relaxed group-hover:text-slate-600 transition-colors duration-300 relative z-10">{f.desc}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};