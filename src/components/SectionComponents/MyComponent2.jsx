import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import sumaho1 from "../../assets/img/sumaho1.png";
import sumaho2 from "../../assets/img/sumaho2.png";
import sumaho3 from "../../assets/img/sumaho3.png";
import sumaho4 from "../../assets/img/sumaho4.png";

function MyComponent() {
  useEffect(() => {
    const section3_steps = document.querySelector(".section3_steps");
    const figure_section3_steps = document.querySelector(
      ".figure_section3_steps"
    );
    const section3_steps_imgs = document.querySelector(".section3_steps_imgs");
    const step_sh = document.querySelector(".step_sh");

    const handleScroll = () => {
      console.log("スクロールイベント発生");

      if (step_sh) {
        console.log("step_sh element found");
      }

      const sectionRect = section3_steps.getBoundingClientRect();
      const stickyRect = figure_section3_steps.getBoundingClientRect();
      const relativeScrollY = stickyRect.top - sectionRect.top;
      const vh = window.innerHeight; // 画面の高さを取得

      // 画像の左位置の変更
      if (relativeScrollY > vh * 1 && relativeScrollY < vh * 2) {
        section3_steps_imgs.style.left = "-100%";
      } else if (relativeScrollY >= vh * 2 && relativeScrollY < vh * 3) {
        section3_steps_imgs.style.left = "-200%";
      } else if (relativeScrollY >= vh * 3) {
        section3_steps_imgs.style.left = "-300%";
      } else {
        section3_steps_imgs.style.left = "0%";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // step_shの位置を変更する処理
    ScrollTrigger.create({
      markers: true,
      trigger: ".section3_steps",
      start: "top 100vh+=-100px", // section3_stepsの100vh地点で固定
      end: "bottom 400vh+=516vh", // section3_stepsの400vh地点でabsolute
      toggleClass: {
        targets: ".step_sh",
        className: "fixed-position",
      },
    });

    // スクロール終了時にstep_endクラスを追加
    ScrollTrigger.create({
      trigger: ".section3_steps",
      start: "bottom bottom", // 下端が画面下端に到達した時
      end: "bottom bottom", // この位置でトリガー発動
      onEnter: () => {
        document.querySelector(".step_sh").classList.add("step_end");
      },
      onLeaveBack: () => {
        document.querySelector(".step_sh").classList.remove("step_end");
      },
    });

    // クリーンアップ処理
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // 全てのScrollTriggerインスタンスをkillする
    };
  }, []);

  return (
    <div className="step_sh">
      <div className="figure_section3_steps">
        <ul className="section3_steps_imgs">
          <li className="section3_steps_li">
            <img className="section3_steps_img" src={sumaho1} alt="Step 1" />
          </li>
          <li className="section3_steps_li">
            <img className="section3_steps_img" src={sumaho2} alt="Step 2" />
          </li>
          <li className="section3_steps_li">
            <img className="section3_steps_img" src={sumaho3} alt="Step 3" />
          </li>
          <li className="section3_steps_li">
            <img className="section3_steps_img" src={sumaho4} alt="Step 4" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MyComponent;
