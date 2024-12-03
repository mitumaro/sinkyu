import React from "react";

const Quest = ({
  title,
  questNumber,
  description,
  imgSrc,
  alt,
  buttonText,
  discountCoupon,
  CouponSummary,
  CouponDescription,
  StoreSite,
}) => (
  <div className="quest">
    <img src={imgSrc} alt={alt} />
    <h2>{title}</h2>
    <p>クエスト{questNumber}</p>
    <h3>{description}</h3>
    <button>{buttonText}</button>
    <div>
      <p>{discountCoupon}</p>
      <p>{CouponSummary}</p>
      <p>{CouponDescription}</p>
      <button>{StoreSite}</button>
    </div>
  </div>
);

export default Quest;
