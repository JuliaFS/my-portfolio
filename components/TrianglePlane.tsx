'use client';

import React from 'react';

export default function TrianglePlane() {
  return (
    <div className="relative w-0 h-0 mx-auto mt-32">
      {/* 3D triangle with separate edge colors */}
      <div className="w-0 h-0 border-l-[50px] border-r-[50px] border-b-[50px] border-l-transparent border-r-transparent border-b-blue-500"></div>

      {/* Circle image above the triangle tip */}
      <img
        src="/profile.jpg" // Replace this with a real image in /public
        alt="Profile"
        className="absolute top-[-70px] left-1/2 transform -translate-x-1/2
          w-32 h-32
          rounded-full
          border-4 border-white
          shadow-xl
          object-cover
          bg-white
          z-10"
      />
    </div>
  );
}



