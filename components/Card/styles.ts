import styled from 'styled-components';

interface ICardStyle {
  color: string;
}

export const Container = styled.div<ICardStyle>`
  width: 200px;
  height: 100%;
  background-color: ${({ color }) => (color ? color : '#fff')}80;
  padding: 16px;
  margin: 8px;
  border-radius: 8px;
  display: inline-block;
  cursor: pointer;
`;

export const Content = styled.div`
  text-align: left;
`;

export const PokemonId = styled.p`
  margin: 0px;
  font-size: 12px;
`;

export const PokemonName = styled.h2`
  margin: 0px;
  font-size: 18px;
`;

export const TypeBadge = styled.div`
  background-color: ${({ color }) => (color ? color : '#000')};
  border-radius: 8px;
  font-size: 8px;
  color: white;
  width: auto;
  padding: 2px 8px;
  margin-right: 4px;
`;

export const BadgesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 4px 0px;
`;
