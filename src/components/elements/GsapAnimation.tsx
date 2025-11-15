import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GsapAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray<HTMLElement>('.text2', containerRef.current);

      elements.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, xPercent: -20 },
          {
            opacity: 1,
            xPercent: 0,
            duration: 1.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              end: 'top 30%',
              scrub: 1,
              toggleActions: 'play none none reverse',
              markers: false, // change to true for debugging
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert(); // Clean up animations and triggers
  }, []);

  return (
    <div className="scroll-text" ref={containerRef}>
      <div className="title-stroke-text text2 fadeInUpBig">
        <span>Services</span>
      </div>
      <div className="title-stroke-text text2 fadeInUpBig mt-4">
        <span>Solutions</span>
      </div>
    </div>
  );
};

export default GsapAnimation;