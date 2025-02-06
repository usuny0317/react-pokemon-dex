import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = [];
const notify1 = () =>
  toast.error("이미 추가된 포켓몬 입니다!!", {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
const notify2 = () =>
  toast.error("6마리까지만 가능합니다!!", {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

const sucess1 = () =>
  toast.success("추가됐어요!", {
    position: "top-center",
    autoClose: 300,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      if (state.some((poke) => poke.id === action.payload.id)) {
        notify1();
        /* alert("이미 추가된 포켓몬 입니다!"); */
      } else {
        if (state.length >= 6) {
          /* alert("6마리까지만 가능합니다."); */
          notify2();
        } else {
          state.push(action.payload);
          sucess1();
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
