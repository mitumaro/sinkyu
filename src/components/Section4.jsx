import React from "react";
import Quest from "./SectionComponents/Quest";
import "../index.css";

const Section4 = () => (
  <section className="section4_quests">
    {/* セクション 4 */}
    <h2>クエスト紹介</h2>
    <Quest
      title="鎌倉十王岩の展望"
      questNumber="1"
      description="今日だけあなたは戦国武将！歴史ある鎌倉の山にそびえる「十王岩」にて武士の誇りを呼び覚まし敵にその勇猛さを声に託して叫べ！"
      imgSrc="img/kamakurajyuuouiwa.png"
      alt="鎌倉十王岩の展望"
      buttonText="このクエストに参加する"
      discountCoupon="特別クーポン"
      CouponSummary="声の大きさによって食旅
をもっと充実させる
「食」割引クーポン配布！"
      CouponDescription="対象店舗の一番人気の
食べ物・飲み物
１０％引き！"
      StoreSite="対象店舗はこちら"
    />
    <Quest
      title="建長寺"
      questNumber="2"
      description="日本最古の禅宗寺院では、歴史ある文化が色濃く残されているらしい。特に古くから食べられていた物を探してみよう！"
      imgSrc="img/kenntyouji.png"
      alt="建長寺"
      buttonText="このクエストに参加する"
      discountCoupon=""
      CouponSummary=""
      CouponDescription=""
      StoreSite=""
    />
    <Quest
      title="銭洗弁財天"
      questNumber="3"
      description="初夏の鎌倉、紫陽花が美しく咲き誇る季節。銭洗弁財天にある古い茶屋で旅の疲れを癒すべし。"
      imgSrc="img/zeniaraibenzaiten.png"
      alt="銭洗弁財天"
      buttonText="このクエストに参加する"
      discountCoupon=""
      CouponSummary=""
      CouponDescription=""
      StoreSite=""
    />
  </section>
);
export default Section4;
