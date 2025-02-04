import { useNavigate } from "react-router-dom";
import picture1 from "../png/logo.png";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <img src={picture1} style={{ width: "800px" }} />
      <button
        onClick={() => {
          navigate("/dex");
        }}
      >
        포켓몬 도감 시작하기
      </button>
    </div>
  );
};

export default Home;
