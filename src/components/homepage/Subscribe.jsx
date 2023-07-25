import React from "react";
import swal from "sweetalert";

const Subscribe = () => {
  const handleSubmitform = (event) => {
    event.preventDefault();
    swal("Thankyou", "", "success");
    document.getElementById("email").value = "";
  };
  return (
    <div className="mb-lg-5 pt-lg-3">
      <div className="container custom_container" id="Join-us">
        <div className="row justify-content-center pb-lg-4">
          <div className="col-md-11 bg_light_black p-5 rounded-2 ">
            <h2
              className="text_white3 text-center fw-semibold font_xl"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              Subscribe To Our <span className="text_orange">Newsletter</span>
            </h2>
            <p
              className="text-white text-center opacity_07 font_sm mb-4 fw-light pb-sm-3"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              Lorem ipsum dolor sit amet consectetur. Turpis rhoncus nibh
              faucibus posuere massa diam placerat
              <br className="d-lg-block d-none " /> et est. Tellus ultricies
              mattis condimentum sit est turpis at. Nisl consequat suscipit
              pulvinar habitasse <br className="d-lg-block d-none " /> auctor
              consectetur
            </p>
            <form
              onSubmit={(e) => handleSubmitform(e)}
              className="d-flex align-items-center flex-column flex-sm-row justify-content-center pb-3"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                className=" subscribe_input text-white"
                required
              />
              <button
                type="submit"
                className="common_btn ms-sm-4 mt-3 border-0 text-white font_sm fw-bold d-inline-block  mt-sm-0"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
