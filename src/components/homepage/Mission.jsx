import React from "react";
import mission1 from "../../assets/images/webp/mission1.webp";
import mission2 from "../../assets/images/webp/mission2.webp";

const Mission = () => {
  return (
    <div className="pb-lg-4 pt-lg-2">
      <div className="container custom_container py-5 my-xl-5" id="Our-Mission">
        <h2
          className="font_xl text-white fw-semibold text-center mb-3"
          data-aos="zoom-in-up"
          data-aos-offset="300"
          data-aos-duration="3000"
        >
          Our <span className="text_orange">Mission</span>
        </h2>
        <p
          className="max_w_865 mx-auto common_para text-center mb-xl-4 pb-3 "
          data-aos="zoom-in-up"
          data-aos-offset="300"
          data-aos-duration="3000"
        >
          We envision a world where senior citizens can enjoy healthier and
          fulfilling lives, free from loneliness and social isolation. We
          believe that technology can play a vital role in improving the overall
          health and well-being of seniors, and we are committed to leveraging
          the latest AI technologies to achieve this goal
        </p>
        <div className="row flex-column flex-sm-row align-items-center justify-content-center">
          <div className="mission_img_1 col-8 mission_hover">
            <img
              src={mission1}
              alt="mission1_img"
              className="w-100  "
              data-aos="zoom-in-right"
              data-aos-offset="300"
              data-aos-duration="3000"
            />
          </div>
          <div className="mission_img_2 mt-sm-0 mt-3 overflow-hidden mx-auto  mission_hover">
            <img
              src={mission2}
              alt="mission2_img"
              className="w-100  "
              data-aos="zoom-in-left"
              data-aos-offset="300"
              data-aos-duration="3000"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
