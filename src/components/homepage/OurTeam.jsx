import React from "react";
import { teamCards } from "../common/Helper";

const OurTeam = () => {
  return (
    <div className="mb-md-5 pb-5 pt-sm-4 pt-5" id="Our-Team">
      <div className="container custom_container ">
        <div data-aos="fade-up">
          <h2 className="font_xl text-white fw-semibold text-center mb-lg-3">
            Our <span className="text_orange">Team</span>
          </h2>
          <p className="text-center common_para mb-lg-4 pb-xl-3 max_w_742 mx-auto">
            Lorem ipsum dolor sit amet consectetur. Turpis rhoncus nibh faucibus
            posuere massa diam placerat et est. Tellus ultricies mattis
            condimentum sit est turpis at. Nisl consequat suscipit pulvinar
            habitasse auctor consectetur
          </p>
        </div>
        <div className="row justify-content-center">
          {teamCards.map((obj, index) => (
            <div className="col-6 col-md-4 col-lg-3" key={index}>
              <div
                className="text-center team_box_hover mt-4 mt-lg-0"
                data-aos="flip-left"
                data-aos-offset="500"
                data-aos-duration="3000"
              >
                <div className="overflow-hidden rounded-3 max_w_300 mx-auto">
                  <img src={obj.teamImg1} alt="team1" width="100%" />
                </div>
                <h2 className="fw-semibold font_md mb-lg-2 mt-lg-3 mt-1 pt-1 text-white">
                  {obj.Name}
                </h2>
                <p className="text-white fw-light font_sm opacity_07 mb-0">
                  {obj.post}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4 pt-md-3 pb-xl-5">
          <a
            href="#"
            className="common_btn text-white font_sm fw-bold d-inline-block"
          >
            Join Our Team
          </a>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
