type StatType = "hp" | "attack" | "defense" | "speed" | "special-attack" | "special-defense";

function PokemonStat({ stat }: { stat: any }) {
  const width = {
    width: `${(stat.base_stat / 255) * 100}%`,
  };

  const styles = {
    hp: "bg-green-500",
    attack: "bg-red-500",
    defense: "bg-blue-500",
    speed: "bg-yellow-500",
    "special-attack": "bg-purple-500",
    "special-defense": "bg-indigo-500"
  };

  return (
    <div>
      <p className="font-semibold">{stat.stat.name}</p>
      <div className="bg-gray-200 rounded-full h-4 mt-1">
      <div className={`rounded-full h-4 ${styles[stat.stat.name as StatType]}`} style={width}></div>
      </div>
      <p className="text-sm text-right">{stat.base_stat}</p>
    </div>
  );
}

export default PokemonStat;
