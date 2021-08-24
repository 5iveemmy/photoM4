import React from "react";
import { CgStack } from "react-icons/cg";
import { WiTime10 } from "react-icons/wi";
import "./Teams.css";

function Teams() {
  return (
    <>
      <div className="team">
        <div className="team-wrap">
          <h1 className="header">PROFESSIONALS</h1>
          <h2 className="second-header">Our Team</h2>
          <div className="faces">
            <div className="faces-wrap">
              <div className="face-one">
                <img
                  src="../images/face1.jpg"
                  alt="face with blue background"
                />
                <div className="face-text">
                  <h3>Developer</h3>
                  <h4>Ann james</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    eu dui non diam eleifend egestas id a ligula.
                  </p>
                </div>
              </div>
              <div className="face-two">
                <img src="../images/face2.jpg" alt="face with red shirt" />
                <div className="face-text">
                  <h3>Designer</h3>
                  <h4>Anissa Fisher</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    eu dui non diam eleifend egestas id a ligula.
                  </p>
                </div>
              </div>
              <div className="face-three">
                <img src="../images/face3.jpg" alt="face with white shirt" />
                <div className="face-text">
                  <h3>Manager</h3>
                  <h4>Steven Bruce</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    eu dui non diam eleifend egestas id a ligula.
                  </p>
                </div>
              </div>
              <div className="face-four">
                <img src="../images/face4.jpg" alt="face with blue jacket" />
                <div className="face-text">
                  <h3>Photographer</h3>
                  <h4>Lisa Born</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    eu dui non diam eleifend egestas id a ligula.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="clients">
        <div className="clients-wrap">
          <div className="circle">
            <img src="../images/face4.jpg" alt="face with pink background" />
          </div>
          <div className="clients-text">
            <h5>Our Clients</h5>
            <h6>JANE DOE</h6>
            <p className="first-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              eget lectus eu ex ornare porta euismod a libero. Phasellus
              vehicula placerat enim
            </p>
            <div className="lil-icons">
              <div className="lil-one">
                <p>
                  <span>
                    <WiTime10 />
                  </span>
                  2018-09-18 12:00
                </p>
              </div>
              <div className="lil-two">
                <p>
                  <span>
                    <CgStack />
                  </span>
                  Consonantia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Teams;
