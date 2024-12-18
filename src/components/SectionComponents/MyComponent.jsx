import { useEffect } from "react";

function MyComponent() {
  useEffect(() => {
    const section3_steps = document.querySelector(".section3_steps");
    const figure_section3_steps = document.querySelector(
      ".figure_section3_steps"
    );
    const section3_steps_imgs = document.querySelector(".section3_steps_imgs");

    const handleScroll = () => {
      const sectionRect = section3_steps.getBoundingClientRect();
      const stickyRect = figure_section3_steps.getBoundingClientRect();
      const relativeScrollY = stickyRect.top - sectionRect.top;

      if (relativeScrollY > 280 && relativeScrollY < 550) {
        section3_steps_imgs.style.left = "-100%";
      } else if (relativeScrollY >= 550 && relativeScrollY < 900) {
        section3_steps_imgs.style.left = "-200%";
      } else if (relativeScrollY >= 900) {
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

  return null; // 必要に応じてコンポーネントの UI を追加
}
export default MyComponent;
