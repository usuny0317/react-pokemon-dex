import { createContext, useContext, useState } from "react";

const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [myPoke, setMyPoke] = useState([]);

  // poke는 원래 있는 값, 새 값 받아와서 저장하기 newpokemon
  const addPokemon = (newpokemon) => {
    if (myPoke.some((poke) => poke.id === newpokemon.id)) {
      alert("이미 추가된 포켓몬 입니다.");
    } else {
      if (myPoke.length >= 6) {
        alert("6마리까지만 가능합니다.");
      } else {
        setMyPoke((poke) => [...poke, newpokemon]);
      }
    }
  };

  //id 받아와서 삭제하기 poke는 원래 있는 값
  const delPokemon = (id) => {
    setMyPoke((poke) => {
      return poke.filter((p) => p.id != id);
    });
  };

  //return으로 값 정리, 나타내기
  return (
    <PokemonContext.Provider value={{ myPoke, addPokemon, delPokemon }}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemon = () => useContext(PokemonContext);
