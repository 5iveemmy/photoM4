import React from "react";
import Bex from "./Bex";
import Box from "./Box";
import Bax from "./Bax";
import galleryOne from "../images/gallery01.jpg";
import galleryTwo from "../images/gallery02.jpg";
import galleryThree from "../images/gallery03.jpg";
import galleryFour from "../images/gallery04.jpg";
import galleryFive from "../images/gallery05.jpg";
import gallerySix from "../images/gallery06.jpg";
import gallerySeven from "../images/gallery07.jpg";
import backgroundOne from "../images/background1.jpg";

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
          <Bex src={galleryOne} />
          <Bex src={galleryTwo} />
          <Bex src={backgroundOne} />
        </div>
      </div>
      <div className="container">
        <div className="container-wrap">
          <Box src={backgroundOne} />
          <Box src={galleryOne} />
          <Box src={galleryTwo} />
          <Box src={galleryThree} />
          <Box src={galleryFour} />
          <Box src={galleryFive} />
          <Box src={gallerySix} />
          <Box src={gallerySeven} />
        </div>
      </div>
      <div className="container-2">
        <div className="contain-flex">
          <Bax src={galleryOne} />
          <Bax src={galleryTwo} />
        </div>
      </div>
    </>
  );
}

export default History;
