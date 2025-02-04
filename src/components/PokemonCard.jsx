import styled from "styled-components";
import { addPokemon } from "../slices/pokemonsSlice";
import { useDispatch } from "react-redux";

const CardDiv = styled.div`
  background-color: white;
  border-radius: 3%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  place-items: center;
  margin: 10px;
  padding: 10px;
  gap: 5px;
`;

const PokemonCard = (mock) => {
  const dispatch = useDispatch();
  return (
    <CardDiv>
      <img src={`${mock.img_url}`} />
      <span>{mock.korean_name}</span>
      <span>No. {mock.id}</span>
      <button
        onClick={() => {
          dispatch(
            addPokemon({
              img_url: mock.img_url,
              korean_name: mock.korean_name,
              types: mock.types,
              id: mock.id,
              description: mock.description,
            })
          );
        }}
      >
        추가
      </button>
    </CardDiv>
  );
};

export default PokemonCard;
