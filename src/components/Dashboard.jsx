import { useSelector } from "react-redux";
import picture2 from "../png/ball.png";
import styled from "styled-components";

const DashDiv = styled.div`
  background-color: whitesmoke;
  margin-bottom: 10px;
  place-items: center;
`;

const BallDiv = styled.div`
  display: flex;
  place-items: center;
`;

const BeforeCatch = styled.img`
  width: 80px;
  margin: 2rem;
`;
const AfterCatch = styled.div`
  background-color: white;
  border-radius: 3%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  place-items: center;
  margin: 10px;
  padding: 10px;
`;
const Dashboard = () => {
  const myPoke = useSelector((state) => state.pokemons);

  const defaultcard = () => {
    let result = [];
    for (let i = myPoke.length; i < 6; i++) {
      result.push(<BeforeCatch src={picture2} />);
    }
    return result;
  };

  return (
    <DashDiv>
      <h1>나만의 포켓몬</h1>
      <BallDiv>
        {myPoke.map(function (poke) {
          return (
            <AfterCatch key={poke.id}>
              <img src={`${poke.img_url}`}></img>
              <span>{poke.korean_name}</span>
              <span>No. {poke.id}</span>
              <button>삭제하기</button>
            </AfterCatch>
          );
        })}
        {defaultcard()}
      </BallDiv>
    </DashDiv>
  );
};

export default Dashboard;
