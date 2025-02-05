import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      if (state.some((poke) => poke.id === action.payload.id)) {
        alert("이미 추가된 포켓몬 입니다!");
      } else {
        if (state.length >= 6) {
          alert("6마리까지만 가능합니다.");
        } else {
          state.push(action.payload);
        }
      }
    },
    deletePokemon: (state, action) => {
      return (state = state.filter((poke) => {
        return poke.id !== action.payload.id;
      }));
    },
  },
});

export const { addPokemon, deletePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
