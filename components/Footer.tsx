import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-32 bg-gradient-to-b from-slate-900 via-brand-dark to-slate-950 text-slate-300 border-t border-emerald-900/30 relative overflow-hidden">
      {/* Enhanced Decorative Glows */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-20">

          {/* Brand Section */}
          <div className="max-w-md">
            <div className="mb-8 hover:opacity-80 transition-all duration-500 hover:scale-105 origin-left inline-block">
              <Logo height={56} />
            </div>
            <p className="font-light text-base leading-relaxed mb-8 text-slate-400">
              The membrane for your focus.<br />
              <span className="text-slate-500">An isolated environment for serious academic pursuit.</span>
            </p>

            {/* Email with Enhanced Styling */}
            <a
              href="mailto:admission@mitochondria.space"
              className="inline-flex items-center gap-3 text-sm text-emerald-400 hover:text-emerald-300 transition-all duration-300 group bg-emerald-950/30 hover:bg-emerald-950/50 px-4 py-3 rounded-xl border border-emerald-900/30 hover:border-emerald-700/50"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 group-hover:scale-150 group-hover:shadow-[0_0_12px_rgba(16,185,129,0.6)] transition-all duration-300"></span>
              <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block font-medium">
                admission@mitochondria.space
              </span>
            </a>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 text-sm flex-1">
            {/* Visit Section */}
            <div className="group">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-px bg-gradient-to-r from-emerald-500 to-transparent"></div>
                <h4 className="text-white font-bold uppercase text-xs tracking-[0.2em]">Visit</h4>
              </div>
              <address className="not-italic font-light leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                Plot 45, Quiet Zone<br />
                Civil Lines, Sector 4<br />
                [City Name], India
              </address>
            </div>

            {/* Contact Section */}
            <div className="group">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-px bg-gradient-to-r from-cyan-500 to-transparent"></div>
                <h4 className="text-white font-bold uppercase text-xs tracking-[0.2em]">Contact</h4>
              </div>
              <p className="font-light leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                +91 98765 43210<br />
                <span className="text-slate-500">Mon - Sat</span><br />
                <span className="text-slate-500">10:00 AM - 06:00 PM</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section with Enhanced Styling */}
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="pt-10 border-t border-gradient-to-r from-transparent via-emerald-900/30 to-transparent">
          {/* Gradient Border Effect */}
          <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent -translate-y-10"></div>

          {/* Disclaimer */}
          <div className="flex justify-center mb-8">
            <p className="text-xs text-slate-500 text-center leading-relaxed">
              Disclaimer: Site designed, developed & maintained by{' '}
              <a
                href="https://www.epplicon.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 transition-colors duration-300 font-medium inline-flex items-center gap-1 group"
              >
                Epplicon Technologies
                <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </p>
          </div>

          {/* Copyright & Tagline */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} Mitochondria Study Space. All rights reserved.
            </p>
            <div className="flex items-center gap-3 text-xs text-slate-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_12px_rgba(16,185,129,0.4)]"></span>
              <span className="font-medium bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Biology of Discipline
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};