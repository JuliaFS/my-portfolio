import DrugTrail from '../components/DrugTrail';
import HeroSection from '../components/HeroSection/HeroSection'; // Adjust path if your structure is different

// You can define a NextPage type if you want, but it's optional for simple pages
// import type { NextPage } from 'next';

// This is your main page component that Next.js will render
const HomePage = () => {
  return (
    // You're now rendering the HeroSection component here
    <HeroSection />

  );
};

export default HomePage;

/*
Example of an SVG for a glowing triangle (simplified) - this code would also go directly into your TSX
*/
// <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 600">
//   <defs>
//     <filter id="neon-glow">
//       <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
//       <feColorMatrix in="blur" mode="matrix" values="
//         1 0 0 0 0
//         0 1 0 0 0
//         0 0 1 0 0
//         0 0 0 10 0
//       " result="glow" />
//       <feMerge>
//         <feMergeNode in="SourceGraphic" />
//         <feMergeNode in="glow" />
//       </feMerge>
//     </filter>
//   </defs>

//   {/* Outer glowing triangle */}
//   <polygon
//     points="400,100 100,500 700,500"
//     fill="transparent"
//     stroke="#A855F7" /* Tailwind purple-500 */
//     strokeWidth="4"
//     filter="url(#neon-glow)"
//   />

//   {/* Inner dotted line triangle (you'd need to adjust points for nested triangle) */}
//   <polygon
//     points="400,150 150,450 650,450"
//     fill="transparent"
//     stroke="#C4B5FD" /* Tailwind purple-300 */
//     strokeWidth="2"
//     strokeDasharray="10 10"
//   />
// </svg>



// import { useQuery } from '@tanstack/react-query'
// import { fetchDeveloperData } from '../utils/fetcher'
// import RotatedTitle from '../components/RotatedTitle'
// import TrianglePlane from '../components/TrianglePlane'
// import DrugTrail from '../components/DrugTrail'

// export default function Home() {
//   const { data, isLoading, error } = useQuery(['developer'], fetchDeveloperData)

//   if (isLoading)
//     return (
//       <main className="min-h-screen bg-black flex items-center justify-center text-white">
//         Loading...
//       </main>
//     )

//   if (error)
//     return (
//       <main className="min-h-screen bg-black flex items-center justify-center text-red-500">
//         Error loading data
//       </main>
//     )

//   return (
//     <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-10 relative">
//       {/* <RotatedTitle /> */}
//       <div className="w-full h-full">
//       <TrianglePlane />
//       <DrugTrail />
//       </div>
//       <h1 className="text-5xl font-extrabold mb-4">{data.developer.name}</h1>
//       <p className="text-xl max-w-xl text-center">{data.developer.bio}</p>
//     </main>
//   )
// }
