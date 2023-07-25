import React from "react";
import OurVision from "../homepage/OurVision";
import Mission from "../homepage/Mission";
import OurStory from "../homepage/OurStory";
import OurTeam from "../homepage/OurTeam";
import BackToTop from "../common/BackToTop";
import Subscribe from "../homepage/Subscribe";
import Footer from "../common/Footer";
import Hero from "../homepage/Hero";

const Homepage = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Hero />
        <OurVision />
        <Mission />
        <OurStory />
        <OurTeam />
        <Subscribe />
        <Footer />
        <BackToTop />
      </div>
    </>
  );
};

export default Homepage;
