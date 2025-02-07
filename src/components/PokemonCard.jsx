import { ButtonCard, CardDiv } from "../style/styledcomponent";
import { useNavigate } from "react-router-dom";

const PokemonCard = ({ mock = {}, addMy }) => {
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
          addMy(mock);
        }}
      >
        추가
      </ButtonCard>
    </CardDiv>
  );
};

export default PokemonCard;
