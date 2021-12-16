import React from "react";
import "../../css/About.scoped.css";

import video from "../../assets/videos/dummy-hero.mp4";

export default class About extends React.Component {
  constructor() {
    super();
    this.state = {
      isPlay: false,
    };
  }

  stopMovie = (e) => {
    e.target.pause();
    e.target.currentTime;
    this.setState({ isPlay: false });
    // console.log("off");
  };

  playMovie = (e) => {
    e.target.play();
    this.setState({ isPlay: true });
    // console.log("on");
  };
  render() {
    return (
      <>
        {/* <h1 className="b-example-divider mb-0">About section</h1> */}
        <section id="about">
          <div className="">
            <div className="about">
              <div class="container">
                <div class="box">
                  <video
                    src={video}
                    type="video/mp4"
                    loop
                    class="clip"
                    muted
                    onMouseOver={this.playMovie}
                    onMouseOut={this.stopMovie}
                  />
                </div>
                <div class="box">
                  <video
                    src={video}
                    type="video/mp4"
                    loop
                    class="clip"
                    muted
                    onMouseOver={this.playMovie}
                    onMouseOut={this.stopMovie}
                  />
                </div>

                <div class="overlay row h-300 align-items-center justify-content-center text-center">
                  {this.state.isPlay === false ? (
                    <div class="about-text align-self-end">
                      <h1 class="varsity-text">
                        ABOUT <span class="text-red">MOKLETERS</span>
                      </h1>
                      <p>
                        Lorem Ipsum is simpley dummy text of the printing dummy
                      </p>
                    </div>
                  ) : (
                    <div class="about-text active align-self-end">
                      <h1 class="varsity-text">
                        ABOUT <span class="text-red">MOKLETERS</span>
                      </h1>
                      <p>
                        Lorem Ipsum is simpley dummy text of the printing dummy
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
