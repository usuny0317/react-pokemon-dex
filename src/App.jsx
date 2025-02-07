import "./App.css";

import Router from "./shared/Router";
import { GlobalStyle } from "./style/styledcomponent";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}
/* 여기는 props-drilling 브랜치 입니다! */
export default App;
