// components/ProfileAvatar.tsx
import Image from 'next/image';
import React from 'react';

interface ProfileAvatarProps {
  src: string;
  alt: string;
}

export default function ProfileAvatar({ src, alt }: ProfileAvatarProps) {
  return (
    <div className="relative w-32 h-32 rounded-full overflow-hidden mb-8 border-4 border-purple-400 shadow-lg"
         style={{ boxShadow: '0 0 15px rgba(168, 85, 247, 0.8), 0 0 30px rgba(168, 85, 247, 0.6)' }}>
      <Image
        src={src}
        alt={alt}
        fill={true}
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
}