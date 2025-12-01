'use client'; // For Next.js 13+ app directory

import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { createRoot } from 'react-dom/client';
import { RiFlowerLine } from 'react-icons/ri';
import { GiTwirlyFlower } from 'react-icons/gi';

const flowers = [
  { Icon: RiFlowerLine, color: '#FF69B4' },
  { Icon: GiTwirlyFlower, color: '#32CD32' },
  { Icon: GiTwirlyFlower, color: '#FFA500' },
  { Icon: GiTwirlyFlower, color: '#8A2BE2' },
  { Icon: GiTwirlyFlower, color: '#FF4500' },
];

export default function DragFlowerTrail() {
  const handRef = useRef(null);
  const dragging = useRef(false);

  const [handPos, setHandPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const setInitialHandPos = () => {
      const taglineEl = document.getElementById('tagline');
      let x, y;

      if (taglineEl) {
        const rect = taglineEl.getBoundingClientRect();
        
        const screenWidth = window.innerWidth;
        if (screenWidth >= 640) {
          x = rect.left - 100;
          y = rect.top + rect.height / 2 - 45;
        } else {
          x = window.innerWidth / 2 - 180;
          y = window.innerHeight / 2 - 120;
        }
        
        setHandPos({ x, y });
      } else {
        setHandPos({ x: window.innerWidth * 0.4, y: window.innerHeight * 0.4 });
      }
    };

    setInitialHandPos();
    window.addEventListener('resize', setInitialHandPos);

    const hand = handRef.current;
    if (!hand) return;

    // Helper function to get coordinates from mouse or touch events
    const getCoords = (e) => {
      if (e.touches && e.touches.length > 0) {
        return { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
      return { x: e.clientX, y: e.clientY };
    };

    // Unified event handlers for mouse and touch
    const onStart = (e) => {
      dragging.current = true;
      if (hand) hand.style.cursor = 'grabbing';
    };

    const onEnd = (e) => {
      dragging.current = false;
      if (hand) hand.style.cursor = 'grab';
    };

    const onMove = (e) => {
      if (!dragging.current) return;
      e.preventDefault();

      const { x: clientX, y: clientY } = getCoords(e);
      const x = clientX - 40;
      const y = clientY - 40;
      setHandPos({ x, y });
      spawnFlower(clientX, clientY);
    };

    // Add mouse event listeners
    window.addEventListener('mousedown', onStart);
    window.addEventListener('mouseup', onEnd);
    window.addEventListener('mousemove', onMove);

    // Add touch event listeners
    window.addEventListener('touchstart', onStart, { passive: false });
    window.addEventListener('touchend', onEnd);
    window.addEventListener('touchmove', onMove, { passive: false });

    return () => {
      window.removeEventListener('mousedown', onStart);
      window.removeEventListener('mouseup', onEnd);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchstart', onStart);
      window.removeEventListener('touchend', onEnd);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('resize', setInitialHandPos);
    };
  }, []);

  const spawnFlower = (x, y) => {
    const flowerObj = flowers[Math.floor(Math.random() * flowers.length)];
    const container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.left = `${x}px`;
    container.style.top = `${y}px`;
    container.style.pointerEvents = 'none';
    container.style.zIndex = '9999';

    document.body.appendChild(container);

    const root = createRoot(container);
    root.render(React.createElement(flowerObj.Icon, { color: flowerObj.color, size: 24 }));

    const angle = Math.random() * Math.PI * 2;
    const dist = 150 + Math.random() * 100;
    const dx = Math.cos(angle) * dist;
    const dy = Math.sin(angle) * dist;

    gsap.to(container, {
      x: dx,
      y: dy,
      scale: 0,
      opacity: 0,
      duration: 1.5,
      ease: 'power1.out',
      onComplete: () => {
        root.unmount();
        container.remove();
      },
    });
  };

  return (
    <div
      ref={handRef}
      className="fixed flex flex-col items-center justify-center w-20 h-20 cursor-grab select-none z-[1000] pointer-events-auto"
      style={{
        top: handPos.y,
        left: handPos.x,
      }}
    >
      <div className="text-3xl md:text-5xl pointer-events-none">🖐️</div>
      <div className="text-sm font-semibold text-gray-600 pointer-events-none select-none mt-1.5 font-[Arial,sans-serif]">
        Drag me
      </div>
    </div>
  );
}
