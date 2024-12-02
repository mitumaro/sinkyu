import React from "react";
import "./index.css";

const Footer = () => (
  <footer className="footer">
    <h2 className="footer__title">TripQuest</h2>
    <div className="footer__links">
      <p>TOP</p>
      <p>鎌倉について</p>
      <p>TripQuestとは？</p>
      <p>クエスト紹介</p>
      <p>
        ・クエスト１
        <br />
        ・クエスト２
        <br />
        ・クエスト３
      </p>
      <button className="footer__button">一人旅を体験する</button>
    </div>
  </footer>
);

export default Footer;
