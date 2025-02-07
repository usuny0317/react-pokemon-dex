import { useState } from "react";
import Dashboard from "./Dashboard";
import PokemonList from "./PokemonList";

const Dex = () => {
  const [myPoke, setMyPoke] = useState([]);

  const deleteMyPoke = (id) => {
    setMyPoke((pokes) => {
      return pokes.filter((poke) => poke.id !== id);
    });
  };
  const addMyPoke = (newpoke) => {
    if (myPoke.some((poke) => poke.id === newpoke.id)) {
      alert("이미 추가된 포켓몬 입니다!");
    } else {
      if (myPoke.length >= 6) {
        alert("6마리까지만 가능합니다.");
      } else {
        setMyPoke((pokes) => [...pokes, newpoke]);
      }
    }
  };

  return (
    <div>
      <Dashboard myPoke={myPoke} deleteMy={deleteMyPoke} />
      <PokemonList addMy={addMyPoke} />
    </div>
  );
};

export default Dex;
