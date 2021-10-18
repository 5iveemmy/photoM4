import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="write">
          <div className="write-wrap">
            <h2>Write Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
              feugiat neque. Nulla gravida sodales enim at interdum.
              Pellentesque habitant morbi tristique senectus et netus.
            </p>
          </div>
        </div>
        <div className="form">
          <div className="form-wrapper">
            <form action="" className="form">
              <div className="first-row">
                <div className="row-one">
                  {/* <i class="far fa-user-circle"></i> */}
                  <input
                    placeholder="First Name"
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="row-two">
<<<<<<< HEAD
                  {/* <span className="form-icon-one">
                    <i class="far fa-user-circle"></i>
                  </span> */}
=======
                  <span className="form-icon-one">
//                     <i class="far fa-user-circle"></i>
                  </span>
>>>>>>> fd59486d0ebc861f34416eaa29e1c5825e7d6058
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="first-row" id="new-row">
                <div className="row-one" id="email-row">
<<<<<<< HEAD
                  {/* <i class="far fa-envelope"></i> */}
=======
//                   <i class="far fa-envelope"></i>
>>>>>>> fd59486d0ebc861f34416eaa29e1c5825e7d6058
                  <input
                    placeholder="Email"
                    type="email"
                    className="form-control"
                    id="email"
                  />
                </div>
                <div className="row-two" id="phone-id">
<<<<<<< HEAD
                  {/* <span className="form-icon-one">
                    <i class="fas fa-phone-alt"></i>
                  </span> */}
=======
                  <span className="form-icon-one">
//                     <i class="fas fa-phone-alt"></i>
                  </span>
>>>>>>> fd59486d0ebc861f34416eaa29e1c5825e7d6058
                  <input
                    placeholder="Phone"
                    type="tel"
                    className="form-control"
                    id="phone"
                  />
                </div>
              </div>
              <div className="second-row">
<<<<<<< HEAD
                {/* <span className="form-icon-one">
                  <i class="far fa-clipboard"></i>
                </span> */}
=======
                <span className="form-icon-one">
//                   <i class="far fa-clipboard"></i>
                </span>
>>>>>>> fd59486d0ebc861f34416eaa29e1c5825e7d6058
                <input
                  placeholder="Subject"
                  type="text"
                  className="form-control"
                  id="subject"
                />
              </div>
              <div className="text-row">
<<<<<<< HEAD
                {/* <span className="form-icon-one">
                  <i class="far fa-clipboard"></i>
                </span> */}
=======
                <span className="form-icon-one">
//                   <i class="far fa-clipboard"></i>
                </span>
>>>>>>> fd59486d0ebc861f34416eaa29e1c5825e7d6058
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
<<<<<<< HEAD
                {/* <span className="form-icon-one">
                  <i class="far fa-clipboard"></i>
                </span> */}
=======
                <span className="form-icon-one">
//                   <i class="far fa-clipboard"></i>
                </span>
>>>>>>> fd59486d0ebc861f34416eaa29e1c5825e7d6058
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
