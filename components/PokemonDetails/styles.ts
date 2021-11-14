import styled from 'styled-components';
import type { IStyleProps } from '@interfaces/istyleprops';

export const Container = styled.div<IStyleProps>`
  width: 480px;
  position: relative;
  margin: 0 auto;
  text-align: left;
  background-color: ${({ color }) => (color ? color : '#fff')}80;
  padding: 16px;

  @media only screen and (max-width: 479px) {
    width: 90%;
  }
`;

export const PokemonId = styled.p`
  margin: 8px 0px;
  font-size: 18px;
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const PokemonName = styled.h2`
  margin: 8px 0px;
  font-size: 24px;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 24px;
  width: 100%;
`;

export const PokemonDescription = styled.div`
  padding: 16px;
  border-radius: 8px;
  background-color: #fff;
`;

export const Menus = styled.div`
  display: flex;
`;

export const Menu = styled.div<IStyleProps>`
  padding: 8px;
  border-bottom: ${({ isActive }) => isActive && '2px solid #2a75bb'};
  cursor: pointer;
`;

export const Content = styled.div`
  padding: 12px;
`;

export const Description = styled.div`
  font-size: 12px;
`;

export const Details = styled.p`
  margin: 8px 0px;
  font-size: 12px;
`;

export const Header4 = styled.h4`
  margin: 8px 0px;
  font-size: 12px;
`;
