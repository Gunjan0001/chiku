import React from "react";
import logo_loading from "../../assets/images/svg/navlogo.svg";

function Loader() {
  return (
    <div>
      <div className="min-vh-100 bg-black Loader_position">
        <img
          className="w_xsm_50 w_sm_13 animation_Loader"
          src={logo_loading}
          alt="loading"
        />
      </div>
    </div>
  );
}

export default Loader;
