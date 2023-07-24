import React from "react";
import mission1 from "../../assets/images/webp/mission1.webp";
import mission2 from "../../assets/images/webp/mission2.webp";

const Mission = () => {
  return (
    <div className="pb-md-4 pt-md-2">
      <div className="container custom_container py-5 my-xl-5" id="Our-Mission">
        <div>
          <h2 className="font_xl text-white fw-semibold text-center mb-3">
            Our <span className="text_orange">Mission</span>
          </h2>
          <p className="max_w_865 mx-auto text-white text-center font_sm mb-4 fw-light pb-3 opacity_07">
            We envision a world where senior citizens can enjoy healthier and
            fulfilling lives, free from loneliness and social isolation. We
            believe that technology can play a vital role in improving the
            overall health and well-being of seniors, and we are committed to
            leveraging the latest AI technologies to achieve this goal
          </p>
        </div>
        <div className="row flex-column flex-sm-row align-items-center">
          <div className="mission_img_1" data-aos="flip-left">
            <img src={mission1} alt="mission1_img" className="w-100" />
          </div>
          <div className="mission_img_2 mt-sm-0 mt-3" data-aos="flip-right">
            <img src={mission2} alt="mission2_img" className="w-100" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
