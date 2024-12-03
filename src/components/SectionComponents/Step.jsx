import React from "react";

const Step = ({ step, imgSrc, title, description, note }) => (
  <div className="step">
    <p>{step}</p>
    <div className="step_div">
      <img src={imgSrc} alt={`${step}の画像`} />
      <div className="step_div_2">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{note}</p>
      </div>
    </div>
  </div>
);

export default Step;
