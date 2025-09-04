
// src/pages/AboutMe.js

import { FaUserCircle } from "react-icons/fa";
import PageLayout from "../components/PageLayout";

export default function AboutMe() {
  return (
    <PageLayout>
      {/* Your unique content for the About Me page */}
      <div className="h-full flex-1 ml-6 mt-6 relative z-20 p-4 text-center bg-purple-200 rounded-lg">
        <div className="flex w-full items-center justify-center bg-white opacity-50 mb-6 mt-2 py-2 gap-2">
          <FaUserCircle className="text-purple-300 text-2xl" />
          <h2 className="font-semibold">About me</h2>
        </div>
        <div className="h-[15vh]">
          <p>
            Passionate and motivated front-end developer with a strong
            foundation in HTML, CSS, and JavaScript. Eager to apply my
            foundational skills in building user-friendly and visually
            appealing web applications. I am a quick learner and enjoy
            solving problems, with a focus on creating fast and stylish
            applications.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
//..................................................
//  // src/components/AboutMe.js
// import { FaUserCircle } from "react-icons/fa";
// import SocialLinks from "../components/SocialLinks";
// import PageLayout from "../components/PageLayout";

// export default function AboutMe() {
//   return (
//     <PageLayout> {/* Use the wrapper component */}
//       {/* Your unique content for the About Me page */}
//       <div className="flex bg-pink-500">
//         <SocialLinks />
//         <div className="h-full flex-1 ml-6 mt-6 relative z-20 p-4 overflow-y-auto text-center bg-purple-200 rounded-lg">
//           <div className="flex w-full items-center justify-center bg-white opacity-50 mb-6 mt-2 py-2 gap-2">
//             <FaUserCircle className="text-purple-300 text-2xl" />
//             <h2 className="font-semibold">About me</h2>
//           </div>
//           <div>
//             <p>
//               Passionate and motivated front-end developer with a strong
//               foundation in HTML, CSS, and JavaScript. Eager to apply my
//               foundational skills in building user-friendly and visually
//               appealing web applications. I am a quick learner and enjoy
//               solving problems, with a focus on creating fast and stylish
//               applications.
//             </p>
//           </div>
//         </div>
//       </div>
//     </PageLayout>
//   );
// }
//................................................................................
// // If HeroSection were to receive props, you'd define an interface for them:
// // interface HeroSectionProps {
// //   userName: string;
// //   title: string;
// // }

// import { FaUserCircle } from "react-icons/fa";
// import GrowingTriangle from "../components/HeroSection/GrowingTriangle";
// import Navigation from "../components/HeroSection/Navigation";
// import ProfileAvatar from "../components/HeroSection/ProfileAvatar";
// import SocialLinks from "../components/SocialLinks";
// import HeroText from "../components/HeroSection/HeroText";

// // Your HeroSection component code goes here
// export default function AboutMe() {
//   return (
//     <div className="relative min-h-screen bg-gray-900 flex flex-col items-center justify-around p-4">
//       {/* ✅ Wrapper for positioning the navigation relative to the box */}
//       <div className="relative w-full max-w-4xl">
//         {/* ✅ Navigation - visually over the top-right of the box */}
//         <div className="absolute -top-6 right-4 z-30 text-white text-sm font-semibold">
//           <Navigation />
//         </div>

//         {/* ✅ Main rectangle box */}
//         <div className="relative bg-gray-800 rounded-lg h-[65vh] shadow-xl p-8 overflow-hidden border border-purple-500">
//           <GrowingTriangle />

//           <div className="bg-red-500 z-20 flex flex-col items-center justify-center text-center pt-16 h-full">
//             <ProfileAvatar
//               src="/images/julia-192px.jpg"
//               alt="Profile Picture"
//             />
//             {/* <HeroText
//                       greeting="HELLO!"
//                       tagline="I'm Julia, Front-end Developer"
//                       use3DGreeting={true}
//                     /> */}

//             <div className="flex bg-pink-500">
//               <SocialLinks />
//               <div className="h-full flex-1 ml-6 mt-6 relative z-20 p-4 overflow-y-auto text-center bg-purple-200 rounded-lg">
//                 <div className="flex w-full items-center justify-center bg-white opacity-50 mb-6 mt-2 py-2 gap-2">
//                   <FaUserCircle className="text-purple-300 text-2xl" />
//                   <h2 className="font-semibold">About me</h2>
//                 </div>
//                 <div>
//                   <p>
//                     Passionate and motivated front-end developer with a strong
//                     foundation in HTML, CSS, and JavaScript. Eager to apply my
//                     foundational skills in building user-friendly and visually
//                     appealing web applications. I am a quick learner and enjoy
//                     solving problems, with a focus on creating fast and stylish
//                     applications.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ✅ Main rectangle box */}
//         {/* <div className="relative bg-gray-800 rounded-lg shadow-xl p-8 overflow-hidden border border-purple-500">
//           <GrowingTriangle />

//           <div className="z-50 flex flex-col items-center justify-center text-center pt-16">
//             <ProfileAvatar
//               src="/images/julia-192px.jpg"
//               alt="Profile Picture"
//             />
//           </div>
//           <div className="flex">
//             <div className="flex flex-col items-center justify-center w-[80px] bg-green-500">
//               <SocialLinks />
//             </div>
//             <div className="flex-1 ml-6 mt-6 relative z-20 h-[44%] p-4 overflow-y-auto text-center bg-purple-200 rounded-lg">
//               <div className="flex w-full items-center justify-center bg-white opacity-50 mb-6 mt-2 py-2 gap-2">
//                 <FaUserCircle className="text-purple-300 text-2xl" />
//                 <h2 className="font-semibold">About me</h2>
//               </div>
//               <div>
//                 <p>
//                   Passionate and motivated front-end developer with a strong
//                   foundation in HTML, CSS, and JavaScript. Eager to apply my
//                   foundational skills in building user-friendly and visually
//                   appealing web applications. I am a quick learner and enjoy
//                   solving problems, with a focus on creating fast and stylish
//                   applications.
//                 </p>
//               </div>
//             </div>
//           </div>
//           </div> */}
//       </div>
//     </div>
//   );
// }
