import { useNavigate } from "react-router-dom";
import picture1 from "../png/logo.png";
import styled from "styled-components";

const HomeDiv = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  width: "100px";
`;
const HomeImg = styled.img`
  width: 800px;
  margin: 1rem;
`;

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
