import React from "react";
import Header from "./components/Header";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Footer from "./components/footer";

const App = () => (
  <>
    <Header />
    <Section1 />
    <Section2 />
    <Section3 />
    <Footer />
    {/* 他のセクションも同様に追加 */}
  </>
);

export default App;
