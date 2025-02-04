import MOCK_DATA from "../MOCK_DATA";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const ListUl = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  padding: 20px;
  margin: 0 auto;
  background-color: whitesmoke;
`;

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
