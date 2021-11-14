import React from 'react';
import * as Styled from './styles';

interface IProgressBar {
  completed: number;
}

const ProgressBar = ({ completed }: IProgressBar) => {
  const abilityValue = completed / 3;

  return (
    <Styled.Container>
      <Styled.Filter completed={abilityValue}>
        <Styled.Label>{completed}%</Styled.Label>
      </Styled.Filter>
    </Styled.Container>
  );
};

export default ProgressBar;
