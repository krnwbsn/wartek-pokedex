import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_POKEMON } from '@utils/query';
import Head from 'next/head';
import { NextPage } from 'next';
import Layout from '@components/Layout';
import { useRouter } from 'next/router';
import PokemonDetails from '@components/PokemonDetails';
import {
  getFormattedId,
  getPokemonTypeColor,
  formattedName,
} from '@utils/formatter';
import type {
  IEggGroup,
  ISpecies,
  ITypes,
  IStats,
  IAbilities,
} from '@interfaces/ipokemondetails';

const PokemonDetailsPage: NextPage = () => {
  const router = useRouter();
  const { name } = router.query;

  const [pokemonDataDetails, setPokemonDataDetails] = useState<ISpecies>();

  const { loading } = useQuery(GET_POKEMON, {
    variables: { name: String(name).toLowerCase() },
    fetchPolicy: 'cache-and-network',
    onCompleted: (data) => {
      setPokemonDataDetails(data.species[0]);
    },
  });

  let dataSource;

  if (pokemonDataDetails) {
    const pokemonTypes = pokemonDataDetails.pokemons[0].types.map(
      ({ type }: ITypes) => type.name
    );
    const eggGroups = pokemonDataDetails.egg_groups
      .map(({ group }: IEggGroup) => group.name)
      .join(', ');
    const stats = pokemonDataDetails.pokemons[0].stats.map(
      ({ stat, base_stat }: IStats) => ({
        key: stat.name,
        value: base_stat,
      })
    );
    const abilities = pokemonDataDetails.pokemons[0].abilities
      .map(({ ability }: IAbilities) => ability.name)
      .join(', ');

    dataSource = {
      id: pokemonDataDetails.id,
      pokemonId: getFormattedId(pokemonDataDetails.id),
      pokemonName: formattedName(pokemonDataDetails.name),
      description: pokemonDataDetails.description[0].flavor_text,
      eggGroups,
      eggCycle: pokemonDataDetails.hatch_counter,
      height: pokemonDataDetails.pokemons[0].height,
      weight: pokemonDataDetails.pokemons[0].weight,
      types: getPokemonTypeColor(pokemonTypes),
      stats,
      abilities,
    };
  }

  const {
    id,
    pokemonId,
    pokemonName,
    description,
    eggGroups,
    eggCycle,
    height,
    weight,
    types,
    stats,
    abilities,
  } = dataSource || {};

  return (
    <>
      <Head>
        <title key="page-title">Bulbasaur</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout loading={loading}>
        {dataSource && (
          <PokemonDetails
            id={id}
            pokemonId={pokemonId}
            pokemonName={pokemonName}
            description={description}
            eggGroups={eggGroups}
            eggCycle={eggCycle}
            height={height}
            weight={weight}
            types={types}
            stats={stats}
            abilities={abilities}
          />
        )}
      </Layout>
    </>
  );
};

export default PokemonDetailsPage;
