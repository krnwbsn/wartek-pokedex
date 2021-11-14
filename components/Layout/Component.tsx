import React from 'react';
import Images from 'next/image';
import * as Styled from './styles';

export interface ILayout {
  children: JSX.Element[];
}

const Component = ({ children }: ILayout) => (
  <Styled.Container>
    <Styled.Header>
      <Images
        src="/pokemon-logo.png"
        alt="Pokemon Logo"
        width="154px"
        height="57px"
      />
    </Styled.Header>
    <Styled.Content>
      <div>{children}</div>
    </Styled.Content>
  </Styled.Container>
);

export default Component;
