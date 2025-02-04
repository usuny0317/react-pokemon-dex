import { useDispatch } from "react-redux";
import MOCK_DATA from "../MOCK_DATA";
import { addPokemon } from "../slices/pokemonsSlice";

const PokemonList = () => {
  const Mocks = MOCK_DATA;
  const dispatch = useDispatch();
  return (
    <div>
      <h1>PokemonList</h1>
      {Mocks.map((mock) => {
        return (
          <div key={mock.id}>
            <img src={`${mock.img_url}`} />
            <span>{mock.korean_name}</span>
            <span>{mock.types.map((type) => type)}</span>
            <span>{mock.id}</span>
            <p>{mock.description}</p>
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
          </div>
        );
      })}
    </div>
  );
};

export default PokemonList;
