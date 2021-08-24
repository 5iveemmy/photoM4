import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="write">
          <h2>Write Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
            feugiat neque. Nulla gravida sodales enim at interdum. Pellentesque
            habitant morbi tristique senectus et netus.
          </p>
        </div>
        <div className="form">
          <div className="form-wrapper">
            <form action="" className="form">
              <div className="first-row">
                <div className="row-one">
                  <input
                    placeholder="First Name"
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="row-two">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="first-row">
                <div className="row-one">
                  <input
                    placeholder="Email"
                    type="email"
                    className="form-control"
                  />
                </div>
                <div className="row-two">
                  <input
                    placeholder="Phone"
                    type="number"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="second-row">
                <input
                  placeholder="Subject"
                  type="text"
                  className="form-control"
                  id="subject"
                />
              </div>
              <div className="text-row">
                <textarea
                  name="message"
                  placeholder="Message"
                  id="text-area"
                  cols="30"
                  rows="10"
                  className="form-control"
                ></textarea>
              </div>
              <div className="second-row">
                <input
                  placeholder="How did you hear about us?"
                  type="text"
                  className="form-control"
                  id="hear"
                />
              </div>
              <div className="for-form">
                <button type="submit" className="send">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          Copyright 2021 All rights reserved | This template is made by 5ive
        </p>
      </div>
    </div>
  );
}

export default Footer;