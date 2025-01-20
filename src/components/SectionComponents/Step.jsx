import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Step = ({ step, title, description, note, index, totalSteps }) => {
  const sectionRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const inner = innerRef.current;
    const isLastSection = index === totalSteps - 1; // 最後のセクションかどうかを判定

    ScrollTrigger.create({
      trigger: section,
      start: "bottom bottom",
      end: "bottom top",
      onEnter: () => {
        if (!isLastSection) {
          gsap.set(inner, {
            position: "fixed",
            bottom: -1,
          });
        }
      },
      onEnterBack: () => {
        if (!isLastSection) {
          gsap.set(inner, {
            position: "fixed",
            bottom: -1,
          });
        }
      },
      onLeaveBack: () => {
        gsap.set(inner, {
          position: "absolute",
          bottom: "0",
        });
      },
      onLeave: () => {
        gsap.set(inner, {
          position: "absolute",
          bottom: "0",
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [index, totalSteps]);

  return (
    <div ref={sectionRef} className="step">
      <div ref={innerRef} className="step_div">
        <p>{step}</p>
        <h3 className="step_div_h3">{title}</h3>
        <p className="step_div_p1">{description}</p>
        <p className="step_div_p2">{note}</p>
      </div>
    </div>
  );
};

Step.propTypes = {
  step: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
  note: PropTypes.string,
  index: PropTypes.number.isRequired, // indexを必須プロパティとして追加
  totalSteps: PropTypes.number.isRequired, // 総ステップ数も追加
};

export default Step;
