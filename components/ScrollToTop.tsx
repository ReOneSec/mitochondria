import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling past 1 full viewport height
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-40 p-3 rounded-full bg-brand-dark text-emerald-400 shadow-xl border border-emerald-900/30 transition-all duration-500 hover:bg-emerald-950 hover:scale-110 hover:shadow-emerald-900/20 group ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform duration-300" />
      {/* Subtle pulse ring */}
      <div className="absolute inset-0 rounded-full border border-emerald-500/20 animate-ping opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </button>
  );
};