import React from "react";

import GlobalStyles from "../src/styles/global";
import { banner } from "./data";

import Menu from "./components/Menu";
// import Footer from "./components/Footer";
import Banner from "./components/Banner";

function App() {
  return (
    <React.Fragment>
      <Menu />
      <Banner
        title={banner.title}
        description={banner.description}
        url={banner.url}
      />
      {/* <Footer home /> */}
      <GlobalStyles />
    </React.Fragment>
  );
}

export default App;
