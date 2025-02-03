import { useEffect, useState } from "react";
import { PokemonDataType } from "../interfaces/pokemonDataType";
import PokemonCard from "./PokemonCard";
import { pokemonType } from "../interfaces/pokemonTypes";

interface props {
  pokemons: PokemonDataType[];
  pokemonTypes: pokemonType[];
  onShowDetail: (id: number) => void;
}

function PokemonCardContainer({ pokemons, onShowDetail, pokemonTypes }: props) {
  const [filteredPokemons, setfilteredPokemons] = useState<PokemonDataType[]>(pokemons);

  useEffect(() => {
    const algo = pokemons.filter((el) => {
      for (let i = 0; i < el.types.length; i++) {
        for (let j = 0; j < pokemonTypes.length; j++) {
          if (
            pokemonTypes[j].active &&
            pokemonTypes[j].name === el.types[i].type.name
          )
            return true;
        }
      }
      return false;
    });
    setfilteredPokemons(algo);
  }, [pokemonTypes]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredPokemons.map((el) => (
        <PokemonCard pokemon={el} key={el.id} onClick={onShowDetail} />
      ))}
    </div>
  );
}

export default PokemonCardContainer;
