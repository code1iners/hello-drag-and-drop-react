import React from "react";
import { RecoilRoot } from "recoil";
import GlobalStyle from "./utils/styles";
import HomeView from "./views/HomeView";

function App() {
  return (
    <>
      {/* Apply styles */}
      <GlobalStyle />

      {/* App area */}
      <RecoilRoot>
        <HomeView />
      </RecoilRoot>
    </>
  );
}

export default App;
