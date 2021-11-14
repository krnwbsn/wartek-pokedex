import React from 'react';
import Images from 'next/image';
import * as Styled from './styles';
import { useRouter } from 'next/router';

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

const Component = ({ color, name, pokemonId, id, types }: ICard) => {
  const Router = useRouter();

  return (
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
        <Styled.BadgesContainer>
          {types.map(({ color, type }: any, index: number) => (
            <Styled.TypeBadge color={color} key={`${type}-${color}-4{index}`}>
              {type}
            </Styled.TypeBadge>
          ))}
        </Styled.BadgesContainer>
      </Styled.Content>
    </Styled.Container>
  );
};

export default Component;
