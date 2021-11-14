import React, { useState } from 'react';
import Images from 'next/image';
import * as Styled from './styles';
import { menus } from '@utils/constant';
import ProgressBar from '@components/ProgressBar';
import { useRouter } from 'next/router';
import Badge from '@components/Badge';

const PokemonDetails = () => {
  const Router = useRouter();
  const [menu, setMenu] = useState(menus[0].key);

  return (
    <Styled.Container color="#fff111">
      <Styled.Nav>
        <Images
          src="/arrow-left.png"
          width="20px"
          height="16px"
          alt="Arrow Left"
          onClick={() => Router.push('/')}
        />
      </Styled.Nav>
      <Styled.PokemonId>001</Styled.PokemonId>
      <Styled.PokemonName>Bulbasaur</Styled.PokemonName>
      <Badge
        types={[
          { type: 'normal', color: '#A8A77A' },
          { type: 'fire', color: '#EE8130' },
        ]}
      />
      <Styled.ImageContainer>
        <Images
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png`}
          alt="Bulbasaur"
          loading="lazy"
          width="256px"
          height="256px"
        />
      </Styled.ImageContainer>
      <Styled.PokemonDescription>
        <Styled.Menus>
          {menus.map(({ key, value }: any, index: number) => (
            <Styled.Menu
              key={`${index}-${key}`}
              isActive={menu === key}
              onClick={() => setMenu(key)}
            >
              {value}
            </Styled.Menu>
          ))}
        </Styled.Menus>
        <Styled.Content>
          {menu === menus[0].key && (
            <>
              <Styled.Description>
                It uses the fine hair that covers its body to sense air currents
                and predict its ene­ my's actions.
              </Styled.Description>
              <Styled.Details>Height: 2'11" (0.9 m)</Styled.Details>
              <Styled.Details>Weight: 58.4 lbs (26.5 kg)</Styled.Details>
              <Styled.Details>
                Abilities: synchronize, magic-bounce
              </Styled.Details>
              <Styled.Header4>Breedings</Styled.Header4>
              <Styled.Details>Gender: ♂87.5% ♀12.5%</Styled.Details>
              <Styled.Details>Egg Groups: ground</Styled.Details>
              <Styled.Details>
                Egg Cycles: 35 (8,925-8,995 steps)
              </Styled.Details>
            </>
          )}
          {menu === menus[1].key && (
            <>
              <Styled.Details>HP</Styled.Details>
              <ProgressBar completed="60" />
            </>
          )}
        </Styled.Content>
      </Styled.PokemonDescription>
    </Styled.Container>
  );
};

export default PokemonDetails;
