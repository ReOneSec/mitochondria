import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';

interface LoadingScreenProps {
    onLoadComplete?: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadComplete }) => {
    const [progress, setProgress] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setIsComplete(true);
                        onLoadComplete?.();
                    }, 500);
                    return 100;
                }
                return prev + Math.random() * 30;
            });
        }, 200);

        return () => clearInterval(interval);
    }, [onLoadComplete]);

    if (isComplete) return null;

    return (
        <div
            className={`fixed inset-0 z-[9999] bg-slate-50 flex flex-col items-center justify-center transition-opacity duration-700 ${progress >= 100 ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
        >
            {/* Animated background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-100/40 rounded-full blur-[120px] animate-pulse-slow"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-100/40 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="relative z-10 flex flex-col items-center gap-8">
                {/* Logo with pulse animation */}
                <div className="relative">
                    <div className="absolute inset-0 scale-110 opacity-20">
                        <Logo height={64} />
                    </div>
                    <div className="relative animate-breathe">
                        <Logo height={64} />
                    </div>

                    {/* Energy pulse rings */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="absolute w-32 h-32 border-2 border-emerald-400/30 rounded-full animate-energy-pulse"></div>
                        <div className="absolute w-32 h-32 border-2 border-cyan-400/30 rounded-full animate-energy-pulse" style={{ animationDelay: '0.5s' }}></div>
                    </div>
                </div>

                {/* Loading text */}
                <div className="text-center space-y-2">
                    <h3 className="text-lg font-bold tracking-tight text-slate-900 uppercase text-[10px] tracking-widest">
                        Initializing Powerhouse
                    </h3>

                    {/* Progress bar */}
                    <div className="w-64 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-emerald-500 via-cyan-400 to-emerald-500 rounded-full transition-all duration-300 ease-out"
                            style={{
                                width: `${Math.min(progress, 100)}%`,
                                boxShadow: '0 0 20px rgba(16, 185, 129, 0.5)'
                            }}
                        ></div>
                    </div>

                    {/* Percentage */}
                    <p className="text-xs text-slate-400 font-bold tabular-nums">
                        {Math.round(Math.min(progress, 100))}%
                    </p>
                </div>

                {/* Mitochondria illustration */}
                <svg
                    className="w-24 h-12 opacity-10 animate-drift"
                    viewBox="0 0 200 100"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                >
                    <path d="M10,50 Q10,10 50,10 H150 Q190,10 190,50 Q190,90 150,90 H50 Q10,90 10,50 Z" className="text-emerald-900" />
                    <path d="M30,50 C40,20 50,80 60,50 C70,20 80,80 90,50 C100,20 110,80 120,50 C130,20 140,80 150,50 C160,20 170,80 170,50"
                        strokeDasharray="4 4"
                        className="text-emerald-600"
                    />
                </svg>
            </div>
        </div>
    );
};
