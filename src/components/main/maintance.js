import React from "react";
import Lottie from "react-lottie";
import * as loading from "../../assets/animation/maintance.json";
import "../../css/maintenance.css";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loading.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Maintance = () => {
  return (
    <div className="maintenance">
      <div class="animation">
        <Lottie options={defaultOptions} height={200} width={200} />
        <center>
          <h5>This Website Currently Under Maintenance.</h5>
          <h5>Sorry For Inconveniences.</h5>
        </center>
      </div>
    </div>
  );
};

export default Maintance;
