// src/components/PageLayout.js
import ProfileAvatar from "./HeroSection/ProfileAvatar";
import Navigation from "./HeroSection/Navigation";
import SocialLinks from "./SocialLinks";
import GrowingTriangle from "./HeroSection/GrowingTriangle";

export default function PageLayout({ children }) {
  return (
    <div className="relative min-h-screen bg-gray-900 flex flex-col items-center justify-around px-4">
      <div className="relative w-full h-full max-w-4xl">
        {/* Navigation */}
        <div className="absolute -top-6 right-4 z-10 text-white text-xs md:text-sm font-semibold">
          <Navigation />
        </div>

        {/* Main container split into 2 rows */}
        {/* Main container split into 2 rows */}
        <div className="relative grid grid-rows-[30%_70%] lg:grid-rows-[45%_55%] h-[80vh] md:[h-600px] lg:h-[500px] bg-gray-800 rounded-lg shadow-xl p-8 overflow-hidden border border-purple-500 min-h-0">
          {/* Top row (red) */}
          <div className="relative z-10">
            <GrowingTriangle />
            <div className="absolute lg:top-4 left-1/2 transform -translate-x-1/2 z-50">
              <ProfileAvatar
                src="/images/julia-192px.jpg"
                alt="Profile Picture"
              />
            </div>
          </div>

          {/* Bottom row (orange) */}
          <div className="relative z-20 grid grid-rows-[10fr_2fr] lg:grid-rows-1 lg:grid-cols-[1fr_10fr] gap-4 lg:gap-0 items-stretch h-full">
            <div className="rounded-lg overflow-y-hidden order-first lg:order-last h-full min-h-0">
              {children}
            </div>
            <div className="rounded-lg order-last lg:order-first h-full">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// // src/components/PageLayout.js

// import Navigation from "./HeroSection/Navigation";
// import ProfileAvatar from "./HeroSection/ProfileAvatar";
// import GrowingTriangle from "./HeroSection/GrowingTriangle";

// export default function PageLayout({ children }) {
//   return (
//     <div className="relative min-h-screen bg-gray-900 flex flex-col items-center justify-around p-4">
//       {/* Wrapper for positioning the navigation relative to the box */}
//       <div className="relative w-full max-w-4xl">
//         {/* Navigation - visually over the top-right of the box */}
//         <div className="absolute -top-6 right-4 z-30 text-white text-sm font-semibold">
//           <Navigation />
//         </div>

//         {/* Main rectangle box */}
//         <div className="relative bg-gray-800 h-[65vh] rounded-lg shadow-xl p-8 overflow-hidden border border-purple-500">
//           <GrowingTriangle />
//           <div className="z-50 flex flex-col items-center justify-center text-center pt-16">
//             <ProfileAvatar src="/images/julia-192px.jpg" alt="Profile Picture" />
//           </div>
//           {children} {/* This is where the specific page content will be rendered */}
//         </div>
//       </div>
//     </div>
//   );
// }
