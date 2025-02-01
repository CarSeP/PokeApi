import { PokemonDataType } from "../interfaces/pokemonType";
import { capitalizeFirstLetter } from "../utils/capitalizeWords";

function Card({ pokemon, onClick }: { pokemon: PokemonDataType; onClick: (id:number) => void }) {
  return (
    <div
      onClick={() => {
        onClick(pokemon.id);
      }}
      className="bg-white rounded-lg shadow-md p-6 cursor-pointer transition-transform duration-300 hover:translate-y-[-1rem]"
    >
      <h3 className="text-xl text-gray-500 italic">#{pokemon.id}</h3>
      <img
        src={pokemon.sprites.front_default}
        className="w-32 h-32 mx-auto mb-4"
      />
      <h2 className="text-xl font-semibold text-center mb-2">{capitalizeFirstLetter(pokemon.name)}</h2>
      <div className="flex justify-center space-x-2">
        {pokemon.types.map((el) => (
          <span
            key={el.slot}
            className={`${el.type.name} text-xs font-semibold px-2 py-1 rounded`}
          >
            {capitalizeFirstLetter(el.type.name)}
          </span>
        ))}
      </div>
      <div className="text-sm text-gray-600 text-center mt-4">
        <p>Weight: {pokemon.weight} kg</p>
        <p>Height: {pokemon.height} m</p>
      </div>
    </div>
  );
}

export default Card;
