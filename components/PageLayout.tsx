// src/components/PageLayout.js

import ProfileAvatar from "./HeroSection/ProfileAvatar";
import Navigation from "./HeroSection/Navigation";
import SocialLinks from "./SocialLinks";
import GrowingTriangle from "./HeroSection/GrowingTriangle";

export default function PageLayout({ children }) {
  return (
    <div className="relative min-h-screen bg-gray-900 flex flex-col items-center justify-around p-4">
      <div className="relative w-full h-full max-w-4xl">
        <div className="absolute -top-6 right-4 z-30 text-white text-sm font-semibold">
          <Navigation />
        </div>

        <div className="relative flex flex-col bg-gray-800 h-[55vh] rounded-lg shadow-xl p-8 overflow-hidden border border-purple-500">
          <div className="w-full h-[40vh]">
            <GrowingTriangle />

            {/* Profile Avatar is now inside the main box and positioned */}
            <div className="absolute top-16 left-1/2 transform -translate-x-1/2 z-50">
              <ProfileAvatar
                src="/images/julia-192px.jpg"
                alt="Profile Picture"
              />
            </div>
          </div>
        
          <div className="flex-grow h-full flex">
            <div>
              <SocialLinks />
            </div>
            <div className="flex-grow">
              {children} {/* This is where the page-specific content goes */}
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
