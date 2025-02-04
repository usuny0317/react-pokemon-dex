import { useDispatch } from "react-redux";
import MOCK_DATA from "../MOCK_DATA";
import { addPokemon } from "../slices/pokemonsSlice";
import styled from "styled-components";

const ListUl = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  padding: 20px;
  margin: 0 auto;
  background-color: whitesmoke;
`;
const ListLi = styled.div`
  background-color: white;
  border-radius: 3%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  place-items: center;
  margin: 10px;
  padding: 10px;
`;

const PokemonList = () => {
  const Mocks = MOCK_DATA;
  const dispatch = useDispatch();
  return (
    <div>
      <ListUl>
        {Mocks.map((mock) => {
          return (
            <ListLi key={mock.id}>
              <img src={`${mock.img_url}`} />
              <span>{mock.korean_name}</span>
              <span>{mock.types.map((type) => type)}</span>
              <span>No. {mock.id}</span>

              <button
                onClick={() => {
                  dispatch(
                    addPokemon({
                      img_url: mock.img_url,
                      korean_name: mock.korean_name,
                      types: mock.types,
                      id: mock.id,
                      description: mock.description,
                    })
                  );
                }}
              >
                추가
              </button>
            </ListLi>
          );
        })}
      </ListUl>
    </div>
  );
};

export default PokemonList;
