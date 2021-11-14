import React from 'react';
import Images from 'next/image';
import * as Styled from './styles';

interface ICard {
  color: string;
}

const Component = ({ color = '#fff' }: ICard) => (
  <Styled.Container color={color}>
    <Images
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
      alt="bulbasaur"
      loading="lazy"
      width="82px"
      height="82px"
    />
    <Styled.Content>
      <Styled.PokemonId>#001</Styled.PokemonId>
      <Styled.PokemonName>bulbasaur</Styled.PokemonName>
      <Styled.BadgesContainer>
        <Styled.TypeBadge>Grass</Styled.TypeBadge>
        <Styled.TypeBadge>Fire</Styled.TypeBadge>
      </Styled.BadgesContainer>
    </Styled.Content>
  </Styled.Container>
);

export default Component;
