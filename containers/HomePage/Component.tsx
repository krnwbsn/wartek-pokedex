import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_POKEMON_LIST } from '@utils/query';
import Head from 'next/head';
import { NextPage } from 'next';
import { defaultPageTitle } from '@utils/constant';
import Layout from '@components/Layout';
import Card from '@components/Card';
import {
  getFormattedId,
  getPokemonTypeColor,
  formattedName,
} from '@utils/formatter';
import Loader from 'react-loader-spinner';
import * as Styled from './styles';
import type { IParams } from '@interfaces/iparams';

const Home: NextPage = () => {
  const [params, setParams] = useState<IParams>({
    limit: 100,
  });

  const [pokemonData, setPokemonData] = useState<any>();

  const { loading } = useQuery(GET_POKEMON_LIST, {
    variables: params,
    fetchPolicy: 'cache-and-network',
    onCompleted: (data) => {
      setPokemonData(data);
    },
  });

  let dataSource;

  if (pokemonData) {
    dataSource = pokemonData.species.map((data: any) => {
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

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setParams({ limit: params.limit + 100 });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [params]);

  return (
    <>
      <Head>
        <title key="page-title">{defaultPageTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <>
          {dataSource?.map(({ id, pokemonId, name, color, types }: any) => (
            <Card
              color={color}
              name={name}
              pokemonId={pokemonId}
              id={id}
              types={types}
              key={`${id}-${name}`}
            />
          ))}
          {loading && (
            <Styled.LoadingContainer>
              <Loader
                type="ThreeDots"
                color="#ffcb05"
                height={200}
                width={200}
              />
            </Styled.LoadingContainer>
          )}
        </>
      </Layout>
    </>
  );
};

export default Home;
