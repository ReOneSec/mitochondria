import React from 'react';
import { Reveal } from './Reveal';
import { Sun, Moon, Coffee, BookOpen, Battery, Utensils } from 'lucide-react';

const schedule = [
  { time: "06:00", label: "Ignition", icon: Sun, desc: "Wake up. Hydration. Sunlight exposure to reset circadian clock." },
  { time: "08:00", label: "Deep Work Cycle I", icon: BookOpen, desc: "The most cognitively demanding tasks. Phones deposited outside." },
  { time: "13:00", label: "Satvik Refuel", icon: Utensils, desc: "Low-glycemic nutrition to prevent afternoon crash." },
  { time: "14:00", label: "NSDR / Power Nap", icon: Battery, desc: "20-minute Non-Sleep Deep Rest protocol to clear adenosine." },
  { time: "14:30", label: "Deep Work Cycle II", icon: BookOpen, desc: "Active recall and problem solving sessions." },
  { time: "20:00", label: "Review & Shutdown", icon: Moon, desc: "Analyzing daily output. Blue light reduction begins." },
];

export const Routine: React.FC = () => {
  return (
    <section id="routine" className="py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-100 -translate-x-1/2 hidden md:block"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <Reveal>
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl font-light text-slate-900 mb-4">
              The Circadian <span className="font-bold text-emerald-600">Rhythm</span>
            </h2>
            <p className="text-slate-500 max-w-lg mx-auto text-sm leading-relaxed">
              We don't manage time. We manage energy. <br/>
              A schedule optimized for neurobiology, not just clocks.
            </p>
          </div>
        </Reveal>

        <div className="relative max-w-4xl mx-auto">
          {schedule.map((item, index) => (
            <Reveal key={index} delay={index * 100} width="100%">
              <div className={`flex flex-col md:flex-row items-center mb-16 md:mb-24 relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Center Node */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex flex-col items-center justify-center z-10">
                  <div className="w-12 h-12 rounded-full bg-white border border-emerald-100 shadow-lg shadow-emerald-900/5 flex items-center justify-center relative group">
                    <item.icon size={20} className="text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
                    {/* Ripple */}
                    <div className="absolute inset-0 rounded-full border border-emerald-500/20 animate-ping opacity-0 group-hover:opacity-100"></div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2 p-4 md:px-12 text-center md:text-left">
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-start' : 'md:items-end md:text-right'}`}>
                    <span className="text-4xl font-light text-slate-200 mb-2 font-mono">{item.time}</span>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 uppercase tracking-wide">{item.label}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-light max-w-xs">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Empty Side for Balance */}
                <div className="w-full md:w-1/2"></div>
              </div>
            </Reveal>
          ))}
          
          {/* Connecting Line (Mobile) */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-200 md:hidden"></div>
        </div>
      </div>
    </section>
  );
};