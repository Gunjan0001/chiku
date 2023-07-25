import React from "react";
import Logo from "../../assets/images/svg/navlogo.svg";

const Header = () => {
  const handldeOverlayActive = () => {
    document.body.classList.toggle("overflow-hidden");
    document.body.classList.toggle("active-nav-overlay");
  };

  return (
    <>
      <div className="d-none d-lg-block nav_bg py-3">
        <div className="container custom_container d-flex justify-content-between align-items-center position-relative  ">
          <div>
            <a className="navbar_logo" href="/">
              <img width={137} src={Logo} alt="Logo" />
            </a>
          </div>
          <ul className="list-unstyled d-flex align-items-center justify-content-center m-0 gap-5">
            <li>
              <a
                className="font_sm   text-white opacity_07 navbar-link fw-normal position-relative"
                href="#Join-us"
              >
                Join us
              </a>
            </li>
            <li>
              <a
                className="font_sm   text-white opacity_07 navbar-link fw-normal position-relative"
                href="#Our-Mission"
              >
                Our Mission
              </a>
            </li>
            <li>
              <a
                className="font_sm   text-white opacity_07 navbar-link fw-normal position-relative"
                href="#Our-Story"
              >
                Our story
              </a>
            </li>
            <li>
              <a
                className="font_sm   text-white opacity_07 navbar-link fw-normal position-relative"
                href="#Our-Team"
              >
                Our Team
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="d-block d-lg-none mt-3 z_index_5">
        <div className="container">
          <div className="py-lg-2 d-flex justify-content-between align-items-center position-relative ">
            <div>
              <a className="navbar_logo" href="/">
                <img width={137} src={Logo} alt="Logo" />
              </a>
            </div>
            <div
              id="nav-icon1"
              className="hamburger-menu "
              onClick={() => handldeOverlayActive()}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div className="navbar-overlay">
          <ul className="h-100 list-unstyled d-flex flex-column justify-content-center align-items-center m-0 navbar_bg position-relative z_index_999 min-vh-100">
            <li onClick={() => handldeOverlayActive()} className="pb-3 pt-5">
              <a
                href="#Join-us"
                className="font-normal font_sm navbar-link  text-white opacity_07 "
              >
                Join us
              </a>
            </li>
            <li onClick={() => handldeOverlayActive()} className="py-3">
              <a
                href="#Our-Mission"
                className="font-normal font_sm navbar-link  text-white opacity_07 "
              >
                Our Mission
              </a>
            </li>
            <li onClick={() => handldeOverlayActive()} className="py-3">
              <a
                href="#Our-Story"
                className="font-normal font_sm navbar-link  text-white opacity_07 "
              >
                Our Story
              </a>
            </li>
            <li onClick={() => handldeOverlayActive()} className="py-3">
              <a
                href="#Our-Team"
                className="font-normal font_sm navbar-link  text-white opacity_07 "
              >
                Our-Team
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Header;
