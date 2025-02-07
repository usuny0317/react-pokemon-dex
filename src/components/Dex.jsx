import { useState } from "react";
import Dashboard from "./Dashboard";
import PokemonList from "./PokemonList";

const Dex = () => {
  const [myPokemon, setMyPokemon] = useState();

  return (
    <div>
      <Dashboard />
      <PokemonList />
    </div>
  );
};

export default Dex;
