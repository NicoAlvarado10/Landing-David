'use client';

import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images: string[] = [
  '/assets/ig-1.webp',
  '/assets/ig-2.webp',
  '/assets/ig-3.webp',
  '/assets/ig-4.webp',
  '/assets/ig-5.webp',
  '/assets/ig-1.webp',
  '/assets/ig-2.webp',
  '/assets/ig-3.webp',
  '/assets/ig-4.webp',
  '/assets/ig-5.webp',
];

export default function Carousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollAmount = 300;

  const handleScroll = (direction: 'left' | 'right') => {
    const container = containerRef.current;
    if (container) {
      const newScroll =
        direction === 'left'
          ? container.scrollLeft - scrollAmount
          : container.scrollLeft + scrollAmount;
      container.scrollTo({ left: newScroll, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-[#f9f9f9] py-16 px-4 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Momentos Destacados
        </h2>

        {/* Botones */}
        <button
          onClick={() => handleScroll('left')}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={() => handleScroll('right')}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
        >
          <ChevronRight />
        </button>

        {/* Carrusel scrollable nativo */}
        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-auto scroll-smooth scroll-px-4 snap-x snap-mandatory px-1"
        >
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`imagen-${idx}`}
              className="w-[180px] md:w-[240px] h-[260px] object-cover rounded-xl shadow-lg flex-shrink-0 snap-start"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
