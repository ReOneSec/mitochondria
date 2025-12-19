import React, { useState } from 'react';
import { Reveal } from './Reveal';
import { Clock, Coffee, BookOpen, Moon, Sun } from 'lucide-react';

interface TimeBlock {
    start: string;
    end: string;
    activity: string;
    description: string;
    icon: React.ReactNode;
    color: string;
    period: 'morning' | 'afternoon' | 'evening' | 'night';
}

const schedule: TimeBlock[] = [
    {
        start: '06:00',
        end: '08:00',
        activity: 'Early Morning Session',
        description: 'Optimal focus period for complex problem-solving',
        icon: <Sun className="w-5 h-5" />,
        color: 'amber',
        period: 'morning'
    },
    {
        start: '08:00',
        end: '09:00',
        activity: 'Breakfast & Break',
        description: 'Nutritious meal and mental reset',
        icon: <Coffee className="w-5 h-5" />,
        color: 'orange',
        period: 'morning'
    },
    {
        start: '09:00',
        end: '13:00',
        activity: 'Deep Work Block',
        description: 'Uninterrupted study with maximum concentration',
        icon: <BookOpen className="w-5 h-5" />,
        color: 'emerald',
        period: 'morning'
    },
    {
        start: '13:00',
        end: '14:00',
        activity: 'Lunch Break',
        description: 'Balanced meal and relaxation',
        icon: <Coffee className="w-5 h-5" />,
        color: 'orange',
        period: 'afternoon'
    },
    {
        start: '14:00',
        end: '18:00',
        activity: 'Afternoon Session',
        description: 'Continuation of focused study',
        icon: <BookOpen className="w-5 h-5" />,
        color: 'cyan',
        period: 'afternoon'
    },
    {
        start: '18:00',
        end: '19:00',
        activity: 'Evening Break',
        description: 'Tea time and recreation',
        icon: <Coffee className="w-5 h-5" />,
        color: 'orange',
        period: 'evening'
    },
    {
        start: '19:00',
        end: '22:00',
        activity: 'Night Study',
        description: 'Review and revision period',
        icon: <BookOpen className="w-5 h-5" />,
        color: 'purple',
        period: 'evening'
    },
    {
        start: '22:00',
        end: '06:00',
        activity: 'Rest & Recovery',
        description: 'Sleep for optimal cognitive function',
        icon: <Moon className="w-5 h-5" />,
        color: 'slate',
        period: 'night'
    }
];

export const Timeline: React.FC = () => {
    const [selectedBlock, setSelectedBlock] = useState<number | null>(null);

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-emerald-100/50 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-100/50 rounded-full blur-[120px]"></div>
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <Reveal>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-light tracking-tight text-slate-900 mb-4">
                            Daily <span className="font-bold">Routine</span>
                        </h2>
                        <p className="text-slate-500 text-sm max-w-2xl mx-auto">
                            Structured schedule designed to maximize productivity and maintain optimal mental performance.
                        </p>
                    </div>
                </Reveal>

                <div className="max-w-4xl mx-auto">
                    {/* Timeline */}
                    <div className="space-y-4">
                        {schedule.map((block, index) => (
                            <Reveal key={index} delay={index * 50}>
                                <div
                                    className={`group relative bg-white border rounded-2xl p-6 transition-all duration-300 cursor-pointer ${selectedBlock === index
                                        ? `border-${block.color}-400 shadow-xl shadow-${block.color}-900/10 scale-[1.02]`
                                        : 'border-slate-200 hover:border-slate-300 hover:shadow-lg'
                                        }`}
                                    onClick={() => setSelectedBlock(selectedBlock === index ? null : index)}
                                >
                                    <div className="flex items-start gap-4">
                                        {/* Time */}
                                        <div className="flex-shrink-0 w-24">
                                            <div className="text-sm font-bold text-slate-900">{block.start}</div>
                                            <div className="text-xs text-slate-400">{block.end}</div>
                                        </div>

                                        {/* Icon */}
                                        <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-${block.color}-50 text-${block.color}-600 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                            {block.icon}
                                        </div>

                                        {/* Content */}
                                        <div className="flex-grow">
                                            <h3 className="text-lg font-bold text-slate-900 mb-1">
                                                {block.activity}
                                            </h3>
                                            <p className="text-sm text-slate-500">
                                                {block.description}
                                            </p>
                                        </div>

                                        {/* Duration indicator */}
                                        <div className={`flex-shrink-0 px-3 py-1 rounded-full bg-${block.color}-50 text-${block.color}-700 text-xs font-bold`}>
                                            {(() => {
                                                const start = parseInt(block.start.split(':')[0]);
                                                const end = parseInt(block.end.split(':')[0]);
                                                const duration = end > start ? end - start : 24 - start + end;
                                                return `${duration}h`;
                                            })()}
                                        </div>
                                    </div>

                                    {/* Progress bar (visual indicator) */}
                                    <div className={`mt-4 h-1.5 bg-slate-100 rounded-full overflow-hidden transition-all ${selectedBlock === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                                        }`}>
                                        <div
                                            className={`h-full bg-gradient-to-r from-${block.color}-400 to-${block.color}-600 rounded-full transition-all duration-1000 ${selectedBlock === index ? 'w-full' : 'w-0 group-hover:w-full'
                                                }`}
                                        ></div>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    {/* Summary Stats */}
                    <Reveal delay={400}>
                        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 text-center">
                                <div className="text-2xl font-bold text-emerald-700">12h</div>
                                <div className="text-xs text-slate-600 uppercase tracking-wider">Study Time</div>
                            </div>
                            <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 text-center">
                                <div className="text-2xl font-bold text-orange-700">3h</div>
                                <div className="text-xs text-slate-600 uppercase tracking-wider">Breaks</div>
                            </div>
                            <div className="bg-cyan-50 border border-cyan-100 rounded-xl p-4 text-center">
                                <div className="text-2xl font-bold text-cyan-700">16h</div>
                                <div className="text-xs text-slate-600 uppercase tracking-wider">AC Access</div>
                            </div>
                            <div className="bg-purple-50 border border-purple-100 rounded-xl p-4 text-center">
                                <div className="text-2xl font-bold text-purple-700">8h</div>
                                <div className="text-xs text-slate-600 uppercase tracking-wider">Rest</div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};
