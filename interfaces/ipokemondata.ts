import type { IType } from './itype';

export interface ISpecies {
  id: number;
  name: string;
  pokemons: {
    id: number;
    types: {
      type: {
        name: string;
      };
    };
  };
}

export interface ISpeciesAggregate {
  aggregate?: {
    count: number;
  };
}

export interface IPokemonData {
  species: ISpecies[];
  species_aggregate: ISpeciesAggregate;
}

export interface IPokemonDataParsed {
  id: number;
  pokemonId: string;
  name: string;
  color: string;
  types: IType[];
}
