import React from "react";

const Person = ({ role, src, firstName, color, description }) => {
  return (
    <div style={{ backgroundColor: color, padding: " 16px 15px" }}>
      <img src={src} alt="face with white shirt" />
      <div className="face-text">
        <h3>{role}</h3>
        <h4>{firstName}</h4>
        <p>
          {description ||
            ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu dui
          non diam eleifend egestas id a ligula.`}
        </p>
      </div>
    </div>
  );
};

export default Person;
