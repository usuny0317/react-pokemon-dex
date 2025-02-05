import { addPokemon } from "../slices/pokemonsSlice";
import { useDispatch } from "react-redux";
import { CardDiv } from "../style/styledcomponent";
import { useNavigate } from "react-router-dom";

const PokemonCard = (mock) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <CardDiv
      onClick={() => {
        navigate("/detail", {
          state: {
            img_url: mock.img_url,
            korean_name: mock.korean_name,
            types: mock.types,
            id: mock.id,
            description: mock.description,
          },
        });
      }}
    >
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
