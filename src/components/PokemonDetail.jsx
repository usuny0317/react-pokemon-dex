import { useLocation, useNavigate } from "react-router-dom";
import {
  ButtonCard,
  DetailDiv,
  DetailImg,
  DetailSpan,
  Detailtitle,
} from "../style/styledcomponent";
import { useDispatch } from "react-redux";
import { addPokemon } from "../slices/pokemonsSlice";

const PokemonDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const info = params.get("mock")
    ? JSON.parse(decodeURIComponent(params.get("mock")))
    : {};

  const dispatch = useDispatch();

  return (
    <DetailDiv>
      <DetailImg src={`${info.img_url}`} />
      <Detailtitle>{info.korean_name}</Detailtitle>
      <span>
        {info.types.map((type, index) => {
          return <DetailSpan key={index}>{type}</DetailSpan>;
        })}
      </span>
      <DetailSpan>{info.description}</DetailSpan>
      <ButtonCard
        onClick={() => {
          navigate("/dex");
        }}
      >
        뒤로가기
      </ButtonCard>
      <ButtonCard
        onClick={(e) => {
          e.stopPropagation();
          dispatch(
            addPokemon({
              img_url: info.img_url,
              korean_name: info.korean_name,
              types: info.types,
              id: info.id,
              description: info.description,
            })
          );
        }}
      >
        추가하기
      </ButtonCard>
    </DetailDiv>
  );
};

export default PokemonDetail;
