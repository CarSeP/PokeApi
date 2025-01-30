import { useEffect, useState } from "react";
import Card from "./components/card";
import axios from "axios";

function App() {
  const [pokemons, setPokemon] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        Pokemon API
      </h1>
      {!isLoading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {pokemons.map((el) => (
            <Card pokemon={el} key={el.id} />
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
    </div>
  );
}

export default App;
