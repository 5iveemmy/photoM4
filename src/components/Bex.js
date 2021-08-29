import React from "react";

const Bex = ({ src, alt }) => {
  return (
    <div className="bex">
      <div className="img-bex">
        <img src={src} alt={alt || "red mountain"} />
      </div>
      <div className="deteils">
        <div className="content">
          <h4>ARTWORK</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
      </div>
    </div>
  );
};

export default Bex;
