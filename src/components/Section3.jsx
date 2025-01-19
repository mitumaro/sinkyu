import { useEffect, useRef } from "react";
import Step from "./SectionComponents/Step";
import "../index.css";
import MyComponent from "./SectionComponents/MyComponent.jsx";
import tabisyasinn1 from "../assets/img/tabisyasinn1.png";
import tabisyasinn2 from "../assets/img/tabisyasinn2.png";
import tabisyasinn3 from "../assets/img/tabisyasinn3.png";
import sumaho1 from "../assets/img/sumaho1.png";
import sumaho2 from "../assets/img/sumaho2.png";
import sumaho3 from "../assets/img/sumaho3.png";
import sumaho4 from "../assets/img/sumaho4.png";

const Section3 = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    // コンテンツを繰り返しループさせる
    const startScroll = () => {
      const scrollWidth = scrollContainer.scrollWidth / 2; // コンテンツ幅の半分（クローン前提）
      let scrollPosition = 0;

      const animateScroll = () => {
        scrollPosition += 0.8; // スクロール速度を調整
        scrollContainer.scrollLeft = scrollPosition;

        // スクロール位置がクローン部分に達したらリセット
        if (scrollPosition >= scrollWidth) {
          scrollPosition = 0; // リセットして最初に戻す
        }

        requestAnimationFrame(animateScroll); // 次のフレームで更新
      };

      animateScroll();
    };

    startScroll();
  }, []);

  return (
    <section id="section3" className="section3">
      {/* セクション 1 */}
      <div className="section3_intro">
        <h2>
          あなたの鎌倉旅を
          <br />
          充実したものに
        </h2>
        <p className="Advertising">
          知らない場所や馴染みがある場所まで旅をより楽しくしてくれるツールを
          <br />
          紹介します！
        </p>
        <h3>TripQuest</h3>
        {/* スクロールエリア */}
        <div className="section3_images" ref={scrollRef}>
          <div className="section3_images_inner">
            {/* 元の画像 */}
            <img src={tabisyasinn1} alt="旅をしている人1" />
            <img src={tabisyasinn2} alt="旅をしている人2" />
            <img src={tabisyasinn3} alt="旅をしている人3" />
            {/* クローン画像 */}
            <img src={tabisyasinn1} alt="旅をしている人1" />
            <img src={tabisyasinn2} alt="旅をしている人2" />
            <img src={tabisyasinn3} alt="旅をしている人3" />
          </div>
        </div>
      </div>

      {/* セクション 2 */}
      <MyComponent />
      <h2 style={{ marginBottom: 40 }}>
        簡単4ステップで
        <br />
        はじめよう！
      </h2>
      <div className="section3_steps">
        <div className="step_sh">
          <div className="figure_section3_steps">
            <ul className="section3_steps_imgs">
              <li className="section3_steps_li">
                <img className="section3_steps_img" src={sumaho1} alt="" />
              </li>
              <li className="section3_steps_li">
                <img className="section3_steps_img" src={sumaho2} alt="" />
              </li>
              <li className="section3_steps_li">
                <img className="section3_steps_img" src={sumaho3} alt="" />
              </li>
              <li className="section3_steps_li">
                <img className="section3_steps_img" src={sumaho4} alt="" />
              </li>
            </ul>
          </div>
        </div>

        <div className="step_text">
          <Step
            step="step1"
            title="気になるクエストを選んでみよう！"
            description={
              <>
                自分の心に従うのがポイント！
                <br />
                美味しいもの、面白いもの、
                <br />
                刺激があるもの、など
                <br />
                どれを選ぶ？
              </>
            }
            note=""
          />
          <Step
            step="step2"
            title="選んだクエストに挑戦しよう！"
            description={
              <>
                旅は道中も醍醐味の一つ！
                <br />
                新しい発見や
                <br />
                クエストのヒントが
                <br />
                隠されているかも・・・
              </>
            }
            note=""
          />
          <Step
            step="step3"
            title="選んだクエストを達成しよう！"
            description={
              <>
                普通では味わえない
                <br />
                他の視点の発見！
                <br />
                達成条件は歩数や写真、
                <br />
                位置情報など楽しさ満載！
              </>
            }
            note="※ 達成機能の使用にはサービスへの登録が  
  必要です。"
          />
          <Step
            step="step4"
            title={
              <>
                達成したクエストを
                <br />
                自分の思い出にしよう！
              </>
            }
            description={
              <>
                自分の旅の記録をSNSでシェア！
                <br />
                SNSにシェアするとクエストの
                <br />
                情報が記載されるぞ！
              </>
            }
            note="※ 旅ログ機能の使用にはサービスへの登録が
  必要です。"
          />
        </div>
      </div>
    </section>
  );
};

export default Section3;
