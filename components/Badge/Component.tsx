import React from 'react';
import * as Styled from './styles';

const Badge = ({ types }: any) => (
  <Styled.BadgesContainer>
    {types.map(({ color, type }: any, index: number) => (
      <Styled.TypeBadge color={color} key={`${type}-${color}-${index}`}>
        {type}
      </Styled.TypeBadge>
    ))}
  </Styled.BadgesContainer>
);

export default Badge;
