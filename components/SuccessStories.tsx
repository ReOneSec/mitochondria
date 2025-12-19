import React, { useState } from 'react';
import { Reveal } from './Reveal';
import { Quote, Award, TrendingUp, GraduationCap } from 'lucide-react';

interface Story {
    name: string;
    achievement: string;
    exam: string;
    year: string;
    quote: string;
    image: string;
    university: string;
    before: string;
    after: string;
}

const stories: Story[] = [
    {
        name: 'Arjun Kumar',
        achievement: 'AIR 47 in NEET',
        exam: 'NEET 2024',
        year: '2024',
        quote: 'The disciplined environment at MITOCHONDRIA transformed my preparation. The silence here is not empty—it\'s powerful.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300',
        university: 'AIIMS Delhi',
        before: 'Struggled with consistency',
        after: 'Achieved dream medical college'
    },
    {
        name: 'Priya Sharma',
        achievement: 'Top 1% in CAT',
        exam: 'CAT 2023',
        year: '2023',
        quote: 'Six months here gave me the structure I\'d been missing. Every hour counted, every seat mattered.',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300',
        university: 'IIM Ahmedabad',
        before: 'Inconsistent mock scores',
        after: '99.8 percentile achiever'
    },
    {
        name: 'Rahul Verma',
        achievement: 'GATE CS Rank 89',
        exam: 'GATE 2024',
        year: '2024',
        quote: 'The bio-rhythm here is real. I\'ve never been more focused in my life. This place breeds success.',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300',
        university: 'IIT Bombay',
        before: 'Working professional, limited time',
        after: 'Top 100 rank while working'
    },
    {
        name: 'Aisha Khan',
        achievement: 'UPSC CSE Cleared',
        exam: 'UPSC CSE 2023',
        year: '2023',
        quote: 'The silence in these walls has a frequency. It resonates with ambition. I found my voice in this quietude.',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300',
        university: 'Indian Administrative Service',
        before: 'Second attempt struggle',
        after: 'Cleared in third attempt'
    }
];

export const SuccessStories: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-100 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-100 rounded-full blur-[120px]"></div>
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <Reveal>
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 rounded-full px-4 py-2 mb-6">
                            <Award className="w-4 h-4 text-emerald-600" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-700">
                                Alumni Excellence
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-light tracking-tight text-slate-900 mb-4">
                            Success <span className="font-bold">Stories</span>
                        </h2>
                        <p className="text-slate-500 text-sm max-w-2xl mx-auto">
                            From our halls to halls of excellence. Real journeys of transformation and achievement.
                        </p>
                    </div>
                </Reveal>

                {/* Main Story Card */}
                <Reveal delay={100}>
                    <div className="max-w-5xl mx-auto mb-12">
                        <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-900/5">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                {/* Left - Image & Info */}
                                <div className="space-y-6">
                                    <div className="relative w-48 h-48 mx-auto md:mx-0">
                                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-3xl rotate-6"></div>
                                        <img
                                            src={stories[activeIndex].image}
                                            alt={stories[activeIndex].name}
                                            className="relative w-full h-full object-cover rounded-3xl border-4 border-white shadow-lg"
                                        />
                                        <div className="absolute -bottom-3 -right-3 bg-emerald-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                                            {stories[activeIndex].year}
                                        </div>
                                    </div>

                                    <div className="text-center md:text-left">
                                        <h3 className="text-2xl font-bold text-slate-900 mb-1">
                                            {stories[activeIndex].name}
                                        </h3>
                                        <p className="text-emerald-600 font-bold mb-2">
                                            {stories[activeIndex].achievement}
                                        </p>
                                        <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-slate-500">
                                            <GraduationCap className="w-4 h-4" />
                                            <span>{stories[activeIndex].university}</span>
                                        </div>
                                    </div>

                                    {/* Before/After */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                                            <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Before</div>
                                            <div className="text-sm text-slate-700 font-medium">{stories[activeIndex].before}</div>
                                        </div>
                                        <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100">
                                            <div className="text-[10px] text-emerald-600 uppercase tracking-wider mb-1 flex items-center gap-1">
                                                <TrendingUp className="w-3 h-3" />
                                                After
                                            </div>
                                            <div className="text-sm text-emerald-700 font-medium">{stories[activeIndex].after}</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right - Quote */}
                                <div className="relative">
                                    <Quote className="absolute -top-4 -left-4 w-16 h-16 text-emerald-100" />
                                    <blockquote className="relative text-lg md:text-xl text-slate-700 leading-relaxed font-light italic">
                                        "{stories[activeIndex].quote}"
                                    </blockquote>
                                    <div className="mt-6 pt-6 border-t border-slate-100">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold">
                                                {stories[activeIndex].exam.split(' ')[0]}
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-slate-900">{stories[activeIndex].exam}</div>
                                                <div className="text-xs text-slate-500">Examination</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>

                {/* Story Navigation */}
                <Reveal delay={200}>
                    <div className="flex justify-center gap-3 flex-wrap">
                        {stories.map((story, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`group relative transition-all duration-300 ${activeIndex === index ? 'scale-110' : 'scale-100 opacity-60 hover:opacity-100'
                                    }`}
                            >
                                <div className={`w-16 h-16 rounded-full border-2 overflow-hidden transition-all ${activeIndex === index
                                        ? 'border-emerald-500 shadow-lg ring-4 ring-emerald-100'
                                        : 'border-slate-200 group-hover:border-emerald-300'
                                    }`}>
                                    <img
                                        src={story.image}
                                        alt={story.name}
                                        className={`w-full h-full object-cover transition-all ${activeIndex === index ? 'grayscale-0' : 'grayscale group-hover:grayscale-0'
                                            }`}
                                    />
                                </div>
                                {activeIndex === index && (
                                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                                        <div className="text-xs font-bold text-emerald-600">{story.name.split(' ')[0]}</div>
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>
                </Reveal>

                {/* Stats Bar */}
                <Reveal delay={300}>
                    <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-slate-900 mb-1">150+</div>
                            <div className="text-xs text-slate-500 uppercase tracking-wider">Success Stories</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-slate-900 mb-1">94%</div>
                            <div className="text-xs text-slate-500 uppercase tracking-wider">Pass Rate</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-slate-900 mb-1">25+</div>
                            <div className="text-xs text-slate-500 uppercase tracking-wider">Top Rankers</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-slate-900 mb-1">5+</div>
                            <div className="text-xs text-slate-500 uppercase tracking-wider">Years Legacy</div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};
