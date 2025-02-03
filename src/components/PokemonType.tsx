import { capitalizeFirstLetter } from "../utils/capitalizeWords";

interface props {
  typeName: string;
  active: boolean;
  onHandleActive: (name: string) => void;
}

function PokemonType({ typeName, active,onHandleActive }: props) {
  return (
    <button
      onClick={() => {
        onHandleActive(typeName);
      }}
      className={`px-3 no py-1 rounded-full text-sm font-semibold ${active ? typeName : ""}`}
    >
      {capitalizeFirstLetter(typeName)}
    </button>
  );
}

export default PokemonType;
