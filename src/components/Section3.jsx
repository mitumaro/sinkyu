import React from "react";
import Step from "./SectionComponents/Step";
import "../index.css";

const Section3 = () => (
  <section className="section3">
    {/* セクション 1 */}
    <div className="section3_intro">
      <h2>
        あなたの鎌倉旅を
        <br />
        充実したものに
      </h2>
      <p>
        知らない場所や知っている場所まで
        <br />
        旅をより楽しくしてくれるツールを
        <br />
        紹介します！
      </p>
      <h2>TripQuest</h2>
      <div className="section3_images">
        <img src="img/tabisyasinn1.png" alt="旅をしている人1" />
        <img src="img/tabisyasinn2.png" alt="旅をしている人2" />
        <img src="img/tabisyasinn3.png" alt="旅をしている人3" />
      </div>
      <h2>
        簡単4ステップで
        <br />
        はじめよう！
      </h2>
    </div>

    {/* セクション 2 */}
    <div className="section3_steps">
      <Step
        step="step1"
        imgSrc="img/sumaho1.png"
        title="気になるクエストを選んでみよう！"
        description="自分の心に従うのがポイント！美味しいもの、面白いもの、刺激があるものなどどれを選ぶ？"
        note=""
      />
      <Step
        step="step2"
        imgSrc="img/sumaho2.png"
        title="選んだクエストに挑戦しよう！"
        description="旅は道中も醍醐味の一つ！新しい発見やクエストのヒントが隠されているかも・・・"
        note=""
      />
      <Step
        step="step3"
        imgSrc="img/sumaho3.png"
        title="選んだクエストを達成しよう！"
        description="普通では味わえない他の視点の発見！達成条件は歩数や写真、位置情報など楽しさ満載！"
        note="※ 達成機能の使用にはサービスへの登録が  
　必要です。"
      />
      <Step
        step="step4"
        imgSrc="img/sumaho4.png"
        title="達成したクエストを自分の思い出にしよう！"
        description="自分の旅の記録をSNSでシェア！SNSにシェアするとクエストの情報が記載されるぞ！"
        note="※ 旅ログ機能の使用にはサービスへの登録が
　必要です。"
      />
    </div>
  </section>
);

export default Section3;
