import styled, { createGlobalStyle } from "styled-components";

/* dashboard */
export const DashDiv = styled.div`
  background-color: whitesmoke;
  margin-bottom: 10px;
  place-items: center;
  height: 300px;
  margin: 10px;
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
  margin: 10px;
  background-color: whitesmoke;
`;

/* detail */
export const DetailDiv = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  place-items: center;
`;

export const DetailImg = styled.img`
  width: 250x;
  height: 250px;
  object-fit: cover;
`;

export const DetailSpan = styled.span`
  margin: 4px;
  padding: 4px;
  font-weight: bold;
`;

export const Detailtitle = styled.h1`
  font-weight: bold;
  color: #dc6e55;
  padding-top: 20px;
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

export const ButtonMain = styled.button`
  background-color: #ffcb05;
  padding: 10px 20px;
  border-color: #3c5ba7;
  border-width: 10px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  color: #3c5ba7;
  font-weight: 600;
`;

/* App.jsx*/
export const GlobalStyle = createGlobalStyle`
html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #F9EBB4;
  }
`;

/* almost all button */
export const ButtonCard = styled.button`
  background-color: #dc6e55;
  padding: 10px 10px;
  margin: 10px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  color: black;
  font-weight: bold;
  width: 100px;
`;

/* toast 커스텀 하기 */
export const CustomWarnToast = styled`

`;
