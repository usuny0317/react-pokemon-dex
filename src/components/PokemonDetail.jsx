import { useLocation, useNavigate } from "react-router-dom";
import {
  ButtonCard,
  DetailDiv,
  DetailImg,
  DetailSpan,
  Detailtitle,
} from "../style/styledcomponent";

const PokemonDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const info = params.get("mock")
    ? JSON.parse(decodeURIComponent(params.get("mock")))
    : {};
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
    </DetailDiv>
  );
};

export default PokemonDetail;
