import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../components/Home";
import Dex from "../components/Dex";
import Detail from "../components/PokemonDetail";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dex" element={<Dex />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
