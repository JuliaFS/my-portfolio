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
