import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu } from 'lucide-react';
import { MobileMenu } from './MobileMenu';

interface NavbarProps {
  onNavigate?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Scroll spy logic
      const sections = ['philosophy', 'facilities', 'process', 'manifesto'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Philosophy', 'Facilities', 'Process', 'Manifesto'];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ease-out ${scrolled ? 'py-3 bg-slate-50/90 backdrop-blur-md border-b border-emerald-100/50 shadow-sm' : 'py-6 bg-transparent'}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">

          {/* Logo Area */}
          <a href="#" className="flex items-center gap-3 group hover:scale-105 transition-transform duration-500 ease-out origin-left">
            <Logo height={scrolled ? 36 : 48} className="transition-all duration-500" />
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => {
              const isActive = activeSection === item.toLowerCase();
              return (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`relative text-[11px] font-bold uppercase tracking-widest transition-colors duration-300 group py-2 ${isActive ? 'text-emerald-800' : 'text-slate-500 hover:text-emerald-800'
                    }`}
                >
                  {item}
                  <span className={`absolute bottom-0 left-0 h-[1.5px] bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-500 ease-out ${isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                    }`}></span>
                </a>
              );
            })}
          </div>

          {/* Mobile & Desktop Actions */}
          <div className="flex items-center gap-3">
            {/* Request Seat Button */}
            <button
              onClick={onNavigate}
              className="relative overflow-hidden group bg-brand-dark text-slate-50 px-4 md:px-6 py-2.5 transition-all duration-300 rounded-full shadow-lg shadow-emerald-900/10 hover:shadow-emerald-900/20 hover:scale-105 active:scale-95 border border-emerald-900/20"
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-emerald-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>

              <span className="relative text-[10px] font-bold uppercase tracking-widest group-hover:text-white z-10 flex items-center gap-2">
                <span className="hidden sm:inline">Request Seat</span>
                <span className="sm:hidden">Apply</span>
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:bg-white transition-colors duration-300 group-hover:scale-125"></div>
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-emerald-600 hover:border-emerald-200 transition-all"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onNavigateToAuth={onNavigate}
      />
    </>
  );
};
