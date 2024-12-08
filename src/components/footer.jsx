import React from "react";
import "../index.css";

const Footer = () => (
  <footer className="footer">
    <h2 className="footer__title">TripQuest</h2>
    <div className="footer__links">
      <p>TOP</p>
      <p>鎌倉について</p>
      <p>TripQuestとは？</p>
      <p>クエスト紹介</p>
      <div className="footer_div">
        <p>・クエスト１</p>
        <p>・クエスト２</p>
        <p>・クエスト３</p>
      </div>

      <button className="footer__button">
        <p className="footer_p">一人旅を体験する</p>
        <a className="footer_arrow"></a>
      </button>
    </div>
  </footer>
);

export default Footer;
