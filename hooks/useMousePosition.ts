import { useState, useEffect } from 'react';

interface MousePosition {
    x: number;
    y: number;
}

export const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    return mousePosition;
};

export const useMouseParallax = (strength: number = 20) => {
    const { x, y } = useMousePosition();
    const centerX = typeof window !== 'undefined' ? window.innerWidth / 2 : 0;
    const centerY = typeof window !== 'undefined' ? window.innerHeight / 2 : 0;

    const moveX = ((x - centerX) / centerX) * strength;
    const moveY = ((y - centerY) / centerY) * strength;

    return { moveX, moveY };
};
