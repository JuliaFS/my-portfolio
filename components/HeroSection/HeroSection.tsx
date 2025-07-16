import Image from "next/image"; // For optimized images
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa"; // Example for icons
import Navigation from "./Navigation";
import GrowingTriangle from "./GrowingTriangle";
import ProfileAvatar from "./ProfileAvatar";
import HeroText from "./HeroText";
import SocialLinks from "../SocialLinks";
import DrugTrail from "../DrugTrail";

// If HeroSection were to receive props, you'd define an interface for them:
// interface HeroSectionProps {
//   userName: string;
//   title: string;
// }

// Your HeroSection component code goes here
export default function HeroSection() {
  return (
    <div className="relative min-h-screen bg-gray-900 flex flex-col items-center justify-around p-4">

      {/* ✅ Wrapper for positioning the navigation relative to the box */}
      <div className="relative w-full max-w-4xl">
        {/* ✅ Navigation - visually over the top-right of the box */}
        <div className="absolute -top-6 right-4 z-30 text-white text-sm font-semibold">
          <Navigation />
        </div>

        {/* ✅ Main rectangle box */}
        <div className="relative bg-gray-800 rounded-lg shadow-xl p-8 overflow-hidden border border-purple-500">
          <GrowingTriangle />

          <div className="relative z-20 flex flex-col items-center justify-center h-full text-center py-16">
            <ProfileAvatar src="/images/julia-192px.jpg" alt="Profile Picture" />
            <HeroText
              greeting="HELLO!"
              tagline="I'm Julia, Front-end Developer"
              use3DGreeting={true}
            />
          </div>

          <SocialLinks />
        </div>
      </div>
    </div>
  );
}
