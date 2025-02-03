import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../components/Home";
import Dex from "../components/Dex";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dex" element={<Dex />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
