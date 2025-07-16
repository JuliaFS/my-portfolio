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
  const handRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  // Initialize with 0,0 for SSR safety
  const [handPos, setHandPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Set initial position once on client side
    //setHandPos({ x: window.innerWidth * 0.4, y: window.innerHeight * 0.4 });
    const taglineEl = document.getElementById('tagline');
if (taglineEl) {
  const rect = taglineEl.getBoundingClientRect();
  const x = rect.left - 100; // position slightly left of the text
  const y = rect.top + rect.height / 2 - 40; // vertically center it
  setHandPos({ x, y });
} else {
  // Fallback default if not found
  setHandPos({ x: window.innerWidth * 0.4, y: window.innerHeight * 0.4 });
}


    const hand = handRef.current;
    if (!hand) return;

    function onMouseDown() {
      dragging.current = true;
      hand.style.cursor = 'grabbing';
    }

    function onMouseUp() {
      dragging.current = false;
      hand.style.cursor = 'grab';
    }

    function onMouseMove(e: MouseEvent) {
      if (!dragging.current) return;

      const x = e.clientX - 40;
      const y = e.clientY - 40;
      setHandPos({ x, y });

      spawnFlower(e.clientX, e.clientY);
    }

    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  const spawnFlower = (x: number, y: number) => {
    const flowerObj = flowers[Math.floor(Math.random() * flowers.length)];
    const container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.left = `${x}px`;
    container.style.top = `${y}px`;
    container.style.pointerEvents = 'none';
    container.style.zIndex = '9999';

    document.body.appendChild(container);

    // Render React icon into container (React 18+)
    const root = createRoot(container);
    root.render(<flowerObj.Icon color={flowerObj.color} size={24} />);

    // Animate flying out randomly
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
      style={{
        position: 'fixed',
        top: handPos.y,
        left: handPos.x,
        width: '80px',
        height: '80px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'grab',
        userSelect: 'none',
        zIndex: 1000,
        pointerEvents: 'auto',
      }}
    >
      <div style={{ fontSize: '48px', pointerEvents: 'none' }}>🖐️</div>
      <div
        style={{
          fontSize: '14px',
          color: '#555',
          fontWeight: '600',
          pointerEvents: 'none',
          userSelect: 'none',
          marginTop: '6px',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        Drag me
      </div>
    </div>
  );
}



// "use client";

// import { useRef, useEffect } from "react";
// import { gsap } from "gsap";

// const DragTrail = () => {
//   const handRef = useRef<HTMLDivElement>(null);
//   const offset = useRef({ x: 0, y: 0 });
//   const isDragging = useRef(false);

//   useEffect(() => {
//     const hand = handRef.current;
//     if (!hand) return;

//     const onMouseDown = (e: MouseEvent) => {
//       console.log("🖱️ mouse down");

//       offset.current = {
//         x: e.clientX - hand.offsetLeft,
//         y: e.clientY - hand.offsetTop,
//       };

//       isDragging.current = true;

//       document.addEventListener("mousemove", onMouseMove);
//       document.addEventListener("mouseup", onMouseUp);
//     };

//     const onMouseMove = (e: MouseEvent) => {
//       if (!isDragging.current) return;

//       const x = e.clientX - offset.current.x;
//       const y = e.clientY - offset.current.y;

//       hand.style.left = `${x}px`;
//       hand.style.top = `${y}px`;

//       console.log("👣 moving to", x, y);
//       spawnParticle(x + 40, y + 40);
//     };

//     const onMouseUp = () => {
//       isDragging.current = false;

//       document.removeEventListener("mousemove", onMouseMove);
//       document.removeEventListener("mouseup", onMouseUp);
//     };

//     hand.addEventListener("mousedown", onMouseDown);

//     return () => {
//       hand.removeEventListener("mousedown", onMouseDown);
//       document.removeEventListener("mousemove", onMouseMove);
//       document.removeEventListener("mouseup", onMouseUp);
//     };
//   }, []);

//   const spawnParticle = (x: number, y: number) => {
//     const particle = document.createElement("div");
//     particle.className = "particle";
//     particle.style.left = `${x}px`;
//     particle.style.top = `${y}px`;
//     document.body.appendChild(particle);

//     const angle = Math.random() * Math.PI * 2;
//     const dist = 100 + Math.random() * 100;
//     const dx = Math.cos(angle) * dist;
//     const dy = Math.sin(angle) * dist;

//     gsap.to(particle, {
//       x: dx,
//       y: dy,
//       scale: 0,
//       opacity: 0,
//       duration: 1,
//       ease: "power1.out",
//       onComplete: () => particle.remove(),
//     });
//   };

//   return (
//     <div
//       ref={handRef}
//       style={{
//         position: "absolute",
//         top: "20vh",
//         left: "20vw",
//         width: "100px",
//         height: "100px",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         backgroundColor: "rgba(0,0,0,0)",
//         cursor: "grab",
//         zIndex: 1000,
//         userSelect: "none",
//       }}
//     >
//       <div style={{ fontSize: "36px", pointerEvents: "none" }}>🖐️</div>
//       <div
//         style={{
//           fontSize: "12px",
//           color: "#444",
//           marginTop: "4px",
//           pointerEvents: "none",
//           fontFamily: "sans-serif",
//         }}
//       >
//         Drag me
//       </div>
//     </div>
//   );
// };

// export default DragTrail;
