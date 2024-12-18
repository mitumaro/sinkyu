import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PropTypes from 'prop-types';

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
}) => {
  const roodRef = useRef(null);

  useEffect(() => {
    if (!roodRef.current) return;

    gsap.fromTo(
      roodRef.current,
      {
        clipPath: 'inset(0% 0% 100% 0%)',
      },
      {
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: roodRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: true,
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div id={idName} className='quest'>
      <img className='questImg' src={imgSrc} alt={alt} />
      <div className='questContents'>
        <div className='questTitle'>
          <img className='mapPin' src='img/mappupin.png' alt='マップピン' />
          <h2>{title}</h2>
        </div>
        <p className='questNumber'>クエスト{questNumber}</p>
        <h3>{questTitle}</h3>
        <p className='questStory'>{description}</p>
        <button className='questContents_button'>
          <p className='questContents_p'>{buttonText}</p>
          <a className='questContents_arrow'></a>
        </button>

        {discountCoupon && (
          <div className='store'>
            <p className='store_p'>{discountCoupon}</p>
            <div className='storeIntroduction'>
              <p>{CouponSummary}</p>
              <p>{CouponDescription}</p>
              <button className='storeIntroduction_button'>
                <p className='storeIntroduction_p'>{StoreSite}</p>
                <a className='storeIntroduction_arrow'></a>
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
          <img src={img2} alt={img2Alt} />
          <img src={img3} alt={img3Alt} />
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
};

export default Quest;
