import React, { useState } from "react";
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
                  <a href="#">top</a>
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
                  <a href="#Quest1">クエスト１</a>
                </li>
                <li>
                  <a href="#Quest2">クエスト２</a>
                </li>
                <li>
                  <a href="#Quest3">クエスト３</a>
                </li>
              </ul>
            </div>
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
