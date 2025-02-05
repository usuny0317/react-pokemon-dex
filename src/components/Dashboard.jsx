import { useDispatch, useSelector } from "react-redux";
import picture2 from "../png/ball.png";
import { deletePokemon } from "../slices/pokemonsSlice";
import {
  DashDiv,
  BallDiv,
  BeforeCatch,
  AfterCatch,
  ButtonCard,
} from "../style/styledcomponent";

const Dashboard = () => {
  const myPoke = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();
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
              <ButtonCard
                onClick={() => {
                  dispatch(
                    deletePokemon({
                      id: poke.id,
                    })
                  );
                }}
              >
                삭제하기
              </ButtonCard>
            </AfterCatch>
          );
        })}
        {defaultcard()}
      </BallDiv>
    </DashDiv>
  );
};

export default Dashboard;
