import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ig from "../../assets/footer/ig.png";
import twt from "../../assets/footer/twt.png";
import tiktok from "../../assets/footer/tiktok.png";
import yt from "../../assets/footer/yt.png";
import line from "../../assets/hero/line.png";
import navLogo from "../../assets/navbar/logo-white.png";
import "../../css/navbar-hitam.scoped.css";

function Navbar() {
  return (
    <>
      <section id="navbar">
        <div class="navbar-container">
          <nav class="navbar active navbar-dark">
            <div class="container-fluid">
              {/* <span
                class="mx-2"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
              >
                <p class="navbar-item text-white px-4 mx-2">Back</p>
              </span> */}
              <ul class="navbar-nav right-item navbar-right text-white">
                <li class="nav-item navbar-item px-5 mx-3" type="button">
                  <a href="/olshop#olshop" class="back">
                    Back
                  </a>
                </li>
              </ul>
              <ul class="navbar-nav brand">
                <img class="nav-logo" src={navLogo} alt="" width="50px" />
              </ul>
              <ul class="navbar-nav right-item navbar-right text-white">
                <li class="nav-item navbar-item px-5 mx-3">Login</li>
              </ul>
              <div
                class="offcanvas offcanvas-start"
                tabindex="-1"
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
              >
                <div class="offcanvas-header">
                  <button
                    class="btn-close btn-close-white text-reset px-3 py-4"
                    type="button"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  />
                </div>
                <div class="offcanvas-body">
                  <ul class="sidebar-nav justify-content-start">
                    <li class="nav-item" data-bs-dismiss="offcanvas">
                      <a class="nav-link" aria-current="page" href="#hero">
                        HOME
                      </a>
                    </li>
                  </ul>
                  <div class="row">
                    <div class="col-md-5 col-sm-12 px-4">
                      <ul class="justify-content list-unstyled d-flex">
                        <li>
                          <a href="#">
                            <img src={ig} />
                          </a>
                        </li>
                        <li class="ms-3">
                          <a href="#">
                            <img src={twt} />
                          </a>
                        </li>
                        <li class="ms-3">
                          <a href="#">
                            <img src={tiktok} />
                          </a>
                        </li>
                        <li class="ms-3">
                          <a href="#">
                            <img src={yt} />
                          </a>
                        </li>
                      </ul>
                      <img src={line} alt="" width="100%" class="line" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
}
export default Navbar;
