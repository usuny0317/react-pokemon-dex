import { useSelector } from "react-redux";
import picture2 from "../png/ball.png";

const Dashboard = () => {
  const myPoke = useSelector((state) => state.pokemons);

  const defaultcard = () => {
    let result = [];
    for (let i = myPoke.length; i < 6; i++) {
      result.push(<img src={picture2} style={{ width: "20px" }} />);
    }
    return result;
  };

  return (
    <div>
      <h1>나만의 포켓몬</h1>
      {myPoke.map(function (poke) {
        return (
          <div key={poke.id}>
            <img src={`${poke.img_url}`}></img>
            <span>{poke.korean_name}</span>
            <span>{poke.id}</span>
            <button>삭제하기</button>
          </div>
        );
      })}
      {defaultcard()}
    </div>
  );
};

export default Dashboard;
