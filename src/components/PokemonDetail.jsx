import { useLocation, useNavigate } from "react-router-dom";

const PokemonDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const info = { ...location.state };
  return (
    <div>
      <img src={`${info.img_url}`} />
      <span>{info.korean_name}</span>
      <span>
        타입:
        {info.types.map((type, index) => {
          return <div key={index}>{type}</div>;
        })}
      </span>
      <span>{info.description}</span>
      <button
        onClick={() => {
          navigate("/dex");
        }}
      >
        뒤로가기
      </button>
    </div>
  );
};

export default PokemonDetail;
