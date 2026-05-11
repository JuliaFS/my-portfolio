import { FaUserCircle } from "react-icons/fa";
import PageLayout from "../components/PageLayout";

export default function AboutMe() {
  return (
    <PageLayout>
      <div className="w-full h-full z-20 p-4 text-center bg-purple-200 rounded-lg">
        <div className="flex w-full items-center justify-center bg-white opacity-50 mb-6 mt-2 py-2 gap-2">
          <FaUserCircle className="text-purple-300 text-2xl" />
          <h2 className="font-semibold">About me</h2>
        </div>
        {/* ✅ Remove the h-full class from this div */}
        <div className="overflow-y-auto h-full">
          <p className="text-left">
            Passionate and motivated front-end developer with a strong
            foundation in HTML, CSS, JavaScript and React. Eager to apply my
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