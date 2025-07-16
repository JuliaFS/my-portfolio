'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';

const FlyingEffect = () => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const circle = document.createElement('div');
      circle.className = 'flying-circle';
      circle.style.left = `${e.clientX}px`;
      circle.style.top = `${e.clientY}px`;
      document.body.appendChild(circle);

      // Animate with GSAP
      const angle = Math.random() * Math.PI * 2;
      const distance = 300 + Math.random() * 200;

      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;

      gsap.to(circle, {
        x,
        y,
        scale: 0,
        opacity: 0,
        duration: 1.5,
        ease: 'power2.out',
        onComplete: () => {
          circle.remove();
        },
      });
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return null;
};

export default FlyingEffect;
