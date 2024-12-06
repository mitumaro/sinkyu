import React from "react";

const Quest = ({
  title,
  questNumber,
  questTitle,
  description,
  imgSrc,
  alt,
  buttonText,
  discountCoupon,
  CouponSummary,
  CouponDescription,
  StoreSite,
  roodImg,
  roodImgAlt,
  img2,
  img2Alt,
  img3,
  img3Alt,
  roodName,
}) => (
  <div className="quest">
    <img className="questImg" src={imgSrc} alt={alt} />
    <div className="questContents">
      <div className="questTitle">
        <img className="mapPin" src="img/mappupin.png" alt="マップピン" />
        <h2>{title}</h2>
      </div>
      <p className="questNumber">クエスト{questNumber}</p>
      <h3>{questTitle}</h3>
      <p className="questStory">{description}</p>
      <button className="questContents_button">
        <p className="questContents_p">{buttonText}</p>
        <a className="questContents_arrow"></a>
      </button>
      <div className="store">
        <p className="store_p">{discountCoupon}</p>
        <div className="storeIntroduction">
          <p>{CouponSummary}</p>
          <p>{CouponDescription}</p>
          <button className="storeIntroduction_button">
            <p className="storeIntroduction_p">{StoreSite}</p>
            <a className="storeIntroduction_arrow"></a>
          </button>
        </div>
      </div>

      <div className={roodName}>
        <img src={roodImg} alt={roodImgAlt} />
        <img src={img2} alt={img2Alt} />
        <img src={img3} alt={img3Alt} />
      </div>
    </div>
  </div>
);

export default Quest;
