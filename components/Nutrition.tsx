import React from 'react';
import { Reveal } from './Reveal';

const meals = [
  {
    type: "Breakfast",
    time: "07:30 AM",
    focus: "Sustained Release",
    desc: "Complex carbohydrates & proteins. Oats, Sprouts, Milk. Designed to prevent glucose spikes.",
    meta: "High Fiber • Low Sugar"
  },
  {
    type: "Lunch",
    time: "01:00 PM",
    focus: "Anti-Lethargy",
    desc: "Light, Satvik-balanced meal. Seasonal vegetables, Dal, Curd. No heavy fats or excessive spices.",
    meta: "Gut Friendly • Moderate Carbs"
  },
  {
    type: "Dinner",
    time: "08:00 PM",
    focus: "Recovery",
    desc: "Easily digestible proteins. Khichdi, Paneer, Soup. Prepares the body for deep sleep cycles.",
    meta: "Light • Warm"
  }
];

export const Nutrition: React.FC = () => {
  return (
    <section className="py-32 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Side */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-xs font-bold tracking-[0.2em] text-slate-400 uppercase">Bio-Fuel Systems</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-light text-slate-900 mb-6 leading-tight">
                Food as <br/><span className="font-bold text-emerald-800">Cognitive Fuel</span>.
              </h2>
              <p className="text-slate-500 leading-relaxed font-light mb-8">
                The residential mess doesn't serve "comfort food". It serves performance nutrition. <br/><br/>
                Every meal is calibrated to manage your insulin response, preventing the "afternoon slump" and ensuring steady mental clarity for 14 hours a day.
              </p>
              
              <div className="inline-flex items-center gap-4 px-6 py-3 bg-slate-50 rounded-full border border-slate-100">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-600">Strictly Vegetarian</span>
                <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-600">No Onion/Garlic Options</span>
              </div>
            </Reveal>
          </div>

          {/* Menu Grid Side */}
          <div className="lg:col-span-7">
            <div className="grid gap-6">
              {meals.map((meal, index) => (
                <Reveal key={index} delay={index * 100} width="100%">
                  <div className="flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-lg hover:shadow-emerald-900/5 hover:border-emerald-500/20 transition-all duration-300 group cursor-default">
                    
                    <div className="flex-1">
                      <div className="flex items-baseline gap-3 mb-2">
                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">{meal.type}</h3>
                        <span className="text-xs font-mono text-slate-400">{meal.time}</span>
                      </div>
                      <p className="text-sm text-slate-500 font-light pr-4">{meal.desc}</p>
                    </div>

                    <div className="mt-4 md:mt-0 md:text-right border-t md:border-t-0 md:border-l border-slate-200 md:pl-6 pt-4 md:pt-0 min-w-[140px]">
                      <span className="block text-[10px] font-bold uppercase tracking-widest text-emerald-600 mb-1">{meal.focus}</span>
                      <span className="text-[10px] text-slate-400">{meal.meta}</span>
                    </div>

                  </div>
                </Reveal>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};