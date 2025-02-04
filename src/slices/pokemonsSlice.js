import { createSlice } from "@reduxjs/toolkit";

const initialState = [{}];

const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addPokemon } = pokemonSlice.reducer;
export default pokemonSlice.reducer;
