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
    <section id="process" className="py-40 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-100/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-100/30 rounded-full blur-[120px]"></div>
      </div>

      {/* Horizontal Connector Line */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent -translate-y-1/2 hidden lg:block"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 rounded-full px-4 py-2 mb-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-emerald-700">
                  The Filter
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-slate-900 leading-tight mb-2">
                We select for <span className="font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">Intent</span>,<br />
                not just capability.
              </h2>
            </div>
            <div className="md:text-right">
              <p className="text-slate-500 text-sm font-light max-w-xs leading-relaxed">
                Entry is not guaranteed.<br />
                <span className="text-slate-400">The environment protects itself.</span>
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pt-6">
          {steps.map((step, index) => (
            <Reveal key={index} delay={index * 100} allowOverflow={true}>
              <div className="group relative h-full overflow-visible">
                {/* Connector Arrow (Desktop Only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-emerald-300 to-transparent -translate-y-1/2 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                  </div>
                )}

                {/* Card */}
                <div className="relative bg-white/80 backdrop-blur-sm p-10 rounded-3xl border border-slate-200/80 shadow-sm h-full transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-emerald-900/10 hover:border-emerald-200 hover:bg-white group">
                  {/* Gradient Border Effect on Hover */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/0 via-cyan-500/0 to-emerald-500/0 group-hover:from-emerald-500/10 group-hover:via-cyan-500/5 group-hover:to-emerald-500/10 transition-all duration-500 -z-10"></div>

                  {/* Step Number Badge */}
                  <div className="absolute -top-4 left-8 bg-gradient-to-r from-slate-900 to-slate-800 text-white text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-widest shadow-lg group-hover:from-emerald-600 group-hover:to-cyan-600 transition-all duration-500 group-hover:scale-110 z-10">
                    Step {step.id}
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-50/50 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Icon */}
                  <div className="mb-8 mt-4 text-slate-300 group-hover:text-emerald-500 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <step.icon size={40} strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-emerald-800 transition-colors duration-300 leading-tight">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-500 font-light leading-relaxed">
                    {step.desc}
                  </p>

                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-bl-3xl group-hover:w-full transition-all duration-700 ease-out"></div>

                  {/* Mobile Connector */}
                  {index < steps.length - 1 && (
                    <div className="absolute bottom-[-24px] left-1/2 w-px h-6 bg-gradient-to-b from-slate-200 to-transparent -translate-x-1/2 md:hidden"></div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom Note */}
        <Reveal delay={400}>
          <div className="mt-16 text-center">
            <p className="text-xs text-slate-400 font-light tracking-wide">
              Each step is designed to ensure mutual commitment and cultural alignment
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};