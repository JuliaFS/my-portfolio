'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import DrugTrail from '../DrugTrail';

interface HeroTextProps {
  greeting: string;
  tagline: string;
  use3DGreeting?: boolean;
}

export default function HeroText({
  greeting,
  tagline,
  use3DGreeting = false,
}: HeroTextProps) {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (use3DGreeting && textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: -80, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.8,
          ease: 'power4.out',
          delay: 0.5,
        }
      );
    }
  }, [use3DGreeting]);

  return (
    <>
      {use3DGreeting ? (
        <div className="relative w-full h-40 flex items-center justify-center">
          <h1
            ref={textRef}
            className="text-5xl md:text-6xl font-extrabold text-white tracking-wider"
          >
            {greeting}
          </h1>
        </div>
      ) : (
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-wider">
          {greeting}
        </h1>
      )}

      <div>
        <DrugTrail />
        <p
          id="tagline"
          className="text-xl md:text-2xl text-purple-200 mb-8 text-right"
          style={{ textShadow: '0 0 5px rgba(196, 181, 253, 0.5)' }}
        >
          {tagline}
        </p>
      </div>
    </>
  );
}

