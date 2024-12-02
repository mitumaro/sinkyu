import React from "react";
import Step from "./SectionComponents/Step";
import Quest from "./SectionComponents/Quest";
import "./index.css"; // 同じディレクトリに index.css がある場合

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
      />
      <Step
        step="step2"
        imgSrc="img/sumaho2.png"
        title="選んだクエストに挑戦しよう！"
        description="旅は道中も醍醐味の一つ！新しい発見やクエストのヒントが隠されているかも・・・"
      />
      <Step
        step="step3"
        imgSrc="img/sumaho3.png"
        title="選んだクエストを達成しよう！"
        description="普通では味わえない他の視点の発見！達成条件は歩数や写真、位置情報など楽しさ満載！"
      />
      <Step
        step="step4"
        imgSrc="img/sumaho4.png"
        title="達成したクエストを自分の思い出にしよう！"
        description="自分の旅の記録をSNSでシェア！SNSにシェアするとクエストの情報が記載されるぞ！"
      />
    </div>

    {/* セクション 3 */}
    <div className="section3_quests">
      <h2>クエスト紹介</h2>
      <Quest
        title="鎌倉十王岩の展望"
        questNumber="1"
        description="今日だけあなたは戦国武将！歴史ある鎌倉の山にそびえる「十王岩」にて武士の誇りを呼び覚まし敵にその勇猛さを声に託して叫べ！"
        imgSrc="img/kamakurajyuuouiwa.png"
        alt="鎌倉十王岩の展望"
        buttonText="このクエストに参加する"
      />
      <Quest
        title="建長寺"
        questNumber="2"
        description="日本最古の禅宗寺院では、歴史ある文化が色濃く残されているらしい。特に古くから食べられていた物を探してみよう！"
        imgSrc="img/kenntyouji.png"
        alt="建長寺"
        buttonText="このクエストに参加する"
      />
      <Quest
        title="銭洗弁財天"
        questNumber="3"
        description="初夏の鎌倉、紫陽花が美しく咲き誇る季節。銭洗弁財天にある古い茶屋で旅の疲れを癒すべし。"
        imgSrc="img/zeniaraibenzaiten.png"
        alt="銭洗弁財天"
        buttonText="このクエストに参加する"
      />
    </div>
  </section>
);

export default Section3;
