import { useEffect, useState, RefObject } from 'react';

interface UseScrollAnimationOptions {
    threshold?: number;
    triggerOnce?: boolean;
}

export const useScrollAnimation = (
    ref: RefObject<HTMLElement>,
    options: UseScrollAnimationOptions = {}
) => {
    const { threshold = 0.1, triggerOnce = true } = options;
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (triggerOnce) {
                        observer.unobserve(element);
                    }
                } else if (!triggerOnce) {
                    setIsVisible(false);
                }
            },
            { threshold }
        );

        observer.observe(element);

        return () => {
            observer.unobserve(element);
        };
    }, [ref, threshold, triggerOnce]);

    return isVisible;
};

export const useScrollProgress = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = window.scrollY;
            const progress = scrollHeight > 0 ? (scrolled / scrollHeight) : 0;
            setProgress(progress);
        };

        window.addEventListener('scroll', updateProgress, { passive: true });
        updateProgress();

        return () => window.removeEventListener('scroll', updateProgress);
    }, []);

    return progress;
};
