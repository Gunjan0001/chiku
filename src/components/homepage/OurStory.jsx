import React from "react";
import twomen from "../../assets/images/webp/story_img.webp";

const OurStory = () => {
  return (
    <div>
      <div
        className="container custom_container pb-4 pb-xl-5 mb-xl-5"
        id="Our-Story"
      >
        <div className="row flex-column-reverse pb-xl-5 flex-lg-row align-items-center justify-content-between">
          <div className=" col-8 col-sm-7 col-lg-5 text-center">
            <img src={twomen} alt="twomen_img" className="w-100 mt-4 mt-lg-0" />
          </div>
          <div className="col-lg-6">
            <div className="text-center text-lg-start">
              <h2 className="font_xl text-white fw-semibold mb-3">
                Our <span className="text_orange">Story</span>
              </h2>
              <p className="text-white opacity_07  font_sm mb-lg-4 mb-0 fw-light pb-3 pe-xl-3">
                Lorem ipsum dolor sit amet consectetur. Turpis rhoncus nibh
                faucibus posuere massa diam placerat et est. Tellus ultricies
                mattis condimentum sit est turpis at. Nisl consequat suscipit
                pulvinar habitasse auctor consectetur lacus eu at. At
                pellentesque sed et odio. Sed aenean cursus justo malesuada
                vitae felis mauris enim quam. Duis sodales facilisi ullamcorper
                volutpat eu id sit massa. Hac donec porttitor pretium luctus
                rhoncus ultrices consectetur duis quam. Aliquet adipiscing
                egestas non vitae. Enim sed a a vitae viverra sagittis
                pellentesque pretium diam. Tellus diam maecenas blandit
                pellentesque congue. A at blandit sit magna purus. Sagittis
                morbi nullam id vitae.
              </p>
              <a
                href="#"
                className="common_btn text-white font_sm fw-bold d-inline-block"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
