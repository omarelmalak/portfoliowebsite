"use client";
import Hero from "./components/Hero";
import Experience from "./components/Experience";

const Website: React.FC = () => {
  return (
    <div className="w-full">
      <Hero />
      {/* Ensure Experience is fully visible when scrolling */}
      <div id="experience-section">
        <Experience />
      </div>
    </div>
  );
};

export default Website;
