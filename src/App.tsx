import { useEffect, useState } from "react";
import Card from "./components/card";
import axios from "axios";

function App() {
  const [pokemons, setPokemon] = useState<any[]>([]);

  const getPokemons = async () => {
    const pokemonList = []
    for (let i = 1; i < 152; i++) {
      const url = "https://pokeapi.co/api/v2/pokemon/" + i;
      const { data } = await axios.get(url);
      pokemonList.push(data)
    }
    setPokemon(pokemonList)
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        Pokemon API
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {
          pokemons.map((el) => <Card pokemon={el} key={el.id }/>)
        }
      </div>
    </div>
  );
}

export default App;
