import Header from "./components/Header";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Footer from "./components/footer";
import "./index.css";
import logo from "../src/assets/img/logo.svg";

const App = () => (
  <>
    <div className="contents">
      <div className="contents_Box">
        <div className="main_logo_Box">
          <img className="main_logo" src={logo} alt="ロゴ" />
        </div>
        <Header />
        <div className="main_Box">
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
        </div>
        <nav className="main_nav">
          <div className="inner">
            <ul>
              <li>
                <a href="#header">Top</a>
              </li>
              <li>
                <a href="#section2">鎌倉について</a>
              </li>
              <li>
                <a href="#section3">TripQuestとは？</a>
              </li>
              <li>
                <a href="#section4">クエスト紹介</a>
              </li>
              <li>
                <a className="QuestChild" href="#Quest1">
                  ・クエスト１
                </a>
              </li>
              <li>
                <a className="QuestChild" href="#Quest2">
                  ・クエスト２
                </a>
              </li>
              <li>
                <a className="QuestChild" href="#Quest3">
                  ・クエスト３
                </a>
              </li>
            </ul>
          </div>
          <button className="nav_button">
            <div className="nav_button_Box">
              <p className="nav_p">一人旅を体験する</p>
              <a className="nav_arrow"></a>
            </div>
          </button>
        </nav>
      </div>
      <Footer />
    </div>
    {/* 他のセクションも同様に追加 */}
  </>
);

export default App;
