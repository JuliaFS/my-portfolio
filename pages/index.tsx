

import { Metadata } from 'next';
import HeroSection from '../components/HeroSection/HeroSection';

export const metadata: Metadata = {
  title: 'My Portfolio - Home',
  description: 'A showcase of my projects and skills.',
};

export default function HomePage() {
  return (
    <HeroSection />
  );
}
