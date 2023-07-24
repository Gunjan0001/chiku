import React from "react";
import OurVision from "../homepage/OurVision";
import Mission from "../homepage/Mission";
import OurStory from "../homepage/OurStory";
import OurTeam from "../homepage/OurTeam";

const Homepage = () => {
  return (
    <div className="overflow-hidden">
      <OurVision />
      <Mission />
      <OurStory />
      <OurTeam />
    </div>
  );
};

export default Homepage;
