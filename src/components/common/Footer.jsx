import React from "react";
import footerlogo from "../../assets/images/svg/footerlogo.svg";
import { Instagram, Twitter, Whatsapp } from "./Icons";

const Footer = () => {
  return (
    <div className="pt-5">
      <div className="container custom_container">
        <div className="row justify-content-between align-items-center mt-lg-3">
          <div className="col-lg-5 text-lg-start text-center ">
            <a className="footer_logo" href="/">
              <img src={footerlogo} alt="footerlogo" />
            </a>
            <p className="font_sm opacity_07 fw_300 text-white  mt-md-4 pt-1 mb-0">
              Lorem ipsum dolor sit amet consectetur. Turpis
              <br className="d-none d-xl-block" /> rhoncus nibh faucibus posuere
              massa diam
            </p>
          </div>
          <div className="col-lg-auto">
            <div className="d-flex gap-2 gap-sm-5 justify-content-center mt-lg-0 mt-3">
              <a
                className="footer_links text-decoration-none font_sm fw-normal "
                href="#Join-us"
              >
                Join us
              </a>
              <a
                className="footer_links text-decoration-none font_sm fw-normal "
                href="#Our-Mission"
              >
                Our Mission
              </a>
              <a
                className="footer_links text-decoration-none font_sm fw-normal "
                href="#Our-Story"
              >
                Our story
              </a>
              <a
                className="footer_links text-decoration-none font_sm fw-normal "
                href="#Our-Team"
              >
                Our Team
              </a>
            </div>
            <div className="d-flex justify-content-center justify-content-lg-start gap-4 align-items-center mt-4 pt-1 ">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="social_icon"
              >
                <span className="footer_icon">
                  <Instagram />
                </span>
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                className="social_icon"
              >
                <span className="footer_icon">
                  <Twitter />
                </span>
              </a>
              <a
                href="https://www.whatsapp.com/"
                target="_blank"
                className="social_icon"
              >
                <span className="footer_icon">
                  <Whatsapp />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border_gray mt-4 mt-lg-5 text-center py-3">
        <a href="#" className="font_xs  opacity_07 fw-light text-white mb-0">
          copyright@Chiku.com
        </a>
      </div>
    </div>
  );
};

export default Footer;
