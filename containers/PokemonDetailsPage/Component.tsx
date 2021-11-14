import { useState } from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import { defaultPageTitle } from '@utils/constant';
import Layout from '@components/Layout';
import Card from '@components/Card';
import { fetchPokemonList } from './Container';
import type { IParams } from '@interfaces/iparams';

const Home: NextPage = () => {
  const [params, setParams] = useState<IParams>({
    limit: 100,
  });
  const { dataSource } = fetchPokemonList(params);

  return (
    <>
      <Head>
        <title key="page-title">{defaultPageTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        {dataSource?.map(
          ({ id, pokemonId, name, color, types }: any) => (
            <Card
              color={color}
              name={name}
              pokemonId={pokemonId}
              id={id}
              types={types}
              key={`${id}-${name}`}
            />
          )
        )}
      </Layout>
    </>
  );
};

export default Home;
