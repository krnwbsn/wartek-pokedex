import React from 'react';
import Images from 'next/image';
import * as Styled from './styles';
import { useRouter } from 'next/router';

export interface ILayout {
  children: JSX.Element;
}

const Component = ({ children }: ILayout) => {
  const Router = useRouter();

  return (
    <Styled.Container>
      <Styled.Header>
        <Images
          src="/pokemon-logo.png"
          alt="Pokemon Logo"
          width="154px"
          height="57px"
          onClick={() => Router.push('/')}
        />
      </Styled.Header>
      <Styled.Content>
        <div>{children}</div>
      </Styled.Content>
    </Styled.Container>
  );
};

export default Component;
