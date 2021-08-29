import React from "react";
import Bex from "./Bex";
import Box from "./Box";
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
          <Bex src="../images/gallery01.jpg" />
          <Bex src="../images/gallery02.jpg" />
          <Bex src="../images/background1.jpg" />
        </div>
      </div>
      <div className="container">
        <div className="container-wrap">
          <Box src="../images/gallery01.jpg" />
          <Box src="../images/gallery02.jpg" />
          <Box src="../images/gallery03.jpg" />
          <Box src="../images/gallery04.jpg" />
          <Box src="../images/gallery05.jpg" />
          <Box src="../images/gallery06.jpg" />
          <Box src="../images/gallery07.jpg" />
          <Box src="../images/gallery08.jpg" />
        </div>
      </div>
      <div className="container-2">
        <div className="contain-flex">
          <div className="bax">
            <div className="img-bax">
              <img src="../images/gallery01.jpg" alt="snow on mountain" />
            </div>
            <div className="detaails">
              <div className="contant">
                <h5>ARTWORK</h5>
                <h6>Landscapes Photography</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer ullamcorper elementum.
                </p>
              </div>
            </div>
          </div>

          <div className="bax">
            <div className="img-bax">
              <img src="../images/gallery02.jpg" alt="bridge" />
            </div>
            <div className="detaails">
              <div className="contant">
                <h5>ARTWORK</h5>
                <h6>Landscapes Photography</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer ullamcorper elementum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default History;
