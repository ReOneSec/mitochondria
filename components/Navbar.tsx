import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';

interface NavbarProps {
  onNavigate?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ease-out ${scrolled ? 'py-3 bg-slate-50/90 backdrop-blur-md border-b border-emerald-100/50 shadow-sm' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Logo Area */}
        <a href="#" className="flex items-center gap-3 group hover:scale-105 transition-transform duration-500 ease-out origin-left">
          <Logo height={scrolled ? 36 : 48} className="transition-all duration-500" />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-12">
          {['Philosophy', 'Facilities', 'Manifesto'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="relative text-[11px] font-bold uppercase tracking-widest text-slate-500 hover:text-emerald-800 transition-colors duration-300 group py-2"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-500 ease-out group-hover:w-full opacity-0 group-hover:opacity-100"></span>
            </a>
          ))}
        </div>

        {/* Action */}
        <button 
          onClick={onNavigate}
          className="relative overflow-hidden group bg-brand-dark text-slate-50 px-6 py-2.5 transition-all duration-300 rounded-full shadow-lg shadow-emerald-900/10 hover:shadow-emerald-900/20 hover:scale-105 active:scale-95 border border-emerald-900/20"
        >
          {/* Gradient Overlay on Hover */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-emerald-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>
          
          <span className="relative text-[10px] font-bold uppercase tracking-widest group-hover:text-white z-10 flex items-center gap-2">
            Request Seat
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:bg-white transition-colors duration-300 group-hover:scale-125"></div>
          </span>
        </button>
      </div>
    </nav>
  );
};