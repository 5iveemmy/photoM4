import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiCamera, CgStack, HiOutlineLightBulb } from "react-icons/all";
import "./PhotoSection.css";

function PhotoSection() {
  const [click, setClick] = useState(false);

  return (
    <>
      <div className="photo">
        <div className="photo-wrap">
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
                <BiCamera className="flex-icons" />
                <h4>Photo Sessions</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer ullamcorper elementum felis in bibendum. Proin vitae
                  turpis ipsum.
                </p>
                <h5>READ MORE</h5>
                <hr />
              </div>
              <div className="occasions">
                <HiOutlineLightBulb className="flex-icons" />
                <h4>Ocassions</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer ullamcorper elementum felis in bibendum. Proin vitae
                  turpis ipsum.
                </p>
                <h5>READ MORE</h5>
                <hr />
              </div>
              <div className="coverage">
                <CgStack className="flex-icons" />
                <h4>Coverage</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer ullamcorper elementum felis in bibendum. Proin vitae
                  turpis ipsum.
                </p>
                <h5>READ MORE</h5>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PhotoSection;
