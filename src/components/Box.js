import React from "react";

const Box = ({ src }) => {
  return (
    <div className="box">
      <div className="img-box">
        <img src={src} />
      </div>
      <div className="details"></div>
    </div>
  );
};

export default Box;
