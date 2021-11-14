import React from 'react';
import * as Styled from './styles';
import type { IType } from '@interfaces/itype';

interface IBadge {
  types: IType[];
}

const Badge = ({ types }: IBadge) => (
  <Styled.BadgesContainer>
    {types.map((item: IType, index: number) => (
      <Styled.TypeBadge
        color={item.color}
        key={`${item.type}-${item.color}-${index}`}
      >
        {item.type}
      </Styled.TypeBadge>
    ))}
  </Styled.BadgesContainer>
);

export default Badge;
