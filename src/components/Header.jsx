import React, { useState, useEffect } from "react";
import "../index.css"; // Ensure the CSS file path is correct.

const Header = () => {
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
          const position = target.offsetTop; // 移動先の位置を取得
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
    <header>
      <div id="header">
        <img className="header_logo" src="../img/logo.png" alt="ロゴ" />
        <p className="header_p">TripQuest</p>
        <div id="navArea" className={isOpen ? "open" : ""}>
          <nav>
            <div className="inner">
              <ul>
                <li>
                  <a href="#">Top</a>
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
                  <a href="#Quest1">・クエスト１</a>
                </li>
                <li>
                  <a href="#Quest2">・クエスト２</a>
                </li>
                <li>
                  <a href="#Quest3">・クエスト３</a>
                </li>
              </ul>
            </div>
            <button className="nav_button">
              <p className="nav_p">一人旅を体験する</p>
              <a className="nav_arrow"></a>
            </button>
          </nav>
          <div className="toggle_btn" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          {isOpen && <div id="mask" onClick={closeMenu}></div>}
        </div>
      </div>
    </header>
  );
};

export default Header;
