import React from 'react';
import * as Styled from './styles';

const ProgressBar = ({ completed }: any) => {
  return (
    <Styled.Container>
      <Styled.Filter completed={completed}>
        <Styled.Label>{completed}%</Styled.Label>
      </Styled.Filter>
    </Styled.Container>
  );
};

export default ProgressBar;
