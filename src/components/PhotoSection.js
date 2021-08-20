import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiCamera, HiOutlineLightBulb } from "react-icons/all";
import "./PhotoSection.css";

function PhotoSection() {
  const [click, setClick] = useState(false);

  return (
    <>
      <div className="photo">
        <div className="photo-wrap">
          <nav className="navbar">
            <div className="navbar-container">
              <div className="nav-wrap">
                <div className="right-head">
                  <div className="right-head-wrap">
                    <h2>PhotoM4</h2>
                  </div>
                </div>
                <div className="menu-wrap">
                  <div className="for-icons">
                    <Link
                      class="social-icon-link facebook"
                      to="/"
                      target="_blank"
                      aria-label="Facebook"
                    >
                      <i class="fab fa-facebook-f" />
                    </Link>
                    <Link
                      class="social-icon-link instagram"
                      to="/"
                      target="_blank"
                      aria-label="Instagram"
                    >
                      <i class="fab fa-instagram" />
                    </Link>
                    <Link
                      class="social-icon-link twitter"
                      to="/"
                      target="_blank"
                      aria-label="Twitter"
                    >
                      <i class="fab fa-twitter" />
                    </Link>
                    <Link
                      class="social-icon-link twitter"
                      to="/"
                      target="_blank"
                      aria-label="LinkedIn"
                    >
                      <i class="fab fa-linkedin" />
                    </Link>
                  </div>
                  <div className="navigation-bar">
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                      <li className="nav-item">
                        <Link to="/" className="nav-links">
                          HOME
                        </Link>
                        <Link to="/" className="nav-links first">
                          <span className="for-demo">LIVE DEMO</span>{" "}
                          <i class="fas fa-caret-down" />
                          <div className="live-dropdown">
                            <Link className="demo" to="/">
                              Photographer
                            </Link>
                            <Link className="demo" to="/">
                              Photo Studio
                            </Link>
                            <Link className="demo" to="/">
                              Photograph Shop
                            </Link>
                            <Link className="demo" to="/">
                              Photo Workshop
                            </Link>
                            <Link className="demo" to="/">
                              Photographer Courses
                            </Link>
                          </div>
                        </Link>
                        <Link to="/" className="nav-links second">
                          <span className="live-demo">LIVE DEMO BLOCKS</span>
                          <i class="fas fa-caret-down" />
                          <div className="live-dropdown">
                            <Link className="demo" to="/">
                              Headers and Features
                            </Link>
                            <Link className="demo" to="/">
                              Content and Shop
                            </Link>
                            <Link className="demo" to="/">
                              Pricing and Contres
                            </Link>
                            <Link className="demo" to="/">
                              Team and Testimonials
                            </Link>
                            <Link className="demo" to="/">
                              Progress and Images
                            </Link>
                            <Link className="demo" to="/">
                              Slider and Video
                            </Link>
                            <Link className="demo" to="/">
                              Socials and Forms
                            </Link>
                            <Link className="demo" to="/">
                              Maps and Footers
                            </Link>
                          </div>
                        </Link>
                        <div className="buy-button">
                          <button className="buy-outline">Buy Now</button>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div className="start">
            <h2>GET STARTED</h2>
          </div>
          <div className="the-studio">
            <h3>Photo Studio</h3>
          </div>
          <div className="studio-parag">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
              dui non diam eleifend egestas id a ligula. Proin interdum vehicula
              neque sit amet scelerisque.
            </p>
          </div>
          <div className="view-btn">
            <button className="second-btn">View More</button>
          </div>
          <div className="the-flex">
            <div className="flex-wrap">
              <div className="camera">
                <BiCamera />
              </div>
              <div className="occasions">
                <HiOutlineLightBulb />
              </div>
              <div className="coverage"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PhotoSection;
