import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_POKEMON } from '@utils/query';
import Head from 'next/head';
import { NextPage } from 'next';
import Layout from '@components/Layout';
import { useRouter } from 'next/router';
import PokemonDetails from '@components/PokemonDetails';

const PokemonDetailsPage: NextPage = () => {
  const router = useRouter();
  const { name } = router.query;

  const [pokemonDataDetails, setPokemonDataDetails] = useState<any>();

  const { loading } = useQuery(GET_POKEMON, {
    variables: { name: String(name).toLowerCase() },
    fetchPolicy: 'cache-and-network',
    onCompleted: (data) => {
      setPokemonDataDetails(data.species[0]);
    },
  });

  console.log(pokemonDataDetails);

  return (
    <>
      <Head>
        <title key="page-title">Bulbasaur</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout loading={loading}>
        <PokemonDetails />
      </Layout>
    </>
  );
};

export default PokemonDetailsPage;
