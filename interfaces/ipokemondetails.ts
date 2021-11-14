export interface ITypes {
  type: {
    name: string;
  };
}

export interface IAbilities {
  ability: {
    name: string;
  };
}

export interface IStats {
  stat: {
    name: string;
  };
  base_stat: number;
}

export interface IEggGroup {
  group: {
    name: string;
  };
}

export interface IPokemons {
  id: number;
  height: number;
  weight: number;
  abilities: IAbilities[];
  stats: IStats[];
  types: ITypes[];
}

export interface ISpecies {
  id: number;
  name: string;
  hatch_counter: number;
  pokemons: IPokemons[];
  description: {
    flavor_text: string;
  }[];
  egg_groups: IEggGroup[];
}

export interface IPokemonDetailsData {
  species: ISpecies[];
}
