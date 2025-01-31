import { capitalizeFirstLetter } from "../utils/capitalizeWords";

function PokemonStat({ stat }: { stat: any }) {
  const width = {
    width: `${(stat.base_stat / 255) * 100}%`,
  };

  return (
    <div>
      <p className="font-semibold">{capitalizeFirstLetter(stat.stat.name)}</p>
      <div className="bg-gray-200 rounded-full h-4 mt-1">
      <div className={`rounded-full h-4 stat-${stat.stat.name}`} style={width}></div>
      </div>
      <p className="text-sm text-right">{stat.base_stat}</p>
    </div>
  );
}

export default PokemonStat;
