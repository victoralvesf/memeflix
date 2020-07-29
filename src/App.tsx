import React from "react";

import GlobalStyles from "../src/styles/global";

import Menu from "./components/Menu";

function App() {
  return (
    <React.Fragment>
      <Menu />

      <GlobalStyles />
    </React.Fragment>
  );
}

export default App;
