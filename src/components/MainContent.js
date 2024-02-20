// MainContent.js
import React from "react";
import gsap from "gsap";

const MainContent = () => {
  // Example animation using GSAP
  gsap.from(".fade-in", { opacity: 0, duration: 1, delay: 0.5 });

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4 fade-in">
        Does this sound familiar...
        <span role="img" aria-label="Face and ear emoji">
          😮👂
        </span>
      </h2>
      <p className="text-gray-600 fade-in">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum justo vel urna tincidunt, vel tincidunt justo vestibulum.
      </p>
      {/* Add other content, illustrations, and animations here */}
    </div>
  );
};

export default MainContent;
