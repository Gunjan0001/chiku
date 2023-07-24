import React from "react";
import { teamCards } from "../common/Helper";

const OurTeam = () => {
  return (
    <div className="mb-md-5 pb-5 pt-sm-4 pt-md-5" id="Our-Team">
      <div className="container custom_container ">
        <div>
          <h2 className="font_xl text-white fw-semibold text-center mb-3">
            Our <span className="text_orange">Team</span>
          </h2>
          <p className="text-center font_sm mb-4 fw-light pb-3 text-white opacity_07 max_w_742 mx-auto">
            Lorem ipsum dolor sit amet consectetur. Turpis rhoncus nibh faucibus
            posuere massa diam placerat et est. Tellus ultricies mattis
            condimentum sit est turpis at. Nisl consequat suscipit pulvinar
            habitasse auctor consectetur
          </p>
        </div>
        <div className="row">
          {teamCards.map((obj, index) => (
            <div className="col-6 col-lg-3" key={index}>
              <div className="text-center team_box_hover mt-4 mt-lg-0">
                <div>
                  <img src={obj.teamImg1} alt="team1" width="100%" />
                </div>
                <h2 className="fw-semibold font_md mb-2 mt-3 pt-1 text-white team_name ">
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
