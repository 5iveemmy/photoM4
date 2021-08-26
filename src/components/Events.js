import React from "react";
import { BiCamera, CgStack, HiOutlineLightBulb } from "react-icons/all";
import "./Events.css";

function Events() {
  return (
    <>
      <div className="event-background">
        <div className="events">
          <h2 className="header">OUR EVENTS</h2>
          <h3 className="mid-head">You Can Visit</h3>
          <div className="event-flex">
            <div className="one">
              <div className="img-container">
                <img src="./images/01.jpg" alt="hands on camera" />
              </div>
              <h3 className="for-date">AUGUST 23 - DECEMBER 24, 2021</h3>
              <h4 className="event-third-head">
                Stray gleams steal into the inner sanctuary
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                ullamcorper elementum felis in bibendum. Proin vitae turpis
                ipsum.
              </p>
              <h5>READ MORE</h5>
              <hr />
            </div>
            <div className="one">
              <div className="img-container">
                <img src="./images/02.jpg" alt="hands on camera" />
              </div>
              <h3 className="for-date">AUGUST 23 - DECEMBER 24, 2021</h3>
              <h4 className="event-third-head">
                Absorbed in the exquisite sense of tranquil
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                ullamcorper elementum felis in bibendum. Proin vitae turpis
                ipsum.
              </p>
              <h5>READ MORE</h5>
              <hr />
            </div>
            <div className="one">
              <div className="img-container">
                <img src="./images/03.jpg" alt="hands on camera" />
              </div>
              <h3 className="for-date">AUGUST 23 - DECEMBER 24, 2021</h3>
              <h4 className="event-third-head">
                The meridian sun strikes the upper surface
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                ullamcorper elementum felis in bibendum. Proin vitae turpis
                ipsum.
              </p>
              <h5>READ MORE</h5>
              <hr />
            </div>
          </div>
        </div>
      </div>
      <div className="photography">
        <div className="photo-flex">
          <div className="photo-text">
            <h1>Photography is an Art</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              eget lectus eu ex ornare porta euismod a libero. Phasellus
              vehicula placerat enim at egestas. Aliquam suscipit felis in massa
              hendrerit tristique.
            </p>
            <h1>Skills & Perspectives</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              eget lectus eu ex ornare porta euismod a libero. Phasellus
              vehicula placerat enim at egestas. Aliquam suscipit felis in massa
              hendrerit tristique.
            </p>
            <div className="progress-one">
              <div className="title-wrap">
                <div className="progress-title">
                  <p>Photography</p>
                </div>
                <div className="the-number">
                  <span> %</span>
                </div>
              </div>
              <progress className="progress" value="100" max="100"></progress>
            </div>
            <div className="progress-two just">
              <div className="title-wrap">
                <div className="progress-title">
                  <p>Design</p>
                </div>
                <div className="the-number">
                  <span> %</span>
                </div>
              </div>
              <progress className="progress" value="90" max="100"></progress>
            </div>
            <div className="progress-three just">
              <div className="title-wrap">
                <div className="progress-title">
                  <p>Coverage</p>
                </div>
                <div className="the-number">
                  <span> %</span>
                </div>
              </div>
              <progress className="progress" value="80" max="100"></progress>
            </div>
            <div className="progress-four">
              <div className="title-wrap">
                <div className="progress-title">
                  <p>Art</p>
                </div>
                <div className="the-number">
                  <span> %</span>
                </div>
              </div>
              <progress className="progress" value="70" max="100"></progress>
            </div>
          </div>
          <div className="the-image">
            <img src="./images/02.jpg" alt="hands on camera" />
          </div>
        </div>
      </div>
      <div className="counter">
        <div className="counter-flex">
          <div className="session-flex">
            <BiCamera className="counter-icons" />
            <div
              data-purecounter-start="0"
              data-purecounter-end="2937"
              data-purecounter-duration="0"
              className="pure-counter"
            >
              2937
            </div>
            <h6>Photo Sessions</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              ullamcorper elementum felis in bibendum. Proin vitae turpis ipsum.
            </p>
          </div>
          <div className="ocassion-flex">
            <HiOutlineLightBulb className="counter-icons" />
            <div
              data-purecounter-start="0"
              data-purecounter-end="1286"
              data-purecounter-duration="3"
              className="pure-counter"
            >
              1286
            </div>
            <h6>Photo Sessions</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              ullamcorper elementum felis in bibendum. Proin vitae turpis ipsum.
            </p>
          </div>
          <div className="cover-flex">
            <CgStack className="counter-icons" />
            <div
              data-purecounter-start="0"
              data-purecounter-end="1329"
              data-purecounter-duration="0"
              className="pure-counter"
            >
              1329
            </div>
            <h6>Photo Sessions</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              ullamcorper elementum felis in bibendum. Proin vitae turpis ipsum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Events;
