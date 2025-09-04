// src/pages/HeroSection.js

import HeroText from "./HeroText";
import PageLayout from "../PageLayout";

export default function HeroSection() {
  return (
    <PageLayout>
      {/* The HeroText component is positioned relative to the parent, PageLayout's children container */}
     
        {/* Container for the HeroText to be at the top-middle of the red section */}
        <div className="flex flex-col justify-center mt-4">
          <HeroText
            greeting="HELLO!"
            tagline="I'm Julia, Front-end Developer"
            use3DGreeting={true}
          />
        </div>
    </PageLayout>
  );
}
//......................................................................
//  // src/components/HeroSection.js
// import HeroText from "./HeroText";
// import SocialLinks from "../SocialLinks";
// import PageLayout from "../PageLayout";

// export default function HeroSection() {
//   return (
//     <PageLayout> {/* Use the wrapper component */}
//       {/* Your unique content for the Hero page */}
//       <div className="bg-red-500 z-20 flex items-center justify-center text-center h-full">
//         <HeroText
//           greeting="HELLO!"
//           tagline="I'm Julia, Front-end Developer"
//           use3DGreeting={true}
//         />
//         <SocialLinks />
//       </div>
//     </PageLayout>
//   );
// }
//...........................................................
// import Navigation from "./Navigation";
// import GrowingTriangle from "./GrowingTriangle";
// import ProfileAvatar from "./ProfileAvatar";
// import HeroText from "./HeroText";
// import SocialLinks from "../SocialLinks";

// // If HeroSection were to receive props, you'd define an interface for them:
// // interface HeroSectionProps {
// //   userName: string;
// //   title: string;
// // }

// // Your HeroSection component code goes here
// export default function HeroSection() {
//   return (
//     <div className="relative min-h-screen bg-gray-900 flex flex-col items-center justify-around p-4">
//       {/* ✅ Wrapper for positioning the navigation relative to the box */}
//       <div className="relative w-full max-w-4xl">
//         {/* ✅ Navigation - visually over the top-right of the box */}
//         <div className="absolute -top-6 right-4 z-30 text-white text-sm font-semibold">
//           <Navigation />
//         </div>

//         {/* ✅ Main rectangle box */}
//         <div className="relative bg-gray-800 h-[65vh] rounded-lg shadow-xl p-8 overflow-hidden border border-purple-500">
//           <GrowingTriangle />

//           <div className="bg-red-500 z-20 flex flex-col items-center justify-center text-center pt-16">
//             <ProfileAvatar
//               src="/images/julia-192px.jpg"
//               alt="Profile Picture"
//             />
//             <HeroText
//               greeting="HELLO!"
//               tagline="I'm Julia, Front-end Developer"
//               use3DGreeting={true}
//             />
//           </div>

//           <SocialLinks />
//         </div>


//       </div>
//     </div>
//   );
// }
