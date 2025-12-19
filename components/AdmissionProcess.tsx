import React from 'react';
import { Reveal } from './Reveal';
import { FileText, Users, Clock, Key } from 'lucide-react';

const steps = [
  {
    id: "01",
    title: "Digital Screening",
    icon: FileText,
    desc: "Submission of academic track record and statement of purpose. We look for trajectory, not just current standing."
  },
  {
    id: "02",
    title: "Culture Fit Interview",
    icon: Users,
    desc: "A 15-minute conversation with the warden. We assess your willingness to adhere to silence and digital detox protocols."
  },
  {
    id: "03",
    title: "The 7-Day Probation",
    icon: Clock,
    desc: "Provisional entry. You live the routine. If you can sustain the discipline, you unlock full residency."
  },
  {
    id: "04",
    title: "Seat Allocation",
    icon: Key,
    desc: "Permanent desk assignment, locker key handover, and biometric registration. You are now part of the ecosystem."
  }
];

export const AdmissionProcess: React.FC = () => {
  return (
    <section id="process" className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Background Line */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-slate-200 -translate-y-1/2 hidden lg:block"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-24">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-emerald-600 uppercase mb-4 block">
                The Filter
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-slate-900 leading-tight">
                We select for <span className="font-bold">Intent</span>,<br/>
                not just capability.
              </h2>
            </div>
            <p className="text-slate-500 text-sm font-light max-w-xs text-right mt-6 md:mt-0">
              Entry is not guaranteed.<br/>
              The environment protects itself.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Reveal key={index} delay={index * 150}>
              <div className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-sm relative h-full transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-900/5 hover:border-emerald-500/20">
                {/* Step Number */}
                <div className="absolute -top-4 left-6 bg-slate-900 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest group-hover:bg-emerald-600 transition-colors">
                  Step {step.id}
                </div>

                <div className="mb-6 mt-2 text-slate-300 group-hover:text-emerald-500 transition-colors duration-500">
                  <step.icon size={32} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-emerald-800 transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-sm text-slate-500 font-light leading-relaxed">
                  {step.desc}
                </p>

                {/* Connector for Mobile (Visual only) */}
                {index < steps.length - 1 && (
                  <div className="absolute bottom-[-32px] left-1/2 w-px h-8 bg-slate-200 -translate-x-1/2 md:hidden"></div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};