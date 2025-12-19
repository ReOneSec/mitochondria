import React, { useState, useEffect, useRef } from 'react';
import { Reveal } from './Reveal';
import { Users, Clock, TrendingUp, Award } from 'lucide-react';

interface Stat {
    icon: React.ReactNode;
    value: number;
    suffix: string;
    label: string;
    color: string;
}

const stats: Stat[] = [
    {
        icon: <Users className="w-6 h-6" />,
        value: 50,
        suffix: '',
        label: 'Active Residents',
        color: 'emerald'
    },
    {
        icon: <Clock className="w-6 h-6" />,
        value: 12000,
        suffix: '+',
        label: 'Study Hours/Month',
        color: 'cyan'
    },
    {
        icon: <TrendingUp className="w-6 h-6" />,
        value: 94,
        suffix: '%',
        label: 'Success Rate',
        color: 'emerald'
    },
    {
        icon: <Award className="w-6 h-6" />,
        value: 5,
        suffix: '+',
        label: 'Years Active',
        color: 'cyan'
    }
];

const Counter: React.FC<{ end: number; duration?: number; suffix?: string }> = ({
    end,
    duration = 2000,
    suffix = ''
}) => {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const counterRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted) {
                    setHasStarted(true);
                }
            },
            { threshold: 0.5 }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, [hasStarted]);

    useEffect(() => {
        if (!hasStarted) return;

        let startTime: number;
        let animationFrame: number;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * end));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration, hasStarted]);

    return (
        <div ref={counterRef} className="tabular-nums">
            {count.toLocaleString()}{suffix}
        </div>
    );
};

export const StatsCounter: React.FC = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden border-y border-slate-100">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-100/50 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-100/50 rounded-full blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <Reveal>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-light tracking-tight text-slate-900 mb-4">
                            Our <span className="font-bold">Impact</span>
                        </h2>
                        <p className="text-slate-500 text-sm max-w-2xl mx-auto">
                            Numbers that speak to our commitment to excellence and focused growth.
                        </p>
                    </div>
                </Reveal>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {stats.map((stat, index) => (
                        <Reveal key={index} delay={index * 100}>
                            <div className="group relative bg-white/60 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 md:p-8 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-500 hover:-translate-y-1">
                                {/* Icon */}
                                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-${stat.color}-50 text-${stat.color}-600 mb-4 group-hover:scale-110 group-hover:bg-${stat.color}-100 transition-all duration-300`}>
                                    {stat.icon}
                                </div>

                                {/* Value */}
                                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 tracking-tight">
                                    <Counter end={stat.value} suffix={stat.suffix} />
                                </div>

                                {/* Label */}
                                <p className="text-xs md:text-sm text-slate-500 font-medium uppercase tracking-wider">
                                    {stat.label}
                                </p>

                                {/* Hover effect decoration */}
                                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-${stat.color}-100/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
