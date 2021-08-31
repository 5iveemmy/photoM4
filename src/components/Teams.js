import React from "react";
import { CgStack } from "react-icons/cg";
import { WiTime10 } from "react-icons/wi";
import Person from "./person";
import faceOne from "../images/face1.jpg";
import faceTwo from "../images/face2.jpg";
import faceThree from "../images/face3.jpg";
import faceFour from "../images/face4.jpg";
import "./Teams.css";
let colors = {
  black: "#000000",
  yellow: " #d6952c",
  orange: " #ed6031",
  blue: " #29a7c6",
};
function Teams() {
  return (
    <>
      <div className="team">
        <div className="team-wrap">
          <h1 className="header">PROFESSIONALS</h1>
          <h2 className="second-header">Our Team</h2>
          <div className="faces">
            <div className="faces-wrap">
              <Person
                src={faceOne}
                role="Developer"
                color={colors.blue}
                firstName="Ann james"
              />
              <Person
                src={faceTwo}
                role="Designer"
                color={colors.orange}
                firstName="Anissa Fisher"
              />
              <Person
                src={faceThree}
                role="Photographer"
                color={colors.black}
                firstName="Steven Bruce"
              />
              <Person
                src={faceFour}
                role="Photographer"
                color={colors.yellow}
                firstName="Lisa Born"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="clients">
        <div className="clients-wrap">
          <div className="circle">
            <img src={faceFour} alt="face with pink background" />
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
