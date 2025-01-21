import Header from "./components/Header";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Footer from "./components/footer";
import "./index.css";

const App = () => (
  <>
    <div className="contents">
      <div className="contents_Box">
        <Header />
        <div className="main_Box">
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
        </div>
      </div>
      <Footer />
    </div>
    {/* 他のセクションも同様に追加 */}
  </>
);

export default App;
