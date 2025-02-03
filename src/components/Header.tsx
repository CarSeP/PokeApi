import { pokemonType } from "../interfaces/pokemonTypes";
import PokemonType from "./PokemonType";

interface props {
  pokemonTypes: pokemonType[];
  handleActive: (name: string) => void;
}

function Header({ pokemonTypes, handleActive }: props) {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Pokémon API</h1>
        <div className="flex flex-wrap gap-2">
          {pokemonTypes &&
            pokemonTypes.map((el: pokemonType) => (
              <PokemonType
                key={el.name}
                typeName={el.name}
                active={el.active}
                onHandleActive={handleActive}
              />
            ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
