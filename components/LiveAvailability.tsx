import React, { useState, useEffect } from 'react';
import { Reveal } from './Reveal';
import { Armchair, Users, TrendingUp } from 'lucide-react';

interface SeatData {
    total: number;
    occupied: number;
    available: number;
}

export const LiveAvailability: React.FC = () => {
    const [seatData, setSeatData] = useState<SeatData>({
        total: 50,
        occupied: 37,
        available: 13
    });

    const [isLowAvailability, setIsLowAvailability] = useState(false);

    useEffect(() => {
        // Check if availability is low (less than 30%)
        const availabilityPercentage = (seatData.available / seatData.total) * 100;
        setIsLowAvailability(availabilityPercentage < 30);
    }, [seatData]);

    const occupancyPercentage = (seatData.occupied / seatData.total) * 100;

    // Generate seat grid visual
    const renderSeatGrid = () => {
        const seats = [];
        for (let i = 0; i < seatData.total; i++) {
            const isOccupied = i < seatData.occupied;
            seats.push(
                <div
                    key={i}
                    className={`w-3 h-3 rounded-sm transition-all duration-500 ${isOccupied
                            ? 'bg-slate-400 scale-100'
                            : 'bg-emerald-400 scale-90 animate-pulse-slow'
                        }`}
                    style={{ animationDelay: `${i * 50}ms` }}
                />
            );
        }
        return seats;
    };

    return (
        <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500 rounded-full blur-[150px]"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-[150px]"></div>
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Info */}
                    <Reveal>
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2">
                                <div className="relative w-2 h-2">
                                    <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping"></div>
                                    <div className="relative w-2 h-2 bg-emerald-400 rounded-full"></div>
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                                    Live Status
                                </span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight">
                                Real-Time <br />
                                <span className="font-bold">Seat Availability</span>
                            </h2>

                            <p className="text-slate-400 leading-relaxed max-w-md">
                                Track current occupancy and secure your seat. Our capacity management ensures optimal study conditions for every resident.
                            </p>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-3 gap-4 pt-4">
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Users className="w-4 h-4 text-cyan-400" />
                                    </div>
                                    <div className="text-2xl font-bold">{seatData.total}</div>
                                    <div className="text-[10px] uppercase tracking-wider text-slate-400">Total Seats</div>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Armchair className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <div className="text-2xl font-bold">{seatData.occupied}</div>
                                    <div className="text-[10px] uppercase tracking-wider text-slate-400">Occupied</div>
                                </div>

                                <div className={`backdrop-blur-sm border rounded-xl p-4 transition-all ${isLowAvailability
                                        ? 'bg-orange-500/10 border-orange-500/30 animate-pulse-slow'
                                        : 'bg-emerald-500/10 border-emerald-500/20 hover:bg-emerald-500/20'
                                    }`}>
                                    <div className="flex items-center gap-2 mb-2">
                                        <TrendingUp className={`w-4 h-4 ${isLowAvailability ? 'text-orange-400' : 'text-emerald-400'}`} />
                                    </div>
                                    <div className="text-2xl font-bold">{seatData.available}</div>
                                    <div className="text-[10px] uppercase tracking-wider text-slate-400">Available</div>
                                </div>
                            </div>

                            {isLowAvailability && (
                                <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4 flex items-start gap-3">
                                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-1.5 animate-pulse"></div>
                                    <div>
                                        <p className="text-sm font-bold text-orange-400 mb-1">Limited Availability</p>
                                        <p className="text-xs text-slate-400">Seats filling fast. Reserve now to secure your spot.</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </Reveal>

                    {/* Right - Visual Seat Map */}
                    <Reveal delay={200}>
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12">
                            <div className="mb-8">
                                <h3 className="text-lg font-bold mb-2">Occupancy Overview</h3>
                                <p className="text-sm text-slate-400 mb-4">
                                    Current capacity at {occupancyPercentage.toFixed(0)}%
                                </p>

                                {/* Progress bar */}
                                <div className="h-3 bg-white/5 rounded-full overflow-hidden mb-2">
                                    <div
                                        className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 transition-all duration-1000 ease-out relative"
                                        style={{ width: `${occupancyPercentage}%` }}
                                    >
                                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                                    </div>
                                </div>

                                <div className="flex justify-between text-xs text-slate-500">
                                    <span>Empty</span>
                                    <span>Full</span>
                                </div>
                            </div>

                            {/* Seat Grid */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 text-xs">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-emerald-400 rounded-sm"></div>
                                        <span className="text-slate-400">Available</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-slate-400 rounded-sm"></div>
                                        <span className="text-slate-400">Occupied</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-10 gap-2">
                                    {renderSeatGrid()}
                                </div>
                            </div>

                            {/* Last updated */}
                            <div className="mt-8 pt-6 border-t border-white/10">
                                <p className="text-[10px] text-slate-500 uppercase tracking-wider">
                                    Last Updated: <span className="text-slate-300 font-bold">Just now</span>
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};
