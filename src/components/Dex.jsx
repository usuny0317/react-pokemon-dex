import { PokemonProvider } from "../context/PokemonContext";
import Dashboard from "./Dashboard";
import PokemonList from "./PokemonList";
const Dex = () => {
  return (
    <PokemonProvider>
      <div>
        <Dashboard />
        <PokemonList />
      </div>
    </PokemonProvider>
  );
};

export default Dex;
