import React from "react";
import "../index.css"; // 同じディレクトリに index.css がある場合

const Section1 = () => (
  <section className="section1">
    <div className="rotating-h1">
      <h1 className="h1_1">TripTo</h1>
      <h1 className="h1_2">「食歴史」</h1>
      <h1 className="h1_3">新たな食と発見を求めて</h1>
    </div>
    <img
      className="section1_FV_img"
      src="img/kentinjiru.png"
      alt="けんちん汁"
    />

    <img className="section1_img1" src="img/kamakurahen.png" alt="鎌倉編" />
    <button className="section1_button">
      <p className="section1_button_p">一人旅を体験する</p>
      <a className="section1_button_a_arrow"></a>
    </button>
    <div className="section1_img">
      <img
        className="section1_img2"
        src="img/turugaokahatimannguu.png"
        alt="鶴岡八幡宮"
      />
      <img className="section1_img3" src="img/oka.png" alt="丘のデザイン" />
    </div>
  </section>
);

export default Section1;
