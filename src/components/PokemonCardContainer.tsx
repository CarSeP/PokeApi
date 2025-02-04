import { useEffect, useState } from "react";
import { PokemonDataType } from "../interfaces/pokemonDataType";
import PokemonCard from "./PokemonCard";
import { pokemonType } from "../interfaces/pokemonTypes";
import PaginationButtons from "./PaginationButtons";

interface props {
  pokemons: PokemonDataType[];
  pokemonTypes: pokemonType[];
  onShowDetail: (id: number) => void;
}

function PokemonCardContainer({ pokemons, onShowDetail, pokemonTypes }: props) {
  const [filteredPokemons, setfilteredPokemons] = useState<PokemonDataType[]>(pokemons);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 20;
  const totalPages = Math.ceil(filteredPokemons.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleItems = filteredPokemons.slice(startIndex, startIndex + itemsPerPage);

  const changePage = (page:any) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  useEffect(() => {
    const filteredPokemons = pokemons.filter((el) => {
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
    setfilteredPokemons(filteredPokemons);
  }, [pokemonTypes]);

  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {visibleItems.map((el) => (
        <PokemonCard pokemon={el} key={el.id} onClick={onShowDetail} />
      ))}
    </div>
      <PaginationButtons totalPages={totalPages} currentPage={currentPage} changePage={changePage} />
    </>
  );
}

export default PokemonCardContainer;
