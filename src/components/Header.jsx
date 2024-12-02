import React from "react";
import "../index.css"; // 同じディレクトリに index.css がある場合

const Header = () => (
  <header>
    <div id="header">
      <img className="header_logo" src="../img/logo.png" alt="ロゴ" />
      <p className="header_p">TripQuest</p>
      <div id="navArea">
        <nav>
          <div className="inner">
            <ul>
              <li>
                <a href="#">topへ</a>
              </li>
              <li>
                <a href="#container1">日本電子専門学校Webデザイン科の特徴</a>
              </li>
              <li>
                <a href="#container_2">何故とは？</a>
              </li>
              <li>
                <a href="#container_3">クライアントからの依頼</a>
              </li>
              <li>
                <a href="#container_4">一枚企画書</a>
              </li>
              <li>
                <a href="#container_5">企画書</a>
              </li>
              <li>
                <a href="#container_6">ワイヤーフレーム</a>
              </li>
              <li>
                <a href="#container_7">モックアップ</a>
              </li>
              <li>
                <a href="#container_8">コーディング</a>
              </li>
              <li>
                <a href="#container_9">collegeNight</a>
              </li>
              <li>
                <a href="#container_10">１日一回自己プロフィール</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="toggle_btn">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div id="mask"></div>
      </div>
    </div>
  </header>
);

export default Header;
