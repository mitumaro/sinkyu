import { useEffect } from "react";
import "../index.css";

const Footer = () => {
  const handleClick = () => {
    window.location.href = "https://trip-quest.jp/";
  };

  useEffect(() => {
    const handleAnchorClick = (event) => {
      const targetId = event.target.getAttribute("href");
      if (targetId && targetId.startsWith("#")) {
        event.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const offset = 150; // スクロール位置を調整するオフセット（px）
          const position = targetElement.offsetTop - offset; // 移動先の位置にオフセットを追加
          window.scrollTo({
            top: position,
            behavior: "smooth",
          });
        }
      }
    };

    const footerLinks = document.querySelectorAll(".footer__links p");
    footerLinks.forEach((link) => {
      link.addEventListener("click", handleAnchorClick);
    });
    return () => {
      footerLinks.forEach((link) => {
        link.removeEventListener("click", handleAnchorClick);
      });
    };
  }, []);

  return (
    <footer className="footer">
      <h2 className="footer__title">TripQuest</h2>
      <div className="footer__links">
        <p href="#header">TOP</p>
        <p href="#section2">鎌倉について</p>
        <p href="#section3">TripQuestとは？</p>
        <p href="#section4">クエスト紹介</p>
        <div className="footer_div">
          <p href="#Quest1">・クエスト１</p>
          <p href="#Quest2">・クエスト２</p>
          <p href="#Quest3">・クエスト３</p>
        </div>

        <button onClick={handleClick} className="footer__button">
          <div className="footer__button_box">
            <p className="footer_p">一人旅を体験する</p>
            <a className="footer_arrow"></a>
          </div>
        </button>
        <p className="copyright">©︎ TripQuest</p>
      </div>
    </footer>
  );
};

export default Footer;
