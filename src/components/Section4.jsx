import React from "react";
import Quest from "./SectionComponents/Quest";
import "../index.css";

const Section4 = () => (
  <section className="section4_quests">
    {/* セクション 4 */}
    <p className="questsIntroduction">クエスト紹介</p>
    <h2>武士になり食歴史を知ろう</h2>
    <p>
      時代を作った鎌倉武士に
      <br />
      なりきりいつもと違う視点や発見で
      <br />
      歴史を感じていこう！
    </p>
    <div className="rood1">
      <img src="img/nohara.png" alt="野原のイラスト" />
      <img src="img/miti.png" alt="道１" />
      <img src="img/menntikatu.png" alt="メンチカツ" />
      <img src="img/takebayasi.png" alt="竹藪" />
    </div>

    <Quest
      title="鎌倉十王岩の展望"
      questNumber="1"
      questTitle={
        <>
          武士になりきり大声で
          <br />
          自分の名前を叫ぼう！
        </>
      }
      description="今日だけあなたは戦国武将！
歴史ある鎌倉の山にそびえる「十王岩」にて、武士の誇りを呼び覚まし敵にその勇猛さを声に託して叫べ！
この声により、敵も愚か日々の雑念やストレスを
吹き飛ばし自分の心の開放を
鼓舞するはず！"
      imgSrc="img/kamakurajyuuouiwa.png"
      alt="鎌倉十王岩の展望"
      buttonText="このクエストに参加する"
      discountCoupon="特別クーポン"
      CouponSummary={
        <>
          声の大きさによって食旅
          <br />
          をもっと充実させる
          <br />
          「食」割引クーポン配布！
        </>
      }
      CouponDescription={
        <>
          対象店舗の一番人気の
          <br />
          食べ物・飲み物
          <br />
          １０％引き！
        </>
      }
      roodName="rood2"
      StoreSite="対象店舗はこちら"
      roodImg="img/miti2.png"
      roodImgAlt="道２"
      img2="img/kamakuranodaibutu.png"
      img2Alt="鎌倉の大仏"
      img3="img/anmitu.png"
      img3Alt="あんみつ"
    />
    <Quest
      title="建長寺"
      questNumber="2"
      questTitle={
        <>
          鎌倉の建長寺で
          <br />
          古くから食べられていた物を
          <br />
          探してみよう
        </>
      }
      description="日本最古の禅宗寺院では、歴史ある文化が色濃く残されているらしい特に古くから食べられていた物は禅僧たちが修行の一環として取り入れてきたものできっと
心の静けさをくれるだろう。
最古の精神料理を通して直に歴史を感じろ！"
      imgSrc="img/kenntyouji.png"
      alt="建長寺"
      buttonText="このクエストに参加する"
      discountCoupon=""
      CouponSummary=""
      CouponDescription=""
      StoreSite=""
      roodName="rood3"
      roodImg="img/miti3.png"
      roodImgAlt="道３"
      img2="img/sirasudon.png"
      img2Alt="しらす丼"
      img3="img/ajisai.png"
      img3Alt="紫陽花"
    />
    <Quest
      title="銭洗弁財天"
      questNumber="3"
      questTitle={
        <>
          鎌倉の神社で
          <br />
          紫陽花を見ながら食べよう
        </>
      }
      description="初夏の鎌倉、紫陽花が美しく咲き誇る季節。銭洗弁財天にある古い茶屋で旅の疲れを癒すべし、疲れが溜まった時の和菓子は至福のひととき"
      imgSrc="img/zeniaraibenzaiten.png"
      alt="銭洗弁財天"
      buttonText="このクエストに参加する"
      discountCoupon=""
      CouponSummary=""
      CouponDescription=""
      StoreSite=""
      roodName="rood4"
      roodImg="img/miti4.png"
      roodImgAlt="道４"
      img2="img/komatidouri.png"
      img2Alt="小町通"
      img3="img/turugaokahatimanguu_masuku.png"
      img3Alt="鶴岡八幡宮"
    />
  </section>
);
export default Section4;
