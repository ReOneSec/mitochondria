import React, { useState } from 'react';
import { Reveal } from './Reveal';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Is personal nutrition allowed?",
    answer: "No. The mess provides a strictly calculated Satvik diet designed to prevent lethargy. Outside food disrupts the biological regulation we strive for."
  },
  {
    question: "What is the guest policy?",
    answer: "Zero distraction policy. Parents may visit on Sundays between 4 PM - 6 PM. No overnight guests are permitted under any circumstances."
  },
  {
    question: "Is the internet unrestricted?",
    answer: "No. The Neural Link WiFi is firewall-protected. Social media, gaming, and adult content sites are blocked at the DNS level. Academic resources only."
  },
  {
    question: "Can I choose my roommate?",
    answer: "Rooms are allocated based on exam category (e.g., JEE students with JEE students) to facilitate peer learning. Requests are considered but not guaranteed."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        <Reveal>
          <div className="mb-12 flex items-baseline gap-4">
             <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-widest">Protocol <span className="text-emerald-600">Queries</span></h2>
             <div className="flex-grow h-px bg-slate-200"></div>
          </div>
        </Reveal>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Reveal key={index} delay={index * 50}>
              <div 
                className={`group border border-slate-200 bg-white rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'shadow-lg shadow-emerald-900/5 border-emerald-500/30' : 'hover:border-slate-300'}`}
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-emerald-500/50 rounded-t-2xl"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className={`text-sm font-bold uppercase tracking-wide transition-colors ${openIndex === index ? 'text-emerald-700' : 'text-slate-700'}`}>
                    {faq.question}
                  </span>
                  <div className={`p-1 rounded-full transition-colors ${openIndex === index ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-400 group-hover:text-slate-600'}`}>
                    {openIndex === index ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>
                
                <div 
                  id={`faq-answer-${index}`}
                  role="region"
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-6 pt-0 text-slate-500 text-sm leading-relaxed font-light">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};