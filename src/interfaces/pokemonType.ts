export interface PokemonDataType {
  id: number;
  name: string;
  weight: string;
  height: string;
  stats: StatsDataType[];
  abilities: { is_hidden: boolean; slot: number; ability: { name: string } }[];
  types: { slot: number; type: { name: string } }[];
  sprites: { front_default: string };
}

export interface StatsDataType {
  base_stat: number;
  stat: { name: string };
}
