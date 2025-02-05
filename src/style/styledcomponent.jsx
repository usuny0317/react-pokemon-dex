import styled from "styled-components";

/* dashboard */
export const DashDiv = styled.div`
  background-color: whitesmoke;
  margin-bottom: 10px;
  place-items: center;
  height: 300px;
`;

export const BallDiv = styled.div`
  display: flex;
  place-items: center;
  height: 200px;
`;

export const BeforeCatch = styled.img`
  width: 80px;
  margin: 2rem;
`;
export const AfterCatch = styled.div`
  background-color: white;
  border-radius: 3%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  place-items: center;
  margin: 2rem;
`;

/* pokemoncard */

export const CardDiv = styled.div`
  background-color: white;
  border-radius: 3%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  place-items: center;
  margin: 10px;
  padding: 10px;
  gap: 5px;
`;

/* pokemonlist */
export const ListUl = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  padding: 20px;
  margin: 0 auto;
  background-color: whitesmoke;
`;

/* home */
export const HomeDiv = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  margin: 10rem;
`;

export const HomeImg = styled.img`
  width: 800px;
  margin: 2rem;
`;
