import React, { useEffect, useRef } from 'react';

interface FloatingShapesProps {
  className?: string;
}

export const FloatingShapes: React.FC<FloatingShapesProps> = ({ className = '' }) => {
  const shapesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!shapesRef.current) return;
      
      const scrolled = window.scrollY;
      const shapes = shapesRef.current.children;
      
      Array.from(shapes).forEach((shape, index) => {
        const speed = 0.5 + (index * 0.2);
        const element = shape as HTMLElement;
        element.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={shapesRef} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-cyan-400/15 rounded-lg rotate-45 blur-lg"></div>
      <div className="absolute top-96 left-1/4 w-16 h-16 bg-indigo-400/25 rounded-full blur-lg"></div>
      <div className="absolute bottom-40 right-10 w-24 h-24 bg-blue-500/20 rounded-lg rotate-12 blur-xl"></div>
      <div className="absolute bottom-20 left-20 w-28 h-28 bg-cyan-300/15 rounded-full blur-lg"></div>
    </div>
  );
};