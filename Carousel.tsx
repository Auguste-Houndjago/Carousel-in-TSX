"use client"; //important

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather"; //npm i react-feather

export default function Carousel({
  autoSlide = false,
  autoSlideInterval = 3000,
  slides,
}: {
  autoSlide?: boolean;
  autoSlideInterval?: number;
  slides: string[];
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval]);

  return (
    <div className="overflow-hidden relative rounded-md w-full">
      <div className="flex justify-center items-center w-full h-56 transition-transform ease-out duration-500">
        {/* Mapping divs containing images */}
        {slides.map((img, i) => (
          <div
            key={i}
            className={`absolute w-full h-full flex justify-center items-center transition-opacity duration-500 ${
              curr === i ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img}
              className="w-full h-full object-cover rounded-md"
              alt={`slide-${i}`}
            />
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronRight size={40} />
        </button>
      </div>
         {/* modification of waypoints */}
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all ${
                curr === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setCurr(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
