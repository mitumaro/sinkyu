import { useState, useEffect } from "react";
import "../index.css"; // Ensure the CSS file path is correct.
import logo from "../assets/img/rogo.svg";

const Header = () => {
  const handleClick = () => {
    window.location.href = "https://trip-quest.jp/";
  };

  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu open/close
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    // スムーススクロールの処理
    const handleSmoothScroll = (e) => {
      e.preventDefault(); // デフォルトのアンカーリンク動作を無効化
      const href = e.target.getAttribute("href");
      if (href && href.startsWith("#")) {
        const target = document.querySelector(href);
        if (target) {
          const offset = 150; // スクロール位置を調整するオフセット（px）
          const position = target.offsetTop - offset; // 移動先の位置にオフセットを追加
          window.scrollTo({
            top: position,
            behavior: "smooth", // スムーススクロール
          });
        }
      }
      closeMenu(); // メニューを閉じる
    };

    // 全てのアンカーリンクにイベントリスナーを追加
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => link.addEventListener("click", handleSmoothScroll));

    // クリーンアップ（イベントリスナーを削除）
    return () => {
      links.forEach((link) =>
        link.removeEventListener("click", handleSmoothScroll)
      );
    };
  }, []);

  return (
    <header id="header">
      <img className="header_logo" src={logo} alt="ロゴ" />
      <p className="header_p">TripQuest</p>
      <div id="navArea" className={isOpen ? "open" : ""}>
        <nav>
          <div className="inner">
            <ul>
              <li>
                <a href="#header">Top</a>
              </li>
              <li>
                <a href="#section2">鎌倉について</a>
              </li>
              <li>
                <a href="#section3">TripQuestとは？</a>
              </li>
              <li>
                <a href="#section4">クエスト紹介</a>
              </li>
              <li>
                <a className="QuestChild" href="#Quest1">
                  ・クエスト１
                </a>
              </li>
              <li>
                <a className="QuestChild" href="#Quest2">
                  ・クエスト２
                </a>
              </li>
              <li>
                <a className="QuestChild" href="#Quest3">
                  ・クエスト３
                </a>
              </li>
            </ul>
          </div>
          <button onClick={handleClick} className="nav_button">
            <div className="nav_button_Box">
              <p className="nav_p">一人旅を体験する</p>
              <a className="nav_arrow"></a>
            </div>
          </button>
        </nav>
        <div className="toggle_btn" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {isOpen && <div id="mask" onClick={closeMenu}></div>}
      </div>
    </header>
  );
};

export default Header;
