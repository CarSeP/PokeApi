import { useEffect, useState } from "react";
import axios from "axios";
import PokemonDetail from "./components/PokemonDetail";
import { PokemonDataType } from "./interfaces/pokemonDataType";
import Header from "./components/Header";
import { pokemonType } from "./interfaces/pokemonTypes";
import PokemonCardContainer from "./components/PokemonCardContainer";

function App() {
  const [pokemons, setPokemon] = useState<PokemonDataType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonID, setPokemonID] = useState(0);
  const [pokemonTypes, setPokemonTypes] = useState<pokemonType[]>([]);


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
  const getPokemonsType = async () => {
    const url = "https://pokeapi.co/api/v2/type/";
    const { data } = await axios.get(url);
    const typesFiltered = data.results.filter(
      (el: any) => el.name !== "stellar" && el.name !== "unknown"
    );
    const typeFormatted = typesFiltered.map((el: any) => {
      return {
        name: el.name,
        active: true,
      };
    });
    setPokemonTypes(typeFormatted);
  };
  const onShowDetail = (id: number) => {
    setPokemonID(id);
  };
  const handleActive = (name: string) => {
    setPokemonTypes(pokemonTypes.map((el:pokemonType) => {
        if(el.name === name) el.active = !el.active
        return el;
    }))
  }

  useEffect(() => {
    getPokemons();
    getPokemonsType();
  }, []);

  return (
    <main>
      <Header pokemonTypes={pokemonTypes} handleActive={handleActive}/>
      <div className="container mx-auto px-4 py-8">
        {!isLoading && !pokemonID && (
          <PokemonCardContainer pokemons={pokemons} pokemonTypes={pokemonTypes} onShowDetail={onShowDetail}/>
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
        {pokemonID !== 0 && (
          <PokemonDetail
            pokemon={getPokemon(pokemonID)!}
            hideDetail={() => {
              setPokemonID(0);
            }}
          />
        )}
      </div>
    </main>
  );
}

export default App;
