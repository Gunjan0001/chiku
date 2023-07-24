import React from "react";
import vision from "../../assets/images/webp/visionimg1.webp";
import vision2 from "../../assets/images/webp/visionimg2.webp";

const OurVision = () => {
  return (
    <div className="pt-5 mt-lg-5 position-relative Z_index_1">
      <div className="container custom_container ">
        <div className="row flex-column flex-md-row align-items-center justify-content-between py-xl-5">
          <div className="col-lg-6">
            <div className="text-center text-lg-start">
              <h2 className="font_xl text-white fw-semibold mb-3">
                Our <span className="text_orange">Vision</span>
              </h2>
              <p className="text-white opacity_07 font_sm mb-md-4 mb-0 fw-light pb-3">
                Our mission is to enhance the quality of life for senior
                citizens by utilizing AI technology to address the significant
                issue of loneliness and social isolation. We are dedicated to
                developing solutions that provide personalized support,
                engagement, and companionship to seniors, ultimately improving
                their mental and physical health. Our focus is on creating an
                empathetic and adaptable experience that caters to each
                individual's unique needs and preferences, promoting a sense of
                connection and community. <br /> <br /> We are committed to
                making this innovative technology accessible and widely
                available, empowering seniors worldwide to live happier,
                healthier, and more fulfilling lives.
              </p>
              <a
                href="#"
                className="common_btn text-white font_sm fw-bold d-inline-block"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="col-md-9 col-lg-6 mx-auto mt-3 mt-lg-0">
            <img
              src={vision}
              alt="vision1"
              className="mt-4 mt-md-0 vision_position_img d-none d-lg-block"
            />
            <img
              src={vision2}
              alt="vision"
              className="mt-4 mt-md-0 vision_position_img d-lg-none mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVision;
