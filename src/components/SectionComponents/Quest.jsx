import { useRef, useEffect, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PropTypes from "prop-types";
import mappupin from "../../assets/img/mappupin.svg";

gsap.registerPlugin(ScrollTrigger);

const Quest = ({
  idName,
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
  roodClass,
  rood_foot_2,
  roodFootSrc,
  roodFootAlt,
}) => {
  const handleClick = () => {
    window.location.href = "https://trip-quest.jp/";
  };

  const roodRef = useRef(null);
  const roodFoot = useRef(null);

  useEffect(() => {
    if (!roodRef.current) return;

    gsap.fromTo(
      roodRef.current,
      {
        clipPath: "inset(0% 0% 100% 0%)",
      },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: roodRef.current,
          start: "top 70%",
          end: "bottom 70%",
          scrub: true,
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    gsap.fromTo(
      roodFoot.current,
      {
        clipPath: "inset(0% 0% 100% 0%)",
      },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: roodRef.current,
          start: "top 60%",
          end: "bottom 10%",
          scrub: true,
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const [isVisibleForImg2, setIsVisibleForImg2] = useState(false);
  const [isVisibleForImg3, setIsVisibleForImg3] = useState(false);

  const handleScroll = useCallback(() => {
    const element = roodRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    setIsVisibleForImg2(
      rect.top < window.innerHeight - 200 && rect.bottom >= 0
    );
    setIsVisibleForImg3(
      rect.top < window.innerHeight - 300 && rect.bottom >= 0
    );
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div id={idName} className="quest">
      <img className="questImg" src={imgSrc} alt={alt} />
      <div className="questContents">
        <div className="questTitle">
          <img className="mapPin" src={mappupin} alt="マップピン" />
          <h2>{title}</h2>
        </div>
        <p className="questNumber">クエスト{questNumber}</p>
        <h3>{questTitle}</h3>
        <p className="questStory">{description}</p>
        <button onClick={handleClick} className="questContents_button">
          <p className="questContents_p">{buttonText}</p>
          <a className="questContents_arrow"></a>
        </button>

        {discountCoupon && (
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
        )}

        <div className={roodName}>
          <img
            ref={roodRef}
            src={roodImg}
            alt={roodImgAlt}
            className={roodClass}
          />

          <img
            ref={roodFoot}
            className={rood_foot_2}
            src={roodFootSrc}
            alt={roodFootAlt}
          />

          <img
            className={`animatedImage ${isVisibleForImg2 ? "visible" : ""}`}
            src={img2}
            alt={img2Alt}
          />
          <img
            className={`animatedImage ${isVisibleForImg3 ? "visible" : ""}`}
            src={img3}
            alt={img3Alt}
          />
        </div>
      </div>
    </div>
  );
};

Quest.propTypes = {
  idName: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  questNumber: PropTypes.number.isRequired,
  questTitle: PropTypes.node.isRequired,
  description: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  discountCoupon: PropTypes.string,
  CouponSummary: PropTypes.node,
  CouponDescription: PropTypes.node,
  StoreSite: PropTypes.string,
  roodImg: PropTypes.string.isRequired,
  roodImgAlt: PropTypes.string.isRequired,
  img2: PropTypes.string.isRequired,
  img2Alt: PropTypes.string.isRequired,
  img3: PropTypes.string.isRequired,
  img3Alt: PropTypes.string.isRequired,
  roodName: PropTypes.string.isRequired,
  roodClass: PropTypes.string.isRequired,
  rood_foot_2: PropTypes.string.isRequired,
  roodFootSrc: PropTypes.string.isRequired,
  roodFootAlt: PropTypes.string.isRequired,
};

export default Quest;
