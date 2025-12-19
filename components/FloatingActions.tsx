import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, PhoneCall, Send } from 'lucide-react';

export const FloatingActions: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const actions = [
        {
            icon: Phone,
            label: 'Call Now',
            href: 'tel:+919876543210',
            color: 'emerald',
            delay: 0
        },
        {
            icon: MessageCircle,
            label: 'WhatsApp',
            href: 'https://wa.me/919876543210',
            color: 'green',
            delay: 50
        },
        {
            icon: Mail,
            label: 'Email',
            href: 'mailto:info@mitochondria.edu',
            color: 'cyan',
            delay: 100
        }
    ];

    return (
        <div className="fixed bottom-8 left-8 z-50 hidden md:block">
            {/* Action buttons */}
            <div className={`flex flex-col gap-3 mb-3 transition-all duration-300 ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                }`}>
                {actions.map((action, index) => {
                    const Icon = action.icon;
                    return (
                        <a
                            key={index}
                            href={action.href}
                            target={action.href.startsWith('http') ? '_blank' : undefined}
                            rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className={`group flex items-center gap-3 bg-white border border-slate-200 rounded-full pl-4 pr-5 py-3 shadow-lg hover:shadow-xl transition-all hover:scale-105`}
                            style={{ transitionDelay: `${action.delay}ms` }}
                        >
                            <div className={`w-10 h-10 rounded-full bg-${action.color}-50 text-${action.color}-600 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                <Icon className="w-5 h-5" />
                            </div>
                            <span className="text-sm font-bold text-slate-700 whitespace-nowrap">
                                {action.label}
                            </span>
                        </a>
                    );
                })}
            </div>

            {/* Main toggle button */}
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 text-white shadow-xl hover:shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 ${isExpanded ? 'rotate-45' : 'rotate-0'
                    }`}
                aria-label="Quick actions"
            >
                {isExpanded ? (
                    <div className="text-2xl font-light">×</div>
                ) : (
                    <PhoneCall className="w-6 h-6" />
                )}
            </button>

            {/* Pulse effect when not expanded */}
            {!isExpanded && (
                <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-20 pointer-events-none" />
            )}
        </div>
    );
};
