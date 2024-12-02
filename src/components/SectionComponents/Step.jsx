import React from "react";

const Step = ({ step, imgSrc, title, description }) => (
  <div className="step">
    <p>{step}</p>
    <img src={imgSrc} alt={`${step}の画像`} />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default Step;
