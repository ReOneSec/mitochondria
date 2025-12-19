import React, { useState, useEffect } from 'react';

export const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    updateScrollProgress(); // Initial calculation

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <>
      {/* Top progress bar */}
      <div 
        className="fixed top-0 left-0 right-0 h-1 z-[100] pointer-events-none"
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Page scroll progress"
      >
        <div 
          className="h-full bg-gradient-to-r from-emerald-500 via-cyan-400 to-emerald-500 transition-all duration-150 ease-out shadow-lg shadow-emerald-500/50"
          style={{ 
            width: `${scrollProgress}%`,
            boxShadow: scrollProgress > 0 ? '0 0 20px rgba(16, 185, 129, 0.6)' : 'none'
          }}
        />
      </div>

      {/* Circular progress indicator (bottom right) */}
      <div className="fixed bottom-8 right-8 z-50 hidden lg:block pointer-events-none">
        <div className="relative w-12 h-12">
          {/* Background circle */}
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 48 48">
            <circle
              cx="24"
              cy="24"
              r="20"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              className="text-slate-200"
            />
            {/* Progress circle */}
            <circle
              cx="24"
              cy="24"
              r="20"
              stroke="url(#progressGradient)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 20}`}
              strokeDashoffset={`${2 * Math.PI * 20 * (1 - scrollProgress / 100)}`}
              className="transition-all duration-150 ease-out"
              style={{
                filter: scrollProgress > 0 ? 'drop-shadow(0 0 8px rgba(16, 185, 129, 0.5))' : 'none'
              }}
            />
            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10B981" />
                <stop offset="50%" stopColor="#06B6D4" />
                <stop offset="100%" stopColor="#10B981" />
              </linearGradient>
            </defs>
          </svg>
          {/* Percentage text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[9px] font-bold text-slate-600">
              {Math.round(scrollProgress)}%
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
