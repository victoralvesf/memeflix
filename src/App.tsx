import React from "react";

import GlobalStyles from "../src/styles/global";

import Menu from "./components/Menu";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <Menu />
      <Footer home />
      <GlobalStyles />
    </React.Fragment>
  );
}

export default App;
