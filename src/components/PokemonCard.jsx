import { usePokemon } from "../context/PokemonContext";
import { ButtonCard, CardDiv } from "../style/styledcomponent";
import { useNavigate } from "react-router-dom";

const PokemonCard = (mock) => {
  const { addPokemon } = usePokemon();

  const navigate = useNavigate();
  const quertString = encodeURIComponent(JSON.stringify(mock));
  return (
    <CardDiv
      onClick={() => {
        navigate(`/detail?mock=${quertString}`);
      }}
    >
      <img src={`${mock.img_url}`} />
      <span>{mock.korean_name}</span>
      <span>No. {mock.id}</span>
      <ButtonCard
        onClick={(e) => {
          e.stopPropagation();
          addPokemon({
            img_url: mock.img_url,
            korean_name: mock.korean_name,
            types: mock.types,
            id: mock.id,
            description: mock.description,
          });
        }}
      >
        추가
      </ButtonCard>
    </CardDiv>
  );
};

export default PokemonCard;
