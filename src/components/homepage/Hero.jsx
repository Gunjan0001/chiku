import React from "react";
import Header from "../common/Header";
import heroimage1 from "../../assets/images/webp/hero-image-1.webp";
import heroimage2 from "../../assets/images/png/hero-image-2.png";
import heroimage3 from "../../assets/images/png/hero-image-3.png";
import blackshadow from "../../assets/images/png/black_shadow.png";
const Hero = () => {
  return (
    <>
      <div className="min_vh_100 hero_bg d-flex flex-column hero_height">
        <div className="position-absolute bottom-0">
          <img src={blackshadow} alt="blackshadow" />
        </div>
        <Header />
        <div className="flex-grow-1 justify-content-center mx-4 mx-xl-0 d-flex align-items-center flex-column mt-4">
          <div className="d-flex align-items-center mb-4">
            <h2 className="fw-bold font_3xl text_white max_w_1186  position-relative z_index_2 text-center text-md-start">
              Let’s Make Our
              <span>
                <img
                  className="heroimage_1 ms-2  mt-3"
                  src={heroimage1}
                  alt="hero_image1"
                />
              </span>
              <span>
                <img
                  className="heroimage_2 ms-3  mt-3"
                  src={heroimage2}
                  alt="hero_image2"
                />
              </span>
              <br className="d-none d-xl-block" />
              <span>
                <img
                  className="heroimage_3 ms-3 mb-3 mt-3 "
                  src={heroimage3}
                  alt="hero_image3"
                />
              </span>
              <span className="ms-3">Oldies</span>
              <span className="happy_text ms-2">Happy</span>
              <span className="ms-3"> with AI</span>
            </h2>
          </div>
          <a
            href="#"
            className="common_btn text-white font_sm fw-bold d-inline-block mt-lg-3 py-3"
          >
            Join the Waitlist
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
