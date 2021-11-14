import React, { Fragment, useState } from 'react';
import Images from 'next/image';
import * as Styled from './styles';
import { menus } from '@utils/constant';
import ProgressBar from '@components/ProgressBar';
import Router from 'next/router';
import Badge from '@components/Badge';
import type { IType } from '@interfaces/itype';
import type { IKeyValue } from '@interfaces/ikeyvalue';

interface IPokemonDetails {
  id: number;
  pokemonId: string;
  pokemonName: string;
  description: string;
  eggGroups: string;
  eggCycle: number;
  height: number;
  weight: number;
  types: IType[];
  stats: IKeyValue[];
  abilities: string;
}

const PokemonDetails = ({
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
}: IPokemonDetails) => {
  const [menu, setMenu] = useState(menus[0].key);

  return (
    <Styled.Container color="#fff111" key={id}>
      <Styled.Nav>
        <Images
          src="/arrow-left.png"
          width="20px"
          height="16px"
          alt="Arrow Left"
          onClick={() => Router.push('/')}
        />
      </Styled.Nav>
      <Styled.PokemonId>{pokemonId}</Styled.PokemonId>
      <Styled.PokemonName>{pokemonName}</Styled.PokemonName>
      <Badge types={types} />
      <Styled.ImageContainer>
        <Images
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          alt={pokemonName}
          loading="lazy"
          width="256px"
          height="256px"
        />
      </Styled.ImageContainer>
      <Styled.PokemonDescription>
        <Styled.Menus>
          {menus.map(({ key, value }: IKeyValue, index: number) => (
            <Styled.Menu
              key={`${index}-${key}`}
              isActive={menu === key}
              onClick={() => setMenu(String(key))}
            >
              {value}
            </Styled.Menu>
          ))}
        </Styled.Menus>
        <Styled.Content>
          {menu === menus[0].key && (
            <>
              <Styled.Description>{description}</Styled.Description>
              <Styled.Details>Height: {height}m</Styled.Details>
              <Styled.Details>Weight: {weight}kg</Styled.Details>
              <Styled.Details>Abilities: {abilities}</Styled.Details>
              <Styled.Header4>Breedings</Styled.Header4>
              <Styled.Details>Gender: ♂87.5% ♀12.5%</Styled.Details>
              <Styled.Details>Egg Groups: {eggGroups}</Styled.Details>
              <Styled.Details>Egg Cycles: {eggCycle}</Styled.Details>
            </>
          )}
          {menu === menus[1].key && (
            <>
              {stats.map(({ key, value }: IKeyValue) => (
                <Fragment key={`${value}-${key}`}>
                  <Styled.Details>{key}</Styled.Details>
                  <ProgressBar completed={Number(value)} />
                </Fragment>
              ))}
            </>
          )}
        </Styled.Content>
      </Styled.PokemonDescription>
    </Styled.Container>
  );
};

export default PokemonDetails;
