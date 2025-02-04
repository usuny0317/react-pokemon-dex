import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      if (state.length >= 6) {
        alert("6마리까지만 가능합니다.");
      } else {
        state.push(action.payload);
      }
    },
  },
});

export const { addPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
