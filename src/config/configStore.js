import { configureStore } from "@reduxjs/toolkit";
import pokemonSlice from "../slices/pokemonsSlice";

const store = configureStore({
  reducer: {
    pokemons: pokemonSlice,
  },
});

export default store;
