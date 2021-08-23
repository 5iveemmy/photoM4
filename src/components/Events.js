import React from "react";
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
                <div className="middle">
                  <img src="./images/01.jpg" alt="hands on camera" />
                </div>
              </div>
              <span className="for-date">AUGUST 23 - DECEMBER 24, 2021</span>
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
            <div className="two">
              <img src="./images/02.jpg" alt="hands on camera" />
              <span className="for-date">AUGUST 23 - DECEMBER 24, 2021</span>
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
              <img src="./images/03.jpg" alt="hands on camera" />
              <span className="for-date">AUGUST 23 - DECEMBER 24, 2021</span>
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
                <div className="progress-number">100%</div>
              </div>
            </div>
          </div>
          <div className="the-image">
            <img src="./images/02.jpg" alt="hands on camera" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Events;
