import React from "react";
import "../css/Hero.scoped.css";

import logo from "../assets/hero/hero-logo.svg";
import video from "../assets/videos/dummy-video.mp4";

export default class Hero extends React.Component {
  // Menggunakan js untuk play video karena jika tidak
  // video tidak mau play
  playMovie = (e) => {
    e.target.play();
    console.log("on");
  };
  render() {
    return (
      <>
        <section id="hero">
          <div className="full-page">
            <video
              class="video-slide active"
              src={video}
              autoplay
              muted
              loop
              onLoadStart={this.playMovie}
            />
            <div class="content">
              <div class="col-lg-7 mx-auto text-center">
                <h1 class="font-weight-bold varsity-text text-center">
                  WITH<span> MOKLETERS </span>COMES BLESSEDNES
                </h1>
                <i class="fas fa-gem me-3">
                  <img
                    src={logo}
                    className="hero-logo"
                    alt="logo"
                    width="9%"
                    height="9%"
                  />
                </i>
                <div class="scroll-arrow">
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

// import React from "react";
// import "../css/Hero.scoped.css";
// import video from "../assets/videos/dummy-video.mp4";

// export default class Hero extends React.Component {
//   playMovie = (e) => {
//     e.target.play();
//     console.log("on");
//   };
//   render() {
//     return (
//       <div className="hero-container">
//         <video src={video} autoplay muted loop onLoadStart={this.playMovie} />
//         <h1>ADVENTURE AWAITS</h1>
//         <p>What are you waiting for?</p>
//       </div>
//     );
//   }
// }
