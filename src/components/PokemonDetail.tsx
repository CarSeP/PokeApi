import { PokemonDataType } from "../interfaces/pokemonDataType";
import { capitalizeFirstLetter } from "../utils/capitalizeWords";
import PokemonStat from "./PokemonStat";

interface props {
  pokemon: PokemonDataType;
  hideDetail: () => void;
}

function PokemonDetail({ pokemon, hideDetail }: props) {
  const handleOnClick = () => {
    hideDetail();
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
      <div className="md:flex">
        <div className="md:w-1/3">
          <img
            src={pokemon.sprites.front_default}
            className="w-full h-auto rounded-lg mb-4 md:mb-0"
          />
        </div>
        <div className="md:w-2/3 md:pl-6">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-semibold mb-2">
              <span className="text-gray-300 text-3xl">#{pokemon.id} </span>
              {capitalizeFirstLetter(pokemon.name)}
            </h2>
            <button
              className="flex cursor-pointer"
              onClick={() => {
                handleOnClick();
              }}
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.5 2.5L1.5 5.5L4.5 8.5" stroke="black" />
                <path
                  d="M1.5 5.5H7.5C8.88 5.5 10 6.62 10 8C10 9.38 8.88 10.5 7.5 10.5H4"
                  stroke="black"
                />
              </svg>
            </button>
          </div>
          <div className="flex space-x-2 mb-4">
            {pokemon.types.map((el) => (
              <span
                key={el.slot}
                className={`${el.type.name} text-xs font-semibold px-2 py-1 rounded`}
              >
                {capitalizeFirstLetter(el.type.name)}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="font-semibold">Height:</p>
              <p>{pokemon.weight} m</p>
            </div>
            <div>
              <p className="font-semibold">Weight:</p>
              <p>{pokemon.height} kg</p>
            </div>
            <div>
              <p className="font-semibold">Abilities:</p>
              {pokemon.abilities.map((el) => {
                if (el.is_hidden)
                  return (
                    <span key={el.slot}>
                      {capitalizeFirstLetter(el.ability.name)}(Hidden)
                    </span>
                  );
                return (
                  <span key={el.slot}>
                    {capitalizeFirstLetter(el.ability.name)}{" "}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Base Stats</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {pokemon.stats.map((el) => (
            <PokemonStat key={el.stat.name} stat={el} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PokemonDetail;
