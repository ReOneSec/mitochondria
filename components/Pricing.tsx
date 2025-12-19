import React, { useState } from 'react';
import { Reveal } from './Reveal';
import { ArrowRight, Check } from 'lucide-react';

const plans = [
  { 
    period: "Monthly", 
    price: "800", 
    currency: "₹", 
    subtitle: "The Sprint",
    desc: "Short-term revision focus.",
    features: [
      "Dedicated 4ft Station", 
      "12hr AC Access (8AM-8PM)", 
      "High-Speed WiFi", 
      "Ergonomic Seating",
      "RO Water Access",
      "Noise Cancellation"
    ]
  },
  { 
    period: "6 Months", 
    price: "4,500", 
    currency: "₹", 
    subtitle: "The Marathon",
    desc: "Recommended for serious aspirants.",
    highlight: true,
    features: [
      "Dedicated 4ft Station", 
      "16hr AC Access (6AM-10PM)", 
      "Dedicated Personal Locker",
      "Discussion Room Access", 
      "Power Nap Zone",
      "Priority Maintenance"
    ]
  },
  { 
    period: "Yearly", 
    price: "9,000", 
    currency: "₹", 
    subtitle: "The Residency",
    desc: "Total immersion architecture.",
    features: [
      "Permanent Seat Ownership", 
      "24/7 Access & AC", 
      "Fixed Personal Locker", 
      "Priority Mentor Access", 
      "Guest Pass (2/mo)",
      "Library Access",
      "Noise Cancellation"
    ]
  },
];

export const Pricing: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>("6 Months");

  return (
    <section className="py-32 bg-slate-50 relative border-t border-slate-200">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-slate-900 leading-tight">
              Essential <br/>
              <span className="font-bold text-slate-900">Structure</span>.
            </h2>
          </Reveal>
          <Reveal delay={200}>
             <p className="text-slate-500 text-sm font-light max-w-xs text-right md:text-left leading-relaxed">
               Transparent investment.<br/>
               No hidden variables.
             </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start" role="radiogroup" aria-label="Pricing plans">
          {plans.map((plan, index) => {
            const isSelected = selectedPlan === plan.period;
            
            return (
              <Reveal key={index} delay={index * 100} className="h-full">
                <div 
                  role="radio"
                  aria-checked={isSelected}
                  aria-labelledby={`plan-title-${index}`}
                  tabIndex={0}
                  onClick={() => setSelectedPlan(plan.period)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedPlan(plan.period);
                    }
                  }}
                  className={`flex flex-col h-full p-8 md:p-10 transition-all duration-500 border rounded-3xl relative group cursor-pointer focus:outline-none focus:ring-4 focus:ring-emerald-500/30 overflow-hidden ${
                  isSelected 
                    ? 'bg-slate-900 border-emerald-500/30 text-white shadow-2xl shadow-emerald-900/10 -translate-y-2 lg:scale-105 z-10 ring-1 ring-emerald-500/50' 
                    : 'bg-white border-slate-200 text-slate-900 hover:border-emerald-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50'
                }`}>
                  
                  {/* Subtle Texture Overlays */}
                  {isSelected ? (
                     // Noise texture for dark card
                     <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'1\'/%3E%3C/svg%3E')] pointer-events-none"></div>
                  ) : (
                     // Micro-dot pattern for light cards
                     <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
                  )}

                  {/* Badge Logic: Only show on selected plan */}
                  {isSelected && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                      <span className={`text-[9px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-lg border flex items-center gap-2 whitespace-nowrap ${
                        plan.highlight 
                        ? 'bg-emerald-600 text-white border-emerald-500/50' 
                        : 'bg-slate-800 text-emerald-400 border-slate-700'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${plan.highlight ? 'bg-white' : 'bg-emerald-400'}`}></span>
                        {plan.highlight ? 'Recommended' : 'Selected'}
                      </span>
                    </div>
                  )}
                  
                  <div className="mb-10 relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <span className={`text-[10px] font-bold uppercase tracking-widest block ${isSelected ? 'text-emerald-400' : 'text-slate-400'}`}>
                        {plan.subtitle}
                      </span>
                      {isSelected && <Check size={16} className="text-emerald-500" />}
                    </div>
                    
                    <div className="flex items-baseline gap-1">
                      <span className={`text-xl font-light ${isSelected ? 'text-slate-500' : 'text-slate-300'}`}>{plan.currency}</span>
                      <span className="text-5xl font-bold tracking-tighter">
                        {plan.price}
                      </span>
                    </div>
                    <p id={`plan-title-${index}`} className={`text-xs mt-4 uppercase tracking-wider ${isSelected ? 'text-slate-400' : 'text-slate-500'}`}>{plan.period}</p>
                  </div>

                  <div className={`h-px w-full mb-8 relative z-10 ${isSelected ? 'bg-slate-800' : 'bg-slate-100'}`}></div>

                  <ul className="space-y-4 mb-12 flex-grow relative z-10">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                         <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${isSelected ? 'bg-emerald-500' : 'bg-slate-300'}`}></span>
                        <span className={`font-light leading-relaxed ${isSelected ? 'text-slate-300' : 'text-slate-600'}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button 
                    tabIndex={-1} 
                    className={`w-full py-4 text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 rounded-xl group-hover:scale-[1.02] active:scale-[0.98] relative z-10 ${
                     isSelected 
                      ? 'bg-emerald-600 text-white hover:bg-emerald-500 shadow-lg shadow-emerald-900/20' 
                      : 'bg-slate-50 text-slate-900 hover:bg-slate-900 hover:text-white border border-slate-100'
                   }`}>
                     {isSelected ? 'Proceed' : 'Select Plan'}
                     <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={400}>
          <div className="mt-20 text-center">
             <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
               Strict Capacity: <span className="text-slate-900 font-bold">50 Seats</span>
             </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};