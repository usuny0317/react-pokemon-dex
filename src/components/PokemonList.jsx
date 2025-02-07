import MOCK_DATA from "../MOCK_DATA";
import PokemonCard from "./PokemonCard";
import { ListUl } from "../style/styledcomponent";

const PokemonList = ({ addMy }) => {
  const Mocks = MOCK_DATA;
  return (
    <div>
      <ListUl>
        {Mocks.map((mock) => {
          return <PokemonCard mock={mock} key={mock.id} addMy={addMy} />;
        })}
      </ListUl>
    </div>
  );
};

export default PokemonList;
