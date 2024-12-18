import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect, useState, useCallback } from "react";

gsap.registerPlugin(ScrollTrigger);

const ScrollUpImage1 = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const second = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !imageRef.current) return;

    gsap.fromTo(
      imageRef.current,
      {
        clipPath: "inset(0% 0% 100% 0%)", // 下から隠れている状態（上部は表示）
      },
      {
        clipPath: "inset(0% 0% 0% 0%)", // 全て表示された状態
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 80%",
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
    if (!containerRef.current || !imageRef.current) return;
    gsap.fromTo(
      second.current,
      {
        clipPath: "inset(0% 0% 100% 0%)", // 下から隠れている状態（上部は表示）
      },
      {
        clipPath: "inset(0% 0% 0% 0%)", // 全て表示された状態
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
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
    const element = containerRef.current;
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
    <div ref={containerRef} className="rood1">
      <img src="img/nohara.png" alt="野原のイラスト" className="scroll_up" />
      <img
        ref={imageRef}
        src="img/miti.png"
        alt="道１"
        className="scroll_up delay"
      />
      <img
        ref={second}
        className="rood1_foot"
        src="img/asiato1.png"
        alt="足跡２"
      />
      <img
        src="img/menntikatu.png"
        alt="メンチカツ"
        className={`animatedImage ${isVisibleForImg2 ? "visible" : ""}`}
      />
      <img
        src="img/takebayasi.png"
        alt="竹藪"
        className={`animatedImage ${isVisibleForImg3 ? "visible" : ""}`}
      />
    </div>
  );
};

export default ScrollUpImage1;
