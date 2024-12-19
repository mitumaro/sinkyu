import Quest from "./SectionComponents/Quest";
import "../index.css";
import ScrollUpImage1 from "./SectionComponents/ScrollUpImage1";
import kamakurajyuuouiwa from "../assets/img/kamakurajyuuouiwa.png";
import zeniaraibenzaiten from "../assets/img/zeniaraibenzaiten.png";
import kamakuranodaibutu from "../assets/img/kamakuranodaibutu.png";
import miti2 from "../assets/img/miti2.png";
import miti3 from "../assets/img/miti3.png";
import miti4 from "../assets/img/miti4.png";
import asiato2 from "../assets/img/asiato2.png";
import asiato3 from "../assets/img/asiato3.png";
import asiato4 from "../assets/img/asiato4.png";
import anmitu from "../assets/img/anmitu.png";
import kenntyouji from "../assets/img/kenntyouji.png";
import sirasudon from "../assets/img/sirasudon.png";
import ajisai from "../assets/img/ajisai.png";
import komatidouri from "../assets/img/komatidouri.png";
import turugaokahatimanguu_masuku from "../assets/img/turugaokahatimanguu_masuku.png";

const Section4 = () => (
  <section id="section4" className="section4_quests">
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
    <ScrollUpImage1 />

    <Quest
      idName="Quest1"
      title="鎌倉十王岩の展望"
      questNumber={1}
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
      imgSrc={kamakurajyuuouiwa}
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
      roodClass="roodClass2"
      StoreSite="対象店舗はこちら"
      roodImg={miti2}
      roodImgAlt="道２"
      rood_foot_2="rood_foot_2"
      roodFootSrc={asiato2}
      roodFootAlt="足跡２"
      img2={kamakuranodaibutu}
      img2Alt="鎌倉の大仏"
      img3={anmitu}
      img3Alt="あんみつ"
      animationConfig={{
        direction: "left",
        delay: 0.3,
        duration: 1.2,
      }}
    />
    <Quest
      idName="Quest2"
      title="建長寺"
      questNumber={2}
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
      imgSrc={kenntyouji}
      alt="建長寺"
      buttonText="このクエストに参加する"
      discountCoupon=""
      CouponSummary=""
      CouponDescription=""
      StoreSite=""
      roodName="rood3"
      roodClass="roodClass3"
      roodImg={miti3}
      roodImgAlt="道３"
      rood_foot_2="rood_foot_3"
      roodFootSrc={asiato3}
      roodFootAlt="足跡3"
      img2={sirasudon}
      img2Alt="しらす丼"
      img3={ajisai}
      img3Alt="紫陽花"
      animationConfig={{
        direction: "right",
        delay: 0.5,
        duration: 1.2,
      }}
    />
    <Quest
      idName="Quest3"
      title="銭洗弁財天"
      questNumber={3}
      questTitle={
        <>
          鎌倉の神社で
          <br />
          紫陽花を見ながら食べよう
        </>
      }
      description="初夏の鎌倉、紫陽花が美しく咲き誇る季節。銭洗弁財天にある古い茶屋で旅の疲れを癒すべし、疲れが溜まった時の和菓子は至福のひととき"
      imgSrc={zeniaraibenzaiten}
      alt="銭洗弁財天"
      buttonText="このクエストに参加する"
      discountCoupon=""
      CouponSummary=""
      CouponDescription=""
      StoreSite=""
      roodName="rood4"
      roodClass="roodClass4"
      roodImg={miti4}
      roodImgAlt="道４"
      rood_foot_2="rood_foot_4"
      roodFootSrc={asiato4}
      roodFootAlt="足跡4"
      img2={komatidouri}
      img2Alt="小町通"
      img3={turugaokahatimanguu_masuku}
      img3Alt="鶴岡八幡宮"
      animationConfig={{
        direction: "up",
        delay: 0.7,
        duration: 1.2,
      }}
    />
  </section>
);
export default Section4;
