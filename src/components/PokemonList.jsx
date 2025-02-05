import MOCK_DATA from "../MOCK_DATA";
import PokemonCard from "./PokemonCard";
import { ListUl } from "../style/styledcomponent";

const PokemonList = () => {
  const Mocks = MOCK_DATA;

  return (
    <div>
      <ListUl>
        {Mocks.map((mock) => {
          return <PokemonCard {...mock} key={mock.id} />;
        })}
      </ListUl>
    </div>
  );
};

export default PokemonList;
