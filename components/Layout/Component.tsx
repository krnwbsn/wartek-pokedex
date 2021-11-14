import React from 'react';
import Images from 'next/image';
import * as Styled from './styles';
import Loader from 'react-loader-spinner';
import { useRouter } from 'next/router';

export interface ILayout {
  children: JSX.Element;
  loading: boolean;
}

const Component = ({ children, loading }: ILayout) => {
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
        {loading && (
          <Styled.LoadingContainer>
            <Loader type="ThreeDots" color="#ffcb05" height={200} width={200} />
          </Styled.LoadingContainer>
        )}
        <div>{children}</div>
      </Styled.Content>
    </Styled.Container>
  );
};

export default Component;
