import MOCK_DATA from "../MOCK_DATA";

const PokemonList = () => {
  const Mocks = MOCK_DATA;
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
            <button>추가</button>
          </div>
        );
      })}
    </div>
  );
};

export default PokemonList;
