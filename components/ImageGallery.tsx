import React, { useState } from 'react';
import { Reveal } from './Reveal';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryImage {
    url: string;
    title: string;
    description: string;
}

const images: GalleryImage[] = [
    {
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069',
        title: 'Study Hall',
        description: 'Spacious, naturally lit environment designed for deep focus'
    },
    {
        url: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070',
        title: 'Individual Stations',
        description: 'Ergonomic 4ft personal workstations with premium seating'
    },
    {
        url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069',
        title: 'Discussion Room',
        description: 'Collaborative space for group study and peer learning'
    },
    {
        url: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61?q=80&w=2095',
        title: 'Library Corner',
        description: 'Curated collection of reference materials and resources'
    },
    {
        url: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2070',
        title: 'Lounge Area',
        description: 'Comfortable break zone for mental rejuvenation'
    },
    {
        url: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=2070',
        title: 'Dining Facility',
        description: 'Nutritious meals prepared with careful attention to student needs'
    }
];

export const ImageGallery: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const openLightbox = (index: number) => {
        setCurrentIndex(index);
        setIsLightboxOpen(true);
    };

    const closeLightbox = () => {
        setIsLightboxOpen(false);
    };

    // Keyboard navigation
    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isLightboxOpen) return;

            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'Escape') closeLightbox();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isLightboxOpen]);

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <Reveal>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-light tracking-tight text-slate-900 mb-4">
                            Facility <span className="font-bold">Showcase</span>
                        </h2>
                        <p className="text-slate-500 text-sm max-w-2xl mx-auto">
                            A visual journey through our meticulously designed spaces crafted for optimal productivity.
                        </p>
                    </div>
                </Reveal>

                {/* Main Featured Image */}
                <Reveal delay={100}>
                    <div
                        className="relative aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden mb-6 cursor-pointer group shadow-2xl shadow-slate-900/10"
                        onClick={() => openLightbox(currentIndex)}
                    >
                        <img
                            src={images[currentIndex].url}
                            alt={images[currentIndex].title}
                            className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                        />

                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>

                        {/* Info */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                {images[currentIndex].title}
                            </h3>
                            <p className="text-slate-300 text-sm md:text-base max-w-2xl">
                                {images[currentIndex].description}
                            </p>
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={(e) => { e.stopPropagation(); prevImage(); }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all group/btn"
                            aria-label="Previous image"
                        >
                            <ChevronLeft className="w-6 h-6 group-hover/btn:-translate-x-0.5 transition-transform" />
                        </button>
                        <button
                            onClick={(e) => { e.stopPropagation(); nextImage(); }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all group/btn"
                            aria-label="Next image"
                        >
                            <ChevronRight className="w-6 h-6 group-hover/btn:translate-x-0.5 transition-transform" />
                        </button>
                    </div>
                </Reveal>

                {/* Thumbnail Strip */}
                <Reveal delay={200}>
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                        {images.map((image, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`relative aspect-[4/3] rounded-xl overflow-hidden transition-all duration-300 ${index === currentIndex
                                        ? 'ring-4 ring-emerald-500 scale-105 shadow-lg'
                                        : 'opacity-60 hover:opacity-100 hover:scale-105'
                                    }`}
                            >
                                <img
                                    src={image.url}
                                    alt={image.title}
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                />
                                {index === currentIndex && (
                                    <div className="absolute inset-0 border-2 border-white/50 rounded-xl pointer-events-none"></div>
                                )}
                            </button>
                        ))}
                    </div>
                </Reveal>
            </div>

            {/* Lightbox */}
            {isLightboxOpen && (
                <div
                    className="fixed inset-0 z-[999] bg-slate-900/95 backdrop-blur-xl flex items-center justify-center p-4 animate-fade-in"
                    onClick={closeLightbox}
                >
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all z-10"
                        aria-label="Close lightbox"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    <button
                        onClick={(e) => { e.stopPropagation(); prevImage(); }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all z-10"
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="w-7 h-7" />
                    </button>

                    <button
                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all z-10"
                        aria-label="Next image"
                    >
                        <ChevronRight className="w-7 h-7" />
                    </button>

                    <div className="max-w-7xl w-full" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={images[currentIndex].url}
                            alt={images[currentIndex].title}
                            className="w-full h-auto rounded-2xl shadow-2xl"
                        />
                        <div className="text-center mt-6 text-white">
                            <h3 className="text-2xl font-bold mb-2">{images[currentIndex].title}</h3>
                            <p className="text-slate-300">{images[currentIndex].description}</p>
                            <p className="text-slate-500 text-sm mt-4">
                                {currentIndex + 1} / {images.length}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};
