import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  // handleClick = () => {

  // };
  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <nav className={navbar || click ? "navbar active" : "navbar"}>
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
                <div className="menu-icon" onClick={handleClick}>
                  <i
                    className={
                      click ? "fas fa-times fa-sm" : "fas fa-bars fa-sm"
                    }
                  />
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                  <li className="nav-item">
                    <Link to="/" className="nav-links">
                      HOME
                    </Link>
                  </li>
                  <li className="nav-item">
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
                  </li>
                  <li className="nav-item">
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
                  </li>
                  <div className="buy-button">
                    <button className="buy-outline">Buy Now</button>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
