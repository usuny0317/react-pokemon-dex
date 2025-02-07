import picture2 from "../png/ball.png";
import {
  DashDiv,
  BallDiv,
  BeforeCatch,
  AfterCatch,
  ButtonCard,
  Detailtitle,
} from "../style/styledcomponent";

const Dashboard = ({ myPoke, deleteMy }) => {
  const balls = () => {
    let result = [];
    for (let i = myPoke.length; i < 6; i++) {
      result.push(<BeforeCatch src={picture2} />);
    }
    return result;
  };

  const anyThing = (myPokes) => {
    if (!Array.isArray(myPokes) || myPokes.length === 0) {
      console.log("포켓몬이 없습니다.");
    } else {
      return myPokes.map((poke) => {
        return (
          <AfterCatch key={poke.id}>
            <img src={`${poke.img_url}`}></img>
            <span>{poke.korean_name}</span>
            <span>No. {poke.id}</span>
            <ButtonCard onClick={() => deleteMy(poke.id)}>삭제하기</ButtonCard>
          </AfterCatch>
        );
      });
    }
  };

  return (
    <DashDiv>
      <Detailtitle>나만의 포켓몬</Detailtitle>
      <BallDiv>
        {anyThing(myPoke)}
        {balls()}
      </BallDiv>
    </DashDiv>
  );
};

export default Dashboard;
