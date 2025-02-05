import { useNavigate } from "react-router-dom";
import picture1 from "../png/logo.png";
import { HomeDiv, HomeImg } from "../style/styledcomponent";

const Home = () => {
  const navigate = useNavigate();
  return (
    <HomeDiv>
      <HomeImg src={`${picture1}`} />
      <button
        onClick={() => {
          navigate("/dex");
        }}
      >
        포켓몬 도감 시작하기
      </button>
    </HomeDiv>
  );
};

export default Home;
