import "../index.css";
import kamakuramannjyuu from "../assets/img/kamakuramannjyuu.png";
import rekisiarutabemono from "../assets/img/rekisiarutabemono.png";

const Section2 = () => (
  <section id="section2" className="section2">
    <div className="section2_div1">
      <h2>
        歴史とグルメな町
        <br />
        鎌倉
      </h2>
      <p className="Advertising">
        長い歴史ある建造物が多く見られる鎌倉市
        自分が武士になったつもりで食を堪能する 旅してみてはいかがですか？
      </p>
    </div>
    <div className="section2_div2">
      <h2>
        食からも歴史を
        <br />
        感じてみよう
      </h2>
      <p className="Advertising">
        歴史を感じる瞬間は建物が多いです。
        <br />
        ですが食べ物だって歴史があります。
        <br />
        昔の人たちが食べていたものを食べる、
        <br />
        これ以上にない体験だと思いませんか？
      </p>
      <div className="section2_div2_div">
        <img
          className="section2_div2_div_img1"
          src={kamakuramannjyuu}
          alt="鎌倉まんじゅう"
        />
        <img
          className="section2_div2_div_img2"
          src={rekisiarutabemono}
          alt="歴史ある食べ物"
        />
      </div>
    </div>
  </section>
);

export default Section2;
