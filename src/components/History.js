import React from "react";
import "./History.css";
function History() {
  return (
    <>
      <div className="history">
        <div className="history-wrap">
          <div className="the-text">
            <h2>Our History</h2>
            <h3>Integer iaculis enim sed imperdiet maximus</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              metus metus, ornare sit amet dictum in, fringilla eget eros. Nunc
              in neque ex. Curabitur tempor turpis ligula, sed suscipit ex
              pretium nec. Nullam posuere diam arcu. Cras congue posuere ligula,
              ut placerat mi elementum sed. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
            <div className="more">
              <button className="third-btn">Our Works</button>
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio">
        <div className="portfolio-wrap">
          <h4 className="for-line">PORTFOLIO</h4>
          <h5 className="second-header">Showcase</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu dui
            non diam eleifend egestas id a ligula. Proin interdum vehicula neque
            sit amet scelerisque. Nulla imperdiet mollis libero, in efficitur
            ligula.
          </p>
        </div>
      </div>

      <div className="pictures">
        <div className="pictures-flex">
          <img src="../images/gallery01.jpg" alt="snow on mountain" />
          <img src="../images/gallery02.jpg" alt="bridge" />
          <img src="../images/background1.jpg" alt="red mountain" />
        </div>
      </div>
      <div className="container">
        <div className="container-wrap">
          <div className="box">
            <div className="img-box">
              <img src="../images/background1.jpg" />
            </div>
            <div className="details"></div>
          </div>
          <div className="box">
            <div className="img-box">
              <img src="../images/gallery02.jpg" />
            </div>
            <div className="details"></div>
          </div>
          <div className="box">
            <div className="img-box">
              <img src="../images/gallery01.jpg" />
            </div>
            <div className="details"></div>
          </div>
          <div className="box">
            <div className="img-box">
              <img src="../images/gallery03.jpg" />
            </div>
            <div className="details"></div>
          </div>
          <div className="box">
            {" "}
            <div className="img-box">
              <img src="../images/gallery04.jpg" />
            </div>
            <div className="details"></div>
          </div>
          <div className="box">
            {" "}
            <div className="img-box">
              <img src="../images/gallery05.jpg" />
            </div>
            <div className="details"></div>
          </div>
          <div className="box">
            {" "}
            <div className="img-box">
              <img src="../images/gallery06.jpg" />
            </div>
            <div className="details"></div>
          </div>
          <div className="box">
            {" "}
            <div className="img-box">
              <img src="../images/gallery07.jpg" />
            </div>
            <div className="details"></div>
          </div>
        </div>
      </div>
      <div className="container-2">
        <div className="contain-flex">
          <div className="first-image">
            <img src="../images/gallery01.jpg" alt="snow on mountain" />
          </div>
          <img src="../images/gallery02.jpg" alt="bridge" />
          <div className="details"></div>
        </div>
      </div>
    </>
  );
}

export default History;
