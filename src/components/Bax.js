import React from "react";

const Box = ({ src }) => {
  return (
    <div className="bax">
      <div className="img-bax">
        <img src={src} />
      </div>
      <div className="detaails">
        <div className="contant">
          <h4>ARTWORK</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
      </div>
    </div>
  );
};

export default Box;
