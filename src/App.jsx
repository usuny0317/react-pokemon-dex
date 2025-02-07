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
/*지금은 main 브랜치 입니다 RTK를 사용했어요!*/
export default App;
