// components/GlowingTriangle.tsx
import React from 'react';

export default function GlowingTriangle() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="
        w-0 h-0 border-l-[200px] border-l-transparent
        border-r-[200px] border-r-transparent
        border-b-[350px] border-b-purple-500
        transform rotate-[-90deg]
        opacity-50 blur-lg
        "
        style={{ filter: 'drop-shadow(0 0 20px rgba(168, 85, 247, 0.7)) drop-shadow(0 0 40px rgba(168, 85, 247, 0.5))' }}
      ></div>
    </div>
  );
}