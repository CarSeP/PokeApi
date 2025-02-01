import { useEffect, useState } from "react";
import PokemonCard from "./components/PokemonCard";
import axios from "axios";
import PokemonDetail from "./components/PokemonDetail";
import { PokemonDataType } from "./interfaces/pokemonType";

function App() {
  const [pokemons, setPokemon] = useState<PokemonDataType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonID, setPokemonID] = useState(0);

  const getPokemons = async () => {
    const pokemonList = [];
    for (let i = 1; i < 152; i++) {
      const url = "https://pokeapi.co/api/v2/pokemon/" + i;
      const { data } = await axios.get(url);
      pokemonList.push(data);
    }
    setPokemon(pokemonList);
    setIsLoading(false);
  };
  const getPokemon = (id: number) => {
    return pokemons.find((el) => el.id == id);
  };
  const onShowDetail = (id: number) => {
    setPokemonID(id);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        Pokemon API
      </h1>
      {!isLoading && !pokemonID && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {pokemons.map((el) => (
            <PokemonCard pokemon={el} key={el.id} onClick={onShowDetail} />
          ))}
        </div>
      )}
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-screen flex">
          <div className="flex-col gap-4 w-full flex items-center justify-center">
            <div className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
              <div className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"></div>
            </div>
          </div>
        </div>
      )}
      {pokemonID && (
        <PokemonDetail
          pokemon={getPokemon(pokemonID)!}
          hideDetail={() => {
            setPokemonID(0);
          }}
        />
      )}
    </div>
  );
}

export default App;
