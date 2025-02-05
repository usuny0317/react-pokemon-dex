import { addPokemon } from "../slices/pokemonsSlice";
import { useDispatch } from "react-redux";
import { CardDiv } from "../style/styledcomponent";

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
