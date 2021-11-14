import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_POKEMON_LIST } from '@utils/query';
import type { IParams } from '@interfaces/iparams';

export const fetchPokemonList = (params: IParams) => {
  const [pokemonData, setPokemonData] = useState<any>();
  const [totalData, setTotalData] = useState<number>(0);

  const { loading } = useQuery(GET_POKEMON_LIST, {
    variables: params,
    fetchPolicy: 'cache-and-network',
    onCompleted: (data) => {
      setPokemonData(data?.species);
      setTotalData(data?.species_aggregate?.aggregate?.count);
    },
  });

  return { loading, pokemonData, totalData };
};
