import "../index.css"; // 同じディレクトリに index.css がある場合
import soup from "../assets/img/soup.png";
import edition from "../assets/img/edition.png";
import shrineRod from "../assets/img/shrineRod.png";
import hill from "../assets/img/hill.png";

const Section1 = () => {
  const handleClick = () => {
    window.location.href = "https://trip-quest.jp/";
  };

  return (
    <section className="section1">
      <div className="rotating-h1">
        <h1 className="h1_1">Tripto</h1>
        <h1 className="h1_2">「食歴史」</h1>
        <h1 className="h1_3">新たな食と発見を求めて</h1>
      </div>
      <img className="section1_FV_img" src={soup} alt="けんちん汁" />

      <img className="section1_img1" src={edition} alt="鎌倉編" />
      <button onClick={handleClick} className="section1_button">
        <p className="section1_button_p">一人旅を体験する</p>
        <a className="section1_button_a_arrow"></a>
      </button>
      <div className="section1_img">
        <img className="section1_img2" src={shrineRod} alt="鶴岡八幡宮" />
        <img className="section1_img3" src={hill} alt="丘のデザイン" />
      </div>
    </section>
  );
};

export default Section1;
