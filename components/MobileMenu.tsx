import React, { useState } from 'react';
import { X, Home, Info, DollarSign, MessageCircle, FileText, Phone } from 'lucide-react';
import { Logo } from './Logo';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    onNavigateToAuth?: () => void;
}

const menuItems = [
    { label: 'Home', href: '#', icon: Home },
    { label: 'Philosophy', href: '#philosophy', icon: Info },
    { label: 'Facilities', href: '#facilities', icon: Info },
    { label: 'Process', href: '#process', icon: FileText },
    { label: 'Pricing', href: '#pricing', icon: DollarSign },
    { label: 'Manifesto', href: '#manifesto', icon: MessageCircle },
    { label: 'Contact', href: '#contact', icon: Phone }
];

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onNavigateToAuth }) => {
    const handleLinkClick = (href: string) => {
        onClose();
        if (href !== '#') {
            setTimeout(() => {
                const element = document.querySelector(href);
                element?.scrollIntoView({ behavior: 'smooth' });
            }, 300);
        }
    };

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-[998] animate-fade-in"
                onClick={onClose}
            />

            {/* Menu Panel */}
            <div className="fixed inset-y-0 right-0 w-full sm:w-80 bg-slate-50 z-[999] shadow-2xl overflow-y-auto animate-slide-in-right">
                <div className="p-6">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-12">
                        <Logo height={40} />
                        <button
                            onClick={onClose}
                            className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-emerald-600 hover:border-emerald-200 transition-all"
                            aria-label="Close menu"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Navigation */}
                    <nav className="space-y-2 mb-12">
                        {menuItems.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <button
                                    key={index}
                                    onClick={() => handleLinkClick(item.href)}
                                    className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-slate-700 hover:bg-white hover:text-emerald-600 hover:shadow-sm transition-all group text-left"
                                    style={{ animationDelay: `${index * 50}ms` }}
                                >
                                    <div className="w-10 h-10 rounded-lg bg-slate-100 group-hover:bg-emerald-50 flex items-center justify-center text-slate-500 group-hover:text-emerald-600 transition-colors">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <span className="font-medium">{item.label}</span>
                                </button>
                            );
                        })}
                    </nav>

                    {/* CTA Button */}
                    <button
                        onClick={() => {
                            onClose();
                            onNavigateToAuth?.();
                        }}
                        className="w-full bg-gradient-to-r from-emerald-600 to-cyan-600 text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-95"
                    >
                        Request Seat
                    </button>

                    {/* Footer Info */}
                    <div className="mt-12 pt-6 border-t border-slate-200">
                        <p className="text-xs text-slate-400 text-center leading-relaxed">
                            MITOCHONDRIA<br />
                            Disciplined Study Space<br />
                            © {new Date().getFullYear()}
                        </p>
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-in-right {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.3s ease-out;
        }
      `}</style>
        </>
    );
};
