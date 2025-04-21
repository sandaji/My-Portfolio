"use client";
import React, { useState, useRef, useEffect } from "react";
import { TimeLineData } from "../constants";

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

  const scroll = (node: HTMLElement, left: number) => {
    node.scrollTo({ left, behavior: "smooth" });
  };

  const handleClick = (e: React.MouseEvent, i: number) => {
    e.preventDefault();
    if (carouselRef.current) {
      const scrollLeft = Math.floor(
        carouselRef.current.scrollWidth * 0.7 * (i / TOTAL_CAROUSEL_COUNT)
      );
      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(
        (carouselRef.current.scrollLeft /
          (carouselRef.current.scrollWidth * 0.7)) *
          TOTAL_CAROUSEL_COUNT
      );
      setActiveItem(index);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (carouselRef.current) scroll(carouselRef.current, 0);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="about" className="max-w-[1040px] mx-auto px-6 py-10">
      {/* Divider + Title */}
      <div className="w-16 h-1 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 mb-10" />
      <h2 className="text-[56px] font-extrabold bg-gradient-to-r from-cyan-300 via-white to-purple-500 bg-clip-text text-transparent mb-6">
        About Me
      </h2>

      <p className="max-w-[800px] text-lg text-white/75 mb-8">
        As a <strong className="text-white">Mathematics and Computer Science</strong> graduate, I've channeled my analytical skills into a passion for web development. Through self-directed learning, I've gained expertise in various contemporary technology stacks essential for building effective web solutions.
      </p>


      {/* Scrollable Carousel */}
      <div
        ref={carouselRef}
        onScroll={handleScroll}
        className="flex overflow-x-scroll no-scrollbar space-x-6 snap-x snap-mandatory scroll-smooth py-4"
      >
        {TimeLineData.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[270px] md:w-[320px] bg-[#1c2541] rounded-lg p-6 snap-center border border-white/10"
            onClick={(e) => handleClick(e, index)}
          >
            <h3 className="text-white text-3xl font-bold mb-2">{item.year}</h3>
            <div className="w-full h-[4px] bg-gradient-to-r from-cyan-400 to-purple-600 rounded my-4" />
            <p className="text-white/75 text-base">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-3 mt-6">
        {TimeLineData.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              activeItem === index
                ? "bg-gradient-to-r from-cyan-400 to-purple-600"
                : "bg-white/30"
            }`}
            onClick={(e) => handleClick(e, index)}
            aria-label={`Go to item ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Timeline;
