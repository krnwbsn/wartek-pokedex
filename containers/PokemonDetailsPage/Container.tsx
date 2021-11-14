import { useQuery } from '@apollo/client';
import { GET_POKEMON_LIST } from '@utils/query';
import {
  getFormattedId,
  getPokemonTypeColor,
  formattedName,
} from '@utils/formatter';
import type { IParams } from '@interfaces/iparams';

export const fetchPokemonList = (params: IParams) => {
  const { data, loading, error } = useQuery(GET_POKEMON_LIST, {
    variables: params,
    fetchPolicy: 'network-only',
  });

  let dataSerializer;

  if (data) {
    dataSerializer = data.species.map((data: any) => {
      const pokemonTypes = data.pokemons[0].types.map(
        ({ type }: any) => type.name
      );
      const pokemonTypeColor = getPokemonTypeColor(pokemonTypes);
      const pokemonColor = pokemonTypeColor.map(({ color }: any) => color)[0];

      return {
        id: data.id,
        pokemonId: getFormattedId(data.id),
        name: formattedName(data.name),
        types: getPokemonTypeColor(pokemonTypes),
        color: pokemonColor,
      };
    });
  }

  return { dataSource: dataSerializer, loading, error };
};
