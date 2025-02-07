import { useState } from "react";
import Dashboard from "./Dashboard";
import PokemonList from "./PokemonList";

const Dex = () => {
  const [myPoke, setMyPoke] = useState();

  const deleteMyPoke = (id) => {
    setMyPoke((pokes) => {
      return pokes.filter((poke) => poke.id !== id);
    });
  };
  const addMyPoke = (newpoke) => {
    setMyPoke((pokes) => [...pokes, newpoke]);
  };
  return (
    <div>
      <Dashboard myPoke={myPoke} deleteMy={deleteMyPoke} />
      <PokemonList add={addMyPoke} />
    </div>
  );
};

export default Dex;
