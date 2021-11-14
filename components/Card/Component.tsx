import React from 'react';
import Images from 'next/image';
import * as Styled from './styles';
import Router from 'next/router';
import Badge from '@components/Badge';

interface ICard {
  color: string;
  name: string;
  pokemonId: string;
  id: number;
  types: {
    color: string;
    type: string;
  }[];
}

const Component = ({ color, name, pokemonId, id, types }: ICard) => (
  <Styled.Container color={color} onClick={() => Router.push(`/${name}`)}>
    <Images
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
      alt={name}
      loading="lazy"
      width="82px"
      height="82px"
    />
    <Styled.Content>
      <Styled.PokemonId>{pokemonId}</Styled.PokemonId>
      <Styled.PokemonName>{name}</Styled.PokemonName>
      <Badge types={types} />
    </Styled.Content>
  </Styled.Container>
);

export default Component;
