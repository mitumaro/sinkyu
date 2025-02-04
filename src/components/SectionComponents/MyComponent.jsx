import { useEffect } from "react";
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

      // // step_sh の位置をスクロールに応じて変更
      // if (sectionRect.top <= 0 && sectionRect.bottom > vh * 1.05) {
      //   if (step_sh) {
      //     console.log("step_sh is now fixed");
      //     step_sh.style.position = "fixed";
      //     step_sh.style.top = "5%";
      //     step_sh.style.left = "50%"; // 親要素が影響しないようにする
      //     step_sh.style.transform = "translateX(-50%)";
      //     step_sh.style.zIndex = "999"; // 必要に応じて z-index を追加
      //   }
      // } else {
      //   if (step_sh) {
      //     console.log("step_sh is now absolute");
      //     step_sh.style.position = "absolute";
      //     step_sh.style.top = "0%"; // absolute の場合、top をクリア
      //     step_sh.style.left = ""; // left もクリア
      //     step_sh.style.zIndex = ""; // z-index もリセット
      //   }
      // }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
